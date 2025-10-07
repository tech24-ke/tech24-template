import "./globals.css";
import type { Metadata } from "next";
import { site } from "@/site.config";

export const metadata: Metadata = {
  title: site.metaTitle,
  description: site.metaDescription,
  openGraph: {
    title: site.metaTitle,
    description: site.metaDescription,
    url: site.baseUrl,
    siteName: site.brand,
  },
  metadataBase: new URL(site.baseUrl),
  themeColor: "#0B1B3A",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon + social icon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#11264D" />
      </head>
      <body>{children}</body>
    </html>
  );
}
