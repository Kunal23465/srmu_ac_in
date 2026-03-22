import React from 'react'
import Consultancy from '../../../components/research/consultancy/Consultancy';
import { Outlet, useLocation } from 'react-router-dom';
import SeoHead from '../../../components/seo/SeoHead';

const ConsultancyPage: React.FC = () => {
  const location = useLocation();

  return <>{location.pathname === "/consultancy" ? <> <SeoHead
    title="Consultancy | Shri Ramswaroop Memorial University, Lucknow"
    description="Positioned as a bridge between academia and practical application, the consultancy initiatives at SRMU bring together academic expertise and industry needs."
    pathname={location.pathname}
  /> <Consultancy /></> : <Outlet />}</>;
}

export default ConsultancyPage
