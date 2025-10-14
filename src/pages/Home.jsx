import HeroSection from "../sections/HeroSection";
import ServicesSection from "../sections/ServicesSection";

// Home.jsx
export default function Home() {
  return (
    <section className="pt-10">
    <HeroSection/>
    <ServicesSection/>
    </section>
    // <div className="pt-20">
    //   {/* Hero Section */}
    //   <section id="hero" className="h-screen flex items-center justify-center bg-green-light">
    //     <h1 className="text-5xl font-bold text-green">
    //       Jesuloba - Electrical & Solar Solutions
    //     </h1>
    //   </section>

    //   {/* About Section */}
    //   <section id="about" className="scroll-mt-24 py-20 px-4 bg-white">
    //     <h2 className="text-4xl font-bold mb-6 text-green-dark">About Us</h2>
    //     <p className="text-gray-700">
    //       We provide top-quality electrical and solar installation services...
    //     </p>
    //   </section>

    //   {/* Services Section */}
    //   <section id="services" className="scroll-mt-24 py-20 px-4 bg-green-light">
    //     <h2 className="text-4xl font-bold mb-6 text-green-dark">Our Services</h2>
    //     {/* Service cards go here */}
    //   </section>

    //   {/* Projects Section */}
    //   <section id="projects" className="scroll-mt-24 py-20 px-4 bg-white">
    //     <h2 className="text-4xl font-bold mb-6 text-green-dark">Projects</h2>
    //     {/* Project gallery goes here */}
    //   </section>

    //   {/* Contact Section */}
    //   <section id="contact" className="scroll-mt-24 py-20 px-4 bg-green-light">
    //     <h2 className="text-4xl font-bold mb-6 text-green-dark">Contact Us</h2>
    //     {/* Contact form goes here */}
    //   </section>
    // </div>
  );
}
