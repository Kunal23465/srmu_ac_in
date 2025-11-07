import React from 'react'
import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from '../../../utils/custom/CustomOverviewSection';
import { aboutOverviewData, counterDataForAboutPage } from '../../../data/about/aboutusData';
import Counter from '../../../utils/custom/Counter';
import Effort from './Effort';

const About: React.FC = () => {
    return (
        <div>
            {/* <LeaderVision /> */}
            <div className={`${Classes["container"]}`}>
                <CustomOverviewSection data={aboutOverviewData} />
                <Counter counterData={counterDataForAboutPage} classes="counter" aboutusClass={"text-black mt-3"} />
                <Effort/>
            </div>
        </div>
    )
}

export default About