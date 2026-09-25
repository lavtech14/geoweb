import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaLaravel,
  FaPython,
  FaJava,
  FaWordpress,
  FaAws,
  FaGoogle,
  FaVuejs,
  FaAngular,
  FaDocker,
  FaGitAlt,
  FaMobileAlt,
  FaAndroid,
  FaApple,
  FaSwift,
  FaFigma,
  FaBullhorn,
  FaSearch,
  FaChartLine,
  FaEnvelopeOpenText,
  FaVideo,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFlutter,
  SiKotlin,
  SiFirebase,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiGraphql,
  SiNestjs,
  SiMui,
  SiDjango,
  SiSpringboot,
  SiCloudflare,
  SiVercel,
  SiNetlify,
  SiGoogleanalytics,
  SiGoogleads,
  SiMailchimp,
  SiHubspot,
  SiSemrush,
} from "react-icons/si";

// ---------- WEB DEVELOPMENT ----------
export const webTechnologies = [
  { name: "React", icon: FaReact, color: "#61DAFB", level: "Expert" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000", level: "Expert" },
  { name: "Vue.js", icon: FaVuejs, color: "#41B883", level: "Advanced" },
  { name: "Angular", icon: FaAngular, color: "#DD0031", level: "Advanced" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: "Expert" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E", level: "Expert" },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26", level: "Expert" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", level: "Expert" },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    level: "Expert",
  },
  { name: "Material UI", icon: SiMui, color: "#007FFF", level: "Advanced" },
  { name: "Redux", icon: SiRedux, color: "#764ABC", level: "Advanced" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933", level: "Expert" },
  { name: "Express", icon: SiExpress, color: "#000000", level: "Expert" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E", level: "Advanced" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098", level: "Advanced" },
  { name: "PHP", icon: FaPhp, color: "#777BB4", level: "Expert" },
  { name: "Laravel", icon: FaLaravel, color: "#FF2D20", level: "Advanced" },
  { name: "Python", icon: FaPython, color: "#3776AB", level: "Advanced" },
  { name: "Django", icon: SiDjango, color: "#092E20", level: "Advanced" },
  { name: "Java", icon: FaJava, color: "#007396", level: "Advanced" },
  {
    name: "Spring Boot",
    icon: SiSpringboot,
    color: "#6DB33F",
    level: "Advanced",
  },
  { name: "WordPress", icon: FaWordpress, color: "#21759B", level: "Expert" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: "Expert" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", level: "Expert" },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#336791",
    level: "Advanced",
  },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28", level: "Expert" },
];

// ---------- MOBILE APP ----------
export const mobileTechnologies = [
  { name: "React Native", icon: FaReact, color: "#61DAFB", level: "Expert" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B", level: "Expert" },
  { name: "Swift (iOS)", icon: FaSwift, color: "#FA7343", level: "Advanced" },
  { name: "Kotlin", icon: SiKotlin, color: "#7F52FF", level: "Advanced" },
  { name: "Android", icon: FaAndroid, color: "#3DDC84", level: "Expert" },
  { name: "iOS", icon: FaApple, color: "#000000", level: "Expert" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28", level: "Expert" },
  {
    name: "Cross-Platform",
    icon: FaMobileAlt,
    color: "#009688",
    level: "Expert",
  },
];

// ---------- DIGITAL MARKETING ----------
export const marketingTechnologies = [
  { name: "SEO", icon: FaSearch, color: "#009688", level: "Expert" },
  { name: "SEM", icon: FaBullhorn, color: "#1976D2", level: "Expert" },
  { name: "Google Ads", icon: SiGoogleads, color: "#4285F4", level: "Expert" },
  {
    name: "Google Analytics",
    icon: SiGoogleanalytics,
    color: "#E37400",
    level: "Expert",
  },
  { name: "Meta Ads", icon: FaFacebookF, color: "#1877F2", level: "Expert" },
  {
    name: "Instagram Ads",
    icon: FaInstagram,
    color: "#E4405F",
    level: "Expert",
  },
  { name: "YouTube Ads", icon: FaYoutube, color: "#FF0000", level: "Expert" },
  {
    name: "LinkedIn Ads",
    icon: FaLinkedinIn,
    color: "#0A66C2",
    level: "Advanced",
  },
  {
    name: "Email Marketing",
    icon: FaEnvelopeOpenText,
    color: "#009688",
    level: "Expert",
  },
  { name: "Mailchimp", icon: SiMailchimp, color: "#FFE01B", level: "Advanced" },
  { name: "HubSpot", icon: SiHubspot, color: "#FF7A59", level: "Advanced" },
  { name: "SEMrush", icon: SiSemrush, color: "#FF642D", level: "Advanced" },
  {
    name: "Content Marketing",
    icon: FaChartLine,
    color: "#1976D2",
    level: "Expert",
  },
  {
    name: "Video Marketing",
    icon: FaVideo,
    color: "#E91E63",
    level: "Advanced",
  },
];

// ---------- CLOUD & DEVOPS ----------
export const cloudTechnologies = [
  { name: "AWS", icon: FaAws, color: "#FF9900", level: "Expert" },
  { name: "Google Cloud", icon: FaGoogle, color: "#4285F4", level: "Advanced" },
  { name: "Azure", icon: FaGoogle, color: "#0078D4", level: "Advanced" },
  { name: "Docker", icon: FaDocker, color: "#2496ED", level: "Advanced" },
  { name: "Git", icon: FaGitAlt, color: "#F05032", level: "Expert" },
  { name: "Vercel", icon: SiVercel, color: "#000000", level: "Expert" },
  { name: "Netlify", icon: SiNetlify, color: "#00C7B7", level: "Expert" },
  {
    name: "Cloudflare",
    icon: SiCloudflare,
    color: "#F38020",
    level: "Advanced",
  },
];

// ---------- DESIGN & UI/UX ----------
export const designTechnologies = [
  { name: "Figma", icon: FaFigma, color: "#F24E1E", level: "Expert" },
  { name: "Adobe XD", icon: FaFigma, color: "#FF61F6", level: "Advanced" },
  { name: "Photoshop", icon: FaFigma, color: "#31A8FF", level: "Advanced" },
  { name: "Illustrator", icon: FaFigma, color: "#FF9A00", level: "Advanced" },
  { name: "UI/UX Design", icon: FaFigma, color: "#009688", level: "Expert" },
];

// ---------- CATEGORIES ----------
export const allTechCategories = [
  {
    id: "web",
    title: "Web Development",
    description:
      "Modern, scalable, and blazing-fast websites built with the latest technologies.",
    icon: FaReact,
    technologies: webTechnologies,
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android that users love.",
    icon: FaMobileAlt,
    technologies: mobileTechnologies,
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies that grow your brand and drive real results.",
    icon: FaBullhorn,
    technologies: marketingTechnologies,
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description:
      "Reliable, secure, and scalable cloud infrastructure for growing businesses.",
    icon: FaAws,
    technologies: cloudTechnologies,
  },
  {
    id: "design",
    title: "Design & UI/UX",
    description:
      "Beautiful, intuitive, and user-centric designs that convert visitors into customers.",
    icon: FaFigma,
    technologies: designTechnologies,
  },
];
