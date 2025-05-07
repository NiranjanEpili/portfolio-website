import { Space_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import CursorEffect from "@/components/CursorEffect";
import type { Metadata, Viewport } from "next";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.niranjanepili.me"),
  title: {
    default: "Niranjan Epili | AI/ML Engineer & Cybersecurity Expert",
    template: "%s | Niranjan Epili"
  },
  description: "Expert in AI/ML, cybersecurity, and entrepreneurship with proven projects and Google certifications. Portfolio of Niranjan Epili showing skills in ethical hacking and startup leadership.",
  keywords: ["Niranjan Epili", "AI/ML Engineer", "Cybersecurity Expert", "Portfolio", "Ethical Hacking", "Startup Founder", "Google Cybersecurity"],
  authors: [{ name: "Niranjan Epili", url: "https://www.niranjanepili.me" }],
  creator: "Niranjan Epili",
  publisher: "Niranjan Epili",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://www.niranjanepili.me",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Niranjan Epili | AI/ML Engineer & Cybersecurity Expert",
    description: "Expert in AI/ML, cybersecurity, and entrepreneurship with proven projects and Google certifications.",
    url: "https://www.niranjanepili.me",
    siteName: "Niranjan Epili Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.niranjanepili.me/og-image.png",
        width: 1200,
        height: 630,
        alt: "Niranjan Epili Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Niranjan Epili | AI/ML Engineer & Cybersecurity Expert",
    description: "Expert in AI/ML, cybersecurity, and entrepreneurship with proven projects and Google certifications.",
    creator: "@niranjanepili",
    images: ["https://www.niranjanepili.me/twitter-image.png"],
  },
  verification: {
    google: "su0N2g13YZIe1s8FQqquO2FMdrDJaBq0BqWl9h0Aljg", // Google site verification
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#000" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceMono.variable}>
      <head>
        <meta name="google-site-verification" content="su0N2g13YZIe1s8FQqquO2FMdrDJaBq0BqWl9h0Aljg" />
        <link rel="canonical" href="https://www.niranjanepili.me" />
      </head>
      <body>
        <LanguageProvider>
          <CursorEffect />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
