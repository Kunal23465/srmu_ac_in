import React from 'react'
import ProcessAndInitiatives from '../../../components/research/process-and-initiatives/ProcessAndInitiatives';
import { Outlet } from 'react-router-dom';

const ProcessAndInitiativePage:React.FC = () => {
  return <>{location.pathname === "/research/process-and-initiatives" ? <ProcessAndInitiatives /> : <Outlet />}</>;
}

export default ProcessAndInitiativePage
