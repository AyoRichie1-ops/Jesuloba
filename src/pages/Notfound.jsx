import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-center px-6">
      <h1 className="text-8xl font-extrabold text-green-600 mb-4">404</h1>
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-md mb-8">
        Oops! The page you’re looking for doesn’t exist or has been moved. 
        Please check the URL or return to the homepage.
      </p>
      <Link
        to="/"
        className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
      >
        Back to Home
      </Link>
    </section>
  );
};

export default NotFound;
