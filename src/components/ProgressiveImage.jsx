import { useState, useEffect, useRef } from "react";

const ProgressiveImage = ({ tinyUrl, thumbUrl, alt, className }) => {
  const [src, setSrc] = useState(tinyUrl);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const cachedImage = localStorage.getItem(thumbUrl);
    if (cachedImage) {
      setSrc(thumbUrl);
      setIsLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("Image is in view, loading full image...");
          const img = new Image();
          img.src = thumbUrl;
          img.onload = () => {
            console.log("Full image loaded");
            setSrc(thumbUrl);
            setIsLoaded(true);
            localStorage.setItem(thumbUrl, thumbUrl);
          };
          img.onerror = (error) => {
            console.error("Error loading full image", error);
          };
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );

    const currentImgRef = imgRef.current;
    if (currentImgRef) {
      observer.observe(currentImgRef);
    }

    return () => {
      if (currentImgRef) {
        observer.unobserve(currentImgRef);
      }
    };
  }, [thumbUrl]);

  return (
    <div className={`relative overflow-hidden w-full ${className}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`w-full h-auto transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundImage: `url(${tinyUrl})`,
          filter: "blur(5px)",
          transform: "scale(1.1)",
        }}
      />
    </div>
  );
};

export default ProgressiveImage;
