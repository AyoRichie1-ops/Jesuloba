import HeroSection from "../sections/HeroSection";
import ServicesSection from "../sections/ServicesSection";
import FaqSection from '../components/FaqSection'
import Contact from "./Contact";
import ProjectCard from "../components/projects/ProjectCard";
import HomeProjects from "../components/projects/HomeProject";
// Home.jsx
export default function Home() {
  return (
    <section className="pt-10">
    <HeroSection/>
    <ServicesSection/>
    <HomeProjects/>
    <FaqSection/>
    <Contact/>
    </section>
      );
}
