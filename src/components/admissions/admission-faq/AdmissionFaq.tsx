import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import {
  admissionFaqOverviewData,
  after12thFaqData,
  agricultureFaqData,
  bcaFaqData,
  biotechnologyFaqData,
  lawFaqData,
  managementFaqData,
  pharmacyFaqData,
  srmuAdmissionsFaqData,
} from "../../../data/admissions/admission-faq/admission-faq-data";
import CustomFaqAccordion from "../../../utils/custom/CustomFaqAccordian";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { feeStructureCustomTopFooter } from "../../../data/admissions/fee-structure/fee-structue-data";
import { useState, type ReactNode } from "react";

type TabItem = {
  id: string;
  title: string;
  content: string | ReactNode;
};

export const tabs: TabItem[] = [
  {
    id: "after_class_12th",
    title: "After Class 12th",
    content: <CustomFaqAccordion data={after12thFaqData} />,
  },
  {
    id: "BCA_IT",
    title: "BCA & IT ",
    content: <CustomFaqAccordion data={bcaFaqData} />,
  },
  {
    id: "Management",
    title: "Management",
    content: <CustomFaqAccordion data={managementFaqData} />,
  },
  {
    id: "Agriculture",
    title: "Agriculture",
    content: <CustomFaqAccordion data={agricultureFaqData} />,
  },
  {
    id: "Biotechnology",
    title: "Biotechnology",
    content: <CustomFaqAccordion data={biotechnologyFaqData} />,
  },
  {
    id: "Law",
    title: "Law",
    content: <CustomFaqAccordion data={lawFaqData} />,
  },
  {
    id: "Pharmacy",
    title: "Pharmacy",
    content: <CustomFaqAccordion data={pharmacyFaqData} />,
  },
  {
    id: "SRMU_Admissions_Campus_Facilities",
    title: "SRMU Admissions, Campus & Facilities",
    content: <CustomFaqAccordion data={srmuAdmissionsFaqData} />,
  },

  //   srmuAdmissionsFaqData

];

const renderTabContent = (content?: string | ReactNode) => {
  if (!content) return null;

  if (typeof content === "string") {
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  }

  return content;
};

const AdmissionFaq = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeContent = tabs.find((tab) => tab.id === activeTab);
  return (
    <>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={admissionFaqOverviewData} />
        <div className="mb-8 rounded-xl border border-[#d9e3f2] bg-[#f5f9ff] p-2 shadow-[0_6px_24px_rgba(14,46,92,0.08)]">
          <div className="flex justify-center flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-lg px-5 py-2.5 cursor-pointer text-sm md:text-base font-semibold transition-all duration-300 ${activeTab === tab.id
                    ? "bg-[#0f4a85] text-white shadow-[0_8px_20px_rgba(15,74,133,0.35)] ring-2 ring-[#ffb703]"
                    : "bg-white text-[#1f3f68] hover:bg-[#e8f0fb] hover:text-[#0f4a85]"
                  }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* Tabs Content */}
        <div className="rounded-xl border border-[#e1e8f3] border-l-4 border-l-[#ffb703] bg-white p-4 md:p-6 text-[#304766] shadow-sm">
          {renderTabContent(activeContent?.content)}
        </div>
      </div>
      <div className="mt-12">
        <CustomTopFooter data={feeStructureCustomTopFooter} />
      </div>
    </>
  );
};

export default AdmissionFaq;
