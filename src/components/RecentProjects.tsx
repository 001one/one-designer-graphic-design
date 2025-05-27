import Image from "next/image";
// import React from "react";

interface Project {
  title: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "E-commerce Flower App",
    image: "/project1.jpg",
  },
  {
    title: "Graphic Design Mobile UI",
    image: "/project2.jpg",
  },
];

const RecentProjects: React.FC = () => {
  return (
    <section className="px-6 md:px-16 py-16 bg-white mt-30 md:mt-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        RECENT PROJECTS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
