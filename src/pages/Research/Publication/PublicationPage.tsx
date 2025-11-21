import React from 'react'
import Publication from '../../../components/research/publication/Publication';
import { Outlet, useLocation } from 'react-router-dom';

const PublicationPage: React.FC = () => {
     const location = useLocation();
  return <>{location.pathname === "/research/publication" ? <Publication /> : <Outlet />}</>;
}

export default PublicationPage
