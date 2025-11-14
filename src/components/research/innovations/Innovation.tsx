import React from 'react'
import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from '../../scholarship/ScholarshipOverviewSection';
import { InnovationOverviewData, projects } from '../../../data/research/innovation/innovation-data';
import CustomTopFooter from '../../../utils/custom/CustomTopFooter';
import { CustomTopFooterAbout } from '../../../data/about/aboutusData';
import ProjectCard from './ProjectCard';
const Innovation:React.FC = () => {
  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={InnovationOverviewData} />

        <div className="w-full py-10">
          <div className=" space-y-10">
            {projects.map((item, index) => (
              <ProjectCard
                key={item.id}
                title={item.title}
                    description={item.description}
                fullDescription={item.fullDescription}
                image={item.image}
                reversed={index % 2 !== 0} // automatically alternate
              />
            ))}
          </div>
        </div>
      </div>
      <CustomTopFooter data={CustomTopFooterAbout} />
    </div>
  );
}

export default Innovation
