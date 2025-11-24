import React from 'react'
import CustomTabs from '../../../utils/custom/CustomTabs';
import { processFlowStudent } from '../../../data/campus-life/grievance-redressal-system/grievance-redressal-system-data';
import RegistringGrievance from './RegistringGrievance';
import TakingFeedback from './TakingFeedback';
import Classes from "../../../utils/styles/Global.module.css";


const ProcessFlowStudent: React.FC = () => {
    const items = [
        {
            key: "1",
            label: "FOR REGISTERING GRIEVANCE",
            content: <RegistringGrievance data={processFlowStudent.registeringGrievance} />,
        },
        {
            key: "2",
            label: "FOR PROVIDING FEEDBACK",
            content: <TakingFeedback data={processFlowStudent.takingFeedback} />,
        },

    ];
    return (
        <div className=' bg-[#fff]'>
            <div className={`${Classes["container"]} py-20`}>

                <h1 className='text-black/80 font-semibold text-xl mb-6 xl:text-2xl'>Process Flow For Students</h1>
                <CustomTabs
                    items={items}
                    activeTextColor="#003049"
                    inactiveTextColor="#555555"
                    hoverTextColor="#003049"
                    activeUnderlineColor="#ffb703"
                    fullWidthUnderlineColor="#ffcc55"
                />
            </div>
        </div>
    )
}

export default ProcessFlowStudent