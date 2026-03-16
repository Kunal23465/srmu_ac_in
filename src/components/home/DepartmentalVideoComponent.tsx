import { useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import Classes from "../../utils/styles/Global.module.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { videos } from "../../data/academics/academic-credit/academic-credit-data";
import { FaCaretRight } from "react-icons/fa";

export default function DepartmentalVideo() {

  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [autoplay.current]
  );

  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  /** responsive slides */
  useEffect(() => {

    const updateSlides = () => {
      const width = window.innerWidth;

      if (width < 600) setSlidesToShow(1);
      else if (width < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);

    return () => window.removeEventListener("resize", updateSlides);

  }, []);

  /** track active slide */
  useEffect(() => {

    if (!emblaApi) return;

    const onSelect = () => {
      setActiveSlide(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };

  }, [emblaApi]);

  const prev = () => emblaApi?.scrollPrev();
  const next = () => emblaApi?.scrollNext();

  const slideWidth = 100 / slidesToShow;

  return (
    <section className="py-7 md:py-10 lg:py-14">

      <h2 className="text-[28px] text-center sm:text-xl lg:text-[3.125rem] fw600 mb-10">
        Departmental Video
      </h2>

      <div className={`${Classes["container"]} mb-30`}>

        {/* Embla */}
        <div className="overflow-hidden relative" ref={emblaRef}>

          <div className="flex">

            {videos.map((video: any, index) => {

              const isActive = activeSlide === index;

              return (

                <div
                  key={video.id}
                  className="shrink-0 px-3 flex items-center"
                  style={{ flex: `0 0 ${slideWidth}%` }}
                >

                  <div className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer">

                    <img
                      src={video.thumbnail}
                      className={`w-full object-cover rounded-xl transition-all duration-300 ${isActive ? "lg:h-[400px]" : "h-[320px]"
                        }`}
                    />

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedVideo(video.id);
                        }}
                        className="bg-[#ffb703] transition p-5 rounded-full shadow-xl pointer-events-auto"
                      >
                        <FaCaretRight />
                      </button>

                    </div>

                    <div className="absolute bottom-0 w-full bg-black/50 text-white text-lg font-semibold px-4 py-3">
                      {video.title}
                    </div>

                  </div>

                </div>

              );

            })}

          </div>

        </div>

        {/* Arrows */}
        <div className="flex justify-center gap-6 mt-10">

          <button
            onClick={prev}
            className="text-gray-500 hover:text-white border bg-white border-gray-200 hover:border-[#ffb703] hover:bg-[#ffb703] shadow-lg w-13 h-13 flex items-center justify-center rounded-full cursor-pointer"
          >
            <MdKeyboardArrowLeft size={26} />
          </button>

          <button
            onClick={next}
            className="text-gray-500 hover:text-white border bg-white border-gray-200 hover:border-[#ffb703] hover:bg-[#ffb703] shadow-lg w-13 h-13 flex items-center justify-center rounded-full cursor-pointer"
          >
            <MdKeyboardArrowRight size={26} />
          </button>

        </div>

      </div>

      {/* Video Modal */}
      {selectedVideo && (

        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[999]">

          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-6 right-8 text-white text-[28px] font-bold"
          >
            ✕
          </button>

          <div className="w-[90%] md:w-[70%] lg:w-[60%] h-[70%]">

            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              allowFullScreen
              className="rounded-xl shadow-xl"
            />

          </div>

        </div>

      )}

    </section>
  );
}