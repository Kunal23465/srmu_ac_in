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
                <div className="w-full py-10 bg-white">
                    {/* Large screens */}
                    <div className="hidden lg:flex items-start w-full gap-x-8">
                        <ClubCards />
                        <ClubForm />
                    </div>

                    {/* Small screens */}
                    <div className="flex flex-col lg:hidden gap-y-8">

                        {/* No extra grid — ClubCards handles its own grid */}
                        <ClubCards />

                        <ClubForm />
                    </div>
                </div>


            </div>
            <CustomTopFooter data={feeStructureCustomTopFooter} />
        </>

    )
}

export default Clubs