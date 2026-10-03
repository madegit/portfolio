// Everything search engines and AI answer engines read about the site lives
// here: titles, descriptions, the share image, and the structured data that
// says who Nidhi is. None of it changes what's on screen.

export const SITE_URL = "https://www.somehowliving.tech";
export const OG_IMAGE = `${SITE_URL}/og.png`;

export const NAME = "Nidhi Prajapati";
export const ABOUT_SHORT =
  "Nidhi Prajapati is a software engineer building AI agents, voice AI and privacy-first web3 tools, currently working on AI agent reliability at Emergent (YC24).";

export const PROFILES = [
  "https://www.linkedin.com/in/nidhi-prajapati-5b4483248/",
  "https://github.com/SomehowLiving",
  "https://x.com/pnyk05",
  "https://devfolio.co/@nuna",
  "https://www.npmjs.com/package/@onkey/sdk",
];

export const person = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: NAME,
  alternateName: ["Nidhi", "somehowliving"],
  url: SITE_URL,
  image: OG_IMAGE,
  email: "mailto:nidhiyp05@gmail.com",
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
      { property: "og:image:alt", content: "the anatomy of a curious developer — Nidhi Prajapati" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
