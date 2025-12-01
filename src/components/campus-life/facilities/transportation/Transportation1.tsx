import React from "react";
import CustomOverviewSection from "../../../../utils/custom/CustomOverviewSection";
import Classes from "../../../../utils/styles/Global.module.css";
import CustomTopFooter from "../../../../utils/custom/CustomTopFooter";
import { RouteNum, Transportation1TopFooterData, TransportationOverviewData } from "../../../../data/campus-life/facilities/transportation/transportation-data";
import CustomTransportationTable from "../../../../utils/custom/CustomTransportationTable";

const Transportation1: React.FC = () => {
  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={TransportationOverviewData} />

        <p className="text-lg">
          The university's transportation service extends beyond the campus, connecting students to key locations in the city and surrounding areas. This outreach enhances the
          overall convenience for students residing off-campus, creating a sense of inclusivity and making SRMU an accessible and commuter-friendly educational institution. Through
          its comprehensive transportation infrastructure, SRMU demonstrates a commitment to ensuring that logistical concerns do not impede the academic pursuits and daily
          activities of its diverse and vibrant community.
        </p>

        {/* Loop Route Sections */}
        {RouteNum.map((item, index) => (
          <div key={index} className="">
            <p className="text-xl text-[#0f4a85] font-medium ">
              {item.name}
            </p>

            <CustomTransportationTable data={item.data} />
          </div>
        ))}
      </div>

      <CustomTopFooter data={Transportation1TopFooterData} />
    </div>
  );
};

export default Transportation1;
