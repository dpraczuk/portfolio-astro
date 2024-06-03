import { useKeenSlider } from 'keen-slider/react'
import BiedronkaLogo from "public/assets/images/logo-biedronka.png";
import VectraLogo from "public/assets/images/vectra-logo.png";
import MercasoLogo from "public/assets/images/mercaso.webp";

const animation = { duration: 15000, easing: (t: number) => t };

export const CompaniesCarousel = () => {
    const [ref] = useKeenSlider<HTMLDivElement>({
        loop: true,
        renderMode: "performance",
        drag: false,
        created(s) {
            s.moveToIdx(2, true, animation)
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 2, true, animation)
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 2, true, animation)
        },
    })

    return (
        <div
            ref={ref}
            className="keen-slider z-50 my-14 sm:my-20 items-center">
            <div className={"keen-slider__slide"}>
                <a href="https://www.biedronka.pl" target={"_blank"}
                   className={'w-fit flex justify-center items-center' +
                       'w-[400px]'}>
                    <img src={BiedronkaLogo.src} alt={""} className={"w-[180px] h-[90px]" +
                        " md:w-[240px] md:h-[120px] xl:w-[400px] xl:h-[170px] mb-5"}/>
                </a>
            </div>
            <div className={"keen-slider__slide"}>
                <a href="https://www.mercaso.com" target={"_blank"}
                   className={'w-fit flex justify-center' +
                       ' items-center w-[400px]'}>
                <img
                    src={MercasoLogo.src}
                    alt={""}
                    className={"h-[120px] w-[120px] rounded-lg"}
                />
                </a>
            </div>
            <div className={"keen-slider__slide"}>
                <a href="https://www.vectra.pl/" target={"_blank"} className={'w-fit flex justify-center' +
                    ' items-center w-[400px]'}>
                    <img src={VectraLogo.src} className={"w-[200px] h-[60px] md:w-[240px]" +
                        " md:h-[70px] xl:w-[400px] xl:h-[120px]"} alt={""}/>
                </a>
            </div>
        </div>
    );
};