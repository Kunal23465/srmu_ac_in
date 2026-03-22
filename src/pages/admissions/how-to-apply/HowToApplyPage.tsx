import React from 'react'
import HowToApply from '../../../components/admissions/how-to-apply/HowToApply'
import SeoHead from '../../../components/seo/SeoHead'

const HowToApplyPage: React.FC = () => {
  return (
    <div>
      <SeoHead
        title="Application Guide: Online and Offline Admission Procedures | SRMU"
        description="To begin your application to Shri Ramswaroop Memorial University (SRMU), visit the official university website and access the Admissions or Apply Now section for comprehensive details on the application procedure."
        pathname="/how-to-apply"
      />
      <HowToApply /></div>
  )
}

export default HowToApplyPage
