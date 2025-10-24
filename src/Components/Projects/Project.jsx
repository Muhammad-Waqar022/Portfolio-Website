import React, { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "Task Management App",
    category: "Frontend",
    image: "../public/project/task-management.png",
    description:
      "A task manager with add, edit, and delete features to boost productivity and manage workflows easily.",
    tech: ["React", "Tailwind CSS", "Context API"],
    link: "https://focusboard-mu.vercel.app/",
  },
  {
    id: 2,
    title: "Notes App",
    category: "Frontend",
    image: "../public/project/notes-app.png",
    description:
      "A responsive notes application where users can create, store, and manage notes in the browser.",
    tech: ["React", "Tailwind CSS", "LocalStorage"],
    link: "https://notes-react-mocha.vercel.app/",
  },
  {
    id: 3,
    title: "Personal Blog",
    category: "Frontend",
    image: "../public/project/blog.png",
    description:
      "A sleek, minimal personal blog layout for showcasing articles with responsive design and clean typography.",
    tech: ["React", "Tailwind CSS", "React Router"],
    link: "https://react-blog-app-snowy.vercel.app/",
  },
  {
    id: 4,
    title: "Booking Website",
    category: "WordPress",
    image: "../public/project/book.png",
    description:
      "A fitness booking website for online session scheduling and user management.",
    tech: ["WordPress", "Elementor", "Book Me"],
    link: "https://rileyfit.gt.tc",
  },
  {
    id: 5,
    title: "Marketix",
    category: "WordPress",
    image: "../public/project/marketix.png",
    description:
      "A modern marketing agency website built using Elementor with smooth animations.",
    tech: ["WordPress", "Elementor","WPForms"],
    link: "https://marketix.gt.tc/",
  },
  {
    id: 6,
    title: "Lavender Cosmetics Store",
    category: "WordPress",
    image: "../public/project/lavender.png",
    description:
      "An elegant online cosmetics store integrated with WooCommerce for seamless shopping.",
    tech: ["WordPress", "Elementor", "WooCommerce"],
    link: "https://lavendercosmetics.kesug.com/",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 mt-24">
      {/* Section Heading */}
      <h2 className="text-4xl font-semibold text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-8">
        My Projects
      </h2>

      {/* Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-3 mb-10">
        {["All", "Frontend", "WordPress"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full border transition-all duration-300 
              ${
                filter === cat
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "border-gray-600 text-gray-300 hover:bg-indigo-600 hover:text-white"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-[#1a1a2e] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-44 p-1.5 rounded-2xl object-coer"
            />
            <div className="p-5 flex flex-col justify-between h-[230px]">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs bg-gray-800 text-white border border-stone-900 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-full text-sm hover:bg-indigo-700 transition-all text-center"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
