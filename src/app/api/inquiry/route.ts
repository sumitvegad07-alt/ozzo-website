import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { inquirySchema } from "@/lib/inquiry";
import { brand } from "@/lib/site";

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

  // Best-effort email alert (never blocks a successful submission).
  await sendTeamAlert(data).catch((e) =>
    console.error("[inquiry] email alert failed:", e),
  );

  return NextResponse.json({ ok: true });
}

async function sendTeamAlert(data: {
  name: string;
  company?: string;
  email?: string;
  phone: string;
  teamSize?: string;
  message?: string;
  pagePath?: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_NOTIFY_EMAIL;
  const from =
    process.env.INQUIRY_FROM_EMAIL || "OZZO Website <onboarding@resend.dev>";
  if (!apiKey || !to) return; // email disabled until configured

  const rows: [string, string | undefined][] = [
    ["Name", data.name],
    ["Company", data.company],
    ["Phone", data.phone],
    ["Email", data.email],
    ["Team size", data.teamSize],
    ["Message", data.message],
    ["Page", data.pagePath],
  ];
  const html = `
    <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:auto">
      <h2 style="margin:0 0 4px">New ${brand.name} website inquiry</h2>
      <p style="color:#666;margin:0 0 16px">A visitor asked your team to call them.</p>
      <table style="width:100%;border-collapse:collapse">
        ${rows
          .filter(([, v]) => v)
          .map(
            ([k, v]) =>
              `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#888;white-space:nowrap;vertical-align:top">${k}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#111">${escapeHtml(
                v!,
              )}</td></tr>`,
          )
          .join("")}
      </table>
    </div>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: to.split(",").map((s) => s.trim()),
      reply_to: data.email || undefined,
      subject: `New lead: ${data.name}${data.company ? ` (${data.company})` : ""}`,
      html,
    }),
  });
  if (!res.ok) {
    throw new Error(`Resend responded ${res.status}: ${await res.text()}`);
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");
}
