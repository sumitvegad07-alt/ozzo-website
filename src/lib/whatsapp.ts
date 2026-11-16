import { contact } from "./site";

/**
 * Everything the site needs to put a visitor into a WhatsApp conversation
 * with the team, in one place.
 *
 * Two different things live here and they are easy to confuse, so they are
 * named apart on purpose:
 *
 *   `waLink()`      — a *click-to-chat* URL. The VISITOR's WhatsApp opens with
 *                     a message already typed; they tap send. The message then
 *                     arrives from the visitor's own number, which is the whole
 *                     point: the founder can reply to a real, reachable lead
 *                     instead of copying a number out of an email.
 *
 *   `leadAlertLines()` — the SERVER's copy of the same lead, sent from our own
 *                     WhatsApp Business number to the founder (see
 *                     `whatsapp-alert.ts`). This one needs no visitor action,
 *                     and it is what covers the people who fill the form and
 *                     never tap the WhatsApp button.
 *
 * Both render the same facts in the same order so the two messages read as one
 * system rather than two unrelated notifications.
 */

/** The team's WhatsApp, digits only — `contact.whatsappNumber` is the source of truth. */
export const WHATSAPP_NUMBER = contact.whatsappNumber;

/**
 * Build a click-to-chat URL.
 *
 * `https://wa.me/<number>` is WhatsApp's own documented short link and is the
 * right one for a website: it resolves to the native app on a phone and to
 * WhatsApp Web on a desktop, with no device sniffing on our side. (The older
 * `api.whatsapp.com/send` form does the same thing but shows an interstitial
 * page first, which costs a tap.)
 */
export function waLink(text?: string, number: string = WHATSAPP_NUMBER) {
  const base = `https://wa.me/${number}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

/**
 * The opening line for the floating button, which carries the page the
 * visitor was reading.
 *
 * Context matters more than politeness here: "I was on /plans" tells the
 * founder whether he is answering a pricing question or a feature question
 * before he has typed a word.
 */
export function floatingChatText(pagePath?: string) {
  const where =
    pagePath && pagePath !== "/" ? ` I was reading ${pagePath} on your site.` : "";
  return `Hi OZZO,${where} I'd like to know more.`;
}

export type LeadFields = {
  name: string;
  company?: string;
  email?: string;
  phone: string;
  teamSize?: string;
  message?: string;
  pagePath?: string;
};

/**
 * The lead, as labelled single-line rows.
 *
 * Returned as lines rather than one string because the two consumers need
 * different joins: a click-to-chat message wants real newlines, while a Meta
 * template parameter may not contain a newline at all and has to be collapsed.
 * Formatting it once and splitting it later would be the bug waiting to happen.
 */
export function leadAlertLines(data: LeadFields): [string, string][] {
  const rows: [string, string | undefined][] = [
    ["Name", data.name],
    ["Company", data.company],
    ["Phone", data.phone],
    ["Email", data.email],
    ["Team size", data.teamSize],
    ["Page", data.pagePath],
    ["Message", data.message],
  ];
  return rows
    .filter((r): r is [string, string] => Boolean(r[1] && r[1].trim()))
    .map(([k, v]) => [k, v.trim()]);
}

/**
 * The message the VISITOR sends us after submitting the form.
 *
 * Written in the visitor's voice ("Here are my details"), not ours, because it
 * is going to appear in their own chat history as something they said. A block
 * of third-person CRM fields sitting in your sent messages reads like spyware;
 * this reads like an introduction.
 */
export function inquiryChatText(data: LeadFields) {
  const lines = leadAlertLines(data)
    // The visitor knows their own name and which page they were on, and
    // repeating them back is noise in their own outbox.
    .filter(([k]) => k !== "Page")
    .map(([k, v]) => `${k}: ${v}`);
  return [
    `Hi OZZO, I just requested a callback on your website.`,
    ``,
    ...lines,
    ``,
    `Please get in touch.`,
  ].join("\n");
}
