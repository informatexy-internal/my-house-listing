import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { photos, property, site } from "@/lib/property";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const title = `3 Bed Home for Rent in ${property.city}, ${property.region} near Woodstock | ${property.brand}`;
const description = `${property.bedrooms} bed, ${property.bathrooms} bath home for rent in ${property.city}, ${property.region}, close to downtown Woodstock. ${property.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, type: "website", images: [`${site.basePath}${photos[0].src}`] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        {site.adsId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${site.adsId}`} strategy="afterInteractive" />
            <Script id="gtag-init" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${site.adsId}');
            `}</Script>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
