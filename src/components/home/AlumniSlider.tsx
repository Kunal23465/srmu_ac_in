import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { alumniData } from "../../data/placement/alumni-testimonials-data";
import AlumniCard from "./AlumniCard";

type SliderRefType = React.RefObject<Slider>;

interface AlumniSliderProps {
  sliderRef: SliderRefType;
}

const AlumniSlider: React.FC<AlumniSliderProps> = ({ sliderRef }) => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);
  // @ts-ignore
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Slides based on screen size
  const getSlidesToShow = () => {
    if (windowWidth >= 1024) return 3;
    if (windowWidth >= 600) return 2;
    return 1;
  };

  // Enable center mode on tablet & desktop
  const shouldCenterMode = () => windowWidth >= 768;

  // Show arrows except very small screens
  const shouldShowArrows = () => windowWidth >= 375;

  const settings = {
    dots: true, //
    infinite: alumniData.length > getSlidesToShow(),
    speed: 700,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 1,
    centerMode: shouldCenterMode(),
    centerPadding: "0px",
    arrows: shouldShowArrows(),
    swipeToSlide: true,
    focusOnSelect: true,
    touchThreshold: 10,
    beforeChange: (_: number, next: number) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: alumniData.length > 2,
          centerMode: alumniData.length > 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          infinite: alumniData.length > 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="-mx-2 sm:-mx-4">
        <Slider className="notable slider_placement_dots_law placement_dots_law_left pb-10" ref={sliderRef} {...settings}>
          {alumniData.map((item) => (
            <div key={item.id}>
              <div className="px-2 sm:px-4">
                <AlumniCard {...item} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AlumniSlider;
