import React from 'react'
import Innovation from '../../../components/research/innovations/Innovation';
import { Outlet, useLocation } from 'react-router-dom';

const InnovationPage: React.FC = () => {
      const location = useLocation();
  return <>{location.pathname === "/research/innovation" ? <Innovation /> : <Outlet />}</>;
}

export default InnovationPage
