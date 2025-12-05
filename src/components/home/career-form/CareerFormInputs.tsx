import React from "react";
import Classes from "../../../utils/styles/Global.module.css";

import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { ErrorMessage, Field, Formik, Form } from "formik";
import {
    careerApplyFormData,
    careerFormValidationSchema,
    initialCareerFormValues,
} from "../../../data/home/career-form-data";

const CareerFormInputs: React.FC = () => {
    return (
        <>
            <section className="bg-[#ECF0F9] p-8 rounded-3xl mb-20">
                <div className={Classes.container}>
                    <div className={Classes.career_inner_page}>
                        <div className="name color_light_blue fw500 font22 font-medium mb-[1.5rem] text-[1.375rem] text-customBlue">
                            Career Form
                        </div>

                        <Formik
                            initialValues={initialCareerFormValues}
                            validationSchema={careerFormValidationSchema}
                            onSubmit={async (values, actions) => {
                                console.log("Submitted values:", values);
                                actions.resetForm();
                            }}
                        >
                            {() => (
                                <Form className="mx-[-0.75rem]">
                                    <div className="flex flex-wrap w-full">
                                        {careerApplyFormData.map((field) => {
                                            const isCheckbox = field.type === "checkbox";

                                            return (
                                                <div
                                                    key={field.id}
                                                    className={`mb-[1.5rem] flex flex-col gap-1 px-[0.75rem] ${isCheckbox ? "w-full" : "w-full md:w-1/3"
                                                        }`}
                                                >
                                                    {!isCheckbox && field.type !== "file" && (
                                                        <label className="!mb-[0.5rem]" htmlFor={field.name}>
                                                            {field.labelname}
                                                        </label>
                                                    )}

                                                    {/* ---------- SELECT ---------- */}
                                                    {field.type === "select" ? (
                                                        <>
                                                            <Field
                                                                as="select"
                                                                name={field.name}
                                                                id={field.name}
                                                                className="h-[3.2rem] px-[0.75rem] py-[0.375rem] bg-white border border-[#ced4da] rounded-md w-full focus:outline-none"
                                                            >
                                                                <option value="">{field.placeholder}</option>
                                                                {field.options?.map((option) => (
                                                                    <option key={option.value} value={option.value}>
                                                                        {option.name}
                                                                    </option>
                                                                ))}
                                                            </Field>
                                                            <ErrorMessage
                                                                name={field.name}
                                                                component="div"
                                                                className="text-red-500 text-sm mt-1"
                                                            />
                                                        </>
                                                    ) : null}

                                                    {/* ---------- CHECKBOX ---------- */}
                                                    {isCheckbox && (
                                                        <div className="flex items-start gap-2 px-[0.75rem]">
                                                            <Field
                                                                type="checkbox"
                                                                name={field.name}
                                                                id={field.name}
                                                                className="form-checkbox h-5 w-5 mt-1"
                                                            />
                                                            <label
                                                                htmlFor={field.name}
                                                                className="text-sm mt-1.5 font-poppins leading-snug"
                                                            >
                                                                {field.labelname}
                                                            </label>
                                                            <ErrorMessage
                                                                name={field.name}
                                                                component="div"
                                                                className="text-red-500 text-sm mt-1"
                                                            />
                                                        </div>
                                                    )}

                                                    {/* ---------- FILE INPUT (CUSTOM UI) ---------- */}
                                                    {field.type === "file" && (
                                                        <>
                                                            <label className="!mb-[0.5rem]" htmlFor={field.name}>
                                                                {field.labelname}
                                                            </label>

                                                            <Field name={field.name}>
                                                                {({ form }:any) => (
                                                                    <div>
                                                                        <input
                                                                            id={field.name}
                                                                            name={field.name}
                                                                            type="file"
                                                                            accept=".pdf,.doc,.docx"
                                                                            className="hidden"
                                                                            onChange={(event) => {
                                                                                form.setFieldValue(
                                                                                    field.name,
                                                                                    event.currentTarget.files?.[0]
                                                                                );
                                                                            }}
                                                                        />

                                                                        {/* Custom File Box */}
                                                                        <label
                                                                            htmlFor={field.name}
                                                                            className="w-full h-[3.2rem]  border bg-amber-30 bg-white border-[#ced4da] rounded-md cursor-pointer flex items-center gap-x-3 "
                                                                        >
                                                                            <span className="text-gray-900  h-full bg-[#e7eaec] hover:bg-[#ced4da] px-4 flex items-center">
                                                                                Choose File
                                                                            </span>
                                                                            <span className="text-gray-500 text-sm truncate bg-white">
                                                                                {form.values[field.name]
                                                                                    ? form.values[field.name].name
                                                                                    : "No file chosen"}
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                )}
                                                            </Field>

                                                            <ErrorMessage
                                                                name={field.name}
                                                                component="div"
                                                                className="text-red-500 text-sm mt-1"
                                                            />
                                                        </>
                                                    )}

                                                    {/* ---------- TEXT / NUMBER / EMAIL INPUT ---------- */}
                                                    {field.type !== "select" &&
                                                        field.type !== "checkbox" &&
                                                        field.type !== "file" &&
                                                        field.type !== "date" && (
                                                            <>
                                                                <Field
                                                                    type={field.type}
                                                                    name={field.name}
                                                                    id={field.name}
                                                                    placeholder={field.placeholder}
                                                                    className="h-[3.2rem] px-[0.75rem] py-[0.375rem] bg-white border border-[#ced4da] rounded-md w-full focus:outline-none placeholder:text-gray-900"
                                                                />
                                                                <ErrorMessage
                                                                    name={field.name}
                                                                    component="div"
                                                                    className="text-red-500 text-sm mt-1"
                                                                />
                                                            </>
                                                        )}


                                                    {field.type === "date" && (
                                                        <>
                                                            <Field
                                                                type="date"
                                                                name={field.name}
                                                                id={field.name}
                                                                className="h-[3.2rem] px-[0.75rem] py-[0.375rem] bg-white border border-[#ced4da] rounded-md w-full focus:outline-none"
                                                            />
                                                            <ErrorMessage
                                                                name={field.name}
                                                                component="div"
                                                                className="text-red-500 text-sm mt-1"
                                                            />
                                                        </>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* SUBMIT BUTTON */}
                                    <div className="px-[0.75rem] w-full">
                                        <button
                                            type="submit"
                                            className="bg-[#ffb703] mt-[1.5rem] font-medium hover:bg-white hover:text-[#ffb703] border border-[#ffb703] cursor-pointer flex items-center gap-3 px-8 py-4 rounded-xl"
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
        </>
    );
};

export default CareerFormInputs;
