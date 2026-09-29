import type React from "react"
import type { Metadata, Viewport } from "next"
import { Bricolage_Grotesque, Instrument_Serif, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
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
  title: "Veer Parikh — Backend & AI Engineer",
  description:
    "Veer Parikh is a backend-first engineer and Graduate Engineer Trainee in AI at MCX, Mumbai — building APIs, microservices, data systems and applied AI.",
  openGraph: {
    title: "Veer Parikh — Backend & AI Engineer",
    description: "Graduate Engineer Trainee in AI at MCX. Backend-first: Node.js, microservices, data systems.",
    type: "website",
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
        {children}
        <div aria-hidden className="grain" />
        <Analytics />
      </body>
    </html>
  )
}
