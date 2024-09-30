import { useCallback, useEffect, useMemo } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { ProgressiveImage } from "progressify-react";

const Modal = ({ images, modalOpen, setModalOpen, index, setIndex, proj }) => {
  "use no memo ";
  const nextImage = useCallback(() => {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length, setIndex]);

  const prevImage = useCallback(() => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length, setIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "Escape") {
        setModalOpen(false);
      }
    };

    const preventScroll = (e) => {
      e.preventDefault();
    };

    if (modalOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent scrolling
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = ""; // Re-enable scrolling
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    };
  }, [modalOpen, prevImage, nextImage, setModalOpen]);

  const renderedButtons = useMemo(
    () =>
      images.map((_, i) => (
        <button
          key={`btn-${i}-${proj}`}
          onClick={() => setIndex(i)}
          className={`w-3 h-3 rounded-full mx-1 ${
            i === index ? "bg-white" : "bg-gray-500"
          }`}
        />
      )),
    [images, index, setIndex, proj]
  );

  return (
    <AnimatePresence>
      {modalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-25 z-50 flex justify-center items-center"
          onClick={() => setModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="md:p-4 rounded-lg max-w-7xl w-full md:m-4"
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
                src={images[index]}
                placeholderClassName="blur-sm"
                className="w-full rounded-lg"
                alt="Project Image"
                lazy
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
            <div className="mt-4 flex justify-center">{renderedButtons}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
