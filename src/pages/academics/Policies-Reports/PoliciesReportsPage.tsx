import React from 'react'
import PolicyReports from '../../../components/academics/policy-reports/PolicyReports'
import { Helmet } from 'react-helmet-async'

const PoliciesReportsPage:React.FC = () => {
  return (
    <>
    <div>
      <Helmet>
          <title>Our Policies | | Shri Ramswaroop Memorial University, Lucknow</title>
          <meta name="description" content="The primary objective of Shri Ramswaroop Memorial University is to foster an atmosphere that values diversity and is open, transparent, and accepting of all individuals." />
      </Helmet>
      <PolicyReports/>
    </div>
    </>
  )
}

export default PoliciesReportsPage