/**
 * The team's email copy of a lead, via Resend.
 *
 * Lifted out of `app/api/inquiry/route.ts` on 20 November 2026 so the price
 * calculator's `/api/quote` route sends the same email as the demo form rather
 * than growing a second, drifting copy of it. The route-level behaviour is
 * unchanged: email is optional infrastructure, and a missing key or a dead
 * Resend simply means no email — never a failed submission, because by the time
 * this is called the lead is already safely in the database.
 */

import { brand } from "./site";
import { leadAlertLines, type LeadFields } from "./whatsapp";

export type LeadEmailOptions = {
  /** Line under the heading. Defaults to the demo-form wording. */
  intro?: string;
  /** Prefix before the lead's name in the subject. Defaults to "New lead". */
  subjectPrefix?: string;
};

export async function sendLeadEmail(
  data: LeadFields,
  options: LeadEmailOptions = {},
): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_NOTIFY_EMAIL;
  const from =
    process.env.INQUIRY_FROM_EMAIL || "OZZO Website <onboarding@resend.dev>";
  if (!apiKey || !to) return; // email disabled until configured

  const intro = options.intro ?? "A visitor asked your team to call them.";
  const subjectPrefix = options.subjectPrefix ?? "New lead";

  /**
   * The same rows, in the same order, as the WhatsApp and Telegram alerts —
   * `leadAlertLines` is shared on purpose, so the three channels read as one
   * system and a field added in one place appears in all of them.
   */
  const rows = leadAlertLines(data);

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:auto">
      <h2 style="margin:0 0 4px">New ${brand.name} website inquiry</h2>
      <p style="color:#666;margin:0 0 16px">${escapeHtml(intro)}</p>
      <table style="width:100%;border-collapse:collapse">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#888;white-space:nowrap;vertical-align:top">${escapeHtml(
                k,
              )}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#111">${escapeHtml(
                v,
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
      subject: `${subjectPrefix}: ${data.name}${data.company ? ` (${data.company})` : ""}`,
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
