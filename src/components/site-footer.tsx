import Link from "next/link";
import { MapPin, PackageCheck } from "lucide-react";
import { BrandMark } from "./brand-mark";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-hero px-5 py-10 text-hero-foreground md:px-10">
      <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 md:flex-row md:items-end">
        <BrandMark />
        <div className="font-body text-sm text-hero-muted md:text-right">
          <p className="flex items-center gap-2 md:justify-end">
            <PackageCheck className="size-4 text-primary" /> Balloon manufacturer
          </p>
          <nav aria-label="Footer" className="mt-3 flex flex-wrap gap-4 md:justify-end">
            <Link href="/products" className="hover:text-primary">Products</Link>
            <Link href="/resources" className="hover:text-primary">Resources</Link>
            <Link href="/resources/faq" className="hover:text-primary">FAQ</Link>
            <Link href="/resources/blog" className="hover:text-primary">Blog</Link>
            <Link href="/about" className="hover:text-primary">About Us</Link>
            <Link href="/contact" className="hover:text-primary">Contact Us</Link>
          </nav>
          <address className="mt-3 flex items-start gap-2 not-italic md:justify-end">
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" /> {site.address.full}
          </address>
          {(site.phone || site.email) && (
            <p className="mt-3 flex flex-wrap gap-4 md:justify-end">
              {site.phone && <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-primary">{site.phone}</a>}
              {site.email && <a href={`mailto:${site.email}`} className="hover:text-primary">{site.email}</a>}
            </p>
          )}
          <p className="mt-3">© {new Date().getFullYear()} Skyyhan Balloons Pvt Ltd</p>
        </div>
      </div>
    </footer>
  );
}
