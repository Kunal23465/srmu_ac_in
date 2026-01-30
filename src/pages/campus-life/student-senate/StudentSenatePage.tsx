import { Helmet } from 'react-helmet-async'
import StudentSenateComp from '../../../components/campus-life/student-senate/StudentSenateComp'

const StudentSenatePage = () => {
    return (
        <div>
            <Helmet>
                <title>Student Senate | Shri Ramswaroop Memorial University, Lucknow</title>
                <meta name="description" content="The SRMU Student Senate is an autonomous student organization dedicated to resolving academic and administrative issues by fostering constructive dialogues with university officials to achieve amicable solutions." />
            </Helmet>
            <StudentSenateComp />
            </div>
    )
}

export default StudentSenatePage