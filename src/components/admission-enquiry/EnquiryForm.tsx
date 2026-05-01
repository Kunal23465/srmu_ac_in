import React, { useEffect } from "react";
import Classes from "../../utils/styles/Global.module.css";
import {
  EnquiryFormData,
  initialValuesForEnquiry,
  validationSchemaForEnquiry,
} from "./EnquiryFormData";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import SelectInputForEnquiry from "./SelectInputForEnquiry";
import { RootState, AppDispatch } from "../../store";
import { getAllCareer } from "../../store/api/get-allCareer-slice";
import { getAllState } from "../../store/api/get-allState-slice";
import { getAllProgramByCareerId } from "../../store/api/get-allprogram-byCareerId-slice";
import { getAllCityByStateId } from "../../store/api/get-allCity-byStateId-slice";
import { sleep } from "../../utils/action";

interface EnquiryFormProps {
  onSubmitHandlerForAdmission: (res: any) => void;
}

const EnquiryForm: React.FC<EnquiryFormProps> = ({
  onSubmitHandlerForAdmission,
}) => {
  const dispatch = useDispatch<AppDispatch>();

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

  const careerData = allCareerData || [];
  const programData = getProgramDataByCareerId || [];
  const stateData = allStateData || [];
  const cityData = getCityDataByStateId || [];

  useEffect(() => {
    dispatch(getAllCareer());
    dispatch(getAllState());
  }, [dispatch]);

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(getAllCityByStateId(e.target.value));
  };

  const handleProgramChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(getAllProgramByCareerId(e.target.value));
  };

  return (
    <section className="py-[5rem] md:mt-[-11rem]">
      <div className={`${Classes["container"]}`}>
        <div className={`${Classes["career_inner_page"]}`}>
          <div className="name color_light_blue fw500 font22 font-medium mb-[1.5rem] text-[1.375rem] text-customBlue">
            Enquiry Form
          </div>

         <Formik
  initialValues={initialValuesForEnquiry}
  validationSchema={validationSchemaForEnquiry}
  onSubmit={async (values, actions) => {
    try {
      const valuesForEnquiry = { values, actions };

      await sleep(300);

      onSubmitHandlerForAdmission(valuesForEnquiry);
    } catch (err) {
      console.error(err);
    } finally {
      actions.setSubmitting(false); // ✅ important
    }
  }}
>
            {() => (
              <Form className="mx-[-0.75rem]">
                <div className={`flex flex-wrap w-[100%]`}>
                  {EnquiryFormData.map((data) => {
                    const isCheckbox = data.type === "checkbox";

                    return (
                      <div
                        key={data.id}
                        className={`mb-2 flex flex-col gap-1 px-[0.75rem] ${
                          isCheckbox ? "w-full" : "w-full md:w-1/3"
                        }`}
                      >
                        <label className="!mb-[0.2rem]">
                          {data.labelname}
                        </label>

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
                                : "academicProgramId"
                            }
                            keyForName={
                              data.name === "coreStateId" ||
                              data.name === "coreCityId"
                                ? "name"
                                : "description"
                            }
                            options={
                              data.name === "coreStateId"
                                ? stateData
                                : data.name === "coreCityId"
                                ? cityData
                                : data.name === "academicCareerId"
                                ? careerData
                                : programData
                            }
                            onChange={
                              data.name === "coreStateId"
                                ? handleStateChange
                                : data.name === "academicCareerId"
                                ? handleProgramChange
                                : undefined
                            }
                          />
                        ) : data.type === "checkbox" ? (
                          <div className="w-full mb-[1.5rem]">
                            <div className="flex items-center gap-4">
                              <Field
                                type="checkbox"
                                name={data.name}
                                className="form-checkbox h-5 w-5 mt-1"
                              />
                              <label className="text-[16px] mt-1.5">
                               
I authorise SRMU and its representatives to Call, SMS, Email or WhatsApp me about its programmes and offers. This consent overrides any registration for DNC / NDNC.
                              </label>
                            </div>
                            <ErrorMessage
                              name={data.name}
                              component="div"
                              className="text-red-500 text-sm mt-1"
                            />
                          </div>
                        ) : (
                          <>
                            <Field
                              type={data.type}
                              name={data.name}
                              placeholder={data.placeholder}
                              className="h-[3.2rem] px-[0.75rem] border rounded-md w-full bg-white! border-gray-300 focus:outline-none placeholder:text-[#b3b0b9]    "
                            />
                            <ErrorMessage
                              name={data.name}
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="px-[0.75rem] w-full">
                  <button
                    type="submit"
                    className={`bg-[#ffa500] ${Classes["btn_yellow"]} mt-[1.5rem] cursor-pointer flex! items-center gap-3`}
                  >
                    Submit <HiOutlineArrowLongRight />
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;