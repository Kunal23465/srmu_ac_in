import { FC } from 'react'
import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from '../../../utils/custom/CustomOverviewSection';
import { IirsIsroOverviewData } from '../../../data/academics/iirs-isro/iirs-isro';
import About from './About';
import CustomTopFooter from '../../../utils/custom/CustomTopFooter';
import { CustomTopFooterData1 } from '../../../data/about/leadership-and-governance/leadership-and-governance-data';


const IirsIsro: FC = () => {
    return (
        <div>
            <div className={`${Classes["container"]}`}>
                <CustomOverviewSection data={IirsIsroOverviewData} />
                <About />

            </div>
            <CustomTopFooter data={CustomTopFooterData1} />

        </div>
    )
}

export default IirsIsro