import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Cases } from "@/components/sections/Cases/Cases";
import { Integrations } from "@/components/sections/Integrations";
import { Pricing } from "@/components/sections/Pricing/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export function Home() {
  return (
    <>
      <Hero />

      <Integrations />

      <Features />

      <HowItWorks />

      <Cases />

      <Pricing />

      <FAQ />

      <CTA />


    </>
  );
}