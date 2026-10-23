import SeoHead from "../../../components/seo/SeoHead";
import StudentCornerNew from "../../../components/campus-life/student-corner/StudentCornerNew";

export default function StudentCornerNewPage() {
  return (
    <>
      <SeoHead
        title="Student Corner | Shri Ramswaroop Memorial University, Lucknow"
        description="Browse SRMU student policies, welfare resources, payment guides and tutorials for campus life."
        pathname="/student-corner-new"
      />
      <StudentCornerNew />
    </>
  );
}
