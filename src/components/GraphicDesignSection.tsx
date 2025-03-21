import Image from "next/image";
import Link from "next/link";

const GraphicDesignSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-6 bg-white rounded-2xl shadow-lg max-w-5xl mx-auto">
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Elevate Your Brand with Stunning Designs
        </h2>
        <p className="text-gray-700 mb-6 text-2xl">
          Elevate your brand with stunning, high-quality graphic designs that captivate and inspire. Whether you need a striking logo, engaging social media graphics, or eye-catching marketing materials, I create visuals that leave a lasting impact. Stand out from the competition—let’s bring your vision to life today!
        </p>
        <Link href="#about" className="px-6 py-2 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition">
          Learn More About My Designs
        </Link>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <Image
          src="/june.png" 
          alt="Graphic Design Workspace"
          width={450}
          height={450}
          className="rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default GraphicDesignSection;
