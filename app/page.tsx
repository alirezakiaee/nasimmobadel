import { HeroSection } from "@/components/sections/hero";
import { ProductCatalog } from "@/components/sections/product-catalog";
import { Capabilities } from "@/components/sections/capabilities";
import { Applications } from "@/components/sections/applications";
import { Statistics } from "@/components/sections/statistics";
import { CaseStudies } from "@/components/sections/case-studies";
import { ContactCTA } from "@/components/sections/contact-cta";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <ProductCatalog />
      <Capabilities />
      <Applications />
      <Statistics />
      <CaseStudies />
      <ContactCTA />
    </main>
  );
}