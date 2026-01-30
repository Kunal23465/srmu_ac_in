import React from 'react'
import Innovation from '../../../components/research/innovations/Innovation';
import { Outlet, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const InnovationPage: React.FC = () => {
  const location = useLocation();
  return <>{location.pathname === "/research/innovation" ? <> <Helmet>  <title>Innovation | Shri Ramswaroop Memorial University, Lucknow</title>
    <meta name="description" content="Rooted in a culture of originality and forward-thinking, the university places a premium on creative exploration and novel solutions." /></Helmet> <Innovation /></> : <Outlet />}</>;
}

export default InnovationPage
