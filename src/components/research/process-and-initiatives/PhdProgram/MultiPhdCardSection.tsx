import React from "react";
import { phdPdfResources } from "../../../../data/research/process-and-initiatives/process-and-initiatives-data";
import Classes from "../../../../utils/styles/Global.module.css";
import { PdfSvgIcon } from "../../../about/recognition-approval/ApprovalSlider";
const MultiPhdCardSection: React.FC = () => {
  return (
    <div className={`${Classes["container"]} px-10 sm:px-15 md:px-0  py-16`}>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {phdPdfResources.map((item, index) => (
          <div key={index} className="flex flex-col justify-between  items-center bg-white shadow-lg rounded-xl py-14 px-10 text-center hover:shadow-2xl transition-shadow">
            <div className="">
              <h4 className="font-semibold lg:text-[18px] text-[15.75px] md:text-[16.875px] sm:text-[15.75px] mb-4">{item.title}</h4>
              <p className="lg:text-[14px] md:text-[13.132px] sm:text-[12.25px] text-[12.25px]">{item.description}</p>
            </div>
            <div className="mt-4">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#0f4a85] border-2 border-[#ffb703] text-white font-semibold uppercase py-2 px-4 rounded-lg group hover:bg-white hover:text-[#0f4a85] transition-colors duration-500 w-fit"
              >
                <span className="p-1 bg-white group-hover:bg-[#ffb703] rounded-lg lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] transition-all duration-500"><PdfSvgIcon /></span>
                Download PDF
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiPhdCardSection;
