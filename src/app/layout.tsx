import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/lib/theme-provider";
import { portfolio } from "@/data/portfolio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = portfolio.settings.siteUrl;
const siteName = `${portfolio.profile.name} | ${portfolio.profile.professionalTitle}`;
const siteDescription = portfolio.settings.siteDescription;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${portfolio.profile.name}`,
  },
  description: siteDescription,
  keywords: [
    "software developer",
    "web developer",
    "full-stack developer",
    "Rwanda",
    "React",
    "Next.js",
    "Node.js",
    "portfolio",
  ],
  authors: [{ name: portfolio.profile.name }],
  creator: portfolio.profile.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: "/me.png",
        width: 512,
        height: 512,
        alt: `${portfolio.profile.name} - ${portfolio.profile.professionalTitle}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/me.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b1120" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: portfolio.profile.name,
  jobTitle: portfolio.profile.professionalTitle,
  description: siteDescription,
  email: `mailto:${portfolio.profile.email}`,
  telephone: portfolio.profile.phone,
  address: {
    "@type": "PostalAddress",
    addressCountry: "RW",
    addressLocality: portfolio.profile.location,
  },
  url: siteUrl,
  image: `${siteUrl}/me.png`,
  sameAs: [
    portfolio.profile.github,
    portfolio.profile.linkedin,
    portfolio.profile.youtube,
  ].filter(Boolean) as string[],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  description: siteDescription,
  url: siteUrl,
  author: {
    "@type": "Person",
    name: portfolio.profile.name,
    url: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([personJsonLd, websiteJsonLd]),
        }}
      />
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}