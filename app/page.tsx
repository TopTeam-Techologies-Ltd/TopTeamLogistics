import Faq from "@/components/layout/landing-page/Faq";
import HeroSection from "@/components/layout/landing-page/HeroSection";
import JoinUsSection from "@/components/layout/landing-page/JoinUsSection";
import ValueProposition from "@/components/layout/landing-page/ValueProposition";
import WhyWorkWithUs from "@/components/layout/landing-page/WhyWorkWithUs";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <HeroSection />
      <ValueProposition />
      <WhyWorkWithUs />
      <JoinUsSection />
      <Faq />
    </div>
  );
}
