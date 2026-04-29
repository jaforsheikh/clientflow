import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Logos from "./sections/Logos";
import Features from "./sections/Features";
import HowItWorks from "./sections/HowItWorks";
import DashboardPreview from "./sections/DashboardPreview";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import CTA from "./sections/CTA";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen crm-bg text-white">
      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <HowItWorks />
      <DashboardPreview />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}