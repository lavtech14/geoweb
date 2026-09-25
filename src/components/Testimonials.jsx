import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () =>
    setCurrent((current - 1 + testimonials.length) % testimonials.length);

  const active = testimonials[current];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="section-heading">
          <h6>Testimonials</h6>
          <h2>
            What Our{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <div className="line-dec"></div>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-light rounded-3xl p-8 md:p-12 shadow-lg text-center relative"
            >
              {/* Quote Icon */}
              <div className="w-14 h-14 mx-auto rounded-full bg-brand-gradient flex items-center justify-center text-white text-xl -mt-16 mb-6 shadow-lg">
                <FaQuoteLeft />
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6 text-yellow-400">
                {[...Array(active.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                "{active.quote}"
              </p>

              {/* Author */}
              <div className="flex flex-col items-center">
                <img
                  src={active.image}
                  alt={active.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md mb-3"
                />
                <h4 className="font-semibold text-dark">{active.name}</h4>
                <p className="text-sm text-gray-500">{active.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="text-sm" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-brand-gradient"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
