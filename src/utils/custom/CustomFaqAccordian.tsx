import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AccordionItem } from "../../data/admissions/admission-faq/admission-faq-data";
interface Props {
  data: AccordionItem[];
}

const CustomFaqAccordion: React.FC<Props> = ({ data }) => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="w-full mx-auto space-y-3 mt-10">
      {data.map((item, index) => (
        <div
          key={item.id}
          onClick={() => toggleAccordion(index)}
          className="border border-gray-300 rounded-sm overflow-hidden shadow-sm py-4 cursor-pointer"
        >
          {/* Question */}
          <button
            
            className="flex justify-between cursor-pointer items-center w-full px-4 text-left text-md font-medium text-gray-800"
          >
            <span className="text-lg font-medium">
              {`${item.id}. ${item.question}`}
            </span>

            {openIndex === index ? (
              <ChevronUp className="w-6 h-6 text-gray-600" />
            ) : (
              <ChevronDown className="w-6 h-6 text-gray-600" />
            )}
          </button>

          {/* Answer */}
          <div
            className={`transition-all duration-500 overflow-hidden ${
              openIndex === index ? "max-h-[1000px] px-4 pb-4" : "max-h-0 px-4"
            }`}
          >
            {typeof item.content === "string" ? (
              <div
                className="text-gray-700 text-[16px] leading-relaxed pt-4"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            ) : (
              <div className="text-gray-700 text-[16px] leading-relaxed pt-4">
                {item.content}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomFaqAccordion;