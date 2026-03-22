import React, { useState, useEffect } from "react";
import { festivalsData } from "../../../data/campus-life/events/events-data";
import { useNavigate } from "react-router-dom";
import { normalizeRouteSlug } from "../../../utils/routeMatching";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Festivals: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [startCard, setStartCard] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1); // mobile → only ONE card
      } else {
        setVisibleCards(3); // desktop → three cards
      }
    };

    updateCards();
    window.addEventListener("resize", updateCards);

    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const activeFestival = festivalsData[activeIndex];
  const totalCards = activeFestival.cards.length;

  const next = () => {
    setStartCard((prev) => (prev + visibleCards >= totalCards ? 0 : prev + visibleCards));
  };

  const prev = () => {
    setStartCard((prev) => (prev === 0 ? totalCards - visibleCards : prev - visibleCards));
  };

  return (
    <section className="bg-white text-gray-800">
      {/* HERO SECTION */}
      <div className="relative text-white py-20 flex flex-col items-center justify-between text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center back"></div>
        <div className="absolute inset-0 bg-opacity-60"></div>

        <div className="relative z-10 px-4 md:px-0">
          <h2 className="text-[28px] sm:text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500 mb-4 text-[#ffb703]">Festivals</h2>
          <p className="max-w-3xl md:max-w-[45%] mx-auto lg:text-[15px] md:text-[14px] sm:text-[13.132px] text-[13.132px] mb-10 leading-relaxed">
            The SRMU community celebrates various Indian festivals, shaping an atmosphere of harmony and unity. Each festival becomes a lively tapestry of cultural expressions,
            bringing students, faculty, and staff together to share these rich traditions.
          </p>
        </div>

        <div
          className="
                    absolute bottom-0 left-1/2 -translate-x-1/2 
                    flex justify-center gap-8 z-10 cursor-pointer
                    w-full overflow-x-auto md:overflow-visible
                    px-4 md:px-0 whitespace-nowrap
                "
        >
          {festivalsData.map((festival, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveIndex(idx);
                setStartCard(0);
              }}
              className={`relative lg:text-[18px] sm:text-[16px] text-[14px] fw500 pb-3 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[4px] ${activeIndex === idx ? "text-white  after:bg-[#ffb703]" : "text-white hover:after:bg-[#ffb703]"
                }`}
            >
              {festival.name}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-0">
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <div>
            <h3 className="lg:text-[1.75rem] text-[24.5px] sm:text-[24.5px] md:text-2xl pb-3 sm:pb-5 font-bold text-[#002D62]">{activeFestival.name}</h3>
            <p className="leading-relaxed w-full md:w-3/4 xl:w-[65%] whitespace-pre-line text-justify lg:text-[15px] md:text-[14px] sm:text-[13.132px] text-[13.132px]">
              {activeFestival.description}
            </p>
          </div>
          <div className="flex justify-end gap-3 mb-6">
            {/* PREVIOUS BUTTON */}
            <button
              onClick={prev}
              disabled={startCard === 0}
              className={`w-12 h-12 border-2 border-black flex items-center justify-center 
      hover:bg-[#0f4a85] text-[#0f4a85] hover:text-[#ffb703] transition 
      ${startCard === 0 ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
            >
              <MdKeyboardArrowLeft size="26" />
            </button>

            {/* NEXT BUTTON */}
            <button
              onClick={next}
              disabled={startCard + visibleCards >= totalCards}
              className={`w-12 h-12 border-2 border-black flex items-center justify-center 
      hover:bg-[#0f4a85] text-[#0f4a85] hover:text-[#ffb703] transition 
      ${startCard + visibleCards >= totalCards ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
            >
              <MdKeyboardArrowRight size="26" />
            </button>
          </div>
        </div>

        {/* CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 transition-all duration-500">
          {activeFestival.cards.slice(startCard, startCard + visibleCards).map((card, i) => (
            <div
              key={i}
              className="
                                    bg-white rounded-2xl cursor-pointer shadow-md group
                                    hover:border-yellow-500 hover:shadow-xl transition-all duration-500 
                                    border-2 border-gray-100 flex flex-col
                                    h-auto md:h-[500px]
                                "
            >
              <img src={card.image} alt={card.title} className="w-full rounded-t-2xl h-48 md:h-64 object-cover" />

              <div className="flex flex-col justify-between flex-1 p-5">
                <div>
                  <h4 className="text-[15.75px] sm:text-[15.75px] lg:text-[16.875px] color_light_blue">{card.title}</h4>
                  <span className="text-yellow-500 lg:text-[.875rem] sm:text-[12.25px] text-[12.25px] block mb-4">{card.date}</span>
                  <span className="lg:text-[15px] md:text-[14px] sm:text-[13.132px] text-[13.132px] text-gray-600 leading-relaxed line-clamp-3">{card.description}</span>
                </div>

                <div className="mt-4">
                  <button
                    onClick={() => navigate(`/event/${normalizeRouteSlug(card.title)}`)}
                    className="
                                                text-sm font-semibold border-2 border-yellow-500 
                                                color_light_blue py-3 px-6 rounded-lg 
                                                group-hover:bg-yellow-500 hover:text-white 
                                                 transition-all duration-500 flex items-center gap-2 w-fit
                                            "
                  >
                    MORE INFO →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Festivals;
