import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface VideoTextBlockProps {
  text: string;
}

export default function VideoTextBlock({ text }: VideoTextBlockProps) {
  return (
    <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-6">
      <p className="  text-gray-700 leading-relaxed max-w-prose text-2xl font-bold">
        {text}
      </p>

    
      <div className="flex gap-4 mt-10 ">
        {/* Primary Link */}
        <Link
          href="/my-blender-3d-projects/videos"
           className="active:text-white active:bg-blue-600 text-black hover:text-white hover:bg-blue-600 font-semibold p-5 rounded-full flex items-center gap-2 group transition duration-300 whitespace-nowrap  bg-blue-500"
        > 
          Watch Our Full Videos
          <ArrowRight className="w-7 h-7 transform transition-transform duration-300 group-hover:translate-x-3" />
        </Link>

        {/* Secondary Link */}
       {/* <Link
  href="/odds-screen"
  className=" text-black hover:text-blue-500 font-semibold px-5 py-2 rounded-full flex items-center gap-2 group transition duration-300"
>
  More about Odds Screen
  <ArrowRight className="w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-2" />
</Link> */}
      </div>
    
    </div>
  );
}
