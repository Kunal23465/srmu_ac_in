import React from 'react'
import GrievanceRedressalSystem from '../../../components/campus-life/grievance-redressal-system/GrievanceRedressalSystem'
import { Helmet } from 'react-helmet-async'

const GrievanceRedressalSystemPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Grievance Redressal System | Shri Ramswaroop Memorial University, Lucknow</title>
        <meta name="description" content="Shri Ramswaroop Memorial University (SRMU) has implemented a strong system for addressing grievances, with the goal of fairly and transparently resolving issues raised by students, faculty, and staff." />
      </Helmet>
      <GrievanceRedressalSystem />
    </>

  )
}

export default GrievanceRedressalSystemPage