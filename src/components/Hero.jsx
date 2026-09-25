import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

// Dummy illustration
const heroIllustration =
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-white via-primary/5 to-secondary/10">
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              🚀 One Stop Solution For Your
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Business Digital
              </span>
              <br />
              Services
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
              Geoweb Tech Solutions has a proven track record of helping our
              clients achieve their desired results. Join us as we embark on a
              journey of innovation, creativity, and digital transformation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Reach Us <FaArrowRight className="text-sm" />
              </Link>
              <Link to="/services" className="btn-outline">
                Our Services
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold bg-brand-gradient bg-clip-text text-transparent">
                  50+
                </div>
                <p className="text-sm text-gray-600 mt-1">Projects Done</p>
              </div>
              <div>
                <div className="text-3xl font-bold bg-brand-gradient bg-clip-text text-transparent">
                  100%
                </div>
                <p className="text-sm text-gray-600 mt-1">Client Focus</p>
              </div>
              <div>
                <div className="text-3xl font-bold bg-brand-gradient bg-clip-text text-transparent">
                  24/7
                </div>
                <p className="text-sm text-gray-600 mt-1">Support</p>
              </div>
            </div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Floating decorative cards */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -left-4 z-20 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl">
                  🚀
                </div>
                <div>
                  <p className="text-xs text-gray-500">Projects</p>
                  <p className="font-bold text-sm">50+ Delivered</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -right-4 z-20 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xl">
                  ⭐
                </div>
                <div>
                  <p className="text-xs text-gray-500">Rating</p>
                  <p className="font-bold text-sm">5.0 Stars</p>
                </div>
              </motion.div>

              <img
                src={heroIllustration}
                alt="Digital Services Illustration"
                className="w-full max-w-lg rounded-3xl shadow-2xl relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
