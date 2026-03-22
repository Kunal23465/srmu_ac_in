import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Classes from "../../utils/styles/Global.module.css";
import banner4 from "../../assets/images/home/banner-bg.webp";
import viewmorepdf from "../../assets/pdf/home/aa-career-360-270125114337.pdf";
import srmuRatedPdf from "../../assets/pdf/home/Best B School certificate.pdf";
import { LiaLongArrowAltLeftSolid, LiaLongArrowAltRightSolid } from "react-icons/lia";

const Banner: React.FC = () => {
    const autoplay = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);

    const prev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const next = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className="w-full relative overflow-hidden mobile-header-style rounded-b-[28px] sm:rounded-none">
            {/* Slider */}
            <div className="overflow-hidden rounded-b-[28px] sm:rounded-none" ref={emblaRef}>
                <div className="flex">
                    {/* Slide 1 */}
                    <div className="min-w-full banner-slider overflow-hidden relative">
                        <div className="relative">
                            <img className="w-full h-[44vh] sm:h-auto sm:min-h-[470px] md:min-h-[520px] lg:min-h-[640px] max-h-[calc(100vh-140px)] object-cover rounded-b-[28px] sm:rounded-none" src={banner4} alt="Banner" fetchpriority="high" loading="eager" decoding="async" />

                            <div className="overlay bg-[#0000000d] absolute top-0 left-0 w-full h-full flex pt-10 sm:pt-0 items-center">
                                <div className={Classes["container"]}>
                                    <div className="max-w-[650px] text-white sm:px-4 sm:py-4 md:py-8 rounded-tl-[50px] transition-all duration-300 rounded-br-[50px]">
                                        <div className="text-[16px] sm:text-[18px] mb-2.5">Cheers to Success!!</div>

                                        <h1 className="text-[21px] sm:text-[28px] lg:text-[38px] xl:text-[42px] font-medium leading-[1.12] mb-2.5">
                                            Now, SRMU is <br />
                                            ISO 9001, ISO 14001, and ISO 50001 certified organization
                                        </h1>

                                        <div className="text-[12px] sm:text-[17px]">Certified Excellence: Our Commitment to Quality and Standards</div>

                                        <div className="mt-6">
                                            <a href={viewmorepdf} target="_blank">
                                                <button className="bg-[#ffb703] uppercase py-3 px-4.5 text-[#023047] flex gap-x-2 items-center rounded-lg">
                                                    Know More
                                                    <LiaLongArrowAltRightSolid size={22} />
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="min-w-full banner-slider overflow-hidden relative">
                        <div className="relative">
                            <img className="w-full h-[44vh] sm:h-auto sm:min-h-[470px] md:min-h-[520px] lg:min-h-[640px] max-h-[calc(100vh-140px)] object-cover rounded-b-[28px] sm:rounded-none" src={banner4} alt="Banner" loading="lazy" decoding="async" />

                            <div className="overlay bg-[#0000000d] absolute top-0 left-0 w-full h-full flex pt-10 sm:pt-0 items-center">
                                <div className={Classes["container"]}>
                                    <div className="max-w-[650px] text-white sm:px-4 sm:py-4 md:py-8 rounded-tl-[50px] rounded-br-[50px]">
                                        <div className="text-[16px] sm:text-[18px] mb-2.5">Celebrating Excellence</div>

                                        <h2 className="text-[21px] sm:text-[28px] lg:text-[38px] xl:text-[42px] font-medium leading-[1.12] mb-2.5">
                                            SRMU rated AA+ <br />
                                            by Career 360
                                        </h2>

                                        <div className="text-[12px] sm:text-[17px]">Making it one of the Best B-Schools in the country in 2026</div>

                                        <div className="mt-6">
                                            <a href={srmuRatedPdf} target="_blank">
                                                <button className="bg-[#ffb703] uppercase py-3 px-4.5 text-[#023047] flex gap-x-2 items-center rounded-lg">
                                                    View More
                                                    <LiaLongArrowAltRightSolid size={22} />
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* arrows */}
            <div className={`flex justify-end space-x-2 absolute bottom-[8%] w-full left-[50%] -translate-x-[50%] ${Classes["container"]}`}>
                <button onClick={prev}>
                    <LiaLongArrowAltLeftSolid size={22} className="text-white w-8 h-8" />
                </button>

                <button onClick={next}>
                    <LiaLongArrowAltRightSolid size={22} className="text-white w-8 h-8" />
                </button>
            </div>
        </div>
    );
};

export default Banner;
