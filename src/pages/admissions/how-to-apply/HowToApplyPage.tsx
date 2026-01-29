import React from 'react'
import HowToApply from '../../../components/admissions/how-to-apply/HowToApply'
import { Helmet } from 'react-helmet-async'

const HowToApplyPage:React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Application Guide: Online and Offline Admission Procedures | SRMU</title>
        <meta name="description" content="To begin your application to Shri Ramswaroop Memorial University (SRMU), visit the official university website and access the &quot;Admissions&quot; or &quot;Apply Now&quot; section for comprehensive details on the application procedure." />

      </Helmet>
      <HowToApply /></div>
  )
}

export default HowToApplyPage