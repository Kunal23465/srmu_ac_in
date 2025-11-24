import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Academics from '../../components/academics/Academics'

const AcademicsPage: React.FC = () => {
  const location = useLocation()

  return (
    <>
      {location.pathname == "/academics" ? <Academics /> :
        <Outlet />}
    </>
  )
}

export default AcademicsPage