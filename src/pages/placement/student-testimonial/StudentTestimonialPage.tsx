import React from "react";
import StudentTestimonial from "../../../components/placement/student-testimonail/StudentTestimonial";
import SeoHead from "../../../components/seo/SeoHead";

const StudentTestimonialPage: React.FC = () => {
  return (
    <div>
      <SeoHead
        title="All Testimonial | Shri Ramswaroop Memorial University, Lucknow"
        description="Student testimonials provide invaluable insights into an institution's educational experience, showcasing the impact of academic programs, faculty involvement, and the campus environment."
        pathname="/all-testimonial"
      />
      <StudentTestimonial />
    </div>
  );
};

export default StudentTestimonialPage;
