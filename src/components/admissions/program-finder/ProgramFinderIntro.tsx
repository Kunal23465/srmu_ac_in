import React from "react";
import { programFinderIntroData } from "../../../data/admissions/program-finder/program-finder-data";

interface ProgramFinderIntroProps {
  description?: any;
  title?: string;
}


console.log("programFinderIntroData", programFinderIntroData)
const ProgramFinderIntro: React.FC<ProgramFinderIntroProps> = ({ description, title }) => {
  return (
    <section className="sm:px-3  pb-12">
      {description ? (
        <div className="text-[#212529] [&_h1]:text-3xl [&_h1]:mb-1  text-[13px] sm:text-[16px] [&_strong]:block  [&_strong]:my-3 [&_span]:text-[18px]! sm:[&_span]:text-[26px]! lg:[&_span]:text-[30px]! " dangerouslySetInnerHTML={{ __html: description }} />
      ) : (
        <>
          <h1 className="text-[22px] sm:text-[28px] lg:text-[2.5rem] font-bold text-[#212529] mb-6">{title || programFinderIntroData.title}</h1>
          <p className="text-[#212529] text-[13px] sm:text-[16px] mb-8 sm:leading-relaxed">{programFinderIntroData.description}</p>
          <div className="space-y-6">
            {programFinderIntroData.sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-[16px] font-semibold text-[#212529] mb-2">{section.heading}</h2>
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
