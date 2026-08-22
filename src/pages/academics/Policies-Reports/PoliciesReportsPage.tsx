import React from 'react'
import PolicyReports from '../../../components/academics/policy-reports/PolicyReports'
import { Helmet } from 'react-helmet-async'

const PoliciesReportsPage:React.FC = () => {
  return (
    <>
    <div>
      <Helmet>
          <title>Our Policies | | Shri Ramswaroop Memorial University, Lucknow</title>
          <meta name="description" content="Access SRMU policies, institutional reports and academic documents supporting transparency, governance and quality education." />
      </Helmet>
      <PolicyReports/>
    </div>
    </>
  )
}

export default PoliciesReportsPage