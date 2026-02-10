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
        <StrategicCard title={strategicData.title} description={strategicData.description} image={strategicData.image} />
        <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500  text-center text-[#023047] mt-12">Organizational Structure</h2>
        <p className="text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-center mb-8">
          SRMU’s organizational structure is designed to promote synergy, efficiency, and excellence across academic, administrative, and support functions.
        </p>
        <OrganisationChart />
      </div>

      <CustomTopFooter data={CustomTopFooterData1} />
    </>
  );
}

export default OrganisationStructure