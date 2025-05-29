import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"
import ClientMessageForm from "@/components/ClientMessageForm";
import ContactSection from "@/components/ContactSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.onedesignersdesign.com"),
  title: "NEEO Designers | Web & Graphic Design Services – Thumbnails, Websites, Branding & More",
  description:
    "NEEO Designers offers professional web and graphic design services — from custom websites and UI/UX to YouTube thumbnails, branding, posters, and more. High-quality, creative design solutions delivered with speed and style.",
  keywords: [
    "NEEO Designers",
    "web design services",
    "graphic design studio",
    "UI/UX design",
    "portfolio website designer",
    "branding and logo design",
    "freelance web developer",
    "poster and flyer design",
    "social media graphics",
    "responsive website design",
    "creative design agency",
    "YouTube thumbnail design",
    "professional web designer",
    "digital design services",
  ],
  authors: [{ name: "NEEO Designers" }],
  creator: "NEEO Designers",
  openGraph: {
    title: "NEEO Designers | Creative Web & Graphic Design Services Worldwide",
    description:
      "Explore NEEO Designers' portfolio of web and graphic design work — websites, branding, thumbnails, posters, and more. We deliver bold, polished designs that meet real business needs.",
    url: "https://www.onedesignersdesign.com",
    type: "website",
    siteName: "NEEO Designers",
    images: [
      {
        url: "/preview-image.png", // Ensure this file is in the /public folder
        width: 1200,
        height: 630,
        alt: "NEEO Designers - Web and Graphic Design Preview",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEEO Designers | Web & Graphic Design Solutions for Brands Worldwide",
    description:
      "Need standout web and graphic design? NEEO Designers creates websites, thumbnails, posters, and digital branding that capture attention and convert. Fast delivery, stunning results.",
    creator: "@yourhandle", // Replace with your actual Twitter/X handle if available
    images: ["/preview-image.png"],
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
        <meta name="author" content="NEEO Designers" />
        <meta name="robots" content="index, follow, noarchive" />
          <link rel="icon" href="/favicon.ico" sizes="any" />


          
        {/* Add Favicon Links */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Analytics />
        <ClientMessageForm/>
          <ContactSection/>
        <ScrollToTop />
        <Footer />

      </body>
    </html>
  );
}
