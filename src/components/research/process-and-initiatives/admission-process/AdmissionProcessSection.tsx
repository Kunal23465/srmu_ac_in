import React, { useState } from "react";
import { admissionProcessData, pdfResources } from "../../../../data/research/process-and-initiatives/process-and-initiatives-data";
import Classes from "../../../../utils/styles/Global.module.css";
import { PdfSvgIcon } from "../../../about/recognition-approval/AssociateMembership";

const AdmissionProcessSection: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-[#f4f6fb]">
      <section className={`${Classes["container"]} py-16 px-6 md:px-16`}>

        {/* Heading */}
        <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] font-semibold text-[#0f4a85] mb-6">
          {admissionProcessData.title}
        </h2>

        {/* Short Description */}
        <div className="text-gray-800 space-y-4 mb-6">
          {admissionProcessData.shortDescription.map((item, index) => (
            <div key={index}>
              <h2 className="lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] fw500">{item.subHeading}</h2>
              <p className="lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px]">{item.text}</p>
            </div>
          ))}
        </div>

        {/* SHOP SHUTTER ANIMATION WRAPPER */}
        <div
          className={`shutter-wrapper mb-6 ${
            showMore ? "shutter-open" : "shutter-closed"
          }`}
        >
          <div className="text-gray-800 space-y-4 pt-2">
            {admissionProcessData.fullDetails?.map((item, index) => (
              <div key={index}>
                <h2 className="font-semibold">{item.subHeading}</h2>
                <p className="whitespace-pre-line text-sm!">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* READ MORE / READ LESS BUTTON */}
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-[#0f4a85] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px]  font-semibold block mb-10 transition-colors"
        >
          {showMore ? "READ LESS" : "READ MORE"}
        </button>

        {/* PDF Resource Cards */}
        <div className="flex justify-center sm:justify-start items-center gap-8 flex-wrap">
          {pdfResources.map((item, index) => (
            <div
              key={index}
              className="w-80 bg-white shadow-lg rounded-xl py-14 px-10 text-center hover:shadow-2xl transition-shadow"
            >
              <h4 className="font-semibold lg:text-[18px] md:text-[16.875px] sm:text-[15.75px] text-[15.75px] mb-4">{item.title}</h4>
              <div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center w-fit gap-2 border border-[#ffb703] text-[#0f4a85] font-medium px-4 py-2 rounded-md group hover:bg-[#ffb703] transition-colors"
                >
                  <span className="p-1 rounded-md bg-[#ffb703] group-hover:bg-white">
                    <PdfSvgIcon />
                  </span>
                  DOWNLOAD PDF
                </a>
              </div>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default AdmissionProcessSection;
