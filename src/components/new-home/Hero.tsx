import { useCallback, useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import bannerVideo from '../../assets/new-home/banner_video_optimized.mp4';
import bannerImage from '../../assets/new-home/video-banner.webp';
import bannerImageAvif from '../../assets/new-home/video-banner.avif';
import ApprovedData from '../../data/new-home/ApprovedData';
import Classes from "../../utils/styles/Global.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, store } from "../../store";
import { getAllCareer } from "../../store/api/get-allCareer-slice";
import { getAllState } from "../../store/api/get-allState-slice";
import { getAllProgramByCareerId } from "../../store/api/get-allprogram-byCareerId-slice";
import { getAllCityByStateId } from "../../store/api/get-allCity-byStateId-slice";
import {
  initialValuesForEnquiry,
  validationSchemaForEnquiry,
} from "../admission-enquiry/EnquiryFormData";
import { submissionForEnquiry } from "../../store/submission/enquiry-submission-slice";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;

    if (connection?.saveData || connection?.effectiveType === "2g") {
      return;
    }

    const enableVideo = () => setShouldLoadVideo(true);
    const requestIdle = (window as Window & {
      requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    }).requestIdleCallback;

    if (requestIdle) {
      const idleId = requestIdle(enableVideo, { timeout: 1800 });
      return () => {
        (window as Window & { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback?.(idleId);
      };
    }

    const timeout = window.setTimeout(enableVideo, 1400);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <>
      <section className="relative overflow-hidden pt-[78px] pb-8 md:min-h-[720px] md:pt-36 md:pb-20">
        {/* Background Image */}
        <picture>
          <source srcSet={bannerImageAvif} type="image/avif" />
          <img
            src={bannerImage}
            alt=""
            aria-hidden="true"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            width={1348}
            height={564}
            sizes="100vw"
            className={`absolute top-0 left-0 h-[320px] w-full object-cover md:h-full transition-opacity duration-700 ${videoLoaded ? 'opacity-0' : 'opacity-100'
              }`}
          />
        </picture>

        {/* Background Video */}
        <video
          className={`absolute top-0 left-0 h-[320px] w-full object-cover md:h-full transition-opacity duration-700 ${videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          autoPlay={shouldLoadVideo}
          muted
          loop
          playsInline
          preload={shouldLoadVideo ? "metadata" : "none"}
          poster={bannerImage}
          onCanPlay={() => setVideoLoaded(true)}
          src={shouldLoadVideo ? bannerVideo : undefined}
          style={{ filter: 'contrast(1.05) saturate(1.05)' }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 sm:bg-gradient-to-r from-[#03182B]/80 via-[#062744]/45 to-transparent" />

        {/* Mobile bottom white */}
        <div className="absolute left-0 right-0 top-[320px] bottom-0 bg-white md:hidden" />
        <div className={`${Classes["container"]} `}>
          <div className="relative  grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* LEFT CONTENT */}
            <div className=" lg:col-span-7
    text-white
    mt-10 md:mt-0
    sm:bg-black/10
    py-5 px-5
    rounded-[2rem_0_2rem_0]
    hover:rounded-[0_2rem_0_2rem]
    transition-all duration-500 ease-in-out cursor-pointer">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1.5 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FFC107]" />
                <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.18em]">
                  Admission Open · 2026
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-[20px] sm:text-[24px] leading-[1.2] font-extrabold md:text-[40px] md:leading-[1.3]">
                Best University in
                <span className="text-[#FFC107] ml-2 relative inline-block">
                  Uttar Pradesh
                </span>
                <br />
                for Future-Ready Careers
              </h1>

              {/* Desktop Content */}
              <p className="hidden md:block mt-4 max-w-2xl text-base text-white/90">
                Recognized among the preferred private universities for students
                across Uttar Pradesh and nearby regions. SRMU is ISO 9001, ISO
                14001, and ISO 50001 certified organization Rated A++ By Career
                360.
              </p>

              {/* Approved */}
              <div className="mt-5">
                <span className="hidden md:inline-block text-sm text-[#FFC107] font-medium mb-3">
                  Approved by
                </span>

                {/* Icons */}
                <h3 className="block md:hidden mt-24 text-lg md:text-3xl lg:text-4xl font-bold text-[#0A4A8F] flex flex-col leading-tight md:leading-tight mb-3">
                  Approved by
                </h3>
                <div className="grid grid-cols-5 sm:mt-0 gap-2 md:flex md:max-w-[320px]">
                  {ApprovedData.map((data) => (
                    <div key={data.id}>
                      <div

                        className="rounded-lg shadow-md bg-white/95 p-1 flex items-center sm:min-w-[65px] justify-center h-12 md:h-14"
                      >
                        <img
                          src={data.img}
                          alt={data.title}
                          width={160}
                          height={160}
                          sizes="65px"
                          className="h-full w-full object-contain"
                        />

                      </div>
                      <div className="text-[10px] sm:text-xs text-center mt-2 font-medium text-[#0A4A8F] sm:text-white">{data.title}</div>
                    </div>
                  ))}
                </div>


              </div>
            </div>

            {/* APPLY FORM DESKTOP */}
            <div className="hidden sm:block lg:col-span-5">
              <ApplyForm />
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE FORM */}
      <div className="block sm:hidden px-4 -mt-16 relative z-20">
        <ApplyForm />
      </div>
    </>
  );
}

/* FORM COMPONENT */
function ApplyForm() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [hasRequestedOptions, setHasRequestedOptions] = useState(false);

  const { allCareerData } = useSelector(
    (state: RootState) => state.getAllCareerData
  );

  const { getProgramDataByCareerId } = useSelector(
    (state: RootState) => state.getAllProgramByCareerIdData
  );

  const { allStateData } = useSelector(
    (state: RootState) => state.getAllStateData
  );

  const { getCityDataByStateId } = useSelector(
    (state: RootState) => state.getAllCityByStateId
  );

  const loadFormOptions = useCallback(() => {
    if (hasRequestedOptions) {
      return;
    }

    setHasRequestedOptions(true);
    dispatch(getAllCareer());
    dispatch(getAllState());
  }, [dispatch, hasRequestedOptions]);

  useEffect(() => {
    if (typeof window === "undefined" || hasRequestedOptions) {
      return;
    }

    const requestIdle = (window as Window & {
      requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    }).requestIdleCallback;

    if (requestIdle) {
      const idleId = requestIdle(loadFormOptions, { timeout: 2500 });
      return () => {
        (window as Window & { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback?.(idleId);
      };
    }

    const timeout = window.setTimeout(loadFormOptions, 1800);
    return () => window.clearTimeout(timeout);
  }, [hasRequestedOptions, loadFormOptions]);

  const submitHandler = async (
    values: any,
    actions: any
  ) => {
    const payload = {
      name: `${values.firstName} ${values.lastName}`,
      email: values.email,
      phone: values.phone,
      coreStateId: values.coreStateId,
      coreCityId: values.coreCityId,
      academicCareerId: values.academicCareerId,
      academicProgramId: values.academicProgramId,
      leadSourceId: 19,
    };

    try {
      await store.dispatch(submissionForEnquiry(payload)).unwrap();
      actions.resetForm();
      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      actions.setSubmitting(false);
    }
  };

  // Modified initial values with checkbox checked by default
  const modifiedInitialValues = {
    ...initialValuesForEnquiry,
    isAccepted: true // Checkbox checked by default
  };

  // Modified validation schema without isAccepted validation
  // @ts-ignore
  const modifiedValidationSchema = validationSchemaForEnquiry.omit(['isAccepted']);

  return (
    <div className="relative mt-10 sm:mt-0 md:max-w-md lg:ml-auto">
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#FFC107]/30 to-[#0A4A8F]/30 blur-lg opacity-60" />

      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden ring-1 ring-black/5">
        {/* Header */}
        <div className="relative bg-gradient-to-br from-[#0A4A8F] to-[#062744] px-5 pt-6 pb-5 text-center">
          <h3 className="text-base md:text-xl font-bold text-white">
            Shri Ramswaroop Memorial University
          </h3>

          <p className="text-[10px] md:text-[11px] text-white/70 mt-1">
            Begin your journey in under 60 seconds
          </p>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-1.5 w-16 rounded-full bg-[#FFC107]" />
        </div>

        <Formik
          initialValues={modifiedInitialValues}
          validationSchema={modifiedValidationSchema}
          onSubmit={(values, actions) => submitHandler(values, actions)}
        >
          {({ setFieldValue, isSubmitting, values }) => (
            <Form className="px-5 pt-6 pb-5 space-y-3" onFocusCapture={loadFormOptions}>
              {/* Name Fields - First Name & Last Name */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Field
                    name="firstName"
                    placeholder="First Name"
                    className="w-full border border-gray-200 rounded-lg px-3.5 py-3 text-sm focus:outline-none focus:border-[#0A4A8F] focus:ring-1 focus:ring-[#0A4A8F]"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
                <div>
                  <Field
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full border border-gray-200 rounded-lg px-3.5 py-3 text-sm focus:outline-none focus:border-[#0A4A8F] focus:ring-1 focus:ring-[#0A4A8F]"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-200 rounded-lg px-3.5 py-3 text-sm focus:outline-none focus:border-[#0A4A8F] focus:ring-1 focus:ring-[#0A4A8F]"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* Phone */}
              <div>
                <Field
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full border border-gray-200 rounded-lg px-3.5 py-3 text-sm focus:outline-none focus:border-[#0A4A8F] focus:ring-1 focus:ring-[#0A4A8F]"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* Level + Programme */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Field
                    as="select"
                    name="academicCareerId"
                    onChange={(e: any) => {
                      setFieldValue("academicCareerId", e.target.value);
                      dispatch(getAllProgramByCareerId(e.target.value));
                    }}
                    className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm focus:outline-none focus:border-[#0A4A8F] focus:ring-1 focus:ring-[#0A4A8F]"
                  >
                    <option value="">Level</option>
                    {allCareerData?.map((item: any) => (
                      <option
                        key={item.academicCareerId}
                        value={item.academicCareerId}
                      >
                        {item.description}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="academicCareerId"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <div>
                  <Field
                    as="select"
                    name="academicProgramId"
                    className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm focus:outline-none focus:border-[#0A4A8F] focus:ring-1 focus:ring-[#0A4A8F]"
                  >
                    <option value="">Programme</option>
                    {getProgramDataByCareerId?.map((item: any) => (
                      <option
                        key={item.academicProgramId}
                        value={item.academicProgramId}
                      >
                        {item.description}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="academicProgramId"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
              </div>

              {/* State + City */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Field
                    as="select"
                    name="coreStateId"
                    onChange={(e: any) => {
                      setFieldValue("coreStateId", e.target.value);
                      dispatch(getAllCityByStateId(e.target.value));
                    }}
                    className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm focus:outline-none focus:border-[#0A4A8F] focus:ring-1 focus:ring-[#0A4A8F]"
                  >
                    <option value="">State</option>
                    {allStateData?.map((item: any) => (
                      <option
                        key={item.coreStateId}
                        value={item.coreStateId}
                      >
                        {item.name}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="coreStateId"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <div>
                  <Field
                    as="select"
                    name="coreCityId"
                    className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm focus:outline-none focus:border-[#0A4A8F] focus:ring-1 focus:ring-[#0A4A8F]"
                  >
                    <option value="">City</option>
                    {getCityDataByStateId?.map((item: any) => (
                      <option
                        key={item.coreCityId}
                        value={item.coreCityId}
                      >
                        {item.name}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="coreCityId"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
              </div>

              {/* Consent - Checkbox checked by default, no validation needed */}
              <div>
                <label className="flex items-start gap-2 text-[10px] text-gray-500">
                  <Field
                    type="checkbox"
                    name="isAccepted"
                    className="mt-1"
                    checked={values.isAccepted}
                  />
                  <span>
                    I authorise SRMU and its representatives to
                    Call, SMS, Email or WhatsApp me regarding
                    admissions and programmes.
                  </span>
                </label>
                {/* Removed ErrorMessage for isAccepted */}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group btn-primary cursor-pointer w-full py-3 text-sm tracking-wide flex items-center justify-center gap-2 hover:from-[#0c5ca8] hover:to-[#083658] text-white rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'SUBMITTING...' : 'APPLY NOW'}
                {!isSubmitting && <FaArrowRight className="text-sm transition-transform duration-200 group-hover:translate-x-1" />}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
