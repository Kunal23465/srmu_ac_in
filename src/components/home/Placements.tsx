import React, { useRef, useEffect, useState } from "react";
import Classes from "../../utils/styles/Global.module.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import PlacementData from "../../data/home/PlacementData";
import "./PlacementSliderDots.css";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Placements = () => {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const autoplayLeft = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const autoplayRight = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const [emblaRefLeft] = useEmblaCarousel(
    { loop: true },
    [autoplayLeft.current]
  );

  const [emblaRefRight] = useEmblaCarousel(
    { loop: true },
    [autoplayRight.current]
  );

  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const renderCounter = (value: number, suffix?: string, className?: string) => {

    if (!isClient) {
      return <span className={className}>{value}{suffix}</span>;
    }

    return (
      <CountUp
        start={0}
        end={inView ? value : 0}
        duration={2}
        suffix={suffix}
        redraw={true}
      >
        {({ countUpRef }) => (
          <span ref={countUpRef} className={className} />
        )}
      </CountUp>
    );
  };

  return (

    <section
      ref={sectionRef}
      className={`${Classes["container"]} py-8 md:py-10 lg:py-12`}
    >

      <div className="w-full">

        <div className="!text-left">

          <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] fw600">
            {PlacementData[0].heading}
          </h2>

          <p className="pb-6 text-[16px] font-semibold text-[#00000099]">
            {PlacementData[0].description}
          </p>

        </div>

        <div className="lg:flex justify-between gap-4 pt-4 md:pt-5">

          {/* Left divs */}

          <div className="flex flex-col gap-3 w-full min-w-[130px] lg:min-w-[150px]">

            {PlacementData[0].leftDivstoBeFlex.map((item) => (

              <div
                key={item.id}
                className={`px-4 pt-4 pb-8 rounded-md shadow-md h-[160px] lg:h-[245px] ${item.id === 1
                  ? "bg-[#023047] text-white"
                  : "bg-[#ffb703] text-white"
                  }`}
              >

                {renderCounter(
                  item.title,
                  item.symbol,
                  "text-[38px] lg:text-[42px] font-semibold mb-2"
                )}

                <p className="text-[17px] font-poppins">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

          {/* Left slider */}

          <div className="mt-3 lg:mt-0 px-4 py-8 lg:px-0 lg:pt-4 lg:pb-0 bg-[#8fcedd] text-gray-900 rounded-md shadow-md min-w-[115px] lg:min-w-[calc(33%-70px)] lg:h-[500px] flex flex-col justify-between overflow-hidden">

            <div
              className="overflow-hidden slider_placement_dots_law placement_dots_law_left"
              ref={emblaRefLeft}
            >

              <div className="flex">

                {PlacementData[0].leftSlider.map((slide) => (

                  <div
                    key={slide.id}
                    className="flex-[0_0_100%] text-center relative h-full flex flex-col justify-between lg:h-[485px] overflow-hidden"
                  >

                    <div className="flex-grow text-left lg:px-4">

                      {renderCounter(
                        slide.title,
                        slide.symbol,
                        "text-[38px] lg:text-[42px] font-semibold mb-2 text-white"
                      )}

                      <p className="mt-1 text-white text-[17px] font-poppins font-normal">
                        {slide.description}
                      </p>

                    </div>

                    <div className="hidden lg:block absolute bottom-0 left-0 w-full">
                      <img
                        src={slide.img}
                        alt={`slide ${slide.id}`}
                        className="w-full h-[360px] object-contain"
                      />
                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* Middle section */}

          <div className="mt-3 lg:mt-0 flex flex-col gap-3 lg:min-w-[280px] lg:min-w-[calc(33%-10px)]">

            <div className="flex gap-3">

              {PlacementData[0].middleDivsToBeFlex.map((item) => (

                <div
                  key={item.id}
                  className={`w-full px-4 pt-4 pb-8 rounded-md shadow-md lg:h-[245px] ${item.id === 1
                    ? "bg-[#ffb703] text-white"
                    : "bg-[#8fcedd] text-white"
                    }`}
                >

                  {renderCounter(
                    item.title,
                    item.symbol,
                    "text-[38px] lg:text-[42px] font-semibold mb-2"
                  )}

                  <p className="text-[17px] font-poppins">
                    {item.description}
                  </p>

                </div>

              ))}

            </div>

            <div>

              <div className="px-4 pt-4 pb-8 bg-[#023047] text-white rounded-md shadow-md lg:h-[245px]">

                {renderCounter(
                  PlacementData[0].middlebelowDiv.title,
                  PlacementData[0].middlebelowDiv.symbol,
                  "text-[38px] lg:text-[42px] font-semibold mb-2"
                )}

                <p className="text-[17px] font-poppins">
                  {PlacementData[0].middlebelowDiv.description}
                </p>

              </div>

            </div>

          </div>

          {/* Right slider */}

          <div className="mt-3 lg:mt-0 px-4 py-8 lg:px-0 lg:pt-4 lg:pb-0 bg-[#8fcedd] text-gray-900 rounded-md shadow-md flex flex-col justify-between lg:h-[500px] min-w-[150px] lg:min-w-[calc(33%-70px)] overflow-hidden">

            <div
              className="overflow-hidden slider_placement_dots_law placement_dots_law_right"
              ref={emblaRefRight}
            >

              <div className="flex">

                {PlacementData[0].rightSlider.map((slide) => (

                  <div
                    key={slide.id}
                    className="flex-[0_0_100%] text-center h-full flex flex-col justify-between relative lg:h-[535px] overflow-hidden"
                  >

                    <div className="flex-grow text-left text-white lg:px-4">

                      {renderCounter(
                        slide.title,
                        slide.symbol,
                        "text-[38px] lg:text-[42px] font-semibold mb-2"
                      )}

                      <p className="mt-1 text-[17px] font-poppins font-normal">
                        {slide.description}
                      </p>

                    </div>

                    <div className="hidden lg:block absolute bottom-0 left-0 w-full">
                      <img
                        src={slide.img}
                        alt={`slide ${slide.id}`}
                        className="w-full h-[400px] object-contain"
                      />
                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Placements;
