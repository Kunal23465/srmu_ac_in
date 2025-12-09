import React from 'react'
import OverviewComp from '../../../components/admissions/overview/OverviewComp'
import { Outlet, useLocation } from 'react-router-dom'

const OverviewPage: React.FC = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname == "/admission" ? <OverviewComp /> :
        <Outlet />}
    </>
  )
}

export default OverviewPage