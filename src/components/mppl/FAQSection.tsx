'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Who can participate in MPPL?',
    answer:
      'MPPL is open for everyone aged 10 to 60 years — from complete beginners to professional players. All skill levels are welcome.',
  },
  {
    question: 'Where are the qualifying rounds held?',
    answer:
      '4 qualifying rounds will be held across 4 different cities in Madhya Pradesh. Exact venues will be announced soon.',
  },
  {
    question: 'How does the player auction work?',
    answer:
      'After the qualifying rounds, top-performing players will be drafted into franchise teams through a live auction process.',
  },
  {
    question: 'What is the total prize pool?',
    answer:
      'The total prize pool for MPPL 2026 is ₹18 Lac+, distributed across multiple categories and placements.',
  },
  {
    question: 'When does MPPL start?',
    answer:
      'The qualifying rounds are planned to start in June 2026. Exact dates and registration details will be announced on our social channels.',
  },
  {
    question: 'How many categories are there?',
    answer:
      'MPPL features 15+ categories covering different age groups, skill levels, and formats to ensure everyone has a competitive bracket.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-deep-court w-full py-24 px-6 lg:px-16 pattern-arcs-bl">
      <div className="max-w-3xl mx-auto pattern-content">
        {/* Section label */}
        <span className="section-label">FAQ</span>

        <h2 className="font-bebas text-net-white text-[clamp(40px,6vw,72px)] leading-none mb-12">
          GOT QUESTIONS?
        </h2>

        {/* Accordion */}
        <div>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-white/10">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center py-5 text-left group cursor-pointer"
                >
                  <span
                    className={`font-montserrat font-bold text-base sm:text-lg transition-colors duration-300 ${
                      isOpen ? 'text-neon-green' : 'text-net-white'
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Chevron */}
                  <svg
                    className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 text-neon-green'
                        : 'rotate-0 text-net-white/50'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Answer panel */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="font-dm-sans text-net-white/70 pb-5 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
