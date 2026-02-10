import React from "react";

interface PartnerItem {
  img: string;
  title: string;
}

interface PartnerLogosProps {
  data: PartnerItem[];
}

const PartnerLogos: React.FC<PartnerLogosProps> = ({ data }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap:15 lg:gap-30 place-items-center">
        {data.map((item, index) => (
          <div key={index} className="flex border w-full sm:border-none border-[#ccc] py-2 px-3 sm:p-0 flex-col items-center gap-5">
            <img
              src={item.img}
              alt={item.title}
              className=" w-[105px] sm:w-[210px] object-contain"
            />
            <p className="text-base sm:text-lg fw600 text-center">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerLogos;
