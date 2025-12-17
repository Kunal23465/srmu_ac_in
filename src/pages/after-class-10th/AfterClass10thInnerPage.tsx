import React, { useEffect } from "react";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { CustomTopFooterData1 } from "../../data/about/leadership-and-governance/leadership-and-governance-data";
import Classes from "../../utils/styles/Global.module.css";

import ProgramFinderIntro from "../../components/admissions/program-finder/ProgramFinderIntro";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProgramFinder } from "../../store/program-finder/programFinderThunk";
import { AppDispatch, RootState } from "../../store";
import ProgramFilter from "../../components/admissions/program-finder/ProgramFilter";

const AfterClass10thInnerPage: React.FC = () => {
    const location = useLocation();
    const { name, programTypeId, programDisciplineId } = location.state;
    const { data } = useSelector((state: RootState) => state.getProgramFinder)
    const dispatch = useDispatch<AppDispatch>()


    useEffect(() => {
        dispatch(fetchAllProgramFinder({
            programTypeId: programTypeId,
            programDisciplineId: programDisciplineId,
            name: `${name}`,
        }))
    }, [])


    return (
        <>
            <div className={`${Classes["container"]}`}>

                {/* @ts-ignore */}
                <ProgramFilter data={data} />

                {/* <ProgramDescription data={afterClass10thProgramDescription} /> */}

                {/* <ProgramFilter data={data} /> */}
                <ProgramFinderIntro />

            </div>
            <CustomTopFooter data={CustomTopFooterData1} />
        </>
    );
};


export default AfterClass10thInnerPage
