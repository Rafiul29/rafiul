import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { GithubStarsButton } from "@/components/ui/GithubStarsButton";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from '@vercel/speed-insights/next';

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
    default: "Rafiul Islam | Full Stack Web Developer",
    template: "%s | Rafiul Islam - Full Stack Developer",
  },
  description:
    "Rafiul Islam is a top-tier Full Stack Web Developer specializing in high-performance applications with Next.js, React.js, Laravel, Django, Node.js, and modern REST APIs.",
  applicationName: "Rafiul Islam Portfolio",
  keywords: [
    "Rafiul Islam",
    "Dev Rafiul Islam",
    "Developer Rafiul Islam",
    "Rafiul Islam Full Stack Developer",
    "Rafiul Islam Web Developer",
    "Hire Rafiul Islam",
    "Top Full Stack Developer",
    "Next.js Developer Portfolio",
    "React Developer Portfolio",
    "Laravel Backend Developer",
    "Django Backend Developer",
    "MERN Stack Developer",
    "Backend Developer Portfolio",
    "Software Engineer Rafiul"
  ],
  authors: [{ name: "Rafiul Islam", url: "/" }],
  creator: "Rafiul Islam",
  publisher: "Rafiul Islam",
  metadataBase: new URL("https://rafiul-islam-dev.vercel.app"),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Rafiul Islam | Full Stack Developer",
    description:
      "Explore the portfolio of Rafiul Islam, a Full Stack Developer transforming ideas into high-performance web applications using modern web technologies.",
    url: "/",
    siteName: "Rafiul Islam Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Rafiul Islam - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafiul Islam | Full Stack Developer",
    description: "Check out the portfolio of Rafiul Islam, building scalable web applications.",
    images: ["/profile.png"],
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
  alternates: {
    canonical: "/",
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
    name: "Rafiul Islam",
    alternateName: "Dev Rafiul Islam",
    url: "https://rafiul-islam-dev.vercel.app",
    image: "https://rafiul-islam-dev.vercel.app/profile.png",
    jobTitle: "Full Stack Web Developer",
    description: "Expert Full Stack Developer specializing in MERN stack, Next.js, Laravel, and Django.",
    knowsAbout: [
      "Web Development",
      "Full Stack Development",
      "Next.js",
      "React.js",
      "Node.js",
      "Laravel",
      "Django",
      "Software Engineering"
    ],
    sameAs: [
      "https://github.com/Rafiul29",
      "https://www.linkedin.com/in/rafiul-islam-cse/"
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
          {children}
          <ScrollToTop />
          <GithubStarsButton />
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
