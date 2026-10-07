import { site, prices, faq } from "@/data/site";

// Structured data for search engines and answer engines (SEO + AEO).
export default function JsonLd() {
  const business = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "@id": `${site.url}/#gym`,
    name: site.name,
    description: "Boulderointihalli Lakeudella, auki 24/7.",
    url: site.url,
    logo: `${site.url}/assets/logo-nelio.png`,
    image: `${site.url}/assets/og.png`,
    email: site.email,
    ...(site.phone && { telephone: site.phone }),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressCountry: site.address.country,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: `${prices.singleVisit.juniorWithShoes}–${prices.annualMembership.adult} €`,
    currenciesAccepted: "EUR",
    ...(site.social.length && { sameAs: site.social }),
    makesOffer: [
      ["Kertakäynti, aikuinen", prices.singleVisit.adult],
      ["Ensikertalaisten kortti, aikuinen", prices.firstTimerCard.adult],
      ["10x kertakortti, aikuinen", prices.tenVisitCard.adult],
      ["Kuukausikortti, aikuinen", prices.monthlyCard.adult],
    ].map(([name, price]) => ({
      "@type": "Offer",
      name,
      price,
      priceCurrency: "EUR",
    })),
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
    </>
  );
}
