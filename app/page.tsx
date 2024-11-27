"use client";

import { useEffect, useState } from "react";
import { HeroSection } from "@/components/sections/hero";
import { ProductCatalog } from "@/components/sections/product-catalog";
import { Capabilities } from "@/components/sections/capabilities";
import { Applications } from "@/components/sections/applications";
import { Statistics } from "@/components/sections/statistics";
import { CaseStudies } from "@/components/sections/case-studies";
import { ContactCTA } from "@/components/sections/contact-cta";
import { LoadingSpinner } from "@/components/ui/loading";
import { LazyMotion, domAnimation, m } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for animations and content
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust this value based on your needs

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex min-h-screen flex-col items-center justify-between"
      >
        <HeroSection />
        <ProductCatalog />
        <Capabilities />
        <Applications />
        {/* <Statistics /> */}
        {/* <CaseStudies /> */}
        <ContactCTA />
      </m.main>
    </LazyMotion>
  );
}