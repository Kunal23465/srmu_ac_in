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
            <h2 className="text-5xl font-semibold">Recent Copyrights</h2>
            <p className="text-lg mt-2">Recent copyrights at SRMU, that reflect the institution's commitment to protecting and acknowledging original research work.</p>
          </div>

          <div className="overflow-x-auto w-full pb-10 mt-10">
            <table className="min-w-full border-separate border-spacing-y-4">
              {/* HEADER */}
              <thead>
                <tr className="bg-yellow-500 text-black rounded-lg">
                  <th className="py-4 px-6 text-left rounded-l-lg border-r border-white/40 font-semibold">TITLE OF WORK</th>
                  <th className="py-4 px-6 text-left border-r border-white/40 font-semibold">REGISTRANT NUMBER</th>
                  <th className="py-4 px-6 text-left rounded-r-lg font-semibold">APPLICANT</th>
                </tr>
              </thead>

              {/* BODY */}
              <tbody>
                {copyrightsData.map((item, index) => (
                  <tr key={index} className="bg-[#faf7ef] rounded-lg shadow-md text-black">
                    <td className="py-4 px-6 rounded-l-lg border-r border-gray-300">{item.year}</td>

                    <td className="py-4 px-6 border-r border-gray-300">{item.registrant}</td>

                    <td className="py-4 px-6 rounded-r-lg">{item.applicant}</td>
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
