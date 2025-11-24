import { Outlet, useLocation } from 'react-router-dom'
import CampuslifeComp from '../../components/campus-life/CampuslifeComp'

const CampusLifePage = () => {
    const location = useLocation()
  return (
    <>
            {location.pathname == "/campus-life" ? <CampuslifeComp /> :
                <Outlet />}
        </>
  )
}

export default CampusLifePage