import Footer from "./components/Footer";
import AboutMeSection from "./components/HomePage/AboutMeSection";
import ContactSection from "./components/HomePage/ContactSection";
import HeroSection from "./components/HomePage/HeroSection";
import ProjectsSection from "./components/HomePage/ProjectsSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <ProjectsSection />
      <AboutMeSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
