import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview";
import ServicesPreview from "../components/ServicesPreview";
import TechStrip from "../components/TechStrip";
import PortfolioPreview from "../components/PortfolioPreview";
import Testimonials from "../components/Testimonials";
import BlogPreview from "../components/BlogPreview";
import FAQ from "../components/FAQ";
import CTABanner from "../components/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <TechStrip />
      <PortfolioPreview />
      <Testimonials />
      <BlogPreview />
      <FAQ />
      <CTABanner />
    </>
  );
}
