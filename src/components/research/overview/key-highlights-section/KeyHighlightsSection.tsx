import React from "react";
import Classes from "../../../../utils/styles/Global.module.css";
import Slider from "react-slick";


import { FaRegFilePdf } from "react-icons/fa";
import { CustomFacilitiesTypes } from "../../../../types/overview-data-type";
import { ArrowButton } from "../../../../utils/custom/CustomCarousel";


const KeyHighlightsSection: React.FC<CustomFacilitiesTypes> = ({ facilities, layoutData }) => {
  const sliderRef = React.useRef<Slider>(null);

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
    <div className="bg-[#ffb703]">
      <div className={`${Classes.container} py-7 md:py-10 lg:py-14`}>
        <div className="sm:p-6">
          {/* Heading Section */}
          <div className="flex flex-col text-start mb-4 sm:mb-8">
            <div className="flex justify-between items-center">
              <h2 className="text-4xl font-bold">{layoutData?.title}</h2>
              <div className="flex space-x-2">
                <ArrowButton onClick={() => sliderRef.current?.slickPrev()} direction="prev" colorCode={"[#000000]"} />
                <ArrowButton onClick={() => sliderRef.current?.slickNext()} direction="next" colorCode={"[#000000]"} />
              </div>
            </div>
            <p className="text-[#000000] mt-4 font-medium">{layoutData?.content}</p>
          </div>

          {/* Facilities Slider */}
          <Slider ref={sliderRef} {...settings} className="manage-academis">
            {facilities.map((facility, index) => {
              return (
                <div key={index} className="p-2  my-4">
                  <div className=" bg-white border border-gray-200 transition-all duration-200  rounded-lg flex flex-col h-full shadow-md hover:shadow-lg">
                    {/* Image */}
                    <img src={facility.imageUrl} alt={facility.title} className="w-full h-[200px] object-cover rounded-md mb-4" />
                    <div className="h-[300px] overflow-y-auto faculty-card-scrollbar p-4">
                      {/* Title */}
                      <h3 className="text-[#0f4a85] text-xl font-semibold mb-2">{facility.title}</h3>
                      {/* Description */}
                      <p className="text-[#878484] grow text-justify pr-3">
                        {/* {facility.description} */}
                        <div dangerouslySetInnerHTML={{ __html: facility?.description }} />
                      </p>
                    </div>
                    <a
                      href={facility.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="m-4 flex gap-4 items-center mt-8 mb-6 w-fit bg-[#0f4a85] border-3 border-[#ffb703] uppercase text-white hover:text-[#0f4a85] py-2 px-4 rounded-lg hover:bg-white transition-colors duration-200"
                    >
                      <FaRegFilePdf size={26} /> Download Pdf
                    </a>
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

export default KeyHighlightsSection;
