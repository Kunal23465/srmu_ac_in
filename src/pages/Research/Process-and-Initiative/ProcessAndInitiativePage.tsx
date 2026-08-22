import React from 'react'
import ProcessAndInitiatives from '../../../components/research/process-and-initiatives/ProcessAndInitiatives';
import { Outlet, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ProcessAndInitiativePage: React.FC = () => {
  const location = useLocation();
  return <>{location.pathname === "/process-and-initiatives" ? <> <Helmet><title>SRMU Processes & Initiatives - Quality & Academic Excellence</title>
    <meta name="description" content="Explore SRMU's academic processes and initiatives focused on quality improvement, innovation, learning and student development." /></Helmet> <ProcessAndInitiatives /></> : <Outlet />}</>;
}

export default ProcessAndInitiativePage
