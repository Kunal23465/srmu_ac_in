import React from 'react'
import GrievanceRedressalSystem from '../../../components/campus-life/grievance-redressal-system/GrievanceRedressalSystem'
import SeoHead from '../../../components/seo/SeoHead'

const GrievanceRedressalSystemPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Grievance Redressal System | Shri Ramswaroop Memorial University, Lucknow"
        description="Shri Ramswaroop Memorial University (SRMU) has implemented a strong system for addressing grievances, with the goal of fairly and transparently resolving issues raised by students, faculty, and staff."
        pathname="/campus-life/grievance-redressal-system"
      />


      <GrievanceRedressalSystem />
    </>

  )
}

export default GrievanceRedressalSystemPage
