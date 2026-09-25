import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaCalendarAlt, FaUser } from "react-icons/fa";
import { blogs } from "../data/blogs";

export default function BlogPreview() {
  const featured = blogs.slice(0, 3);

  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <div className="section-heading">
          <h6>Recent News</h6>
          <h2>
            Check Our Blog{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Posts
            </span>
          </h2>
          <div className="line-dec"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((post, i) => (
            <motion.a
              key={post.id}
              href={post.url}
              target={post.url !== "#" ? "_blank" : "_self"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-brand-gradient text-white text-xs font-medium px-3 py-1.5 rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1.5">
                    <FaCalendarAlt className="text-primary" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaUser className="text-primary" /> {post.author}
                  </span>
                </div>

                <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                  Read More <FaArrowRight className="text-xs" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/blog" className="btn-primary">
            View All Posts <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </div>
    </section>
  );
}
