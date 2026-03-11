import { useEffect, useState } from "react";
import Slider from "react-slick";
import Classes from "../../utils/styles/Global.module.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { videos } from "../../data/academics/academic-credit/academic-credit-data";

/* images imports same as before */

const NextArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute right-[calc(50%-70px)] text-gray-500 hover:text-white -bottom-24 border bg-white border-gray-200 hover:border-[#ffb703] hover:bg-[#ffb703] shadow-lg w-13 h-13 flex items-center justify-center rounded-full z-10 cursor-pointer"
  >
    <MdKeyboardArrowRight size={26} />
  </button>
);

const PrevArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute left-[calc(50%-70px)] text-gray-500 hover:text-white -bottom-24 border bg-white border-gray-200 hover:border-[#ffb703] hover:bg-[#ffb703] shadow-lg w-13 h-13 flex items-center justify-center rounded-full z-10 cursor-pointer"
  >
    <MdKeyboardArrowLeft size={26} />
  </button>
);

export default function DepartmentalVideo() {

  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {

    if (typeof window === "undefined") return;

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

  }, []);

  const getSlidesToShow = () => {
    if (windowWidth >= 1024) return 3;
    if (windowWidth >= 600) return 2;
    return 1;
  };

  const shouldCenterMode = () => windowWidth >= 768;
  const shouldShowArrows = () => windowWidth >= 375;

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 1,
    centerMode: shouldCenterMode(),
    centerPadding: "0px",
    arrows: shouldShowArrows(),
    nextArrow: shouldShowArrows() ? <NextArrow /> : undefined,
    prevArrow: shouldShowArrows() ? <PrevArrow /> : undefined,
    beforeChange: (_: number, next: number) => setActiveSlide(next),

    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="py-7 md:py-10 lg:py-14">

      <h2 className="text-[28px] text-center sm:text-xl lg:text-[3.125rem] fw600 mb-10">
        Departmental Video
      </h2>

      <div className={`${Classes["container"]} mb-30`}>

        <Slider key={windowWidth} className="department-crousel" {...settings}>

          {videos.map((video, index) => {

            const isSecondImage = activeSlide % videos.length === index;

            return (
//@ts-ignore
              <div key={video.id} className="px-3">

                <div className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer">
                 
                  <img
                    //@ts-ignore
                    src={video.thumbnail}
                    className={`w-full h-[320px] ${isSecondImage ? "lg:h-[400px]" : ""
                      } object-cover rounded-xl`}
                  />

                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        //@ts-ignore
                        setSelectedVideo(video.id);
                      }}
                      className="bg-[#ffb703] transition p-5 rounded-full shadow-xl pointer-events-auto"
                    >
                      ▶
                    </button>

                  </div>

                  <div className="absolute bottom-0 w-full bg-black/50 text-white text-lg font-semibold px-4 py-3">
                    {/* @ts-ignore */}
                    {video.title}
                  </div>

                </div>

              </div>

            );
          })}

        </Slider>

      </div>

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