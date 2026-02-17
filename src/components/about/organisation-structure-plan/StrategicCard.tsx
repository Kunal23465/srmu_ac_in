import React from "react";

interface StrategicCardProps {
  title: string;
  description: string;
  image: string;
}

const StrategicCard: React.FC<StrategicCardProps> = ({ title, description, image }) => {
  return (
    <div className="flex mb-20 flex-col md:flex-row rounded-2xl overflow-hidden shadow-lg bg-[#ffb703]">
      <div className="md:w-1/2 order-2 md:order-1 px-5 py-8 sm:p-10 md:p-15 text-black">
        <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500 text-[#0f4a85] leading-14 sm:mb-4">{title}</h2>
        <p className="text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] whitespace-pre-line text-justify">{description}</p>
      </div>

      <div className="md:w-1/2 order-1 md:order-2">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default StrategicCard;
