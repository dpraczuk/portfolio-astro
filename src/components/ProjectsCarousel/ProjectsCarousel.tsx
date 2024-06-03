import { useKeenSlider } from 'keen-slider/react'
import type {IProject} from "@/types/types.ts";
import ImagePlaceholder from "public/assets/images/img-placeholder.svg";
import Arrow from "public/assets/images/Arrow.png";

export const ProjectsCarousel = ({projects}:{projects: IProject[]}) => {
    const [ref] = useKeenSlider<HTMLDivElement>({
        breakpoints: {
            "(min-width: 300px)": {
                slides: { perView: 1.3, spacing: 45, origin: "center" },
            },
            "(min-width: 600px)": {
                slides: { perView: 1.5, spacing: 60, origin: "center" },
            },
            "(min-width: 800px)": {
                slides: { perView: 2, spacing: 60, origin: "center" },
            },
            "(min-width: 1170px)": {
                slides: { perView: 3.5, spacing: 5 },
            },
        },
        slides: { perView: 1 },
    })

    return (
        <div ref={ref} className="keen-slider flex justify-between py-10 sm:p-10 pr-20 z-50">
            {projects.map(project => {
                return <div
                    className="keen-slider__slide pixel-violet-container flex flex-col h-[520px] sm:h-[620px] w-4/12 text-white px-10 pt-10">
                    {project.projectImages[0] ? (
                        <img
                            src={project.projectImages[0].url}
                            alt={project.title}
                            className="pixel-flat-pink-container aspect-video w-full"
                        />
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
                        <h2 className="text-5xl">{project.title}</h2>
                        <p className="text-3xl mt-5 font-VT323">
                            {project.shortDescription}
                        </p>
                    </div>
                    <div className="flex gap-3.5 py-7 justify-end">
                        <a
                            href={`/projects/${project.slug}`}
                            className="flex gap-3 cursor-pointer"
                        >
                            <p className="text-3xl font-VT323">More</p>
                            <img src={Arrow.src} alt="" className={"h-9 w-9 -rotate-90"}/>
                        </a>
                    </div>
                </div>
            })}
        </div>
    );
};