import React, { useEffect } from "react";
import curve_btn from "../../assets/images/curve.png";
import Classes from "../../utils/styles/Global.module.css";
import Counter from "../../utils/custom/Counter";
import { counterDataForHomePage } from "../../data/home/counterData";
import Slider from "react-slick";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { fetchBanner } from "../../store/home-banner/bannerThunk";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div
    className="absolute top-[80px] p-1 sm:top-[calc(50%)] lg:text-[25px] 2xl:text-[30px] xl:p-2  right-2 xl:right-8 2xl:right-10 transform sm:-translate-y-1/2  hover:text-[#ffb703]   text-white  cursor-pointer z-10"
    onClick={onClick}
  >
    <MdKeyboardArrowRight size="26" />
  </div>
);

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div
    className="absolute top-[80px] p-1 sm:top-[calc(50%)] lg:text-[25px] 2xl:text-[30px] xl:p-2  transform sm:-translate-y-1/2 left-2 xl:left-8 2xl:left-10    hover:text-[#ffb703]  text-white  cursor-pointer z-10"
    onClick={onClick}
  >
    <MdKeyboardArrowLeft size="26" />
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
  const dispatch = useDispatch<AppDispatch>();
  const { data: banner } = useSelector((state: RootState) => state.getbanner);

  useEffect(() => {
    dispatch(fetchBanner());
  }, [dispatch]);
  return (
    <div id="first" className="w-full -mt-[68px]   pb-7 md:pb-10 lg:pb-14">
      <div className="circle-part justify-center z-99 relative hidden md:flex">
        <img className="cursor-pointer" onClick={() => handleScroll("first")} src={curve_btn} alt="curve" />
      </div>

      <div className={`${Classes["container"]}  `}>
        <div className="rounded-[10px] mt-6 lg:mt-10">
          <div className="content   py-4 md:py-8 lg:py-10 z-50 relative">
            <h3 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] lg:leading-[50px] text-[#023047]  font-bold text-center  mt-15 lg:mt-10">
              Shri Ramswaroop Memorial University
            </h3>
            <p className="leading-7 text-[15px] text-[#0009] font-bold text-center mt-5 ">
              Experience a world of countless opportunities at SRMU – where we nurture brilliant minds and shape dreams into futures. As leaders in engineering and business
              education for over two decades, we are committed to academic excellence, innovation, and the holistic development of every student.
            </p>
            <div className="w-full max-w-5xl mx-auto">
              <Counter counterData={counterDataForHomePage} classes="counter" />
            </div>

            <div className="mt-5 flex justify-center">
              <Link to="/about-us">
                <button className="bg-[#023047] hover:bg-white fw500 hover:text-[#023047] hover:border hover:border-[#023047] uppercase cursor-pointer py-4 px-8 text-white flex gap-x-2 items-center rounded-lg">
                  Find Out More About Us <LiaLongArrowAltRightSolid size={24} />
                </button>{" "}
              </Link>{" "}
            </div>
          </div>
        </div>

        <div className="w-full max-w-5xl mx-auto">
          <Slider {...settings}>
            {banner
              ?.slice()          
              .reverse()       
              .map((item) => (
                <div className="w-full" key={item.bannerId}>
                  <Link target="_blank" to={item.link}>
                    <img
                      src={item.imagePath}
                      alt="slider"
                      className="w-full rounded-xl"
                    />
                  </Link>
                </div>
              ))}

          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MemorialCollege;
