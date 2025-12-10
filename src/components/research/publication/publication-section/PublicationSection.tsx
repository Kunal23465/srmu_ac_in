import React from "react";
import Classes from "../../../../utils/styles/Global.module.css";
import bgImage from "../../../../assets/images/research/overview/facilities-bg-lg.jpeg";
import CustomTabs from "../../../../utils/custom/CustomTabs";
import TabContent from "./TabContent";
import { PublicationFloatingCardData, PublicationTabData } from "../../../../data/research/publication/publication-data";
import { PdfSvgIcon } from "../../../about/recognition-approval/ApprovalSlider";

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
      <div className="relative px-0 md:px-6 w-full mt-16">
        {/* Blue Background Section */}
        <div className="bg-[#e8effc] rounded-[20px] h-[1100px] md:h-[1000px]" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className={Classes["container"]}>
            <div className="py-14 md:py-20 text-center text-white">
              <h2 className="text-3xl md:text-[50px] font-medium mb-2 ">Publication</h2>
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
              hoverTextColor="#ffffff"
              inactiveTextColor="#e8effc"
              activeBgColor="#ffb703"
              inactiveBgColor="#0f4a85"
              pillContainerBgColor="#ffb703"
              alignTabs="start"
            />
          </div>
        </div>

        {/* Floating Cards OUTSIDE Blue Section */}
        <div className={`${Classes["container"]} mt-15 md:mt-[-200px] p-4 md:px-6 bg-white rounded-xl shadow-xl`}>
          <div className="container flex flex-col-reverse lg:flex-row items-center">
            {/* Left Content */}
            <div className="w-full lg:w-[32%] space-y-6 px-0 md:px-10 py-5 ">
              <h2 className="text-3xl md:text-5xl pt-10 font-medium text-[#023047]">{PublicationFloatingCardData.title}</h2>
              <p className="text-gray-700 text-sm md:text-base! leading-relaxed">{PublicationFloatingCardData.description}</p>

              <a
                href={PublicationFloatingCardData.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#0f4a85] border-2 group border-[#ffb703] text-white font-semibold uppercase py-3 px-5 rounded-lg hover:bg-white hover:text-[#0f4a85] transition-colors duration-200 w-fit"
              >
            <span className="bg-white p-1 rounded-lg transition-all duration-500 group-hover:bg-[#ffb703]"><PdfSvgIcon /></span>
                Download PDF
              </a>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-[68%] flex justify-center">
              <img src={PublicationFloatingCardData.imgUrl} alt={PublicationFloatingCardData.title} className="rounded-2xl md:mr-10 md:ml-auto shadow-lg w-full max-w-[550px] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationSection;
