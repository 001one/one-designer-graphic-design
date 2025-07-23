"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Send me an Email", href: "/#send me a message" },
   
    { name: "About Us", href: "/#about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md my-1 md:my-5 p-4 rounded-lg hover:shadow-2xl  ">
<div className="max-w-7xl mx-auto flex items-center justify-center px-4 py-4 md:px-6 relative">
        {/* Logo */}
        <Link
  href="#home"
  className="flex items-center space-x-2 absolute left-4 md:left-6"
>

          <Image
            src="/logo.png"
            alt="OpticOdds Logo"
            width={50}
            height={50}
            className="object-contain"
          />
          <span className="md:text-5xl text-3xl font-bold  hover:text-blue-500 text-blue-500  active:text-amber-300 ">NEEO</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-white  hover:bg-blue-500  hover:rounded-lg  transition-colors duration-200 hover:scale-110 p-3"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Call-to-Action Button */}
     <div className="hidden md:block absolute right-4 md:right-6">

  <Link
    href="/my-blender-3d-projects/videos"
    className="group bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-200 shadow hover:shadow-2xl flex items-center gap-2 whitespace-nowrap  hover:scale-110"
  >
   My Blender 3D Projects YouTube videos
    <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-5" />
  </Link>
</div>


        {/* Mobile Menu Button */}
        <button
  onClick={() => setIsOpen(!isOpen)}
  className="md:hidden text-gray-700 hover:text-blue-600 absolute right-4"
  aria-label="Toggle menu"
>
  {isOpen ? <X size={24} /> : <Menu size={24} />}
</button>

      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-2 px-4 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-white hover:bg-blue-500 p-2 hover:scale-105 hover:rounded-lg transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/my-blender-3d-projects/videos"
              onClick={() => setIsOpen(false)}
              className="group bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-200 shadow hover:shadow-2xl flex items-center gap-2 whitespace-nowrap  "
  >
   My Blender 3D Projects YouTube videos
    <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-5 hover:Scale-155" />
            
             
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
