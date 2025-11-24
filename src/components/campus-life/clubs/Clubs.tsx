import React from 'react'
import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from '../../../utils/custom/CustomOverviewSection';
import { ClubsOverviewData } from '../../../data/campus-life/clubs/clubs-data';
import ClubCards from './ClubCards';
import ClubForm from './ClubForm';
import CustomTopFooter from '../../../utils/custom/CustomTopFooter';
import { feeStructureCustomTopFooter } from '../../../data/admissions/fee-structure/fee-structue-data';


const Clubs: React.FC = () => {
    return (
        <>
            <div className={`${Classes["container"]}`}>
                <CustomOverviewSection data={ClubsOverviewData} />
                <div className="flex items-start w-full  py-10 gap-x-8 bg-white">
                    <ClubCards />
                    <ClubForm />
                </div>

            </div>
            <CustomTopFooter data={feeStructureCustomTopFooter} />
        </>

    )
}

export default Clubs