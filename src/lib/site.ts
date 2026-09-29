/**
 * Single source of truth for business details.
 * Used by metadata, JSON-LD structured data, sitemap, robots and llms.txt.
 * Fill in phone / email / socials — search engines and AI assistants
 * trust businesses with complete, consistent contact details (NAP).
 */
export const site = {
  name: "Skyyhan Balloons Pvt Ltd",
  shortName: "Skyyhan Balloons",
  url: "https://skyyhan.com",
  description:
    "Skyyhan Balloons Pvt Ltd is a latex balloon manufacturer in Noida, India, with a daily capacity of 10 lakh balloons and in-house 3-colour logo printing. We supply wholesalers, retailers and decorators in bulk.",
  locale: "en_IN",
  foundingCountry: "IN",
  address: {
    streetAddress: "F-40, Sector 8",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    postalCode: "201301",
    addressCountry: "IN",
    full: "F-40, Sector 8, Noida, Uttar Pradesh 201301",
  },
  // Approximate coordinates for Sector 8, Noida — adjust to the exact factory pin.
  geo: { latitude: 28.5975, longitude: 77.3197 },
  // TODO: add real contact details (leave "" to hide them everywhere)
  phone: "" as string, // e.g. "+91 98XXXXXXXX"
  email: "" as string, // e.g. "sales@skyyhan.com"
  // TODO: add profile URLs (Google Business Profile, IndiaMART, LinkedIn, Instagram…)
  sameAs: [] as string[],
  facts: [
    "Manufactures latex balloons only (no foil balloons)",
    "Daily production capacity of 10 lakh (1 million) balloons",
    "In-house 3-colour printing machine for logo and text balloons",
    "In-house production and packing",
    "Every batch quality checked before dispatch",
    "Loose bulk packing and retail packing",
  ],
} as const;

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();
