import type { Metadata } from "next";
import { absoluteUrl, site } from "./site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  type?: "website" | "article";
  publishedTime?: string;
  image?: string;
  noindex?: boolean;
};

/** Builds complete metadata (canonical, Open Graph, Twitter) for a page. */
export function pageMetadata(p: PageMeta): Metadata {
  const url = absoluteUrl(p.path);
  const image = p.image ?? "/og-image.jpg";
  return {
    title: { absolute: p.title },
    description: p.description,
    alternates: { canonical: url },
    robots: p.noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      title: p.ogTitle ?? p.title,
      description: p.ogDescription ?? p.description,
      url,
      siteName: site.shortName,
      locale: site.locale,
      type: p.type ?? "website",
      ...(p.publishedTime ? { publishedTime: p.publishedTime } : {}),
      images: [{ url: image, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: p.ogTitle ?? p.title,
      description: p.ogDescription ?? p.description,
      images: [image],
    },
  };
}

/* ---------- JSON-LD (schema.org) builders ---------- */

const orgId = absoluteUrl("/#organization");
const websiteId = absoluteUrl("/#website");

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": orgId,
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    logo: absoluteUrl("/favicon.png"),
    image: absoluteUrl("/og-image.jpg"),
    description: site.description,
    ...(site.phone ? { telephone: site.phone } : {}),
    ...(site.email ? { email: site.email } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.streetAddress,
      addressLocality: site.address.addressLocality,
      addressRegion: site.address.addressRegion,
      postalCode: site.address.postalCode,
      addressCountry: site.address.addressCountry,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.latitude, longitude: site.geo.longitude },
    areaServed: { "@type": "Country", name: "India" },
    knowsAbout: [
      "Latex balloons",
      "Printed latex balloons",
      "Custom logo balloons",
      "Pastel latex balloons",
      "Modelling balloons",
      "Balloon manufacturing",
      "Wholesale balloons",
    ],
    ...(site.sameAs.length ? { sameAs: site.sameAs } : {}),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: site.url,
    name: site.shortName,
    inLanguage: "en-IN",
    publisher: { "@id": orgId },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export const publisherRef = { "@id": orgId };
