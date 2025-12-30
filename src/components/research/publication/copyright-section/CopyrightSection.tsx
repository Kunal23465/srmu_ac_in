import React from "react";
import bgImage from "../../../../assets/images/research/overview/facilities-bg-lg.jpeg";
import Classes from "../../../../utils/styles/Global.module.css";
const copyrightsData = [
  { year: 2022, registrant: "Ritika Deundi", applicant: "Ritika Deundi" },
  { year: 2022, registrant: "Ritika Deundi", applicant: "Ritika Deundi" },

];

const CopyrightSection:React.FC = () => {
    return (
      <div className=" text-white px-8 py-20" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className={Classes["container"]}>
          <div className="mb-6 text-center">
            <h2 className="text-[28px] lg:text-[3.125rem] fw500">Recent Copyrights</h2>
            <p className="w-full md:w-3/4 mx-auto mt-2 lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px]">
              Recent copyrights at SRMU, that reflect the institution's commitment to protecting and acknowledging original research work.
            </p>
          </div>

          <div className="overflow-x-auto w-full md:w-3/4 mx-auto pb-10 mt-10">
            <table className="min-w-full border-separate text-center border-spacing-y-4">
              {/* HEADER */}
              <thead>
                <tr className="bg-[#ffb703] text-black rounded-lg">
                  <th className="py-4 px-6 lg:text-[13px] md:text-[12.195px] sm:text-[11.382px] text-[11.382px] rounded-l-lg border-r-2 border-white/40 font-semibold">
                    TITLE OF WORK
                  </th>
                  <th className="py-4 px-6 lg:text-[13px] md:text-[12.195px] sm:text-[11.382px] text-[11.382px] border-r-2 border-white/40 font-semibold">REGISTRANT NUMBER</th>
                  <th className="py-4 px-6 lg:text-[13px] md:text-[12.195px] sm:text-[11.382px] text-[11.382px] rounded-r-lg font-semibold">APPLICANT</th>
                </tr>
              </thead>

              {/* BODY */}
              <tbody>
                {copyrightsData.map((item, index) => (
                  <tr key={index} className="bg-[#fff9eb] rounded-lg shadow-md text-black">
                    <td className="py-4 px-6 lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] rounded-l-lg border-r-2 border-[#ffb703]">{item.year}</td>

                    <td className="py-4 px-6 lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] border-r-2 border-[#ffb703]">{item.registrant}</td>

                    <td className="py-4 px-6 lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] rounded-r-lg">{item.applicant}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default CopyrightSection;
