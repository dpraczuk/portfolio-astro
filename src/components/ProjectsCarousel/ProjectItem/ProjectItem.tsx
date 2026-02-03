import type { Project } from "@/types/types";
import ImagePlaceholder from "public/assets/images/img-placeholder.svg";
import Arrow from "public/assets/images/Arrow.png";

const ProjectItem = (project: Project) => {
  const image = project.projectImages[0];

  return (
    <div
      key={project.slug}
      className="keen-slider__slide pixel-violet-container flex flex-col min-h-[520px] sm:h-[620px] w-4/12 text-white px-6 sm:px-10 pt-10"
    >
      {image ? (
        <a href={`/projects/${project.slug}`} target="_blank">
          <img
            src={image.url}
            alt={project.title}
            className="pixel-flat-pink-container aspect-video w-full"
          />
        </a>
      ) : (
        <div className="flex pixel-flat-pink-container items-center justify-center">
          <img
            src={ImagePlaceholder.src}
            alt={"image placeholder"}
            className="py-3 h-full w-full aspect-video"
          />
        </div>
      )}
      <div className="flex flex-col mt-4 h-full pt-7">
        <h2 className="text-4xl sm:text-5xl">{project.title}</h2>
        {project.company && (
          <p className="text-2xl mt-2 opacity-65">{project.company}</p>
        )}
        <p className="text-2xl sm:text-3xl mt-5 font-VT323">
          {project.shortDescription}
        </p>
      </div>
      <div className="flex gap-3.5 py-7 justify-end">
        <a
          href={`/projects/${project.slug}`}
          className="flex gap-3 cursor-pointer"
        >
          <p className="text-3xl font-VT323">More</p>
          <img src={Arrow.src} alt="" className={"h-9 w-9 -rotate-90"} />
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
