import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Residential Solar Installation",
    description:
      "Complete solar system setup for a 4-bedroom apartment — reducing grid dependency by 90%.",
    link: "/projects",
  },
  {
    title: "Inverter Power Backup",
    description:
      "Installed a 5kVA inverter system ensuring 24/7 power supply for office equipment.",
    link: "/projects",
  },
  {
    title: "Wiring & Electrical Upgrade",
    description:
      "Full electrical rewiring and load balancing for improved safety and efficiency.",
    link: "/projects",
  },
];

const ProjectGrid = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      {projects.map((project, index) => (
        <Link key={index} to={project.link}>
          <ProjectCard {...project} />
        </Link>
      ))}
    </div>
  );
};

export default ProjectGrid;
