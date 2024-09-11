import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaDocker,
  FaWindows,
  FaUbuntu,
  FaUnity,
} from "react-icons/fa";
import {
  SiTypescript,
  SiBootstrap,
  SiFirebase,
  SiGooglecloud,
  SiVisualstudiocode,
  SiDebian,
  SiBlender,
} from "react-icons/si";

const About = () => {
  return (
    <section
      className="bg-zinc-800 md:bg-inherit md:bg-gradient-to-r md:from-zinc-800 md:to-transparent p-4 min-h-screen w-full z-10 flex flex-col items-center justify-center py-20 space-y-8 md:rounded-tr-[50%]"
      id="about"
    >
      <div className="container mx-auto space-y-8 flex flex-col justify-center h-full">
        <h2 className="text-4xl font-bold text-teal-300">About Me</h2>
        <p className="text-lg max-w-[800px] lg:max-w-[1000px]">
          Hi! I&apos;m Robert, a full-stack web developer based in the United
          States. I enjoy building web applications that are fast, responsive,
          and accessible. I&apos;m passionate about learning new technologies
          and frameworks to improve my skills and build better projects.
        </p>
        <p className="text-lg max-w-[1000px]">
          I have experience working with JavaScript, React, Node.js, Express,
          MongoDB, and other web technologies. I&apos;m always looking for new
          opportunities to collaborate on interesting projects and expand my
          knowledge.
        </p>
        <div className="space-y-8">
          <h3 className="text-3xl font-semibold text-teal-300">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h4 className="text-2xl font-semibold text-teal-300 mb-4">
                Frontend
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <FaReact size="1.5rem" />
                  <span>React</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaJs size="1.5rem" />
                  <span>JavaScript</span>
                </li>
                <li className="flex items-center space-x-2">
                  <SiTypescript size="1.5rem" />
                  <span>TypeScript</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaHtml5 size="1.5rem" />
                  <span>HTML5</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaCss3Alt size="1.5rem" />
                  <span>CSS3</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>Material UI</span>
                </li>
                <li className="flex items-center space-x-2">
                  <SiBootstrap size="1.5rem" />
                  <span>Bootstrap</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-teal-300 mb-4">
                Backend
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <FaNodeJs size="1.5rem" />
                  <span>Node.js</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>Express.js</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-teal-300 mb-4">
                Cloud & Databases
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <SiFirebase size="1.5rem" />
                  <span>Firebase</span>
                </li>
                <li className="flex items-center space-x-2">
                  <SiGooglecloud size="1.5rem" />
                  <span>Google Cloud Platform</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-teal-300 mb-4">
                Tools & Environment
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <FaGit size="1.5rem" />
                  <span>Git</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaGithub size="1.5rem" />
                  <span>GitHub</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaDocker size="1.5rem" />
                  <span>Docker</span>
                </li>
                <li className="flex items-center space-x-2">
                  <SiVisualstudiocode size="1.5rem" />
                  <span>VS Code</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaWindows size="1.5rem" />
                  <span>Windows</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaUbuntu size="1.5rem" />
                  <span>Ubuntu</span>
                </li>
                <li className="flex items-center space-x-2">
                  <SiDebian size="1.5rem" />
                  <span>Debian</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-teal-300 mb-4">
                Other
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <FaUnity size="1.5rem" />
                  <span>Unity</span>
                </li>
                <li className="flex items-center space-x-2">
                  <SiBlender size="1.5rem" />
                  <span>Blender</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>Adobe Suite</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>Audio and Music Production</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-3/4 border-t-2 border-teal-300/20 mt-10" />
    </section>
  );
};

export default About;
