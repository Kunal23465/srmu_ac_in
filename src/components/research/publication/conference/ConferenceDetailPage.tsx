import React from 'react'
import CustomOverviewSection from '../../../scholarship/ScholarshipOverviewSection';
import Classes from "../../../../utils/styles/Global.module.css";
import { useLocation, useParams } from 'react-router-dom';
import { customeOverViewType } from '../../../../types/home-data-type';
import PhotoSection from '../../../campus-life/events/PhotoSection ';
import SeoHead from '../../../seo/SeoHead';
import { SITE_NAME, stripHtml } from '../../../../utils/seo';
import { findConferenceBySlug } from '../../../../utils/routeMatching';
const ConferenceDetailPage: React.FC = () => {
     const location = useLocation();
     const { name } = useParams();

    const stateData = location.state || {};
    const matchedConference = name ? findConferenceBySlug(name) : null;
    const title = stateData.title || matchedConference?.title || "Conference";
    const description = stateData.description || matchedConference?.description || "";
    const detailDescription =
      stateData.detailDescription ||
      stateData.extraDescription ||
      matchedConference?.detailDescription ||
      matchedConference?.extraDescription ||
      "";
    const images = stateData.images || stateData.photos || matchedConference?.images || matchedConference?.photos || [];

 if (!stateData.title && !matchedConference) {
   return (
     <>
       <SeoHead
         title={`Conference Not Found | ${SITE_NAME}, Lucknow`}
         description="The requested SRMU conference page could not be found."
         pathname={location.pathname}
         noindex
       />
       <div className={`${Classes["container"]} py-16`}>
         <h1 className="text-2xl font-medium text-[#023047]">Conference not found</h1>
       </div>
     </>
   );
 }

 const data: customeOverViewType = {
   heading: title,
   content: description,
 };
  return (
    <div>
      <SeoHead
        title={`${title} | ${SITE_NAME}, Lucknow`}
        description={stripHtml(detailDescription || description).slice(0, 160) || `Explore ${title} at SRMU.`}
        pathname={location.pathname}
      />
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
