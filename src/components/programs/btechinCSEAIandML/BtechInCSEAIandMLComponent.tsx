import { abc, BtechCSEAIandMLOverviewData, careerData, counterDataForBtechinCSEAIandML, partnerDataforAIandML, ProgramFeesAIandML, scholarshipSchemesSample, steps, whyData } from "../../../data/programs/btechincseai-ml-data/btechincseai-ml-data";
import Counter from "../../../utils/custom/Counter";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import Classes from "../../../utils/styles/Global.module.css";
import EligibilitySection from "../../../utils/custom/CustomEligibilitySection";
import CustomDepartmentSlider from "../../../utils/custom/CustomDepartmentSlider";
import WhyCardComp from "./WhyCardComp";
import PartnerLogos from "./PartnerLogos";
import CustomDepartmentFeeDetailsTable from "../../../utils/custom/CustomDepartmentFeeDetailsTable";
import ScholarshipSchemes from "./ScholarshipScheme";
import CustomDepartmentHighlights from "../../../utils/custom/CustomDepartmentHighlights";
import CustomProgramPLOAccordian from "../../../utils/custom/CustomProgramPLOAccordian";
import ScopeInCompanies from "./ScopeCompany";
// import CustomInstitueVissionMissionCard from "../../../utils/custom/CustomInstitueVissionMissionCard";
// import { visionMissionData } from "../../../data/academics/institute/data";




const BtechInCSEAIandMLComponent = () => {
     const items = [
        // {
        //     key: "1",
        //     label: "Industry Honours",
        //     content: <CustomDepartmentFeeDetailsTable data={civilIndshonoursEngineeringFeeTable} />,
        // },
      

    ];

    return (
        <div className="mt-20">
            <div className={`${Classes["container"]}`}>
                <h2 className="font50 fw500 text-[#023047]">
                    B.Tech. in CSE (Artificial Intelligence & Machine Learning)
                </h2>
                <p className="text-[#023047] font30 fw500">
                    Empowering innovation through the fusion of technologies
                </p>

                <CustomOverviewSection data={BtechCSEAIandMLOverviewData} />
                <Counter counterData={counterDataForBtechinCSEAIandML} />

                <EligibilitySection />

                {/* <CustomInstitueVissionMissionCard data={visionMissionData} /> */}

            </div>
            <div className="bg-[#ecf0f9] pb-10">
                <CustomDepartmentSlider
                    heading="Why SRMU?"
                    description=""
                    data={whyData}
                    renderCard={({ item }) => <WhyCardComp item={item} />}
                    bgColor="transparent"   // <-- ADD THIS

                    arrowColor="#ffb703"
                    headingColor="black"
                    descriptionColor="#e5e5e5"
                    arrowBorderColor="#023047"
                    breakpoints={{ desktop: 4, tablet: 3, mobile: 1 }}
                />
                <div className={`${Classes["container"]}`}>
                    <PartnerLogos data={partnerDataforAIandML} />
                </div>

            </div>

            <div className={`${Classes["container"]}`}>
                <h2 className="mt-20 mb-10 text-center font50 fw500 text-[#023047]">Program Fees</h2>
                <CustomDepartmentFeeDetailsTable data={ProgramFeesAIandML} />
            </div>


            <ScholarshipSchemes data={scholarshipSchemesSample} />

            <div className={`${Classes["container"]}`}>
                <CustomDepartmentHighlights heading="Department Highlights" steps={steps} />;
            </div>
            <CustomProgramPLOAccordian POdata={abc.POdata} PLOdata={abc.PLOdata} PSOdata={abc.PSOdata} />


            <ScopeInCompanies careerOptions={careerData} />
        </div>
    )
}

export default BtechInCSEAIandMLComponent