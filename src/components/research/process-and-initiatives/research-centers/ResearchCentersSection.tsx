import React from "react";
import { researchCenters } from "../../../../data/research/process-and-initiatives/process-and-initiatives-data";
import Classes from "../../../../utils/styles/Global.module.css";
import { PdfSvgIcon } from "../../../about/recognition-approval/ApprovalSlider";


const ResearchCentersSection: React.FC = () => {
  return (
    <div className="relative px-0 md:px-6 w-full mt-16">
      {/* Blue Background Section */}
      <div className="bg-[#dee6f7] rounded-none md:rounded-[30px] h-[1050px] md:h-[600px] ">
        <div className={Classes["container"]}>
          <div className="py-14 md:py-20">
            <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500 text-gray-900">Research Centers</h2>
          </div>
        </div>
      </div>

      {/* Floating Cards OUTSIDE Blue Section */}
      <div className={`${Classes["container"]} grid md:grid-cols-2 gap-6 md:gap-10 mt-[-900px] md:mt-[-426px] px-2 md:px-6`}>
        {researchCenters.map((item) => (
          <div key={item.id} className="bg-white shadow-lg rounded-2xl overflow-hidden border hover:border-[#ffb703] border-transparent">
            <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />

            <div className="p-10">
              <h3 className="lg:text-[22px] md:text-[20.625px] sm:text-[19.25px] text-[19.25px] fw500 text-[#0f4a85] mb-2">{item.title}</h3>
              <p className="text-gray-600 lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] leading-6 mb-5">{item.description}</p>

              <a
                href={item.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#0f4a85] border-2 border-[#ffb703] text-white font-semibold uppercase py-2 px-4 rounded-lg group hover:bg-white hover:text-[#0f4a85] transition-colors duration-500 w-fit"
              >
                <span className="p-1 rounded-lg bg-white group-hover:bg-[#ffb703]">
                  <PdfSvgIcon />
                </span>
                Download PDF
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchCentersSection;
