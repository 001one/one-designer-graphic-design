import Image from "next/image";
// import React from "react";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Emily Johnson",
    role: "CEO, BrightTech",
    image: "/testimonial1.jpg",
    quote:
      "Working with Madison was a breeze. The design exceeded our expectations and delivered on time!",
  },
  {
    name: "James Carter",
    role: "Product Manager, FlowUI",
    image: "/testimonial2.jpg",
    quote:
      "Madison truly understands UX. Our conversion rates improved dramatically after the redesign.",
  },
  {
    name: "Sofia Lee",
    role: "Founder, Creativa Studio",
    image: "/testimonial3.jpg",
    quote:
      "Professional, creative, and detail-oriented — Madison is an asset to any design project.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="px-6 md:px-16 py-20 bg-[#f9f9f9]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        What Clients Say
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 relative rounded-full overflow-hidden mb-4">
              <Image
                src={t.image}
                alt={t.name}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-gray-600 italic mb-4">“{t.quote}”</p>
            <h4 className="font-semibold text-lg">{t.name}</h4>
            <span className="text-sm text-gray-500">{t.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
