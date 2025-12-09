import React from "react";
import Classes from "../../../../utils/styles/Global.module.css";
import Slider from "react-slick";
import { CustomFacilitiesTypes } from "../../../../types/overview-data-type";
import { ArrowButton } from "../../../../utils/custom/CustomCarousel";
import { PdfSvgIcon } from "../../../about/recognition-approval/ApprovalSlider";


const KeyHighlightsSection: React.FC<CustomFacilitiesTypes> = ({ facilities, layoutData }) => {
  const sliderRef = React.useRef<Slider>(null);

  // Slick slider settings
  const settings = {
    dots: false,
    infinite: false,
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
          </div>


          {/* Facilities Slider */}
          <Slider ref={sliderRef} {...settings} className="manage-academis">
            {facilities.map((facility, index) => {
              return (
                <div key={index} className="p-2 h-full sm:h-[600px] md:h-[650px] lg:h-[600px]  my-4">
                  <div className=" bg-white hover:border-2 hover:border-[#0f4a85] transition-all duration-200  rounded-2xl flex flex-col h-full shadow-md hover:shadow-lg">
                    {/* Image */}
                    <img src={facility.imageUrl} alt={facility.title} className="w-full h-[300px] object-cover rounded-t-2xl" />
                    <div className="faculty-card-scrollbar p-8">
                      {/* Title */}
                      <h3 className="text-[#0f4a85] text-xl font-semibold mb-2">{facility.title}</h3>
                      {/* Description */}
                      <p className="text-[#878484] grow text-justify">
                        {/* {facility.description} */}
                        <div dangerouslySetInnerHTML={{ __html: facility?.description }} />
                      </p>
                 
                 
                    <a
                      href={facility.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex mt-5 overflow-auto items-center gap-3 bg-[#0f4a85] border-2 border-[#ffb703] text-white font-medium uppercase py-2 px-4 rounded-lg group hover:bg-white hover:text-[#0f4a85] transition-colors duration-200 w-fit"
                              >
                                <span className="bg-white p-1 rounded-lg transition-all duration-500 group-hover:bg-[#ffb703]"><PdfSvgIcon /></span>
                                Download PDF
                              </a>   </div>
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
