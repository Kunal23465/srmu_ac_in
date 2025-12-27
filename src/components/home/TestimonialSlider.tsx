// Updated TestimonialSlider with fully dynamic breakpoints
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { hometestimonial } from "../../data/home/student-testimonialhome-data";
import quote from "../../assets/images/home/quote.png";
import Classes from "../../utils/styles/Global.module.css";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const NextArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="hidden md:flex absolute right-0 top-1/2 translate-y-70  bg-white shadow-lg w-15 h-15 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 z-10 cursor-pointer"
  >
    <MdKeyboardArrowRight size="26" />
  </button>
);

const PrevArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="hidden md:flex absolute left-0 top-1/2 translate-y-70 bg-white shadow-lg w-15 h-15 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 z-10 cursor-pointer"
  >
    <MdKeyboardArrowLeft size="26" />
  </button>
);

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to determine slidesToShow based on window width
  const getSlidesToShow = () => {
    if (windowWidth >= 1536) return 7; // 2xl
    if (windowWidth >= 1280) return 5; // xl
    if (windowWidth >= 1024) return 4; // lg
    if (windowWidth >= 768) return 3; // md
    if (windowWidth >= 640) return 2; // sm
    return 1; // xs
  };

  // Function to determine if centerMode should be enabled
  const shouldCenterMode = () => {
    return windowWidth >= 768; // Enable center mode only on medium screens and above
  };

  // Function to determine if arrows should be shown
  const shouldShowArrows = () => {
    return windowWidth >= 375; // Show arrows only on medium screens and above
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 1,
    centerMode: shouldCenterMode(),
    centerPadding: "0px",
    arrows: shouldShowArrows(),
    nextArrow: shouldShowArrows() ? <NextArrow /> : null,
    prevArrow: shouldShowArrows() ? <PrevArrow /> : null,
    beforeChange: (_: any, next: number) => setActiveIndex(next),
    // This ensures slick carousel re-initializes when window size changes
    key: windowWidth, // Add key to force re-render on window resize
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          centerMode: true,
          arrows: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          centerMode: true,
          arrows: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: true,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          arrows: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="py-20 bg-[#f7f9ff] flex flex-col items-center">
      <h2 className="text-[28px] text-center  lg:text-[3.125rem] fw600 mb-12">Student Testimonials</h2>

      <div className={`relative ${Classes["container"]} w-full max-w-[1200px] mx-auto px-4`}>
        {/* @ts-ignore */}
        <Slider {...settings}>
          {hometestimonial.map((item, index) => (
            <div key={item.id} className="flex justify-center px-0.5">
              <div
                className={`rounded-full transition-all duration-300 overflow-hidden border-4 w-[168px] h-[168px] mx-auto ${
                  activeIndex === index ? "border-[#3A6EFF] scale-100 shadow-lg" : "border-gray-300"
                }`}
              >
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Mobile-focused content layout */}
      <div className="max-w-3xl mx-auto text-center px-4 mt-10">
        <div className="flex justify-center">
          <img src={quote} className="w-10 md:w-auto" />
        </div>

        <h3 className="font21 fw600 mt-4">{hometestimonial[activeIndex].name}</h3>
        <p className="text-[#00000099] text-sm">{hometestimonial[activeIndex].batch}</p>
        <p className="mt-4 text-[#00000099] leading-relaxed font19">{hometestimonial[activeIndex].text}</p>

        <div className="mt-10 text-center">
          <Link
            to="/placements/student-testimonial"
            className=" bg-[#023047] inline-flex gap-x-2 items-center text-white px-6 py-3 rounded-md cursor-pointer text-[16px] font-medium hover:bg-white hover:text-[#023047] border hover:border-[#023047]"
          >
            VIEW ALL TESTIMONIALS <LiaLongArrowAltRightSolid size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
