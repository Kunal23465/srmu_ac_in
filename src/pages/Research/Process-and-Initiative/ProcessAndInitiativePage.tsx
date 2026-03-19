import React from 'react'
import ProcessAndInitiatives from '../../../components/research/process-and-initiatives/ProcessAndInitiatives';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ProcessAndInitiativePage:React.FC = () => {
  return <>{location.pathname === "/process-and-initiatives" ? <> <Helmet><title>Process And Initiatives | Shri Ramswaroop Memorial University, Lucknow</title>
    <meta name="description" content="SRMU&#039;s research process and initiatives take a dynamic approach, encouraging faculty and students to explore innovative ideas, collaborate across disciplines, and contribute to cutting-edge research, fostering a culture of real-world impact." /></Helmet> <ProcessAndInitiatives /></>   : <Outlet />}</>;
}

export default ProcessAndInitiativePage
