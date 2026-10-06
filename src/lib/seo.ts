// Everything search engines and AI answer engines read about the site lives
// here: titles, descriptions, the share image, and the structured data that
// says who Matthew is. None of it changes what's on screen.

export const SITE_URL = "https://www.somehowliving.tech";
export const OG_IMAGE = `${SITE_URL}/og.png`;

export const NAME = "Matthew Adeleye";
export const ABOUT_SHORT =
  "Matthew Adeleye is a frontend developer and product builder designing, building, and shipping useful things for the web.";

export const PROFILES = [
  "https://www.linkedin.com/in/mrmade",
  "https://github.com/madegit",
];

export const person = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: NAME,
  alternateName: ["Matthew", "somehowliving"],
  url: SITE_URL,
  image: OG_IMAGE,
  email: "mailto:theadeleyematthew@gmail.com",
  jobTitle: "Software Engineer",
  description: ABOUT_SHORT,
  worksFor: { "@type": "Organization", name: "Emergent", description: "Y Combinator (YC24) company" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Sir M. Visvesvaraya Institute of Technology (SMVIT)" },
  address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
  knowsAbout: [
    "AI agents",
    "Agent reliability",
    "Voice AI",
    "Web3",
    "Zero-knowledge proofs",
    "Agentic payments",
    "WebMCP",
    "Privacy-first software",
    "Full-stack development",
  ],
  sameAs: PROFILES,
};

// Turn a JSON-LD object into a <script> entry for a route's head.
export const jsonLd = (data: Record<string, unknown>) => ({
  type: "application/ld+json",
  children: JSON.stringify({ "@context": "https://schema.org", ...data }),
});

// The standard set of tags for a page: title, description, canonical address
// and the share card.
export function pageMeta({ title, description, path }: { title: string; description: string; path: string }) {
  const url = `${SITE_URL}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "the story of a curious builder — Matthew Adeleye" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
