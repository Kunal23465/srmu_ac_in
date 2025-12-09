import React from 'react'
import { institutionCouncilData } from '../../../../data/research/process-and-initiatives/process-and-initiatives-data';
import { PdfSvgIcon } from '../../../about/recognition-approval/ApprovalSlider';
import Classes from "../../../../utils/styles/Global.module.css";

const InstitutionCouncilSection: React.FC = () => {
    const { title, description, imageUrl, pdfUrl } = institutionCouncilData;
  return (
    <section className="bg-white py-12 md:py-16 lg:py-25">
              <div className={Classes["container"]}>

      <div className="container flex flex-col lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex ">
          <img src={imageUrl} alt={title} className="shadow-lg w-full max-w-[500px] object-cover" />
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 space-y-3 lg:space-y-6 ">
          <h2 className="text-3xl w-full lg:w-3/4 lg::text-5xl font-medium text-black">{title}</h2>
          <p className="text-gray-700 w-full lg:w-[60%] mb-10 lg:mb-20 text-sm! lg:text-base! leading-relaxed">{description}</p>

          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#0f4a85] border-2 border-[#ffb703] text-white font-semibold uppercase py-2 px-4 rounded-lg group hover:bg-white hover:text-[#0f4a85] transition-colors duration-500 w-fit"
          >
            <span className="p-1 rounded-lg bg-white group-hover:bg-[#ffb703]">
                            <PdfSvgIcon /></span>
            Download PDF
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}

export default InstitutionCouncilSection
