import Project from "./Project";

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
      className="bg-zinc-800 md:bg-inherit md:bg-gradient-to-r md:from-zinc-800 md:to-transparent p-4 pb-20 min-h-screen w-full z-10 flex flex-col items-center justify-center md:rounded-br-[50%]"
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
