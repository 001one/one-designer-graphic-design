'use client'
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
    {
        question: "How much do you charge for your graphic design services?",
        answer:
          "My pricing is tailored to each project, ensuring you get the best value for your specific needs. Let's discuss your vision, and I’ll craft a design solution that fits your goals and budget. Feel free to reach out, and let’s create something amazing together!",
      },
    {
    question: "What graphic design services do you offer?",
    answer:
      "I offer a wide range of graphic design services, including logo design, branding, social media graphics, marketing materials, and website assets tailored to your needs.",
  },
  {
    question: "How does the design process work?",
    answer:
      "The process starts with understanding your vision, followed by concept creation, revisions based on your feedback, and final delivery of high-quality designs.",
  },
  {
    question: "Can I request revisions?",
    answer:
      "Yes! I provide multiple revision rounds to ensure the final design perfectly matches your expectations and brand identity.",
  },
  {
    question: "What file formats will I receive?",
    answer:
      "You will receive designs in various formats such as PNG, JPG, PDF, and vector formats like AI or SVG for scalability.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply reach out with your design needs, and we’ll discuss your project details, goals, and timeline to get started!",
  },
 
  
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="about" className="max-w-4xl md:max-w-7xl mx-auto p-6 shadow-2xl mt-7 md:mt-17">
      <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg p-4">
            <button
              className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-800"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;