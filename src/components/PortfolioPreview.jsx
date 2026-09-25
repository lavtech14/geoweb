import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

// Dummy project data
const projects = [
  {
    id: 1,
    title: "SBDreamProperties",
    category: "Website Development",
    url: "https://sbdreamproperties.com/",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "PrintSpot",
    category: "Website Development",
    url: "https://printspot.in",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "OviaFoods",
    category: "Development & Marketing",
    url: "https://oviafoods.com",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    title: "RSPCPL",
    category: "Development & Marketing",
    url: "https://rspcpl.com",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    title: "Visesa Seaport LLP",
    category: "Development & Marketing",
    url: "https://visesaseaport.com",
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    title: "Skanda Nursery",
    category: "Development & Marketing",
    url: "#",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop&q=80",
  },
];

export default function PortfolioPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="section-heading">
          <h6>Our Portfolio</h6>
          <h2>
            See Our Recent{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="line-dec"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-primary-light text-xs font-medium uppercase tracking-wider mb-1">
                  {project.category}
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold text-lg">
                    {project.title}
                  </h3>
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-primary">
                    <FaExternalLinkAlt className="text-xs" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/projects" className="btn-primary">
            View All Projects <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </div>
    </section>
  );
}
