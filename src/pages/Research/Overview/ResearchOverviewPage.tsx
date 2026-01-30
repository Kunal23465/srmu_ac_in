import React from 'react'
import Overview from '../../../components/research/overview/Overview';
import { Outlet, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ResearchOverviewPage: React.FC = () => {
  const location = useLocation();
  return <>{location.pathname === "/research" ? <> <Helmet>
    
     <title>Research Overview | Shri Ramswaroop Memorial University, Lucknow</title>
    <meta name="description" content="SRMU fosters a vibrant research environment, encouraging faculty and students to engage in cutting-edge research across diverse disciplines." />
    </Helmet>
     <Overview /></>  : <Outlet />}</>;
}

export default ResearchOverviewPage;
