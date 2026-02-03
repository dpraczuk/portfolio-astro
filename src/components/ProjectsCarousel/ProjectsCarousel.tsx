import { useKeenSlider } from "keen-slider/react";
import type { Project } from "@/types/types.ts";
import Arrow from "public/assets/images/Arrow.png";
import { cn } from "@/utils/utils";
import ProjectItem from "./ProjectItem/ProjectItem";
import { useState } from "react";

export const ProjectsCarousel = ({ projects }: { projects: Project[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [maxSlide, setMaxSlide] = useState(0);

  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 300px)": {
        slides: { perView: 1.4, spacing: 35, origin: "center" },
      },
      "(min-width: 600px)": {
        slides: { perView: 1.5, spacing: 60, origin: "center" },
      },
      "(min-width: 800px)": {
        slides: { perView: 2, spacing: 60, origin: "center" },
      },
      "(min-width: 1170px)": {
        slides: { perView: 3.35, spacing: 50 },
      },
    },
    slides: { perView: 1 },
    created(s) {
      setMaxSlide(s.track.details.maxIdx);
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
      setMaxSlide(s.track.details.maxIdx);
    },
  });

  const handlePrev = () => slider.current?.prev();
  const handleNext = () => slider.current?.next();

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide >= maxSlide;

  return (
    <div className={cn("slider-wrap", "sm:px-10 py-2")}>
      <div
        ref={ref}
        className="keen-slider flex justify-between z-50 overflow-visible"
      >
        {projects.map((project) => (
          <ProjectItem key={project.slug} {...project} />
        ))}
      </div>
      <div className="mt-10 flex gap-4 justify-center lg:justify-end">
        <button
          onClick={handlePrev}
          disabled={isFirstSlide}
          className={cn(isFirstSlide && "opacity-30")}
        >
          <img src={Arrow.src} className="w-10 rotate-90" />
        </button>
        <button
          onClick={handleNext}
          disabled={isLastSlide}
          className={cn(isLastSlide && "opacity-30")}
        >
          <img src={Arrow.src} className="w-10 -rotate-90" />
        </button>
      </div>
    </div>
  );
};
