import { ImageProvider } from "progressify-react";
import Project from "./Project";
import { projObj } from "./ProjObj";

const Projects = () => {
  return (
    <section
      className="bg-zinc-800 md:bg-inherit md:bg-gradient-to-r md:from-zinc-800 md:to-transparent p-4 min-h-screen w-full z-10 flex flex-col items-center justify-center md:rounded-br-[50%]"
      id="projects"
    >
      <div className="container mx-auto space-y-8 pb-20 flex flex-col justify-center h-full">
        <h2 className="text-4xl font-bold text-teal-300">Projects</h2>
        <ImageProvider>
          {projObj.map((proj, index) => (
            <Project key={index + "proj"} {...proj} />
          ))}
        </ImageProvider>
      </div>
    </section>
  );
};

export default Projects;
