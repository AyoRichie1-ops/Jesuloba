import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const recentProjects = [
  {
    title: "Residential Solar Installation",
    description:
      "Installed a 5kW solar system for a 4-bedroom duplex in Lagos, cutting grid use by 85%.",
    image: "/images/solar.jpg",
  },
  {
    title: "Inverter Backup for Office",
    description:
      "Provided uninterrupted power for office equipment using a 10kVA inverter setup.",
    image: "/images/inverter.jpg",
  },
  {
    title: "Wiring & Electrical Upgrade",
    description:
      "Rewired an entire apartment block ensuring safety and power efficiency.",
    image: "/images/electrical.jpg",
  },
];

const HomeProjects = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Recent Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          A glimpse of some of our latest installations and energy solutions.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {recentProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/projects"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;
