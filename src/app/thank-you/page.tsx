import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

// Zoho CRM redirects here after an enquiry. Not for search results.
export const metadata: Metadata = {
  title: { absolute: "Enquiry received | Skyyhan Balloons" },
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <SiteHeader />
      <PageHero
        title={<>Enquiry <span className="signal-shadow text-primary">received</span></>}
        intro="Thank you. Our team will reply with a quote or a few follow-up questions."
      />
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 sm:flex-row md:px-10">
          <Link href="/products" className="offset-button group inline-flex w-fit items-center gap-3 bg-accent px-7 py-5 font-display text-lg uppercase text-accent-foreground transition-transform hover:-translate-x-1 hover:-translate-y-1">
            Browse products <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="/resources/blog" className="group inline-flex w-fit items-center gap-3 border-2 border-foreground px-7 py-5 font-display text-lg uppercase transition-colors hover:bg-foreground hover:text-background">
            Read the blog <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
