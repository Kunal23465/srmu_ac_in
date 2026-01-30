import React from 'react'
import AlumniRegistration from '../../components/placement/alumni-registration/AlumniRegistration'
import { Helmet } from 'react-helmet-async'

const AlumniRegistrationPage: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Alumni Registration | Shri Ramswaroop Memorial University, Lucknow</title>
        <meta name="description" content="Join the SRMU Alumni Network today and stay connected with Shri Ramswaroop Memorial University, Lucknow!" />
      </Helmet>
      <AlumniRegistration />
    </div>
  )
}

export default AlumniRegistrationPage
