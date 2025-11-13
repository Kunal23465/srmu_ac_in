import React from 'react'
import Classes from "../../../utils/styles/Global.module.css";
import ProgramFilter from './ProgramFilter';
import ProgramFinderIntro from './ProgramFinderIntro';
import CustomTopFooter from '../../../utils/custom/CustomTopFooter';
import { feeStructureCustomTopFooter } from '../../../data/admissions/fee-structure/fee-structue-data';

const ProgramFinder: React.FC = () => {
    return (
        <>
            <div className={`${Classes["container"]} mt-16`}>

                <div className='w-full flex items-center justify-center flex-col '>
                    <h1 className='text-[#023047] text-[3.125rem] leading-[1.2] font-medium'>
                        Program Finder
                    </h1>
                    <div className='w-[140px] h-[3px] bg-amber-400 mt-4'></div>
                </div>

                <ProgramFilter />
                <ProgramFinderIntro />
                
            </div>
            <CustomTopFooter data={feeStructureCustomTopFooter} />

        </>
    )
}

export default ProgramFinder