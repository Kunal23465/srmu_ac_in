import React from "react";

interface StrategicCardProps {
  title: string;
  description: string;
  image: string;
}

const StrategicCard: React.FC<StrategicCardProps> = ({ title, description, image }) => {
  return (
    <div className="flex mb-20 flex-col md:flex-row rounded-2xl overflow-hidden shadow-lg bg-[#ffb703]">
      <div className="md:w-1/2 order-2 md:order-1 p-15 text-black">
        <h2 className="text-3xl lg:text-5xl font-medium text-[#0f4a85] mb-4">{title}</h2>
        <p className="text-[15px] leading-relaxed whitespace-pre-line text-justify">{description}</p>
      </div>

      <div className="md:w-1/2 order-1 md:order-2">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default StrategicCard;
