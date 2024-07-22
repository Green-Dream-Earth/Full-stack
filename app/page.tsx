import { CTA } from "@/components/CTA";
import Hero from "@/components/Hero";
import TestemonialCarousel from "@/components/carousel";
import { Faq } from "@/components/faq";
import Reasons from "@/components/reasons";

export default function Home() {
  return (
    <main className="space-y-14 md:space-y-16 lg:space-y-20 py-12 lg:py-24">
      <Hero />
      <Reasons />
      <CTA />
      {/* <Services /> */}
      <TestemonialCarousel />
      {/* <Promo /> */}
      <Faq />
    </main>
  );
}
