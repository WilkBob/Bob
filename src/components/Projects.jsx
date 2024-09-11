import { FaGlobe, FaTree } from "react-icons/fa";

const ProjectCard = ({ title, description, techStack, link, icon: Icon }) => (
  <div
    className="bg-zinc-800 rounded-xl shadow-lg p-6 flex flex-col h-full"
    id="projects"
  >
    <div className="flex items-center mb-4">
      <Icon className="text-teal-400 mr-2" size={24} />
      <h3 className="text-2xl font-semibold text-teal-400">{title}</h3>
    </div>
    <p className="text-gray-300 mb-4 flex-grow">{description}</p>
    <div className="mb-4">
      <h4 className="text-lg font-semibold text-teal-400 mb-2">Tech Stack:</h4>
      <p className="text-gray-300">{techStack}</p>
    </div>
    <div className="flex space-x-4 mt-4">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors duration-300"
      >
        View Project
      </a>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section className="min-h-screen w-full px-4 py-20 text-white z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-teal-400">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="Sugano Investments"
            description="A website for a small real-estate focused investment firm, built for proper SEO, excellent performance, and brand representation. The site showcases the firm's portfolio, investment strategies, and provides a seamless user experience for potential investors."
            techStack="React, Tailwind CSS, Dynamic Sitemap, Custom blog solution implementing Markdown files, SEO"
            link="https://suganoinvestments.com"
            icon={FaGlobe}
          />
          <ProjectCard
            title="Tree Visualizer"
            description="An interactive tool that uses the HTML5 canvas to draw and animate tree data structures. Users can visualize different tree traversal algorithms (in-order, pre-order, post-order) with step-by-step animations. This educational tool helps students and developers understand tree algorithms better."
            techStack="JavaScript, HTML5 Canvas, Tailwind CSS, DaisyUI"
            link="https://wilkbob.github.io/DSVis/"
            icon={FaTree}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
