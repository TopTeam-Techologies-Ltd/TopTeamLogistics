import type { Metadata } from "next";

const SITE_NAME = "TopTeam Logistics ";
const DEFAULT_DESCRIPTION =
  "Scalable, reliable delivery and logistics solutions designed to support growing businesses and complex operations.";
const DEFAULT_IMAGE = "/og-image.png";
const SITE_URL = "https://www.topteamlogistics.co.uk";
const DEFAULT_KEYWORDS = [
  "delivery",
  "logistics",
  "UK delivery services",
  "last mile delivery",
  "parcel delivery",
  "business logistics",
];

export function createMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  url = SITE_URL,
  image = DEFAULT_IMAGE,
  keywords = DEFAULT_KEYWORDS,
}: {
  title: string;
  description?: string;
  url?: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    keywords,
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      images: [
        {
          url: image,
          alt: `${title} - ${SITE_NAME}`,
        },
      ],
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [image],
    },
  };
}
