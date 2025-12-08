import React from 'react'
import Overview from '../../../components/research/overview/Overview';
import { Outlet, useLocation } from 'react-router-dom';

const ResearchOverviewPage: React.FC = () => {
  const location = useLocation();
  return <>{location.pathname === "/research" ? <Overview /> : <Outlet />}</>;
}

export default ResearchOverviewPage;
