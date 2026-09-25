import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import logo from "../assets/images/logo.svg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const socials = [
  {
    icon: FaFacebookF,
    url: "https://www.facebook.com/people/GeoWeb-Tech-Solutions/61557480844850/",
  },
  {
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/company/geoweb-tech-solutions/",
  },
  { icon: FaInstagram, url: "https://www.instagram.com/geowebtech/" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Strip — hidden on mobile, hides on scroll */}
      <div
        className={`hidden lg:block bg-dark text-white text-xs transition-all duration-300 overflow-hidden ${
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <div className="container mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href="mailto:info@geowebtech.in"
              className="flex items-center gap-2 hover:text-primary-light transition-colors"
            >
              <FaEnvelope className="text-primary-light" /> info@geowebtech.in
            </a>
            <a
              href="tel:+919390341436"
              className="flex items-center gap-2 hover:text-primary-light transition-colors"
            >
              <FaPhone className="text-primary-light" /> +91 93903 41436
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-white/60">Follow:</span>
            {socials.map(({ icon: Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-light transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md py-3"
            : "bg-white/95 backdrop-blur-sm py-4"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Geoweb Tech Solutions"
              className="h-12 md:h-14"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative font-medium transition-colors duration-200 ${
                    isActive ? "text-primary" : "text-dark hover:text-primary"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-gradient rounded-full"></span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-primary text-sm py-2.5 px-5">
              Free Quote
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-2xl text-dark"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 bg-white ${
            mobileOpen ? "max-h-96 border-t border-gray-100" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `font-medium transition-colors ${
                    isActive ? "text-primary" : "text-dark"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary justify-center text-sm mt-2"
            >
              Free Quote
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
