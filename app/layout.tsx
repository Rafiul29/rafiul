import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { Providers } from "./providers";
import { Footer } from "@/components/shared/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { GithubStarsButton } from "@/components/ui/GithubStarsButton";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  display: "swap",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Rafiul Islam | Full Stack Developer",
    template: "%s | Rafiul Islam",
  },
  description:
    "Rafiul Islam is a Full Stack Web Developer specializing in Next.js, React, Laravel, Django, PHP, REST APIs, and scalable web applications.",
  applicationName: "Rafiul Islam Portfolio",
  keywords: [
    "Dev Rafiul Islam",
    "Developer Rafiul Islam",
    "Rafiul Islam Full Stack Developer",
    "Rafiul Islam Web Developer",
    "Next.js Developer Portfolio",
    "React Developer Portfolio",
    "Laravel Backend Developer",
    "Django Backend Developer",
    "Full Stack Developer Portfolio",
    "Backend Developer Portfolio",
  ],
  authors: [{ name: "Rafiul Islam" }],
  creator: "Rafiul Islam",
  metadataBase: new URL("https://rafiul-islam-dev.vercel.app"),
  openGraph: {
    title: "Rafiul Islam | Full Stack Developer",
    description:
      "Portfolio of Rafiul Islam – Full Stack Developer working with Next.js, React, Django, Laravel, and modern web technologies.",
    url: "/",
    siteName: "Rafiul Islam Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Dev Rafiul Islam Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafiul Islam | Full Stack Developer",
    description:
      "Rafiul Islam – Full Stack Developer skilled in Next.js, React, Django, and modern web technologies.",
    images: ["/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://rafiul-islam-dev.vercel.app",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dev Rafiul Islam",
    url: "https://rafiul-islam-dev.vercel.app",
    jobTitle: "Full Stack Developer",
    sameAs: [
      "https://github.com/Rafiul29",
      "https://www.linkedin.com/in/rafiul-islam-cse/",
    ],
  };


  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <ScrollToTop />
          <GithubStarsButton />
        </Providers>
      </body>
    </html>
  );
}
