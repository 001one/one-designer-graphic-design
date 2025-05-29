import Image from "next/image";

const Hero: React.FC = () => {
  return (
 <section className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 py-12 bg-gradient-to-b from-white via-[#f5b979] to-[#ffffff]">


      {/* Left Content */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <div className="md:text-8xl font-light italic leading-none xl:ml-80 2xl:ml-170 md:whitespace-nowrap text-5xl ">
          <span>Hey,</span> <span className="not-italic lg:ml-70">there</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          I AM <br /> <span className="text-black">ERICK</span>
        </h1>

        <p className="text-xl font-semibold text-right md:text-left">
          A <br /> WEB <br /> DESIGNER
        </p>

        <div className="flex justify-center md:justify-start">
          <button className="mt-4 bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition">
            Available for new opportunities
          </button>
        </div>
      </div>

      {/* Right Image */}
     {/* Right Image + Description */}
<div className="md:w-1/2 mt-10 md:mt-0 flex flex-col items-center justify-center relative">
  <Image
    src="/profile.png"
    alt="Madison"
    width={450}
    height={800}
    className="w-full max-w-[650px] h-auto object-contain md:w-[600px] lg:mr-150"
    priority
  />

  {/* Description below image on mobile, absolutely positioned on md+ */}
  <div className="text-2xl font-bold text-black max-w-xs text-center mt-4 
                  lg:absolute lg:bottom-4 lg:right-4 lg:text-left lg:mt-10">
    Specialized in Web Design, Backend and Front End Development, UX / UI, Webflow,
  </div>
</div>

    </section>
  );
};

export default Hero;
