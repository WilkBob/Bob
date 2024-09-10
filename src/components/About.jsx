const About = () => {
  return (
    <div className="min-h-screen w-full bg-teal-950 z-10">
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-5xl font-bold mb-8 text-teal-100 text-center">
          About Me
        </h1>
        <section className="mb-12">
          <h2 className="text-4xl font-semibold mb-4 text-teal-100">
            Introduction
          </h2>
          <p className="text-lg">
            Hello! I&apos;m Robert, a passionate full-stack web developer with a
            strong foundation in front-end technologies and a growing expertise
            in back-end development. I blend technical skills with creativity to
            build engaging, user-centric web applications.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-4xl font-semibold mb-4 text-teal-100">
            🚀 Technical Skills
          </h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>
              <strong>Frontend:</strong> React, JavaScript, TypeScript, HTML5,
              CSS3, Material UI, Bootstrap
            </li>
            <li>
              <strong>Backend:</strong> Node.js, Express.js
            </li>
            <li>
              <strong>Cloud & Databases:</strong> Firebase, Google Cloud
              Platform
            </li>
            <li>
              <strong>Tools & Environment:</strong> Git, GitHub, Docker, VS
              Code, Windows, Ubuntu, Debian
            </li>
            <li>
              <strong>Other:</strong> Unity, Blender, Adobe Suite, 3D Modeling,
              Audio Manipulation
            </li>
          </ul>
        </section>
        <section className="mb-12">
          <h2 className="text-4xl font-semibold mb-4 text-teal-100">
            🌱 Currently Learning
          </h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>
              Advancing my skills in backend development and cloud technologies
            </li>
            <li>
              Exploring AI integration in web applications using OpenAI and
              Google Gemini SDKs
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-4xl font-semibold mb-4 text-teal-100">
            🎸 Beyond Coding
          </h2>
          <p className="text-lg mb-4">
            When I&apos;m not immersed in code, you can find me:
          </p>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Playing guitar (12+ years of experience)</li>
            <li>Producing music</li>
            <li>
              Strategizing my next move in chess (Top 15% Speed Chess player)
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
