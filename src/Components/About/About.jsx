import React from "react";
import SplitText from "../Text/TextAnimate.jsx";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin, CiMail } from "react-icons/ci";

const handleAnimationComplete = () => {
  console.log("Text animation completed!");
};

const About = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 mt-10 mb-10">
      {/* Layout Container */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-12">
        
        {/* Profile Image */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <img
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg"
            src="pfp.jpeg"
            alt="pfp"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/3 text-left ">
          <SplitText
            text="About Me"
            className="text-3xl sm:text-4xl font-semibold text-white"
            delay={100}
            duration={0.3}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            onLetterAnimationComplete={handleAnimationComplete}
          />

          <div className="mt-6 space-y-4 text-gray-300 leading-relaxed text-justify">
            <p>
              I'm{" "}
              <span className="font-semibold text-white">
                Muhammad Waqar Ajmal
              </span>
              , a passionate frontend developer with a deep focus on creating
              clean, modern, and user-friendly web experiences. I pay close
              attention to every pixel, ensuring each design feels balanced,
              responsive, and visually engaging.
            </p>
            <p>
              With strong expertise in both design and development, I love
              turning creative ideas into functional websites that not only look
              great but also perform smoothly across all devices. My goal is to
              build digital experiences that connect design, usability, and
              performance perfectly.
            </p>
          </div>

          {/* Button */}
          <a
            href="/Waqar-Resume.pdf"
            id="downloadCv"
            download
            className="inline-block mt-6 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300"
          >
            Download Resume
          </a>

          {/* Social Icons */}
          <div className="flex justify-start gap-5 mt-6 text-gray-400 text-2xl">
            <a
              href="https://github.com/waqarajmal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/waqar-ajmal"
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
