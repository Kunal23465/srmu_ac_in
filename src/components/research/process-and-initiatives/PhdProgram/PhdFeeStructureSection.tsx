import React from "react";
import Classes from "../../../../utils/styles/Global.module.css";
import { phdFeeStructureData } from "../../../../data/research/process-and-initiatives/process-and-initiatives-data";
import bgImage from "../../../../assets/images/research/overview/facilities-bg-lg.jpeg";

const PhdFeeStructureSection: React.FC = () => {
  const { title, description, tableHeadings, feeDetails } = phdFeeStructureData;

  return (
    <section className=" text-white py-16" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className={`${Classes["container"]} px-5 md:px-0`}>
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-medium mb-4">{title}</h2>
        <p className="max-w-4xl mb-10 md:mb-15">{description}</p>

        {/* Table */}
        <div className="overflow-x-auto  rounded-xl">
          {/* Header */}
          <div className="grid grid-cols-3 bg-[#ffb703] text-[#0f2f54] font-semibold px-6 py-4 mb-5 md:mb-8 rounded-xl">
            {tableHeadings.map((heading, index) => (
              <div key={index}>{heading}</div>
            ))}
          </div>

          {/* Rows */}
          <div className="border border-gray-300 mb-10 md:mb-15 rounded-xl">
            {feeDetails.map((item, index) => (
              <div>
                <hr className={`w-[95%] ${index ===0 ? "hidden" : ""} text-gray-400 mx-auto`} />
              <div key={index} className="grid grid-cols-3 px-6 md:px-10 py-4 md:py-8 rounded-xl transition-colors">
                <div className="text-gray-100">{item.sno}.</div>
                <div className="text-gray-100">{item.program}</div>
                <div className="text-gray-100">{item.fee}</div>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhdFeeStructureSection;
