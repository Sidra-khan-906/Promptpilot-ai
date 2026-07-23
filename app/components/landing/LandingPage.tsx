import Navbar from "./Navbar";
import Hero from "./Hero";
import FeatureSection from "./FeatureSection";
import StatsSection from "./StatsSection";
import CTASection from "./CTASection";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#0B1020] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeatureSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </main>
  );
}