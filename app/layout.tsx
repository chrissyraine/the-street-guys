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
  title: "The Street Guys | Catering in Titusville, PA",
  description: "Premium catering in Titusville, PA. Food Done Right: generous portions, scratch-cooked, no shortcuts. Book your event today.",
  keywords: "catering Titusville, event catering, food delivery, homemade pizza, subs, pasta, catering Pennsylvania",
  authors: [{ name: "The Street Guys" }],
  openGraph: {
    title: "The Street Guys | Food Done Right",
    description: "Premium catering. Feed a family. Feed them well. Send them home satisfied.",
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
    description: "Premium catering in Titusville, PA. Book your event today.",
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
  "description": "Premium catering. Food Done Right: generous portions, scratch-cooked, no shortcuts.",
  "url": "https://thestreetguys.com",
  "image": "https://thestreetguys.com/logo3.png",
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
