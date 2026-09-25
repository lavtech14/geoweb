import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";
import { blogs } from "../data/blogs";
import CTABanner from "../components/CTABanner";

const categories = ["All", "Branding", "Digital Marketing", "Development"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category === activeCategory);

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-primary/10 via-white to-secondary/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h6 className="text-primary font-medium uppercase tracking-widest text-sm mb-3">
              Our Blog
            </h6>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Insights &{" "}
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Ideas
              </span>
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Tips, trends, and insights from the world of digital marketing,
              development, and branding.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-brand-gradient text-white shadow-lg"
                    : "bg-light text-dark hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map((post, i) => (
                <motion.a
                  key={post.id}
                  href={post.url}
                  target={post.url !== "#" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <span className="absolute top-4 left-4 bg-brand-gradient text-white text-xs font-medium px-3 py-1.5 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1.5">
                        <FaCalendarAlt className="text-primary" /> {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FaUser className="text-primary" /> {post.author}
                      </span>
                    </div>

                    <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                      Read More <FaArrowRight className="text-xs" />
                    </span>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-500 py-12">
              No posts found in this category.
            </p>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
