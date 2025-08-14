import React from "react";
import projectImg from "../assets/Project1.png"; // Change to your local image path

function Projects() {
  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

        <div className="max-w-md mx-auto">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-blue-500/50 block overflow-hidden"
          >
            <img
              src={projectImg}
              alt="Portfolio Project"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-2">
                 Interactive Portfolio
              </h3>
              <p className="text-gray-300">
                A 3D interactive portfolio built with Three.js, featuring smooth animations, realistic lighting, and an engaging user experience.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
