import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "One Designers | Professional Graphic Design Services - Thumbnails, Posters & More",
  description:
    "One Designers, based in Kenya, offers premium graphic design services, including YouTube thumbnails, skin retouching, posters, invitation cards, church cards, and more. High-quality designs with fast delivery worldwide!",
  keywords:
    "One Designers, Kenya graphic design, YouTube thumbnails, skin retouching, invitation cards, church cards, poster design, social media graphics, logo design, professional design services",
  openGraph: {
    title: "One Designers | Professional Graphic Design Services - Thumbnails, Posters & More",
    description:
      "Discover One Designers' high-quality graphic design services, based in Kenya, including YouTube thumbnails, posters, invitations, church cards, and more. Affordable pricing & quick turnaround!",
    url: "https://yourwebsite.com",
    type: "website",
    images: [
      {
        url: "https://yourwebsite.com/preview-image.jpg",
        width: 1200,
        height: 630,
        alt: "One Designers - Graphic Design Services in Kenya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "One Designers | Professional Graphic Design Services - Thumbnails, Posters & More",
    description:
      "One Designers, a Kenya-based design studio, provides stunning graphic design solutions for YouTube thumbnails, posters, invitations, church cards & more!",
    images: ["https://yourwebsite.com/preview-image.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="One Designers" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Analytics />
        <ScrollToTop />
        <Footer />

      </body>
    </html>
  );
}
