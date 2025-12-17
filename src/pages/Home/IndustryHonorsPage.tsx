import React from 'react'
import IndustryHonors from '../../components/home/IndustryHonors'
import { Outlet, useLocation } from 'react-router-dom'

const IndustryHonorsPage:React.FC = () => {

 const pathname = useLocation().pathname
 console.log("hello",pathname)
  return (
    <div>
          {pathname === "/programs/industry-honors" ? <IndustryHonors /> : <Outlet />}

    </div>
  )

}

export default IndustryHonorsPage
