import React from "react";
import projHero from "../../assets/projhero.jpg"; // we'll pick this image next

const ProjectHero = () => {
  return (
    <section
      className="relative w-full h-[90vh] flex items-center justify-center bg-center bg-cover"
      style={{ backgroundImage: `url(${projHero})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Our Completed Projects
        </h1>
        <p className="text-gray-200 mt-4 text-lg max-w-2xl mx-auto">
          Discover our track record of reliable solar, inverter, and electrical installations across Nigeria — 
          designed for efficiency, durability, and clean energy.
        </p>
      </div>
    </section>
  );
};

export default ProjectHero;
