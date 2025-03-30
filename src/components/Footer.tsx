import Link from "next/link";
import { Mail, Phone, Instagram, Dribbble,  } from "lucide-react";

export default function Footer() {
  return (
    <footer  className="bg-gray-900 text-gray-300 py-10 mt-10 md:mt-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Contact Section */}
          <div>
            <h2 className="text-lg font-semibold text-white">Get in Touch</h2>
            <p className="mt-2">Let's bring your vision to life! Reach out to discuss your project.</p>
            <div className="mt-4">
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:your@email.com" className="hover:text-blue-400">ericone141@gmail.com</a>
              </p>
              <p className="flex items-center gap-2 mt-2">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+254707200031" className="hover:text-blue-400">+254707200031</a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold text-white">Quick Links</h2>
            <ul className="mt-2 space-y-2">
              <li><Link href="#home" className="hover:text-blue-400">Home</Link></li>
              <li><Link href="#home" className="hover:text-blue-400">Portfolio</Link></li>
              <li><Link href="#about" className="hover:text-blue-400">Services</Link></li>
              <li><Link href="#about" className="hover:text-blue-400">FAQs</Link></li>
              <li><Link href="#contact" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-lg font-semibold text-white">Follow Me</h2>
            <p className="mt-2">Check out my latest designs and projects.</p>
            <div className="flex gap-4 mt-4">
              <a href="https://www.instagram.com/one_designer_1/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 text-2xl">
                <Instagram className="w-6 h-6" />
              </a>
              {/* <a href="https://dribbble.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 text-2xl">
                <Dribbble className="w-6 h-6" />
              </a> */}
             
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
          <p>&copy; {new Date().getFullYear()} NEEEO designers. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
