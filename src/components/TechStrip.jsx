import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaAws,
  FaGoogle,
  FaPython,
} from "react-icons/fa";
import { SiTailwindcss, SiFlutter } from "react-icons/si";

const techs = [
  { icon: FaReact, name: "React" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: SiFlutter, name: "Flutter" },
  { icon: FaWordpress, name: "WordPress" },
  { icon: FaAws, name: "AWS" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: FaGoogle, name: "Google Cloud" },
  { icon: FaPython, name: "Python" },
];

export default function TechStrip() {
  return (
    <section className="py-14 bg-light border-y border-gray-100">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-widest mb-8">
          Technologies We Work With
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
          {techs.map(({ icon: Icon, name }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center gap-2 text-gray-400 hover:text-primary transition-colors cursor-pointer"
            >
              <Icon className="text-4xl md:text-5xl" />
              <span className="text-xs font-medium">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
