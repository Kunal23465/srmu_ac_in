import React from 'react'
import CustomTabs from '../../../utils/custom/CustomTabs';
import { processFlowCall } from '../../../data/campus-life/grievance-redressal-system/grievance-redressal-system-data';
import RegistringGrievance from './RegistringGrievance';
import TakingFeedback from './TakingFeedback';
import Classes from "../../../utils/styles/Global.module.css";


const ProcessFlowCall: React.FC = () => {
    const items = [
        {
            key: "1",
            label: "FOR REGISTERING GRIEVANCE",
            content: <RegistringGrievance data={processFlowCall.registeringGrievance} />,
        },
        {
            key: "2",
            label: "FOR TAKING FEEDBACK",
            content: <TakingFeedback data={processFlowCall.takingFeedback} />,
        },

    ];
    return (
        <div className='mt-20 bg-[#f1f1f1]'>
            <div className={`${Classes["container"]} py-20`}>

                <h1 className='text-black/80 font-semibold text-xl mb-6 xl:text-2xl'>Process Flow For Call Center Executive</h1>
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

export default ProcessFlowCall