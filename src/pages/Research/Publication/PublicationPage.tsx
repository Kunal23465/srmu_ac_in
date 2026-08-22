import React from 'react'
import Publication from '../../../components/research/publication/Publication';
import { Outlet, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const PublicationPage: React.FC = () => {
  const location = useLocation();
  return <>{location.pathname === "/publication" ? <> <Helmet> <title>Publication | Workshop |  Our Patents</title>
    <meta name="description" content="Explore SRMU publications, research work, academic contributions and scholarly output from faculty and researchers." />
    </Helmet>
    <Publication /> </> : <Outlet />}</>;
}

export default PublicationPage
