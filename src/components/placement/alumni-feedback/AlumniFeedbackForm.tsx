import { FC } from "react";
import {
  aluminiFeedbackFormData,
  initialValuesForAluminiFeedbackForm,
  validationSchemaForAlumniFeedbackForm,
} from "../../../data/placement/alumni-feedback-data";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { ErrorMessage, Field, Formik, Form } from "formik";
import Classes from "../../../utils/styles/Global.module.css";
import {
  EnquiryField,
} from "../../../data/admission-enquiry/admission-enquiry-data";
import TextArea from "antd/es/input/TextArea";

const AlumniFeedbackForm: FC = () => {
  const essentialFields = aluminiFeedbackFormData.slice(0, 10);
  const efficiencyCriteriaField = aluminiFeedbackFormData.slice(10, 11);
  const question1To4Fields = aluminiFeedbackFormData.slice(11, 16);
  const ratingFields = aluminiFeedbackFormData.slice(16, 19);
  const deptUnivFields = aluminiFeedbackFormData.slice(19, 22);
  const placementFields = aluminiFeedbackFormData.slice(22, 29);
  const q16Fields = aluminiFeedbackFormData.slice(29, 32);
  const q17Fields = aluminiFeedbackFormData.slice(32, 34);
  const q18Field = aluminiFeedbackFormData.slice(34, 35)[0];
  const q19Field = aluminiFeedbackFormData.slice(35, 36)[0];

  const renderRadioGroup = (field: EnquiryField) => (
    <div key={field.id} className="flex flex-col gap-2 w-full mb-6">
      <label className="name color_light_blue fw500  font-medium mb-6 text-[17px] text-customBlue">
        {field.labelname}
      </label>
      <div className="flex flex-col gap-2">
        {field.options?.map((option) => (
          <label key={option.value} className="flex items-center gap-2">
            <Field
              type="radio"
              name={field.name}
              value={option.value}
              className="h-4 w-4"
            />
            <span className="font-medium">{option.name}</span>
          </label>
        ))}
      </div>
      <ErrorMessage
        name={field.name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );

  const renderQuestionPair = (field1: EnquiryField, field2: EnquiryField) => (
    <>
      <div className="w-full md:w-1/2 mb-6 px-3">
        <label className="font-medium mb-1 block">{field1.labelname}</label>
        <div className="flex flex-wrap gap-6">
          {field1.options?.map((option) => (
            <label key={option.value} className="flex items-center gap-2">
              <Field
                type="radio"
                name={field1.name}
                value={option.value}
                className="h-4 w-4"
              />
              <span>{option.name}</span>
            </label>
          ))}
        </div>
        <ErrorMessage
          name={field1.name}
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
      <div className="w-full md:w-1/2 mb-6 px-3">
        <label className="font-medium mb-1 block">{field2.labelname}</label>
        <div className="flex flex-wrap gap-6">
          {field2.options?.map((option) => (
            <label key={option.value} className="flex items-center gap-2">
              <Field
                type="radio"
                name={field2.name}
                value={option.value}
                className="h-4 w-4"
              />
              <span>{option.name}</span>
            </label>
          ))}
        </div>
        <ErrorMessage
          name={field2.name}
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
    </>
  );

  const renderTextarea = (field: EnquiryField, widthClass: string) => (
    <div
      key={field.id}   
      className={`mb-6 flex flex-col gap-1 px-3 ${widthClass}`}
    >
      <label className="mb-2!" htmlFor={field.name}>
        {field.labelname}
      </label>
      <TextArea
        name={field.name}
        id={field.name}
        placeholder={field.placeholder}
        rows={2}
        className="px-3 py-1.5 bg-white border border-[#ced4da] rounded-md w-full focus:outline-none placeholder:text-gray-900 resize-none"
      />
      <ErrorMessage
        name={field.name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );

  return (
    <div>
      <section className="bg-[#ECF0F9] p-8 rounded-3xl mb-20 ">
        <div className={Classes.container}>
          <div className={Classes.career_inner_page}>
            <Formik
              initialValues={initialValuesForAluminiFeedbackForm}
              validationSchema={validationSchemaForAlumniFeedbackForm}
              // @ts-ignore
              onSubmit={async (values, actions) => {
                actions.resetForm();
              }}
            >
              {() => (
                <Form className="-mx-3">
                  <div className="name color_light_blue fw500 font22 font-medium mb-6 text-[1.375rem] text-customBlue">
                    Essential Details
                  </div>
                  <div className="flex flex-wrap w-full">
                    {essentialFields.map((field) => (
                      <div
                        key={field.id}
                        className="mb-6 flex flex-col gap-1 px-3 w-full md:w-1/3"
                      >
                        <label className="mb-2!" htmlFor={field.name}>
                          {field.labelname}
                        </label>
                        <Field
                          type={field.type}
                          name={field.name}
                          id={field.name}
                          placeholder={field.placeholder}
                          className="h-[3.2rem] px-3 py-1.5 bg-white border border-[#ced4da] rounded-md w-full focus:outline-none placeholder:text-gray-900"
                        />
                        <ErrorMessage
                          name={field.name}
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="px-3 w-full">
                    {efficiencyCriteriaField.map((field) =>
                      renderRadioGroup(field)
                    )}
                  </div>

                  <div className="name color_light_blue fw500  font-medium mb-6 text-[17px] text-customBlue">
                    I. ABOUT UNIVERSITY (Point No. 1 to 5)
                  </div>
                  <div className="flex flex-wrap w-full">
                    {renderQuestionPair(
                      question1To4Fields[0],
                      question1To4Fields[1]
                    )}

                    <div className="w-full md:w-1/2 mb-6 px-3">
                      <label className="font-medium mb-1 block">
                        {question1To4Fields[2].labelname}
                      </label>
                      <div className="flex flex-wrap gap-6">
                        {question1To4Fields[2].options?.map((option) => (
                          <label
                            key={option.value}
                            className="flex items-center gap-2"
                          >
                            <Field
                              type="radio"
                              name={question1To4Fields[2].name}
                              value={option.value}
                              className="h-4 w-4"
                            />
                            <span>{option.name}</span>
                          </label>
                        ))}
                      </div>
                      <ErrorMessage
                        name={question1To4Fields[2].name}
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div className="w-full md:w-1/2 mb-6 px-3">
                      <label className="font-medium mb-1 block">
                        4. Were / Are your grievances properly handled at the
                        college?
                      </label>
                      <div className="flex flex-col gap-2">
                        <label className="flex items-center gap-2">
                          a) As a student :
                          {question1To4Fields[3].options?.map((option) => (
                            <label
                              key={option.value}
                              className="flex items-center gap-2 ml-4"
                            >
                              <Field
                                type="radio"
                                name={question1To4Fields[3].name}
                                value={option.value}
                                className="h-4 w-4"
                              />
                              <span>{option.name}</span>
                            </label>
                          ))}
                        </label>
                        <label className="flex items-center gap-2">
                          b) As Alumni :
                          {question1To4Fields[4].options?.map((option) => (
                            <label
                              key={option.value}
                              className="flex items-center gap-2 ml-4"
                            >
                              <Field
                                type="radio"
                                name={question1To4Fields[4].name}
                                value={option.value}
                                className="h-4 w-4"
                              />
                              <span>{option.name}</span>
                            </label>
                          ))}
                        </label>
                      </div>
                      <ErrorMessage
                        name={question1To4Fields[3].name}
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                      <ErrorMessage
                        name={question1To4Fields[4].name}
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>

                  <div className="w-full  mb-6 px-3">
                    <label className="font-medium mb-3 block">
                      5. Rate the adequacy of the following as they were During
                      your tenure as a student at S.R.M.U:
                    </label>
                    <div className="flex flex-wrap w-full">
                      {ratingFields.map((field) => (
                        <div
                          key={field.id}
                          className="w-full flex items-center gap-4 mb-3 "
                        >
                          <label className=" mb-1 block">
                            {field.labelname}
                          </label>
                          <div className="flex flex-wrap gap-4">
                            {field.options?.map((option) => (
                              <label
                                key={option.value}
                                className="flex  items-center gap-1"
                              >
                                <Field
                                  type="radio"
                                  name={field.name}
                                  value={option.value}
                                  className="h-4 w-4"
                                />
                                <span>{option.name}</span>
                              </label>
                            ))}
                          </div>
                          <ErrorMessage
                            name={field.name}
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="name color_light_blue fw500  font-medium mb-6 text-[17px] text-customBlue">
                    II. ABOUT DEPARTMENT & UNIVERSITY (Point No. 6 to 8)
                  </div>
                  <div className="flex flex-wrap w-full">
                    {renderQuestionPair(deptUnivFields[0], deptUnivFields[1])}

                    <div className="w-full md:w-1/2 mb-6 px-3">
                      <label className="font-medium mb-1 block">
                        {deptUnivFields[2].labelname}
                      </label>
                      <div className="flex flex-wrap gap-6">
                        {deptUnivFields[2].options?.map((option) => (
                          <label
                            key={option.value}
                            className="flex items-center gap-2"
                          >
                            <Field
                              type="radio"
                              name={deptUnivFields[2].name}
                              value={option.value}
                              className="h-4 w-4"
                            />
                            <span>{option.name}</span>
                          </label>
                        ))}
                      </div>
                      <ErrorMessage
                        name={deptUnivFields[2].name}
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>

                  <div className="name color_light_blue fw500  font-medium mb-6 text-[17px] text-customBlue">
                    III. ABOUT PLACEMENT TRAINING CELL (Point No. 9 to 15)
                  </div>
                  <div className="flex flex-wrap w-full">
                    {renderQuestionPair(placementFields[0], placementFields[1])}
                    {renderQuestionPair(placementFields[2], placementFields[3])}
                    {renderQuestionPair(placementFields[4], placementFields[5])}
                    <div className="w-full md:w-1/2 mb-6 px-3">
                      <label className="font-medium mb-1 block">
                        {placementFields[6].labelname}
                      </label>
                      <div className="flex flex-wrap gap-6">
                        {placementFields[6].options?.map((option) => (
                          <label
                            key={option.value}
                            className="flex items-center gap-2"
                          >
                            <Field
                              type="radio"
                              name={placementFields[6].name}
                              value={option.value}
                              className="h-4 w-4"
                            />
                            <span>{option.name}</span>
                          </label>
                        ))}
                      </div>
                      <ErrorMessage
                        name={placementFields[6].name}
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>

                  <div className="name color_light_blue fw500  font-medium mb-6 text-[17px] text-customBlue">
                    IV. GENERALIZED EXPERIENCE SHARING (Point No. 16 to 19)
                  </div>

                  <div className="w-full px-3 mb-4">
                    <div className="font-medium mb-2 text-base">
                      {q16Fields[0].labelname}
                    </div>
                  </div>
                  <div className="flex flex-wrap w-full">
                    <div className="w-full md:w-1/3 mb-6 px-3">
                      <label className="mb-2! block text-sm font-bold">
                        Company
                        <span className="font-normal ">
                          {q16Fields[0].placeholder}
                        </span>
                      </label>
                      <TextArea
                        name={q16Fields[0].name}
                        rows={2}
                        className="px-3 py-1.5 bg-white border border-[#ced4da] rounded-md w-full focus:outline-none resize-none"
                      />
                      <ErrorMessage
                        name={q16Fields[0].name}
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div className="w-full md:w-1/3 mb-6 px-3">
                      <label className="mb-2! block text-sm font-bold">
                        Faculty
                        <span className="font-normal ">
                          {q16Fields[1].placeholder}
                        </span>
                      </label>
                      <TextArea
                        name={q16Fields[1].name}
                        rows={2}
                        className="px-3 py-1.5 bg-white border border-[#ced4da] rounded-md w-full focus:outline-none resize-none"
                      />
                      <ErrorMessage
                        name={q16Fields[1].name}
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div className="w-full md:w-1/3 mb-6 px-3">
                      <label className="mb-2! block text-sm font-bold">
                        Peers
                        <span className="font-normal ">
                          {q16Fields[2].placeholder}
                        </span>
                      </label>
                      <TextArea
                        name={q16Fields[2].name}
                        rows={2}
                        className="px-3 py-1.5 bg-white border border-[#ced4da] rounded-md w-full focus:outline-none resize-none"
                      />
                      <ErrorMessage
                        name={q16Fields[2].name}
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>

                  <div className="w-full px-3 mb-4">
                    <div className="font-medium mb-2 text-base">
                      {q17Fields[0].labelname}
                    </div>
                  </div>
                  <div className="flex flex-wrap w-full">
                    <div className="w-full md:w-1/2 mb-6 px-3">
                      <label className="mb-2! block text-sm font-medium">
                        A Student of SRMU{" "}
                        <span className="font-normal ">
                          {q17Fields[0].placeholder}
                        </span>
                      </label>
                      <TextArea
                        name={q17Fields[0].name}
                        rows={2}
                        className="px-3 py-1.5 bg-white border border-[#ced4da] rounded-md w-full focus:outline-none resize-none"
                      />
                      <ErrorMessage
                        name={q17Fields[0].name}
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div className="w-full md:w-1/2 mb-6 px-3">
                      <label className="mb-2! block text-sm font-medium">
                        As an Employer of the Organization{" "}
                        <span className="font-normal ">
                          {q17Fields[1].placeholder}
                        </span>
                      </label>
                      <TextArea
                        name={q17Fields[1].name}
                        rows={2}
                        className="px-3 py-1.5 bg-white border border-[#ced4da] rounded-md w-full focus:outline-none resize-none"
                      />
                      <ErrorMessage
                        name={q17Fields[1].name}
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap w-full">
                    {renderTextarea(q18Field, "w-full md:w-1/2")}
                    {renderTextarea(q19Field, "w-full md:w-1/2")}
                  </div>

                  <div className="px-3 w-full">
                    <button
                      type="submit"
                      className={`bg-[#ffb703] mt-6 font-medium hover:bg-[#ECF0F9] transition-all duration-500 hover:text-[#ffb703] hover:border border-[#ffb703] hover:border-[#ffb703] cursor-pointer flex items-center gap-3 px-8 py-4 rounded-xl`}
                    >
                      <span>SUBMIT</span>
                      <HiOutlineArrowLongRight className="text-xl" />
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlumniFeedbackForm;
