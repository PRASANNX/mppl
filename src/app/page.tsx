import Navbar from "@/components/mppl/Navbar";
import HeroSection from "@/components/mppl/HeroSection";
import StatsBar from "@/components/mppl/StatsBar";
import AboutSection from "@/components/mppl/AboutSection";
import FounderSection from "@/components/mppl/FounderSection";
import QualifyingSection from "@/components/mppl/QualifyingSection";
import CategoriesSection from "@/components/mppl/CategoriesSection";
import PrizePoolSection from "@/components/mppl/PrizePoolSection";
import TeamsSection from "@/components/mppl/TeamsSection";
import SponsorsSection from "@/components/mppl/SponsorsSection";
import VisionSection from "@/components/mppl/VisionSection";
import CTASection from "@/components/mppl/CTASection";
import FAQSection from "@/components/mppl/FAQSection";
import Footer from "@/components/mppl/Footer";

export default function HomePage() {
  return (
    <div className="bg-deep-court min-h-screen text-net-white flex flex-col w-full overflow-hidden">
      <Navbar />
      <main className="flex-1 flex flex-col w-full">
        <HeroSection />
        <StatsBar />
        <AboutSection />
        <FounderSection />
        <QualifyingSection />
        <CategoriesSection />
        <PrizePoolSection />
        <TeamsSection />
        <SponsorsSection />
        <VisionSection />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}