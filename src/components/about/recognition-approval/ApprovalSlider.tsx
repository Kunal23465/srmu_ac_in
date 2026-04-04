import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Classes from "../../../utils/styles/Global.module.css";
import { approvalData } from "../../../data/about/recognition-approval/recognitionApprovalsData";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export const PdfSvgIcon: React.FC = () => (
  <svg viewBox="0 0 78.7 76.2" xmlns="http://www.w3.org/2000/svg" style={{ width: "25px", height: "25px" }}>
    <g>
      <path
        d="M63.6,43.8c-2.5,0-5.5,0.2-8.7,0.6L50.3,45l-3.8-4.7c-2.2-2.7-4.6-6-5.5-7.5l-1.4-2.4l1.7-6.4c2.2-8.4,2.4-15.1,0.4-18.9
		c-1.3-2.6-3.7-4.2-6.3-4.2c-2.3,0-4.2,1.3-5.1,3.5c-1.4,3.3-0.7,12.3,1.4,18.5l1.6,4.5L31,33.6c-1.3,3.4-3.8,9.3-5.4,12.9l-2.8,6.3
		l-7.4,3.7C6.5,60.9,1.7,65.1,1,69c-0.3,1.7,0.2,3.2,1.6,4.6c1.1,1.1,2.8,1.7,4.7,1.7c0,0,0,0,0,0c2.1,0,4.3-0.7,6.5-1.9
		c3.7-2.1,8.6-7.7,13.1-14.9c1-1.5,2.3-3.5,2.8-4.2l0.3-0.1c4.7-1.6,6.3-2.2,9.6-3c2.8-0.7,8.1-1.8,9.6-2.1c0.6,0.6,2,1.9,3.9,3.2
		c5,3.5,11.1,5.6,16.1,5.6c5.3,0,8.6-2.3,8.6-6C77.7,48.2,75.3,43.8,63.6,43.8z M64.4,53.1c-2.9-0.9-6.9-2.6-8.5-3.5
		c-0.6-0.3-1.6-0.9-2.4-1.5c2-0.3,4.9-0.6,7.1-0.8c5.1,0,6.6,0.2,8.4,1.1c1,0.5,1.7,1.5,1.8,2.4c0.1,0.9-0.4,1.7-1.2,2.3
		c-0.6,0.4-1.2,0.6-2,0.6C66.7,53.7,65.7,53.5,64.4,53.1z M32.1,49.8l0.2-0.4l3.6-9c0.7-1.7,1.5-4.2,2-5.8c0.5,0.7,1.2,1.7,2.1,2.9
		c1.5,2.3,3.8,5.3,5.2,6.9l1.4,1.7c-2,0.4-5.7,1.1-7.9,1.7C36.9,48.3,33.9,49.2,32.1,49.8z M37.2,12.4c-0.5,3-1.4,6.9-1.8,8.6
		l-0.3,1l-0.6-2c-0.7-2.4-1.3-6.4-1.4-8.4c-0.2-2.8,0.3-5.1,1.2-6.2c0.3-0.3,0.7-0.5,1-0.5c0.5,0,1.1,0.3,1.6,0.9
		C37.6,6.7,37.7,9,37.2,12.4z M4.7,70.7c-0.4-0.4-0.5-0.9-0.4-1.4c0.2-1.1,1.8-4.2,11.4-9.1l3.3-1.7c-3.1,4.9-7.6,10.2-9.7,11.6
		c-1.5,0.9-2.5,1.4-3.3,1.4C5.6,71.5,5.2,71.2,4.7,70.7z"
      />
    </g>
  </svg>
);

const ApprovalsSlider = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    skipSnaps: false,
    dragFree: false,
  });

  const totalSlides = approvalData.length;

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

  // Static grid for SSR
  if (!hasMounted) {
    return (
      <>
        <section className="bg-[#ffb703] pt-16 pb-[300px] relative overflow-visible">
          <div className={`${Classes["container"]}`}>
            <div className="px-4 md:px-0 relative">
              {/* Heading */}
              <div className="flex flex-col md:flex-row">
                <div className="text-left mb-10">
                  <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] fw600 text-black mb-4">Approvals</h2>
                  <p className="text-black max-w-3xl">
                    The Uttar Pradesh State Legislature established SRMU as a full-fledged university, and it is included among the list of universities that the University Grants
                    Commission maintains under Section 2(f), with the authority to award degrees in accordance with Section 22(1) of the UGC Act, 1956. SRMU has received permissions
                    and recognition from Statutory Bodies wherever they are necessary or required.
                  </p>
                </div>
                <div className="flex gap-3 ml-0 md:ml-auto">
                  <button
                    disabled
                    className="text-gray-700 bg-white shadow-lg w-13 h-13 flex items-center justify-center rounded-full border border-gray-200 opacity-40 cursor-not-allowed"
                  >
                    <MdKeyboardArrowLeft size="26" />
                  </button>

                  <button
                    disabled
                    className="text-gray-700 bg-white shadow-lg w-13 h-13 flex items-center justify-center rounded-full border border-gray-200 opacity-40 cursor-not-allowed"
                  >
                    <MdKeyboardArrowRight size="26" />
                  </button>
                </div>
              </div>
              {/* Slider container */}
              <div className="relative">
                {/* Static grid for SSR */}
                <div className="absolute left-0 w-full top-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {approvalData.slice(0, 3).map((item) => (
                      <div key={item.id} className="relative px-3 pb-[135px]">
                        <div className="bg-white shadow-lg shadow-gray-400/40 rounded-2xl p-10 flex flex-col items-center text-center min-h-[400px] sm:min-h-[450px] md:min-h-[520px] xl:min-h-[450px] transition-all duration-300">
                          <img src={item.logo} alt={item.title} className="h-20 object-contain mb-4" />
                          <h2 className="text-lg font-bold text-center text-gray-800 mb-1">{item.title}</h2>
                          <p className="text-gray-800 text-lg mb-3">{item.subtitle}</p>
                          <p className="text-gray-700 text-md pb-10 mb-6">{item.description}</p>
                          <div className="absolute bottom-45">
                            <a
                              href={item.pdfLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex items-center gap-2 border-2 border-[#ffb703] 
                                text-white bg-[#0f4a85] hover:bg-white hover:text-[#0f4a85]
                                font-semibold px-4 py-2 rounded-lg transition-all duration-500"
                            >
                              <span className="bg-white p-1 rounded-md transition-all group-hover:bg-[#ffb703]">
                                <PdfSvgIcon />
                              </span>
                              DOWNLOAD PDF
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="h-[160px] mt-10"></div>
      </>
    );
  }

  return (
    <>
      <section className="bg-[#ffb703] pt-16 pb-[300px] relative overflow-visible">
        <div className={`${Classes["container"]}`}>
          <div className="px-4 md:px-0 relative">
            {/* Heading */}
            <div className="flex flex-col md:flex-row">
              <div className="text-left mb-10">
                <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] fw600 text-black mb-4">Approvals</h2>
                <p className="text-black max-w-3xl">
                  The Uttar Pradesh State Legislature established SRMU as a full-fledged university, and it is included among the list of universities that the University Grants
                  Commission maintains under Section 2(f), with the authority to award degrees in accordance with Section 22(1) of the UGC Act, 1956. SRMU has received permissions
                  and recognition from Statutory Bodies wherever they are necessary or required.
                </p>
              </div>
              <div className="flex gap-3 ml-0 md:ml-auto">
                <button
                  onClick={goToPrev}
                  disabled={isAtStart}
                  className={`text-gray-700 hover:text-[#ffb703] bg-white shadow-lg w-13 h-13 flex items-center justify-center rounded-full border border-gray-200 z-10 cursor-pointer ${isAtStart ? "opacity-40 cursor-not-allowed" : "cursor-pointer hover:bg-gray-100"
                    }`}
                >
                  <MdKeyboardArrowLeft size="26" />
                </button>

                <button
                  onClick={goToNext}
                  disabled={isAtEnd}
                  className={`text-gray-700 hover:text-[#ffb703] bg-white shadow-lg w-13 h-13 flex items-center justify-center rounded-full border border-gray-200 z-10 cursor-pointer ${isAtEnd ? "opacity-40 cursor-not-allowed" : "cursor-pointer hover:bg-gray-100"
                    }`}
                >
                  <MdKeyboardArrowRight size="26" />
                </button>
              </div>
            </div>
            {/* Slider container */}
            <div className="relative">
              {/* Embla Carousel */}
              <div className="absolute left-0 w-full top-12 overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {approvalData.map((item) => (
                    <div
                      key={item.id}
                      className="flex-shrink-0 flex-grow-0 px-3"
                      style={{ flexBasis: getSlideWidth() }}
                    >
                      <div className="relative pb-[135px]">
                        <div className="bg-white shadow-lg shadow-gray-400/40 rounded-2xl p-10 flex flex-col items-center text-center min-h-[400px] sm:min-h-[450px] md:min-h-[520px] xl:min-h-[450px] transition-all duration-300">
                          <img src={item.logo} alt={item.title} className="h-20 object-contain mb-4" />
                          <h2 className="text-lg font-bold text-center text-gray-800 mb-1">{item.title}</h2>
                          <p className="text-gray-800 text-lg mb-3">{item.subtitle}</p>
                          <p className="text-gray-700 text-md pb-10 mb-6">{item.description}</p>
                          <div className="absolute bottom-45">
                            <a
                              href={item.pdfLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex items-center gap-2 border-2 border-[#ffb703] 
                                text-white bg-[#0f4a85] hover:bg-white hover:text-[#0f4a85]
                                font-semibold px-4 py-2 rounded-lg transition-all duration-500"
                            >
                              <span className="bg-white p-1 rounded-md transition-all group-hover:bg-[#ffb703]">
                                <PdfSvgIcon />
                              </span>
                              DOWNLOAD PDF
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="h-[160px] mt-10"></div>
    </>
  );
};

export default ApprovalsSlider;