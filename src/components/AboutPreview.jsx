import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import aboutImage from "../assets/images/About_GeoWeb.svg";

// const aboutImage =
//   "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80";

const skills = [
  { label: "Development", percent: 95, color: "#009688" },
  { label: "Branding", percent: 97, color: "#1976D2" },
  { label: "Marketing", percent: 96, color: "#E91E63" },
];

function ProgressCircle({ percent, color, label }) {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-28 h-28 md:w-32 md:h-32">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="none"
          />
          <motion.circle
            cx="60"
            cy="60"
            r={radius}
            stroke={color}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl md:text-2xl font-bold text-dark">
            {percent}%
          </span>
        </div>
      </div>
      <p className="mt-3 font-medium text-gray-700 text-sm md:text-base">
        {label}
      </p>
    </div>
  );
}

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={aboutImage}
              alt="About Geoweb"
              className="w-full rounded-3xl shadow-xl"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-brand-gradient text-white rounded-2xl p-5 shadow-xl hidden md:block">
              <div className="text-3xl font-bold">7+</div>
              <div className="text-xs uppercase tracking-wide">Years Exp</div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-heading text-left !mb-6">
              <h6>About Us</h6>
              <h2>
                <span className="bg-brand-gradient bg-clip-text text-transparent">
                  Geoweb
                </span>{" "}
                Tech Solutions
              </h2>
              <div className="line-dec !mx-0"></div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              At GeoWeb Tech Solutions, we're more than just a team; we're a
              collective of visionary strategists, creative thinkers, and tech
              enthusiasts dedicated to shaping the digital landscape.
              Established with a passion for pushing boundaries and redefining
              possibilities.
            </p>

            {/* Progress Circles */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {skills.map((skill) => (
                <ProgressCircle key={skill.label} {...skill} />
              ))}
            </div>

            <Link to="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
