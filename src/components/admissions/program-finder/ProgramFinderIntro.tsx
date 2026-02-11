import React from "react";
import { programFinderIntroData } from "../../../data/admissions/program-finder/program-finder-data";

interface ProgramFinderIntroProps {
  description?: string;
}

const ProgramFinderIntro: React.FC<ProgramFinderIntroProps> = ({ description }) => {
  return (
    <section className="px-3 py-12">
      {description ? (
        <div className="text-[#212529] text-[13px] sm:text-[16px] leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
      ) : (
        <>
            <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] font-bold text-[#212529] mb-6">{programFinderIntroData.title}</h2>
          <p className="text-[#212529] text-[13px] sm:text-[16px] mb-8 leading-relaxed">{programFinderIntroData.description}</p>
          <div className="space-y-6">
            {programFinderIntroData.sections.map((section, index) => (
              <div key={index}>
                <h3 className="text-[16px] font-semibold text-[#212529] mb-2">{section.heading}</h3>
                <p className="text-[#212529] text-[13px] sm:text-[16px] leading-relaxed">{section.text}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default ProgramFinderIntro;
