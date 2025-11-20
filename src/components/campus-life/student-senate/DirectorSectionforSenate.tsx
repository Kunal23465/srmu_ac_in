import React from "react";
import { directorData } from "../../../data/campus-life/student-senate/student-senate-data";

const DirectorSectionforSenate: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 flex justify-center">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row gap-10">

          <div className="relative w-fit">
            <div className="hidden lg:block absolute right-30 bottom-70 w-40 h-24 border-l-15 border-b-15 border-[#ffb703]" />

            <img
              src={directorData.image}
              alt="Director"
              className="w-48 sm:w-56 md:w-64 h-auto object-cover border-15 border-white"
            />
          </div>

          <div className="flex-1">
            <h2 className="font18 fw600 text-gray-700">Director's Brief Profile</h2>

            <h1 className="fw500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              {directorData.name}
            </h1>

            <p className="">{directorData.designation}</p>

            <div className="mt-6 space-y-4 items-center">

              <div className="grid grid-cols-[140px_1fr] sm:grid-cols-[160px_1fr] gap-4">
                <span className="fw500 py-1.5 text-[#0f4a85]">Qualification:</span>
                <div className="inline-flex items-center bg-white px-3 py-1.5">
                  {directorData.qualification}
                </div>
              </div>
              <div className="grid grid-cols-[140px_1fr] sm:grid-cols-[160px_1fr] gap-4">
                <span className="fw500 py-1.5 text-[#0f4a85]">Experience:</span>
                <div className="inline-flex items-center px-3 py-1.5">
                  {directorData.experience}
                </div>
              </div>

              <div className="grid grid-cols-[140px_1fr] sm:grid-cols-[160px_1fr] gap-4">
                <span className="fw500 py-1.5 text-[#0f4a85]">Ph.D Guided:</span>
                <div className="inline-flex items-center bg-white px-3 py-1.5">
                  {directorData.phdGuided}
                </div>
              </div>
              <div className="grid grid-cols-[140px_1fr] sm:grid-cols-[160px_1fr] gap-4">
                <span className="fw500 py-1.5 text-[#0f4a85]">E-mail:</span>
                <div className="inline-flex items-center px-3 py-1.5">
                  {directorData.email}
                </div>
              </div>

              <div className="grid grid-cols-[140px_1fr] sm:grid-cols-[160px_1fr] gap-4">
                <span className="fw500 py-1.5 text-[#0f4a85]">Contact No.:</span>
                <div className="inline-flex items-center bg-white px-3 py-1.5">
                  {directorData.contact}
                </div>
              </div>

              <div className="grid grid-cols-[140px_1fr] sm:grid-cols-[160px_1fr] gap-4">
                <span className="fw500 py-1.5 text-[#0f4a85]">Extension No.:</span>
                <div className="inline-flex items-center px-3 py-1.5">
                  {directorData.extension}
                </div>
              </div>

              <div className="grid grid-cols-[140px_1fr] sm:grid-cols-[160px_1fr] gap-4">
                <span className="fw500 py-1.5 text-[#0f4a85]">ORCID Link:</span>
                <a
                  href={directorData.orcid}
                  target="_blank"
                  className="inline-flex items-center bg-white px-3 py-1.5 underline break-all"
                >
                  {directorData.orcid}
                </a>
              </div>

            </div>
          </div>
        </div>

        <div className="mt-12 space-y-6 leading-relaxed">
          {directorData.bio.map((paragraph, idx) => (
            <p className="font16 text-justify" key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectorSectionforSenate;
