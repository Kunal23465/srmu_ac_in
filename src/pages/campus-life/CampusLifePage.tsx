import { Outlet, useLocation } from 'react-router-dom'
import FacilitiesComp from '../../components/campus-life/facilities/FacilitiesComp'

const CampusLifePage = () => {
    const location = useLocation()
  return (
    <>
      {location.pathname == "/campus-life" ? <FacilitiesComp /> :
                <Outlet />}
        </>
  )
}

export default CampusLifePage