// components/VisionSection.tsx

import Image from "next/image";

const VisionSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-12 bg-gradient-to-r from-white via-yellow-50 to-white">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 uppercase">
        Turning My Vision
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Image */}
        <div className="w-full lg:w-2/3">
          <Image
            src="/workspace.jpg" // Replace with your image path
            alt="Workstation"
            width={800}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Stats */}
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <div>
            <p className="text-4xl font-extrabold text-yellow-500">89+</p>
            <p className="text-gray-700 text-sm uppercase tracking-wide">Completed Projects</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-yellow-500">18+</p>
            <p className="text-gray-700 text-sm uppercase tracking-wide">Different Countries</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
