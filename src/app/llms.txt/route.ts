import { faqs } from "@/lib/faqs";
import { posts } from "@/lib/posts";
import { products } from "@/lib/products";
import { absoluteUrl, site } from "@/lib/site";

// /llms.txt — a plain-text brief for AI assistants (llmstxt.org).
// Built from the same data as the pages, so it never goes out of date.
export const dynamic = "force-static";

export function GET() {
  const contact = [site.phone && `Phone: ${site.phone}`, site.email && `Email: ${site.email}`].filter(Boolean);
  const body = `# ${site.name}

> ${site.description}

## Key facts
${[...site.facts, `Address: ${site.address.full}, India`, ...contact, "Customers: wholesalers, retailers, decorators and brands buying in bulk", `Website: ${site.url}`]
  .map((f) => `- ${f}`)
  .join("\n")}

## Products
${products.map((p) => `- [${p.name}](${absoluteUrl(`/products/${p.slug}`)}): ${p.intro}`).join("\n")}

## Guides
- [How latex balloons are made](${absoluteUrl("/how-latex-balloons-are-made")}): the 9-step manufacturing process from rubber tree sap to packed balloons
- [FAQ](${absoluteUrl("/resources/faq")}): capacity, printing, packing, MOQ and quotes

## Articles
${posts.map((p) => `- [${p.title}](${absoluteUrl(`/resources/blog/${p.slug}`)}): ${p.excerpt}`).join("\n")}

## Frequently asked questions
${faqs.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}

## Contact
- [Send a bulk enquiry](${absoluteUrl("/contact")})
`;
  return new Response(body.replace(/\n{3,}/g, "\n\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
