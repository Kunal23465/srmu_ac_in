import StudentSenateComp from '../../../components/campus-life/student-senate/StudentSenateComp'
import SeoHead from '../../../components/seo/SeoHead'

const StudentSenatePage = () => {
    return (
        <div>
            <SeoHead
                title="Student Senate | Shri Ramswaroop Memorial University, Lucknow"
                description="The SRMU Student Senate is an autonomous student organization dedicated to resolving academic and administrative issues by fostering constructive dialogue with university officials."
                pathname="/student-senate"
            />
            <StudentSenateComp />
            </div>
    )
}

export default StudentSenatePage
