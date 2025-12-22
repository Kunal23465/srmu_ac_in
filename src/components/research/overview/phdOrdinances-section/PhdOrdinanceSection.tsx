import React from "react";
// @ts-ignore
import { FaRegFilePdf } from "react-icons/fa";
import { phdOrdinanceData } from "../../../../data/research/overview/research-overview-data";
import Classes from "../../../../utils/styles/Global.module.css";
import { PdfSvgIcon } from "../../../about/recognition-approval/ApprovalSlider";


const PhdOrdinanceSection: React.FC = () => {
  const { title, description, imageUrl, pdfUrl } = phdOrdinanceData;

  return (
    <section className="py-12 md:py-16 lg:py-20">
            <div className={`${Classes["container"]}`}>
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6 ">
          <h2 className="text-3xl md:text-4xl font-medium text-[#0f4a85]">{title}</h2>
          <p className="text-gray-700 text-base leading-relaxed">{description}</p>

          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#0f4a85] border-2 border-[#ffb703] text-white font-medium uppercase py-2 px-4 rounded-lg group hover:bg-white hover:text-[#0f4a85] transition-colors duration-200 w-fit"
          >
            <span className="bg-white p-1 rounded-lg transition-all duration-500 group-hover:bg-[#ffb703]"><PdfSvgIcon /></span>
            Download PDF
          </a>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img src={imageUrl} alt={title} className="rounded-2xl shadow-lg w-full max-w-[500px] object-cover" />
        </div>
      </div></div>
    </section>
  );
};

export default PhdOrdinanceSection;
