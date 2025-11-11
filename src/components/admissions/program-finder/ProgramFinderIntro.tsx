import React from "react";
import { programFinderIntroData } from "../../../data/admissions/program-finder/program-finder-data";

const ProgramFinderIntro: React.FC = () => {
    return (
        <section className="px-3 py-12">
            {/* Main Title */}
            <h2 className="text-2xl sm:text-3xl md:text-[30px] font-bold text-[#212529] mb-6">
                {programFinderIntroData.title}
            </h2>

            {/* Intro Paragraph */}
            <p className="text-[#212529] text-[13px] mb-8 leading-relaxed">
                {programFinderIntroData.description}
            </p>

            {/* Subsections */}
            <div className="space-y-6">
                {programFinderIntroData.sections.map((section, index) => (
                    <div key={index}>
                        <h3 className="text-[16px] font-semibold text-[#212529] mb-2">
                            {section.heading}
                        </h3>
                        <p className="text-[#212529] text-[13px] leading-relaxed">{section.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProgramFinderIntro;
