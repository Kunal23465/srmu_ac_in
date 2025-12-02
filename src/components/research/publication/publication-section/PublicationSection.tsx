import React from "react";
import Classes from "../../../../utils/styles/Global.module.css";
import bgImage from "../../../../assets/images/research/overview/facilities-bg-lg.jpeg";
import CustomTabs from "../../../../utils/custom/CustomTabs";
import TabContent from "./TabContent";
import { PublicationFloatingCardData, PublicationTabData } from "../../../../data/research/publication/publication-data";

import { FaRegFilePdf } from "react-icons/fa";
const PublicationSection: React.FC = () => {
  const items = [
    {
      key: "1",
      label: "JOURNALS",
      content: <TabContent data={PublicationTabData.tab1} />,
    },
    { key: "2", label: "CONFERENCE PROCEEDINGS", content: <TabContent data={PublicationTabData.tab2} /> },
    { key: "3", label: "BOOKS & CHAPTERS", content: <TabContent data={PublicationTabData.tab3} /> },
  ];
  return (
    <div>
      <div className="relative px-6 w-full mt-16">
        {/* Blue Background Section */}
        <div className="bg-[#e8effc] rounded-[30px] h-[1000px]" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className={Classes["container"]}>
            <div className="py-14 md:py-20 text-center text-white">
              <h2 className="text-[50px] font-bold ">Publication</h2>
              <p className="text-[15px]">
                From academic journals to conference documents to book chapters, research by SRMU students and faculty has been featured in numerous publications.
              </p>
            </div>
            {/* @ts-ignore */}
            <CustomTabs
              items={items}
              variant="underline"
              activeTextColor="#ffb703"
              activeUnderlineColor="#ffb703"
              hoverTextColor="#ffb703"
              inactiveTextColor="#ffffff"
              activeBgColor="#ffb703"
              inactiveBgColor="#0f4a85"
              pillContainerBgColor="#ffb703"
              alignTabs="start"
            />
          </div>
        </div>

        {/* Floating Cards OUTSIDE Blue Section */}
        <div className={`${Classes["container"]} mt-[-200px] p-4 md:px-6 bg-white rounded-xl shadow-xl`}>
          <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-10">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-6 ">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f4a85]">{PublicationFloatingCardData.title}</h2>
              <p className="text-gray-700 text-base leading-relaxed">{PublicationFloatingCardData.description}</p>

              <a
                href={PublicationFloatingCardData.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#0f4a85] border-3 border-[#ffb703] text-white font-semibold uppercase py-3 px-5 rounded-lg hover:bg-white hover:text-[#0f4a85] transition-colors duration-200 w-fit"
              >
                <FaRegFilePdf size={22} />
                Download PDF
              </a>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img src={PublicationFloatingCardData.imgUrl} alt={PublicationFloatingCardData.title} className="rounded-2xl shadow-lg w-full max-w-[500px] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationSection;
