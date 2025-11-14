import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ManagementSection from "@/components/ManagementSection";
import SalesSection from "@/components/SalesSection";
import OperationsSection from "@/components/OperationsSection";
import MarketingSection from "@/components/MarketingSection";
import ValuesSection from "@/components/ValuesSection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
// import other sections similarly

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ManagementSection />
      <SalesSection />
      <OperationsSection />
      <MarketingSection />
      <ValuesSection />
      <StatsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}