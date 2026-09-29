import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BrandMark } from "./brand-mark";
import { NavLink } from "./nav-link";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/15 text-hero-foreground">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-10">
        <BrandMark priority />
        <nav aria-label="Main" className="hidden items-center gap-7 font-body text-sm font-semibold md:flex">
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/products">Products</NavLink>
          <NavLink href="/resources">Resources</NavLink>
          <NavLink href="/contact">Contact Us</NavLink>
        </nav>
        <Link
          href="/contact"
          className="group hidden items-center gap-2 bg-primary px-5 py-3 font-body text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-1 sm:flex"
        >
          Bulk enquiry <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <Link href="/products" className="grid size-10 place-items-center border border-white/30 md:hidden" aria-label="Explore products">
          <ArrowRight className="size-5" />
        </Link>
      </div>
    </header>
  );
}
