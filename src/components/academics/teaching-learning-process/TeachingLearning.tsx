import { FC } from "react"
import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import { TeachingLearningOverviewData } from "../../../data/academics/teaching-learning-process/teaching-leaning-data";
import StudentCentric from "./StudentCentric";
import Holistic from "./Holistic";
import TeachersUse from "./TeachersUse";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { CustomTopFooterData1 } from "../../../data/about/leadership-and-governance/leadership-and-governance-data";


const TeachingLearning: FC = () => {
    return (
        <>

            <div className={`${Classes["container"]}`}>
                <CustomOverviewSection data={TeachingLearningOverviewData} />
                <StudentCentric />
                <Holistic />
                <TeachersUse />
            </div>

            <CustomTopFooter data={CustomTopFooterData1} />

        </>


    )
}

export default TeachingLearning