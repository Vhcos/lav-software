import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ServicesSection from "@/components/ServicesSection";
import UseCasesExamplesSection from "@/components/UseCasesExamplesSection";
import SecuritySection from "@/components/SecuritySection";
import ChatbotDifferenceSection from "@/components/ChatbotDifferenceSection";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import FoundersProgramSection from "@/components/FoundersProgramSection";
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
        <HowItWorksSection />
        <ServicesSection />
        <UseCasesExamplesSection />
        <SecuritySection />
        <ChatbotDifferenceSection />
        <ProcessSection />
        <PricingSection />
        <FoundersProgramSection />
        <CasesSection />
        <OriginSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
