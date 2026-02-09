import React from 'react'
import PhdNotificationSession from '../../../components/research/ph-d-notification-session/PhdNotificationSession';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const PhdNotificationSessionPage:React.FC = () => {
  return <>{location.pathname === "/research/phd-notification-session" ? <> <Helmet><title>Ph.D. Notification (Session: 2025-26) | Shri Ramswaroop Memorial University, Lucknow</title>
    <meta name="description" content="Shri Ramswaroop Memorial University warmly welcomes aspiring scholars to apply for its esteemed Ph.D. program, marking the beginning of a transformative academic journey." /></Helmet>   <PhdNotificationSession /> </>: <Outlet />}</>;
}

export default PhdNotificationSessionPage
