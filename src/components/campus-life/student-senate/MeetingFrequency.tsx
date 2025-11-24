import React, { useState } from "react";
import { meetingFrequencyData } from "../../../data/campus-life/student-senate/student-senate-data";

const MeetingFrequency: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const activeYear = meetingFrequencyData[activeIndex];

    return (
        <section className="bg-white text-gray-800">

            <div className="relative text-white py-20 flex flex-col items-center justify-center text-center overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center back" />
                <div className="absolute inset-0 "></div>

                <div className="relative z-10 px-4"> {/* Added horizontal padding for smaller screens */}
                    <h1 className="font50 fw500 mb-3">Meeting Frequency</h1>
                    <p className="max-w-4xl mx-auto text-base mb-10">
                        Class Representatives (CRs) and Institute Representatives (IRs) meet twice a semester to gather agenda points and communicate decisions to all students.
                        IRs also meet with university authorities once a semester to discuss agenda points and, within a specified timeframe, resolve academic or administrative issues.
                    </p>
                </div>

                <div className="relative z-10 pt-5 flex flex-wrap justify-center gap-x-5  max-w-full px-4">
                    {meetingFrequencyData.map((item, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`
        relative  text-lg transition-all px-3 
         rounded-lg top-15
        ${activeIndex === idx
                                    ? `
              md:text-yellow-400 
              text-white
              md:after:content-[''] md:after:absolute md:after:left-0 
              md:after:bottom-0 md:after:w-full md:after:h-[3px] 
              md:after:bg-yellow-400 border border-white
  sm:border sm:border-white
  md:border md:border-white
  lg:border-none lg:hover:border-none
            `
                                    : `
             
            `
                                }
      `}
                        >
                            YEAR {item.year}
                        </button>
                    ))}
                </div>

            </div>

            <div className="max-w-7xl mx-auto py-16 px-5 grid grid-cols-1 md:grid-cols-3 gap-10">

                <div className="md:col-span-2">

                    <h2 className=" font40 fw500 mb-3">
                        Year {activeYear.year}
                    </h2>

                    <h3 className="font28 mb-4">Important Issues</h3>

                    {activeYear.sections ? (
                        <div className="space-y-10">
                            {activeYear.sections.map((section, sIdx) => (
                                <div key={sIdx}>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                        {section.title}
                                    </h4>

                                    <ul className="space-y-4">
                                        {section.points.map((point, pIdx) => (
                                            <li key={pIdx} className="flex gap-3">
                                                <span className="text-yellow-500 text-xl">✔</span>
                                                <span className="text-justify leading-relaxed">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <ul className="space-y-5">
                            {activeYear.issues?.map((issue, idx) => (
                                <li key={idx} className="flex gap-3">
                                    <span className="text-yellow-500 text-xl">✔</span>
                                    <span className="text-justify leading-relaxed">{issue}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="hidden md:flex justify-center">
                    <img
                        src={activeYear.image}
                        className="rounded-xl shadow-lg object-cover w-full h-[350px]"
                    />
                </div>


            </div>
        </section>
    );
};

export default MeetingFrequency;