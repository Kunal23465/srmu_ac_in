import { Outlet, useLocation } from 'react-router-dom'
import FacilitiesComp from '../../components/campus-life/facilities/FacilitiesComp'
import { Helmet } from 'react-helmet-async'

const CampusLifePage = () => {
  const location = useLocation()
  return (
    <>

      {location.pathname == "/campus-life" ?
        <>
          <Helmet>
            <title>State-of-the-Art Facilities at SRMU, Lucknow</title>
            <meta name="description" content="Explore the cutting-edge facilities at SRMU, including modern laboratories, libraries, sports complexes, and accommodation. Unlock your full potential with our top-notch infrastructure." />
          </Helmet>
          <FacilitiesComp />
        </>




        :
        <Outlet />}
    </>
  )
}

export default CampusLifePage