import React from 'react'
import Institutes from '../../../components/academics/institutes/Institutes'
import { Outlet, useLocation } from 'react-router-dom'

const InstitutePage: React.FC = () => {
  const pathname = useLocation().pathname

  return (
    <div>
      {pathname === "/academics" ? <Institutes /> : <Outlet />}

    </div>
  )
}

export default InstitutePage