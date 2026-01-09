import { eligibilityDataforAIandML, opportunityCardDataAIML, partnerDataforAIandML, scopeData, steps } from "../../../data/programs/btechincseai-ml-data/btechincseai-ml-data";
import Counter from "../../../utils/custom/Counter";
import Classes from "../../../utils/styles/Global.module.css";
import CustomDepartmentSlider from "../../../utils/custom/CustomDepartmentSlider";
import WhyCardComp from "./WhyCardComp";
import PartnerLogos from "./PartnerLogos";
import CustomDepartmentHighlights from "../../../utils/custom/CustomDepartmentHighlights";
import CustomProgramPLOAccordian from "../../../utils/custom/CustomProgramPLOAccordian";
import CustomProgramOppertunitySlider from "../../../utils/custom/CustomProgramOppertunitySlider";
import EnquiryForm from "../../academics/institutes/EnquiryForm";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { CustomTopFooterData1 } from "../../../data/about/leadership-and-governance/leadership-and-governance-data";
import { CustomCompaniesScope } from "../../../utils/custom/CustomCompaniesScope";
import CustomProgramScholarshipSchemeCard from "../../../utils/custom/CustomProgramScholarshipSchemeCard";
import CustomEligibilitySection from "../../../utils/custom/CustomEligibilitySection";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { fetchProgramFinderByID } from "../../../store/program-finder/programFinderThunk";
import { useEffect } from "react";
import ProgramFeeTable from "./ProgramFeeTable";
import { fetchProgramFeesByProgramId } from "../../../store/program-finder/program-fees/programFeesThunk";
import { fetchWhySrmuSectionById } from "../../../store/program-finder/why-srmu/whySrmuSectionThunk";
import { getCounterById } from "../../../store/program-finder/counter/getCounterThunk";

const ProgramDetails = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  // @ts-ignore
  const { dataByID, loading, error } = useSelector((state: RootState) => state.getProgramFinder);
  console.log(dataByID, "program details data");
  const { data: feesData } = useSelector((state: RootState) => state.programFees);
  const { data: whySrmuData } = useSelector((state: RootState) => state.getWhySrmuSection);
  const { data: counterData } = useSelector((state: RootState) => state.getCounterById);
  useEffect(() => {
    dispatch(fetchWhySrmuSectionById({ programId: location.state.programId || undefined }));
    dispatch(fetchProgramFinderByID(location.state.programId || undefined));
    dispatch(fetchProgramFeesByProgramId(location.state.programId || undefined));
    dispatch(getCounterById(location.state.programId || undefined));
    // getCounterById;
  }, [dispatch, location.state.programId]);

  // counter data key change
  const convertedCounterData = counterData.map((item) => {
    let value = item.value;
    let suffix = "";

    // Extract numeric value and suffix
    const match = value.match(/^(\d+)(.*)$/);

    if (match) {
      value = match[1];
      suffix = match[2];
    }

    return {
      id: item.programSubFieldId,
      value,
      suffix,
      label: item.title,
    };
  });

  console.log("counterData==", counterData);
  return (
    <div className="mt-20">
      <div className={`${Classes["container"]}`}>
        {/* @ts-ignore */}
        <h2 className="font50 fw500 text-[#023047]">{dataByID?.name}</h2>
        {/* @ts-ignore */}
        <p className="text-[#023047] font30 fw500">{dataByID?.title}</p>
        {/* <CustomOverviewSection data={BtechCSEAIandMLOverviewData} /> */}
        <div className={` py-7 md:py-10 lg:py-14`}>
          <div className={`flex flex-col  gap-4 items-stretch  justify-between md:flex-row `}>
            <div className={`w-auto  ${" border-l-4 pl-2 md:pl-0 md:border-l-0  md:border-r-4"}  border-[#ffb703] flex flex-col justify-center`}>
              <h2 className="text-[28px]  lg:text-[3.125rem] whitespace-pre-line font-semibold leading-11 pr-4 sm:min-w-[350px]">Overview</h2>
            </div>
            <div className={`md:pl-8 md:py-4`}>
              {/* @ts-ignore */}
              <div className="text-justify">{typeof dataByID?.overview === "string" ? <div dangerouslySetInnerHTML={{ __html: dataByID?.overview }} /> : dataByID?.overview}</div>
            </div>
          </div>
        </div>
        <Counter counterData={convertedCounterData} />
        <CustomEligibilitySection data={eligibilityDataforAIandML} />
      </div>
      <div className="bg-[#ecf0f9] pb-10">
        <CustomDepartmentSlider
          heading="Why SRMU?"
          description=""
          data={whySrmuData}
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
        {/* <CustomDepartmentFeeDetailsTable data={ProgramFeesAIandML} /> */}
        {/* @ts-ignore */}
        {feesData && feesData.length > 0 && <ProgramFeeTable data={feesData[0]} />}
      </div>
      <div className="my-50">
        <CustomProgramScholarshipSchemeCard />
      </div>

      <div className="my-50">
        <div className={`${Classes["container"]}`}>
          <CustomDepartmentHighlights heading="Department Highlights" steps={steps} />
        </div>
      </div>
      {/* @ts-ignore */}
      <CustomProgramPLOAccordian POdata={dataByID?.programObjective} PLOdata={dataByID?.programLearningOutcomes} PSOdata={dataByID?.specificOutcomes} />
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
  );
};

export default ProgramDetails;
