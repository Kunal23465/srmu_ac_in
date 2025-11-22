import React from 'react'
import CustomOverviewSection from '../../../scholarship/ScholarshipOverviewSection';
import Classes from "../../../../utils/styles/Global.module.css";
import { useLocation } from 'react-router-dom';
import { customeOverViewType } from '../../../../types/home-data-type';
import PhotoSection from '../../../campus-life/events/PhotoSection ';
const ConferenceDetailPage: React.FC = () => {
     const location = useLocation();

    const { title, description ,detailDescription, images} = location.state || {};
 const data: customeOverViewType = {
   heading: title,
   content: description,
 };
  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={data} />

        <div className="mt-10 mb-10">
          <p className="">{detailDescription}</p>
          {images && images.length > 0 && (
            <div className="mt-10">
              <PhotoSection photos={images} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ConferenceDetailPage
