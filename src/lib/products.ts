import type { StaticImageData } from "next/image";
import latexRange from "@/assets/skyyhan-latex-range.jpg";
import heroBalloons from "@/assets/skyyhan-hero-balloons.jpg";
import production from "@/assets/skyyhan-production.jpg";
import pastelBalloons from "@/assets/skyyhan-pastel-balloons.jpg";

export type Product = {
  slug: string;
  name: string;
  note: string;
  intro: string;
  points: string[];
  specs: { label: string; value: string }[];
  image: StaticImageData;
  imageAlt: string;
};

const baseSpecs = [
  { label: "Material", value: "100% natural latex" },
  { label: "Sizes", value: "Standard round sizes, tell us what you need" },
  { label: "Packing", value: "Loose bulk cartons or retail packs" },
  { label: "Quality", value: "Every batch checked before dispatch" },
];

export const products: Product[] = [
  {
    slug: "classic-latex",
    name: "Classic Latex",
    note: "Solid colour latex balloons.",
    intro: "Solid colour latex balloons for everyday supply, events and resale.",
    points: [
      "Single colour or mixed colour packs",
      "Loose packing for bulk supply or retail packing for shelves",
      "Quality checked batches before dispatch",
    ],
    specs: baseSpecs,
    image: latexRange,
    imageAlt: "Solid colour latex balloons",
  },
  {
    slug: "printed-latex",
    name: "Printed Latex",
    note: "Logo and text printing, up to 3 colours.",
    intro: "Your logo or message printed on latex balloons, done in-house.",
    points: [
      "Logo and text printing, up to 3 colours",
      "Printing happens in our factory, no outside printer",
      "Bulk and retail pack sizes",
    ],
    specs: [
      { label: "Material", value: "100% natural latex" },
      { label: "Printing", value: "Logo and text, up to 3 colours, done in-house" },
      { label: "Sizes", value: "Standard round sizes, tell us what you need" },
      { label: "Packing", value: "Loose bulk cartons or retail packs" },
    ],
    image: heroBalloons,
    imageAlt: "Printed latex balloons",
  },
  {
    slug: "pastel-series",
    name: "Pastel Series",
    note: "Latex balloons in pastel shades.",
    intro: "Soft pastel shades for parties, weddings and decor work.",
    points: ["Single shade or mixed shade packs", "Loose or retail packing", "Quality checked batches"],
    specs: baseSpecs,
    image: pastelBalloons,
    imageAlt: "Pastel latex balloons",
  },
  {
    slug: "shape-modelling",
    name: "Shape & Modelling",
    note: "Long latex balloons for modelling.",
    intro: "Long latex balloons that twist and hold shapes for balloon art and decor.",
    points: ["Made for modelling and decor artists", "Supplied in bulk quantities", "Loose or retail packing"],
    specs: [
      { label: "Material", value: "100% natural latex" },
      { label: "Shape", value: "Long modelling balloons for twisting and decor" },
      { label: "Packing", value: "Loose bulk cartons or retail packs" },
      { label: "Quality", value: "Every batch checked before dispatch" },
    ],
    image: production,
    imageAlt: "Modelling latex balloons",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
