import React from 'react'
import PhdNotificationSession from '../../../components/research/ph-d-notification-session/PhdNotificationSession';
import { Outlet, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const PhdNotificationSessionPage:React.FC = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/ph-d-notification-session-2026-27" ? (
        <>
          {" "}
          <Helmet>
            <title>Ph.D. Notification (Session: 2026-27) | Shri Ramswaroop Memorial University, Lucknow</title>
            <meta
              name="description"
              content="Shri Ramswaroop Memorial University warmly welcomes aspiring scholars to apply for its esteemed Ph.D. program, marking the beginning of a transformative academic journey."
            />
          </Helmet>{" "}
          <PhdNotificationSession />{" "}
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default PhdNotificationSessionPage
