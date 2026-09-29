import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { posts } from "@/lib/posts";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Resources | Skyyhan Balloons Pvt Ltd",
  description:
    "Guides, FAQs and articles about latex balloons from Skyyhan Balloons: manufacturing, sizes, printing, storage and packing.",
  ogTitle: "Resources | Skyyhan Balloons",
  ogDescription: "Guides, FAQs and articles about latex balloons and bulk ordering.",
  path: "/resources",
});

const guides = [
  { href: "/resources/faq", title: "FAQ", text: "Answers about our latex balloons, printing, capacity, packing and bulk orders.", cta: "Read the FAQ" },
  { href: "/how-latex-balloons-are-made", title: "How latex balloons are made", text: "From rubber tree sap to packed balloons: the full manufacturing process in 9 steps.", cta: "Read the guide" },
];

export default function ResourcesPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <JsonLd data={breadcrumbSchema([{ name: "Resources", path: "/resources" }])} />
      <SiteHeader />
      <PageHero
        title={<>Reso<span className="signal-shadow text-primary">urces</span></>}
        intro="Guides, answers and articles about latex balloons and bulk ordering."
      />

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid gap-px bg-foreground md:grid-cols-2">
            {guides.map((g) => (
              <Link key={g.href} href={g.href} className="group bg-background p-8 transition-colors hover:bg-foreground hover:text-background md:p-10">
                <h2 className="font-display text-3xl uppercase md:text-4xl">{g.title}</h2>
                <p className="mt-3 max-w-[40ch] font-body text-base text-muted-foreground transition-colors group-hover:text-background/70">{g.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-display text-sm uppercase text-primary">
                  {g.cta} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          <h2 className="mt-20 font-display text-4xl uppercase md:text-6xl">From the <span className="text-primary">blog</span></h2>
          <div className="mt-8 grid border-l border-t border-foreground md:grid-cols-2">
            {posts.map((post) => (
              <Link key={post.slug} href={`/resources/blog/${post.slug}`} className="group border-b border-r border-foreground bg-background p-7 transition-colors hover:bg-foreground hover:text-background">
                <h3 className="font-display text-2xl uppercase leading-tight md:text-3xl">{post.title}</h3>
                <p className="mt-4 max-w-[48ch] font-body text-base text-muted-foreground transition-colors group-hover:text-background/70">{post.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-display text-sm uppercase text-primary">
                  Read article <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
