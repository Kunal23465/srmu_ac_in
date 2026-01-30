import React from 'react'
import StudentCornerComp from '../../../components/campus-life/student-corner/StudentCornerComp'
import { Helmet } from 'react-helmet-async'

const StudentCornerPage:React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Student Corner | Shri Ramswaroop Memorial University, Lucknow</title>
        <meta name="description" content="This section serves as a valuable resource for students seeking information and guidelines regarding learning, student welfare, discipline, code of conduct, and grievance redressal. Its main goal is to help students access essential information related to their academic journey." />
      </Helmet>
        <StudentCornerComp/>
    </div>
  )
}

export default StudentCornerPage