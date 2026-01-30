import React from 'react'
import Publication from '../../../components/research/publication/Publication';
import { Outlet, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const PublicationPage: React.FC = () => {
  const location = useLocation();
  return <>{location.pathname === "/research/publication" ? <> <Helmet> <title>Publication | Workshop |  Our Patents</title>
    <meta name="description" content="SRMU&#039;s research publications showcase the institution&#039;s commitment to scholarly excellence, featuring a diverse array of impactful research contributions across various disciplines, fostering knowledge dissemination and academic advancement." /></Helmet> <Publication /> </> : <Outlet />}</>;
}

export default PublicationPage
