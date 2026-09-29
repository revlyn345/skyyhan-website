import Image from "next/image";
import { Check } from "lucide-react";
import heroBalloons from "@/assets/skyyhan-hero-balloons.jpg";
import production from "@/assets/skyyhan-production.jpg";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { Marquee } from "@/components/marquee";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { breadcrumbSchema, pageMetadata, publisherRef } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About Skyyhan Balloons | Latex Balloon Manufacturer in India",
  description:
    "Skyyhan Balloons Pvt Ltd is a latex balloon manufacturer in India with a daily capacity of 10 lakh balloons and in-house 3-colour balloon printing.",
  ogTitle: "About Skyyhan Balloons | Latex Balloon Manufacturer",
  ogDescription: "Latex balloon manufacturer with 10 lakh balloons daily capacity and in-house 3-colour printing.",
  path: "/about",
});

const factoryPoints = [
  "Daily capacity of 10 lakh balloons",
  "3-colour printing machine in-house",
  "In-house production and packing",
  "Quality checked batches",
  "Loose and retail packing",
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "About Us", path: "/about" }]),
          { "@context": "https://schema.org", "@type": "AboutPage", url: absoluteUrl("/about"), mainEntity: publisherRef },
        ]}
      />
      <SiteHeader />
      <PageHero
        title={<>About <span className="signal-shadow text-primary">Us</span></>}
        intro="We manufacture latex balloons in India, for wholesalers, retailers and decorators."
      />
      <Marquee />

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-6">
              <h2 className="font-display text-5xl uppercase leading-[0.9] md:text-7xl">Who we <span className="text-primary">are</span></h2>
              <div className="mt-8 space-y-5 font-body text-lg leading-relaxed text-muted-foreground">
                <p>Skyyhan Balloons Pvt Ltd is a latex balloon manufacturing company. We make solid colour, printed, pastel and modelling latex balloons for businesses that buy in bulk.</p>
                <p>Production and packing both happen in our factory. We print up to 3 colours in-house, so custom-branded balloons move without an outside printer.</p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <Image src={heroBalloons} alt="Red and blue latex balloons" placeholder="blur" sizes="(max-width: 1024px) 100vw, 50vw" className="h-full min-h-80 w-full object-cover" />
            </div>
          </div>

          <div className="mt-16 grid grid-cols-12 items-center gap-6">
            <div className="col-span-12 lg:col-span-7">
              <Image src={production} alt="Balloon manufacturing line" placeholder="blur" sizes="(max-width: 1024px) 100vw, 58vw" className="aspect-[3/2] w-full object-cover" />
            </div>
            <div className="col-span-12 lg:col-span-5 lg:pl-8">
              <h3 className="font-display text-4xl uppercase leading-[0.9] md:text-6xl">Our <span className="text-accent">factory</span></h3>
              <div className="mt-8 grid gap-5 font-body text-base">
                {factoryPoints.map((text) => (
                  <div key={text} className="flex gap-3 border-t border-foreground pt-4">
                    <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand heading={<>Need balloons in <span className="text-pop">bulk?</span></>} label="Contact us" />
      <SiteFooter />
    </main>
  );
}
