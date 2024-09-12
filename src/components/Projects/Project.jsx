import ProgressiveImage from "../ProgressiveImage";
import { FaGithub, FaGlobe, FaCode, FaList, FaImage } from "react-icons/fa";
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb } from "react-icons/si";
import Modal from "../Modal";
import { useState } from "react";

const TechIcon = ({ tech }) => {
  const iconMap = {
    JavaScript: SiJavascript,
    React: SiReact,
    "Node.js": SiNodedotjs,
    MongoDB: SiMongodb,
    // Add more mappings as needed
  };

  const Icon = iconMap[tech] || FaCode;

  return <Icon className="inline-block mr-2" />;
};

const Project = ({
  title,
  description,
  techStack,
  features,
  links,
  images,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [IMGindex, setIMGIndex] = useState(0);
  return (
    <div className="overflow-hidden max-w-[1400px]">
      <div className="p-6">
        <h3 className="text-3xl font-bold text-teal-300 mb-4 flex items-center">
          <FaCode className="mr-3" />
          {title}
        </h3>
        <p className="text-gray-300 mb-6">{description}</p>

        <div className="flex flex-wrap gap-4 mb-6">
          {links.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600 transition-colors duration-300 flex items-center"
            >
              <FaGlobe className="mr-2" />
              Live Site
            </a>
          )}
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-colors duration-300 flex items-center"
            >
              <FaGithub className="mr-2" />
              GitHub
            </a>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-xl font-semibold text-teal-200 mb-2 flex items-center">
              <FaCode className="mr-2" />
              Tech Stack
            </h4>
            <ul className="space-y-1 text-gray-300">
              {techStack.map((tech, index) => (
                <li key={index} className="flex items-center">
                  <TechIcon tech={tech} />
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-teal-200 mb-2 flex items-center">
              <FaList className="mr-2" />
              Features
            </h4>
            <ul className="list-disc list-inside space-y-1 text-teal-100">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="p-4">
        <Modal
          images={images}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          index={IMGindex}
          setIndex={setIMGIndex}
        />
        <h4 className="text-xl font-semibold text-teal-200 mb-3 flex items-center">
          <FaImage className="mr-2" />
          Project Images
        </h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          {Object.values(images).map((image, index) => (
            <div
              key={index}
              className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300 group"
              onClick={() => {
                setModalOpen(true);
                setIMGIndex(index);
                //console.log("Image clicked");
                //console.log(image, modalOpen);
              }}
            >
              <ProgressiveImage
                tinyUrl={image.tiny}
                thumbUrl={image.original}
                alt={image.alt}
                className="object-cover w-full h-full transition-all duration-300 overflow-auto hover:shadow-xl hover:shadow-white"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
