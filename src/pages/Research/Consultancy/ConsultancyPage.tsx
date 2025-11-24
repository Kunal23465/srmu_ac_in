import React from 'react'
import Consultancy from '../../../components/research/consultancy/Consultancy';
import { Outlet, useLocation } from 'react-router-dom';

const ConsultancyPage: React.FC = () => {
  const location = useLocation();
  
  return <>{location.pathname === "/research/consultancy" ? <Consultancy /> : <Outlet />}</>;
}

export default ConsultancyPage
