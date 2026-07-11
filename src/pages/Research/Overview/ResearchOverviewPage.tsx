import React from 'react'
import Overview from '../../../components/research/overview/Overview';
import { Outlet, useLocation } from 'react-router-dom';
import SeoHead from '../../../components/seo/SeoHead';

const ResearchOverviewPage: React.FC = () => {
  const location = useLocation();
  return <>{location.pathname === "/research-overview" ? <> <SeoHead
    title="Research Overview | Shri Ramswaroop Memorial University, Lucknow"
    description="SRMU fosters a vibrant research environment, encouraging faculty and students to engage in cutting-edge research across diverse disciplines."
    pathname={location.pathname}
  />
    <Overview /></> : <Outlet />}</>;
}

export default ResearchOverviewPage;
