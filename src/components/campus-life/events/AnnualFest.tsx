import React, { useEffect, useState } from "react";
import { festData } from "../../../data/campus-life/events/events-data";
import { useNavigate } from "react-router-dom";
import Classes from "../../../utils/styles/Global.module.css";

const tabs = [
    { key: "anubhuti", label: "ANUBHUTI" },
    { key: "harmony", label: "HARMONY" },
    { key: "ullas", label: "ULLAS" },
];

const AnnualFest: React.FC = () => {
    const [activeTab, setActiveTab] = useState("anubhuti");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerPage, setCardsPerPage] = useState(2);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setCardsPerPage(1);
            } else {
                setCardsPerPage(2);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const data = festData[activeTab];

    const nextSlide = () => {
        if (currentIndex + cardsPerPage < data.cards.length) {
            setCurrentIndex(currentIndex + cardsPerPage);
        }
    };

    const prevSlide = () => {
        if (currentIndex - cardsPerPage >= 0) {
            setCurrentIndex(currentIndex - cardsPerPage);
        }
    };

    const visibleCards = data.cards.slice(
        currentIndex,
        currentIndex + cardsPerPage
    );

    return (
        <section className="relative bg-cover bg-center text-white py-20 back cursor-pointer">
      <div className={`${Classes["container"]}`}>

                {/* Heading and description */}
                <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-10">
                    <h2 className="text-[28px] sm:text-[28px] lg:text-[3.125rem] fw500">Annual Fest</h2>
                    <p className="lg:text-[15px] text-[14px] sm:text-[14px] text-white max-w-3xl leading-relaxed">
                        Shri Ramswaroop Memorial University has a variety of annual festivities each year.
                        These celebrations and festivals give the students a great environment for idea sharing,
                        technological demonstration, creative thinking, and social and cultural efforts.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex gap-6 border-b border-[#ffb703] mb-10 overflow-x-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => {
                                setActiveTab(tab.key);
                                setCurrentIndex(0);
                            }}
                            className={`pb-2 font-semibold lg:text-[15px] sm:text-[14px] text-[14px]  cursor-pointer tracking-wide whitespace-nowrap relative ${activeTab === tab.key
                                ? "text-[#ffb703] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#ffb703]"
                                : "text-white hover:text-[#ffb703]"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Responsive grid layout */}
                <div
                    className="
                        grid
                        md:grid-cols-2
                        grid-cols-1
                        gap-10
                        items-start
                    "
                >
                    {/* LEFT COLUMN */}
                    <div className="max-w-[400px] xl:max-w-[430px] md:mx-0 mx-auto text-center md:text-left">

                        <h3 className="lg:text-[2.5rem]  text-left text-[28px] sm:text-[28px]  fw500 mb-4">
                            {data.title}
                        </h3>

                        <p className="text-white text-[14px] sm:text-[14px] lg:text-[15px] leading-relaxed mb-6 block text-justify md:text-left">
                            {data.description}
                        </p>

                        {/* Carousel arrows */}
                        <div className="flex gap-3 mt-6 justify-center md:justify-start">
                            <button
                                onClick={prevSlide}
                                disabled={currentIndex === 0}
                                className="
                                    w-10 h-10 rounded-full border border-gray-400
                                    flex items-center justify-center
                                    hover:bg-[#ffb703] hover:text-black
                                    transition
                                    disabled:opacity-50 disabled:cursor-not-allowed
                                "
                            >
                                &lt;
                            </button>

                            <button
                                onClick={nextSlide}
                                disabled={
                                    currentIndex + cardsPerPage >= data.cards.length
                                }
                                className="
                                    w-10 h-10 rounded-full border border-gray-400
                                    flex items-center justify-center
                                    hover:bg-[#ffb703] hover:text-black
                                    transition
                                    disabled:opacity-50 disabled:cursor-not-allowed
                                "
                            >
                                &gt;
                            </button>
                        </div>
                    </div>

                    {/* RIGHT COLUMN – CARDS */}
                    <div
                        className="
                            flex
                            gap-8
                            justify-center
                            flex-wrap
                            lg:w-[120%]
                            lg:-ml-[20%]
                            md:flex-nowrap
                            transition-all duration-500
                        "
                    >
                        {visibleCards.map((card, i) => (
                            <div
                                key={i}
                                className="
                                    bg-white text-gray-800
                                    w-full
                                    md:w-[360px]
                                    lg:w-[400px]
                                    rounded-2xl
                                    overflow-hidden
                                    shadow-md
                                    hover:border-2 hover:border-[#ffb703]
                                    hover:-translate-y-1
                                    transition-transform
                                "
                            >
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-70 object-cover"
                                />

                                <div className="p-4">
                                    <h4 className="font-semibold color_light_blue text-[15.75px] sm:text-[15.75px] lg:text-[16.875px] mt-4">
                                        {card.title}
                                    </h4>

                                    <p className="lg:text-[13.125px] sm:text-[12.25px] text-[12.25px] text-[#ffb703] mb-2">
                                        {card.date}
                                    </p>

                                    <p
                                        className="lg:text-[15px] sm:text-[14px] text-[14px]  text-gray-700 mt-2 line-clamp-2"
                                        dangerouslySetInnerHTML={{
                                            __html: card.description,
                                        }}
                                    ></p>

                                    <button
                                        onClick={() => navigate(card.routeKey)}
                                        className="
                                            mt-3 lg:text-[12.195px] text-[11.38px] sm:text-[11.38px] font-medium cursor-pointer color_light_blue 
                                            border-1 border-[#ffb703]
                                            py-2 px-4
                                            rounded-lg
                                            hover:bg-[#ffb703]
                                            flex items-center gap-1
                                        "
                                    >
                                        MORE INFO →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AnnualFest;
