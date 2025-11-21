import React from "react";
import Classes from "../../../../utils/styles/Global.module.css";
import { phdFeeStructureData } from "../../../../data/research/process-and-initiatives/process-and-initiatives-data";
import bgImage from "../../../../assets/images/research/overview/facilities-bg-lg.jpeg";

const PhdFeeStructureSection: React.FC = () => {
  const { title, description, tableHeadings, feeDetails } = phdFeeStructureData;

  return (
    <section className=" text-white py-16" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className={`${Classes["container"]} px-6 md:px-16`}>
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="max-w-4xl text-gray-300 mb-10">{description}</p>

        {/* Table */}
        <div className="overflow-x-auto  rounded-xl border border-gray-600">
          {/* Header */}
          <div className="grid grid-cols-3 bg-[#ffb703] text-[#0f2f54] font-semibold px-6 py-4 rounded-t-xl">
            {tableHeadings.map((heading, index) => (
              <div key={index}>{heading}</div>
            ))}
          </div>

          {/* Rows */}
          <div>
            {feeDetails.map((item, index) => (
              <div key={index} className="grid grid-cols-3 border-t border-gray-600 px-6 py-4 hover:bg-[#163b63] transition-colors">
                <div className="text-gray-100">{item.sno}.</div>
                <div className="text-gray-100">{item.program}</div>
                <div className="text-gray-100">{item.fee}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhdFeeStructureSection;
