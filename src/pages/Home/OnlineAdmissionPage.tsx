import { FC } from 'react'
import OnlineAdmission from '../../components/home/OnlineAdmission'
import SeoHead from '../../components/seo/SeoHead'

const OnlineAdmissionPage:FC = () => {
  return (
    <div>
      <SeoHead
        title="Online Application & Counselling Registration Portal 2026 | Shri Ramswaroop Memorial University, Lucknow"
        description="Experience seamless registration for SRMU Lucknow's 2026 Online Application & Counselling through our user-friendly portal!"
        pathname="/online-admission"
      />
      <OnlineAdmission/>
    </div>
  )
}

export default OnlineAdmissionPage
