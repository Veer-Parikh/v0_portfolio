import type React from "react"
import type { Metadata, Viewport } from "next"
import { Bricolage_Grotesque, Instrument_Serif, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { profile } from "@/lib/data"
import "./globals.css"

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  axes: ["opsz", "wdth"],
  display: "swap",
})

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
})

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://veerparikh.dev"),
  title: {
    default: "Veer Parikh — Backend & AI Engineer",
    template: "%s | Veer Parikh",
  },
  description:
    "Veer Parikh is a backend-first engineer and Graduate Engineer Trainee in AI at MCX, Mumbai — building APIs, microservices, data systems and applied AI.",
  keywords: [
    "Veer Parikh",
    "Veer Parikh Mumbai",
    "backend engineer",
    "AI engineer",
    "software engineer",
    "Node.js developer",
    "MCX AI",
  ],
  authors: [{ name: profile.name, url: "https://veerparikh.dev" }],
  creator: profile.name,
  publisher: profile.name,
  alternates: {
    canonical: "https://veerparikh.dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Veer Parikh — Backend & AI Engineer",
    description: "Graduate Engineer Trainee in AI at MCX. Backend-first: Node.js, microservices, data systems.",
    type: "website",
    url: "https://veerparikh.dev",
    siteName: "Veer Parikh",
    locale: "en_IN",
    images: [
      {
        url: "/professional-headshot.png",
        width: 701,
        height: 553,
        alt: "Veer Parikh — Backend and AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veer Parikh — Backend & AI Engineer",
    description: "Portfolio of Veer Parikh, a backend-first engineer building with AI at MCX.",
    images: ["/professional-headshot.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0c0c0b",
  colorScheme: "dark",
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: "https://veerparikh.dev",
  image: "https://veerparikh.dev/professional-headshot.png",
  jobTitle: "Graduate Engineer Trainee — AI",
  worksFor: {
    "@type": "Organization",
    name: "Multi Commodity Exchange of India Ltd.",
    alternateName: "MCX",
    url: "https://www.mcxindia.com/",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressCountry: "IN",
  },
  email: `mailto:${profile.email}`,
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: ["Backend Engineering", "Artificial Intelligence", "Node.js", "Microservices", "Data Systems"],
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Veer Parikh",
  url: "https://veerparikh.dev",
  description: metadata.description,
  author: {
    "@type": "Person",
    name: profile.name,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${display.variable} ${serif.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        {children}
        <div aria-hidden className="grain" />
        <Analytics />
      </body>
    </html>
  )
}
