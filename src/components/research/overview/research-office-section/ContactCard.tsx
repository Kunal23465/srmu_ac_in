import React from "react";
import { ContactInfo } from "../../../../data/research/overview/research-overview-data";

interface Props {
  item: ContactInfo;
}

const ContactCard: React.FC<Props> = ({ item }) => {
  return (
    <div className="border border-[#ffb703] hover:border-[#0f4a85] bg-white text-black  hover:text-white hover:bg-[#0f4a85] p-8 rounded-md shadow-sm  hover:shadow-lg transition-all duration-500">
      <div className="flex justify-start items-center gap-4">
        <div className="text-[22px] sm:text-[28px] lg:text-[3.125rem] mb-2">
          <img src={item.icon} />
        </div>
        <h4 className="font-semibold uppercase lg:text-[17px] md:text-[15.945px] sm:text-[14.882px] mb-1">{item.label}</h4>
      </div>
      {Array.isArray(item.value) ? (
        <div className="lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px]">
          {item.value.map((val, i) => (
            <p key={i} className="lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px]">
              {val}
            </p>
          ))}
        </div>
      ) : (
        <p className="lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px]">{item.value}</p>
      )}
    </div>
  );
};

export default ContactCard;
