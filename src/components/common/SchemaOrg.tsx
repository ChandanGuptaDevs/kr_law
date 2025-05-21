"use client";

interface SchemaOrgProps {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
}

export default function SchemaOrg({
  title,
  description,
  url,
  imageUrl = "https://example.com/default-image.jpg", // Replace with your default image
}: SchemaOrgProps) {
  // Law Firm schema
  const lawFirmSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "KR Law Group",
    description,
    url,
    image: imageUrl,
    telephone: "+12138338361",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Legal Street", // Replace with actual address
      addressLocality: "Los Angeles",
      addressRegion: "CA",
      postalCode: "90001", // Replace with actual postal code
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "34.0522", // Replace with actual coordinates
      longitude: "-118.2437", // Replace with actual coordinates
    },
    priceRange: "$$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    specialty: [
      "Personal Injury",
      "Auto Accidents",
      "Car Accidents",
      "Uber Accidents",
      "Lyft Accidents",
      "Airbnb Accidents",
      "Rental Car Accidents",
      "Electric Scooter Accidents",
      "Pedestrian Accidents",
      "Wrongful Death",
      "California At-Fault Accidents",
    ],
    founder: {
      "@type": "Person",
      name: "Kathy Rabii",
      jobTitle: "Founder and Attorney",
    },
    paymentAccepted: ["Cash", "Credit Card", "Contingency Fee"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Legal Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Car Accident Legal Representation",
            description: "Legal representation for victims of car accidents",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Uber Accident Legal Representation",
            description:
              "Legal representation for victims of Uber/Lyft accidents",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wrongful Death Representation",
            description:
              "Legal representation for families in wrongful death cases",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Electric Scooter Accident Representation",
            description:
              "Legal representation for victims of electric scooter accidents",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pedestrian Accident Representation",
            description:
              "Legal representation for pedestrians injured in accidents",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Rental Car Accident Representation",
            description:
              "Legal representation for victims of rental car accidents",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Airbnb Accident Representation",
            description:
              "Legal representation for injuries occurring at Airbnb properties",
          },
        },
      ],
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "34.0522",
        longitude: "-118.2437",
      },
      geoRadius: "50000", // 50km radius around Los Angeles
    },
    sameAs: [
      "https://www.facebook.com/krlawgroup", // Replace with actual social media URLs
      "https://www.instagram.com/krlawgroup",
      "https://www.linkedin.com/company/kr-law-group",
    ],
    awards: [
      {
        "@type": "Award",
        name: "Top 10 Personal Injury Attorneys in Los Angeles",
        description: "Recognized for excellence in personal injury law",
        awardedBy: {
          "@type": "Organization",
          name: "Super Lawyers",
        },
      },
      {
        "@type": "Award",
        name: "Rising Star Attorney",
        description: "Award for outstanding legal services",
        awardedBy: {
          "@type": "Organization",
          name: "Los Angeles Legal Excellence Foundation",
        },
      },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        name: "Free Legal Consultation",
        description: "Free initial consultation for all personal injury cases",
      },
      {
        "@type": "Offer",
        name: "No Fee Until You Win",
        description: "No legal fees unless we win your case",
      },
    ],
    serviceArea: {
      "@type": "GeoShape",
      name: "Greater Los Angeles Area",
      description:
        "Serving all of Los Angeles County and surrounding areas including Beverly Hills, Santa Monica, Pasadena, Long Beach, and Orange County",
    },
  };

  // Local Business schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "KR Law Group",
    image: imageUrl,
    "@id": `${url}#organization`,
    url,
    telephone: "+12138338361",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Legal Street", // Replace with actual address
      addressLocality: "Los Angeles",
      addressRegion: "CA",
      postalCode: "90001", // Replace with actual postal code
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "34.0522",
      longitude: "-118.2437",
    },
    slogan: "Behind Every Case Is a Person Who Deserves Care.",
    description: description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    hasMap: "https://www.google.com/maps?cid=123456789", // Replace with actual Google Maps URL
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/krlawgroup", // Replace with actual social media URLs
      "https://www.instagram.com/krlawgroup",
      "https://www.linkedin.com/company/kr-law-group",
    ],
  };

  // Professional Service schema
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "KR Law Group",
    image: imageUrl,
    "@id": `${url}#professionalService`,
    url,
    telephone: "+12138338361",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Legal Street", // Replace with actual address
      addressLocality: "Los Angeles",
      addressRegion: "CA",
      postalCode: "90001", // Replace with actual postal code
      addressCountry: "US",
    },
    description: description,
    priceRange: "$$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    specializations: [
      "Personal Injury Law",
      "Accident Claims",
      "Wrongful Death",
      "Uber/Lyft Accidents",
      "Pedestrian Accidents",
      "Auto Accidents",
    ],
    specialty: "Personal Injury Law",
    knowsLanguage: ["English", "Spanish"], // Add languages your firm supports
    availableLanguage: ["English", "Spanish"],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "Juris Doctor",
        recognizedBy: {
          "@type": "Organization",
          name: "State Bar of California",
        },
      },
    ],
  };

  // Law article schema
  const lawArticleSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    isPartOf: {
      "@id": `${url}#website`,
    },
    about: {
      "@id": `${url}#organization`,
    },
    primaryImageOfPage: {
      "@id": `${url}#primaryimage`,
    },
    datePublished: "2025-05-10T08:00:00+08:00",
    dateModified: "2025-05-10T09:20:00+08:00",
    description: description,
    breadcrumb: {
      "@id": `${url}#breadcrumb`,
    },
    potentialAction: [
      {
        "@type": "ReadAction",
        target: [url],
      },
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${url}search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    ],
    inLanguage: "en-US",
  };

  // Website schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}#website`,
    url,
    name: "KR Law Group",
    description: "Expert Legal Representation in Los Angeles",
    publisher: {
      "@id": `${url}#organization`,
    },
    potentialAction: [
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${url}search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    ],
    inLanguage: "en-US",
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: url,
      },
    ],
  };

  // Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${url}#organization`,
    name: "KR Law Group",
    url,
    logo: {
      "@type": "ImageObject",
      inLanguage: "en-US",
      "@id": `${url}#/schema/logo/image/`,
      url: `${url}images/kr_law_logo.webp`, // Replace with your logo URL
      contentUrl: `${url}images/kr_law_logo.webp`,
      width: 300,
      height: 100,
      caption: "KR Law Group Logo",
    },
    image: {
      "@id": `${url}#/schema/logo/image/`,
    },
    sameAs: [
      "https://www.facebook.com/krlawgroup", // Replace with actual social media URLs
      "https://www.instagram.com/krlawgroup",
      "https://www.linkedin.com/company/kr-law-group",
    ],
  };

  // Image schema
  const imageSchema = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    inLanguage: "en-US",
    "@id": `${url}#primaryimage`,
    url: imageUrl,
    contentUrl: imageUrl,
    width: 1200,
    height: 628,
    caption: "KR Law Group - Expert Legal Representation",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([
          lawFirmSchema,
          localBusinessSchema,
          professionalServiceSchema,
          lawArticleSchema,
          websiteSchema,
          breadcrumbSchema,
          organizationSchema,
          imageSchema,
        ]),
      }}
    />
  );
}
