const Contact = () => {
  return (
    <section
      className="min-h-screen w-full flex items-center z-10"
      id="contact"
    >
      <div className="container p-2 space-y-8 mx-auto">
        <div className="max-w-[1000px]">
          <div>
            <h2 className="text-4xl font-bold text-teal-300">Contact Me</h2>
            <p className="mt-2 text-lg text-teal-100">
              I&apos;d love to hear from you! Feel free to reach out via the
              form below or email me directly at{" "}
              <a
                href="mailto:your-email@example.com"
                className="text-teal-300 hover:text-teal-500"
              >
                bobbydchess@gmail.com
              </a>
              .
            </p>
            <p className="mt-2 text-lg text-teal-100">
              You can also check out my resume{" "}
              <a
                href="/path/to/your-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-300 hover:text-teal-500"
              >
                here
              </a>
              .
            </p>
          </div>
          <form className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block font-medium text-teal-100/80"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white/25 border-b border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-300 focus:border-teal-300 sm:text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-medium text-teal-100/80"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white/25 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-300 focus:border-teal-300 sm:text-sm"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block font-medium text-teal-100/80"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white/25 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-300 focus:border-teal-300 sm:text-sm"
                  placeholder="Your message here"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
