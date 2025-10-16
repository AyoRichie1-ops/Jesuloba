import React from "react";
import ProjectCard from "./ProjectCard";

const allProjects = [
  {
    title: "Solar Installation at Lekki Phase 1",
    description:
      "Installed a 10kW solar system with battery backup for a luxury home in Lekki. The project included solar panel mounting, inverter setup, and energy monitoring system.",
    location: "Lekki, Lagos",
    system: "10kW Solar + 20kWh Battery Backup",
    image: "/images/lekki.jpg",
  },
  {
    title: "Inverter System for Corporate Office",
    description:
      "Deployed a 15kVA inverter system with load management for 24/7 operation of computers, printers, and AC units in a corporate office.",
    location: "Ikeja, Lagos",
    system: "15kVA Inverter + 16 Batteries",
    image: "/images/inverter-office.jpg",
  },
  {
    title: "Wiring & Electrical Installation for School",
    description:
      "Complete electrical wiring, socket installation, and distribution board setup for a private school building.",
    location: "Yaba, Lagos",
    system: "3-Phase Distribution, 50 Circuits",
    image: "/images/school.jpg",
  },
  // add more projects here...
];

const AllProjects = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
          Our Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2 text-center">
          Explore our full range of completed electrical and solar installations.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {allProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
