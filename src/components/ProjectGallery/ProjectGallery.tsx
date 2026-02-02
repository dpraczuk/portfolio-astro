import { useState } from "react";
import type { ProjectImage } from "@/types/types";
import Arrow from "/public/assets/images/Arrow.png";

export const ProjectGallery = ({
  projectImages,
}: {
  projectImages: ProjectImage[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = projectImages[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projectImages.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === projectImages.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <div className="flex mt-10 lg:mt-0 lg:ml-5">
      {projectImages.length > 1 && (
        <button
          onClick={handlePrev}
          className="md:m-2 md:p-2"
          aria-label="Previous image"
        >
          <img src={Arrow.src} alt="" className="min-w-8 w-10 rotate-90" />
        </button>
      )}
      <div className="flex items-center justify-center mx-3">
        {currentImage && (
          <img
            src={currentImage.url}
            alt=""
            height="600"
            width="900"
            className="pixel-flat-pink-container aspect-video"
          />
        )}
      </div>
      {projectImages.length > 1 && (
        <button
          onClick={handleNext}
          className="md:m-2 md:p-2"
          aria-label="Next image"
        >
          <img src={Arrow.src} alt="" className="min-w-8 w-10 -rotate-90" />
        </button>
      )}
    </div>
  );
};
