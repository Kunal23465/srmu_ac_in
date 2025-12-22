import React from "react";
import CountUp from "react-countup";
import { counterDataType } from "../../data/home/counterData";

interface counterDataPropsType {
  counterData: counterDataType[];
  classes?: any;
  aboutusClass?: any;
}
const Counter: React.FC<counterDataPropsType> = ({ counterData, classes }) => {
  return (
    <div className={`parent-box ${classes ? classes : ""}   py-7 md:py-10 lg:py-14`}>
      {counterData.map((item: any) => (
        <div key={item.id}>
          <h1 className={`text-3xl lg:text-[47px] font-semibold ${item.icon ? "text-white" : "text-[#ffb703]"}   text-center flex items-center justify-center`}>
            {item.icon && (
              <span className="pt-2 pr-1">
                <img src={item.icon} alt="" />
              </span>
            )}{" "}
            {isNaN(Number(item.value)) ? (
              <span>{item.value}</span>
            ) : (
              <CountUp
                start={0}
                end={Number(item.value)}
                duration={3}
                decimals={item.value.toString().includes(".") ? item.value.toString().split(".")[1].length : 0}
                separator=""
                suffix={item.suffix}
                enableScrollSpy={true}
              >
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
            )}
          </h1>
          <p className={`text-[15px] text-center  mt-3`}>{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Counter;
