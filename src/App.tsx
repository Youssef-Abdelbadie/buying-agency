import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { PricingSection } from './components/PricingSection';
import { Testimonials } from './components/Testimonials';
import { LogosStrip } from './components/LogosStrip';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProjectsShowcase />
        <PricingSection />
        <Testimonials />
        <LogosStrip />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
