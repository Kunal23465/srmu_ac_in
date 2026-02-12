import { FC, useEffect, useState } from 'react'
import Slider from 'react-slick';
import { topRecruiters } from '../../../data/placement/topRecruiters';


interface HelloProps {
  sliderRef: any;
}

export const Hello: FC<HelloProps> = ({ sliderRef }) => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to determine slidesToShow based on window width
  const getSlidesToShow = () => {
    if (windowWidth >= 1200) return 5;
    if (windowWidth >= 998) return 4;
    if (windowWidth >= 600) return 3;

    return 2;
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 998,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="mt-8 md:mt-10 lg:mt-16">
      <Slider ref={sliderRef} {...settings} className='-mx-3'>
        {topRecruiters.map((data, index) => (
          <>


            <div key={index} className="flex mx-3 justify-center items-center bg-white px-3 py-4 rounded-lg shadow-sm hover:shadow-md transition">
              <img src={data.img} className="h-[90px] w-auto object-contain" />
            </div>


          </>

        ))}
      </Slider>
    </div>
  );
};
