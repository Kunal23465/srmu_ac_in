import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Admissons from '../../components/admissions/Admissons'

const AdmissonsPage: React.FC = () => {
    const location = useLocation()

    return (
        <>
            {location.pathname == "/Admissons" ? <Admissons /> :
                <Outlet />}
        </>
    )
}

export default AdmissonsPage