import SeoHead from "../../../components/seo/SeoHead";
import StudentSenateNew from "../../../components/campus-life/student-senate/StudentSenateNew";

export default function StudentSenateNewPage() {
  return (
    <>
      <SeoHead
        title="Student Senate | Shri Ramswaroop Memorial University, Lucknow"
        description="Learn how the SRMU Student Senate represents student voices, discusses campus concerns and works with university authorities."
        pathname="/student-senate-new"
      />
      <StudentSenateNew />
    </>
  );
}
