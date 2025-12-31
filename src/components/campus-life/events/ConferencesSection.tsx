import React, { useState, useEffect } from "react";
import { conferenceData } from "../../../data/campus-life/events/events-data";
import { useNavigate } from "react-router-dom";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const ConferencesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"conference" | "seminar">("conference");
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const navigate = useNavigate();

useEffect(() => {
  const updateCardsPerPage = () => {
    const width = window.innerWidth;

    if (width < 770) {
      setCardsPerPage(1);     // mobile
    } else if (width < 1024) {
      setCardsPerPage(2);     // tablet
    } else {
      setCardsPerPage(3);     // desktop
    }
  };

  updateCardsPerPage();
  window.addEventListener("resize", updateCardsPerPage);

  return () => window.removeEventListener("resize", updateCardsPerPage);
}, []);


  const data = activeTab === "conference" ? conferenceData.conferences : conferenceData.seminars;

  const nextSlide = () => {
    if (startIndex + cardsPerPage < data.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleCards = data.slice(startIndex, startIndex + cardsPerPage);

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="lg:text-[3.125rem] text-[22.4px] sm:text-[22.4px] fw500 color_light_blue mb-4">Conferences</h2>
      <p className="w-full sm:w-[88%] mx-auto mb-8 text-[14px] sm:text-[14px] lg:text-[16px]">
        SRMU both hosts and participates in a diverse set of academic conferences, leveraging these platforms to exchange ideas, and delve into emerging research concerns across
        various disciplines. These conferences are key to building a spirit of academic engagement and innovation within the vibrant SRMU community.
      </p>

      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => {
            setActiveTab("conference");
            setStartIndex(0);
          }}
          className={`px-6 py-3 rounded-lg lg:text-[15px] md:text-[14px] sm:text-[13.132px] text-[13.132px] transition-all duration-500 border cursor-pointer ${
            activeTab === "conference" ? "color_background_blue text-white" : "color_border_blue color_light_blue"
          }`}
        >
          CONFERENCE
        </button>
        <button
          onClick={() => {
            setActiveTab("seminar");
            setStartIndex(0);
          }}
          className={`px-10 py-3 rounded-lg lg:text-[15px] md:text-[14px] sm:text-[13.132px] text-[13.132px] transition-all duration-500 border cursor-pointer ${
            activeTab === "seminar" ? "color_background_blue text-white" : "color_border_blue color_light_blue"
          }`}
        >
          SEMINAR
        </button>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="flex justify-end gap-2 mb-6 pr-2">
          <button
            onClick={prevSlide}
            disabled={startIndex === 0}
            className={`w-12 h-12 border-2 border-black flex hover:bg-[#0f4a85] text-[#0f4a85] hover:text-[#ffb703] items-center justify-center transition ${
              startIndex === 0 ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            <MdKeyboardArrowLeft size="26" />
          </button>
          <button
            onClick={nextSlide}
            disabled={startIndex + cardsPerPage >= data.length}
            className={`w-12 h-12 border-2 border-black flex hover:bg-[#0f4a85] text-[#0f4a85] hover:text-[#ffb703] items-center justify-center transition ${
              startIndex + cardsPerPage >= data.length ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            <MdKeyboardArrowRight size="26" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
          {visibleCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white cursor-pointer rounded-2xl transition-all duration-500 group hover:border-[#ffb703] shadow-md overflow-hidden hover:shadow-lg border-2 border-transparent "
            >
              <img src={card.image} alt={card.title} className="w-full h-56 object-cover" />
              <div className="p-5 text-left">
                <h3 className=" lg:text-[1.125rem] sm:text-[16.875px] text-[16.875px] fw500 color_light_blue mb-1 mt-4">{card.title}</h3>
                <span className="lg:text-[.875rem] sm:text-[12.25px] text-[12.25px] text-[#ffb703]">{card.date}</span>
                <span className="text-gray-600 text-[14px] lg:text-[15px] md:text-[14px] sm:text-[13.132px] text-[13.132px]line-clamp-3 mt-2 mb-4">{card.description}</span>
                <button
                  onClick={() => navigate(card.routeKey)}
                  className="lg:text-[12.195px] text-[11.38px] sm:text-[11.38px] transition-all duration-500 fw500 border-2 border-[#ffb703] color_light_blue py-3 px-8 rounded-lg  group-hover:bg-[#ffb703] hover:text-white flex items-center gap-2"
                >
                  MORE INFO →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConferencesSection;
