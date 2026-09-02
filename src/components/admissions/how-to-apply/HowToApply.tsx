import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Classes from "../../../utils/styles/Global.module.css";
import { HowToApplyTopFooterData, SRMUoffersData } from "../../../data/admissions/how-to-apply/how-to-apply-data";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import img from "../../../assets/images/admissions/how-to-apply/howtoapply-08022410430874.webp";
import OnlineAdmissionProcess from "./OnlineAdmissionProcess";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const HowToApply: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    skipSnaps: false,
    dragFree: false,
  });

  useEffect(() => {
    setHasMounted(true);

    const handleResize = () => {
      if (typeof window !== "undefined") {
        setWindowWidth(window.innerWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!emblaApi || !hasMounted) return;

    const onSelect = () => {
      setCurrentSlide(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, hasMounted]);

  /** Re-initialize embla when window width changes */
  useEffect(() => {
    if (emblaApi && hasMounted) {
      emblaApi.reInit();
    }
  }, [windowWidth, emblaApi, hasMounted]);

  // Function to determine slidesToShow based on window width
  const getSlidesToShow = useCallback(() => {
    if (windowWidth >= 1024) return 3;
    if (windowWidth >= 768) return 2;
    return 1;
  }, [windowWidth]);

  const totalSlides = SRMUoffersData.length;

  // 🔍 Determine when to disable arrows
  const isAtStart = currentSlide === 0;
  const isAtEnd = currentSlide >= totalSlides - getSlidesToShow();

  const goToNext = () => emblaApi?.scrollNext();
  const goToPrev = () => emblaApi?.scrollPrev();

  // Get slide width based on slides to show
  const getSlideWidth = () => {
    const slidesToShow = getSlidesToShow();
    return `${100 / slidesToShow}%`;
  };

  return (
    <div>
      <div className="pt-7 md:pt-10 lg:pt-14">
        <div className={`${Classes["container"]}`}>
          <div className="flex flex-col md:flex-row gap-4 items-stretch justify-between">
            <div className="w-auto border-l-4 pl-2 md:pl-0 md:border-l-0 md:border-r-5 border-[#ffb703] flex flex-col justify-center">
              <h1 className="text-[#023047] text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500 whitespace-pre-line leading-15 pr-4 sm:min-w-[350px]">
                How To Apply
              </h1>
            </div>
            <div className="md:pl-8 md:py-4">
              <div className="text-justify text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px]">
                <p className="pb-4">
                  To begin your journey at Shri Ramswaroop Memorial University (SRMU), visit the official website and head to the “
                  <a
                    className="font-medium italic underline"
                    href="https://studentportal.srmu.ac.in" target="_blank"
                    rel="noopener noreferrer"                  >
                    Apply Now
                  </a>
                  ” section.
                </p>
                <p className="pb-4">
                  Choose your desired undergraduate or postgraduate program, review the eligibility criteria and admission guidelines, and fill out the online application form with
                  accurate personal and academic details.
                </p>
                <p>Make sure to upload the required documents and follow the instructions provided to complete the process smoothly.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <OnlineAdmissionProcess />
        </div>

        <div className={`${Classes["container"]}`}>
          <div className="">
            <div className="flex">
              <div>
                <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] font-bold">SRMU Offers</h2>
              </div>
              <div className="ml-auto flex gap-5">
                <button
                  onClick={goToPrev}
                  disabled={!hasMounted || isAtStart}
                  className={`w-12 h-12 border-2 border-black flex hover:bg-[#0f4a85] text-[#0f4a85] hover:text-[#ffb703] items-center justify-center transition ${!hasMounted || isAtStart ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
                    }`}
                >
                  <MdKeyboardArrowLeft size="26" />
                </button>

                <button
                  onClick={goToNext}
                  disabled={!hasMounted || isAtEnd}
                  className={`w-12 h-12 border-2 border-black flex hover:bg-[#0f4a85] text-[#0f4a85] hover:text-[#ffb703] items-center justify-center transition ${!hasMounted || isAtEnd ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
                    }`}
                >
                  <MdKeyboardArrowRight size="26" />
                </button>
              </div>
            </div>

            <div className="py-10 sm:py-20">
              {/* Static grid for SSR */}
              {!hasMounted && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {SRMUoffersData.slice(0, 3).map((item) => (
                    <div key={item.id} className="px-3">
                      <div className="p-7 pb-5 h-100 lg:h-120 xl:h-100 w-full hover:text-white transition-all duration-300 hover:bg-[#0f4a85] border border-gray-200 rounded-xl">
                        <img
                          src={item.img}
                          alt={item.title}
                          width={380}
                          height={240}
                          loading="lazy"
                          decoding="async"
                          className="rounded-xl object-cover h-[85%] w-full mb-4"
                        />
                        <h2 className="text-2xl font-medium mb-1">{item.title}</h2>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Embla Carousel */}
              {hasMounted && (
                <div className="overflow-hidden" ref={emblaRef}>
                  <div className="flex">
                    {SRMUoffersData.map((item) => (
                      <Link to={`/${item.path}`}
                        key={item.id}
                        className="flex-shrink-0 flex-grow-0 px-3 cursor-pointer"
                        style={{ flexBasis: getSlideWidth() }}
                      >
                        <div className="p-7 pb-5 h-100 lg:h-120 xl:h-100 w-full hover:text-white transition-all duration-300 hover:bg-[#0f4a85] border border-gray-200 rounded-xl">
                          <img
                            src={item.img}
                            alt={item.title}
                            width={380}
                            height={240}
                            loading="lazy"
                            decoding="async"
                            className="rounded-xl object-cover h-[85%] w-full mb-4"
                          />
                          <h2 className="text-2xl font-medium mb-1">{item.title}</h2>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-[#f5f5f5]">
          <div className={`${Classes["container"]} py-10 lg:py-20`}>
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-25 px-0 lg:px-0">
              <div className="pt-6 lg:pt-0 w-full">
                <img
                  src={img}
                  alt="Benefits of studying at NAAC accredited SRMU university"
                  width={600}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto block"
                />
              </div>

              <div className="py-2 sm:py-0 w-full">
                <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] leading-tight text-[#023047] font-medium mr-0 sm:mr-0 lg:mr-35">
                  Get Advantage of studying in a NAAC Accredited University
                </h2>
                <ul className="list-disc marker:text-amber-400 marker:text-3xl mr-0 sm:mr-0 lg:mr-35">
                  <li className="ml-6 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] leading-2 lg:leading-6">
                    26+ Years of Academic Excellence
                  </li>
                  <li className="ml-6 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] leading-2 lg:leading-6">
                    Global & Industry Collaborations
                  </li>
                  <li className="ml-6 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] leading-2 lg:leading-6">
                    Advanced Labs & World-Class Infrastructure
                  </li>
                  <li className="ml-6 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] leading-2 lg:leading-6">
                    Strong Placement Record with MNCs & Fortune 500
                  </li>
                  <li className="ml-6 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] leading-4 lg:leading-6">
                    Industry-Aligned, Skill-Based Programs (AI, Data Science, etc.)
                  </li>
                  <li className="ml-6 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] leading-2 lg:leading-6">
                    Support for Research, Innovation & Startups
                  </li>
                  <li className="ml-6 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] leading-2 lg:leading-6">
                    Experienced Faculty with Industry Exposure
                  </li>
                  <li className="ml-6 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] leading-2 lg:leading-6">
                    Well-Connected, Student-Friendly Green Campus
                  </li>
                  <li className="ml-6 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] leading-2 lg:leading-6">
                    Flexible Academics as per NEP 2020
                  </li>
                  <li className="ml-6 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] leading-2 lg:leading-6">
                    Attractive Scholarships & Affordable Fee Structure
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <CustomTopFooter data={HowToApplyTopFooterData} />
      </div>
    </div>
  );
};

export default HowToApply;
