import type { Metadata, Viewport } from "next";
import { Archivo_Black, Hind } from "next/font/google";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/json-ld";
import { organizationSchema, websiteSchema } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

// Self-hosted at build time by Next.js: no render-blocking Google Fonts request
const archivoBlack = Archivo_Black({ weight: "400", subsets: ["latin"], display: "swap", variable: "--font-archivo-black" });
const hind = Hind({ weight: ["400", "500", "600", "700"], subsets: ["latin"], display: "swap", variable: "--font-hind" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.shortName}` },
  description: "Balloon manufacturing for wholesale, retail, events and custom requirements.",
  applicationName: site.shortName,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "Manufacturing",
  icons: { icon: "/favicon.png", apple: "/favicon.png" },
  formatDetection: { telephone: true, address: true, email: true },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  // Paste verification codes after adding the site in each console:
  // verification: { google: "xxxx", other: { "msvalidate.01": "xxxx" } },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1b1b1b",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN" className={`${archivoBlack.variable} ${hind.variable}`}>
      <body>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        {children}
      </body>
    </html>
  );
}
