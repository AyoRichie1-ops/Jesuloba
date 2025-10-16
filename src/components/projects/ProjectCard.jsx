import React from "react";

const ProjectCard = ({ image, title, location, system, description }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />

      {/* Project Info */}
      <div className="p-5 text-left">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>

        {location && (
          <p className="text-green-600 font-medium mb-1">
            📍 {location}
          </p>
        )}

        {system && (
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            ⚙️ <span className="font-medium">{system}</span>
          </p>
        )}

        {description && (
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
