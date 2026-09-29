import { NextResponse } from "next/server";

/**
 * Receives enquiries from the website form and emails them via Resend.
 * Set RESEND_API_KEY, ENQUIRY_TO_EMAIL and ENQUIRY_FROM_EMAIL in Vercel.
 */
const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bot filled the hidden honeypot: pretend success, send nothing
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const name = clean(body.name, 200);
  const contact = clean(body.contact, 200);
  const requirement = clean(body.requirement, 5000);
  if (!name || !contact) {
    return NextResponse.json({ error: "Add your name and a phone number or email." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL;
  const from = process.env.ENQUIRY_FROM_EMAIL ?? "Skyyhan Website <onboarding@resend.dev>";
  if (!apiKey || !to) {
    console.error("Enquiry email is not configured: set RESEND_API_KEY and ENQUIRY_TO_EMAIL.");
    return NextResponse.json({ error: "Online enquiries are not set up yet. Please visit us at F-40, Sector 8, Noida." }, { status: 503 });
  }

  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      ...(isEmail ? { reply_to: contact } : {}),
      subject: `New bulk enquiry from ${name}`,
      html: `<h2>New website enquiry</h2>
        <p><strong>Name / Company:</strong> ${escapeHtml(name)}</p>
        <p><strong>Phone or email:</strong> ${escapeHtml(contact)}</p>
        <p><strong>Requirement:</strong><br>${escapeHtml(requirement || "(not given)").replace(/\n/g, "<br>")}</p>`,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return NextResponse.json({ error: "The enquiry could not be sent. Please try again in a minute." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
