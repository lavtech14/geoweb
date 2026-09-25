import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../assets/images/logo.svg";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const services = [
  "Branding",
  "Web Development",
  "Mobile Apps",
  "Digital Marketing",
  "UI/UX Design",
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

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="bg-white rounded-xl p-3 inline-block mb-4">
              <img src={logo} alt="Geoweb" className="h-12" />
            </div>
            <p className="text-sm leading-relaxed mb-6">
              One stop solution for your business digital services. We turn your
              digital dreams into reality with innovation and creativity.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gradient transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className="text-white text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-primary transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm hover:text-primary transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-5">
              Get In Touch
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                <span>Hyderabad & Visakhapatnam, India</span>
              </li>
              <li className="flex gap-3">
                <FaPhoneAlt className="text-primary mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <a
                    href="tel:+919390341436"
                    className="hover:text-primary transition-colors"
                  >
                    +91 93903 41436
                  </a>
                  <a
                    href="tel:+919177244080"
                    className="hover:text-primary transition-colors"
                  >
                    +91 91772 44080
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <FaEnvelope className="text-primary mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <a
                    href="mailto:info@geowebtech.in"
                    className="hover:text-primary transition-colors"
                  >
                    info@geowebtech.in
                  </a>
                  <a
                    href="mailto:hello@geowebtech.in"
                    className="hover:text-primary transition-colors"
                  >
                    hello@geowebtech.in
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Geoweb Tech Solutions. All Rights
            Reserved.
          </p>
          <p className="text-sm text-gray-400">
            Crafted with <span className="text-accent">♥</span> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
