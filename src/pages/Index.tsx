import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import DeliveryInfo from "@/components/DeliveryInfo";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingLines from "@/components/FloatingLines";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  const [showLines, setShowLines] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show lines when scrolled down roughly past half the hero section height
      if (window.scrollY > window.innerHeight * 0.5) {
        setShowLines(true);
      } else {
        setShowLines(false);
      }
    };

    // Check on initial load too
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div
        className={`fixed inset-0 overflow-hidden pointer-events-none z-[1] transition-opacity duration-1000 ${showLines ? "opacity-100" : "opacity-0"
          }`}
      >
        <FloatingLines
          linesGradient={['#E58B43', '#D66D25', '#EFB687', '#B77140']}
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={8}
          lineDistance={1}
          bendRadius={14}
          bendStrength={0}
          interactive={true}
          parallax={true}
        />
      </div>
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <DeliveryInfo />
      <ContactForm />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;


