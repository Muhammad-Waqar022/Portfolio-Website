import React from "react";
import { FiGithub } from "react-icons/fi";
import { CiMail, CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-transparent text-gray-300 border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {/* Left - Branding */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Muhammad <span className="text-indigo-500">Waqar</span>
          </h2>
          <p className="mt-3 text-gray-400 text-sm max-w-sm">
            Passionate Developer crafting clean, functional, and
            responsive user interfaces that deliver seamless experiences.
          </p>
        </div>

        {/* Right - Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#home"
                className="hover:text-indigo-400 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#project"
                className="hover:text-indigo-400 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#certificates"
                className="hover:text-indigo-400 transition-colors"
              >
                Certificates
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-indigo-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center px-6">
        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Muhammad Waqar Ajmal — All Rights Reserved
        </p>

        {/* Social Links */}
        <div className="flex space-x-5 mt-4 md:mt-0">
          <a
            href="https://github.com/Muhammad-Waqar022"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-indigo-500 transition-all duration-300"
          >
            <FiGithub className="w-6 h-6" />
          </a>
          <a
            href="http://linkedin.com/in/muhammad-waqar-ajmal20"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-indigo-500 transition-all duration-300"
          >
            <CiLinkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:ranawaqar4343@gmail.com"
            className="p-2 rounded-full hover:bg-indigo-500 transition-all duration-300"
          >
            <CiMail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
