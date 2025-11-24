import React from 'react'
import Classes from "../../../utils/styles/Global.module.css";
import { alumniRegistrationOverviewData, alumniRegistrationTopFooterData } from '../../../data/placement/placementData'
import CustomTopFooter from '../../../utils/custom/CustomTopFooter'
import CustomOverviewSection from '../../scholarship/ScholarshipOverviewSection'
import AlumniRegistrationForm from './AlumniRegistrationForm';

const AlumniRegistration: React.FC = () => {
    return (
        <div>
            <div className={`${Classes["container"]}`}>
                <CustomOverviewSection data={alumniRegistrationOverviewData} />
                <AlumniRegistrationForm />
            </div>
            <CustomTopFooter data={alumniRegistrationTopFooterData} />
        </div>
    )
}

export default AlumniRegistration
