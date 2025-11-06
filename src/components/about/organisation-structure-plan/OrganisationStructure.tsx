import { FC } from 'react'
import { OrganisationStructureOverviewData, strategicData } from '../../../data/about/organisation-structure-plan/organisation-structure-data'
import CustomOverviewSection from '../../../utils/custom/CustomOverviewSection'
import Classes from "../../../utils/styles/Global.module.css";
import StrategicCard from './StrategicCard';
import CustomTopFooter from '../../../utils/custom/CustomTopFooter';
import { CustomTopFooterData1 } from '../../../data/about/leadership-and-governance/leadership-and-governance-data';
import OrganisationChart from './OrganisationChart';


const OrganisationStructure: FC = () => {
  return (
    <>
    <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={OrganisationStructureOverviewData} />
        <StrategicCard
        title={strategicData.title}
        description={strategicData.description}
        image={strategicData.image}
      />
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-blue-900 mt-12">
          Organizational Structure
        </h2>
        <p className="text-gray-600 text-center mb-8">
          SRMU’s organizational structure is designed to promote synergy,
          efficiency, and excellence across academic, administrative, and
          support functions.
        </p>
      <OrganisationChart/>
</div>
       
        
         <CustomTopFooter data={CustomTopFooterData1} />
        
    </>
  )
}

export default OrganisationStructure