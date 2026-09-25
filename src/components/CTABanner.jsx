import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const perks = [
  "Free consultation call",
  "Custom strategy for your business",
  "No obligation quote",
];

export default function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-secondary-dark relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h6 className="text-white/80 font-medium uppercase tracking-widest text-sm mb-3">
              Get Your Free Quote
            </h6>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              Grow With Us <span className="text-accent-light">Now</span>
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-lg">
              Ready to elevate your digital presence? Let's build something
              extraordinary together.
            </p>

            <ul className="space-y-3 mb-8">
              {perks.map((perk) => (
                <li key={perk} className="flex items-center gap-3 text-white">
                  <FaCheckCircle className="text-accent-light flex-shrink-0" />
                  <span>{perk}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-full font-semibold hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Quote Now <FaArrowRight />
            </Link>
          </motion.div>

          {/* Right - Illustration / Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-white text-2xl font-bold mb-4">
                Let's Talk Numbers
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-2xl p-5">
                  <div className="text-4xl font-bold text-accent-light">
                    50+
                  </div>
                  <p className="text-white/80 text-sm mt-1">Happy Clients</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-5">
                  <div className="text-4xl font-bold text-accent-light">
                    100+
                  </div>
                  <p className="text-white/80 text-sm mt-1">
                    Projects Delivered
                  </p>
                </div>
                <div className="bg-white/10 rounded-2xl p-5">
                  <div className="text-4xl font-bold text-accent-light">7+</div>
                  <p className="text-white/80 text-sm mt-1">Years Experience</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-5">
                  <div className="text-4xl font-bold text-accent-light">5★</div>
                  <p className="text-white/80 text-sm mt-1">Client Rating</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
