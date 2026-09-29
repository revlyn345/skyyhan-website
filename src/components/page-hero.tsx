import type { ReactNode } from "react";

/** Dark hero band used at the top of every inner page. */
export function PageHero({
  title,
  intro,
  titleClassName = "text-[clamp(3.2rem,14vw,10rem)] leading-[0.78]",
  narrow = false,
  children,
}: {
  title: ReactNode;
  intro: string;
  titleClassName?: string;
  narrow?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className="relative bg-hero pt-36 pb-20 text-hero-foreground md:pt-44 md:pb-28">
      <div className={`mx-auto px-5 md:px-10 ${narrow ? "max-w-4xl" : "max-w-[1440px]"}`}>
        {children}
        <h1 className={`font-display uppercase ${titleClassName}`}>{title}</h1>
        <p className="mt-10 max-w-xl border-l-4 border-accent pl-5 font-body text-lg font-medium leading-relaxed text-hero-muted md:text-2xl">
          {intro}
        </p>
      </div>
    </section>
  );
}
