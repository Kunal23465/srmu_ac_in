import React, { useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import { admissionProcessData, pdfResources } from "../../../../data/research/process-and-initiatives/process-and-initiatives-data";
import Classes from "../../../../utils/styles/Global.module.css";

const AdmissionProcessSection: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-[#f4f6fb]">
      <section className={`${Classes["container"]} py-16 px-6 md:px-16`}>
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f4a85] mb-6">{admissionProcessData.title}</h2>

        {/* Short Description */}
        <div className="text-gray-800 space-y-4 mb-6">
          {admissionProcessData.shortDescription.map((item, index) => (
            <div key={index}>
              <h3 className="font-semibold">{item.subHeading}</h3>
              <p className="text-sm!">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Expanded Full Details */}
        {showMore && (
          <div className="text-gray-800 space-y-4 mb-6 animate-fadeIn">
            {admissionProcessData.fullDetails?.map((item, index) => (
              <div key={index}>
                <h3 className="font-semibold">{item.subHeading}</h3>
                <p className="whitespace-pre-line text-sm!">{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {/* Read More / Read Less Toggle */}
        <button onClick={() => setShowMore(!showMore)} className="text-[#0f4a85] font-semibold hover:underline block mb-10 transition-colors">
          {showMore ? "READ LESS" : "READ MORE"}
        </button>

        {/* PDF Resource Cards */}
        <div className="flex justify-center sm:justify-start items-center gap-8 flex-wrap">
          {pdfResources.map((item, index) => (
            <div key={index} className="w-80 bg-white shadow-lg rounded-xl py-14 px-10 text-center hover:shadow-2xl transition-shadow">
              <h4 className="font-semibold text-lg mb-4">{item.title}</h4>
              <div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center w-fit gap-2 border border-[#ffb703] text-[#0f4a85] font-medium px-4 py-2 rounded-md hover:bg-[#ffb703] hover:text-white transition-colors"
                >
                  <FaFilePdf className="text-[#ffb703]" />
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
