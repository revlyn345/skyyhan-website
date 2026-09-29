import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export function CtaBand({ heading, label }: { heading: ReactNode; label: string }) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-8 px-5 py-20 md:flex-row md:items-center md:justify-between md:px-10 md:py-24">
        <h2 className="max-w-2xl font-display text-5xl uppercase leading-[0.86] md:text-7xl">{heading}</h2>
        <Link
          href="/contact"
          className="offset-button group inline-flex shrink-0 items-center gap-3 bg-accent px-7 py-5 font-display text-lg uppercase text-accent-foreground transition-transform hover:-translate-x-1 hover:-translate-y-1"
        >
          {label} <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
