import React from 'react'
import OverviewComp from '../../../components/admissions/overview/OverviewComp'
import { Outlet, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';

const OverviewPage: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>Admission Overview | Shri Ramswaroop Memorial University, Lucknow</title>
        <meta name="description" content="Unlock your academic potential with SRMU&#039;s streamlined admission process. Explore entry requirements, application procedures, and our various academic pathways" />
      </Helmet>
      {location.pathname == "/admission-overview" ? <OverviewComp /> :
        <Outlet />}
    </>
  )
}

export default OverviewPage