import ProgressiveImage from "./ProgressiveImage";

const projObj = [
  {
    title: "Sugano Investments Website",
    description: "A website for a family-owned investment company.",
    techStack: ["React", "Tailwind CSS", "Custom Markdown Blog"],
    features: [
      "Responsive Design",
      "Contact Form",
      "reCAPTCHA v2",
      "SEO Optimized",
      "Custom Blog",
    ],
    links: {
      live: "https://suganoinvestments.com",
      github: null,
    },
    images: {
      home: {
        tiny: "/images/tiny_SI-Home.png",
        thumb: "/images/SI-Home.png",
        alt: "Home Page for Project 1",
      },
      blog: {
        tiny: "/images/tiny_SI-Blog.png",
        thumb: "/images/SI-Blog.png",
        alt: "Blog Page for Project 1",
      },
      post: {
        tiny: "/images/tiny_SI-Post.png",
        thumb: "/images/SI-Post.png",
        alt: "Post Page for Project 1",
      },
    },
  },
  {
    title: "Tree Visualizer",
    description: "A web application for visualizing tree data structures.",
    techStack: ["React", "Tailwind CSS", "DaisyUI"],
    features: [
      "Responsive Design",
      "Most Common Traverse Methods",
      "HTML Canvas Visualization",
      "Explanations with code",
    ],
    links: {
      live: "https://wilkbob.github.io/DSVis/",
      github: "https://github.com/WilkBob/DSVis",
    },
    images: {
      home: {
        tiny: "/images/tiny_TT-Home.png",
        thumb: "/images/TT-Home.png",
        alt: "Home Page for Project 2",
      },
      blog: {
        tiny: "/images/tiny_TT-Hero.png",
        thumb: "/images/TT-Hero.png",
        alt: "Hero Page for Project 2",
      },
      post: {
        tiny: "/images/tiny_TT-Code.png",
        thumb: "/images/TT-Code.png",
        alt: "Code Page for Project 2",
      },
    },
  },
];

const Projects = () => {
  return (
    <section
      className="bg-zinc-800 md:bg-inherit md:bg-gradient-to-r md:from-zinc-800 md:to-transparent p-4 min-h-screen w-full z-10 flex flex-col items-center justify-center space-y-8 md:rounded-br-[50%]"
      id="projects"
    >
      <div className="container mx-auto space-y-8 flex flex-col justify-center h-full">
        <h2 className="text-4xl font-bold text-teal-300">Projects</h2>
        {projObj.map((proj, index) => (
          <Project key={index} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

const Project = ({
  title,
  description,
  techStack,
  features,
  links,
  images,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-3xl font-semibold text-teal-300">{title}</h3>
        <p className="text-lg">{description}</p>
        <div className="space-y-4">
          <h4 className="text-2xl font-semibold text-teal-300">Tech Stack</h4>
          <ul className="space-y-2">
            {techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-2xl font-semibold text-teal-300">Features</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="space-x-4">
          {links.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-300 hover:text-teal-500 transition-colors duration-300"
            >
              Live Site
            </a>
          )}
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-300 hover:text-teal-500 transition-colors duration-300"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <ProgressiveImage
          tinyUrl={images.home.tiny}
          thumbUrl={images.home.thumb}
          alt={images.home.alt}
        />
        <ProgressiveImage
          tinyUrl={images.blog.tiny}
          thumbUrl={images.blog.thumb}
          alt={images.blog.alt}
        />
        <ProgressiveImage
          tinyUrl={images.post.tiny}
          thumbUrl={images.post.thumb}
          alt={images.post.alt}
        />
      </div>
    </div>
  );
};
