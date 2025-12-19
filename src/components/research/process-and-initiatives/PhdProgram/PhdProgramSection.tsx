import React from "react";
import Classes from "../../../../utils/styles/Global.module.css";
import bgImage from "../../../../assets/images/research/overview/facilities-bg-lg.jpeg";
const PhdProgramSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden text-white" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0"></div>

      {/* Content */}
            <div className={`${Classes["container"]}`}>

      <div className="relative z-10 flex flex-col items-center justify-center text-center py-16 px-6 md:py-20">
        <h2 className="text-3xl md:text-5xl font-medium text-[#ffb703] mb-6">Ph.D. Program</h2>
        <p className="max-w-3xl text-sm md:text-base leading-relaxed">
          SRMU's Ph.D. program provides a rigorous and research-intensive environment, offering aspiring scholars the opportunity to delve into advanced studies, contribute to
          knowledge creation, and make impactful contributions to their respective fields.
        </p>
      </div></div>
    </section>
  );
};

export default PhdProgramSection;
