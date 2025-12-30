import React, { useRef } from "react";
import Slider from "react-slick";
import { CareerCounsellingCardData } from "../../../data/placement/placement-cell/PlacementTeamData";

const CareerCounselling: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  // Slider settings
  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    arrows: false,
    centerMode: false,
    variableWidth: false,

    slidesToShow: Math.min(3, CareerCounsellingCardData.length),
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(2, CareerCounsellingCardData.length),
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  const SliderControls = () => (
    <div className="flex space-x-3">
      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="border-2 border-slate-400 cursor-pointer text-4xl text-slate-400 
          w-13 h-13 flex items-center justify-center transition 
          hover:bg-slate-400 hover:text-amber-100"
      >
        ‹
      </button>

      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="border-2 border-slate-400 cursor-pointer text-4xl text-slate-400 
          w-13 h-13 flex items-center justify-center transition 
          hover:bg-slate-400 hover:text-amber-100"
      >
        ›
      </button>
    </div>
  );

  return (
    <div className="w-full py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER + BUTTONS */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="max-w-5xl">
            <h1 className="text-[#023047] text-[28px] lg:text-[3.125rem] fw500">Career Counselling and Guidance</h1>

            <p className="mt-3 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] opacity-100 font-light">
              Career Counselling at Shri Ramswaroop Memorial University offers counselling to students, guiding the young minds by helping them to understand their strength and
              also to sail through the cut throat competition at all levels in the job market. Career counseling is implemented in several innovative ways to create awareness and
              provide students with an ability to decide on what is right for them. Counseling sessions organized in the University focuses on helping the students for guidance,
              moral support, and exploring solutions for the problems being faced by students while choosing the right career path. Various lectures, seminars, counseling sessions
              are organized by the experts in this regard.
            </p>
          </div>

          <div className="flex space-x-2 mt-2">
            <SliderControls />
          </div>
        </div>
        <div className="w-full lg:w-2/3">
          {/* SLIDER */}
          <Slider ref={sliderRef} {...settings}>
            {CareerCounsellingCardData.map((item) => (
              <div key={item.id} className="px-3">
                <div className="rounded-xl w-full overflow-hidden">
                  <div className="relative w-full h-105 group overflow-hidden rounded-xl">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover 
                      transition-transform duration-500 group-hover:scale-105"
                    />

                    <h3
                      className="absolute bottom-5 polygon_bg w-full 
                      text-xl text-white bg-black/60 p-4 font-medium 
                      transition-opacity duration-300 group-hover:opacity-0"
                    >
                      {item.name}
                    </h3>

                    <div
                      className="absolute inset-0 m-2 p-5 flex justify-center 
                    bg-white text-black 
                    scale-0 group-hover:scale-100 
                    opacity-0 group-hover:opacity-100 
                    transition-all duration-700 rounded-xl"
                    >
                      <h3 className="text-xl font-bold text-center">{item.name}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CareerCounselling;
