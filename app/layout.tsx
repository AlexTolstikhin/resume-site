import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { personJsonLd, siteUrl } from "@/app/constants/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Alex Tolstikhin — Senior Software Engineer";
const description =
  "Senior Software Engineer, 13+ years — React, Next.js, TypeScript. Insurance and fintech products at SoFi, with a focus on performance, testing, and reliability.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: "Alex Tolstikhin", url: siteUrl }],
  keywords: [
    "Senior Software Engineer",
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Fintech",
    "San Francisco Bay Area",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "profile",
    title,
    description,
    url: siteUrl,
    siteName: "Alex Tolstikhin",
  },
  twitter: { card: "summary", title, description },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Typed profile data for parsers that read structured data rather
            than prose — ATS pipelines, search engines, LLM screeners. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
