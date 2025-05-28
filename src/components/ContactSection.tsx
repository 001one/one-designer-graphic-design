import { Mail, MessageCircle, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6 mt-7 md:mt-15">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <p className="text-gray-400 mb-8">
        <span className="text-green-400 font-semibold"></span> 
          Let's bring your design ideas to life. 🚀
        </p>

        <div className="flex flex-col justify-center gap-6">
          {/* Email Contact */}
          <a
            href="mailto:ericone141@gmail.com"
            className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 py-3 px-6 rounded-lg transition-all duration-300"
          >
            <Mail className="w-6 h-6 text-blue-400" />
            <span>Email Me</span>
            <span>ericone141@gmail.com</span>
          </a>

          {/* WhatsApp Contact */}
          <a
            href="https://wa.me/254707200031"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-600 hover:bg-green-500 py-3 px-6 rounded-lg transition-all duration-300"
          >
            <MessageCircle className="w-6 h-6 text-white" />
            <span>WhatsApp</span>
            <span>+254707200031</span>
          </a>

          {/* Phone Contact */}
          <a
            href="tel:+254707200031"
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 py-3 px-6 rounded-lg transition-all duration-300"
          >
            <Phone className="w-6 h-6 text-white" />
            <span>Call Me</span>
            <span>+254707200031</span>
          </a>

          {/* Discord Contact */}
          <a
            href="https://discord.com/users/YOUR_DISCORD_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 py-3 px-6 rounded-lg transition-all duration-300"
          >
           
            <span>Discord username</span>
            <span>ericone001</span>
          </a>
        </div>
      </div>
    </section>
  );
}
