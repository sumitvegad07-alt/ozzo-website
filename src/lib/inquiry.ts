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
