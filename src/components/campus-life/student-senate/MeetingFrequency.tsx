import React, { useState } from "react";
import { meetingFrequencyData } from "../../../data/campus-life/student-senate/student-senate-data";

const MeetingFrequency: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const activeYear = meetingFrequencyData[activeIndex];

    return (
        <section className="bg-white text-gray-800">
            <div className="relative text-white pb-20 pt-10 sm:py-20 flex flex-col items-center justify-center text-center overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center back" />
                <div className="absolute inset-0 "></div>

                <div className="relative z-10 px-4">
                    {" "}
                    {/* Added horizontal padding for smaller screens */}
                    <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500 mb-3">Meeting Frequency</h2>
                    <p className=" max-w-4xl mx-auto text-base sm:mb-10">
                        Class Representatives (CRs) and Institute Representatives (IRs) meet twice a semester to gather agenda points and communicate decisions to all students. IRs also meet
                        with university authorities once a semester to discuss agenda points and, within a specified timeframe, resolve academic or administrative issues.
                    </p>
                </div>

                <div className="relative z-10 pt-5 flex flex-wrap justify-center gap-x-5  max-w-full px-4 ">
                    {meetingFrequencyData.map((item, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`
        relative  text-lg transition-all p-3
         rounded-lg top-19 md:top-20
        ${activeIndex === idx
                                    ? `text-white
              md:after:content-[''] md:after:absolute md:after:left-0 
              md:after:bottom-0 md:after:w-full md:after:h-[3px] 
              md:after:bg-[#ffb703] border border-white
  sm:border sm:border-white
  md:border-none md:hover:border-none`
                                    : `md:after:hover:bg-[#ffb703]`
                                }`}
                        >
                            YEAR {item.year}
                        </button>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-16 px-5 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="md:col-span-2">
                    <h2 className=" text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500 mb-3">Year {activeYear.year}</h2>

                    <h2 className="text-base font-medium sm:font28 mb-4">Important Issues</h2>

                    {activeYear.sections ? (
                        <div className="space-y-10">
                            {activeYear.sections.map((section, sIdx) => (
                                <div key={sIdx}>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{section.title}</h4>

                                    <ul className="space-y-2 sm:space-y-4">
                                        {section.points.map((point, pIdx) => (
                                            <li key={pIdx} className="flex gap-3">
                                                <span className="text-[#ffb703] text-xl">✔</span>
                                                <span className="text-justify leading-relaxed">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <p className="pb-5">Some important pointers taken up during the senate meeting are:</p>
                            <ul className="space-y-2 sm:space-y-5 ml-3">
                                {activeYear.issues?.map((issue, idx) => (
                                    <li key={idx} className="flex gap-3">
                                        <span className="text-[#ffb703] text-sm sm:text-xl">✔</span>
                                        <span className="text-justify text-sm sm:text-base sm:leading-relaxed">{issue}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <div className="hidden md:flex justify-center">
                    <img src={activeYear.image} className="rounded-xl shadow-lg object-cover w-full h-[350px]" />
                </div>
            </div>
        </section>
    );
};

export default MeetingFrequency;
