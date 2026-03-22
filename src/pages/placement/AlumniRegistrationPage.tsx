import React from 'react'
import AlumniRegistration from '../../components/placement/alumni-registration/AlumniRegistration'
import SeoHead from '../../components/seo/SeoHead'

const AlumniRegistrationPage: React.FC = () => {
  return (
    <div>
      <SeoHead
        title="Alumni Registration | Shri Ramswaroop Memorial University, Lucknow"
        description="Join the SRMU Alumni Network today and stay connected with Shri Ramswaroop Memorial University, Lucknow!"
        pathname="/alumni-registration"
      />
      <AlumniRegistration />
    </div>
  )
}

export default AlumniRegistrationPage
