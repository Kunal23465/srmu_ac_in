import { abcforALML, BtechCSEAIandMLOverviewData, counterDataForBtechinCSEAIandML, eligibilityDataforAIandML, opportunityCardDataAIML, partnerDataforAIandML, ProgramFeesAIandML, scopeData, whyDataforAIML } from "../../../data/programs/btechincseai-ml-data/btechincseai-ml-data";
import Counter from "../../../utils/custom/Counter";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import Classes from "../../../utils/styles/Global.module.css";
import CustomDepartmentSlider from "../../../utils/custom/CustomDepartmentSlider";
import WhyCardComp from "./WhyCardComp";
import PartnerLogos from "./PartnerLogos";
import CustomDepartmentFeeDetailsTable from "../../../utils/custom/CustomDepartmentFeeDetailsTable";
// import CustomDepartmentHighlights from "../../../utils/custom/CustomDepartmentHighlights";
import CustomProgramPLOAccordian from "../../../utils/custom/CustomProgramPLOAccordian";
import CustomProgramOppertunitySlider from "../../../utils/custom/CustomProgramOppertunitySlider";
import EnquiryForm from "../../academics/institutes/EnquiryForm";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { CustomTopFooterData1 } from "../../../data/about/leadership-and-governance/leadership-and-governance-data";
import { CustomCompaniesScope } from "../../../utils/custom/CustomCompaniesScope";
import CustomProgramScholarshipSchemeCard from "../../../utils/custom/CustomProgramScholarshipSchemeCard";
import CustomEligibilitySection from "../../../utils/custom/CustomEligibilitySection";





const BtechInCSEAIandMLComponent = () => {

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
                {/* @ts-ignore */}
                <CustomEligibilitySection data={eligibilityDataforAIandML} />
            </div>
            <div className="bg-[#ecf0f9] pb-10">
                <CustomDepartmentSlider
                    heading="Why SRMU?"
                    description=""
                    data={whyDataforAIML}
                    renderCard={({ item }) => <WhyCardComp item={item} />}
                    bgColor="transparent"
                    headingColor="black"
                    descriptionColor="#e5e5e5"
                    breakpoints={{ desktop: 4, tablet: 3, mobile: 1 }}
                />
                <div className={`${Classes["container"]}`}>
                    <PartnerLogos data={partnerDataforAIandML} />
                </div>
            </div>
            <div className={`${Classes["container"]}`}>
                <h2 className="mt-20 mb-10 text-center font50 fw500 text-[#023047]">Program Fee</h2>
                <CustomDepartmentFeeDetailsTable data={ProgramFeesAIandML} />
            </div>
            <div className="my-50">
                <CustomProgramScholarshipSchemeCard />
            </div>

            {/* <div className="my-50">
                <div className={`${Classes["container"]}`}>
                    <CustomDepartmentHighlights heading="Department Highlights" steps={steps} />
                </div>
            </div> */}

            <CustomProgramPLOAccordian POdata={abcforALML.POdata} PLOdata={abcforALML.PLOdata} PSOdata={abcforALML.PSOdata} />
            <div className="bg-[#dee4f2]">
                <div className={`${Classes["container"]}`}>
                    <CustomCompaniesScope data={scopeData} />
                </div>
            </div>
            <div className={`${Classes["container"]}`}>
                <CustomProgramOppertunitySlider data={opportunityCardDataAIML} />
            </div>
            <EnquiryForm />
            <CustomTopFooter data={CustomTopFooterData1} />
        </div>
    )
}

export default BtechInCSEAIandMLComponent