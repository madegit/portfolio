// Everything search engines and AI answer engines read about the site lives
// here: titles, descriptions, the share image, and the structured data that
// says who Matthew is. None of it changes what's on screen.

export const SITE_URL = "https://www.somehowliving.tech";
export const OG_IMAGE = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0725-K4NOc541a6nbcWq3imIbmWL0lnkhP4.png";

export const NAME = "Matthew Adeleye";
export const ABOUT_SHORT =
  "Matthew Adeleye is a frontend developer with 4+ years of experience building high-performance web applications with React, Next.js, and TypeScript.";

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
  jobTitle: "Frontend Developer",
  description: ABOUT_SHORT,
  worksFor: { "@type": "Organization", name: "GearSparks Consulting" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Federal University of Oye-Ekiti" },
  address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "WordPress",
    "UI/UX design",
    "Node.js",
    "Supabase",
    "GraphQL",
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
