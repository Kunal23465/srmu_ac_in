import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Placement from '../../components/placement/Placement'

const PlacementPage: React.FC = () => {
  const location = useLocation()

  return (
    <>
      {location.pathname == "/placement" ? <Placement /> :
        <Outlet />}
    </>
  )
}

export default PlacementPage