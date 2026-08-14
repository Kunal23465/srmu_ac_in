import React from "react";
import { DepartmentVMType } from "../../data/academics/institute/faculty-of-civil-engineering/faculty-of-civil-engineering-data";

interface Props {
  data: DepartmentVMType;
}
// @ts-ignore
const CustomDepartmentVissionMission: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-col px-3 py-6 sm:p-[38px] min-h-[350px] sm:min-h-[530px] min-w-[250px] rounded-3xl shadow-md" style={{ backgroundColor: data.bgColor }}>
      {/* Image */}
      <img src={data.img} alt={`SRMU Department ${data.heading || 'Vision Mission'} icon`} className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] object-contain mb-4" />

      {/* Heading */}
      <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500 mb-0 md:mb-4 text-[#023047]">{data.heading}</h2>
      {data.description && <h2 className="text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px]">{data.description}</h2>}
      {/* List Items */}
      <ul className="list-disc pl-5 pt-1 sm:pt-2.5 space-y-1 md:space-y-2 text-[#212529] text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] marker:text-[1.8rem]">
        {data.points?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CustomDepartmentVissionMission;
