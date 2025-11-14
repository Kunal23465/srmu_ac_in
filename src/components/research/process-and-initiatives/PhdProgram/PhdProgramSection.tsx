import React from "react";
import bgImage from "../../../../assets/images/research/overview/facilities-bg-lg.jpeg";
const PhdProgramSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden text-white" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center py-16 px-6 md:py-24">
        <h2 className="text-3xl md:text-5xl font-bold text-[#ffb703] mb-6">Ph.D. Program</h2>
        <p className="max-w-3xl text-base md:text-lg leading-relaxed">
          SRMU's Ph.D. program provides a rigorous and research-intensive environment, offering aspiring scholars the opportunity to delve into advanced studies, contribute to
          knowledge creation, and make impactful contributions to their respective fields.
        </p>
      </div>
    </section>
  );
};

export default PhdProgramSection;
