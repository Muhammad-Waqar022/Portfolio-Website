import React from "react";
import { motion } from "framer-motion";
import { CiMail,CiLocationOn,CiLinkedin } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import { FiGithub } from "react-icons/fi";


const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-transparent text-white max-w-6xl mx-auto px-6"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Let’s Connect
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I’m always open to discussing new projects, creative ideas, or
          opportunities to collaborate.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side - Contact Info */}
        <div className="flex flex-col justify-center space-y-6">
          <ContactInfo
            icon={<CiLocationOn className="w-6 h-6 text-indigo-400" />}
            title="Location"
            text="Lahore, Pakistan"
          />
          <ContactInfo
            icon={<MdOutlinePhone className="w-6 h-6 text-indigo-400" />}
            title="Phone"
            text="+92 300 1234567"
          />
          <ContactInfo
            icon={<CiMail className="w-6 h-6 text-indigo-400" />}
            title="Email"
            text="ranawaqar4343@gmail.com"
          />

          {/* 🌐 Social Links */}
          <div className="flex items-center space-x-5 pt-4">
            <SocialIcon
              href="https://github.com/ranawaqar"
              icon={<FiGithub className="w-6 h-6" />}
              label="GitHub"
            />
            <SocialIcon
              href="https://linkedin.com/in/muhammad-waqar-ajmal"
              icon={<CiLinkedin className="w-6 h-6" />}
              label="LinkedIn"
            />
            
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[rgba(45,45,70,0.2)] backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-lg space-y-5"
        >
          <InputBox type="text" name="name" placeholder="Your Name" />
          <InputBox type="email" name="email" placeholder="Your Email" />
          <InputBox type="text" name="subject" placeholder="Subject" />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full rounded-lg border border-white/10 bg-transparent p-3 outline-none text-white focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition-all duration-300 shadow-md shadow-indigo-600/20"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

// ✅ Reusable Contact Info component
const ContactInfo = ({ icon, title, text }) => (
  <div className="flex items-center space-x-4">
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-gray-400">{text}</p>
    </div>
  </div>
);

// ✅ InputBox Component
const InputBox = ({ type, name, placeholder }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    className="w-full rounded-lg border border-white/10 bg-transparent p-3 outline-none text-white focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
  />
);

// ✅ Social Icon component
const SocialIcon = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.15 }}
    className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-indigo-500 transition-all duration-300"
    aria-label={label}
  >
    {icon}
  </motion.a>
);

export default Contact;
