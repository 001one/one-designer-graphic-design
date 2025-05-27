import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className=" flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-gradient-to-b from-white via-[#f5b979] to-[#ffffff]">
      
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <div className="md:text-8xl font-light italic leading-none md:ml-120 md:whitespace-nowrap text-5xl ">
          <span>Hey,</span> <span className="not-italic md:ml-70">there</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          I AM <br /> <span className="text-black">MADISON</span>
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
      <div className="md:w-1/2 mt-10 md:mt-0 relative flex justify-center items-center ">
        <Image
          src="/profile.png"
          alt="Madison"
          width={450}
          height={800}
          className="w-auto md:h-[800px] object-cover h-[500px]  md:mr-250"
          priority
        />
        <div className="absolute bottom-4 right-4 text-2xl font-bold text-black max-w-xs md:text-black top-130">
          Specialized in Web Design,Backend and Front End Development, UX / UI, Webflow, 
        </div>
      </div>
    </section>
  );
};

export default Hero;
