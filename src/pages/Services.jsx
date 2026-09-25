import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPaintBrush,
  FaCode,
  FaBullhorn,
  FaServer,
  FaPalette,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa";
import { services } from "../data/services";
import CTABanner from "../components/CTABanner";

const iconMap = {
  branding: FaPaintBrush,
  development: FaCode,
  marketing: FaBullhorn,
  hosting: FaServer,
  uiux: FaPalette,
};

const serviceImages = {
  branding:
    "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=80",
  development:
    "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&auto=format&fit=crop&q=80",
  "digital-marketing":
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
  hosting:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
  "ui-ux":
    "https://images.unsplash.com/photo-1561070791-36c11767b26a?w=800&auto=format&fit=crop&q=80",
};

export default function Services() {
  const [activeTab, setActiveTab] = useState(services[0].id);
  const activeService = services.find((s) => s.id === activeTab);

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
              Our Services
            </h6>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              What We{" "}
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Offer
              </span>
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              From branding to development, marketing to hosting — we deliver
              end-to-end digital solutions tailored to your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              const isActive = activeTab === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                    isActive
                      ? "bg-brand-gradient text-white shadow-lg"
                      : "bg-light text-dark hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  <Icon className="text-base" />
                  {service.title}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-5">
                  <span className="bg-brand-gradient bg-clip-text text-transparent">
                    {activeService.title}
                  </span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {activeService.longDesc}
                </p>

                {/* Features list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {activeService.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <FaCheck className="text-primary text-xs" />
                      </span>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="btn-primary">
                  Get Started <FaArrowRight className="text-sm" />
                </Link>
              </div>

              <div>
                <img
                  src={serviceImages[activeService.id]}
                  alt={activeService.title}
                  className="w-full rounded-3xl shadow-xl"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-6">
          <div className="section-heading">
            <h6>Everything We Do</h6>
            <h2>
              Complete Service{" "}
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Suite
              </span>
            </h2>
            <div className="line-dec"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="card group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                    <Icon className="text-primary group-hover:text-white text-xl transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>
                  <button
                    onClick={() => {
                      setActiveTab(service.id);
                      window.scrollTo({ top: 400, behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                  >
                    View Details <FaArrowRight className="text-xs" />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
