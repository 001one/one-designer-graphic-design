import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "E-commerce Flower App",
    image: "/project1.jpg",
    link: "https://www.happierparadiseflorist.com/",
  },
  {
    title: "Graphic Design Mobile UI",
    image: "/project2.jpg",
    link: "https://www.onedesignersdesign.com/",
  },
];

const RecentProjects = () => {
  return (
    <section className="px-6 md:px-16 py-16 bg-white mt-30 md:mt-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        RECENT PROJECTS
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-15">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition duration-300 hover:scale-105 rounded-xl overflow-hidden shadow-md hover:shadow-xl block"
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
              <h3 className="text-2xl font-semibold text-orange-600 active:text-blue-600 hover:text-blue-600 transition duration-300">{project.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
