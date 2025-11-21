import { FC } from 'react'
import Slider from 'react-slick';
import { CollabrationSliderData } from '../../../data/about/recognition-approval/recognitionApprovalsData';

interface HelloProps {
  sliderRef: any;
}

export const Hello: FC<HelloProps> = ({ sliderRef }) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="mt-8 md:mt-10 lg:mt-16">
      <Slider ref={sliderRef} {...settings}>
        {CollabrationSliderData.map((data, index) => (
          <div key={index}>
            <div className="flex flex-col gap-6">

              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {data.slides.slice(0, 6).map((slide, i) => (
                  <li key={i} className="flex justify-center items-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition">
                    <img src={slide.img} className="h-[60px] w-auto object-contain" />
                  </li>
                ))}
              </ul>

              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {data.slides.slice(6, 12).map((slide, i) => (
                  <li key={i} className="flex justify-center items-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition">
                    <img src={slide.img} className="h-[60px] w-auto object-contain" />
                  </li>
                ))}
              </ul>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
