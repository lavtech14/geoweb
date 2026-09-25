import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { allTechCategories } from "../data/technologies";
import CTABanner from "../components/CTABanner";

export default function Technologies() {
  const [activeTab, setActiveTab] = useState(allTechCategories[0].id);
  const activeCategory = allTechCategories.find((c) => c.id === activeTab);

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
              Our Technologies
            </h6>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Modern Tech{" "}
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Stack
              </span>
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              We leverage the latest and most reliable technologies to build
              fast, secure, and scalable digital products for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs + Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {allTechCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                    isActive
                      ? "bg-brand-gradient text-white shadow-lg"
                      : "bg-light text-dark hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  <Icon className="text-base" />
                  {cat.title}
                </button>
              );
            })}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Category Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  <span className="bg-brand-gradient bg-clip-text text-transparent">
                    {activeCategory.title}
                  </span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {activeCategory.description}
                </p>
              </div>

              {/* Tech Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
                {activeCategory.technologies.map((tech, i) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.03 }}
                      className="group bg-white rounded-2xl p-5 text-center shadow-sm hover:shadow-xl border border-gray-100 hover:border-transparent transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-light flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <Icon
                          className="text-3xl md:text-4xl"
                          style={{ color: tech.color }}
                        />
                      </div>
                      <h3 className="font-semibold text-sm text-dark mb-1 group-hover:text-primary transition-colors">
                        {tech.name}
                      </h3>
                      <span className="inline-block text-xs text-primary bg-primary/10 px-2.5 py-0.5 rounded-full font-medium">
                        {tech.level}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* All Categories Overview */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-6">
          <div className="section-heading">
            <h6>Complete Stack</h6>
            <h2>
              Everything We{" "}
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Master
              </span>
            </h2>
            <div className="line-dec"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allTechCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="card group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                      <Icon className="text-primary group-hover:text-white text-xl transition-colors duration-300" />
                    </div>
                    <span className="text-2xl font-bold text-primary/20">
                      {cat.technologies.length}+
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {cat.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {cat.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech.name}
                        className="text-xs bg-light text-gray-600 px-2.5 py-1 rounded-full"
                      >
                        {tech.name}
                      </span>
                    ))}
                    {cat.technologies.length > 4 && (
                      <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium">
                        +{cat.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => {
                      setActiveTab(cat.id);
                      window.scrollTo({ top: 400, behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                  >
                    Explore Stack →
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Our Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="section-heading">
            <h6>Why Our Tech</h6>
            <h2>
              Built for{" "}
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Performance
              </span>
            </h2>
            <div className="line-dec"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Latest & Stable",
                desc: "We use only battle-tested, actively maintained technologies.",
              },
              {
                title: "Scalable",
                desc: "Architecture designed to grow with your business needs.",
              },
              {
                title: "Secure",
                desc: "Best practices in security baked into every layer.",
              },
              {
                title: "Fast",
                desc: "Performance-optimized for lightning-fast user experience.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl hover:bg-light transition-colors"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-brand-gradient flex items-center justify-center mb-4">
                  <FaCheckCircle className="text-white text-xl" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
