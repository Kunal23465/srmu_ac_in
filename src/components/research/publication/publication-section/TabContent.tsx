import React from "react";
import Slider from "react-slick";
import Classes from "../../../../utils/styles/Global.module.css";
import { PdfSvgIcon } from "../../../about/recognition-approval/AssociateMembership";

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


  export const CustomArrow = ({
    onClick,
    disabled,
    direction,
  }: {
    onClick?: () => void;
    disabled?: boolean;
    direction: "prev" | "next";
  }) => (
    <button
      onClick={!disabled ? onClick : undefined}
      className={`
        w-12 h-12 flex items-center justify-center
        rounded-full border-2 border-white text-white
        transition-all duration-300
        ${disabled ? "opacity-30 cursor-not-allowed" : "hover:bg-white hover:text-[#0f4a85] cursor-pointer"}
      `}
    >
      {direction === "prev" ? (
        <span className="text-2xl font-bold">‹</span>
      ) : (
        <span className="text-2xl font-bold">›</span>
      )}
    </button>
  );

const TabContent: React.FC<TabContentProps> = ({ data }) => {
  const sliderRef = React.useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [slidesToShow, setSlidesToShow] = React.useState(2);

  // ✔ Determine slidesToShow dynamically based on screen size
  React.useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 768) setSlidesToShow(1);
      else setSlidesToShow(2);
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  // Slick settings
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
  };


  return (
    <div>
      <div className={`${Classes.container} py-7 md:py-10 lg:py-14`}>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          
          {/* LEFT PANEL – Title + Description + Arrows */}
          <div className="flex flex-col w-full md:w-1/3 text-white">
            <h2 className="text-4xl font-medium">{data.title}</h2>
            <p className="mt-4">{data.description}</p>

            {/* CUSTOM ARROWS */}
            <div className="flex gap-4 mt-8">
              <CustomArrow
                direction="prev"
                onClick={() => sliderRef.current?.slickPrev()}
                disabled={currentSlide === 0}
              />
              <CustomArrow
                direction="next"
                onClick={() => sliderRef.current?.slickNext()}
                disabled={currentSlide >= data.cardData.length - slidesToShow}
              />
            </div>
          </div>

          {/* RIGHT PANEL – Slider */}
          <div className="w-full md:w-2/3">
            <Slider ref={sliderRef} {...settings}>
              {data.cardData.map((item, index) => (
                <div key={index} className="p-2 my-4">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                    
                    {/* Image */}
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-[200px] object-cover"
                    />

                    {/* Title */}
                    <h3 className="text-[#0f4a85] text-xl font-semibold p-4 pb-1">
                      {item.title}
                    </h3>

                    {/* PDF Button */}
                    <a
                      href={item.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="m-4 flex gap-3 items-center w-fit border-2 border-[#ffb703] text-[#0f4a85] py-2 px-4 rounded-lg uppercase hover:bg-[#ffb703] transition-all"
                    >
                      <span className="p-1 rounded bg-[#ffb703]">
                        <PdfSvgIcon />
                      </span>
                      Download PDF
                    </a>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TabContent;
