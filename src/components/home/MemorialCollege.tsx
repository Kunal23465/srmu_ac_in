import React from "react";
import curve_btn from "../../assets/images/curve.png";
import Classes from "../../utils/styles/Global.module.css";
import Counter from "../../utils/custom/Counter";
import { counterDataForHomePage } from "../../data/home/counterData";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import slider1 from "../../assets/images/home/slider-img1.png"
import slider2 from "../../assets/images/home/slider-2.png";
import slider3 from "../../assets/images/home/slider-3.png";
import slider4 from "../../assets/images/home/slider-4.png";
import slider5 from "../../assets/images/home/slider-5.png";
import slider6 from "../../assets/images/home/slider-6.png";
import slider7 from "../../assets/images/home/slider-7.png";
import slider8 from "../../assets/images/home/slider-8.png";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div
    className="absolute top-[80px] p-1 sm:top-[calc(50%)] lg:text-[25px] 2xl:text-[30px] xl:p-2  right-2 xl:right-8 2xl:right-10 transform sm:-translate-y-1/2  hover:text-[#ffb703]   text-white  cursor-pointer z-10"
    onClick={onClick}
  >
    <FaChevronRight />
  </div>
);

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div
    className="absolute top-[80px] p-1 sm:top-[calc(50%)] lg:text-[25px] 2xl:text-[30px] xl:p-2  transform sm:-translate-y-1/2 left-2 xl:left-8 2xl:left-10    hover:text-[#ffb703]  text-white  cursor-pointer z-10"
    onClick={onClick}
  >
    <FaChevronLeft />
  </div>
);
const MemorialCollege: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div id="first" className="w-full -mt-[68px]  pb-7 md:pb-10 lg:pb-14">
      <div className="circle-part flex justify-center z-[99] relative">
        <img className="cursor-pointer " onClick={() => handleScroll("first")} src={curve_btn} alt="curve" />
      </div>
      <div className={`${Classes["container"]}  `}>
        <div className="rounded-[10px] mt-6 lg:mt-10">
          <div className="content px-5 xl:px-10  py-4 md:py-8 lg:py-10 z-50 relative">
            <h3 className="text-3xl lg:text-5xl text-[#023047]  font-bold text-center lg:leading-[50px] mt-5 lg:mt-10">Shri Ramswaroop Memorial University</h3>
            <p className="leading-7 font-semibold text-[#0009]  text-center mt-5 ">
              Experience a world of countless opportunities at SRMU – where we nurture brilliant minds and shape dreams into futures.  As leaders in engineering and business education for over two decades, we are committed to academic excellence, innovation, and the holistic development of every student.
            </p>
            <div className="w-full max-w-5xl mx-auto">
              <Counter counterData={counterDataForHomePage} classes="counter" />
            </div>

            <div className="mt-5 flex justify-center">
              <button className="bg-[#023047] uppercase cursor-pointer  py-4 px-5 text-white flex gap-x-2 items-center rounded-lg">Find Out More about us <LiaLongArrowAltRightSolid size={24} /></button>
            </div>
          </div>

         

        </div>


        <div className="w-full max-w-5xl mx-auto">
          <Slider {...settings}>

            <div className=" w-full">
              <img src={slider1} alt="slider" className="w-full rounded-xl" />
            </div>
            <div className=" w-full">
              <img src={slider2} alt="slider" className="w-full rounded-xl" />
            </div>
            <div className=" w-full">
              <img src={slider3} alt="slider" className="w-full rounded-xl" />
            </div>
            <div className=" w-full">
              <img src={slider4} alt="slider" className="w-full rounded-xl" />
            </div>
            <div className=" w-full">
              <img src={slider5} alt="slider" className="w-full rounded-xl" />
            </div>
            <div className=" w-full">
              <img src={slider6} alt="slider" className="w-full rounded-xl" />
            </div>
            <div className=" w-full">
              <img src={slider7} alt="slider" className="w-full rounded-xl" />
            </div>
            <div className=" w-full">
              <img src={slider8} alt="slider" className="w-full rounded-xl" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MemorialCollege;
