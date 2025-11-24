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
                <div className="absolute top-1/2 right-[320px] transform -translate-y-1/2 bg-white shadow-lg p-8 w-[380px] rounded-md">

                    {/* Navigation Arrows */}
                    <div className="flex justify-end gap-2">
                        <button
                            onClick={handlePrev}
                            className="p-2 bg-gray-100 hover:bg-gray-200 rounded"
                        >
                            <BiChevronLeft />
                        </button>
                        <button
                            onClick={handleNext}
                            className="p-2 bg-gray-100 hover:bg-gray-200 rounded"
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
