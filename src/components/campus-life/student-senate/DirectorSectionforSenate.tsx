import React from "react";
import { directorData } from "../../../data/campus-life/student-senate/student-senate-data";

const DirectorSectionforSenate: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 md:px-10 xl:px-0 flex justify-center">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row gap-10">

          <div className="relative w-fit">
            <div className="hidden lg:block absolute right-[28%] bottom-[42%] w-[80%] h-[43%] border-l-15 border-b-15 border-[#ffb703]" />

            <img
              src={directorData.image}
              alt="Director"
              className="w-60 sm:w-80 md:w-90 h-auto object-cover border-15 border-white"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-[18px] md:text-[16.875px] sm:text-[15.75px] fw600 text-gray-700">Director's Brief Profile</h2>

            <h1 className="fw500 lg:text-[60px] md:text-[56.25px] text-[35px] sm:text-[35px]">
              {directorData.name}
            </h1>

            <p className="text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px]">{directorData.designation}</p>

            <div className="mt-6 space-y-4 items-center">

              <div className="grid grid-cols-[153px_1fr] sm:grid-cols-[160px_1fr] gap-1 sm:gap-4 lg:gap-4">
                <span className="fw500  py-1.5 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[#0f4a85]">Qualification:</span>
                <div className="inline-flex text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] items-center bg-white px-2 md:px-3 py-2 md:py-1.5 text:sm">
                  {directorData.qualification}
                </div>
              </div>
              <div className="grid grid-cols-[140px_1fr] sm:grid-cols-[160px_1fr] gap-4">
                <span className="fw500 py-1.5 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[#0f4a85]">Experience:</span>
                <div className="inline-flex text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] items-center px-2 md:px-3 py-2 md:py-1.5 text:sm">
                  {directorData.experience}
                </div>
              </div>

              <div className="grid grid-cols-[140px_1fr] sm:grid-cols-[160px_1fr] gap-4">
                <span className="fw500 py-1.5 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[#0f4a85]">Ph.D Guided:</span>
                <div className="inline-flex text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] items-center bg-white px-2 md:px-3 py-2 md:py-1.5 text:sm">
                  {directorData.phdGuided}
                </div>
              </div>
              <div className="grid grid-cols-[140px_1fr] sm:grid-cols-[160px_1fr] gap-4">
                <span className="fw500 py-1.5 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[#0f4a85]">E-mail:</span>
                <div className="inline-flex text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] items-center px-2 md:px-3 py-2 md:py-1.5 text:sm break-all">
                  {directorData.email}
                </div>

              </div>

              <div className="grid grid-cols-[140px_1fr] sm:grid-cols-[160px_1fr] gap-4">
                <span className="fw500 py-1.5 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[#0f4a85]">Contact No.:</span>
                <div className="inline-flex text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] items-center bg-white px-2 md:px-3 py-2 md:py-1.5 text:sm">
                  {directorData.contact}
                </div>
              </div>

              <div className="grid grid-cols-[140px_1fr] sm:grid-cols-[160px_1fr] gap-4">
                <span className="fw500 py-1.5 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[#0f4a85]">Extension No.:</span>
                <div className="inline-flex items-center text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] px-2 md:px-3 py-2 md:py-1.5 text:sm">
                  {directorData.extension}
                </div>
              </div>

              <div className="grid grid-cols-[140px_1fr] sm:grid-cols-[160px_1fr] gap-4">
                <span className="fw500 py-1.5 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[#0f4a85]">ORCID Link:</span>
                <a
                  href={directorData.orcid}
                  target="_blank"
                  className="inline-flex items-center text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] bg-white px-2 md:px-3 py-2 md:py-1.5 text:sm underline break-all"
                >
                  {directorData.orcid}
                </a>
              </div>

            </div>
          </div>
        </div>

        <div className="mt-12 space-y-6 leading-relaxed">
          {directorData.bio.map((paragraph, idx) => (
            <p className="text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-justify" key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectorSectionforSenate;
