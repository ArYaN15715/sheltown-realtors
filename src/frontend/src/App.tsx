import { Layout } from "./components/Layout";
import { AboutSection } from "./sections/AboutSection";
import { FeaturedProperties } from "./sections/FeaturedProperties";
import { Footer } from "./sections/Footer";
import { HeroSection } from "./sections/HeroSection";
import { LeadCapture } from "./sections/LeadCapture";
import { ProcessSection } from "./sections/ProcessSection";
import { ServicesSection } from "./sections/ServicesSection";
import { Testimonials } from "./sections/Testimonials";
import { TrustBar } from "./sections/TrustBar";
import { WhySheltOwn } from "./sections/WhySheltOwn";

const scrollTo = (id: string) => {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function App() {
  return (
    <Layout>
      <HeroSection onScrollTo={scrollTo} />
      <TrustBar />
      <ServicesSection />
      <FeaturedProperties />
      <WhySheltOwn />
      <ProcessSection />
      <AboutSection />
      <Testimonials />
      <LeadCapture />
      <Footer />
    </Layout>
  );
}
