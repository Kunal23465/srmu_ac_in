import React from "react";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import Classes from "../../../utils/styles/Global.module.css";
import { studentTestimonialOverviewData, StudentTestimonialTopFooterData } from "../../../data/placement/placementData";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import CustomTestimonial from "../../../utils/custom/CustomTestimonial";
import { testimonialCardData } from "../../../data/placement/student-testimonial/testimonialcardData";
const StudentTestimonial: React.FC = () => {
  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={studentTestimonialOverviewData} />

        <CustomTestimonial data={testimonialCardData}/>
        
      </div>
      <CustomTopFooter data={StudentTestimonialTopFooterData} />
    </div>
  );
};

export default StudentTestimonial;