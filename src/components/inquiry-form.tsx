"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { CheckCircle2, Loader2, ArrowRight, Phone } from "lucide-react";
import { teamSizeOptions, contact } from "@/lib/site";
import { inquirySchema } from "@/lib/inquiry";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const fieldBase =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30";

export function InquiryForm({
  compact = false,
  stack = false,
}: {
  compact?: boolean;
  /** Force all fields into a single full-width column (for narrow panels). */
  stack?: boolean;
}) {
  const pathname = usePathname();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setServerError("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || ""),
      company: String(fd.get("company") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      teamSize: String(fd.get("teamSize") || ""),
      message: String(fd.get("message") || ""),
      website: String(fd.get("website") || ""), // honeypot
      pagePath: pathname,
    };

    const parsed = inquirySchema.safeParse(payload);
    if (!parsed.success) {
      const flat = parsed.error.flatten().fieldErrors;
      const next: Record<string, string> = {};
      for (const [k, v] of Object.entries(flat)) if (v?.[0]) next[k] = v[0];
      setErrors(next);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setServerError(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-border bg-card p-8 text-center sm:p-10">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-success/15 text-success">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">
          Thanks — we&apos;ve got your details
        </h3>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          A member of our team will call you shortly to understand your needs and
          show you exactly how OZZO fits your business. No obligation.
        </p>
        <a
          href={`https://wa.me/${contact.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-bold text-foreground transition-colors hover:bg-muted"
        >
          <Phone className="h-4 w-4" /> Prefer now? Message us on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={cn(
        "rounded-3xl border border-border bg-card p-6 sm:p-8",
        compact && "sm:p-6",
      )}
    >
      {/* Honeypot — visually hidden, off-screen, not tabbable */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Do not fill this
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className={cn("grid gap-4", stack ? "grid-cols-1" : "sm:grid-cols-2")}>
        <Field label="Your name" error={errors.name} required>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="e.g. Rahul Sharma"
            className={fieldBase}
          />
        </Field>
        <Field label="Company" error={errors.company}>
          <input
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Your business name"
            className={fieldBase}
          />
        </Field>
        <Field label="Phone / WhatsApp" error={errors.phone} required>
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder="e.g. +91 98765 43210"
            className={fieldBase}
          />
        </Field>
        <Field label="Email" error={errors.email} required>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={fieldBase}
          />
        </Field>
        <Field label="Team size" error={errors.teamSize} required>
          <select
            name="teamSize"
            required
            className={cn(fieldBase, "appearance-none")}
            defaultValue=""
          >
            <option value="" disabled>
              Select…
            </option>
            {teamSizeOptions.map((o) => (
              <option key={o} value={o}>
                {o} people
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-4">
        <Field label="Anything you'd like us to know?" error={errors.message}>
          <textarea
            name="message"
            rows={compact ? 2 : 3}
            placeholder="Tell us about your team and what you're trying to fix…"
            className={cn(fieldBase, "resize-y")}
          />
        </Field>
      </div>

      {serverError && (
        <p className="mt-4 rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-primary/40 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Request a callback <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>

      <p className="mt-3 text-center text-xs text-muted-foreground">
        We&apos;ll only use your details to contact you about OZZO. No spam, ever.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
        {required && <span className="ml-0.5 text-primary">*</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
