import React from "react";
import { dataTypes } from "../../data/home/courseData";
interface propsTypes{
    data: dataTypes[];
}

const ProgramDescription: React.FC <propsTypes> = ({data}) => {
  return (
    <div className="pb-6 sm:pb-10">
      {data.map((item:any) => (
        <>
          <h1 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] font-semibold mb-2">{item.heading}</h1>
          <p className="mb-2">{item.para}</p>
          {item.content.map((ele:any) => (
            <div className="mb-2">
                  <h3 className="text-lg font-semibold mb-2">{ele.title}</h3>
              <p>{ele.value}</p>
            </div>
          ))}
        </>
      ))}
     
    </div>
  );
};

export default ProgramDescription;
