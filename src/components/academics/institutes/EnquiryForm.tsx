import React, { useEffect } from "react";
import girlImg from "../../../assets/images/academics/institutes/enquiry-form-16012411503754.png";
import Classes from "../../../utils/styles/Global.module.css";
import program from "../../../assets/images/academics/institutes/programs_bg-new.png";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { EnquiryFormData, initialValuesForEnquiry, validationSchemaForEnquiry } from "../../../data/academics/institute/institute-form-data";
import SelectInputForEnquiry from "./SelectInputForEnquiry";
import { AppDispatch, RootState } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllActiveCareer } from "../../../store/student-enquiry/career/careerThunk";
import { fetchAllActiveProgram } from "../../../store/student-enquiry/program/programThunk";
import { fetchAllActiveState } from "../../../store/student-enquiry/state/stateThunk";
import { fetchAllActiveCityByStateId } from "../../../store/student-enquiry/city/cityThunk";
import { submitEnquiryForm } from "../../../store/student-enquiry/submit-enquiry/enquiryThunk";
import { GrToast } from "react-icons/gr";
import { toNamePathStr } from "antd/es/form/hooks/useForm";

interface EnquiryFormProps {
  onSubmitHandlerForAdmission?: (res: any) => void;
}

const EnquiryForm: React.FC<EnquiryFormProps> = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { data: careerData } = useSelector((state: RootState) => state.career);
  const { data: programData } = useSelector((state: RootState) => state.program);
  const { data: stateData } = useSelector((state: RootState) => state.state);
  const { data: cityData } = useSelector((state: RootState) => state.city);

  // Initial Load
  useEffect(() => {
    dispatch(fetchAllActiveCareer());
    dispatch(fetchAllActiveState());
  }, [dispatch]);

  return (
    <section className={`${Classes["enquiry_form_footer"]} lg:pl-10 pr-5`}>
      <div className="relative">
        <div className={Classes["enquiry_form_bg"]}>
          <img src={program} className={Classes["img-fluid"]} alt="Enquiry Form" />
        </div>

        <div className={Classes["container"]}>
          <div className={Classes["enquiry_form_inner"]}>
            <div className={`${Classes["enquiry_form_left"]} mt-[3rem] lg:mt-0`}>
              <img src={girlImg} className="aspect-[1/0.9] object-cover" alt="Enquiry" />
            </div>

            <div className={Classes["enquiry_form_right"]}>
              <div className="font35 text-white text-[2rem] mb-[1rem]">Enquiry Form</div>

              <Formik
                initialValues={initialValuesForEnquiry}
                validationSchema={validationSchemaForEnquiry}
                onSubmit={async (values, actions) => {
                  const payload = {
                    name: `${values.firstName} ${values.lastName}`, 
                    email: values.email,
                    phone: values.phone, 
                    academicCareerId: values.academicCareerId,
                    academicProgramId: values.academicProgramId,
                    coreStateId: values.coreStateId,
                    coreCityId: values.coreCityId,
                    leadSourceId: values.leadSourceId,
                  };

                  const result = await dispatch(submitEnquiryForm(payload));

                  if (submitEnquiryForm.fulfilled.match(result)) {
                    actions.resetForm();
                    alert("Enquiry Submitted Successfully");
                  }
                }}
              >
                {({ values }) => {
                  // Dependent API Calls

                  useEffect(() => {
                    if (values.academicCareerId) {
                      dispatch(fetchAllActiveProgram(Number(values.academicCareerId)));
                    }
                  }, [values.academicCareerId]);

                  useEffect(() => {
                    if (values.coreStateId) {
                      dispatch(fetchAllActiveCityByStateId(Number(values.coreStateId)));
                    }
                  }, [values.coreStateId]);

                  return (
                    <Form className="mx-[-0.75rem]">
                      <div className="flex flex-wrap w-full">
                        {EnquiryFormData.map((data) => (
                          <div key={data.id} className="mb-[1.5rem] flex flex-col gap-1 w-full md:w-1/3 px-[0.75rem]">
                            <label className="text-white">{data.labelname}</label>

                            {data.type === "select" ? (
                              <SelectInputForEnquiry
                                data={data}
                                keyForId={
                                  data.name === "coreStateId"
                                    ? "coreStateId"
                                    : data.name === "coreCityId"
                                      ? "coreCityId"
                                      : data.name === "academicCareerId"
                                        ? "academicCareerId"
                                        : data.name === "academicProgramId"
                                          ? "academicProgramId"
                                          : ""
                                }
                                keyForName={data.name === "coreStateId" || data.name === "coreCityId" ? "name" : "description"}
                                options={
                                  data.name === "coreStateId"
                                    ? stateData
                                    : data.name === "coreCityId"
                                      ? cityData
                                      : data.name === "academicCareerId"
                                        ? careerData
                                        : data.name === "academicProgramId"
                                          ? programData
                                          : []
                                }
                              />
                            ) : (
                              <>
                                <Field type={data.type} name={data.name} placeholder={data.placeholder} className="h-[3.2rem] px-[0.75rem] bg-[#ccc] border rounded-md w-full" />
                                <ErrorMessage name={data.name} component="div" className="text-red-500 text-sm" />
                              </>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Consent */}
                      <div className="px-[0.75rem] w-full">
                        <div className="mt-[1.5rem]">
                          <div className="flex gap-x-2 items-start text-white mt-4">
                            <Field type="checkbox" name="consent" className="mt-1.5" />
                            <p>I authorize SRM Group and its representatives to Call, SMS, Email or Whatsapp me about the programs and scholarships offered.</p>
                          </div>

                          <ErrorMessage name="consent" component="div" className="text-red-500 text-sm mt-1" />

                          <button
                            type="submit"
                            className="mt-8 w-full bg-[#ffb703] border-2 border-[#ffb703] hover:border-white hover:bg-transparent hover:text-white text-xl font-semibold py-3 rounded-md"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
