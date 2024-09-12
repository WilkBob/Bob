import { useEffect } from "react";
import ProgressiveImage from "./ProgressiveImage";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ images, modalOpen, setModalOpen, index, setIndex }) => {
  const imageKeys = Object.keys(images);

  const nextImage = () => {
    setIndex((prevIndex) =>
      prevIndex === imageKeys.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? imageKeys.length - 1 : prevIndex - 1
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      prevImage();
    } else if (e.key === "ArrowRight") {
      nextImage();
    } else if (e.key === "Escape") {
      setModalOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("swiped-left", nextImage);
    window.addEventListener("swiped-right", prevImage);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("swiped-left", nextImage);
      window.removeEventListener("swiped-right", prevImage);
    };
  }, [index]);

  return (
    <AnimatePresence>
      {modalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center"
          onClick={() => setModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-800 md:p-4 rounded-lg shadow-2xl w-full m-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-2">
              <button
                onClick={() => setModalOpen(false)}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <FaTimes size={24} />
              </button>
            </div>
            <div className="relative">
              <ProgressiveImage
                tinyUrl={images[imageKeys[index]].thumb}
                thumbUrl={images[imageKeys[index]].original}
                alt={images[imageKeys[index]].alt}
                className="w-full h-auto rounded-md"
              />
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-1 rounded-full hover:bg-opacity-50 transition-all duration-200"
              >
                <FaChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-1 rounded-full hover:bg-opacity-50 transition-all duration-200"
              >
                <FaChevronRight size={20} />
              </button>
            </div>
            <div className="mt-4 flex justify-center">
              {imageKeys.map((key, i) => (
                <button
                  key={key}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full mx-1 ${
                    i === index ? "bg-white" : "bg-gray-500"
                  }`}
                />
              ))}
            </div>
            <p className="text-white text-center mt-4">
              {images[imageKeys[index]].alt}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
