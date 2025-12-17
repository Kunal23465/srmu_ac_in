import React, { useEffect } from 'react'
import Classes from "../../../utils/styles/Global.module.css";
import ProgramFilter from './ProgramFilter';
import ProgramFinderIntro from './ProgramFinderIntro';
import CustomTopFooter from '../../../utils/custom/CustomTopFooter';
import { feeStructureCustomTopFooter } from '../../../data/admissions/fee-structure/fee-structue-data';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { fetchAllProgramFinder, fetchProgramFinderByID } from '../../../store/program-finder/programFinderThunk';
import { fetchProgramType } from '../../../store/program-finder/program-type/programTypeThunk';
import { fetchProgramDiscipline } from '../../../store/program-finder/discipline/disciplineThunk';
const ProgramFinder: React.FC = () => {
    const { data } = useSelector((state: RootState) => state.getProgramFinder)
    const dispatch = useDispatch<AppDispatch>()
    const { programType } = useSelector((state: RootState) => state.getProgramType)
    const { discipline } = useSelector((state: RootState) => state.getDiscipline)
    useEffect(() => {
        dispatch(fetchAllProgramFinder())
        // dispatch(fetchProgramFinderByID(13))
    }, [])

    useEffect(() => {
        dispatch(fetchProgramType())
        dispatch(fetchProgramDiscipline())
    }, [])

    console.log("programType", programType)
    console.log("discipline", discipline)
    return (
        <>
            <div className={`${Classes["container"]} mt-16`}>

                <div className='w-full flex items-center justify-center flex-col '>
                    <h1 className='text-[#023047] text-[3.125rem] leading-[1.2] font-medium'>
                        Program Finder
                    </h1>
                    <div className='w-[140px] h-[3px] bg-amber-400 mt-4'></div>
                </div>
                {/* @ts-ignore */}
                <ProgramFilter  data={data} />
                <ProgramFinderIntro />

            </div>
            <CustomTopFooter data={feeStructureCustomTopFooter} />

        </>
    )
}

export default ProgramFinder