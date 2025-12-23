import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

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
    default: "Md Rafiul Islam | Full Stack Developer",
    template: "%s | Md Rafiul Islam",
  },
  description:
    "Md Rafiul Islam is a Full Stack Web Developer specializing in Next.js, React, Laravel, Django, PHP, REST APIs, and scalable web applications.",
  applicationName: "Md Rafiul Islam Portfolio",
  keywords: [
    "Md Rafiul Islam Full Stack Developer",
    "Md Rafiul Islam Web Developer",
    "Md Rafiul Islam Backend Developer",
    "Next.js Full Stack Developer",
    "React Next.js Developer",
    "Django Backend Developer",
    "Laravel Backend Developer",
    "Full Stack Developer Portfolio",
    "Backend Developer Portfolio",
  ],
  authors: [{ name: "Md Rafiul Islam" }],
  creator: "Md Rafiul Islam",
  metadataBase: new URL("https://rafiul-islam-dev.vercel.app"),
  openGraph: {
    title: "Md Rafiul Islam | Full Stack Developer",
    description:
      "Portfolio of Md Rafiul Islam – Full Stack Developer working with Next.js, React, Django, and modern web technologies.",
    url: "/",
    siteName: "Md Rafiul Islam Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Md Rafiul Islam Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Rafiul Islam | Full Stack Developer",
    description:
      "Full Stack Developer skilled in Next.js, React, Django, and modern web technologies.",
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
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
