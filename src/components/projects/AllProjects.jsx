import React from "react";
import ProjectCard from "./ProjectCard";
import herobg from '../../assets/herobg.jpg'
import proj1 from '../../assets/proj1.jpg'
import proj2 from '../../assets/proj2.jpg'
const allProjects = [
  {
    title: "Solar Installation at Lekki Phase 1",
    description:
      "Installed a 10kW solar system with battery backup for a luxury home in Lekki. The project included solar panel mounting, inverter setup, and energy monitoring system.",
    location: "Ikeja, Lagos",
    system: "10kW Solar + 20kWh Battery Backup",
    image: herobg,
  },
  {
    title: "Inverter System for Corporate Office",
    description:
      "Deployed a 15kVA inverter system with load management for 24/7 operation of computers, printers, and AC units in a corporate office.",
    location: "Lekki, Lagos",
    system: "15kVA Inverter + 16 Batteries",
    image: proj1,
  },
  {
    title: "Inverter system for household",
    description:
      "Provided uniterrupted power supply to this household using a 5kva inverter setup.",
    location: "Maryland, Lagos",
    system: "5kva + 5kwh lithium battery",
    image: proj2,
  },
  // add more projects here...
];

const AllProjects = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
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
