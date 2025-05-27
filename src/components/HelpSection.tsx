// components/HelpSection.tsx


const services = [
  {
    number: "01",
    title: "UI/UX Design",
    description:
      "I craft intuitive and aesthetic user interfaces that align with user goals and brand identity.",
  },
  {
    number: "02",
    title: "Website Design",
    description:
      "The full cycle of services to create and launch a website from scratch or redesign a live website along.",
  },
  {
    number: "03",
    title: "Mobile App",
    description:
      "We create elegant user experience for applications that achieve business goals and make users happy.",
  },
  {
    number: "04",
    title: "The Full Package",
    description:
      "Get the best of both worlds—UI/UX, website, backend & frontend—and get fully functional apps.",
  },
];

const HelpSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-12 bg-white">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
        I CAN HELP YOU WITH
      </h2>
      <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-gray-300">
        {services.map((service, idx) => (
          <div
            key={service.number}
            className="flex-1 px-4 py-8 text-center sm:text-left"
          >
            <span className="text-2xl font-semibold text-gray-300">
              {service.number}
            </span>
            <h3 className="text-lg font-semibold text-gray-800 mt-2">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HelpSection;
