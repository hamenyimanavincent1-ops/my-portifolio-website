import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/lib/theme-provider";
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
  title: {
    default: "HAMENYIMANA Vincent | Software Developer",
    template: "%s | HAMENYIMANA Vincent",
  },
  description:
    "Software Developer from Rwanda building practical digital solutions with modern web technologies. Specializing in full-stack web development, APIs, and database-driven systems.",
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
  authors: [{ name: "HAMENYIMANA Vincent" }],
  creator: "HAMENYIMANA Vincent",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vincenthamenyimana.dev",
    siteName: "HAMENYIMANA Vincent | Software Developer",
    title: "HAMENYIMANA Vincent | Software Developer",
    description:
      "Software Developer from Rwanda building practical digital solutions with modern web technologies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "HAMENYIMANA Vincent | Software Developer",
    description:
      "Software Developer from Rwanda building practical digital solutions with modern web technologies.",
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
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
