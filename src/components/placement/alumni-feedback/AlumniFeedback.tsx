import { FC } from "react";
import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../scholarship/ScholarshipOverviewSection";
import { aluminiFeedbackOverviewData } from "../../../data/placement/alumni-feedback-data";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { instituteFooterData } from "../../../data/academics/institute/department-of-electrical-and-electronics-engineering-data";
import AlumniFeedbackForm from "./AlumniFeedbackForm";

const AlumniFeedback: FC = () => {
  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={aluminiFeedbackOverviewData} />
        <AlumniFeedbackForm />
      </div>
      <CustomTopFooter data={instituteFooterData} />
    </div>
  );
};

export default AlumniFeedback;
