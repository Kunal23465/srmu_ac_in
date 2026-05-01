import React from 'react'
import OverviewComp from '../../../components/admissions/overview/OverviewComp'
import { Outlet, useLocation } from 'react-router-dom'
import SeoHead from '../../../components/seo/SeoHead';

const OverviewPage: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <SeoHead
        title="Admission Overview 2026: Apply to SRMU Lucknow | Programs"
        description="Begin your journey at SRMU. Explore admission requirements, diverse academic programs, and our simple application process here."
        pathname={location.pathname}
      />
      {location.pathname == "/admission-overview" ? <OverviewComp /> :
        <Outlet />}
    </>
  )
}

export default OverviewPage
