import React from "react";
import ProjectCard from "./ProjectCard";
// import solarImg from "../../assets/solar1.jpg";
// import inverterImg from "../../assets/inverter1.jpg";
// import electricalImg from "../../assets/electrical1.jpg";

const projects = [
  {
    // image: solarImg,
    title: "Residential Solar Installation",
    description:
      "Complete solar system setup for a 4-bedroom apartment — reducing grid dependency by 90%.",
    link: "#",
  },
  {
    // image: inverterImg,
    title: "Inverter Power Backup",
    description:
      "Installed a 5kVA inverter system ensuring 24/7 power supply for office equipment.",
    link: "#",
  },
  {
    // image: electricalImg,
    title: "Wiring & Electrical Upgrade",
    description:
      "Full electrical rewiring and load balancing for improved safety and efficiency.",
    link: "#",
  },
];

const ProjectGrid = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
