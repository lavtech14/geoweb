import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import {
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaAws,
  FaGoogle,
  FaPython,
  FaMobileAlt,
  FaBullhorn,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiFlutter } from "react-icons/si";

const techs = [
  { icon: FaReact, name: "React", color: "#61DAFB" },
  { icon: FaNodeJs, name: "Node.js", color: "#339933" },
  { icon: SiFlutter, name: "Flutter", color: "#02569B" },
  { icon: FaMobileAlt, name: "React Native", color: "#61DAFB" },
  { icon: FaWordpress, name: "WordPress", color: "#21759B" },
  { icon: FaAws, name: "AWS", color: "#FF9900" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { icon: FaGoogle, name: "Google Ads", color: "#4285F4" },
  { icon: FaBullhorn, name: "SEO", color: "#009688" },
  { icon: FaPython, name: "Python", color: "#3776AB" },
  { icon: FaFigma, name: "Figma", color: "#F24E1E" },
];

export default function TechStrip() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-2">
            Technologies We Work With
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-dark">
            Powered by{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Modern Tech Stack
            </span>
          </h3>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-10">
          {techs.map(({ icon: Icon, name, color }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex flex-col items-center gap-2 text-gray-400 hover:text-primary transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              title={name}
            >
              <Icon
                className="text-4xl md:text-5xl transition-all duration-300 group-hover:scale-110"
                style={{ color }}
              />
              <span className="text-xs font-medium text-gray-500 group-hover:text-primary">
                {name}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/technologies"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View All Technologies <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </div>
    </section>
  );
}
