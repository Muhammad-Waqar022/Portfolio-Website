import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SkillsSection = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Frontend", "WordPress"];

  const skills = [
    // Frontend
    { name: "HTML", category: "Frontend", icon: "icons/html.png" },
    { name: "CSS", category: "Frontend", icon: "icons/css-3.png" },
    { name: "JavaScript", category: "Frontend", icon: "icons/js.png" },
    { name: "Bootstrap", category: "Frontend", icon: "icons/bootstrap.png" },
    { name: "Tailwind CSS", category: "Frontend", icon: "icons/Tailwind CSS.png" },
    { name: "React", category: "Frontend", icon: "icons/science.png" },

    // WordPress
    { name: "WordPress", category: "WordPress", icon: "icons/wordpress.png" },
    { name: "Elementor", category: "WordPress", icon: "icons/elementor.png" },
    { name: "WooCommerce", category: "WordPress", icon: "icons/woocommerce.png" },
    { name: "Yoast SEO", category: "WordPress", icon: "/icons/seo.png" },

    // Backend (future expansion)
    // { name: "PHP", category: "Backend", icon: "/icons/php.svg" },
    // { name: "MySQL", category: "Backend", icon: "/icons/mysql.svg" },
  ];

  const filteredSkills =
    filter === "All"
      ? skills
      : skills.filter((skill) => skill.category === filter);

  return (
    <section id="skills" className="max-w-[1200px] mx-auto px-6 py-16">
      {/* Section Title */}
      <h2 className="text-4xl font-semibold text-center mb-8 bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
        My Skills
      </h2>

      {/* Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border 
              ${
                filter === cat
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-transparent border-gray-600 text-gray-400 hover:text-white hover:border-indigo-500"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
      >
        <AnimatePresence>
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center bg-[#0f0f1a] rounded-xl p-5 shadow-md hover:shadow-indigo-500/30 hover:-translate-y-2 transition-transform duration-300"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mb-3 object-contain"
              />
              <p className="text-gray-300 text-sm font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
