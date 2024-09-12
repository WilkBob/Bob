import {
  FaGithub,
  FaFileDownload,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import Canvas from "./Canvas/Canvas";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen w-full px-4 py-12 text-white" id="hero">
      <Canvas />
      <div className="container mx-auto space-y-4 flex flex-col justify-center h-full">
        <motion.h1
          className="text-5xl font-bold bg-gradient-to-l from-teal-300 to-white/60 bg-clip-text text-transparent animate-gradient bg-[length:400%_200%]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Robert Wilkinson
        </motion.h1>
        <motion.p
          className="text-2xl bg-gradient-to-l from-teal-300 to-white/60 bg-clip-text text-transparent animate-gradient bg-[length:400%_200%]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Software Engineer | JavaScript Enthusiast | Creative Problem Solver
        </motion.p>
        <motion.div
          className="flex flex-col md:flex-row md:flex-wrap md:space-x-4 space-y-4 md:space-y-0 max-w-[fit-content]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.a
            href="https://github.com/WilkBob"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-teal-100 hover:text-teal-300 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub size={24} />
            <span>GitHub</span>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/bobwilkinsondev/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-teal-100 hover:text-teal-300 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin size={24} />
            <span>LinkedIn</span>
          </motion.a>
          <motion.a
            href="mailto:bobbydchess@gmail.com"
            className="flex items-center space-x-2 text-teal-100 hover:text-teal-300 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope size={24} />
            <span>Email</span>
          </motion.a>
          <motion.a
            href="/RobertWilkinson.pdf"
            download
            className="flex items-center space-x-2 text-teal-100 hover:text-teal-300 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaFileDownload size={24} />
            <span>Resume</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
