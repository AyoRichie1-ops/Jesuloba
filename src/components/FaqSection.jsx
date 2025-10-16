import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What services does Jesuloba Electrical Engineering Company offer?",
    answer:
      "At Jesuloba Electrical Engineering Company, we provide a wide range of energy and electrical services. Our core offerings include solar panel installations for homes and businesses, inverter system setup, professional electrical wiring, and energy consultation. We help clients transition to reliable and sustainable energy solutions that reduce electricity costs and improve power efficiency. Whether it’s a small residential project or a large commercial setup, we deliver top-quality service backed by years of experience and technical expertise.",
  },
  {
    question: "Do you provide maintenance after installation?",
    answer:
      "Yes, we do. Our relationship with clients doesn’t end after installation. We offer continuous maintenance services to ensure your solar and inverter systems perform efficiently over time. This includes regular inspections, battery performance checks, inverter updates, and general system optimization. If any issues arise, our support team is available to provide quick on-site or remote assistance. Our goal is to help you enjoy uninterrupted, clean energy with minimal downtime or technical problems.",
  },
  {
    question: "How long does a typical solar installation take?",
    answer:
      "The duration of a solar installation depends on the size and complexity of the project. For most residential systems, the process typically takes between 2 to 5 days, including design, setup, and testing. Larger commercial installations may take one to two weeks, especially if custom configurations or multiple inverter systems are involved. We always conduct a pre-installation inspection to determine the best system layout, ensuring efficiency, durability, and neatness in every project we handle.",
  },
  {
    question: "Can you work on both residential and commercial projects?",
    answer:
      "Absolutely. Our team is equipped to handle both residential and commercial energy projects. Whether you need solar panels for your home, inverter backup for your office, or a full-scale electrical wiring setup for a building, we’ve got you covered. We design each project based on the client’s energy demands and budget, ensuring that every solution is safe, cost-effective, and built to last. Our commercial projects include schools, churches, factories, and office complexes across Nigeria.",
  },
  {
    question: "Do you provide free consultations?",
    answer:
      "Yes, we provide free consultations for all potential clients. During this process, we take time to understand your energy challenges, electricity usage, and preferred system type. Our experts then give you a personalized recommendation that fits both your power needs and your budget. We also provide a transparent cost breakdown, helping you make an informed decision before installation begins. You can book a consultation through our contact form or by calling any of our customer service numbers.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-green-600 dark:text-green-400">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full cursor-pointer flex justify-between items-center px-6 py-4 text-left font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                {faq.question}
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180 text-green-500" : ""
                  }`}
                />
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
