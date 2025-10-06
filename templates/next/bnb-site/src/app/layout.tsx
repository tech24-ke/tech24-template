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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* âœ… Favicon + social icon */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#e7a6a0" />
      </head>
      <body>{children}</body>
    </html>
  );
}


