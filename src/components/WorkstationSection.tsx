// // components/WorkstationSection.tsx
// import React from "react";
import Image from "next/image";

const tools = [
  {
    title: "MacBook Pro M3",
    description: "Ultra-fast performance with a sleek Retina display — my daily driver for design and development.",
    image: "/macbook.jpg",
  },
  {
    title: "Figma + Adobe Suite",
    description: "For prototyping, UI/UX design, animation, and stunning visuals — the backbone of my design process.",
    image: "/figma.jpg",
  },
  {
    title: "Next.js + Tailwind CSS",
    description: "Clean, scalable code with lightning-fast builds and responsive styling.",
    image: "/code.jpg",
  },
  {
    title: "Notion + Trello",
    description: "My productivity stack for managing tasks, timelines, and client collaboration.",
    image: "/notion.jpeg",
  },
];

const WorkstationSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-12 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 uppercase">
        My Workstation
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {tools.map((tool, index) => (
          <div key={index} className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300">
            <Image
              src={tool.image}
              alt={tool.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {tool.title}
              </h3>
              <p className="text-sm text-gray-600">{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkstationSection;
