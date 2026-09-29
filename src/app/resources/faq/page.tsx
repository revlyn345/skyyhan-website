import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { faqs } from "@/lib/faqs";
import { breadcrumbSchema, faqSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Latex Balloon FAQs | Skyyhan Balloons Pvt Ltd",
  description:
    "Answers about Skyyhan Balloons: latex-only manufacturing, 10 lakh balloons daily capacity, 3-colour logo printing, packing options and how to get a bulk quote.",
  ogTitle: "Latex Balloon FAQs | Skyyhan Balloons",
  ogDescription: "Answers about our latex balloons, printing, capacity, packing and bulk orders.",
  path: "/resources/faq",
});

export default function FaqPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Resources", path: "/resources" },
            { name: "FAQ", path: "/resources/faq" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <SiteHeader />
      <PageHero
        title={<>Common <span className="signal-shadow text-primary">Questions</span></>}
        intro="What buyers ask us most about our latex balloons and bulk orders."
      />

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 md:px-10">
          {faqs.map((f) => (
            // Answers stay in the HTML even when collapsed, so crawlers and AI engines read them
            <details key={f.q} className="group border-t border-foreground py-5 last:border-b">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-body text-lg font-semibold md:text-xl [&::-webkit-details-marker]:hidden">
                <h2 className="font-body text-lg font-semibold md:text-xl">{f.q}</h2>
                <span className="grid size-8 shrink-0 place-items-center border border-foreground font-display text-xl transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-4 max-w-3xl font-body text-base leading-relaxed text-muted-foreground md:text-lg">{f.a}</p>
            </details>
          ))}

          <div className="mt-14 flex flex-col items-start gap-6 bg-primary p-8 text-primary-foreground md:flex-row md:items-center md:justify-between md:p-10">
            <p className="font-display text-2xl uppercase leading-tight md:text-3xl">Have a question we did not cover?</p>
            <Link href="/contact" className="group inline-flex shrink-0 items-center gap-3 bg-accent px-6 py-4 font-display text-base uppercase text-accent-foreground transition-transform hover:-translate-x-1 hover:-translate-y-1">
              Ask us directly <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
