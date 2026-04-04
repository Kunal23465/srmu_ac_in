import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Classes from "../../../../utils/styles/Global.module.css";
import { PublicationConferenceData } from "../../../../data/research/publication/publication-data";
import { useNavigate } from "react-router-dom";
import { normalizeRouteSlug } from "../../../../utils/routeMatching";

const Conference: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);
  const [active, setActive] = useState("national");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: false,
  });

  const navigate = useNavigate();

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

  // Get slide width based on slides to show
  const getSlideWidth = () => {
    const slidesToShow = getSlidesToShow();
    return `${100 / slidesToShow}%`;
  };

  const CustomArrow = ({
    onClick,
    direction,
  }: {
    onClick: () => void;
    direction: "prev" | "next";
  }) => (
    <button
      onClick={onClick}
      className="
        w-12 h-12 flex items-center justify-center cursor-pointer
        rounded-full bg-[#f4b400]
        text-[#0f4a85] text-2xl font-bold
        transition-all duration-300 hover:bg-[#0f4a85] hover:text-[#f4b400]
      "
    >
      {direction === "prev" ? "‹" : "›"}
    </button>
  );

  const goToPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const goToNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Static grid for SSR
  if (!hasMounted) {
    return (
      <div>
        <div className={Classes["container"]}>
          <div className="py-14 md:py-20 text-center text-black">
            <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500 text-[#023047]">Conference</h2>
            <p className="lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px]">
              SRMU hosts and participates in various conferences, accelerating knowledge-sharing among researchers, scholars, and experts from diverse fields.
            </p>
          </div>

          <div className="sm:p-6">
            <div className="flex flex-col text-start mb-14 md:mb-8">
              <div className="relative flex justify-center items-center">
                {/* Toggle Buttons */}
                <div className="flex items-center mx-auto bg-[#0f4a85] rounded-full p-1 w-[250px] md:w-[280px]">
                  <button
                    onClick={() => setActive("national")}
                    className={`px-6 py-2 rounded-full lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] transition-all
                      ${active === "national" ? "bg-[#f4b400] text-black" : "text-white"}
                    `}
                  >
                    National
                  </button>

                  <button
                    onClick={() => setActive("international")}
                    className={`px-6 py-2 rounded-full lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] transition-all
                      ${active === "international" ? "bg-[#f4b400] text-black" : "text-white"}
                    `}
                  >
                    International
                  </button>
                </div>

                <div className="">
                  <div className="absolute top-15 md:top-1 z-300 right-10 lg:right-0 ml-auto">
                    <div className="flex gap-3">
                      <CustomArrow direction="prev" onClick={() => { }} />
                      <CustomArrow direction="next" onClick={() => { }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Static Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 manage-academis">
              {PublicationConferenceData.slice(0, 3).map((facility, index) => (
                <div
                  key={index}
                  className="p-2 my-4 cursor-pointer"
                  onClick={() =>
                    navigate(`/conference/${normalizeRouteSlug(facility.title)}`, {
                      state: {
                        title: facility.title,
                        description: facility?.description,
                        detailDescription: facility?.detailDescription,
                        images: facility?.images,
                      },
                    })
                  }
                >
                  <div className="bg-white border-2 w-full border-gray-100 hover:border-amber-300 transition-all duration-200 rounded-xl flex flex-col h-full max-w-[400px] shadow-md hover:shadow-lg">
                    <img src={facility.img} alt={facility.title} className="w-full h-[200px] object-cover rounded-t-xl mb-4" />

                    <div className="h-[500px] overflow-y-auto faculty-card-scrollbar p-8">
                      <h2 className="text-[#0f4a85] lg:text-[24px] md:text-[21.585px] sm:text-[18.975px] text-[18.975px] fw500 mb-2">{facility.title}</h2>

                      <p className="bg-amber-400 text-[#0f4a85] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] w-fit rounded-2xl px-3 py-1 mb-4">{facility.date}</p>

                      <div
                        className="text-[#555555] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] text-base grow text-justify"
                        dangerouslySetInnerHTML={{ __html: facility?.description }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className={Classes["container"]}>
        <div className="py-14 md:py-20 text-center text-black">
          <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500 text-[#023047]">Conference</h2>
          <p className="lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px]">
            SRMU hosts and participates in various conferences, accelerating knowledge-sharing among researchers, scholars, and experts from diverse fields.
          </p>
        </div>

        <div className="sm:p-6">
          <div className="flex flex-col text-start mb-14 md:mb-8">
            <div className="relative flex justify-center items-center">
              {/* Toggle Buttons */}
              <div className="flex items-center mx-auto bg-[#0f4a85] rounded-full p-1 w-[250px] md:w-[280px]">
                <button
                  onClick={() => setActive("national")}
                  className={`px-6 py-2 rounded-full lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] transition-all cursor-pointer
                    ${active === "national" ? "bg-[#f4b400] text-black" : "text-white hover:bg-[#f4b400]/20"}
                  `}
                >
                  National
                </button>

                <button
                  onClick={() => setActive("international")}
                  className={`px-6 py-2 rounded-full lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] transition-all cursor-pointer
                    ${active === "international" ? "bg-[#f4b400] text-black" : "text-white hover:bg-[#f4b400]/20"}
                  `}
                >
                  International
                </button>
              </div>

              <div className="">
                <div className="absolute top-15 md:top-1 z-300 right-10 lg:right-0 ml-auto">
                  <div className="flex gap-3">
                    <CustomArrow direction="prev" onClick={goToPrev} />
                    <CustomArrow direction="next" onClick={goToNext} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Embla Carousel */}
          <div className="overflow-hidden manage-academis" ref={emblaRef}>
            <div className="flex">
              {PublicationConferenceData.map((facility, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex-grow-0 p-2 my-4 cursor-pointer"
                  style={{ flexBasis: getSlideWidth() }}
                  onClick={() =>
                    navigate(`/conference/${normalizeRouteSlug(facility.title)}`, {
                      state: {
                        title: facility.title,
                        description: facility?.description,
                        detailDescription: facility?.detailDescription,
                        images: facility?.images,
                      },
                    })
                  }
                >
                  <div className="bg-white border-2 w-full border-gray-100 hover:border-amber-300 transition-all duration-200 rounded-xl flex flex-col h-full max-w-[400px] shadow-md hover:shadow-lg">
                    <img src={facility.img} alt={facility.title} className="w-full h-[200px] object-cover rounded-t-xl mb-4" />

                    <div className="h-[500px] overflow-y-auto faculty-card-scrollbar p-8">
                      <h2 className="text-[#0f4a85] lg:text-[24px] md:text-[21.585px] sm:text-[18.975px] text-[18.975px] fw500 mb-2">{facility.title}</h2>

                      <p className="bg-amber-400 text-[#0f4a85] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] w-fit rounded-2xl px-3 py-1 mb-4">{facility.date}</p>

                      <div
                        className="text-[#555555] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] text-base grow text-justify"
                        dangerouslySetInnerHTML={{ __html: facility?.description }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conference;
