import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
// @ts-ignore
import Admissons from '../../components/admissions/Admissons'
import OverviewPage from './overview/OverviewPage'

const AdmissonsPage: React.FC = () => {
    const location = useLocation()

    return (
        <>
            {location.pathname == "/Admissons" ? <OverviewPage /> :
                <Outlet />}
        </>
    )
}

export default AdmissonsPage