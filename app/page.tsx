import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ServicesSection from "@/components/ServicesSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import ProcessSection from "@/components/ProcessSection";
import CasesSection from "@/components/CasesSection";
import OriginSection from "@/components/OriginSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ServicesSection />
        <TargetAudienceSection />
        <ProcessSection />
        <CasesSection />
        <OriginSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
