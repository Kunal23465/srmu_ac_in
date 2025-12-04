import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { WhyItem, WhySliderData } from "../../data/about/silder/slider-data";

type Props = { data: WhySliderData };

const WhyCard: React.FC<WhyItem & { highlight?: boolean; hovered: boolean; setHovered: (v: boolean) => void }> = ({ title, description, highlight, hovered, setHovered }) => {
  const active = highlight || hovered;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
    w-full md:min-w-[290px] p-6 rounded-2xl shadow-xl cursor-pointer
    ${active ? "bg-yellow-500 color_light_blue" : "bg-white"}
    ${window.innerWidth < 640 ? "text-center" : "text-left"} // Center text for mobile
  `}
    >
      <h3 className="font28 mb-4 color_light_blue fw500">{title}</h3>
      <p className={`${active ? "text-gray-800" : "text-gray-700"} font17`}>{description}</p>
    </div>

  );
};

const CustomAboutUsSlider: React.FC<Props> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full flex justify-center py-20">
      <div className="w-full max-w-7xl h-full flex flex-col md:flex-row  items-start gap-10 p-4">
        <div className="flex flex-col items-start md:min-w-[300px] mt-6">
          <h2 className="leading-[1.2] text-[#1a1a1a] font-medium text-[3.125rem] mb-4">
            {data.heading.split(' ').map((word, idx) => (
              <div key={idx}>{word}</div>
            ))}
          </h2>
          <p className="text-[20px] text-gray-700 mb-8">
            {data.subheading.split(' ').reduce((acc: JSX.Element[], word, idx) => {
              if (idx % 2 === 0) acc.push(<span key={idx}>{word} {data.subheading.split(' ')[idx + 1] ? data.subheading.split(' ')[idx + 1] : ''}<br /></span>);
              return acc;
            }, [])}
          </p>


          <div className="flex gap-4">
            <button className="swiper-button-prev-custom w-12 h-12 flex items-center justify-center border-2 border-black text-gray-800 bg-white rounded-full hover:bg-gray-100">
              <ChevronLeft size={24} />
            </button>

            <button className="swiper-button-next-custom w-12 h-12 flex items-center justify-center border-2 border-black text-gray-800 bg-white rounded-full hover:bg-gray-100">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="md:flex-1 overflow-hidden">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1} // Default for small screens
            spaceBetween={20}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              el: ".custom-dots",
              clickable: true,
              renderBullet: (_, className) => `<span class="${className} w-4 h-4 rounded-full border border-black block"></span>`,
            }}
            breakpoints={{
              1024: { slidesPerView: 3 }, // Large screens: keep 3 per view
              640: { slidesPerView: 1 }, // Small screens: single card per view
            }}
            onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
          >
            {data.items.map((item, index) => {
              const isCenter = index === currentIndex + (window.innerWidth >= 1024 ? Math.floor(3 / 2) : 0); // Only highlight center on large screens
              const isHovered = hoveredIndex === index;

              return (
                <SwiperSlide key={index}>
                  <div className="flex px-3 w-full justify-center">
                    <WhyCard
                      {...item}
                      highlight={isCenter}
                      hovered={isHovered}
                      setHovered={(state) => setHoveredIndex(state ? index : null)}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>


          <div className="custom-dots mt-14! flex justify-center gap-3"></div>
        </div>
      </div>
    </div>
  );
};

export default CustomAboutUsSlider;