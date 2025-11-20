import React from 'react'
import { FaRegFilePdf } from 'react-icons/fa';
import Slider from 'react-slick';
import { ArrowButton } from '../../../../utils/custom/CustomCarousel';
import Classes from "../../../../utils/styles/Global.module.css";
type TabContentProps = {
  data: {
    title: string;
    description: string;
    cardData: {
      title: string;
      imageUrl: string;
      pdfUrl: string;
    }[];
  };
};
const TabContent: React.FC <TabContentProps>= ({ data }) => {
  const sliderRef = React.useRef<Slider>(null);
  // Slick slider settings
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
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
      <div className={`${Classes.container} py-7 md:py-10 lg:py-14`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Heading Section */}
          <div className="flex flex-col text-start mb-4 sm:mb-8 text-white">
            <div className="">
              <h2 className="text-4xl font-bold">{data?.title}</h2>
              <p className=" mt-4 font-medium">{data.description}</p>
            </div>

            <div className="flex space-x-2 mt-8">
              <ArrowButton onClick={() => sliderRef.current?.slickPrev()} direction="prev" colorCode={"[#ffffff]"} />
              <ArrowButton onClick={() => sliderRef.current?.slickNext()} direction="next" colorCode={"[#ffffff]"} />
            </div>
          </div>

          {/* Slider */}
          <Slider ref={sliderRef} {...settings} className="manage-academis">
            {data?.cardData.map((item:any, index:number) => {
              return (
                <div key={index} className="p-2  my-4">
                  <div className=" bg-white transition-all duration-200  rounded-xl flex flex-col h-full shadow-md hover:shadow-lg">
                    {/* Image */}
                    <img src={item.imageUrl} alt={item.title} className="w-full h-[200px] object-cover rounded-xl mb-4" />
                  
                     
                      <h3 className="text-[#0f4a85] text-xl font-semibold px-4 ">{item.title}</h3>
                    
                    <a
                      href={item.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="m-4 flex gap-4 items-center  w-fit bg-[#0f4a85] border-3 border-[#ffb703] uppercase text-white hover:text-[#0f4a85] py-2 px-4 rounded-lg hover:bg-white transition-colors duration-200"
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

export default TabContent
