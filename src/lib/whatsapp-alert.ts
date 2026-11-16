import { WHATSAPP_NUMBER, leadAlertLines, type LeadFields } from "./whatsapp";

/**
 * Server-side "a lead just came in" alert, delivered to the team's WhatsApp.
 *
 * ── Why this exists alongside the click-to-chat button ────────────────────
 * The thank-you screen hands the visitor a pre-filled WhatsApp message to
 * send. That is the better of the two paths when it happens — the lead
 * arrives from the lead's own number, so a reply goes straight back to a
 * human who is holding their phone. But it needs one more tap, and a share of
 * visitors will never make it. This path needs nothing from the visitor at
 * all, so between them no inquiry can be filled in and silently missed.
 *
 * ── Why it is transport-agnostic ──────────────────────────────────────────
 * Sending a WhatsApp message from a server is not like sending an email: you
 * cannot just post to a number. It has to leave through a registered WhatsApp
 * Business sender, and which sender that is depends on commercial decisions
 * (own Cloud API number vs. a BSP) that should not be hard-coded into a
 * marketing site. So two transports are supported and selected by env:
 *
 *   1. WHATSAPP_ALERT_WEBHOOK_URL — POST the lead as JSON to anything: a BSP,
 *      an automation tool, or OZZO's own CRM. Picked first when set, because
 *      a deliberately configured webhook should always win over a fallback.
 *
 *   2. WHATSAPP_ALERT_TOKEN + WHATSAPP_ALERT_PHONE_NUMBER_ID — Meta's
 *      WhatsApp Cloud API directly, which is what OZZO already speaks
 *      elsewhere in the product.
 *
 * With neither configured this is a no-op and the inquiry still saves and
 * still emails — exactly how the Resend alert already behaves. Nothing here
 * is ever allowed to fail a submission.
 */

/** Hard ceiling on a provider call, so a hanging API never holds up a visitor. */
const TIMEOUT_MS = 8000;

export type AlertResult =
  | { sent: true; via: "webhook" | "cloud-api" }
  | { sent: false; reason: string };

export async function sendWhatsAppLeadAlert(
  data: LeadFields,
): Promise<AlertResult> {
  const webhook = process.env.WHATSAPP_ALERT_WEBHOOK_URL;
  const token = process.env.WHATSAPP_ALERT_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_ALERT_PHONE_NUMBER_ID;

  if (webhook) {
    await postWebhook(webhook, data);
    return { sent: true, via: "webhook" };
  }

  if (token && phoneNumberId) {
    await postCloudApi({ token, phoneNumberId, data });
    return { sent: true, via: "cloud-api" };
  }

  return { sent: false, reason: "no WhatsApp transport configured" };
}

/** The alert as plain text, for transports that take a ready-made message. */
export function leadAlertText(data: LeadFields) {
  const lines = leadAlertLines(data).map(([k, v]) => `${k}: ${v}`);
  // *bold* is WhatsApp's own markup and renders as bold in the chat.
  return [`*New OZZO website lead*`, ``, ...lines].join("\n");
}

/**
 * Transport 1 — a generic webhook.
 *
 * The body carries BOTH a rendered `text` and the structured `lead`, so the
 * receiving end can either forward the message as-is or map the fields into
 * its own template without this file needing to know which.
 */
async function postWebhook(url: string, data: LeadFields) {
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  // Optional shared secret, for a webhook that should not accept the public.
  const secret = process.env.WHATSAPP_ALERT_WEBHOOK_SECRET;
  if (secret) headers.Authorization = `Bearer ${secret}`;

  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({
      to: process.env.WHATSAPP_ALERT_TO || WHATSAPP_NUMBER,
      text: leadAlertText(data),
      lead: data,
    }),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!res.ok) {
    throw new Error(`webhook responded ${res.status}: ${await safeText(res)}`);
  }
}

/**
 * Transport 2 — Meta's WhatsApp Cloud API.
 *
 * Note the template vs. free-form split. WhatsApp only allows a free-form
 * message inside a 24-hour window opened by the recipient writing to us
 * first; a lead alert is business-initiated and will almost always fall
 * outside that, so a registered template is the correct and reliable form.
 * Free-form is kept only as a path for testing an unapproved setup, and says
 * so loudly in the log rather than failing mysteriously at 2am.
 */
async function postCloudApi({
  token,
  phoneNumberId,
  data,
}: {
  token: string;
  phoneNumberId: string;
  data: LeadFields;
}) {
  const to = process.env.WHATSAPP_ALERT_TO || WHATSAPP_NUMBER;
  const template = process.env.WHATSAPP_ALERT_TEMPLATE;
  const version = process.env.WHATSAPP_ALERT_API_VERSION || "v21.0";
  const url = `https://graph.facebook.com/${version}/${phoneNumberId}/messages`;

  const body = template
    ? {
        messaging_product: "whatsapp",
        to,
        type: "template",
        template: {
          name: template,
          language: { code: process.env.WHATSAPP_ALERT_TEMPLATE_LANG || "en" },
          components: [
            { type: "body", parameters: templateParams(data) },
          ],
        },
      }
    : {
        messaging_product: "whatsapp",
        to,
        type: "text",
        text: { preview_url: false, body: leadAlertText(data) },
      };

  if (!template) {
    console.warn(
      "[inquiry] WHATSAPP_ALERT_TEMPLATE is not set — sending free-form text, " +
        "which WhatsApp only delivers inside an open 24-hour window. Register a " +
        "UTILITY template and set this variable before relying on it.",
    );
  }

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!res.ok) {
    throw new Error(`Meta responded ${res.status}: ${await safeText(res)}`);
  }
}

/**
 * The six body parameters, in the order the registered template expects:
 *   {{1}} name  {{2}} phone  {{3}} company  {{4}} team size  {{5}} page  {{6}} message
 *
 * Two rules of Meta's that this function exists to satisfy, both of which
 * reject the whole message rather than degrading:
 *   • a parameter may not be empty — optional fields become an em dash;
 *   • a parameter may not contain a newline, a tab, or 4+ consecutive spaces
 *     — so every value is collapsed onto one line. (The template body itself
 *     supplies the line breaks, which is why the alert still reads as a list.)
 */
function templateParams(data: LeadFields) {
  const values = [
    data.name,
    data.phone,
    data.company,
    data.teamSize,
    data.pagePath,
    data.message,
  ];
  return values.map((v) => ({ type: "text" as const, text: oneLine(v) }));
}

function oneLine(v?: string) {
  const s = (v ?? "").replace(/\s+/g, " ").trim();
  // 1024 is Meta's per-parameter ceiling; the form already caps `message` at
  // 2000 characters, so this is the one field that can realistically exceed it.
  return s ? s.slice(0, 1024) : "—";
}

async function safeText(res: Response) {
  try {
    return (await res.text()).slice(0, 500);
  } catch {
    return "<no body>";
  }
}
