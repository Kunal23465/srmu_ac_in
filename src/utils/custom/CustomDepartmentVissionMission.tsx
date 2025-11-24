import React from "react";
import { DepartmentVMType } from "../../data/academics/faculty-of-civil-engineering/faculty-of-civil-engineering-data";

interface Props {
    data: DepartmentVMType;
}

const CustomDepartmentVissionMission: React.FC<Props> = ({ data }) => {
    return (
        <div
            className="flex flex-col p-[38px] min-h-[530px] min-w-[530px] rounded-3xl shadow-md"
            style={{ backgroundColor: data.bgColor }}
        >
            {/* Image */}
            <img
                src={data.imageUrl}
                alt="logo"
                className="w-[120px] h-[120px] object-contain mb-4"
            />

            {/* Heading */}
            <h1 className="text-[3rem] font-semibold mb-4 text-[#023047]">
                {data.title}
            </h1>

            {/* List Items */}
            <ul className="list-disc pl-5 pt-[10px] space-y-2 text-[#212529] marker:text-[1.8rem]">
                {data.description?.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};


export default CustomDepartmentVissionMission;