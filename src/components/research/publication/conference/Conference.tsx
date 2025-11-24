import React, { useState } from "react";
import Slider from "react-slick";
import Classes from "../../../../utils/styles/Global.module.css";
import { ArrowButton } from "../../../../utils/custom/CustomCarousel";
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
  return (
    <div>
      <div className={Classes["container"]}>
        <div className="py-14 md:py-20 text-center text-black">
          <h2 className="text-[50px] font-bold ">Conference</h2>
          <p className="text-[15px]">
            SRMU hosts and participates in various conferences, accelerating knowledge-sharing among researchers, scholars, and experts from diverse fields.
          </p>
        </div>
        <div className="sm:p-6">
          {/* Heading Section */}
          <div className="flex flex-col text-start mb-4 sm:mb-8">
            <div className="flex justify-center gap-10 items-center">
              <div className="flex items-center bg-[#1e3c72] rounded-full p-2 w-[300px]">
                <button
                  onClick={() => setActive("national")}
                  className={`px-6 py-4 rounded-full text-lg font-medium transition-all
          ${active === "national" ? "bg-[#f4b400] text-black" : "text-white"}
        `}
                >
                  National
                </button>

                <button
                  onClick={() => setActive("international")}
                  className={`px-6 py-4 rounded-full text-lg font-medium transition-all
          ${active === "international" ? "bg-[#f4b400] text-black" : "text-white"}
        `}
                >
                  International
                </button>
              </div>
              <div className="flex space-x-2">
                <ArrowButton onClick={() => sliderRef.current?.slickPrev()} direction="prev" colorCode={"[#000000]"} />
                <ArrowButton onClick={() => sliderRef.current?.slickNext()} direction="next" colorCode={"[#000000]"} />
              </div>
            </div>
          </div>

          {/* Facilities Slider */}
          <Slider ref={sliderRef} {...settings} className="manage-academis">
            {PublicationConferenceData.map((facility, index) => {
              return (
                <div
                  key={index}
                  className="p-2  my-4 "
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
                  <div className=" bg-white border-3 border-gray-100  hover:border-amber-300 transition-all duration-200  rounded-xl flex flex-col h-full shadow-md hover:shadow-lg">
                    <img src={facility.img} alt={facility.title} className="w-full h-[200px] object-cover rounded-t-xl mb-4" />
                    <div className="h-[400px] overflow-y-auto faculty-card-scrollbar p-4">
                      <h3 className="text-[#0f4a85] text-xl font-semibold mb-2">{facility.title}</h3>
                      <p className="bg-amber-400 text-[#0f4a85] w-fit rounded-2xl px-3 py-1 mb-4">{facility.date}</p>

                      <p className="text-[#878484] grow text-justify pr-3">
                        <div dangerouslySetInnerHTML={{ __html: facility?.description }} />
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Conference;
