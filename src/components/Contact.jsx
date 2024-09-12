import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs.init({ publicKey: "XCo9x7iU8_QIeJ5zu" });
    emailjs.send("service_u2lfnv9", "template_6trkxuk", formData).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      },
      (err) => {
        console.error("FAILED...", err);
        setIsSubmitting(false);
        setError("Failed to send message. Please try again later.");
      }
    );
  };

  return (
    <section
      className="min-h-screen w-full flex items-center z-[5]"
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
                href="mailto:bobbydchess@gmail.com"
                className="text-teal-300 hover:text-teal-500"
              >
                bobbydchess@gmail.com
              </a>
              .
            </p>
            <p className="mt-2 text-lg text-teal-100">
              You can also check out my resume{" "}
              <a
                href="/Robert_Wilkinson.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-300 hover:text-teal-500"
              >
                here
              </a>
              .
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
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
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white/10 backdrop-blur-[2px] border-b border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-300 focus:border-teal-300 hover:border-teal-400 sm:text-sm"
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
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white/10 backdrop-blur-[2px] border-b border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-300 focus:border-teal-300 hover:border-teal-400 sm:text-sm"
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
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white/10 backdrop-blur-[2px] border-b border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-300 focus:border-teal-300 hover:border-teal-400 sm:text-sm"
                  placeholder="Your message here"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
            {isSubmitted && (
              <p className="text-center text-teal-300 mt-4">
                Your message has been sent successfully!
              </p>
            )}
            {error && <p className="text-center text-red-500 mt-4">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
