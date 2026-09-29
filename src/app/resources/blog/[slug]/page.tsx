import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getPost, posts } from "@/lib/posts";
import { breadcrumbSchema, pageMetadata, publisherRef } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return { title: "Article not found", robots: { index: false } };
  return pageMetadata({
    title: `${post.title} | Skyyhan Balloons`,
    description: post.excerpt,
    ogTitle: post.title,
    path: `/resources/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
  });
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 2);
  const path = `/resources/blog/${post.slug}`;

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Resources", path: "/resources" },
            { name: "Blog", path: "/resources/blog" },
            { name: post.title, path },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            dateModified: post.date,
            inLanguage: "en-IN",
            mainEntityOfPage: absoluteUrl(path),
            image: absoluteUrl("/og-image.jpg"),
            author: { "@type": "Organization", name: "Skyyhan Balloons Pvt Ltd", url: absoluteUrl("/about") },
            publisher: publisherRef,
            articleBody: post.body.join("\n\n"),
          },
        ]}
      />
      <SiteHeader />

      <article>
        <header className="relative bg-hero pt-36 pb-20 text-hero-foreground md:pt-44 md:pb-28">
          <div className="mx-auto max-w-4xl px-5 md:px-10">
            <Link href="/resources/blog" className="group inline-flex items-center gap-2 font-body text-sm font-semibold text-hero-muted transition-colors hover:text-primary">
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" /> All articles
            </Link>
            <h1 className="mt-8 font-display text-[clamp(2.4rem,7vw,5.5rem)] uppercase leading-[0.85]">{post.title}</h1>
            <p className="mt-8 max-w-xl border-l-4 border-accent pl-5 font-body text-lg font-medium leading-relaxed text-hero-muted md:text-xl">{post.excerpt}</p>
            <p className="mt-6 font-body text-sm text-hero-muted">
              By Skyyhan Balloons · <time dateTime={post.date}>{formatDate(post.date)}</time>
            </p>
          </div>
        </header>

        <section className="bg-surface py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-5 md:px-10">
            <div className="space-y-8">
              {post.body.map((paragraph, i) => (
                <p key={i} className="font-body text-lg leading-relaxed text-foreground/90 md:text-xl">{paragraph}</p>
              ))}
            </div>

            <div className="mt-16 flex flex-col items-start gap-6 bg-primary p-8 text-primary-foreground md:flex-row md:items-center md:justify-between md:p-10">
              <p className="font-display text-2xl uppercase leading-tight md:text-3xl">Buying latex balloons in bulk?</p>
              <Link href="/contact" className="group inline-flex shrink-0 items-center gap-3 bg-accent px-6 py-4 font-display text-base uppercase text-accent-foreground transition-transform hover:-translate-x-1 hover:-translate-y-1">
                Get a quote <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <h2 className="mt-20 font-display text-3xl uppercase md:text-4xl">More <span className="text-primary">articles</span></h2>
            <div className="mt-8 grid border-l border-t border-foreground md:grid-cols-2">
              {others.map((p) => (
                <Link key={p.slug} href={`/resources/blog/${p.slug}`} className="group border-b border-r border-foreground bg-background p-7 transition-colors hover:bg-foreground hover:text-background">
                  <h3 className="font-display text-xl uppercase leading-tight md:text-2xl">{p.title}</h3>
                  <span className="mt-4 inline-flex items-center gap-2 font-display text-sm uppercase text-primary">
                    Read article <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>

      <SiteFooter />
    </main>
  );
}
