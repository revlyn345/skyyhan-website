import { MapPin } from "lucide-react";
import { EnquiryForm } from "@/components/enquiry-form";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { breadcrumbSchema, pageMetadata, publisherRef } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact Skyyhan Balloons | Bulk Latex Balloon Orders",
  description:
    "Contact Skyyhan Balloons Pvt Ltd, latex balloon manufacturer, for wholesale and bulk balloon orders, custom printed balloons and retail packing.",
  ogDescription: "Send your bulk latex balloon requirement: product, quantity, colours and packing.",
  path: "/contact",
});

const checklist = [
  "Product: plain, printed, pastel or modelling latex",
  "Quantity and size",
  "Colours, and print details if needed",
  "Packing: loose or retail",
];

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Contact Us", path: "/contact" }]),
          { "@context": "https://schema.org", "@type": "ContactPage", url: absoluteUrl("/contact"), mainEntity: publisherRef },
        ]}
      />
      <SiteHeader />
      <PageHero
        title={<>Contact <span className="signal-shadow text-primary">Us</span></>}
        intro="Tell us what you need and we will get back to you."
      />

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-10 px-5 md:px-10">
          <div className="col-span-12 lg:col-span-5">
            <h2 className="font-display text-5xl uppercase leading-[0.9] md:text-6xl">Send your <span className="text-primary">requirement</span></h2>
            <div className="mt-8 border-l-4 border-accent pl-5 font-body text-lg leading-relaxed text-muted-foreground">
              <p>To quote faster, include:</p>
            </div>
            <ul className="mt-6 space-y-4 font-body text-base text-muted-foreground">
              {checklist.map((item) => (
                <li key={item} className="border-t border-foreground pt-4">{item}</li>
              ))}
            </ul>
            <address className="mt-10 flex items-start gap-3 border-t border-foreground pt-6 font-body text-lg not-italic text-muted-foreground">
              <MapPin className="mt-1 size-5 shrink-0 text-primary" />
              {site.address.full}
            </address>
            {(site.phone || site.email) && (
              <p className="mt-4 flex flex-col gap-2 font-body text-lg text-muted-foreground">
                {site.phone && <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-primary">{site.phone}</a>}
                {site.email && <a href={`mailto:${site.email}`} className="hover:text-primary">{site.email}</a>}
              </p>
            )}
          </div>
          <div className="col-span-12 bg-foreground p-8 text-background md:p-12 lg:col-span-7">
            <EnquiryForm tall />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
