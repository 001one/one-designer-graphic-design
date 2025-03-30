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
  title: "NEEO Designers | Kenya’s Best Graphic Design Services – Thumbnails, Posters & More",
  description:
    "NEEO Designers is a top-rated graphic design studio based in Kenya, providing high-quality services worldwide. Whether you need YouTube thumbnails, skin retouching, posters, invitation cards, church cards, or social media graphics, we deliver stunning designs with fast turnaround at affordable rates.",
  keywords:
    "NEEO Designers, graphic design Kenya, Nairobi graphic designer, African graphic design services, hire designer in Kenya, global graphic design, YouTube thumbnail design Kenya, professional skin retouching, invitation card design Nairobi, church card designs Kenya, poster design services, social media branding Kenya, affordable design services Nairobi, digital artwork Kenya, logo design services Kenya, custom business graphics Africa, freelance graphic designer Kenya",
  openGraph: {
    title: "NEEO Designers | Best Graphic Design Services in Kenya & Worldwide",
    description:
      "Looking for a professional graphic designer in Kenya? NEEO Designers offers high-quality services for YouTube thumbnails, posters, business branding, and more. Fast delivery, affordable pricing, and premium designs – serving Nairobi, Kenya, and clients worldwide!",
    url: "https://onedesignersdesign.com",
    type: "website",
    images: [
      {
        url: "https://onedesignersdesign.com/preview-image.png",
        width: 1200,
        height: 630,
        alt: "NEEO Designers - Top Graphic Design Services in Kenya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEEO Designers | Kenya-Based Graphic Design for Clients Worldwide",
    description:
      "Need a skilled graphic designer in Kenya? NEEO Designers provides expert YouTube thumbnails, posters, branding, and more with quick, affordable service. Serving Nairobi, Africa, and global clients!",
    images: ["https://onedesignersdesign.com/preview-image.png"],
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
