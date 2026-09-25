import {
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

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

export default function PreHeader() {
  return (
    <div className="hidden md:block bg-dark text-white text-xs">
      <div className="container mx-auto px-6 py-2.5 flex items-center justify-between">
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
          <span className="text-white/60">Follow Us:</span>
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
  );
}
