import React from "react";
import { ContactInfo } from "../../../../data/research/overview/research-overview-data";

interface Props {
  item: ContactInfo;
}

const ContactCard: React.FC<Props> = ({ item }) => {
  return (
    <div className="border border-[#ffb703] bg-white text-[#0f4a85] p-8 rounded-md shadow-sm  hover:shadow-lg transition-all">
      <div className="flex justify-start items-center gap-4">
        <div className="text-3xl mb-2">
          <img src={item.icon} />
        </div>
        <h4 className="font-semibold uppercase text-sm mb-1">{item.label}</h4>
      </div>
      {Array.isArray(item.value) ? (
        <div className="text-xs!">
          {item.value.map((val, i) => (
            <p key={i} className="text-sm!">
              {val}
            </p>
          ))}
        </div>
      ) : (
        <p className="text-sm!">{item.value}</p>
      )}
    </div>
  );
};

export default ContactCard;
