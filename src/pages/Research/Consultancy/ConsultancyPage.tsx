import React from 'react'
import Consultancy from '../../../components/research/consultancy/Consultancy';
import { Outlet, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ConsultancyPage: React.FC = () => {
  const location = useLocation();

  return <>{location.pathname === "/research/consultancy" ? <> <Helmet>  <title>Consultancy | Shri Ramswaroop Memorial University, Lucknow</title>
    <meta name="description" content="Positioned as a bridge between academia and practical application, the consultancy initiatives at SRMU bring together academic expertise and industry needs." /></Helmet> <Consultancy /></> : <Outlet />}</>;
}

export default ConsultancyPage
