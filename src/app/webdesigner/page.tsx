import ClientMessageForm from "@/components/ClientMessageForm";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import HelpSection from "@/components/HelpSection";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Testimonials from "@/components/Testimonials";
import VisionSection from "@/components/VisionSection";
import WebDevFAQSection from "@/components/WebDevFAQSection";
import WorkstationSection from "@/components/WorkstationSection";


// ✅ Metadata for SEO and social sharing
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.onedesignersdesign.com"),
  title: "Erick | Web Designer & Developer Portfolio",
  description:
    "Explore Erick’s professional web design and development portfolio — specializing in UI/UX, frontend, backend, and Webflow projects.",
  keywords: [
    "Erick Web Designer",
    "Frontend Developer Kenya",
    "Backend Developer",
    "UI/UX Designer",
    "Webflow Expert",
    "Responsive Design",
    "Freelance Web Developer",
    "Kenya Developer Portfolio",
  ],
  authors: [{ name: "Erick" }],
  creator: "Erick",
  openGraph: {
    title: "Erick | Web Designer & Developer Portfolio",
    description:
      "Browse Erick’s work in frontend and backend development, UI/UX design, and Webflow integration.",
    url: "https://www.onedesignersdesign.com/webdesigner",
    siteName: "Erick's Portfolio",
    images: [
      {
        url: "/workspace.jpg",
        width: 1200,
        height: 630,
        alt: "Erick Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Erick | Web Designer & Developer Portfolio",
    description:
      "See Erick’s portfolio featuring web design, development, UI/UX, and Webflow projects.",
    creator: "@yourhandle", // ← Replace with your actual Twitter handle if available
    images: ["/workspace.jpg"],
  },
};


const page = () => {
  return (
    <div className="mt-15">
      <Hero />
      <RecentProjects />
       <HelpSection />
       <VisionSection />
       <ExperienceSection />
       <WorkstationSection />
       <Testimonials/>
       <WebDevFAQSection />
     
             {/* <ClientMessageForm /> */}
    </div>
  )
}

export default page