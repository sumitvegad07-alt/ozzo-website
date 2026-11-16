import { WHATSAPP_NUMBER, leadAlertLines, type LeadFields } from "./whatsapp";

/**
 * "A lead just came in" — pushed to wherever the team will actually see it.
 *
 * ── What this is really for ───────────────────────────────────────────────
 * The inquiry is saved to Supabase and emailed through Resend before this
 * runs, so nothing here is about *storing* the lead. It is about the founder's
 * phone buzzing within seconds, because an inquiry that sits unread in a
 * webmail inbox until the evening has already lost to whoever replied first.
 *
 * ── Why several transports, all firing at once ────────────────────────────
 * Previously this file was whatsapp-alert.ts and picked ONE transport by
 * precedence. Both were wrong:
 *
 *   • The name was wrong. WhatsApp turned out to be the one channel that
 *     cannot work without a second phone number — a number registered to
 *     Meta's Cloud API can no longer be used in consumer WhatsApp, so the
 *     number printed on the site can receive alerts but can never send them.
 *     Naming the module after the channel that was hardest to get baked that
 *     one channel into the shape of the whole feature.
 *
 *   • The precedence was wrong. Configuring a second channel silently
 *     disabled the first, which is the opposite of what anyone setting up a
 *     second notification route wants. Alerts are not a fallback chain; a
 *     person who has set up two channels wants two.
 *
 * So: every configured transport fires, in parallel, and each reports its own
 * outcome. Adding one never switches another off.
 *
 * Configure none and this is a no-op — exactly how the Resend alert behaves
 * without a key. Nothing here may ever fail a submission.
 */

/** Hard ceiling per provider call, so a hanging API never holds up a visitor. */
const TIMEOUT_MS = 8000;

export type AlertOutcome = {
  transport: "telegram" | "webhook" | "whatsapp-cloud-api";
  ok: boolean;
  error?: string;
};

export async function sendLeadAlert(data: LeadFields): Promise<AlertOutcome[]> {
  const jobs: Promise<AlertOutcome>[] = [];

  if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
    jobs.push(run("telegram", () => postTelegram(data)));
  }
  if (process.env.WHATSAPP_ALERT_WEBHOOK_URL) {
    jobs.push(run("webhook", () => postWebhook(data)));
  }
  if (
    process.env.WHATSAPP_ALERT_TOKEN &&
    process.env.WHATSAPP_ALERT_PHONE_NUMBER_ID
  ) {
    jobs.push(run("whatsapp-cloud-api", () => postCloudApi(data)));
  }

  return Promise.all(jobs);
}

/**
 * Runs one transport and converts any throw into a reported outcome.
 *
 * Deliberately never rethrows: one dead provider must not stop the others
 * from delivering, and none of them may reach the visitor as an error.
 */
async function run(
  transport: AlertOutcome["transport"],
  fn: () => Promise<void>,
): Promise<AlertOutcome> {
  try {
    await fn();
    return { transport, ok: true };
  } catch (e) {
    return {
      transport,
      ok: false,
      error: e instanceof Error ? e.message : String(e),
    };
  }
}

/** The alert as plain text, for transports that take a ready-made message. */
export function leadAlertText(data: LeadFields) {
  const lines = leadAlertLines(data).map(([k, v]) => `${k}: ${v}`);
  // *bold* is WhatsApp's own markup and renders as bold in the chat.
  return [`*New OZZO website lead*`, ``, ...lines].join("\n");
}

// ────────────────────────────────────────────────────────────────────────
// Transport 1 — Telegram
// ────────────────────────────────────────────────────────────────────────

/**
 * Telegram Bot API.
 *
 * The recommended channel, and the only one that is free, officially
 * supported, and needs no extra phone number: a bot is created in the
 * Telegram app itself in about two minutes, and messages arrive as a normal
 * push notification. WhatsApp cannot do this without a second SIM; Telegram
 * needs nothing but the app.
 *
 * `chat_id` is the recipient. A bot may only write to someone who has pressed
 * Start on it first — so if this ever returns "chat not found", the usual
 * cause is that the chat was never opened, not a bad token.
 */
async function postTelegram(data: LeadFields) {
  const token = process.env.TELEGRAM_BOT_TOKEN!;
  const chatId = process.env.TELEGRAM_CHAT_ID!;

  const rows = leadAlertLines(data)
    .map(([k, v]) => `<b>${esc(k)}:</b> ${esc(v)}`)
    .join("\n");

  // A tappable tel: link, so answering the lead is one tap from the
  // notification rather than a copy-paste out of a message.
  const phone = data.phone.replace(/[^\d+]/g, "");
  const text =
    `🔔 <b>New OZZO website lead</b>\n\n${rows}\n\n` +
    `<a href="tel:${esc(phone)}">Call ${esc(data.name)}</a>`;

  const res = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        // Telegram caps a message at 4096 characters. The form lets `message`
        // run to 2000, so a long one plus the labels can approach it.
        text: text.slice(0, 4000),
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    },
  );
  if (!res.ok) {
    throw new Error(`Telegram responded ${res.status}: ${await safeText(res)}`);
  }
}

/**
 * Escapes the five characters Telegram's HTML mode treats as markup.
 *
 * Lead data is attacker-controlled free text: a company called `<b>` would
 * otherwise break the message, and an unbalanced tag makes Telegram reject
 * the whole send — a malformed name would silently cost a notification.
 */
function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ────────────────────────────────────────────────────────────────────────
// Transport 2 — a generic webhook
// ────────────────────────────────────────────────────────────────────────

/**
 * Any BSP, automation tool, or OZZO's own CRM.
 *
 * The body carries BOTH a rendered `text` and the structured `lead`, so the
 * receiving end can either forward the message as-is or map the fields into
 * its own template without this file needing to know which.
 */
async function postWebhook(data: LeadFields) {
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  const secret = process.env.WHATSAPP_ALERT_WEBHOOK_SECRET;
  if (secret) headers.Authorization = `Bearer ${secret}`;

  const res = await fetch(process.env.WHATSAPP_ALERT_WEBHOOK_URL!, {
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

// ────────────────────────────────────────────────────────────────────────
// Transport 3 — Meta WhatsApp Cloud API
// ────────────────────────────────────────────────────────────────────────

/**
 * Note the template vs. free-form split. WhatsApp only allows a free-form
 * message inside a 24-hour window opened by the recipient writing to us
 * first; a lead alert is business-initiated and will almost always fall
 * outside that, so a registered template is the correct and reliable form.
 * Free-form is kept only as a path for testing an unapproved setup, and says
 * so loudly in the log rather than failing mysteriously at 2am.
 */
async function postCloudApi(data: LeadFields) {
  const token = process.env.WHATSAPP_ALERT_TOKEN!;
  const phoneNumberId = process.env.WHATSAPP_ALERT_PHONE_NUMBER_ID!;
  const to = process.env.WHATSAPP_ALERT_TO || WHATSAPP_NUMBER;
  const template = process.env.WHATSAPP_ALERT_TEMPLATE;
  const version = process.env.WHATSAPP_ALERT_API_VERSION || "v21.0";

  const body = template
    ? {
        messaging_product: "whatsapp",
        to,
        type: "template",
        template: {
          name: template,
          language: { code: process.env.WHATSAPP_ALERT_TEMPLATE_LANG || "en" },
          components: [{ type: "body", parameters: templateParams(data) }],
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

  const res = await fetch(
    `https://graph.facebook.com/${version}/${phoneNumberId}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    },
  );
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
  return [
    data.name,
    data.phone,
    data.company,
    data.teamSize,
    data.pagePath,
    data.message,
  ].map((v) => ({ type: "text" as const, text: oneLine(v) }));
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
