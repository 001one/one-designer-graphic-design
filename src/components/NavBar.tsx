'use client'

import { useState } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Navbar Container */}
            <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 lg:px-8 bg-white shadow-md mx-4 rounded-b-xl mt-1 mb-10 md:mb-2 hover:shadow-2xl">
                {/* Logo Section */}
             
                <Link href="#home" className="flex items-center bg-gradient-to-r from-violet-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent  font-bold hover:text-blue-600 text-xl md:text-5xl ">
                <Image
                src="/logo.png"
                width={50}
                height={50}
                alt="logo"
                className="object-contain shadow-2xl"
                />
                  NEEO Designers 
               
                  <span className="text-orange-500 md:text-2xl ml-2 hover:text-blue-600 text-xs ">★</span>
                </Link>

                {/* Centered Navigation Links (Hidden on Mobile) */}
                <nav className="hidden lg:flex space-x-8 text-lg p-4">
                    {["Home", "About", "Contact"].map((item) => (
                        <div key={item} className="relative group">
                            <Link href={`#${item.toLowerCase()}`} className="relative z-10 text-gray-800 px-4 py-2 transition-colors duration-300 group-hover:text-white">
                                {item}
                            </Link>
                            {/* Light Blue Rounded Box Hover Effect */}
                            <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 p-6"></div>
                        </div>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(true)} className="lg:hidden p-2 text-black hover:text-blue-600 cursor-pointer">
                    <Menu size={28} />
                </button>
            </div>

            {/* Mobile Sidebar Menu */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)}></div>
            )}

            <div className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-50 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}>
                <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-black hover:text-blue-600 cursor-pointer">
                    <X size={28} />
                </button>

                {/* Mobile Navigation Links */}
               {/* Mobile Navigation Links */}
<nav className="flex flex-col text-lg px-6 py-8 space-y-4">
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition">Get your custom design</div>
    <Link href="#home" className="block text-gray-800 hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
    <Link href="#about" className="block text-gray-800 hover:text-blue-600" onClick={() => setIsOpen(false)}>About</Link>
    <Link href="#contact" className="block text-gray-800 hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</Link>

</nav>


                {/* Contact Info */}
                <div className="absolute bottom-6 w-full text-center text-gray-600">
                    Call or Text:{" "}
                    <a href="tel:0707200031" className="text-blue-600 font-semibold">
                        (254) 707200031
                    </a>
                </div>
            </div>
        </>
    );
}

export default Navbar;
