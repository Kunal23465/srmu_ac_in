import React from 'react'
import PhdNotificationSession from '../../../components/research/ph-d-notification-session/PhdNotificationSession';
import { Outlet } from 'react-router-dom';

const PhdNotificationSessionPage:React.FC = () => {
  return <>{location.pathname === "/research/phd-notification-session" ? <PhdNotificationSession /> : <Outlet />}</>;
}

export default PhdNotificationSessionPage
