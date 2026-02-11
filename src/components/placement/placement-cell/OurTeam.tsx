import React, { useState, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  PlacementTeamCardData,
  TrainingTeamCardData,
} from "../../../data/placement/placement-cell/PlacementTeamData";

const OurTeam: React.FC = () => {
  const [team, setTeam] = useState("Placement");
  const sliderRef = useRef<Slider | null>(null);

  // Slider settings
  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // We'll use custom buttons
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  // Custom navigation buttons
  const SliderControls = () => (
    <div className="flex mt-3 md:mt-0 space-x-3">
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

  // Select data
  const activeData =
    team === "Placement" ? PlacementTeamCardData : TrainingTeamCardData;

  return (
    <div>
      <center>
        <p className="text-yellow-400 text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500 mb-5 lg:mb-20">Our Team</p>

        {/* TAB SWITCH */}
        <span
          className={`text-lg md:text-2xl pb-2 md:pb-5 border-b-4 cursor-pointer transition-all duration-300
            ${team === "Placement" ? "border-amber-400" : "border-transparent hover:border-amber-400"}`}
          onClick={() => setTeam("Placement")}
        >
          PLACEMENT TEAM
        </span>

        <span
          className={`text-lg md:text-2xl pb-2 md:pb-5 ml-2 md:ml-5 border-b-4 cursor-pointer transition-all duration-300
            ${team === "Training" ? "border-amber-400" : "border-transparent hover:border-amber-400"}`}
          onClick={() => setTeam("Training")}
        >
          TRAINING TEAM
        </span>
      </center>

      {/* SECTION CONTENT */}
      <div className="w-full py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* HEADER + ARROWS */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            <div className="max-w-5xl">
              <h1 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] font-bold">{team === "Placement" ? "Meet Our Placement Team" : "Meet Our Training Team"}</h1>

              <p className="mt-3 text-sm md:text-base opacity-100 font-light">
                {team === "Placement"
                  ? "SRMU's placement team is dedicated to facilitating successful career transitions..."
                  : "The training team at SRMU enhances student skills through comprehensive programs..."}
              </p>
            </div>

            <SliderControls />
          </div>

          {/* SLIDER */}
          <Slider ref={sliderRef} {...settings}>
            {activeData.map((item) => (
              <div key={item.id} className="px-3">
                <div className="text-black flex-none rounded-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative w-full h-85 rounded-xl overflow-hidden">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover rounded-xl" />
                    <h3 className="absolute bottom-5 left-5 text-2xl text-white font-medium">
                      {item.name}
                      <br />
                      <span className="text-amber-400 text-[16px]">{item.position}</span>
                    </h3>
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

export default OurTeam;
