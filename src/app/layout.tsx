import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navigation } from "@/components/layout/Navigation";
import { LazyParticleBackground } from "@/components/effects/LazyParticleBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammed Shabir Alam | Senior Frontend Developer",
  description:
    "Senior Frontend Developer with 6+ years experience creating secure, scalable web applications in fintech and telecom. Expert in React, Angular, and Node.js.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Angular Developer",
    "TypeScript",
    "Fintech",
    "Dubai",
    "Senior Developer",
    "Web Developer",
    "JavaScript",
    "Node.js",
  ],
  authors: [{ name: "Mohammed Shabir Alam" }],
  creator: "Mohammed Shabir Alam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shabiralam.vercel.app",
    title: "Mohammed Shabir Alam | Senior Frontend Developer",
    description:
      "Transforming complex challenges into elegant, scalable solutions",
    siteName: "Mohammed Shabir Alam Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Shabir Alam | Senior Frontend Developer",
    description:
      "Senior Frontend Developer specializing in fintech and telecom",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-black text-white overflow-x-hidden antialiased">
        <LazyParticleBackground />
        <Providers>
          <Navigation />
          <main className="relative z-10 pt-12 lg:pt-16">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
