import CategorySidebar from "@/components/(upwork portofolio)/NameBar";
import VideoSection from "@/components/(upwork portofolio)/VideoSection";
import Carousel from "@/components/Carousel";
import CTA from "@/components/CTA";
import FAQSection from "@/components/FAQSection";
import FeaturedServices from "@/components/FeaturedServices";
import Footer from "@/components/Footer";
import SidebarContent from "@/components/sidebarcontent";
import { Suspense } from "react";

const page = () => {
  return (
    
<main className="w-full min-h-screen mt-25 md:mt-20 px-2">
    <Suspense>
     <div className="hidden lg:flex justify-between items-start gap-6 mb-8">
  
    {/* <div className="w-1/4">
          <CategorySidebar/>
    </div> */}
    <div className="w-full min-h-[75vh] flex justify-center items-center">
  <Carousel />
</div>

         {/* <div className="w-1/4">
          <SidebarContent />
        </div> */}
       </div>
       {/* Carousel for Small Screens */}
      <div className="lg:hidden">
  <Carousel />
</div>

      <h1 className="font-bold flex justify-center md:text-6xl text-3xl mt-5 text-blue-500">
  TRUSTED 3D ANIMATIONS FOR YOUR PROJECTS
</h1>
    
{/* 
           <FeaturedServices />
         <CTA /> */}

        <div className="md:my-12 my-3">
          <h2 className="text-2xl font-semibold mb-4 text-center mt-4">
            Intro Video
          </h2>
        <Suspense>
  <VideoSection
    videoId="EVhjfNgcrIU"
    text="Explore how Kirinyaga University students use animation to promote responsible computing. Watch our intro video and see how storytelling meets technology."
  />
</Suspense>

<Suspense>
  <VideoSection
    videoId="NUv86BCLN7U"
    text="Experience the finest floral arrangements with same-day delivery in Nairobi. Watch our introduction video to see what makes us unique."
    reverse
  />
</Suspense>

<Suspense>
  <VideoSection
    videoId="DR5gizDUILA"
    text="Experience the finest floral arrangements with same-day delivery in Nairobi. Watch our introduction video to see what makes us unique."
  />
</Suspense>

<Suspense>
  <VideoSection
    videoId="-rwacuYwvys"
    text="Experience the finest floral arrangements with same-day delivery in Nairobi. Watch our introduction video to see what makes us unique."
    reverse
  />
</Suspense>



        </div>  
        
        
        <section>
        <FAQSection />
        {/* <ContactSection /> */}
      </section>

       <CTA />
       {/* <ContactSection />
       <AboutSection/> */}
    {/* <Footer /> */}

     </Suspense>
    </main>
        );
      }

      export default page