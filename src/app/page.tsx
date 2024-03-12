import AboutMeSection from "./components/HomePage/AboutMeSection";
import HeroSection from "./components/HomePage/HeroSection";
import ProjectsSection from "./components/HomePage/ProjectsSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <ProjectsSection />
      <AboutMeSection />
    </main>
  );
}
