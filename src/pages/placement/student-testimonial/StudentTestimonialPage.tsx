import React from "react";
import StudentTestimonial from "../../../components/placement/student-testimonail/StudentTestimonial";
import { Helmet } from "react-helmet-async";

const StudentTestimonialPage: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>All Testimonial | Shri Ramswaroop Memorial University, Lucknow</title>
        <meta name="description" content="Student testimonials provide invaluable insights into an institution&#039;s educational experience, showcasing the impact of academic programs, faculty involvement, and the campus environment." />
      </Helmet>
      <StudentTestimonial />
    </div>
  );
};

export default StudentTestimonialPage;
