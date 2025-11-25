import React from 'react'
import Classes from "../../../../utils/styles/Global.module.css";
import CustomOverviewSection from '../../../../utils/custom/CustomOverviewSection';
import CustomTopFooter from '../../../../utils/custom/CustomTopFooter';
import { InstituteofMediaStudiesCounterData, InstituteofMediaStudiesOverviewData, InstituteofMediaStudiesTopFooterData } from '../../../../data/academics/institute/institute-department/institute-of-media-studies-data';

import Counter from '../../../../utils/custom/Counter';


const InstituteofMediaStudies: React.FC = () => {
  return (
<div> 
  <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={InstituteofMediaStudiesOverviewData} />
        <Counter   counterData={InstituteofMediaStudiesCounterData.counterData}
  classes={InstituteofMediaStudiesCounterData.classes}
  aboutusClass={InstituteofMediaStudiesCounterData.aboutusClass}/>
    // Custom tab
      </div>
                  <CustomTopFooter data={InstituteofMediaStudiesTopFooterData} />
</div>
  )
}

export default InstituteofMediaStudies