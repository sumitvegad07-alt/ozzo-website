"use client";

import { useEffect, useState } from "react";
import { Bot, Sparkles, Check } from "lucide-react";
import { useInView } from "./use-in-view";

type Msg = { from: "them" | "me" | "ai"; text: string; meta?: string };

/** A shared-inbox WhatsApp thread building up, including the AI knowledge-base
 * assistant answering a routine question from uploaded docs. Grounded in the
 * shipped WhatsApp CRM: shared inbox, templates, AI assistant. */
const MSGS: Msg[] = [
  { from: "them", text: "Hi, need pricing on the 3-phase panel range." },
  { from: "me", text: "Sharing the catalogue and rate list now — quote to follow today.", meta: "Template · Priya" },
  { from: "them", text: "Great. What's the delivery lead time?" },
  { from: "ai", text: "Standard lead time is 5–7 working days for the 3-phase range." },
];

export function WhatsAppThread() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let n = 0;
    setShown(0);
    const id = setInterval(() => {
      n = n + 1;
      if (n > MSGS.length + 2) n = 0;
      setShown(n);
    }, 1300);
    return () => clearInterval(id);
  }, [inView]);

  return (
    <div ref={ref} className="mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-black/[0.08]">
      <div className="flex items-center gap-3 border-b border-border bg-card-2 px-5 py-3.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-success/15 text-success">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
            <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm0 2a8 8 0 1 1-4.2 14.8l-.3-.2-2.6.7.7-2.5-.2-.3A8 8 0 0 1 12 4Z" />
          </svg>
        </span>
        <div className="flex-1">
          <p className="text-sm font-bold text-foreground">Shared team inbox</p>
          <p className="text-[11px] text-muted-foreground">Vertex Electricals · Lead #204</p>
        </div>
        <span className="rounded-full bg-primary-soft px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary">Live</span>
      </div>

      <div className="flex min-h-[240px] flex-col gap-2.5 p-5">
        {MSGS.map((m, i) => {
          const visible = i < Math.min(shown, MSGS.length);
          if (!visible) return null;
          if (m.from === "them")
            return (
              <div key={i} className="max-w-[82%] rounded-2xl rounded-tl-sm bg-muted px-3.5 py-2.5 text-[13px] text-foreground" style={{ animation: "ozzo-feed-in 0.4s ease both" }}>
                {m.text}
              </div>
            );
          if (m.from === "me")
            return (
              <div key={i} className="ml-auto max-w-[82%]" style={{ animation: "ozzo-feed-in 0.4s ease both" }}>
                <div className="rounded-2xl rounded-tr-sm bg-primary px-3.5 py-2.5 text-[13px] text-primary-foreground">{m.text}</div>
                {m.meta && (
                  <p className="mt-1 flex items-center justify-end gap-1 text-[10px] text-muted-foreground">
                    <Sparkles className="h-2.5 w-2.5 text-primary" /> {m.meta} <Check className="h-3 w-3 text-success" />
                  </p>
                )}
              </div>
            );
          return (
            <div key={i} className="max-w-[88%]" style={{ animation: "ozzo-feed-in 0.4s ease both" }}>
              <div className="flex items-start gap-2 rounded-2xl rounded-tl-sm border border-primary/20 bg-primary-soft px-3.5 py-2.5">
                <Bot className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p className="text-[13px] leading-snug text-foreground">{m.text}</p>
                  <p className="mt-1 text-[10px] font-semibold text-primary">AI assistant · from your knowledge base</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
