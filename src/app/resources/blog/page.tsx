import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { posts } from "@/lib/posts";
import { breadcrumbSchema, pageMetadata, publisherRef } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Latex Balloon Blog | Skyyhan Balloons Pvt Ltd",
  description:
    "Articles about latex balloons from a manufacturer: choosing sizes, printed balloons for promotions, storage tips and packing options.",
  ogTitle: "Latex Balloon Blog | Skyyhan Balloons",
  ogDescription: "Articles about latex balloons: sizes, printing, storage and packing.",
  path: "/resources/blog",
});

export default function BlogPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Resources", path: "/resources" },
            { name: "Blog", path: "/resources/blog" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Skyyhan Balloons Blog",
            url: absoluteUrl("/resources/blog"),
            publisher: publisherRef,
            blogPost: posts.map((p) => ({
              "@type": "BlogPosting",
              headline: p.title,
              url: absoluteUrl(`/resources/blog/${p.slug}`),
              datePublished: p.date,
            })),
          },
        ]}
      />
      <SiteHeader />
      <PageHero
        title={<>The <span className="signal-shadow text-primary">Blog</span></>}
        intro="Practical notes on latex balloons for wholesalers, retailers and decorators."
      />

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid border-l border-t border-foreground md:grid-cols-2">
            {posts.map((post) => (
              <Link key={post.slug} href={`/resources/blog/${post.slug}`} className="group border-b border-r border-foreground bg-background p-7 transition-colors hover:bg-foreground hover:text-background md:p-9">
                <h2 className="font-display text-2xl uppercase leading-tight md:text-3xl">{post.title}</h2>
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
