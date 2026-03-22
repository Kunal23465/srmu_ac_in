import React, { useEffect, useState } from "react";
import Classes from "../../utils/styles/Global.module.css";
import banner4 from "../../assets/images/home/banner-bg.webp";
import viewmorepdf from "../../assets/pdf/home/aa-career-360-270125114337.pdf";
import srmuRatedPdf from "../../assets/pdf/home/Best B School certificate.pdf";
import { LiaLongArrowAltLeftSolid, LiaLongArrowAltRightSolid } from "react-icons/lia";

const Banner: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [previousIndex, setPreviousIndex] = useState<number | null>(null);
    const [direction, setDirection] = useState<"next" | "prev">("next");

    const slides = [
        {
            eyebrow: "Cheers to Success!!",
            title: (
                <>
                    Now, SRMU is <br />
                    ISO 9001, ISO 14001, and ISO 50001 certified organization
                </>
            ),
            description: "Certified Excellence: Our Commitment to Quality and Standards",
            href: viewmorepdf,
            cta: "Know More",
            imageAlt: "SRMU certification banner",
            headingTag: "h1",
            contentWidthClass: "max-w-[860px]",
        },
        {
            eyebrow: "Celebrating Excellence",
            title: (
                <>
                    SRMU rated AA+ <br />
                    by Career 360
                </>
            ),
            description: "Making it one of the Best B-Schools in the country in 2026",
            href: srmuRatedPdf,
            cta: "View More",
            imageAlt: "SRMU Career 360 rating banner",
            headingTag: "h2",
            contentWidthClass: "max-w-[650px]",
        },
    ] as const;

    const transitionTo = (nextIndex: number, nextDirection: "next" | "prev") => {
        setPreviousIndex(selectedIndex);
        setDirection(nextDirection);
        setSelectedIndex(nextIndex);
    };

    useEffect(() => {
        const timer = window.setInterval(() => {
            transitionTo((selectedIndex + 1) % slides.length, "next");
        }, 5000);

        return () => window.clearInterval(timer);
    }, [selectedIndex, slides.length]);

    const prev = () => {
        transitionTo((selectedIndex - 1 + slides.length) % slides.length, "prev");
    };

    const next = () => {
        transitionTo((selectedIndex + 1) % slides.length, "next");
    };

    return (
        <div className="w-full relative overflow-hidden mobile-header-style rounded-b-[28px] sm:rounded-none">
            <div className="overflow-hidden rounded-b-[28px] sm:rounded-none">
                <div className="relative">
                    <img
                        className="w-full h-[44vh] sm:h-auto sm:min-h-[470px] md:min-h-[520px] lg:min-h-[640px] max-h-[calc(100vh-140px)] object-cover rounded-b-[28px] sm:rounded-none"
                        src={banner4}
                        alt={slides[selectedIndex].imageAlt}
                        fetchpriority="high"
                        loading="eager"
                        decoding="async"
                    />

                    <div className="overlay bg-[#0000000d] absolute top-0 left-0 w-full h-full flex pt-10 sm:pt-0 items-center">
                        <div className={Classes["container"]}>
                            <div className={`relative min-h-[240px] sm:min-h-[280px] md:min-h-[320px] -translate-y-4 sm:-translate-y-6 lg:-translate-y-10 ${slides[selectedIndex].contentWidthClass}`}>
                                {slides.map((slide, index) => {
                                    const isActive = index === selectedIndex;
                                    const isPrevious = index === previousIndex;
                                    const HeadingTag = slide.headingTag;
                                    const animationClass = isActive
                                        ? direction === "next"
                                            ? "hero-text-enter-right"
                                            : "hero-text-enter-left"
                                        : isPrevious
                                            ? direction === "next"
                                                ? "hero-text-exit-left"
                                                : "hero-text-exit-right"
                                            : "hero-text-hidden";

                                    return (
                                        <div
                                            key={slide.eyebrow}
                                            className={`absolute inset-0 z-10 text-white sm:px-4 sm:py-4 md:py-8 rounded-tl-[50px] rounded-br-[50px] pointer-events-none ${animationClass} ${isActive ? "z-20" : ""}`}
                                        >
                                            <div className="text-[16px] sm:text-[18px] mb-2.5">{slide.eyebrow}</div>

                                            <HeadingTag className="text-[26px] sm:text-[34px] lg:text-[48px] xl:text-[56px] font-medium leading-[1.12] mb-2.5">
                                                {slide.title}
                                            </HeadingTag>

                                            <div className="text-[12px] sm:text-[17px]">{slide.description}</div>

                                            <div className="mt-6">
                                                <a href={slide.href} target="_blank">
                                                    <button className="bg-[#ffb703] uppercase py-3 px-4.5 text-[#023047] flex gap-x-2 items-center rounded-lg">
                                                        {slide.cta}
                                                        <LiaLongArrowAltRightSolid size={22} />
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    );
                                })}
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
