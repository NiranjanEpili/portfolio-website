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
    template: "Niranjan Epili | %s"
  },
  description: "Niranjan Epili is an expert in AI/ML engineering, cybersecurity, and entrepreneurship with Google certifications. Visit Niranjan Epili's professional portfolio showcasing innovative projects and technical skills.",
  keywords: [
    "Niranjan Epili", "Niranjan", "Epili", 
    "AI Engineer", "ML Engineer", "Machine Learning", 
    "Cybersecurity Expert", "Ethical Hacking", "Google Certified", 
    "Portfolio", "Software Developer", "Startup Founder", 
    "Tech Entrepreneur", "Full Stack Developer", "Security Researcher"
  ],
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
    languages: {
      'en-US': 'https://www.niranjanepili.me',
    },
  },
  category: 'technology',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.niranjanepili.me",
    siteName: "Niranjan Epili Portfolio",
    title: "Niranjan Epili | AI/ML Engineer & Cybersecurity Expert",
    description: "Expert in AI/ML engineering, cybersecurity, ethical hacking with Google certifications. Discover my innovative projects and professional skills.",
    images: [
      {
        url: "https://www.niranjanepili.me/og-image.png",
        width: 1200,
        height: 630,
        alt: "Niranjan Epili - AI/ML Engineer & Cybersecurity Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Niranjan Epili | AI/ML Engineer & Cybersecurity Expert",
    description: "Expert in AI/ML engineering, cybersecurity, ethical hacking with Google certifications.",
    creator: "@niranjanepili",
    images: ["https://www.niranjanepili.me/twitter-image.png"],
  },
  verification: {
    google: "su0N2g13YZIe1s8FQqquO2FMdrDJaBq0BqWl9h0Aljg",
    yandex: "verification_code",
    yahoo: "verification_code",
    other: {
      me: ["mailto:niranjanepili@outlook.in", "https://linkedin.com/in/niranjanepili"]
    }
  },
  appLinks: {
    web: {
      url: "https://www.niranjanepili.me",
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      }
    ],
  }
};

export const viewport: Viewport = {
  themeColor: '#ff5722',
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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
