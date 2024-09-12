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
      </div>
    </section>
  );
};

export default Hero;
