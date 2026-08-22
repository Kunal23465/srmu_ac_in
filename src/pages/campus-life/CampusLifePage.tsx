import { Outlet, useLocation } from 'react-router-dom'
import FacilitiesComp from '../../components/campus-life/facilities/FacilitiesComp'
import { Helmet } from 'react-helmet-async'

const CampusLifePage = () => {
  const location = useLocation()
  return (
    <>
      {location.pathname == "/facilities" ? (
        <>
          <Helmet>
            <title>State-of-the-Art Facilities at SRMU, Lucknow</title>
            <meta
              name="description"
              content="Explore SRMU campus facilities including classrooms, laboratories, library, sports, hostels and student support services."
            />
          </Helmet>
          <FacilitiesComp />
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default CampusLifePage