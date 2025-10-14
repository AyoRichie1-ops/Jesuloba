import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "John M.",
    feedback:
      "They installed my solar system in record time, and it’s been working flawlessly. Their team is friendly, fast, and very professional.",
    image: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Ada O.",
    feedback:
      "Their inverter installation has made my business so much smoother. I haven’t experienced power interruptions since.",
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Mr. Bello",
    feedback:
      "Excellent service and support! I got both solar and inverter setup, and their maintenance team is always responsive.",
    image: "https://i.pravatar.cc/100?img=15",
  },
  {
    name: "Queen T.",
    feedback:
      "I’m amazed at how much I’ve saved since switching to solar. Their consultation was thorough and insightful!",
    image: "https://i.pravatar.cc/100?img=22",
  },
];

const Testimonial = () => {
     const [current, setCurrent] = useState(0);
    
      // Auto-scroll every 5 seconds
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
      }, []);
    
      const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length);
      const prevSlide = () =>
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    
  return (
    <div>
        {/* Testimonials Carousel */}
      <section className="relative bg-gradient-to-b from-green-50 to-white dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center relative">
          <h2 className="text-3xl font-bold mb-10 text-green-600 dark:text-green-400">
            What Our Clients Say
          </h2>

          <div className="overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="flex flex-col items-center bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg mx-auto max-w-xl"
              >
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-20 h-20 rounded-full border-4 border-green-500 mb-6 object-cover"
                />
                <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                  “{testimonials[current].feedback}”
                </p>
                <div className="flex justify-center text-yellow-400 mb-3">
                  {Array(5)
                    .fill(0)
                    .map((_, idx) => (
                      <span key={idx}>★</span>
                    ))}
                </div>
                <h4 className="font-semibold text-green-600 dark:text-green-400">
                  — {testimonials[current].name}
                </h4>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </section>
    </div>
  )
}

export default Testimonial