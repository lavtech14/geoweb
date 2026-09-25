import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaBullseye,
  FaEye,
  FaHandshake,
  FaLightbulb,
  FaUsers,
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import CTABanner from "../components/CTABanner";
import aboutHeroImage from "../assets/images/About_GeoWeb.svg";

// const aboutHeroImage =
//   "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80";

const missionVision = [
  {
    icon: FaBullseye,
    title: "Our Mission",
    desc: "To empower businesses of every size with cutting-edge digital solutions that drive measurable growth and lasting impact.",
  },
  {
    icon: FaEye,
    title: "Our Vision",
    desc: "To become the most trusted digital transformation partner for startups and enterprises across India and beyond.",
  },
];

const values = [
  {
    icon: FaHandshake,
    title: "Client First",
    desc: "Every decision we make starts with your success in mind.",
  },
  {
    icon: FaLightbulb,
    title: "Innovation",
    desc: "We embrace new technologies to deliver forward-thinking solutions.",
  },
  {
    icon: FaUsers,
    title: "Collaboration",
    desc: "We work as an extension of your team, not just a vendor.",
  },
  {
    icon: FaRocket,
    title: "Excellence",
    desc: "We sweat the details so your product stands out from the crowd.",
  },
];

const whyUs = [
  "Proven track record of 100+ successful projects",
  "Dedicated team of designers, developers, and marketers",
  "Transparent pricing with no hidden costs",
  "Agile development with regular progress updates",
  "Post-launch support and maintenance included",
  "Fast turnaround without compromising on quality",
];

export default function About() {
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
              About Us
            </h6>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              We Are{" "}
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Geoweb
              </span>{" "}
              Tech Solutions
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              A collective of visionary strategists, creative thinkers, and tech
              enthusiasts dedicated to shaping the digital landscape of modern
              businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={aboutHeroImage}
                alt="Our Team"
                className="w-full rounded-3xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="section-heading text-left !mb-6">
                <h6>Our Story</h6>
                <h2>
                  Turning Digital Dreams Into{" "}
                  <span className="bg-brand-gradient bg-clip-text text-transparent">
                    Reality
                  </span>
                </h2>
                <div className="line-dec !mx-0"></div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                At GeoWeb Tech Solutions, we're more than just a team; we're a
                collective of visionary strategists, creative thinkers, and tech
                enthusiasts dedicated to shaping the digital landscape.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Established with a passion for pushing boundaries and redefining
                possibilities, we've embarked on a journey to revolutionize the
                way businesses connect with their audiences in the digital era.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                From startups taking their first steps online to established
                enterprises scaling their digital operations — we've been the
                trusted partner behind countless success stories.
              </p>
              <Link to="/contact" className="btn-primary">
                Work With Us <FaArrowRight className="text-sm" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-6">
          <div className="section-heading">
            <h6>What Drives Us</h6>
            <h2>
              Mission &{" "}
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Vision
              </span>
            </h2>
            <div className="line-dec"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {missionVision.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="card"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-gradient flex items-center justify-center mb-5">
                  <item.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="section-heading">
            <h6>Our Values</h6>
            <h2>
              What We{" "}
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Stand For
              </span>
            </h2>
            <div className="line-dec"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl hover:bg-light transition-colors"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4">
                  <value.icon className="text-primary text-2xl" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="section-heading text-left !mb-6">
                <h6>Why Choose Us</h6>
                <h2>
                  Your Success Is Our{" "}
                  <span className="bg-brand-gradient bg-clip-text text-transparent">
                    Priority
                  </span>
                </h2>
                <div className="line-dec !mx-0"></div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-8">
                We combine technical expertise, creative vision, and a
                client-first mindset to deliver digital solutions that truly
                move the needle for your business.
              </p>

              <ul className="space-y-4">
                {whyUs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "100+", label: "Projects Done" },
                { value: "50+", label: "Happy Clients" },
                { value: "7+", label: "Years Experience" },
                { value: "5.0", label: "Client Rating" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="text-4xl font-bold bg-brand-gradient bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <p className="text-gray-600 text-sm font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
