import React, { useState } from "react";
import Slider from "react-slick";
import Classes from "../../../../utils/styles/Global.module.css";
import { PublicationConferenceData } from "../../../../data/research/publication/publication-data";
import { useNavigate } from "react-router-dom";

const Conference: React.FC = () => {
  const sliderRef = React.useRef<Slider>(null);
  const [active, setActive] = useState("national");
  const navigate = useNavigate();

  // Slick slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablet screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const CustomArrow = ({
    onClick,
    direction,
  }: {
    onClick: () => void;
    direction: "prev" | "next";
  }) => (
    <button
      onClick={onClick}
      className="
        w-12 h-12 flex items-center justify-center
        rounded-full bg-[#f4b400]
        text-[#0f4a85] text-2xl font-bold
        transition-all duration-300
        "
    >
      {direction === "prev" ? "‹" : "›"}
    </button>
  );

  return (
    <div>
      <div className={Classes["container"]}>
        <div className="py-14 md:py-20 text-center text-black">
          <h2 className="text-[20px] md:text-[50px] font-medium ">Conference</h2>
          <p className="text-sm! md:text-[15px]!">
            SRMU hosts and participates in various conferences, accelerating knowledge-sharing among researchers, scholars, and experts from diverse fields.
          </p>
        </div>

        <div className="sm:p-6">
          <div className="flex flex-col text-start mb-14 md:mb-8">
            <div className="relative flex justify-center items-center">

              {/* Toggle Buttons */}
              <div className="flex items-center mx-auto bg-[#0f4a85] rounded-full p-1 w-[250px] md:w-[280px]">
                <button
                  onClick={() => setActive("national")}
                  className={`px-6 py-2 rounded-full text-sm md:text-lg font-normal transition-all
                    ${active === "national" ? "bg-[#f4b400] text-black" : "text-white"}
                  `}
                >
                  National
                </button>

                <button
                  onClick={() => setActive("international")}
                  className={`px-6 py-2 rounded-full text-sm md:text-lg font-normal transition-all
                    ${active === "international" ? "bg-[#f4b400] text-black" : "text-white"}
                  `}
                >
                  International
                </button>
              </div>


              <div className="">
                <div className="absolute top-20 right-0 ml-auto">
                  <div className="flex gap-3">
                    <CustomArrow
                      direction="prev"
                      onClick={() => sliderRef.current?.slickPrev()}
                    />
                    <CustomArrow
                      direction="next"
                      onClick={() => sliderRef.current?.slickNext()}
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Slider Section */}
          <Slider ref={sliderRef} {...settings} className="manage-academis overflow-hidden">
            {PublicationConferenceData.map((facility, index) => (
              <div
                key={index}
                className="p-2 my-4"
                onClick={() =>
                  navigate(`/research/conference/${facility.title}`, {
                    state: {
                      title: facility.title,
                      description: facility?.description,
                      detailDescription: facility?.detailDescription,
                      images: facility?.images,
                    },
                  })
                }
              >
                <div className="bg-white border-2 w-full border-gray-100 hover:border-amber-300 transition-all duration-200 rounded-xl flex flex-col h-full max-w-[400px] shadow-md hover:shadow-lg">
                  <img
                    src={facility.img}
                    alt={facility.title}
                    className="w-full h-[200px] object-cover rounded-t-xl mb-4"
                  />

                  <div className="h-[500px] overflow-y-auto faculty-card-scrollbar p-8">
                    <h3 className="text-[#0f4a85] text-xl font-semibold mb-2">{facility.title}</h3>

                    <p className="bg-amber-400 text-[#0f4a85] w-fit rounded-2xl px-3 py-1 mb-4">
                      {facility.date}
                    </p>

                    <div
                      className="text-[#555555] text-base grow text-justify"
                      dangerouslySetInnerHTML={{ __html: facility?.description }}
                    />
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

export default Conference;
