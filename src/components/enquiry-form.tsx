"use client";

import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; message: string };

export function EnquiryForm({ tall = false }: { tall?: boolean }) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(body.error ?? "The enquiry could not be sent. Please try again.");
      form.reset();
      setStatus({ kind: "sent" });
    } catch (err) {
      setStatus({ kind: "error", message: err instanceof Error ? err.message : "The enquiry could not be sent." });
    }
  }

  if (status.kind === "sent") {
    return (
      <div role="status" className="space-y-4">
        <p className="font-display text-3xl uppercase">Enquiry sent</p>
        <p className="font-body text-lg text-background/70">We will reply with a quote or follow-up questions.</p>
        <button type="button" onClick={() => setStatus({ kind: "idle" })} className="font-body text-sm font-bold underline underline-offset-4 hover:text-primary">
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8" noValidate={false}>
      <label className="block">
        <span className="form-label">Name / Company</span>
        <input name="name" required autoComplete="organization" className="form-input" placeholder="Your name or business" />
      </label>
      <label className="block">
        <span className="form-label">Phone or email</span>
        <input name="contact" required autoComplete="email" className="form-input" placeholder="How should we reach you?" />
      </label>
      <label className="block">
        <span className="form-label">Requirement</span>
        <textarea name="requirement" className={`form-input resize-none ${tall ? "min-h-32" : "min-h-24"}`} placeholder="Product, quantity, colours, packaging..." />
      </label>
      {/* Honeypot: hidden from people, bots fill it in */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      {status.kind === "error" && (
        <p role="alert" className="font-body text-sm font-semibold text-primary">{status.message}</p>
      )}
      <button
        type="submit"
        disabled={status.kind === "sending"}
        className="group flex w-full items-center justify-between bg-accent px-6 py-5 font-display text-xl uppercase text-accent-foreground transition-colors hover:bg-primary disabled:opacity-60"
      >
        {status.kind === "sending" ? "Sending…" : "Send enquiry"}
        <Send className="size-5 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}
