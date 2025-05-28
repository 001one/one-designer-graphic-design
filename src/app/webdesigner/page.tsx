import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import HelpSection from "@/components/HelpSection";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Testimonials from "@/components/Testimonials";
import VisionSection from "@/components/VisionSection";
import WebDevFAQSection from "@/components/WebDevFAQSection";
import WorkstationSection from "@/components/WorkstationSection";

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
       <ContactSection/>
    </div>
  )
}

export default page