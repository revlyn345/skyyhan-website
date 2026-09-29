"use client";

import Script from "next/script";
import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { zohoForm } from "@/lib/zoho";

declare global {
  interface Window {
    _wfa_fstprtcken?: Record<string, boolean>;
  }
}

/**
 * Bulk enquiry form. Submits straight to Skyyhan's Zoho CRM as a new Lead,
 * then Zoho redirects the visitor to /thank-you.
 * Field names (First Name, Last Name, Phone, Email, Company, Description)
 * must match Zoho exactly — don't rename them.
 */
export function EnquiryForm({ tall = false }: { tall?: boolean }) {
  const [sending, setSending] = useState(false);
  const formDomId = `webform${zohoForm.formId}`;

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    // Browser checks required fields and email format; stop double submits
    if (!form.checkValidity()) return;
    setSending(true);
  }

  return (
    <>
      <form
        id={formDomId}
        name={`WebToLeads${zohoForm.formId}`}
        action={zohoForm.action}
        method="POST"
        acceptCharset="UTF-8"
        onSubmit={onSubmit}
        className="space-y-8"
      >
        {Object.entries(zohoForm.hidden).map(([name, value]) => (
          <input key={name} type="hidden" name={name} value={value} />
        ))}
        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
        {/* Zoho honeypot: hidden from people, bots fill it in */}
        <input type="text" name={zohoForm.honeypotName} defaultValue="" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

        <div className="grid gap-8 sm:grid-cols-2">
          <label className="block">
            <span className="form-label">First name</span>
            <input name="First Name" required maxLength={40} autoComplete="given-name" className="form-input" placeholder="First name" />
          </label>
          <label className="block">
            <span className="form-label">Last name</span>
            <input name="Last Name" required maxLength={80} autoComplete="family-name" className="form-input" placeholder="Last name" />
          </label>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <label className="block">
            <span className="form-label">Phone</span>
            <input name="Phone" type="tel" required maxLength={30} autoComplete="tel" className="form-input" placeholder="+91" />
          </label>
          <label className="block">
            <span className="form-label">Email (optional)</span>
            <input name="Email" type="email" maxLength={100} autoComplete="email" className="form-input" placeholder="you@business.com" />
          </label>
        </div>
        <label className="block">
          <span className="form-label">Company (optional)</span>
          <input name="Company" maxLength={200} autoComplete="organization" className="form-input" placeholder="Your business name" />
        </label>
        <label className="block">
          <span className="form-label">Requirement</span>
          <textarea name="Description" className={`form-input resize-none ${tall ? "min-h-32" : "min-h-24"}`} placeholder="Product, quantity, colours, packaging..." />
        </label>

        <button
          type="submit"
          disabled={sending}
          className="group flex w-full items-center justify-between bg-accent px-6 py-5 font-display text-xl uppercase text-accent-foreground transition-colors hover:bg-primary disabled:opacity-60"
        >
          {sending ? "Sending…" : "Send enquiry"}
          <Send className="size-5 transition-transform group-hover:translate-x-1" />
        </button>
      </form>

      {/* Zoho form analytics (views and submissions in Zoho CRM) */}
      <Script id="zoho-wf-flag" strategy="afterInteractive">
        {`window._wfa_fstprtcken = window._wfa_fstprtcken || {}; window._wfa_fstprtcken[${zohoForm.formId}] = true;`}
      </Script>
      <Script id="wf_anal" src={zohoForm.analyticsSrc} strategy="lazyOnload" />
    </>
  );
}
