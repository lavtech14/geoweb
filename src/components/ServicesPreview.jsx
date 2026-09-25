import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaPaintBrush,
  FaCode,
  FaBullhorn,
  FaServer,
  FaPalette,
} from "react-icons/fa";
import { services } from "../data/services";

const iconMap = {
  branding: FaPaintBrush,
  development: FaCode,
  marketing: FaBullhorn,
  hosting: FaServer,
  uiux: FaPalette,
};

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="section-heading">
          <h6>Our Services</h6>
          <h2>
            What We{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          <div className="line-dec"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-5 group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-dark group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {service.shortDesc}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all"
                >
                  Read More <FaArrowRight className="text-xs" />
                </Link>
              </motion.div>
            );
          })}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-2xl p-6 bg-brand-gradient text-white flex flex-col justify-center items-start shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-3">Need a Custom Solution?</h3>
            <p className="text-white/90 text-sm mb-6">
              Let's discuss your project and craft something amazing together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary px-5 py-2.5 rounded-full font-medium text-sm hover:shadow-lg transition-all"
            >
              Get Free Quote <FaArrowRight className="text-xs" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
