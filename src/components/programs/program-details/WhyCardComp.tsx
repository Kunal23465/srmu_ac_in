import React from "react";

export interface WhyCardProps {
  imagePath: string; // image URL or import
  title: string;
  bgColor?: string;
  iconColor?: string; // optional tint if you need
}

interface WhyCardCompProps {
  item: WhyCardProps;
}

const WhyCardComp: React.FC<WhyCardCompProps> = ({ item }) => {
  const { imagePath, title, bgColor = "#144981", iconColor = "#f5c242" } = item;

  return (
    <div className="w-full max-w-[280px] min-h-[250px] rounded-xl flex flex-col items-center justify-center text-center px-6 py-8 shadow-lg" style={{ backgroundColor: bgColor }}>
      <img src={imagePath || ""} alt="why card icon" className="w-[60px] h-[60px] object-contain" style={{ filter: iconColor ? `drop-shadow(0 0 0 ${iconColor})` : undefined }} />

      <p className="text-white text-[16px] leading-relaxed mt-4">{title || ""}</p>
    </div>
  );
};

export default WhyCardComp;
