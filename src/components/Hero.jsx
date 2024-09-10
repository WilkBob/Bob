import {
  FaGithub,
  FaFileDownload,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import Canvas from "./Canvas/Canvas";

const Hero = () => {
  return (
    <div className="container h-screen mx-auto px-4 py-12 flex flex-col justify-center text-white">
      <Canvas />
      <div className=" space-y-4">
        <h1 className="text-5xl font-bold bg-gradient-to-l from-teal-300 to-white/60 bg-clip-text text-transparent animate-gradient bg-[length:400%_200%]">
          Robert Wilkinson
        </h1>
        <p className="text-2xl bg-gradient-to-l from-teal-300 to-white/60 bg-clip-text text-transparent animate-gradient bg-[length:400%_200%]">
          Full-Stack Web Developer | JavaScript Enthusiast | Creative Problem
          Solver
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-teal-100 hover:text-teal-300 transition-colors duration-300"
          >
            <FaGithub size={24} />
            <span>GitHub</span>
          </a>
          <a
            href="/path-to-your-resume.pdf"
            download
            className="flex items-center space-x-2 text-teal-100 hover:text-teal-300 transition-colors duration-300"
          >
            <FaFileDownload size={24} />
            <span>Resume</span>
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-teal-100 hover:text-teal-300 transition-colors duration-300"
          >
            <FaLinkedin size={24} />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:your.email@example.com"
            className="flex items-center space-x-2 text-teal-100 hover:text-teal-300 transition-colors duration-300"
          >
            <FaEnvelope size={24} />
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
