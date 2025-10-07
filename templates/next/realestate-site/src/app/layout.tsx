import "./globals.css";
import type { Metadata } from "next";
import { site } from "@/site.config";

export const metadata: Metadata = {
  title: site.metaTitle,
  description: site.metaDescription,
  metadataBase: new URL(site.baseUrl),
  openGraph: {
    title: site.metaTitle,
    description: site.metaDescription,
    url: site.baseUrl,
    siteName: site.brand,
    images: [
      {
        url: "/templates/realestate-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Modern villa exterior – " + site.brand,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.metaTitle,
    description: site.metaDescription,
    images: ["/templates/realestate-hero.jpg"],
  },
  themeColor: "#0B1B3A",
};
