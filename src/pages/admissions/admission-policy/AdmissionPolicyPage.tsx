import React from 'react'
import AdmissionPolicy from '../../../components/admissions/admission-policy/AdmissionPolicy'
import { Helmet } from 'react-helmet-async'

const AdmissionPolicyPage: React.FC = () => {
  return (
    <>

      <Helmet>
        <title>Admission Policies 2026, Admission Brochure 2026 | Shri Ramswaroop Memorial University, Lucknow</title>
        <meta name="description" content="The university&#039;s admission policies outline the guidelines and practices for student applications and admittance into its various programs via an open and responsible admissions process." />
      </Helmet>
      <AdmissionPolicy />
    </>

  )
}

export default AdmissionPolicyPage