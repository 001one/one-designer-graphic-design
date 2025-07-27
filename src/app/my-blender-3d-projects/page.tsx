import CategorySidebar from "@/components/(upwork portofolio)/NameBar";
import VideoSection from "@/components/(upwork portofolio)/VideoSection";
import Carousel from "@/components/Carousel";
import CTA from "@/components/CTA";
import FAQSection from "@/components/FAQSection";
import FeaturedServices from "@/components/FeaturedServices";
import Footer from "@/components/Footer";
import SidebarContent from "@/components/sidebarcontent";
import Testimonials from "@/components/Testimonials";
import { Suspense } from "react";


const slides = [
  { image: "/blender/1.jpg", text: "Glasses 3D Visualisation" },
  { image: "/blender/2.jpg", text: "Interior 3D Visualisation" },
  { image: "/blender/3.jpg", text: "Purse 3D Visualisation" },
  { image: "/blender/4.jpg", text: "Soda 3D Visualisation" },
  { image: "/blender/5.jpg", text: "Zack D. 3D Visualisation" },
];

const page = () => {
  return (
    
<main className="w-full min-h-screen mt-25 md:mt-20 px-2">
    <Suspense>
     <div className="hidden lg:flex justify-between items-start gap-6 mb-8">
  
    {/* <div className="w-1/4">
          <CategorySidebar/>
    </div> */}
    <div className="w-full min-h-[75vh] flex justify-center items-center">
  <Carousel slides={slides} />
</div>

         {/* <div className="w-1/4">
          <SidebarContent />
        </div> */}
       </div>
       {/* Carousel for Small Screens */}
      <div className="lg:hidden">
  <Carousel slides={slides} />
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
    text="Experience a high-end 3D animation of Chanel perfume. A showcase of luxury design, realism, and visual storytelling using Blender."
  />
</Suspense>

<Suspense>
  <VideoSection
    videoId="NUv86BCLN7U"
    text="Step inside a modern 3D-rendered interior. A clean, realistic space designed in Blender to showcase lighting, layout, and atmosphere."
    reverse
  />
</Suspense>

<Suspense>
  <VideoSection
    videoId="DR5gizDUILA"
    text="Go behind the scenes of the Zack D animation. A glimpse into the process, creativity, and Blender workflow behind this short film project."
  />
</Suspense>

<Suspense>
  <VideoSection
    videoId="-rwacuYwvys"
    text="A refreshing 3D soda animation brought to life with vibrant colors, liquid motion, and realistic materials — all created in Blender."
    reverse
  />
</Suspense>



        </div>  
        
        
        <section>
        <FAQSection />
        {/* <ContactSection /> */}
      </section>
      <Testimonials />

       <CTA />
       {/* <ContactSection />
       <AboutSection/> */}
    {/* <Footer /> */}

     </Suspense>
    </main>
        );
      }

      export default page