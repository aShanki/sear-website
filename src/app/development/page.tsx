import { HeroSection } from "@/components/development/HeroSection";
import { ServicesSection } from "@/components/development/ServicesSection";
import { TechStackSection } from "@/components/development/TechStackSection";
import { FeaturedProject } from "@/components/development/FeaturedProject";
import { ProcessSection } from "@/components/development/ProcessSection";
import { WhyChooseUs } from "@/components/development/WhyChooseUs";
import { ContactForm } from "@/components/custom/ContactForm";

export default function DevelopmentPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <TechStackSection />
      <FeaturedProject />
      <ProcessSection />
      <WhyChooseUs />
      <section className="section-spacing bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your Project
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Ready to build something amazing? Let&apos;s discuss how we can help bring your vision to life.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}