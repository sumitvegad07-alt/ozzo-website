import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { inquirySchema } from "@/lib/inquiry";
import { sendLeadAlert } from "@/lib/lead-alert";
import { sendLeadEmail } from "@/lib/lead-email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Handles a website inquiry:
 *   1. Validates input (zod) + honeypot spam check.
 *   2. Inserts into public.website_inquiries (RLS allows anon insert).
 *   3. Best-effort email alert to the team via Resend (if configured).
 *
 * Email is optional: if RESEND_API_KEY / INQUIRY_NOTIFY_EMAIL are not
 * set, the inquiry is still saved and the request succeeds.
 */
export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = inquirySchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form and try again.", issues: parsed.error.flatten() },
      { status: 422 },
    );
  }

  const data = parsed.data;

  // Honeypot: silently accept so bots don't learn, but skip persistence.
  if (data.website && data.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseKey) {
    console.error("[inquiry] Supabase env not configured");
    return NextResponse.json(
      { error: "We couldn't submit right now. Please try again shortly." },
      { status: 500 },
    );
  }

  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false },
  });

  const userAgent = request.headers.get("user-agent")?.slice(0, 500) ?? null;

  const { error } = await supabase.from("website_inquiries").insert({
    name: data.name,
    company: data.company || null,
    email: data.email || null,
    phone: data.phone,
    product_interest: null,
    team_size: data.teamSize || null,
    message: data.message || null,
    page_path: data.pagePath || null,
    source: "website",
    user_agent: userAgent,
  });

  if (error) {
    console.error("[inquiry] insert failed:", error.message);
    return NextResponse.json(
      { error: "We couldn't submit right now. Please try again shortly." },
      { status: 500 },
    );
  }

  // Best-effort alerts. Neither is allowed to fail a submission: the lead is
  // already safely in the database by this point, and a dead Resend key or an
  // expired WhatsApp token must never show the visitor an error for something
  // that did, in fact, work.
  //
  // They run together rather than one after the other because the visitor is
  // waiting on this response — sequential third-party calls would make them
  // wait out two timeouts instead of one.
  await Promise.allSettled([
    sendLeadEmail(data).catch((e) =>
      console.error("[inquiry] email alert failed:", e),
    ),
    // Every configured notification channel, each reporting its own
    // outcome. A channel that is down is logged by name rather than taking
    // the others with it — "the alert failed" is useless at 2am when three
    // are configured and one has a stale token.
    sendLeadAlert(data)
      .then((outcomes) => {
        for (const o of outcomes) {
          if (!o.ok) {
            console.error(`[inquiry] ${o.transport} alert failed:`, o.error);
          }
        }
      })
      .catch((e) => console.error("[inquiry] lead alert failed:", e)),
  ]);

  return NextResponse.json({ ok: true });
}

