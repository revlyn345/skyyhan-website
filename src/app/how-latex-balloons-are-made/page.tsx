import Image from "next/image";
import production from "@/assets/skyyhan-production.jpg";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { breadcrumbSchema, pageMetadata, publisherRef } from "@/lib/seo";
import { manufacturingSteps } from "@/lib/steps";
import { absoluteUrl } from "@/lib/site";

const path = "/how-latex-balloons-are-made";
const description =
  "How latex balloons are manufactured: liquid latex from rubber trees, dipping formers, vulcanizing, printing and packing. Explained by a latex balloon manufacturer in India.";

export const metadata = pageMetadata({
  title: "How Latex Balloons Are Made | Skyyhan Balloons",
  description,
  ogDescription: "From rubber tree sap to packed balloons: the full latex balloon manufacturing process.",
  path,
  type: "article",
});

export default function GuidePage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Resources", path: "/resources" },
            { name: "How latex balloons are made", path },
          ]),
          {
            // HowTo gives AI answer engines a clean, ordered version of the process
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How latex balloons are made",
            description,
            image: absoluteUrl(production.src),
            author: publisherRef,
            step: manufacturingSteps.map(([name, text], i) => ({
              "@type": "HowToStep",
              position: i + 1,
              name,
              text,
              url: `${absoluteUrl(path)}#step-${i + 1}`,
            })),
          },
        ]}
      />
      <SiteHeader />
      <PageHero
        title={<>How latex balloons <span className="signal-shadow text-primary">are made</span></>}
        titleClassName="text-[clamp(2.8rem,9vw,7.5rem)] leading-[0.82]"
        intro="From rubber tree sap to packed balloons, here is the journey of a latex balloon."
      />

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-10 px-5 md:px-10">
          <figure className="col-span-12 lg:col-span-7">
            <Image src={production} alt="Balloon manufacturing line" placeholder="blur" sizes="(max-width: 1024px) 100vw, 58vw" className="aspect-[3/2] w-full object-cover" />
            <figcaption className="mt-3 font-body text-sm text-muted-foreground">
              Balloons are dipped, dried and cured in continuous runs on production lines like this.
            </figcaption>
          </figure>
          <ol className="col-span-12 space-y-10 lg:col-span-5">
            {manufacturingSteps.map(([title, text], i) => (
              <li key={title} id={`step-${i + 1}`} className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-foreground pt-5">
                <span className="font-display text-4xl leading-none text-primary md:text-5xl" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-display text-xl uppercase md:text-2xl">{title}</h2>
                  <p className="mt-2 font-body text-base leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand heading={<>Want them with <span className="text-pop">your logo?</span></>} label="Start an enquiry" />
      <SiteFooter />
    </main>
  );
}
