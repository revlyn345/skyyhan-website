import Image from "next/image";
import Link from "next/link";
import logoWhite from "@/assets/skyyhan-logo-white.png";
import logoRed from "@/assets/skyyhan-logo-red.png";

export function BrandMark({ priority = false }: { priority?: boolean }) {
  return (
    <Link href="/" className="group relative inline-block h-12 md:h-14" aria-label="Skyyhan Balloons home">
      <Image
        src={logoWhite}
        alt="Skyyhan Balloons Private Limited"
        priority={priority}
        sizes="140px"
        className="h-12 w-auto transition-transform group-hover:-rotate-2 md:h-14"
      />
      <Image
        src={logoRed}
        alt=""
        aria-hidden="true"
        sizes="140px"
        className="absolute inset-y-0 left-0 h-12 w-auto opacity-0 transition-opacity duration-200 group-hover:opacity-100 md:h-14"
      />
    </Link>
  );
}
