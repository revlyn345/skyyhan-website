import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { Marquee } from "@/components/marquee";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { products } from "@/lib/products";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Latex Balloon Products | Skyyhan Balloons Pvt Ltd",
  description:
    "Our latex balloon range: classic solid colour, printed with your logo up to 3 colours, pastel shades and modelling balloons. Wholesale and bulk supply from Noida, India.",
  ogTitle: "Latex Balloon Products | Skyyhan Balloons",
  ogDescription: "Classic, printed, pastel and modelling latex balloons for wholesalers, retailers and decorators.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Products", path: "/products" }]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Skyyhan latex balloon ranges",
            itemListElement: products.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: p.name,
              url: absoluteUrl(`/products/${p.slug}`),
            })),
          },
        ]}
      />
      <SiteHeader />
      <PageHero
        title={<>Our <span className="signal-shadow text-primary">Products</span></>}
        intro="Four latex balloon ranges, made in our factory for wholesalers, retailers and decorators."
      />
      <Marquee />

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid gap-8 md:grid-cols-2">
            {products.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="group block border border-foreground bg-background">
                <Image src={p.image} alt={p.imageAlt} placeholder="blur" sizes="(max-width: 768px) 100vw, 50vw" className="aspect-[3/2] w-full object-cover" />
                <div className="flex items-center justify-between gap-4 p-6">
                  <div>
                    <h2 className="font-display text-3xl uppercase md:text-4xl">{p.name}</h2>
                    <p className="mt-2 font-body text-muted-foreground">{p.note}</p>
                  </div>
                  <ArrowRight className="size-6 shrink-0 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand heading={<>Need balloons in <span className="text-pop">bulk?</span></>} label="Contact us" />
      <SiteFooter />
    </main>
  );
}
