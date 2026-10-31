import React from 'react'
import AdmissionEnquiry from '../../components/admission-enquiry/AdmissionEnquiry'
import SeoHead from '../../components/seo/SeoHead'

const AdmissionEnquiryPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title={`Admission Enquiry 2027 | Enquiry Form 2027 | SRMU`}
        description=" Looking for admission in 2027? Fill out the SRMU Admission Enquiry Form to receive details on programs, eligibility, fees, and scholarships."
        pathname="/admission-enquiry"
      />
      <AdmissionEnquiry />
    </>

  )
}

export default AdmissionEnquiryPage