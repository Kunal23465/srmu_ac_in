import React from 'react'
import AdmissionPolicy from '../../../components/admissions/admission-policy/AdmissionPolicy'
import SeoHead from '../../../components/seo/SeoHead'

const AdmissionPolicyPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Admission Policies 2026, Admission Brochure 2026 | Shri Ramswaroop Memorial University, Lucknow"
        description="The university's admission policies outline the guidelines and practices for student applications and admittance into its various programs via an open and responsible admissions process."
        pathname="/admission-policies"
      />
      <AdmissionPolicy />
    </>

  )
}

export default AdmissionPolicyPage
