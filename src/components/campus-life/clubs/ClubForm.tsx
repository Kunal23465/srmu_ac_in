


import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MdArrowRightAlt } from "react-icons/md";
import Select, { MultiValue } from "react-select";


// YEARS DROPDOWN (1990 → current year)
const years = Array.from(
    { length: new Date().getFullYear() - 1989 },
    (_, i) => 1990 + i
);

type ClubOption = {
    value: string;
    label: string;
};

// ✔ VALIDATION SCHEMA
const validationSchema = Yup.object({
    fullName: Yup.string().required("Required"),
    course: Yup.string().required("Required"),
    year: Yup.string().required("Required"),
    roll: Yup.string().required("Required"),
    contact: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email").required("Required"),
    club: Yup.array().min(1, "Select at least one club"),
});

const ClubForm: React.FC = () => {
    // @ts-ignore
    const formik = useFormik({
        initialValues: {
            fullName: "",
            course: "",
            year: "",
            roll: "",
            contact: "",
            email: "",
            club: [] as string[],
        },
        validationSchema,
    });

    const clubOptions: ClubOption[] = [
        { value: "Razzmataz", label: "Razzmataz" },
        { value: "Beat the Beats", label: "Beat the Beats" },
        { value: "Expressions", label: "Expressions" },
        { value: "The Manch Club", label: "The Manch Club" },
        {
            value: "1090 Power Angels & The Power Super Heroes Club",
            label: "1090 Power Angels & The Power Super Heroes Club"
        },
        { value: "Tech Fusion Club", label: "Tech Fusion Club" },
        { value: "The Ozone Club", label: "The Ozone Club" },
        { value: "Sur Jhankar", label: "Sur Jhankar" },
        { value: "Positive Psychology", label: "Positive Psychology" },
        { value: "Srijan Club", label: "Srijan Club" },
        { value: "Snapshot", label: "Snapshot" },
        { value: "Apni Pathshala Club", label: "Apni Pathshala Club" },
        { value: "The Golden Pen Club", label: "The Golden Pen Club" }
    ];
    return (
        <div className="w-full lg:w-[35%] bg-[#0f4a85] text-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] font-medium mb-6">Join Cultural Club</h2>

            <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">

                {/* TEXT FIELDS */}
                {[
                    { name: "fullName", placeholder: "Enter your full name" },
                    { name: "course", placeholder: "Enter Course" },
                ].map((field) => (
                    <div key={field.name}>
                        <input
                            type="text"
                            name={field.name}
                            placeholder={field.placeholder}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values[field.name as keyof typeof formik.values]}
                            className="w-full p-3 rounded-lg bg-white text-black  focus:outline-yellow-400"
                        />
                        {formik.touched[field.name as keyof typeof formik.touched] &&
                            formik.errors[field.name as keyof typeof formik.errors] && (
                                <p className="text-[#ff0000] text-sm mt-1">
                                    {formik.errors[field.name as keyof typeof formik.errors]}
                                </p>
                            )}
                    </div>
                ))}

                {/* YEAR DROPDOWN */}
                <div>
                    <select
                        name="year"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.year}
                        className="w-full p-3 rounded-lg bg-white text-black focus:outline-yellow-400"
                    >
                        <option className="text-red-500!" value="">Select Year</option>
                        {years.map((y) => (
                            <option key={y} value={y}>
                                {y}
                            </option>
                        ))}
                    </select>

                    {formik.touched.year && formik.errors.year && (
                        <p className="text-[#ff0000] text-sm mt-1">{formik.errors.year}</p>
                    )}
                </div>

                {/* REST INPUT FIELDS */}
                {[
                    { name: "roll", placeholder: "Enter Roll Number" },
                    { name: "contact", placeholder: "Enter Contact No" },
                    { name: "email", placeholder: "Enter Email" },
                ].map((field) => (
                    <div key={field.name}>
                        <input
                            type="text"
                            name={field.name}
                            placeholder={field.placeholder}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values[field.name as keyof typeof formik.values]}
                            className="w-full p-3 rounded-lg bg-white text-black focus:outline-yellow-400"
                        />
                        {formik.touched[field.name as keyof typeof formik.touched] &&
                            formik.errors[field.name as keyof typeof formik.errors] && (
                                <p className="text-[#ff0000] text-sm mt-1">
                                    {formik.errors[field.name as keyof typeof formik.errors]}
                                </p>
                            )}
                    </div>
                ))}

                {/* MULTISELECT CLUBS */}
                <div>
                    <Select
                        isMulti
                        options={clubOptions}
                        name="club"
                        classNamePrefix="rs"
                        placeholder="Select Clubs"
                        value={clubOptions.filter((opt) =>
                            formik.values.club.includes(opt.value)
                        )}
                        onChange={(selected: MultiValue<ClubOption>) =>
                            formik.setFieldValue(
                                "club",
                                selected ? selected.map((s) => s.value) : []
                            )
                        }
                        onBlur={() => formik.setFieldTouched("club", true)}
                    />


                    {formik.touched.club && formik.errors.club && (
                        <p className="text-[#ff0000] text-sm mt-1">
                            {formik.errors.club as string}
                        </p>
                    )}
                </div>

                {/* SUBMIT BUTTON */}
                <button
                    type="submit"
                    className="bg-[#ffb703] border-2 border-[#ffb703] hover:bg-transparent hover:text-[#ffb703] inline-flex items-center justify-center px-3 py-3 rounded-lg mt-6 gap-x-2 group text-[16px] text-black font-normal"
                >
                    SUBMIT
                    <span className="transition-all duration-200 group-hover:rotate-[360deg]">
                        <MdArrowRightAlt size={26} />
                    </span>
                </button>
            </form>
        </div>
    );
};

export default ClubForm;
