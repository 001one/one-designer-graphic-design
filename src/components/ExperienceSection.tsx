

const experiences = [
  {
    period: "2018–24",
    title: "Visual Design",
    skills: [
      "Figma",
      "Photoshop",
      "After Effects",
      "Final Cut",
      "Midjourney",
    ],
  },
  {
    period: "2018–24",
    title: "Development",
    skills: [
      "JavaScript",
      "HTML & CSS",
      "Webflow",
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Xano",
    ],
  },
  {
    period: "2022–24",
    title: "Project Management",
    skills: [
      "Notion",
      "Google Table",
      "Microsoft To Do",
      "Trello",
    ],
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-12 bg-white">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center uppercase">
        Experience & Skills
      </h2>
      <div className="divide-y divide-gray-300">
        {experiences.map((exp, index) => (
          <div key={index} className="py-6 md:flex md:justify-between md:items-start">
            <div className="mb-2 md:mb-0 md:w-1/4 text-sm font-medium text-gray-700">
              {exp.period}
            </div>
            <div className="md:w-3/4">
              <h3 className="text-lg font-semibold text-gray-800">{exp.title}</h3>
              <ul className="flex flex-wrap gap-2 mt-2 text-sm text-gray-600">
                {exp.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="bg-gray-100 px-3 py-1 rounded-full border border-gray-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
