import React from "react";
import { associationsData } from "../../../data/about/recognition-approval/recognitionApprovalsData";

const AssociationsMemberships:React.FC = () => {
    const PdfSvgIcon: React.FC = () => (
  <svg viewBox="0 0 78.7 76.2" xmlns="http://www.w3.org/2000/svg" style={{ width: "20px", height: "20px" }}>
    <g>
      <path
        d="M63.6,43.8c-2.5,0-5.5,0.2-8.7,0.6L50.3,45l-3.8-4.7c-2.2-2.7-4.6-6-5.5-7.5l-1.4-2.4l1.7-6.4c2.2-8.4,2.4-15.1,0.4-18.9
        c-1.3-2.6-3.7-4.2-6.3-4.2c-2.3,0-4.2,1.3-5.1,3.5c-1.4,3.3-0.7,12.3,1.4,18.5l1.6,4.5L31,33.6c-1.3,3.4-3.8,9.3-5.4,12.9l-2.8,6.3
        l-7.4,3.7C6.5,60.9,1.7,65.1,1,69c-0.3,1.7,0.2,3.2,1.6,4.6c1.1,1.1,2.8,1.7,4.7,1.7c2.1,0,4.3-0.7,6.5-1.9
        c3.7-2.1,8.6-7.7,13.1-14.9c1-1.5,2.3-3.5,2.8-4.2l0.3-0.1c4.7-1.6,6.3-2.2,9.6-3c2.8-0.7,8.1-1.8,9.6-2.1c0.6,0.6,2,1.9,3.9,3.2
        c5,3.5,11.1,5.6,16.1,5.6c5.3,0,8.6-2.3,8.6-6C77.7,48.2,75.3,43.8,63.6,43.8z"
      />
    </g>
  </svg>
);
    return (
        <section className="pb-16 pt-10 bg-white text-center">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-medium mt-25 sm:mt-20 lg:mb-15  mb-4">
                    ASSOCIATIONS & MEMBERSHIPS
                </h2>
                <p className="text-gray-700 mb-10">
                    SRMU is a part of a diverse set of networks and associations.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {associationsData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white shadow-xl hover:-translate-y-2  rounded-sm p-6 flex flex-col items-center justify-between transition-all duration-500"
                        >
                            <img
                                src={item.logo}
                                alt={item.name}
                                className="h-20 object-contain mb-4"
                            />
                            <h3 className="text-lg font-semibold text-gray-800 text-center mb-4">
                                {item.name}
                            </h3>
                         <a
                        href={item.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group text-sm flex items-center justify-center gap-2 border border-[#ffb703] bg-white hover:bg-[#ffb703] text-[#0f4a85]
             font-medium px-2 py-1 rounded-lg transition-all duration-500"
                      >
                        <span
                          className="bg-[#ffb703] p-1 rounded-md transition-all group-hover:bg-white"
                        >
                          <PdfSvgIcon />
                        </span>
                        DOWNLOAD PDF
                      </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AssociationsMemberships;
