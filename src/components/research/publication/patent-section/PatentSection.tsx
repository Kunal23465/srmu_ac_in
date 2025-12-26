import React from "react";
import Classes from "../../../../utils/styles/Global.module.css";
// @ts-ignore
import { FaRegFilePdf } from "react-icons/fa";
import { patentData } from "../../../../data/research/publication/publication-data";
import { PdfSvgIcon } from "../../../about/recognition-approval/ApprovalSlider";

const PatentSection: React.FC = () => {
  return (
    <div className="relative w-full mt-16 mb-10">
      {/* Blue background block */}
      <div className="bg-[#e8effc] pb-56 pt-20 h-[1700px] md:h-[850px]">
        <div className={Classes.container}>
          <div className="grid md:grid-cols-12 gap-6 items-center">
            <h2 className="lg:text-[40px] md:text-[37.5px] sm:text-[22.4px] text-[22.4px] fw500 text-[#0f3b57] md:col-span-4">Our Patents</h2>

            <p className="text-gray-700 lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] md:col-span-8">
              Patents at SRMU signify our commitment to innovation and research excellence, protecting and recognizing the intellectual property arising from groundbreaking
              studies, and contributing to a culture of creativity and impact.
            </p>
          </div>
        </div>
      </div>

      {/* Floating cards */}
      <div className={`${Classes.container} grid md:grid-cols-3 gap-10 mt-[-1400px] md:mt-[-600px]`}>
        {patentData.map((item) => (
          <div key={item.id} className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100">
            <img src={item.image} alt={item.title} className="w-full h-70 object-cover" />

            <div className="p-6">
              <h3 className="lg:text-[26px] md:text-[24.375px] sm:text-[22.75px] text-[22.75px] font-bold text-[#0f4a85] mb-4">{item.title}</h3>

              <a
                href={item.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] gap-2 bg-[#0f4a85] border-2 border-amber-400 text-white hover:text-[#0f4a85] text-sm font-semibold py-2 px-4 rounded-lg group hover:bg-white transition-all duration-500"
              >
            <span className="bg-white p-1 rounded-lg transition-all duration-500 group-hover:bg-[#ffb703]"><PdfSvgIcon /></span>
                Download PDF
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatentSection;
