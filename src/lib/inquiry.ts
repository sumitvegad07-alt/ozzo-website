import { z } from "zod";
import { teamSizeOptions } from "./site";

/** Shared validation contract for the Book-a-demo / inquiry form. */
export const inquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(120),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  email: z.string().trim().min(1, "Please enter your email").email("Enter a valid email").max(200),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20)
    .regex(/^[+()\-\s\d]+$/, "Enter a valid phone number"),
  teamSize: z.enum(teamSizeOptions as [string, ...string[]], {
    message: "Please select your team size",
  }),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  pagePath: z.string().max(300).optional(),
  // Honeypot: must stay empty. Bots fill it.
  website: z.string().max(0).optional(),
});

export type InquiryInput = z.infer<typeof inquirySchema>;

/**
 * Validation contract for the price-calculator quote request.
 *
 * Deliberately a SEPARATE schema rather than a loosened `inquirySchema`.
 * Email stays required on the demo form, where it is the only way to send
 * anything; here the whole point is that a WhatsApp number is all we ask for,
 * because every extra field on this step costs leads at the exact moment
 * someone has just priced their own team. Sharing one schema would have meant
 * making email optional for both.
 *
 * The plan, user count and term are validated too, even though the visitor
 * picks them from controls rather than typing them: this route writes the
 * resulting figures onto the lead as text, and a quote with numbers nobody can
 * reproduce is worse than no quote.
 */
export const quoteSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(120),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid WhatsApp number")
    .max(20)
    .regex(/^[+()\-\s\d]+$/, "Enter a valid WhatsApp number"),
  plan: z.enum(["CRM", "WFA", "CRM_WFA", "SFA", "CRM_SFA"]),
  users: z.coerce.number().int().min(1, "Enter how many users").max(100_000),
  term: z.enum(["quarterly", "half_yearly", "yearly"]),
  withDms: z.boolean().optional(),
  pagePath: z.string().max(300).optional(),
  /**
   * Honeypot. Unlike `inquirySchema`'s, this one accepts a value so the route
   * can take the documented silent-accept branch: a `.max(0)` here would make
   * zod reject the bot with a 422 first and leave that branch unreachable.
   */
  website: z.string().max(200).optional(),
});

export type QuoteInput = z.infer<typeof quoteSchema>;
