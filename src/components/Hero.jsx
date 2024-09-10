import { FaGithub, FaFileDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full bg-gray-900 text-white">
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-8 px-4">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-l from-teal-400 to-white/50 bg-clip-text text-transparent animate-gradient bg-[length:400%_200%]">
            Bob Wilkinson
          </h1>
          <p className="text-2xl bg-gradient-to-l from-teal-400 to-white/50 bg-clip-text text-transparent animate-gradient bg-[length:400%_200%]">
            <span className="font-light">Junior</span> Software Engineer
          </p>
        </div>
        <div className="flex space-x-6">
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-300 transition-colors duration-300"
          >
            <FaGithub size={36} />
          </a>
          <a
            href="/path-to-your-resume.pdf"
            download
            className="text-teal-400 hover:text-teal-300 transition-colors duration-300"
          >
            <FaFileDownload size={36} />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 w-full max-w-4xl">
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold mb-3 text-teal-400">
              Project 1
            </h2>
            <p className="text-gray-300">
              An innovative web application leveraging React and Node.js to
              provide real-time data visualization for environmental metrics.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold mb-3 text-teal-400">
              Project 2
            </h2>
            <p className="text-gray-300">
              A mobile-first e-commerce platform built with React Native and
              Firebase, featuring seamless payment integration and user
              authentication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
