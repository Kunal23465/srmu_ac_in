import React, { useState } from "react";
import { campusSlides } from "../../../data/about/aboutusData";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import ourCampus from "../../../assets/images/about/aboutUs/knowyourcampusimg.jpg"
import Classes from "../../../utils/styles/Global.module.css";
const KnowOurCampus: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? campusSlides.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === campusSlides.length - 1 ? 0 : prev + 1));
    };

    const currentSlide = campusSlides[currentIndex];

    return (
        <section className="w-full">
            {/* Top Header Section */}
            <div className="bg-[#0f4a85] py-6 ">
                <div className={`${Classes["container"]}`}>

                    <h2 className="text-white text-4xl font-bold">Know Our Campus</h2>
                </div>
            </div>

            {/* Image Section with Overlapping Card */}
            <div className="relative w-full">
                {/* Background Image */}
                <img
                    src={ourCampus}
                    alt="Campus"
                    className="w-full h-[550px] object-cover"
                />

                {/* Overlapping Card */}
                <div className="absolute top-1/2 right-[1%] sm:right-[18%]  transform -translate-y-1/2 bg-[#ecf0f9] shadow-lg p-8 w-[370px] h-[370px]">

                    {/* Navigation Arrows */}
                    <div className="flex -mt-8 pb-8 justify-center">
                        <button
                            onClick={handlePrev}
                            className="p-3 text-3xl font-bold text-white bg-[#023047]"
                        >
                            <BiChevronLeft />
                        </button>
                        <button
                            onClick={handleNext}
                            className="p-3 text-3xl font-bold text-white bg-[#023047]"
                        >
                            <BiChevronRight />
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">

                    <h3 className="text-lg font-bold mb-2">{currentSlide.title}</h3>
                    <p className="text-gray-600 mb-4 text-center">{currentSlide.description}</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default KnowOurCampus;
