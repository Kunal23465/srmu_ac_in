import { useState } from "react";
import { initiativesData } from "../../../data/campus-life/women-empowerment/women-empowerment-data";
import { CustomModal } from "./CustomModal";

export default function CardModalSection() {
  const [isExpanded, setIsExpanded] = useState<number | null>(null);

  return (
    <section className="py-10 sm:py-20">
      <div className="container mx-auto sm:px-4">
        <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] text-center text-[#023047]  fw600">Initiatives</h2>

        <p className="text-center text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] mb-15">
          We believe in equality, inclusiveness, respect for human dignity, fairness and justice for all which is reflected in an unbiased recognition and representation of women
          and men in all areas to thrive.
        </p>

        <div className="grid md:grid-cols-3 gap-9">
          {initiativesData.map((item, index) => (
            <div
              key={index}
              className="bg-[#fff6dd]  shadow-lg rounded-2xl px-5 py-8 sm:p-10 flex flex-col justify-between hover:shadow-2xl transition-all duration-300"
              style={{ backgroundColor: item.bgColor }}
            >
              <h2 className=" font-semibold text-[22px] sm:text-[28px] lg:text-[3.125rem] mb-3">{item.title}</h2>

              <p className="text-gray-700 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] line-clamp-3">{item.shortDescription}</p>

              <button onClick={() => setIsExpanded(index)} className="cursor-pointer fw600 underline transition-all text-left">
                Read more
              </button>

              <CustomModal id={index} isExpanded={isExpanded} setIsExpanded={setIsExpanded} content={item.fullDescription} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
