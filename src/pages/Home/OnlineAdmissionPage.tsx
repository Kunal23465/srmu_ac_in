import { FC } from 'react'
import OnlineAdmission from '../../components/home/OnlineAdmission'
import { Helmet } from 'react-helmet-async'

const OnlineAdmissionPage:FC = () => {
  return (
    <div>
      <Helmet>
        <title>Online Application &amp; Counselling Registration Portal 2026 | Shri Ramswaroop Memorial University, Lucknow</title>
        <meta name="description" content="Experience seamless registration for SRMU Lucknow&#039;s 2026 Online Application &amp; Counselling through our user-friendly portal!" />
      </Helmet>
      <OnlineAdmission/>
    </div>
  )
}

export default OnlineAdmissionPage
