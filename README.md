# Skyyhan Balloons — Next.js website

Next.js 16 · React 19 · TypeScript · Tailwind CSS 4. Every page is pre-rendered to static HTML, so Google, Bing and AI assistants (ChatGPT, Claude, Perplexity, Gemini) read the full content without running JavaScript.

## What's built in for SEO, AEO and GEO

| Area | What it does |
| --- | --- |
| Metadata | Unique title, description, canonical URL, Open Graph and Twitter tags on every page (`src/lib/seo.ts`) |
| Structured data | Organization + LocalBusiness, WebSite, BreadcrumbList on every page, FAQPage, HowTo, Product, ItemList, Blog and BlogPosting |
| `/sitemap.xml` | Generated from the product and blog data, so new items appear automatically |
| `/robots.txt` | Allows search engines and named AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended…) |
| `/llms.txt` | Plain-text brief of the business, products, guides and FAQ for AI assistants |
| Performance | `next/image` (AVIF/WebP, lazy loading, blur placeholders), self-hosted fonts via `next/font`, zero JS on most of the page |
| Semantics | `<article>`, `<time>`, `<address>`, ordered steps, FAQ answers kept in the HTML |
| Redirect | `/faq` → `/resources/faq` (permanent) |
| Enquiry form | Actually sends email now (via Resend), with spam honeypot |

**Edit business details in one place:** `src/lib/site.ts` (add phone, email, social/Google Business links, exact map pin). They flow into the footer, contact page, structured data and llms.txt.

---

## 1. Run it in VS Code

Install once: [Node.js 22 LTS](https://nodejs.org), [Git](https://git-scm.com), [VS Code](https://code.visualstudio.com).

1. Unzip this folder, then in VS Code: **File → Open Folder… → `skyyhan-nextjs`**.
2. Accept the prompt to install recommended extensions (Tailwind CSS, Prettier).
3. Open the terminal (**Terminal → New Terminal**) and run:
   ```bash
   npm install
   npm run dev
   ```
4. Open http://localhost:3000.

Before pushing, check the production build works: `npm run build`.

## 2. Push to GitHub

1. On https://github.com/new create a repository named `skyyhan-website` (Private is fine). Don't add a README.
2. In the VS Code terminal:
   ```bash
   git init
   git add .
   git commit -m "Skyyhan website in Next.js"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/skyyhan-website.git
   git push -u origin main
   ```
   The first push opens a browser window to sign in to GitHub.

Later changes: `git add . && git commit -m "what changed" && git push`. The live site updates automatically.

## 3. Deploy on Vercel (free)

GoDaddy's shared hosting can't run Next.js, so the site runs on Vercel (made by the Next.js team) and GoDaddy just points the domain there.

1. Go to https://vercel.com/signup → **Continue with GitHub**.
2. **Add New → Project →** import `skyyhan-website`. Leave the default settings and click **Deploy**.
3. You get a test URL like `skyyhan-website.vercel.app`. Check it.

## 4. Connect skyyhan.com from GoDaddy

1. In Vercel: **Project → Settings → Domains →** add `skyyhan.com`. Also add `www.skyyhan.com` and choose to **redirect it to skyyhan.com**.
2. Vercel shows the DNS records to create. Usually:

   | Type | Name | Value |
   | --- | --- | --- |
   | A | `@` | `76.76.21.21` |
   | CNAME | `www` | `cname.vercel-dns.com` |

   If Vercel shows different values for your project, use Vercel's.
3. In GoDaddy: **My Products → skyyhan.com → DNS (Manage DNS)**.
   - Delete the existing `A` record for `@` (often "Parked") and any `AAAA` record for `@`.
   - Edit the `www` CNAME (or add one) with the value above.
   - Add the `A` record above.
   - If **Forwarding** is turned on for the domain, turn it off.
4. Wait 10 minutes to a few hours. Vercel shows **Valid Configuration** and issues the HTTPS certificate automatically.

## 5. Turn on the enquiry form email

1. Create a free account at https://resend.com → **API Keys → Create**.
2. In Vercel: **Settings → Environment Variables**, add:
   - `RESEND_API_KEY` = your key
   - `ENQUIRY_TO_EMAIL` = inbox that should receive enquiries
   - `ENQUIRY_FROM_EMAIL` = `Skyyhan Website <onboarding@resend.dev>`
3. **Deployments → ⋯ → Redeploy.**

Optional, for better deliverability: in Resend **Domains → Add skyyhan.com**, add the DNS records it shows in GoDaddy, then change `ENQUIRY_FROM_EMAIL` to `Skyyhan Website <enquiry@skyyhan.com>`.

For local testing copy `.env.example` to `.env.local` and fill it in.

## 6. After launch: get indexed

1. **Google Search Console** (https://search.google.com/search-console) → add a **Domain** property `skyyhan.com` → verify with the TXT record in GoDaddy DNS → **Sitemaps** → submit `sitemap.xml`.
2. **Bing Webmaster Tools** (https://www.bing.com/webmasters) → **Import from Google Search Console**. Bing also feeds ChatGPT search and Copilot.
3. **Google Business Profile** for the Noida factory, with the exact same name and address as the website. Then add its link to `sameAs` in `src/lib/site.ts`.
4. Test structured data at https://search.google.com/test/rich-results.

Note: the Product markup has no price, so Search Console may say products aren't eligible for price-rich results. That's expected for a B2B quote-based business and doesn't affect ranking.

## Adding content

- **New blog post:** add an entry to `src/lib/posts.ts`. The page, sitemap, blog list and llms.txt update automatically.
- **New product:** add an entry to `src/lib/products.ts` (image in `src/assets/`).
- **New FAQ:** add to `src/lib/faqs.ts`. It appears on the FAQ page and in the FAQPage schema.

## Project structure

```
src/
  app/                 routes (each folder = a URL)
    page.tsx           home
    products/[slug]/   product pages
    resources/         hub, faq, blog, blog/[slug]
    api/enquiry/       form email endpoint
    sitemap.ts robots.ts llms.txt/
  components/          header, footer, hero, form, JSON-LD
  lib/                 site details, products, posts, faqs, SEO helpers
  assets/              images and logos
public/                favicon, og-image.jpg (1200×630 social preview)
```
