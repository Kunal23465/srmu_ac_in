import { Suspense, lazy, useEffect, useState } from "react";
import { partnerDataforAIandML } from "../../../data/programs/btechincseai-ml-data/btechincseai-ml-data";
import Counter from "../../../utils/custom/Counter";
import Classes from "../../../utils/styles/Global.module.css";
import WhyCardComp from "./WhyCardComp";
import { CustomTopFooterData1 } from "../../../data/about/leadership-and-governance/leadership-and-governance-data";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { fetchProgramFinderByID } from "../../../store/program-finder/programFinderThunk";
import { fetchProgramFeesByProgramId } from "../../../store/program-finder/program-fees/programFeesThunk";
import { fetchWhySrmuSectionById } from "../../../store/program-finder/why-srmu/whySrmuSectionThunk";
import { getCounterById } from "../../../store/program-finder/counter/getCounterThunk";
import { fetchProgramHeighlightById } from "../../../store/program-finder/program-heighlight/programHeighlightThunk";
import { FaArrowRightLong } from "react-icons/fa6";
import { fetchRecruiterById } from "../../../store/recruiter/recruiterThunk";
// import PartnerLogos from "./PartnerLogos";
import { fetchWhySrmuLogoById } from "../../../store/why-srmu/whySrmuLogoThunk";
import { setProgramId as setProgramIdInStore } from "../../../store/program-finder/program/programSlice";
import PageNotFound from "../../../pages/PageNotFound";
import { resolveProgramRouteSlug } from "../../../utils/legacyProgramRoutes";
import SeoHead from "../../seo/SeoHead";
import { DEFAULT_SOCIAL_IMAGE, SITE_NAME, SITE_URL, buildCanonicalUrl, stripHtml } from "../../../utils/seo";
import CustomEligibilitySection from "../../../utils/custom/CustomEligibilitySection";
import DeferredSection from "../../home/DeferredSection";
import DeferredSectionFallback from "../../home/DeferredSectionFallback";

const ProgramFeeTable = lazy(() => import("./ProgramFeeTable"));
const CustomDepartmentSlider = lazy(() => import("../../../utils/custom/CustomDepartmentSlider"));
const CustomDepartmentHighlights = lazy(() => import("../../../utils/custom/CustomDepartmentHighlights"));
const CustomProgramPLOAccordian = lazy(() => import("../../../utils/custom/CustomProgramPLOAccordian"));
const CustomProgramOppertunitySlider = lazy(() => import("../../../utils/custom/CustomProgramOppertunitySlider"));
const EnquiryForm = lazy(() => import("../../academics/institutes/EnquiryForm"));
const CustomTopFooter = lazy(() => import("../../../utils/custom/CustomTopFooter"));
const CustomProgramScholarshipSchemeCard = lazy(() => import("../../../utils/custom/CustomProgramScholarshipSchemeCard"));
const CustomCompaniesScope = lazy(() =>
  import("../../../utils/custom/CustomCompaniesScope").then((module) => ({ default: module.CustomCompaniesScope })),
);

const ProgramDetailsLoader = () => (
  <div className="mt-20 min-h-[60vh]">
    <div className="flex h-full min-h-[60vh] flex-col items-center justify-center gap-4">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#d7e3f4] border-t-[#023047]" />
      <p className="text-base font-medium text-[#023047]">Loading program details...</p>
    </div>
  </div>
);

const renderDeferredFallback = (minHeight: number) => <DeferredSectionFallback minHeight={minHeight} />;

const SectionLoader = ({ minHeight = 240 }: { minHeight?: number }) => (
  <div className="w-full animate-pulse rounded-[24px] bg-slate-100/80" style={{ minHeight }} aria-hidden="true" />
);

const toIso8601CourseDuration = (value?: string | number | null) => {
  const rawValue = String(value ?? "").trim().toLowerCase();

  if (!rawValue) {
    return undefined;
  }

  const normalizedValue = rawValue.replace(/\s+/g, " ");

  const directNumber = Number(normalizedValue);
  if (Number.isFinite(directNumber) && directNumber > 0) {
    return `P${directNumber}Y`;
  }

  const durationMatch = normalizedValue.match(/(\d+(?:\.\d+)?)\s*(year|years|yr|yrs|month|months|mo|mos|week|weeks|day|days|semester|semesters|sem)\b/);

  if (!durationMatch) {
    return undefined;
  }

  const quantity = Number(durationMatch[1]);
  const unit = durationMatch[2];

  if (!Number.isFinite(quantity) || quantity <= 0) {
    return undefined;
  }

  if (["year", "years", "yr", "yrs"].includes(unit)) {
    return `P${quantity}Y`;
  }

  if (["month", "months", "mo", "mos"].includes(unit)) {
    return `P${quantity}M`;
  }

  if (["week", "weeks"].includes(unit)) {
    return `P${quantity}W`;
  }

  if (["day", "days"].includes(unit)) {
    return `P${quantity}D`;
  }

  if (["semester", "semesters", "sem"].includes(unit)) {
    const derivedMonths = quantity * 6;
    return `P${derivedMonths}M`;
  }

  return undefined;
};

const ProgramDetails: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const { programName } = useParams();
  const [expanded, setExpanded] = useState(false);
  const [isProgramRouteLoading, setIsProgramRouteLoading] = useState(false);
  const [hasProgramRouteLoaded, setHasProgramRouteLoaded] = useState(false);

  const { dataByID, currentDetailsSlug } = useSelector((state: RootState) => state.getProgramFinder);
  const { data: departmentHeghlightData, loading: departmentHeghlightLoading } = useSelector((state: RootState) => state.getDepartmentHeighlightById);
  const { data: feesData, loading: feesLoading } = useSelector((state: RootState) => state.programFees);
  const { data: whySrmuData, loading: whySrmuLoading } = useSelector((state: RootState) => state.getWhySrmuSection);
  const { data: counterData, loading: counterLoading } = useSelector((state: RootState) => state.getCounterById);
  const { data: recruiterData, loading: recruiterLoading } = useSelector((state: RootState) => state.getRecruiter);
  const { data: whySrmuLogo, loading: whySrmuLogoLoading } = useSelector((state: RootState) => state.whySrmuLogoById);
  const normalizedFeesData = Array.isArray(feesData) ? feesData[0] : feesData;
  const normalizedProgramSlug = resolveProgramRouteSlug(programName || "");
  const hasCurrentProgramData = Boolean(dataByID?.programId && currentDetailsSlug === normalizedProgramSlug);
  const currentProgramId = Number(dataByID?.programId);
  const hasCurrentFeesData = Number((normalizedFeesData as any)?.programId) === currentProgramId;
  const isPhd = currentProgramId === 81;
  const programLabel = dataByID?.name || programName?.replace(/-/g, " ") || "Program";
  const programTitle = dataByID?.title?.trim() || "";
  const metaTitle = dataByID?.metaTitle?.trim() || "";
  const normalizedProgramLabel = programLabel.trim().toLowerCase();
  const normalizedMetaTitle = metaTitle.toLowerCase();
  const isProgramMetaTitleDistinct =
    Boolean(metaTitle) &&
    normalizedMetaTitle !== normalizedProgramLabel &&
    normalizedMetaTitle !== `${normalizedProgramLabel} | ${SITE_NAME}, lucknow`.toLowerCase() &&
    normalizedMetaTitle !== `${normalizedProgramLabel} | srmu lucknow`;
  const seoTitle =
    (isProgramMetaTitleDistinct ? metaTitle : "") ||
    `${programLabel} Admissions, Fees & Eligibility | ${SITE_NAME}, Lucknow`;
  const seoDescription =
    dataByID?.metaDescription?.trim() ||
    stripHtml(dataByID?.overview || dataByID?.description || programTitle || programLabel).slice(0, 160) ||
    `Explore ${programLabel} at ${SITE_NAME}, Lucknow. Check eligibility, fees, curriculum, and career opportunities.`;
  const courseDuration = toIso8601CourseDuration(dataByID?.totalDurationYear);
  const firstYearTuitionFee = normalizedFeesData?.fees?.reduce((sum: number, fee: any) => {
    const yearOneAmount = Number(fee?.yearWiseAmount?.["1"] || 0);
    return sum + yearOneAmount;
  }, 0);
  const tuitionOffer =
    firstYearTuitionFee && firstYearTuitionFee > 0
      ? {
        "@type": "Offer",
        category: "Tuition Fee",
        priceCurrency: "INR",
        price: firstYearTuitionFee,
      }
      : undefined;
  const courseInstance = courseDuration
    ? {
      "@type": "CourseInstance",
      courseMode: "Full-time",
      courseWorkload: courseDuration,
      url: buildCanonicalUrl(location.pathname),
      location: {
        "@type": "Place",
        name: SITE_NAME,
        url: SITE_URL,
      },
      ...(tuitionOffer ? { offers: tuitionOffer } : {}),
    }
    : undefined;
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: programLabel,
    description: seoDescription,
    provider: {
      "@type": "CollegeOrUniversity",
      name: SITE_NAME,
    },
    url: buildCanonicalUrl(location.pathname),
    timeRequired: courseDuration,
    ...(courseInstance ? { hasCourseInstance: courseInstance } : {}),
    ...(tuitionOffer ? { offers: tuitionOffer } : {}),
  };

  useEffect(() => {
    if (!hasCurrentProgramData || !dataByID?.programId) {
      return;
    }

    dispatch(setProgramIdInStore(String(dataByID.programId)));
  }, [dataByID?.programId, dispatch, hasCurrentProgramData]);

  useEffect(() => {
    let cancelled = false;

    const loadProgramRouteData = async () => {
      if (!programName) {
        setIsProgramRouteLoading(false);
        setHasProgramRouteLoaded(true);
        return;
      }

      if (hasCurrentProgramData) {
        setIsProgramRouteLoading(false);
        setHasProgramRouteLoaded(true);
        return;
      }

      setIsProgramRouteLoading(true);
      setHasProgramRouteLoaded(false);

      await dispatch(fetchProgramFinderByID(normalizedProgramSlug));

      if (!cancelled) {
        setIsProgramRouteLoading(false);
        setHasProgramRouteLoaded(true);
      }

      void Promise.allSettled([
        dispatch(fetchProgramFeesByProgramId(normalizedProgramSlug)),
        dispatch(fetchWhySrmuSectionById({ slug: normalizedProgramSlug })),
        dispatch(getCounterById({ slug: normalizedProgramSlug })),
        dispatch(fetchProgramHeighlightById(normalizedProgramSlug)),
        dispatch(fetchRecruiterById({ slug: normalizedProgramSlug })),
        dispatch(fetchWhySrmuLogoById({ slug: normalizedProgramSlug })),
      ]);
    };

    void loadProgramRouteData();

    return () => {
      cancelled = true;
    };
  }, [dispatch, normalizedProgramSlug, programName]);

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
          label: "GOVERNMENT SECTOR",
          // @ts-ignore
          companies: government,
        },
        {
          label: "PRIVATE SECTOR",
          // @ts-ignore
          companies: privateSector,
        },
      ],
    };
  };

  if (isProgramRouteLoading || !hasCurrentProgramData) {
    if (hasProgramRouteLoaded && !hasCurrentProgramData) {
      return <PageNotFound />;
    }

    return <ProgramDetailsLoader />;
  }


  console.log("departmentHeghlightData Data:", departmentHeghlightData);
  return (
    <>
      <SeoHead
        title={seoTitle}
        description={seoDescription}
        pathname={location.pathname}
        image={DEFAULT_SOCIAL_IMAGE}
        jsonLd={courseSchema}
      />
      <div className="mt-20 ">
        <div className={`${Classes["container"]} relative`}>
          {
            // @ts-ignore
            dataByID?.documentPath && dataByID?.documentPath != null && <Link
              target="_blank"
              // @ts-ignore
              to={dataByID?.documentPath}
              className="bg-[#ffb703] absolute -top-18 lg:-top-44 right-0 border text-nowrap border-[#ffb703] hover:bg-white text-[#023047] hover:text-[#ffb703] transition-all duration-500 px-3 lg:px-6 py-2 lg:py-3 text-sm sm:text-base font-medium rounded-lg inline-flex items-center gap-2"
            >
              Download Syllabus <FaArrowRightLong />
            </Link>
          }
          {/* @ts-ignore */}
          <h1 className="lg:text-[50px] leading-[1.2] md:text-[46.875px] text-[28px] fw500 text-[#023047]">{dataByID?.name}</h1>
          {/* @ts-ignore */}
          <p className="text-[#023047] mt-3 leading-[1.2] text-[18px] sm:text-[24px] lg:text-[2rem] fw500">{dataByID?.title}</p>

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
        <DeferredSection minHeight={440} eagerOnIdle rootMargin="180px 0px" fallback={renderDeferredFallback(440)}>
          {whySrmuLoading && whySrmuData.length === 0 ? (
            <div className="bg-[#ecf0f9] pb-10">
              <div className={`${Classes["container"]} pt-10`}>
                <SectionLoader minHeight={360} />
              </div>
            </div>
          ) : (
            whySrmuData.length > 0 && (
              <div className="bg-[#ecf0f9] pb-10">
                <Suspense fallback={<div className={`${Classes["container"]} pt-10`}><SectionLoader minHeight={360} /></div>}>
                  <CustomDepartmentSlider
                    heading={`${!isPhd ? "Why SRMU?" : "Ph.D. Process"} `}
                    description=""
                    data={whySrmuData}
                    renderCard={({ item, index }) => <WhyCardComp item={item} index={index} />}
                    bgColor="transparent"
                    headingColor="black"
                    descriptionColor="#e5e5e5"
                    breakpoints={{ desktop: 4, tablet: 3, mobile: 1 }}
                  />
                </Suspense>

                {!isPhd && (
                  <div className={`${Classes["container"]}`}>
                    <div className={`grid w-full grid-cols-2 ${whySrmuLogo.length > 4 ? "sm:grid-cols-3 lg:grid-cols-6 lg:gap-10" : "sm:grid-cols-2 md:grid-cols-4 sm:gap:15 lg:gap-20"} gap-5 place-items-start`}>
                      {(whySrmuLogoLoading && whySrmuLogo.length === 0 ? [] : whySrmuLogo).length > 0
                        ? whySrmuLogo.map((item, index) => (
                          <div key={index} className="flex border w-full md:border-none border-[#ccc] py-2 px-3 sm:p-0 flex-col items-center justify-start gap-5">
                            <img src={item.image} alt={item.title} className="w-[105px] sm:w-[170px] md:w-[210px] object-contain" />
                            <p className="text-base sm:text-lg fw600 text-center">{item.title}</p>
                          </div>
                        ))
                        : partnerDataforAIandML.length > 0 &&
                        partnerDataforAIandML.map((item, index) => (
                          <div key={index} className="flex border w-full md:border-none border-[#ccc] py-2 px-3 sm:p-0 flex-col items-center gap-5">
                            <img src={item.img} alt={item.title} className="w-[105px] sm:w-[170px] md:w-[210px] object-contain" />
                            <p className="text-base sm:text-lg fw600 text-center">{item.title}</p>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            )
          )}
        </DeferredSection>

        <DeferredSection minHeight={360} rootMargin="220px 0px" fallback={renderDeferredFallback(360)}>
          <div className={`${Classes["container"]}`}>
            <h2 className="mt-20 mb-10 text-center text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500 text-[#023047]">Program Fee</h2>
            {feesLoading && !hasCurrentFeesData ? (
              <SectionLoader minHeight={220} />
            ) : normalizedFeesData?.fees?.length > 0 ? (
              <Suspense fallback={<SectionLoader minHeight={220} />}>
                <ProgramFeeTable data={normalizedFeesData} />
              </Suspense>
            ) : null}
          </div>
        </DeferredSection>

        {!isPhd && (
          <DeferredSection minHeight={280} rootMargin="240px 0px" fallback={renderDeferredFallback(280)}>
            <div className="my-10">
              <Suspense fallback={<div className={`${Classes["container"]}`}><SectionLoader minHeight={220} /></div>}>
                <CustomProgramScholarshipSchemeCard />
              </Suspense>
            </div>
          </DeferredSection>
        )}

        {!isPhd && (
          <DeferredSection minHeight={520} rootMargin="260px 0px" fallback={renderDeferredFallback(520)}>
            {departmentHeghlightLoading && departmentHeghlightData.length === 0 ? (
              <div className={`${Classes["container"]}`}><SectionLoader minHeight={420} /></div>
            ) : (
              departmentHeghlightData.length > 0 && (
                <div className="my-10">
                  <div className={`${Classes["container"]}`}>
                    <Suspense fallback={<SectionLoader minHeight={420} />}>
                      <CustomDepartmentHighlights heading="Department Highlights" steps={departmentHeghlightData} />
                    </Suspense>
                  </div>
                </div>
              )
            )}
          </DeferredSection>
        )}

        {!isPhd && dataByID?.programObjective && (
          <DeferredSection minHeight={420} rootMargin="280px 0px" fallback={renderDeferredFallback(420)}>
            <Suspense fallback={<div className={`${Classes["container"]}`}><SectionLoader minHeight={360} /></div>}>
              <CustomProgramPLOAccordian POdata={dataByID?.programObjective} PLOdata={dataByID?.programLearningOutcomes} PSOdata={dataByID?.specificOutcomes} />
            </Suspense>
          </DeferredSection>
        )}

        <DeferredSection minHeight={420} rootMargin="300px 0px" fallback={renderDeferredFallback(420)}>
          <div className="bg-[#dee4f2]">
            <div className={`${Classes["container"]}`}>
              {recruiterLoading && recruiterData.length === 0 ? (
                <SectionLoader minHeight={320} />
              ) : (
                <Suspense fallback={<SectionLoader minHeight={320} />}>
                  <CustomCompaniesScope data={formatRecruiters(recruiterData)} list={dataByID?.scope} />
                </Suspense>
              )}
            </div>
          </div>
        </DeferredSection>

        {!isPhd && (
          <DeferredSection minHeight={360} rootMargin="320px 0px" fallback={renderDeferredFallback(360)}>
            <div className={`${Classes["container"]}`}>
              <Suspense fallback={<SectionLoader minHeight={280} />}>
                <CustomProgramOppertunitySlider data={dataByID?.higherPrograms} />
              </Suspense>
            </div>
          </DeferredSection>
        )}

        <DeferredSection minHeight={420} rootMargin="340px 0px" fallback={renderDeferredFallback(420)}>
          <div className={`${isPhd ? "mt-10" : ""}`}>
            <Suspense fallback={<div className={`${Classes["container"]}`}><SectionLoader minHeight={320} /></div>}>
              <EnquiryForm />
            </Suspense>
          </div>
        </DeferredSection>

        <DeferredSection minHeight={220} rootMargin="360px 0px" fallback={renderDeferredFallback(220)}>
          <Suspense fallback={<div className={`${Classes["container"]}`}><SectionLoader minHeight={180} /></div>}>
            <CustomTopFooter data={CustomTopFooterData1} />
          </Suspense>
        </DeferredSection>
      </div >
    </>
  );
};

export default ProgramDetails;
