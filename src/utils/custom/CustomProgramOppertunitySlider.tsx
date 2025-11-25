import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// @ts-ignore
import { OpportunityCard } from "../../data/placement/placementData";

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
    <button onClick={onClick} className="custom-arrow right-arrow">
      ›
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="custom-arrow left-arrow">
      ‹
    </button>
  );
}

const CustomProgramOppertunitySlider: React.FC<CustomProgramOppertunitySliderProps> = ({ data }) => {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 580, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="slider-container p-10">
      <p className="my-15 text-center text-5xl font-medium">Further Study Opportunities</p>

      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="p-6 text-center">
            <img className="m-auto border-4 border-amber-400 hover:border-black rounded-full object-cover w-full aspect-square max-w-64" src={item.img} alt={item.course} />

            <a href={item.path} className="text-xl md:text-2xl font-medium text-[#0f4a85] mt-4">{item.course}</a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomProgramOppertunitySlider;




/*
---------How To use-----------
<CustomProgramOppertunitySlider data={opportunityCardData}/>


---------Example Data---------

export const opportunityCardData: OpportunityCard[] = [
  {
    id: 1,
    img: MBA21,
    course: "M.B.A (Master of Business Administration)",
    path: "/placements",
  },
    {
    id: 2,
    img: MBA21,
    course: "M.B.A. (Business Analytics) with L&T",
    path: "/placements",
  },  {
    id: 3,
    img: MBA21,
    course: "M.Tech. in Computer Science Engineering",
    path: "/placements",
  },  {
    id: 4,
    img: MBA21,
    course: "M.Tech. in Data Science",
    path: "/placements",
  },  {
    id: 5,
    img: MBA21,
    course: "M.B.A (Master of Business Administration)",
    path: "/placements",
  },
]
 
  */