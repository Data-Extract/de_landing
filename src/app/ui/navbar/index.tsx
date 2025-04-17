import React from "react";
import DesktopNavbar from "./desktop";
import MobileNavbar from "./mobile";
import BackgroundImage from "./BackgroundImage";
import HeroSection from "../hero/HeroSection"; // Importamos el componente HeroSection
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../about/AboutSection";

export default function Navbar() {
  return (
    <>
      <BackgroundImage /> {/* Imagen de fondo */}
      
      <div className="relative z-10">
        <DesktopNavbar />
        <MobileNavbar />
      </div>

      <HeroSection />
      <ServicesSection />
      <AboutSection />

      
    </>
  );
}
