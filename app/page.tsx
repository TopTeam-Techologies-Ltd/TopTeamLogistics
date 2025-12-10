import HeroSection from "@/components/layout/landing-page/HeroSection";
import ValueProposition from "@/components/layout/landing-page/ValueProposition";
import WhyWorkWithUs from "@/components/layout/landing-page/WhyWorkWithUs";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <HeroSection />
      <ValueProposition />
      <WhyWorkWithUs />
    </div>
  );
}
