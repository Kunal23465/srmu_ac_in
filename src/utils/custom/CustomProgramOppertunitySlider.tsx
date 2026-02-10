import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface OpportunityCard {
  id: number;
  img: string;
  course: string;
  path: string;
}

interface CustomProgramOppertunitySliderProps {
  data: OpportunityCard[];
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className="custom-arrow -right-7! right-arrow"
      aria-label="Next"
    >
      ›
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className="custom-arrow -left-7! left-arrow"
      aria-label="Previous"
    >
      ‹
    </button>
  );
}

const CustomProgramOppertunitySlider: React.FC<
  CustomProgramOppertunitySliderProps
> = ({ data }) => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getSlidesToShow = () => {
    if (windowWidth >= 1200) return 4;
    if (windowWidth >= 1024) return 3;
    if (windowWidth >= 600) return 2;
    return 1;
  };

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 1,
    arrows: true, // ✅ REQUIRED
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 580, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="slider-container p-10 relative">
      <p className="my-10 text-center text-[22px] sm:text-[28px] lg:text-[3.125rem] font-medium">
        Further Study Opportunities
      </p>

      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="p-2 sm:p-6 text-center">
            <img
              src={item.img}
              alt={item.course}
              className="m-auto border-4 border-amber-400 hover:border-black rounded-full object-cover w-full aspect-square max-w-58 sm:max-w-64"
            />

            <a
              href={item.path}
              className="text-lg block md:text-2xl font-medium text-[#0f4a85] mt-5"
            >
              {item.course}
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomProgramOppertunitySlider;
