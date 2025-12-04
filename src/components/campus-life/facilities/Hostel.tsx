import React from "react";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { NoticeTopFooterData } from "../../../data/notice/NoticeData";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import Classes from "../../../utils/styles/Global.module.css";
import { hostelOverviewData, hostelTermsData, HostelType } from "../../../data/campus-life/facilities/hostel-data";

const Hostel: React.FC = () => {
    return (
        <>
            <div className={Classes["container"]}>
                <CustomOverviewSection data={hostelOverviewData} />

                {hostelTermsData.map((item: HostelType, index: number) => (
                    <div key={index} className="mb-10">

                        {item.description && (
                            <p className="mt-3 text-gray-700 leading-6 whitespace-pre-line">
                                {item.description.replace(/\\/g, "\n")}
                            </p>
                        )}

                        {item.title && (
                            <h2 className="text-[15px] text-[#212529] font-medium my-3">
                                {item.title}
                            </h2>
                        )}

                        {item.listItems && item.listItems.length > 0 && (
                            <ul className="list-disc ml-6 space-y-2">
                                {item.listItems.map((point, idx) => (
                                    <li key={idx} className="text-gray-700 leading-6">
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        )}

                    </div>
                ))}
            </div>

            <CustomTopFooter data={NoticeTopFooterData} />
        </>
    );
};

export default Hostel;
