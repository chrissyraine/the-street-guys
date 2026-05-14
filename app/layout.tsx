import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Street Guys | Catering & VFW Food in Titusville",
  description: "Premium catering and VFW dining in Titusville. Food Done Right: generous portions, scratch-cooked, no shortcuts. Book your event or visit us Tuesday & Thursday.",
  keywords: "catering Titusville, event catering, food delivery, VFW food, homemade pizza, subs, pasta, Titusville dining",
  authors: [{ name: "The Street Guys" }],
  openGraph: {
    title: "The Street Guys | Food Done Right",
    description: "Premium catering & VFW dining. Feed a family. Feed them well. Send them home satisfied.",
    url: "https://thestreetguys.com",
    siteName: "The Street Guys",
    images: [
      {
        url: "/logo3.png",
        width: 400,
        height: 400,
        alt: "The Street Guys Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Street Guys | Food Done Right",
    description: "Premium catering & VFW dining in Titusville. Book your event today.",
    images: ["/logo3.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1.0",
  alternates: {
    canonical: "https://thestreetguys.com",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "The Street Guys",
  "description": "Premium catering and VFW dining. Food Done Right: generous portions, scratch-cooked, no shortcuts.",
  "url": "https://thestreetguys.com",
  "image": "https://thestreetguys.com/logo3.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "206 Saint John St",
    "addressLocality": "Titusville",
    "addressRegion": "PA",
    "postalCode": "16354",
    "addressCountry": "US",
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Tuesday",
      "opens": "12:00",
      "closes": "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Thursday",
      "opens": "12:00",
      "closes": "19:00",
    },
  ],
  "priceRange": "$$",
  "servesCuisine": ["Italian", "American"],
  "foundingDate": "2024-03",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
