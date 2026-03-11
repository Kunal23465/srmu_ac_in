import { opportunityCardDataAIML, partnerDataforAIandML } from "../../../data/programs/btechincseai-ml-data/btechincseai-ml-data";
import Counter from "../../../utils/custom/Counter";
import Classes from "../../../utils/styles/Global.module.css";
import CustomDepartmentSlider from "../../../utils/custom/CustomDepartmentSlider";
import WhyCardComp from "./WhyCardComp";

import CustomDepartmentHighlights from "../../../utils/custom/CustomDepartmentHighlights";
import CustomProgramPLOAccordian from "../../../utils/custom/CustomProgramPLOAccordian";
import CustomProgramOppertunitySlider from "../../../utils/custom/CustomProgramOppertunitySlider";
import EnquiryForm from "../../academics/institutes/EnquiryForm";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { CustomTopFooterData1 } from "../../../data/about/leadership-and-governance/leadership-and-governance-data";
import { CustomCompaniesScope } from "../../../utils/custom/CustomCompaniesScope";
import CustomProgramScholarshipSchemeCard from "../../../utils/custom/CustomProgramScholarshipSchemeCard";
import CustomEligibilitySection from "../../../utils/custom/CustomEligibilitySection";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { fetchProgramFinderByID } from "../../../store/program-finder/programFinderThunk";
import { useEffect, useState } from "react";
import ProgramFeeTable from "./ProgramFeeTable";
import { fetchProgramFeesByProgramId } from "../../../store/program-finder/program-fees/programFeesThunk";
import { fetchWhySrmuSectionById } from "../../../store/program-finder/why-srmu/whySrmuSectionThunk";
import { getCounterById } from "../../../store/program-finder/counter/getCounterThunk";
import { fetchProgramHeighlightById } from "../../../store/program-finder/program-heighlight/programHeighlightThunk";
import { Helmet } from "react-helmet-async";
import { FaArrowRightLong } from "react-icons/fa6";
import { fetchRecruiterById } from "../../../store/recruiter/recruiterThunk";
// import PartnerLogos from "./PartnerLogos";
import { fetchWhySrmuLogoById } from "../../../store/why-srmu/whySrmuLogoThunk";
const ProgramDetails: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isPhd, setIsPhd] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [programId, setProgramId] = useState<string | null>(null);

  const { programId: baseProgramId } = useSelector((state: RootState) => state.programId)
  console.log(baseProgramId, "programId in detail page")
  const { dataByID } = useSelector((state: RootState) => state.getProgramFinder);
  const { data: departmentHeghlightData, loading: departmentHeghlightLoading } = useSelector((state: RootState) => state.getDepartmentHeighlightById);
  const { data: feesData } = useSelector((state: RootState) => state.programFees);
  const { data: whySrmuData } = useSelector((state: RootState) => state.getWhySrmuSection);
  const { data: counterData } = useSelector((state: RootState) => state.getCounterById);
  const { data: recruiterData, loading: recruiterLoading } = useSelector((state: RootState) => state.getRecruiter);
  const { data: whySrmuLogo } = useSelector((state: RootState) => state.whySrmuLogoById);

  // Initialize programId from localStorage on client side only
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedProgramId = localStorage.getItem("programId");
      setProgramId(storedProgramId);
    }
  }, []);

  useEffect(() => {
    if (programId !== null) {
      const numericProgramId = Number(programId);
      dispatch(fetchWhySrmuSectionById({ programId: numericProgramId }));
      dispatch(fetchProgramFinderByID(numericProgramId));
      dispatch(fetchProgramFeesByProgramId(numericProgramId));
      dispatch(getCounterById(numericProgramId));
      dispatch(fetchProgramHeighlightById(numericProgramId));
      dispatch(fetchRecruiterById({ programId: numericProgramId }));
      dispatch(fetchWhySrmuLogoById({ programId: numericProgramId }));
    }
    if (programId == "81") {
      setIsPhd(true);
    } else {
      setIsPhd(false);
    }

  }, [dispatch, programId]);

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

  // program heighlight

  // sector logo
  // @ts-ignore
  const formatRecruiters = (apiData) => {
    // @ts-ignore
    const government = [];
    // @ts-ignore
    const privateSector = [];
    // @ts-ignore
    apiData.forEach((item) => {
      if (!item.status) return; // optional safety

      const company = {
        id: item.recruiterId,
        logo: item.imagePath,
        title: item.title,
      };

      if (item.companyType === "GOVERNMENT") {
        government.push(company);
      } else if (item.companyType === "PRIVATE") {
        privateSector.push(company);
      }
    });

    return {
      sectors: [
        {
          label: "PRIVATE SECTOR",
          // @ts-ignore
          companies: privateSector,
        },
        {
          label: "GOVERNMENT SECTOR",
          // @ts-ignore
          companies: government,
        },
      ],
    };
  };

  console.log("dataByID", dataByID);

  if (recruiterLoading) {
    return <p>loading....</p>;
  }

  return (
    <>
      <Helmet>
        {/* @ts-ignore */}
        <title>{dataByID?.metaTitle ?? ""}</title>
        {/* @ts-ignore */}
        <meta name="description" content={dataByID?.metaDescription ?? ""} />
      </Helmet>
      <div className="mt-20 ">
        <div className={`${Classes["container"]} relative`}>
          {
            // @ts-ignore
            dataByID?.documentPath && dataByID?.documentPath != null && <Link Link
              target="_blank"
              // @ts-ignore
              to={dataByID?.documentPath}
              className="bg-[#ffb703] absolute -top-18 lg:-top-44 right-0 border text-nowrap border-[#ffb703] hover:bg-white text-[#023047] hover:text-[#ffb703] transition-all duration-500 px-3 lg:px-6 py-2 lg:py-3 text-sm sm:text-base font-medium rounded-lg inline-flex items-center gap-2"
            >
              Download Syllabus <FaArrowRightLong />
            </Link>
          }
          {/* @ts-ignore */}
          <h2 className="lg:text-[50px] leading-[1.2] md:text-[46.875px] text-[28px] fw500 text-[#023047]">{dataByID?.name}</h2>
          {/* @ts-ignore */}
          <p className="text-[#023047] mt-3 leading-[1.2] text-[18px] sm:text-[24px] lg:text-[2rem] fw500">{dataByID?.title}</p>
          {/* <CustomOverviewSection data={BtechCSEAIandMLOverviewData} /> */}
          <div className={` py-7 md:py-10 lg:py-14`}>
            <div className={`block  lg:flex   gap-4  md:items-stretch   justify-between md:flex-row items-start`}>
              <div className={`w-auto mb-4 lg:mb-0  ${" border-l-4 pl-2 lg:pl-0 lg:border-l-0  lg:border-r-4"}  border-[#ffb703] flex flex-col justify-start`}>
                <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] whitespace-pre-line font-semibold leading-11 pr-4 sm:min-w-[350px] mt-5">Overview</h2>
              </div>
              <div className={`text-justify md:line-clamp-none ${expanded ? "line-clamp-none" : "line-clamp-5"}`}>
                <div className="text-justify [&_p]:mb-3! [&_strong]:text-[16px]! [&_strong]:mb-3! lg:text-[16px] md:text-[15px] text-[14px] [&_ul]:ml-4!">
                  {/* @ts-ignore */}
                  {typeof dataByID?.overview === "string" ? <div dangerouslySetInnerHTML={{ __html: dataByID?.overview }} /> : dataByID?.overview}
                </div>
              </div>

              {/* Read more / less — ONLY below md */}
              <button onClick={() => setExpanded(!expanded)} className=" text-[#0f4a85] font-medium md:hidden underline">
                {expanded ? "Read less" : "Read more"}
              </button>
            </div>
          </div>
          <Counter counterData={convertedCounterData} />
          {/* @ts-ignore */}
          <CustomEligibilitySection data={dataByID?.eligibility} />
        </div>
        <div className="bg-[#ecf0f9] pb-10">
          <CustomDepartmentSlider
            heading={`${!isPhd ? "Why SRMU?" : "Ph.D. Process"} `}
            description=""
            data={whySrmuData}
            renderCard={({ item, index }) => <WhyCardComp item={item} imageIndex={index % 4} />}
            bgColor="transparent"
            headingColor="black"
            descriptionColor="#e5e5e5"
            breakpoints={{ desktop: 4, tablet: 3, mobile: 1 }}
          />

          {!isPhd && (
            <div className={`${Classes["container"]}`}>
              {/* recruiterData */}
              {/* <PartnerLogos data={partnerDataforAIandML} /> */}

              <div className={`grid w-full grid-cols-2  ${whySrmuLogo.length > 4 ? "sm:grid-cols-3 lg:grid-cols-6 lg:gap-10" : "sm:grid-cols-2 md:grid-cols-4 sm:gap:15 lg:gap-20"}  gap-5   place-items-start`}>
                {/* {recruiterData
                  .filter((ele) => ele.featured)
                  .map((item, index) => (
                    <div key={index} className="flex border w-full md:border-none border-[#ccc] py-2 px-3 sm:p-0 flex-col items-start gap-5">
                      <img src={item.imagePath} alt={item.title} className=" w-[105px] sm:w-[170px] md:w-[210px] object-contain" />
                     
                      <div className="[&_p]:font-semibold md:[&_p]:text-lg [&_p]:text-left" dangerouslySetInnerHTML={{ __html: item.brief }} />
                    </div>
                  ))} */}
                {
                  whySrmuLogo.length > 0 ? (<> {
                    whySrmuLogo.map((item, index) => (
                      <div key={index} className="flex border w-full md:border-none border-[#ccc] py-2 px-3 sm:p-0 flex-col items-center justify-start gap-5">
                        <img
                          src={item.image}
                          alt={item.title}
                          className=" w-[105px] sm:w-[170px] md:w-[210px] object-contain"
                        />
                        <p className="text-base sm:text-lg fw600 text-center">
                          {item.title}
                        </p>
                      </div>
                    ))
                  }</>) : (<> {
                    partnerDataforAIandML.map((item, index) => (
                      <div key={index} className="flex border w-full md:border-none border-[#ccc] py-2 px-3 sm:p-0 flex-col items-center gap-5">
                        <img
                          src={item.img}
                          alt={item.title}
                          className=" w-[105px] sm:w-[170px] md:w-[210px] object-contain"
                        />
                        <p className="text-base sm:text-lg fw600 text-center">
                          {item.title}
                        </p>
                      </div>
                    ))
                  }</>)
                }
                {/* {whySrmuLogo.map((item, index) => (
                  <div key={index} className="flex border w-full md:border-none border-[#ccc] py-2 px-3 sm:p-0 flex-col items-center gap-5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className=" w-[105px] sm:w-[170px] md:w-[210px] object-contain"
                    />
                    <p className="text-base sm:text-lg fw600 text-center">
                      {item.name}
                    </p>
                  </div>
                ))} */}
              </div>
            </div>
          )}
        </div>
        <div className={`${Classes["container"]}`}>
          <h2 className="mt-20 mb-10 text-center text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500 text-[#023047]">Program Fee</h2>
          {/* <CustomDepartmentFeeDetailsTable data={ProgramFeesAIandML} /> */}
          {/* @ts-ignore */}
          {feesData && feesData.length > 0 && <ProgramFeeTable data={feesData[0]} />}
        </div>
        {!isPhd && (
          <div className="my-10 ">
            <CustomProgramScholarshipSchemeCard />
          </div>
        )}

        {departmentHeghlightLoading ? (
          <p>Loading.....</p>
        ) : (
          <>
            {!isPhd && (
              <div className="my-10 ">
                <div className={`${Classes["container"]}`}>
                  <CustomDepartmentHighlights heading="Department Highlights" steps={departmentHeghlightData} />
                </div>
              </div>
            )}
          </>
        )}

        {
          //  @ts-ignore
          !isPhd && <CustomProgramPLOAccordian POdata={dataByID?.programObjective} PLOdata={dataByID?.programLearningOutcomes} PSOdata={dataByID?.specificOutcomes} />
        }

        <div className="bg-[#dee4f2]">
          <div className={`${Classes["container"]}`}>
            {/* @ts-ignore */}
            <CustomCompaniesScope data={formatRecruiters(recruiterData)} list={dataByID?.scope} />
          </div>
        </div>

        {!isPhd && (
          <div className={`${Classes["container"]}`}>
            <CustomProgramOppertunitySlider data={opportunityCardDataAIML} />
          </div>
        )}

        <EnquiryForm />

        <CustomTopFooter data={CustomTopFooterData1} />
      </div >
    </>
  );
};

export default ProgramDetails;
