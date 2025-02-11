import { Metadata } from "next";
import { CustomHero } from "@/components/custom/CustomHero";
import { BusinessSolutions } from "@/components/custom/BusinessSolutions";
import { UseCases } from "@/components/custom/UseCases";
import { EnterpriseBenefits } from "@/components/custom/EnterpriseBenefits";
import { ContactForm } from "@/components/custom/ContactForm";

export const metadata: Metadata = {
  title: "Enterprise Solutions - Sear Hosting",
  description: "Enterprise-grade Minecraft hosting solutions for businesses. Scale your gaming infrastructure with dedicated support and custom configurations.",
};

export default function CustomPage() {
  return (
    <main className="min-h-screen bg-background">
      <CustomHero />
      <BusinessSolutions />
      <UseCases />
      <EnterpriseBenefits />
      <ContactForm />
    </main>
  );
}