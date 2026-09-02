import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import EmblaCarousel from "./EmbelCrousel";
import ApprovedData from "../../data/new-home/ApprovedData";

const ApprovedSlider = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <EmblaCarousel
      slides={ApprovedData}
      getSlideKey={(data) => data.id}
      className="mx-auto"
      containerClassName="-ml-4 flex"
      slideClassName="min-w-0 shrink-0 grow-0 basis-1/2 pl-4 md:basis-1/3"
      onSlideChange={() => AOS.refresh()}
      renderSlide={(data) => (
        <div>
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-center sm:p-[2.5rem]">
              <img
                src={data.img}
                alt={data.title}
                width={112}
                height={112}
                loading="lazy"
                decoding="async"
                className="sm:w-28 sm:h-28 w-24 h-24 object-contain"
              />
              <h2 className="font-bold text-[12px] sm:text-sm md:text-lg text-center mt-[1rem] sm:mt-[2rem] text-[#023047]">
                {data.title}
              </h2>
            </div>
            <div className="border-r-2 h-24 border-gray-300 hidden md:flex" />
          </div>
        </div>
      )}
    />
  );
};

export default ApprovedSlider;
