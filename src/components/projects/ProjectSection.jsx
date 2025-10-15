import React from "react";
import ProjectGrid from "./ProjectGrid";

const ProjectsSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-green-600">
          Our Recent Projects
        </h2>
        <ProjectGrid />
      </div>
    </section>
  );
};

export default ProjectsSection;
