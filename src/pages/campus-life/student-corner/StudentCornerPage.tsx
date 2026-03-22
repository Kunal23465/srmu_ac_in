import React from 'react'
import StudentCornerComp from '../../../components/campus-life/student-corner/StudentCornerComp'
import SeoHead from '../../../components/seo/SeoHead'

const StudentCornerPage:React.FC = () => {
  return (
    <div>
      <SeoHead
        title="Student Corner | Shri Ramswaroop Memorial University, Lucknow"
        description="This section serves as a valuable resource for students seeking information and guidelines regarding learning, student welfare, discipline, code of conduct, and grievance redressal."
        pathname="/student-corner"
      />
        <StudentCornerComp/>
    </div>
  )
}

export default StudentCornerPage
