import Navbar from "@/app/ui/navbar";
import HeroSection from "@/app/ui/hero/HeroSection";
import ServicesSection from "@/app/ui/components/ServicesSection";
import AboutSection from "@/app/ui/about/AboutSection";
import ScheduleAppointment from "@/app/ui/schedule/ScheduleAppointment";
import BackgroundImage from "@/app/ui/navbar/BackgroundImage";


export default function Home() {
  return (
    <main >
      <Navbar />
      <BackgroundImage /> {/* Imagen de fondo */}
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ScheduleAppointment/>
    </main>
  );
}
