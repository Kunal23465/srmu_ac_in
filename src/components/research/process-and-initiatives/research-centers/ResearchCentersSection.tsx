import React from "react";
import { researchCenters } from "../../../../data/research/process-and-initiatives/process-and-initiatives-data";
import Classes from "../../../../utils/styles/Global.module.css";
import { FaRegFilePdf } from "react-icons/fa";


const ResearchCentersSection: React.FC = () => {
  return (
    <div className="relative px-6 w-full mt-16">
      {/* Blue Background Section */}
      <div className="bg-[#e8effc] rounded-[30px] h-[600px]">
        <div className={Classes["container"]}>
          <div className="py-14 md:py-20">
            <h2 className="text-3xl font-bold text-gray-900">Research Centers</h2>
          </div>
        </div>
      </div>

      {/* Floating Cards OUTSIDE Blue Section */}
      <div className={`${Classes["container"]} grid md:grid-cols-2 gap-6 md:gap-10 mt-[-426px] px-2 md:px-6`}>
        {researchCenters.map((item) => (
          <div key={item.id} className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100">
            <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />

            <div className="p-10">
              <h3 className="text-lg font-bold text-[#0f4a85] mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-6 mb-5">{item.description}</p>

              <a
                href={item.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#0f4a85] border-3 border-[#ffb703] text-white font-semibold uppercase py-3 px-5 rounded-lg hover:bg-white hover:text-[#0f4a85] transition-colors duration-200 w-fit"
              >
                <FaRegFilePdf size={22} />
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
