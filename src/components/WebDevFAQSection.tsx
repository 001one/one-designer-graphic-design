'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const webDevFaqs: FAQ[] = [
  {
    question: 'What technologies do you specialize in?',
    answer:
      'I specialize in React, Next.js, TypeScript,Sanity ,Node.js, Express, and MongoDB enabling me to build complete, scalable web apps.',
  },
  {
    question: 'Do you build responsive websites?',
    answer:
      'Yes! All websites I create are mobile-friendly and fully responsive to deliver a seamless experience on all screen sizes.',
  },
  {
    question: 'Can you handle both frontend and backend development?',
    answer:
      'Absolutely. I build beautiful UIs and also develop robust backend services, APIs, and database integrations.',
  },
  {
    question: 'How long does a typical website project take?',
    answer:
      'Timelines vary, but most projects are completed within 2–6 weeks, depending on complexity and requirements.',
  },
  {
    question: 'Will I be able to update my website later?',
    answer:
      'Yes, I offer CMS integrations or admin panels so you can easily manage your content, or I can assist with ongoing updates.',
  },
  {
    question: 'Do you optimize websites for performance and SEO?',
    answer:
      'Yes, performance, accessibility, and SEO best practices are built into every project I deliver.',
  },
];

const WebDevFAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl md:max-w-7xl mx-auto p-6 shadow-2xl mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Web Development FAQs</h2>
      <div className="space-y-4">
        {webDevFaqs.map((faq, index) => (
          <div key={index} className="border rounded-lg p-4">
            <button
              className="flex justify-between items-center w-full text-left text-lg  text-black font-bold"
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

export default WebDevFAQSection;
