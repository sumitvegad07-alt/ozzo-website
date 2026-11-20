import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { quoteSchema } from "@/lib/inquiry";
import { sendLeadAlert } from "@/lib/lead-alert";
import { sendLeadEmail } from "@/lib/lead-email";
import { planById } from "@/lib/plans";
import { TERM_LABEL, quoteText, teamSizeBucket } from "@/lib/quote";
import type { LeadFields } from "@/lib/whatsapp";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * A quote request from the price calculator on /plans.
 *
 * It is the same lead as a demo-form submission and lands in the same table,
 * the same alerts and the same Google Analytics conversion — only the fields
 * asked for differ. The visitor gives a name and a WhatsApp number; the plan,
 * the exact user count and the billing term come from what they just built,
 * which makes this the best-qualified lead on the site: it arrives already
 * carrying the deal size.
 *
 * Why a separate route rather than a flag on /api/inquiry: that route's schema
 * requires an email address, and the whole point of this step is that it does
 * not. Loosening the shared schema would have made email optional on the demo
 * form too, where it is the only way to reply.
 *
 * WHAT GOES WHERE on the lead row, and why:
 *   product_interest — "CRM + SFA · Yearly". The column has been null on every
 *                      lead the site has ever taken, because no form asked.
 *                      A calculator lead can always fill it.
 *   team_size        — the bucket the exact user count falls in, so these
 *                      leads still appear in the team-size quality reporting
 *                      that everything downstream is built on.
 *   message          — the full quote as text, so the figures on the lead are
 *                      provably the ones the visitor was shown.
 *   source           — "quote-calculator", which is how this page's leads can
 *                      be counted apart from the rest in the database.
 */
export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = quoteSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form and try again.", issues: parsed.error.flatten() },
      { status: 422 },
    );
  }

  const data = parsed.data;

  // Honeypot: silently accept so bots learn nothing, but persist nothing.
  if (data.website && data.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const withDms = Boolean(data.withDms);
  const summary = quoteText(data.plan, data.users, data.term, withDms);
  const interest = `${planById(data.plan).name} · ${TERM_LABEL[data.term]}${
    withDms ? " · + DMS portal" : ""
  }`;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseKey) {
    console.error("[quote] Supabase env not configured");
    return NextResponse.json(
      { error: "We couldn't save that right now. Please try again shortly." },
      { status: 500 },
    );
  }

  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false },
  });

  const userAgent = request.headers.get("user-agent")?.slice(0, 500) ?? null;

  const { error } = await supabase.from("website_inquiries").insert({
    name: data.name,
    company: null,
    email: null,
    phone: data.phone,
    product_interest: interest,
    team_size: teamSizeBucket(data.users),
    message: summary,
    page_path: data.pagePath || "/plans",
    source: "quote-calculator",
    user_agent: userAgent,
  });

  if (error) {
    console.error("[quote] insert failed:", error.message);
    return NextResponse.json(
      { error: "We couldn't save that right now. Please try again shortly." },
      { status: 500 },
    );
  }

  /**
   * Alerts are best-effort and run together, exactly as on /api/inquiry: the
   * lead is already in the database, the visitor is waiting on this response,
   * and a stale Resend key or WhatsApp token must never show an error for
   * something that worked.
   */
  const lead: LeadFields = {
    name: data.name,
    phone: data.phone,
    teamSize: `${data.users} users (${teamSizeBucket(data.users)})`,
    message: summary,
    pagePath: data.pagePath || "/plans",
  };

  await Promise.allSettled([
    sendLeadEmail(lead, {
      subjectPrefix: "New QUOTE lead",
      intro: `A visitor priced their own team on the calculator and asked you to call them on WhatsApp. Interest: ${interest}.`,
    }).catch((e) => console.error("[quote] email alert failed:", e)),
    sendLeadAlert(lead)
      .then((outcomes) => {
        for (const o of outcomes) {
          if (!o.ok) {
            console.error(`[quote] ${o.transport} alert failed:`, o.error);
          }
        }
      })
      .catch((e) => console.error("[quote] lead alert failed:", e)),
  ]);

  return NextResponse.json({ ok: true });
}
