import React, { useEffect } from "react";
import girlImg from "../../../assets/images/academics/institutes/enquiry-form-16012411503754.png";
import Classes from "../../../utils/styles/Global.module.css";
import program from "../../../assets/images/academics/institutes/programs-bg.jpg"
import { ErrorMessage, Field, Form, Formik } from "formik";
import { EnquiryFormData, initialValuesForEnquiry, validationSchemaForEnquiry } from "../../../data/academics/institute/institute-form-data";
import SelectInputForEnquiry from "./SelectInputForEnquiry";




interface EnquiryFormProps {
  onSubmitHandlerForAdmission?: (res: any) => void;
}
const EnquiryForm: React.FC<EnquiryFormProps> = ({ onSubmitHandlerForAdmission }) => {


  // for select feild
  let careerData: any = [];
  let programData: any = [];
  let stateData: any = [];
  let cityData: any = [];


 

  return (
    <section className={`${Classes["enquiry_form_footer"]}  lg:pl-10 pr-5 `}>
      <div className={` relative`}>
        <div className={`${Classes["enquiry_form_bg"]}`}>
          <img src={program} className={`${Classes["img-fluid"]}`} alt="Enquiry Form" />
        </div>
        <div className={`${Classes["container"]}`}>
          <div className={`${Classes["enquiry_form_inner"]}  `}>
            <div className={`${Classes["enquiry_form_left"]} mt-[3rem] lg:mt-0 `}>
              <img src={girlImg} className="aspect-[1/0.9] object-cover " alt="Enquiry" />
            </div>
            <div className={`${Classes["enquiry_form_right"]}`}>
              <div className="font35 color_white text-white text-[2rem] mb-[1rem] font-base ">Enquiry Form</div>
              <Formik
                initialValues={initialValuesForEnquiry}
                validationSchema={validationSchemaForEnquiry}
                onSubmit={async (values, actions) => {
                  console.log("values", values, actions);

                  const valuesForEnquiry = { values, actions };
                  onSubmitHandlerForAdmission && onSubmitHandlerForAdmission(valuesForEnquiry);
                }}
              >
                {() => (
                  <Form className="mx-[-0.75rem]">
                    <div className="flex flex-wrap w-[100%] ">
                      {EnquiryFormData.map((data) => {
                        return (
                          <div key={data.id} className="mb-[1.5rem] flex flex-col gap-1 w-full md:w-1/3 px-[0.75rem]">
                            <label className="!mb-[0.5rem] text-white">{data.labelname}</label>
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
                                keyForName={
                                  data.name === "coreStateId"
                                    ? "name"
                                    : data.name === "coreCityId"
                                    ? "name"
                                    : data.name === "academicCareerId"
                                    ? "description"
                                    : data.name === "academicProgramId"
                                    ? "description"
                                    : ""
                                }
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
                              // : data.type === "tel" ? (
                              //   <PhoneInputForEnquiry values={values} name={data.name} placeholder={data.placeholder} isValid={isValid} dirty={dirty} />
                              // ) :
                              <>
                                <Field
                                  type={data.type}
                                  name={data.name}
                                  placeholder={data.placeholder}
                                  className="h-[3.2rem] px-[0.75rem] py-[0.375rem] bg-white border border-[#ced4da] rounded-md w-full focus:outline-none placeholder:text-gray-900"
                                />
                                <ErrorMessage name={data.name} component="div" className="text-red-500 text-sm" />
                              </>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    <div className="px-[0.75rem] w-full">
                      <div className="mt-[1.5rem]">
                        <div className="flex gap-x-2 items-start text-white mt-4">
                          <Field type="checkbox" name="consent" className="mt-1.5 block" />
                          <p>I authorize SRM Group and its representatives to Call, SMS, Email or Whatsapp me about the programs and scholarships offered.</p>
                        </div>
                        <ErrorMessage name="consent" component="div" className="text-red-500 text-sm mt-1" />
                        <button
                          type="submit"
                          className="mt-8 w-full text-center bg-[#ffb703] border-2 border-[#ffb703] hover:border-white hover:bg-transparent hover:text-white text-xl lg:text-[22px] font-semibold px-5 lg:px-8 py-3 rounded-md text-nowrap"
                        >
                          <div>Submit</div>
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
