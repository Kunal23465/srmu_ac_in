import CustomOverviewSection from '../../../utils/custom/CustomOverviewSection'
import { CurriculumOverviewData } from '../../../data/academics/curriculum-design/curriculum-design-data'
import Classes from "../../../utils/styles/Global.module.css";
import { FC } from 'react';
import DescriptionCurr from './DescriptionCurr';
import CustomTopFooter from '../../../utils/custom/CustomTopFooter';
import { CustomTopFooterData1 } from '../../../data/about/leadership-and-governance/leadership-and-governance-data';


const CurriculumDesign: FC = () => {
    return (
        <div>
            <div className={`${Classes["container"]}`}>
                <CustomOverviewSection data={CurriculumOverviewData} />
                <DescriptionCurr/>
            </div>
                  <CustomTopFooter data={CustomTopFooterData1} />

        </div>
    )
}

export default CurriculumDesign