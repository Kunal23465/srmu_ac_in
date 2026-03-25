import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Classes from "../../utils/styles/Global.module.css";
import Counter from "../../utils/custom/Counter";
import { counterDataForHomePage } from "../../data/home/counterData";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { fetchBanner } from "../../store/home-banner/bannerThunk";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";

const MemorialCollege: React.FC = () => {

  const autoplay = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [autoplay.current]
  );

  const prev = () => emblaApi && emblaApi.scrollPrev();
  const next = () => emblaApi && emblaApi.scrollNext();

  const handleScroll = (id: string) => {
    if (typeof document === "undefined") return;

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const dispatch = useDispatch<AppDispatch>();
  const { data: banner } = useSelector((state: RootState) => state.getbanner);

  useEffect(() => {
    if (banner.length === 0) {
      dispatch(fetchBanner());
    }
  }, [banner.length, dispatch]);

  return (
    <div id="first" className="w-full -mt-[50px] pb-8 md:pb-10 lg:pb-12">
      <div className="circle-part justify-center z-99 relative hidden md:flex">
        <button
          type="button"
          onClick={() => handleScroll("first")}
          aria-label="Scroll to slider"
          className="relative h-[98px] w-[220px] cursor-pointer border-0 bg-transparent p-0 appearance-none"
        >
          <span className="absolute inset-x-0 bottom-0 h-[42px] rounded-t-[26px] bg-white" />
          <span className="absolute left-1/2 top-0 h-[70px] w-[126px] -translate-x-1/2 rounded-t-full bg-white" />
          <span className="absolute left-1/2 top-[18px] flex h-[82px] w-[82px] -translate-x-1/2 items-center justify-center rounded-full bg-[#2ea4c6] text-white shadow-[0_10px_24px_rgba(46,164,198,0.28)]">
            <MdKeyboardArrowDown size={30} />
          </span>
        </button>
      </div>

      <div className={`${Classes["container"]}`}>
        <div className="rounded-[10px] mt-5 lg:mt-8">
          <div className="content py-3 md:py-6 lg:py-8 z-50 relative">
            <h3 className="text-[22px] sm:text-[28px] lg:text-[3rem] lg:leading-[48px] text-[#023047] font-bold text-center mt-10 lg:mt-8">
              Shri Ramswaroop Memorial University
            </h3>

            <p className="leading-7 text-[15px] text-[#0009] font-bold text-center mt-4">
              Experience a world of countless opportunities at SRMU - where we
              nurture brilliant minds and shape dreams into futures. As leaders
              in engineering and business education for over two decades, we are
              committed to academic excellence, innovation, and the holistic
              development of every student.
            </p>

            <div className="w-full max-w-5xl mx-auto">
              <Counter counterData={counterDataForHomePage} classes="counter" />
            </div>

            <div className="mt-4 flex justify-center">
              <Link to="/about-us">
                <button className="bg-[#023047] hover:bg-white fw500 hover:text-[#023047] hover:border hover:border-[#023047] uppercase cursor-pointer py-3.5 px-7 text-white flex gap-x-2 items-center rounded-lg">
                  Find Out More About Us{" "}
                  <LiaLongArrowAltRightSolid size={24} />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* SLIDER */}
        <div className="w-full max-w-5xl mx-auto relative">

          {/* arrows */}
          <div
            onClick={prev}
            className="absolute top-[80px] p-1 sm:top-[calc(50%)] lg:text-[25px] 2xl:text-[30px] xl:p-2 left-2 xl:left-8 2xl:left-10 transform sm:-translate-y-1/2 hover:text-[#ffb703] text-white cursor-pointer z-10"
          >
            <MdKeyboardArrowLeft size="26" />
          </div>

          <div
            onClick={next}
            className="absolute top-[80px] p-1 sm:top-[calc(50%)] lg:text-[25px] 2xl:text-[30px] xl:p-2 right-2 xl:right-8 2xl:right-10 transform sm:-translate-y-1/2 hover:text-[#ffb703] text-white cursor-pointer z-10"
          >
            <MdKeyboardArrowRight size="26" />
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">

              {banner
                ?.slice()
                .reverse()
                .map((item: any, index: number) => (
                  <div
                    className="w-full flex-[0_0_100%]"
                    key={item.bannerId}
                  >
                    {item.bannerType === "Pdf" ? (
                      <Link target="_blank" to={item.pdfPath}>
                        <img
                          src={item.imagePath}
                          alt="slider"
                          loading={index === 0 ? "eager" : "lazy"}
                          fetchPriority={index === 0 ? "high" : "auto"}
                          decoding="async"
                          className="w-full rounded-xl"
                        />
                      </Link>
                    ) : (
                      <Link target="_blank" to={item.link}>
                        <img
                          src={item.imagePath}
                          alt="slider"
                          loading={index === 0 ? "eager" : "lazy"}
                          fetchPriority={index === 0 ? "high" : "auto"}
                          decoding="async"
                          className="w-full rounded-xl"
                        />
                      </Link>
                    )}
                  </div>
                ))}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemorialCollege;
