import React, { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "Chatly - Real-Time Chat App",
    category: "Full-Stack",
    image: "project/chatly.png",
    description:
      "A real-time messaging application with secure authentication, one-to-one chats, online status, profile images, and responsive conversations.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
    link: "https://chat-frontend.up.railway.app/",
    github: "https://github.com/Muhammad-Waqar022/Chatly-Mern-Project",
  },
  {
    id: 2,
    title: "Task Management App",
    category: "Frontend",
    image: "project/task-management.png",
    description:
      "A task manager with add, edit, and delete features to boost productivity and manage workflows easily.",
    tech: ["React", "Tailwind CSS", "Context API"],
    link: "https://focusboard-mu.vercel.app/",
  },
  {
    id: 3,
    title: "AI-Powered Code Reviewer",
    category: "GenAI",
    image: "project/code reviewer.png",
    description:
      "An AI-powered code review application that analyzes submitted code and provides feedback using Google's Gemini API.",
    tech: ["React", "Node.js", "Express", "Gemini API"],
    link: "https://ai-powered-code-reviewer.up.railway.app",
    github:
      "https://github.com/Muhammad-Waqar022/AI-Powered-Code-Reviewer-MERN",
  },
  {
    id: 4,
    title: "Personal Blog",
    category: "Frontend",
    image: "project/blog.png",
    description:
      "A sleek, minimal personal blog layout for showcasing articles with responsive design and clean typography.",
    tech: ["React", "Tailwind CSS", "React Router"],
    link: "https://react-blog-app-snowy.vercel.app/",
  },
  {
  id: 5,
  title: "RAG Question-Answering System",
  category: "GenAI",
  image: "project/rag.png",
  description:
    "A Retrieval-Augmented Generation (RAG) system built with LangChain and ChromaDB that retrieves relevant context from learning materials to generate context-aware answers.",
  tech: ["Python", "LangChain", "ChromaDB", "Embeddings", "RAG"],
  link: "https://github.com/Muhammad-Waqar022/Gen-AI-Learning-and-Projects/tree/main/RAG%20Project",
  github:
    "https://github.com/Muhammad-Waqar022/Gen-AI-Learning-and-Projects/tree/main/RAG%20Project",
},
{
  id: 6,
  title: "Leave Approval System",
  category: "n8n",
  image: "project/leave-approval.png",
  description:
    "A leave management dashboard designed to streamline employee leave requests, approval tracking, and administrative workflows through a centralized interface.",
  tech: ["n8n", "Workflow Automation", "React", "Lovable", "REST APIs"],
  link: "https://leave-approval-system-dashboard.lovable.app/",
},

];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Frontend", "Full-Stack", "GenAI", "n8n"];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 mt-24 mb-16">
      {/* Section Heading */}
      <h2 className="text-3xl sm:text-4xl font-semibold text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-7">
        My Projects
      </h2>

      {/* Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full border text-sm transition-all duration-300 ${
              filter === cat
                ? "bg-indigo-600 text-white border-indigo-600"
                : "border-gray-600 text-gray-300 hover:bg-indigo-600 hover:text-white hover:border-indigo-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#1a1a2e] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Project Image */}
           <div className="h-44 w-full shrink-0 overflow-hidden bg-[#121220]">
  <img
    src={project.image}
    alt={project.title}
    loading="lazy"
    className="h-full w-full object-contain object-center transition-transform duration-300 group-hover:scale-105"
  />
</div>

            {/* Project Content */}
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-semibold leading-snug text-white mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-5 mb-4">
                {project.description}
              </p>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-stone-700 bg-gray-800 px-2.5 py-1 text-xs text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Project Link */}
              <div className="mt-auto pt-1">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-full bg-indigo-600 px-4 py-2.5 text-center text-sm font-medium text-white transition-colors duration-300 hover:bg-indigo-700"
                >
                  View Project
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Empty Category Message */}
      {filteredProjects.length === 0 && (
        <p className="py-10 text-center text-gray-400">
          No projects in this category yet. Check back soon!
        </p>
      )}
    </section>
  );
};

export default Projects;