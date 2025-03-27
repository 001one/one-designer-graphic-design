import { Brush, Image, Palette } from "lucide-react";

export default function FeaturedServices() {
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold text-center text-gray-800">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center">
          <Brush className="text-blue-500 w-10 h-10" />
          <h3 className="text-lg font-semibold mt-4">Custom Designs</h3>
          <p className="text-gray-600 text-center">Tailor-made designs for your needs.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center">
          <Image className="text-purple-500 w-10 h-10" />
          <h3 className="text-lg font-semibold mt-4">High-Quality Thumbnails</h3>
          <p className="text-gray-600 text-center">Eye-catching thumbnails for YouTube.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center">
          <Palette className="text-green-500 w-10 h-10" />
          <h3 className="text-lg font-semibold mt-4">Creative Branding</h3>
          <p className="text-gray-600 text-center">Logos, banners, and full branding kits.</p>
        </div>
      </div>
    </div>
  );
}
