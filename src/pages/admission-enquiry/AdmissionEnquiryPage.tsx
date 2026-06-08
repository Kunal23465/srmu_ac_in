import React from 'react'
import AdmissionEnquiry from '../../components/admission-enquiry/AdmissionEnquiry'
import SeoHead from '../../components/seo/SeoHead'

const AdmissionEnquiryPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title={`Admission Enquiry 2026 | Enquiry Form 2026 | SRMU`}
        description=" Looking for admission in 2026? Fill out the SRMU Admission Enquiry Form to receive details on programs, eligibility, fees, and scholarships."
        pathname="/admission-enquiry-redirect"
      />
      <AdmissionEnquiry />
    </>

  )
}

export default AdmissionEnquiryPage