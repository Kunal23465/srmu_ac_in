import React from 'react'
import CustomOverviewSection from '../../scholarship/ScholarshipOverviewSection'
import { OutreachActivationsOverviewData, outreachCustomTopFooter } from '../../../data/campus-life/outreach-activations/outreach-activations-data'
import CustomTopFooter from '../../../utils/custom/CustomTopFooter'
import Classes from "../../../utils/styles/Global.module.css";
import OutreachItems from './OutreachItems';
import OutreachStats from './OutreachStats';
import OutreachInitiatives from './OutreachInitiatives';


const OutreachActivations: React.FC = () => {
    return (
        <div>
            <div className={`${Classes["container"]}`}>
                <CustomOverviewSection data={OutreachActivationsOverviewData} />
            </div>
            <OutreachItems />
            <OutreachStats />


            <OutreachInitiatives />


            <CustomTopFooter data={outreachCustomTopFooter} />
        </div>
    )
}

export default OutreachActivations
