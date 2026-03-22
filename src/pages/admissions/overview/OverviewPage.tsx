import React from 'react'
import OverviewComp from '../../../components/admissions/overview/OverviewComp'
import { Outlet, useLocation } from 'react-router-dom'
import SeoHead from '../../../components/seo/SeoHead';

const OverviewPage: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <SeoHead
        title="Admission Overview | Shri Ramswaroop Memorial University, Lucknow"
        description="Unlock your academic potential with SRMU's streamlined admission process. Explore entry requirements, application procedures, and our various academic pathways."
        pathname={location.pathname}
      />
      {location.pathname == "/admission-overview" ? <OverviewComp /> :
        <Outlet />}
    </>
  )
}

export default OverviewPage
