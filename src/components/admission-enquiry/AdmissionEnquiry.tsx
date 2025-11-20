


import React from "react";
import Classes from "../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import {
    admissionEnquiryData,
    admissionEnquiryOverviewData,
} from "../../data/admission-enquiry/admission-enquiry-data";
import AdmissionCard from "./AdmissionCard";
import AdmissionEnquiryForm from "./AdmissionEnquiryForm";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { alumniRegistrationTopFooterData } from "../../data/placement/placementData";

const AdmissionEnquiry: React.FC = () => {
    return (
        <>
            <div className={`${Classes["container"]}`}>
                <CustomOverviewSection data={admissionEnquiryOverviewData} />
            </div>

            {/* WRAPPER */}
            <div

            >
                {/* Cards */}
                <AdmissionCard admissionEnquiryData={admissionEnquiryData} />
            </div>

            <div className={`${Classes["container"]} xl:mt-[-100px] lg:mt-[-30px] mt-[100px] `}>
                <AdmissionEnquiryForm />
            </div>

            <CustomTopFooter data={alumniRegistrationTopFooterData} />
        </>
    );
};

export default AdmissionEnquiry;
