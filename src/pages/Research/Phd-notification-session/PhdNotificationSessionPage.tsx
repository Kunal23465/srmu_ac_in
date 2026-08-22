import React from 'react'
import PhdNotificationSession from '../../../components/research/ph-d-notification-session/PhdNotificationSession';
import { Outlet, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const PhdNotificationSessionPage: React.FC = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/ph-d-notification-session-2026-27" ? (
        <>
          {" "}
          <Helmet>
            <title>Ph.D. Notification 2026-27 = Admission & Research at SRMU</title>
            <meta
              name="description"
              content="Check SRMU Ph.D. Notification 2026-27 for admission details, eligibility, dates and research programme information."
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
