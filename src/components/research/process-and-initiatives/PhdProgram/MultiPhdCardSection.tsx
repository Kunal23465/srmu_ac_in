import React from "react";
import { phdPdfResources } from "../../../../data/research/process-and-initiatives/process-and-initiatives-data";
import { FaRegFilePdf } from "react-icons/fa";
import Classes from "../../../../utils/styles/Global.module.css";
const MultiPhdCardSection: React.FC = () => {
  return (
    <div className={`${Classes["container"]}  py-16`}>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {phdPdfResources.map((item, index) => (
          <div key={index} className="flex flex-col justify-between  items-center bg-white shadow-lg rounded-xl py-14 px-10 text-center hover:shadow-2xl transition-shadow">
            <div className="">
              <h4 className="font-semibold text-lg mb-4">{item.title}</h4>
              <p className="text-sm!">{item.description}</p>
            </div>
            <div className="mt-4">
              <a
                href={item.link}
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

export default MultiPhdCardSection;
