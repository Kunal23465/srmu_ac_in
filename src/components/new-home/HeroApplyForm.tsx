import { useCallback, useEffect, useMemo, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { getAllCareer } from "../../store/api/get-allCareer-slice";
import { getAllState } from "../../store/api/get-allState-slice";
import { getAllProgramByCareerId } from "../../store/api/get-allprogram-byCareerId-slice";
import { getAllCityByStateId } from "../../store/api/get-allCity-byStateId-slice";
import {
  initialValuesForEnquiry,
  validationSchemaForEnquiry,
} from "../admission-enquiry/EnquiryFormData";
import { submissionForEnquiry } from "../../store/submission/enquiry-submission-slice";

export default function HeroApplyForm() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [hasRequestedOptions, setHasRequestedOptions] = useState(false);

  const { allCareerData } = useSelector(
    (state: RootState) => state.getAllCareerData,
  );

  const { getProgramDataByCareerId } = useSelector(
    (state: RootState) => state.getAllProgramByCareerIdData,
  );

  const { allStateData } = useSelector(
    (state: RootState) => state.getAllStateData,
  );

  const { getCityDataByStateId } = useSelector(
    (state: RootState) => state.getAllCityByStateId,
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

    const idleWindow = window as Window & {
      requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    if (typeof idleWindow.requestIdleCallback === "function") {
      const idleId = idleWindow.requestIdleCallback(loadFormOptions, { timeout: 3500 });
      return () => idleWindow.cancelIdleCallback?.(idleId);
    }

    const timeout = window.setTimeout(loadFormOptions, 2200);
    return () => window.clearTimeout(timeout);
  }, [hasRequestedOptions, loadFormOptions]);

  const modifiedInitialValues = useMemo(
    () => ({
      ...initialValuesForEnquiry,
      consent: true,
    }),
    [],
  );

  const modifiedValidationSchema = useMemo(() => validationSchemaForEnquiry, []);

  const submitHandler = async (values: any, actions: any) => {
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
      await dispatch(submissionForEnquiry(payload)).unwrap();
      actions.resetForm();
      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <div className="relative mt-10 sm:mt-0 md:max-w-md lg:ml-auto">
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#FFC107]/30 to-[#0A4A8F]/30 blur-lg opacity-60" />

      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden ring-1 ring-black/5">
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
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Field
                    name="firstName"
                    placeholder="First Name"
                    className="w-full border border-gray-200 rounded-lg px-3.5 py-3 text-sm focus:outline-none focus:border-[#0A4A8F] focus:ring-1 focus:ring-[#0A4A8F]"
                  />
                  <ErrorMessage name="firstName" component="div" className="text-red-500 text-xs mt-1" />
                </div>
                <div>
                  <Field
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full border border-gray-200 rounded-lg px-3.5 py-3 text-sm focus:outline-none focus:border-[#0A4A8F] focus:ring-1 focus:ring-[#0A4A8F]"
                  />
                  <ErrorMessage name="lastName" component="div" className="text-red-500 text-xs mt-1" />
                </div>
              </div>

              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-200 rounded-lg px-3.5 py-3 text-sm focus:outline-none focus:border-[#0A4A8F] focus:ring-1 focus:ring-[#0A4A8F]"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
              </div>

              <div>
                <Field
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full border border-gray-200 rounded-lg px-3.5 py-3 text-sm focus:outline-none focus:border-[#0A4A8F] focus:ring-1 focus:ring-[#0A4A8F]"
                />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-xs mt-1" />
              </div>

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
                      <option key={item.academicCareerId} value={item.academicCareerId}>
                        {item.description}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="academicCareerId" component="div" className="text-red-500 text-xs mt-1" />
                </div>

                <div>
                  <Field
                    as="select"
                    name="academicProgramId"
                    className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm focus:outline-none focus:border-[#0A4A8F] focus:ring-1 focus:ring-[#0A4A8F]"
                  >
                    <option value="">Programme</option>
                    {getProgramDataByCareerId?.map((item: any) => (
                      <option key={item.academicProgramId} value={item.academicProgramId}>
                        {item.description}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="academicProgramId" component="div" className="text-red-500 text-xs mt-1" />
                </div>
              </div>

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
                      <option key={item.coreStateId} value={item.coreStateId}>
                        {item.name}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="coreStateId" component="div" className="text-red-500 text-xs mt-1" />
                </div>

                <div>
                  <Field
                    as="select"
                    name="coreCityId"
                    className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm focus:outline-none focus:border-[#0A4A8F] focus:ring-1 focus:ring-[#0A4A8F]"
                  >
                    <option value="">City</option>
                    {getCityDataByStateId?.map((item: any) => (
                      <option key={item.coreCityId} value={item.coreCityId}>
                        {item.name}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="coreCityId" component="div" className="text-red-500 text-xs mt-1" />
                </div>
              </div>

              <div>
                <label className="flex items-start gap-2 text-[10px] text-gray-500">
                  <Field type="checkbox" name="consent" className="mt-1" checked={values.consent} />
                  <span>
                    I authorise SRMU and its representatives to Call, SMS, Email or WhatsApp me regarding admissions and programmes.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group btn-primary cursor-pointer w-full py-3 text-sm tracking-wide flex items-center justify-center gap-2 hover:from-[#0c5ca8] hover:to-[#083658] text-white rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "SUBMITTING..." : "APPLY NOW"}
                {!isSubmitting && (
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                )}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
