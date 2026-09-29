export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "choosing-latex-balloon-sizes",
    title: "How to choose latex balloon sizes for your business",
    date: "2026-09-28",
    excerpt: "Round balloons come in standard sizes measured in inches. Here is how decorators and retailers pick the right ones.",
    body: [
      "Latex balloon sizes are measured in inches across the widest part of an inflated balloon. The most common sizes for parties and events are 9 inch, 10 inch and 12 inch balloons.",
      "Smaller sizes suit table decorations, return gifts and balloon sticks. Larger sizes hold more air or helium, float longer and stand out in venue decor. Decorators often mix sizes in the same arch or bouquet to add depth.",
      "When you order in bulk, tell us the sizes you sell most. Mixed cartons let you stock several sizes without holding too much of any single one.",
      "Not sure which size fits your customers? Send us your use case through the contact page and we will suggest a size mix.",
    ],
  },
  {
    slug: "printed-balloons-for-promotions",
    title: "Why printed latex balloons work for promotions",
    date: "2026-09-28",
    excerpt: "A logo on a balloon turns a low cost item into a walking advertisement. Here is why brands keep ordering them.",
    body: [
      "Printed latex balloons carry your logo into crowds. At store openings, exhibitions and roadshows, people pick them up, carry them around and photograph them. Few promotional items travel that far for that little money.",
      "Keep the artwork simple. Bold logos and short text print cleanly and read from a distance. Fine detail and long sentences get lost on a curved, stretchy surface.",
      "Colour choice matters. A dark print on a light balloon, or a light print on a dark balloon, gives the strongest contrast. Our in-house machine prints up to 3 colours, which covers most logo designs.",
      "Planning a campaign? Send us your logo and the quantity you need, and we will confirm print colours and packing.",
    ],
  },
  {
    slug: "how-to-store-latex-balloons",
    title: "How to store latex balloons so they last",
    date: "2026-09-28",
    excerpt: "Heat, sunlight and time age latex. A few simple storage habits keep your stock fresh for longer.",
    body: [
      "Latex is a natural material and it ages. Heat, direct sunlight and ozone speed that up, so storage makes a real difference to how long your stock stays good.",
      "Keep balloons in a cool, dark, dry place. A closed cupboard or storeroom away from windows and heaters works well. Avoid leaving cartons in vehicles or godowns that heat up during the day.",
      "Keep the packs sealed until you need them. Open bags expose balloons to air and light, and the latex slowly loses its stretch.",
      "Buy in quantities you can sell through. Fresh stock always inflates better than old stock, so regular smaller orders beat one huge order that sits for a year.",
    ],
  },
  {
    slug: "loose-vs-retail-packing",
    title: "Loose packing vs retail packing: which should you order?",
    date: "2026-09-28",
    excerpt: "Wholesalers and shop owners need different packing. Here is how to choose between loose bulk and shelf-ready packs.",
    body: [
      "We offer two ways to pack latex balloons: loose packing for bulk supply and retail packing for store shelves. The right choice depends on how you sell.",
      "Loose packing suits wholesalers, decorators and event companies. Balloons are counted and packed in bulk, which keeps the cost per balloon low and makes large quantities easy to handle.",
      "Retail packing suits shops. Balloons go into smaller packs that can hang or stack on a shelf, ready for walk-in customers. Pack sizes can be chosen per order.",
      "Many distributors order both: loose cartons for their decorator clients and retail packs for the shops they supply. Tell us your split and we will pack accordingly.",
    ],
  },
  {
    slug: "what-balloon-grams-mean",
    title: "What balloon weight in grams actually means",
    date: "2026-09-28",
    excerpt: "Suppliers quote balloons in grams per piece. Here is what that number tells you about thickness, stretch and float time.",
    body: [
      "When balloon suppliers list a product as 1.5 gm, 1.8 gm or 2.8 gm, they mean the weight of one uninflated balloon. That single number tells you how much latex went into each piece.",
      "More latex means thicker walls. A heavier balloon of the same size stretches further before it bursts, handles rougher packing and transport, and generally holds helium longer because the thicker wall slows down how fast the gas escapes.",
      "Lighter balloons cost less per piece and suit short events, return gifts and high-volume promotions where float time does not matter. Heavier balloons suit decorators, helium work and retail customers who expect the balloon to last.",
      "When you compare quotes from manufacturers, compare gram weight along with price. A cheaper balloon that is also lighter is not the same product. Tell us the weight and size you need and we will quote for exactly that.",
    ],
  },
  {
    slug: "are-latex-balloons-biodegradable",
    title: "Are latex balloons biodegradable?",
    date: "2026-09-28",
    excerpt: "Latex balloons start as sap from rubber trees. Here is what that means for how they break down and how to dispose of them.",
    body: [
      "Latex balloons are made from natural rubber, a milky sap tapped from rubber trees. Because the base material comes from a plant, natural latex breaks down over time when exposed to the elements, unlike foil or plastic balloons which do not.",
      "Breakdown is not instant. Sunlight, moisture and microbes do the work, and a balloon buried in a landfill with little air or light degrades far more slowly than one exposed outdoors. Biodegradable does not mean harmless if littered.",
      "The responsible approach is simple. Never release balloons into the open, pop them after events, and put the pieces in the bin. Balloon releases are banned or restricted in many places for good reason.",
      "For businesses, latex remains the practical choice: it is the only balloon material made from a renewable resource, and it is what we manufacture. If your customers ask about disposal, the guidance above is what to share.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
