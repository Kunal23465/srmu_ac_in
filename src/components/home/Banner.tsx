import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Classes from "../../utils/styles/Global.module.css";
import banner4 from "../../assets/images/home/banner-bg.jpg";
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
        <div className="w-full relative overflow-hidden mobile-header-style">
            {/* Slider */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {/* Slide 1 */}
                    <div className="min-w-full banner-slider overflow-hidden relative">
                        <div className="relative">
                            <img className="w-full h-[50vh] sm:h-auto sm:min-h-[530px] md:min-h-[600px] lg:min-h-[800px] max-h-[calc(100vh-120px)] object-cover" src={banner4} alt="Banner" />

                            <div className="overlay bg-[#0000000d] absolute top-0 left-0 w-full h-full flex pt-10 sm:pt-0 items-center">
                                <div className={Classes["container"]}>
                                    <div className="text-white sm:px-5 sm:py-5 md:py-10 rounded-tl-[50px] transition-all duration-300 rounded-br-[50px]">
                                        <div className="text-[18px] sm:text-[20px] mb-4">Cheers to Success!!</div>

                                        <div className="text-[22px] sm:text-[32px] lg:text-[46px] xl:text-[52px] font-medium leading-[1.2] mb-4">
                                            Now, SRMU is <br />
                                            ISO 9001, ISO 14001, and ISO 50001 certified organization
                                        </div>

                                        <div className="text-[12px] sm:text-[21px]">Certified Excellence: Our Commitment to Quality and Standards</div>

                                        <div className="mt-10">
                                            <a href={viewmorepdf} target="_blank">
                                                <button className="bg-[#ffb703] uppercase py-4 px-5 text-[#023047] flex gap-x-2 items-center rounded-lg">
                                                    Know More
                                                    <LiaLongArrowAltRightSolid size={24} />
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
                            <img className="w-full h-[50vh] sm:h-auto sm:min-h-[530px] md:min-h-[600px] lg:min-h-[800px] max-h-[calc(100vh-120px)] object-cover" src={banner4} alt="Banner" />

                            <div className="overlay bg-[#0000000d] absolute top-0 left-0 w-full h-full flex pt-10 sm:pt-0 items-center">
                                <div className={Classes["container"]}>
                                    <div className="text-white sm:px-5 sm:py-5 md:py-10 rounded-tl-[50px] rounded-br-[50px]">
                                        <div className="text-[18px] sm:text-[20px] mb-4">Celebrating Excellence</div>

                                        <div className="text-[22px] sm:text-[32px] lg:text-[46px] xl:text-[52px] font-medium leading-[1.2] mb-4">
                                            SRMU rated AA+ <br />
                                            by Career 360
                                        </div>

                                        <div className="text-[12px] sm:text-[21px]">Making it one of the Best B-Schools in the country in 2026</div>

                                        <div className="mt-10">
                                            <a href={srmuRatedPdf} target="_blank">
                                                <button className="bg-[#ffb703] uppercase py-4 px-5 text-[#023047] flex gap-x-2 items-center rounded-lg">
                                                    View More
                                                    <LiaLongArrowAltRightSolid size={24} />
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
            <div className={`flex justify-end space-x-2 absolute bottom-[10%] w-full left-[50%] -translate-x-[50%] ${Classes["container"]}`}>
                <button onClick={prev}>
                    <LiaLongArrowAltLeftSolid size={24} className="text-white w-9 h-9" />
                </button>

                <button onClick={next}>
                    <LiaLongArrowAltRightSolid size={24} className="text-white w-9 h-9" />
                </button>
            </div>
        </div>
    );
};

export default Banner;
