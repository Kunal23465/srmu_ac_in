import React from "react";
import Classes from "../styles/Global.module.css";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

export interface CustomTopFooterDataType {
  content: string;
  btnText: string;
}

interface propsType {
  data: CustomTopFooterDataType[];
}

const CustomTopFooter: React.FC<propsType> = ({ data }) => {
  return (
    <div className="bg-[#E9F4FF]">
      <div className={`${Classes["container"]} py-8 md:py-10 lg:py-12`}>
        {data.map((ele: any, index) => {
          return (
            <div key={index} className="flex flex-col sm:flex-row items-center sm:justify-between gap-5">
              <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] text-center text-[#0f4a85] sm:text-left font-semibold">{ele.content}</h2>
              <Link
                to="/online-admission"
                className="bg-[#ffb703]  border-2 uppercase   border-[#ffb703] hover:bg-transparent hover:text-[#ffb703] inline-flex gapx-x-1 items-center   font-semibold px-5 lg:px-8 py-3 rounded-md text-nowrap mt-5 sm:mt-0  group "
              >
                {ele.btnText}{" "}
                <span className="transition-all duration-200 group-hover:rotate-[360deg]">
                  <MdArrowRightAlt size={26} />
                </span>{" "}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomTopFooter;
