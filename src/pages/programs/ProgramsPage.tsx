import { Outlet, useLocation } from 'react-router-dom'
import ProgramComp from '../../components/programs/ProgramComp'

const ProgramsPage = () => {

    const location = useLocation()
    return (
         <>
      {location.pathname == "/about" ? <ProgramComp /> :
        <Outlet />}
    </>
    )
}

export default ProgramsPage