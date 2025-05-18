'use client'

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "How do I search for weather in a specific city?",
    answer: "Use the search bar at the top of the homepage. Type a city name and press enter.",
  },
  {
    question: "Can I use my current location?",
    answer: "Yes! Click the location button on the homepage to get weather for your current GPS location.",
  },
  {
    question: "How often is the weather data updated?",
    answer: "All data is fetched in real-time from OpenWeatherMap. It updates automatically every time you refresh or search.",
  },
  {
    question: "How do I use the weather map?",
    answer: "Click the map icon in the sidebar to view the weather map. You can zoom in/out and click on regions to get more info.",
  },
];

export default function HelpPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-4 text-white">Help & Support</h2>
      <p className="text-center text-gray-400 mb-8">
        Find answers to common questions about using DayForecast.
      </p>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center text-white"
            >
              <span className="font-semibold">{faq.question}</span>
              <svg
                className={`w-5 h-5 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 border-t border-gray-700 text-gray-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
