import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getProduct, products } from "@/lib/products";
import { breadcrumbSchema, pageMetadata, publisherRef } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

// Pre-render every product page at build time (fast, fully crawlable HTML)
export const dynamicParams = false;
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return { title: "Not found", robots: { index: false } };
  return pageMetadata({
    title: `${product.name} | Latex Balloons | Skyyhan Balloons`,
    description: `${product.intro} Wholesale and bulk supply from Skyyhan Balloons Pvt Ltd, Noida, India.`,
    ogTitle: `${product.name} | Skyyhan Balloons`,
    ogDescription: product.intro,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductPage({ params }: Props) {
  const product = getProduct((await params).slug);
  if (!product) notFound();
  const others = products.filter((p) => p.slug !== product.slug);
  const [first, ...rest] = product.name.split(" ");
  const url = absoluteUrl(`/products/${product.slug}`);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Products", path: "/products" },
            { name: product.name, path: `/products/${product.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: `${product.name} Balloons`,
            description: product.intro,
            url,
            image: absoluteUrl(product.image.src),
            category: "Latex balloons",
            material: "Natural latex",
            brand: { "@type": "Brand", name: "Skyyhan" },
            manufacturer: publisherRef,
            additionalProperty: product.specs.map((s) => ({ "@type": "PropertyValue", name: s.label, value: s.value })),
          },
        ]}
      />
      <SiteHeader />
      <PageHero
        title={<>{first} <span className="signal-shadow text-primary">{rest.join(" ")}</span></>}
        titleClassName="text-[clamp(3rem,12vw,9rem)] leading-[0.8]"
        intro={product.intro}
      />

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-10 px-5 md:px-10">
          <div className="col-span-12 lg:col-span-7">
            <Image src={product.image} alt={product.imageAlt} priority placeholder="blur" sizes="(max-width: 1024px) 100vw, 58vw" className="aspect-[3/2] w-full object-cover" />
          </div>
          <div className="col-span-12 flex flex-col lg:col-span-5">
            <h2 className="font-display text-4xl uppercase leading-[0.9] md:text-5xl">What you <span className="text-primary">get</span></h2>
            <ul className="mt-8 grid gap-5 font-body text-base">
              {product.points.map((point) => (
                <li key={point} className="flex gap-3 border-t border-foreground pt-4">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                  <p>{point}</p>
                </li>
              ))}
            </ul>
            <dl className="mt-10 grid grid-cols-1 gap-px border border-foreground bg-foreground sm:grid-cols-2">
              {product.specs.map((spec) => (
                <div key={spec.label} className="bg-background p-5">
                  <dt className="font-display text-sm uppercase text-primary">{spec.label}</dt>
                  <dd className="mt-1 font-body text-sm text-muted-foreground">{spec.value}</dd>
                </div>
              ))}
            </dl>
            <Link
              href="/contact"
              className="offset-button group mt-10 inline-flex w-fit items-center gap-3 bg-primary px-7 py-5 font-display text-lg uppercase text-primary-foreground transition-transform hover:-translate-x-1 hover:-translate-y-1"
            >
              Enquire now <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-[1440px] px-5 md:px-10">
          <h2 className="font-display text-3xl uppercase md:text-4xl">Other <span className="text-accent">products</span></h2>
          <div className="mt-8 grid gap-px border border-foreground bg-foreground md:grid-cols-3">
            {others.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="group bg-background p-6 transition-colors hover:bg-foreground hover:text-background">
                <h3 className="font-display text-2xl uppercase">{p.name}</h3>
                <p className="mt-2 font-body text-sm text-muted-foreground transition-colors group-hover:text-background/70">{p.note}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
