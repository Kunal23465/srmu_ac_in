import React from "react";
import { AdmissionEnquiryItem } from "../../data/admission-enquiry/admission-enquiry-data";

interface cardtype {
    admissionEnquiryData: AdmissionEnquiryItem[];
}

const AdmissionCard: React.FC<cardtype> = ({ admissionEnquiryData }) => {
    return (
        <div className="bg-[#0f4a85] py-18 min-h-[500px]  mt-14">
            <div className="w-full mx-auto flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-center gap-6 px-4">

                {admissionEnquiryData.map((item: AdmissionEnquiryItem) => (
                    <div
                        key={item.id}
                        className="
              block rounded-[10px] bg-white shadow-[0_4px_16px_rgba(0,0,0,0.16)]
              px-8 py-5 w-full max-w-[385px] h-[220px] text-center
              border-t-[5px] border-b-[5px]
              border-t-[#0f4a85] border-b-[#ffb703]
              transition-all duration-500 ease-out
              hover:-translate-y-2 hover:shadow-xl
              flex flex-col items-center justify-center
            "
                    >
                        <div className="h-14 w-14 rounded-full bg-[#ffb703] flex items-center justify-center">

                            <span >
                                {item.icon}
                            </span>
                        </div>

                        <h2 className="text-[20px] font-semibold mt-4">
                            {item.title}
                        </h2>

                        <p className="text-[15px] mt-2 leading-snug whitespace-pre-line">
                            {item.description}
                        </p>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default AdmissionCard;
