import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechBanner from "@/components/TechBanner";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Portfolio from "@/components/Portfolio";
import MaintenancePlans from "@/components/MaintenancePlans";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechBanner />
        <Services />
        <Pricing />
        <Portfolio />
        <MaintenancePlans />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
