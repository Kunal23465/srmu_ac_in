import { Fragment, useRef, useEffect, useState } from "react";
import Classes from "../../utils/styles/Global.module.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import PlacementData from "../../data/home/PlacementData";
import MobilePlacementData from "../../data/home/MobilePlacementData";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const MobilePlacements = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const autoplay1 = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  const autoplay2 = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  const [emblaRef1] = useEmblaCarousel({ loop: true }, [autoplay1.current]);

  const [emblaRef2] = useEmblaCarousel({ loop: true }, [autoplay2.current]);

  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const renderCounter = (value: number, suffix?: string, className?: string) => {
    if (!isClient) {
      return (
        <span className={className}>
          {value}
          {suffix}
        </span>
      );
    }

    return (
      <CountUp start={0} end={inView ? value : 0} duration={2} suffix={suffix} redraw={true}>
        {({ countUpRef }) => <span ref={countUpRef} className={className} />}
      </CountUp>
    );
  };

  return (
    <section ref={sectionRef} className={`${Classes["container"]} py-8 md:py-10 lg:py-12`}>
      <div className="w-full">
        <h2 className="text-center text-[22px] sm:text-[28px] lg:text-[3rem] font-bold py-5 ">{PlacementData[0].heading}</h2>

        <p className="pb-6 text-center">{PlacementData[0].description}</p>

        <div className="w-full lg:flex justify-between gap-4 lg:pr-4 pt-4 md:pt-5">
          {/* Left Divs */}

          <div className="w-full grid grid-cols-2 sm:flex items-stretch gap-3">
            {MobilePlacementData[0].leftDivstoBeFlex.map((item) => (
              <Fragment key={item.id}>
                {item.isSlider ? (
                  <div className="w-full px-3 pt-4 pb-8 bg-[#8fcedd] text-gray-900 rounded-md shadow-md flex flex-col justify-between">
                    <div ref={emblaRef1} className="overflow-hidden slider_placement_dots_law">
                      <div className="flex">
                        {item.leftSlider?.map((slide) => (
                          <div key={slide.id} className="flex-[0_0_100%] text-center h-full flex flex-col justify-between">
                            <div className="flex-grow text-left">
                              {renderCounter(slide.title, slide.symbol, "text-[44px] lg:text-[50px] font-semibold mb-2 text-white")}

                              <p className="mt-1 text-left text-white text-sm sm:text-base font-poppins">{slide.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={`w-full px-3 py-4 rounded-md shadow-md ${item.id === 1 ? "bg-[#023047] text-white" : "bg-[#ffb703] text-white"}`}>
                    {renderCounter(
                      //@ts-ignore
                      item.title,
                      item.symbol,
                      "text-[44px] lg:text-[50px] font-semibold mb-2",
                    )}

                    <p className="text-sm sm:text-base text-left font-poppins">{item.description}</p>
                  </div>
                )}
              </Fragment>
            ))}
          </div>

          {/* Middle */}

          <div className="mt-3 flex flex-col gap-3">
            <div className="flex gap-3">
              {MobilePlacementData[0].middleDivsToBeFlex.map((item) => (
                <div
                  key={item.id}
                  className={`w-full px-3 py-4 rounded-md shadow-md grid place-content-center ${item.id === 1 ? "bg-[#ffb703] text-white" : "bg-[#8fcedd] text-white"}`}
                >
                  {renderCounter(item.title, item.symbol, "text-[44px] lg:text-[50px] font-semibold mb-2")}

                  <p className="text-sm sm:text-base text-left font-poppins">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Second Slider */}

          <div className="grid grid-cols-2 items-stretch gap-3 w-full mt-3">
            {MobilePlacementData[0].secondLeftDivstoBeFlex.map((item) => (
              <Fragment key={item.id}>
                {item.isSlider ? (
                  <div className="w-full px-3 py-4 bg-[#8fcedd] text-gray-900 rounded-md shadow-md flex flex-col justify-between">
                    <div ref={emblaRef2} className="overflow-hidden slider_placement_dots_law">
                      <div className="flex">
                        {item.leftSlider?.map((slide) => (
                          <div key={slide.id} className="flex-[0_0_100%] text-center h-full flex flex-col justify-between">
                            <div className="flex-grow text-left">
                              {renderCounter(slide.title, slide.symbol, "text-[44px] lg:text-[50px] font-semibold mb-2 text-white")}

                              <p className="mt-1 text-left text-white text-sm sm:text-base font-poppins">{slide.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={`w-full px-3 py-4 rounded-md shadow-md ${item.id === 1 ? "bg-[#023047] text-white" : "bg-[#ffb703] text-white"}`}>
                    {renderCounter(
                      //@ts-ignore
                      item.title,
                      item.symbol,
                      "text-[44px] lg:text-[50px] font-semibold mb-2",
                    )}

                    <p className="text-sm sm:text-base text-left font-poppins">{item.description}</p>
                  </div>
                )}
              </Fragment>
            ))}
          </div>

          {/* Final Divs */}

          <div className="mt-3 flex flex-col gap-3">
            <div className="flex gap-3">
              {MobilePlacementData[0].finleDivsToBeFlex.map((item) => (
                <div
                  key={item.id}
                  className={`w-full px-4 pt-4 pb-8 rounded-md shadow-md grid place-content-center ${item.id === 1 ? "bg-[#ffb703] text-white" : "bg-[#8fcedd] text-white"}`}
                >
                  {renderCounter(item.title, item.symbol, "text-[44px] lg:text-[50px] font-semibold mb-2")}

                  <p className="text-sm sm:text-base text-left font-poppins">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobilePlacements;
