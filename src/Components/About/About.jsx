import React from "react";
import SplitText from "../Text/TextAnimate.jsx";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin, CiMail } from "react-icons/ci";

const handleAnimationComplete = () => {
  console.log("Text animation completed!");
};

const About = () => {
  return (
    <div id="aboutme" className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-20 mb-10">
      <h2 className="text-4xl font-semibold text-center mb-8 bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>
      {/* Layout Container */}
      <div className="flex w-full min-w-0 flex-col md:flex-row items-center md:items-start gap-8 md:gap-10">
        {/* Profile Image */}
        <div className="w-full min-w-0 md:flex-1 flex justify-center md:justify-end">
          <img
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg"
            src="project/picture.png"
            alt="pfp"
          />
        </div>

        {/* Text Section */}
        <div className="w-full min-w-0 md:flex-[2] text-left">
          <div className="mt-6 space-y-4 text-gray-300 leading-relaxed text-justify">
                        <p>
              I'm{" "}
              <span className="font-semibold text-white">
                Muhammad Waqar Ajmal
              </span>
              , a BSCS student and developer focused on building full-stack web
              applications and AI-powered solutions. I work with technologies
              like React, Node.js, Express, MongoDB, Python, and LangChain to
              turn ideas into practical, user-friendly applications.
            </p>
                        <p>
              I have built projects involving real-time communication,
              authentication, AI-powered code reviews, and Retrieval-Augmented
              Generation (RAG). I enjoy combining full-stack development with
              Generative AI to build intelligent applications that deliver
              practical value, provide seamless user experiences, and solve
              real-world challenges.
            </p>
          </div>

          {/* Button */}
          <a
            href="/MuhammadWaqarAjmal-FullStack+AI.pdf"
            id="downloadCv"
            download
            className="inline-block mt-6 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300"
          >
            Download Resume
          </a>

          {/* Social Icons */}
          <div className="flex justify-start gap-5 mt-6 text-gray-400 text-2xl">
            <a
              href="https://github.com/Muhammad-Waqar022"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <FiGithub />
            </a>
            <a
              href="https://pk.linkedin.com/in/meetwaqar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              <CiLinkedin />
            </a>
            <a
              href="mailto:ranawaqar4343@gmail.com"
              className="hover:text-red-400 transition-colors duration-300"
            >
              <CiMail />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
