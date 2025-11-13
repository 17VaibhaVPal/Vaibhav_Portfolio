import React from "react";
import { Github, Mail, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="text-center">
        <img
          src="/vaibhav.jpeg"
          alt="Vaibhav Pal"
          className="w-80 h-80 rounded-full mx-auto mb-8 border-4 border-blue-500"
        />
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Vaibhav Pal
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8">
          Web Developer | AI/ML Enthusiast | Student
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/17VaibhaVPal"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/vaibhav-pal-9607a4256/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:vaibhavpal2301@gmail.com"
            className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
