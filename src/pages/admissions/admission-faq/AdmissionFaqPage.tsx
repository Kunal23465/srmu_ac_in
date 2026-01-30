import React from 'react'
import AdmissionFaq from '../../../components/admissions/admission-faq/AdmissionFaq'
import { Helmet } from 'react-helmet-async'

const AdmissionFaqPage: React.FC = () => {
  return (
    <>

      <Helmet>
        <title>Admission FAQs | Shri Ramswaroop Memorial University, Lucknow</title>
        <meta name="description" content="SRMU is one of the best Engineering, Management, Pharmacy, Law, Arts, Science &amp; Commerce Colleges in Lucknow, Uttar Pradesh. University is well known for its unique teaching methodologies, curriculum, research, etc. Find more about course details, fee structure, eligibility, etc." />
      </Helmet>
      <AdmissionFaq />
    </>

  )
}

export default AdmissionFaqPage