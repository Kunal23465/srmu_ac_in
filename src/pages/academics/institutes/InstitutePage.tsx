import React from 'react'
import Institutes from '../../../components/academics/institutes/Institutes'
import { Outlet, useLocation } from 'react-router-dom'

const InstitutePage: React.FC = () => {
  const pathname = useLocation().pathname

  console.log("path name ", pathname)
  return (
    <div>
      {pathname === "/academics/institutes-info" ? <Institutes /> : <Outlet />}

    </div>
  )
}

export default InstitutePage