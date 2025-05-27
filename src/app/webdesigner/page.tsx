import ExperienceSection from "@/components/ExperienceSection";
import HelpSection from "@/components/HelpSection";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Testimonials from "@/components/Testimonials";
import VisionSection from "@/components/VisionSection";
import WorkstationSection from "@/components/WorkstationSection";

const page = () => {
  return (
    <div>
      <Hero />
      <RecentProjects />
       <HelpSection />
       <VisionSection />
       <ExperienceSection />
       <WorkstationSection />
       <Testimonials/>
    </div>
  )
}

export default page