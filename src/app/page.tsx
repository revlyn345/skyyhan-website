import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import heroBalloons from "@/assets/skyyhan-hero-balloons.jpg";
import production from "@/assets/skyyhan-production.jpg";
import latexRange from "@/assets/skyyhan-latex-range.jpg";
import { EnquiryForm } from "@/components/enquiry-form";
import { Marquee } from "@/components/marquee";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { products } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Balloon Manufacturers in India | Skyyhan Balloons Pvt Ltd",
  description:
    "Skyyhan Balloons Pvt Ltd, latex balloon manufacturer in India. 10 lakh balloons daily, custom printed balloons up to 3 colours, wholesale and bulk orders.",
  ogTitle: "Balloon Manufacturers in India | Skyyhan Balloons",
  ogDescription: "Latex balloon manufacturer: 10 lakh balloons daily, 3-colour printing, wholesale and bulk orders.",
  path: "/",
});

const factoryPoints = [
  "Daily capacity of 10 lakh balloons",
  "3-colour printing machine in-house",
  "In-house production and packing",
  "Quality checked batches",
  "Loose and retail packing",
];

const customOptions = [
  ["Colour", "Single or mixed colour packs."],
  ["Print", "Logo and text printing, up to 3 colours."],
  ["Pack", "Bulk or retail pack sizes."],
] as const;

export default function HomePage() {
  return (
    <main id="top" className="overflow-hidden bg-background text-foreground">
      <SiteHeader />

      <section className="relative min-h-[780px] bg-hero pt-28 text-hero-foreground md:min-h-[900px]">
        <Image
          src={heroBalloons}
          alt="Red and blue Skyyhan balloons"
          priority
          fetchPriority="high"
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, 58vw"
          className="absolute right-0 top-0 h-full w-[58%] object-cover opacity-90 [mask-image:linear-gradient(to_right,transparent,black_24%)] max-md:w-full max-md:opacity-50"
        />
        <div className="hero-screen absolute inset-0" />
        <div className="relative z-10 mx-auto grid min-h-[690px] max-w-[1440px] grid-cols-12 items-center px-5 pb-24 md:px-10">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <h1 className="font-display text-[clamp(3.2rem,14vw,10rem)] uppercase leading-[0.78]">
              Skyyhan
              <br />
              <span className="signal-shadow text-primary">Balloons</span>
              <span className="sr-only"> – latex balloon manufacturer in India</span>
            </h1>
            <div className="mt-10 grid grid-cols-12 items-end gap-6">
              <p className="col-span-12 max-w-xl border-l-4 border-accent pl-5 font-body text-lg font-medium leading-relaxed text-hero-muted md:col-span-6 md:text-2xl">
                Latex balloon manufacturer in India, supplying wholesalers, retailers and decorators.
              </p>
              <div className="col-span-12 flex md:col-span-6 md:justify-end">
                <a
                  href="#enquiry"
                  className="offset-button group inline-flex items-center gap-3 bg-accent px-7 py-5 font-display text-lg uppercase text-accent-foreground transition-transform hover:-translate-x-1 hover:-translate-y-1"
                >
                  Start an enquiry <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <a
          href="#products"
          aria-label="See our product range"
          className="absolute bottom-16 left-1/2 z-20 grid size-12 -translate-x-1/2 place-items-center rounded-full border border-white/30 transition-colors hover:bg-primary"
        >
          <ArrowDown className="size-5" />
        </a>
      </section>

      <Marquee />

      <section id="products" className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-5">
              <h2 className="mt-4 max-w-xl font-display text-5xl uppercase leading-[0.9] md:text-7xl">
                Our <span className="text-primary">products</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <Image
                src={latexRange}
                alt="Red, blue, pastel and modelling latex balloons"
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="h-full min-h-80 w-full object-cover"
              />
            </div>
          </div>
          <div className="mt-8 grid border-l border-t border-foreground md:grid-cols-2 lg:grid-cols-4">
            {products.map((item) => (
              <Link
                key={item.slug}
                href={`/products/${item.slug}`}
                className="group border-b border-r border-foreground bg-background p-6 transition-colors hover:bg-foreground hover:text-background"
              >
                <h3 className="font-display text-3xl uppercase leading-none">{item.name}</h3>
                <p className="mt-4 max-w-[22ch] font-body text-base text-muted-foreground transition-colors group-hover:text-background/70">
                  {item.note}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="factory" className="relative bg-accent py-20 text-accent-foreground md:py-28">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-5 md:px-10">
          <div className="col-span-12 lg:col-span-7">
            <Image
              src={production}
              alt="Balloon manufacturing line"
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="aspect-[3/2] w-full object-cover"
            />
          </div>
          <div className="col-span-12 flex flex-col justify-between lg:col-span-5 lg:pl-8">
            <h2 className="mt-4 font-display text-5xl uppercase leading-[0.9] md:text-7xl">Manufac&shy;turing</h2>
            <div className="mt-12 grid gap-5 font-body text-base md:grid-cols-2 lg:grid-cols-1">
              {factoryPoints.map((text) => (
                <div key={text} className="flex gap-3 border-t border-blue-line pt-4">
                  <Check className="mt-0.5 size-5 shrink-0 text-pop" />
                  <p>{text}</p>
                </div>
              ))}
            </div>
            <Link href="/how-latex-balloons-are-made" className="group mt-8 inline-flex items-center gap-3 font-display text-lg uppercase text-pop md:text-xl">
              See how latex balloons are made <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section id="custom" className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid grid-cols-12 items-end gap-6">
            <div className="col-span-12 md:col-span-8">
              <h2 className="mt-4 font-display text-[clamp(3.4rem,8vw,8rem)] uppercase leading-[0.82]">
                Custom <span className="text-accent">orders</span>
              </h2>
            </div>
            <p className="col-span-12 max-w-md border-l-4 border-primary pl-5 font-body text-lg leading-relaxed text-muted-foreground md:col-span-4">
              Choose colours, sizes, printing and packing.
            </p>
          </div>
          <div className="mt-14 grid gap-px bg-foreground md:grid-cols-3">
            {customOptions.map(([title, text]) => (
              <div key={title} className="bg-surface p-7">
                <h3 className="font-display text-4xl uppercase">{title}</h3>
                <p className="mt-3 max-w-[28ch] font-body text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="enquiry" className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12">
          <div className="col-span-12 px-5 py-20 md:px-10 lg:col-span-7 lg:py-28">
            <h2 className="mt-4 font-display text-6xl uppercase leading-[0.86] md:text-8xl">
              Bulk <span className="text-pop">enquiry</span>
            </h2>
            <p className="mt-7 max-w-xl font-body text-lg text-primary-soft">Send your product, quantity and packing needs.</p>
          </div>
          <div className="col-span-12 bg-foreground px-5 py-20 text-background md:px-10 lg:col-span-5 lg:py-28">
            <EnquiryForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
