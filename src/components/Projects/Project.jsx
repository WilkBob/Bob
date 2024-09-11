import ProgressiveImage from "../ProgressiveImage";

const Project = ({
  title,
  description,
  techStack,
  features,
  links,
  images,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
      <div>
        <h3 className="text-3xl font-semibold text-teal-300 mb-2">{title}</h3>
        <p className="text-lg">{description}</p>
        <div className="space-x-4 py-4">
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
        <div className="space-y-4">
          <h4 className="text-2xl font-semibold text-teal-100">Tech Stack</h4>
          <ul className="space-y-2">
            {techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-2xl font-semibold text-teal-100">Features</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
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

export default Project;
