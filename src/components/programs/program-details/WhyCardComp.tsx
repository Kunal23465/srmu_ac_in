import React from "react";
import whyIcon1 from "../../../assets/images/programs/btechincseaiandml/why_icon1.png"
import whyIcon2 from "../../../assets/images/programs/btechincseaiandml/why_icon2.png"
import whyIcon3 from "../../../assets/images/programs/btechincseaiandml/why_icon3.png"
import whyIcon4 from "../../../assets/images/programs/btechincseaiandml/why_icon4.png"

export interface WhyCardProps {
  imagePath: string; // image URL or import
  title: string;
  bgColor?: string;
  iconColor?: string; // optional tint if you need
}

interface WhyCardCompProps {
  item: WhyCardProps;
  imageIndex: string | number | any
}

const images = [whyIcon1, whyIcon2, whyIcon3, whyIcon4]


const WhyCardComp: React.FC<WhyCardCompProps> = ({ item, imageIndex }) => {
  const { imagePath, title, bgColor = "#144981", iconColor = "#f5c242" } = item;
  return (
    <div className="w-full max-w-[280px] min-h-[250px] rounded-xl flex flex-col items-center justify-center text-center px-6 py-8 shadow-lg" style={{ backgroundColor: bgColor }}>
      <img src={imagePath || images[imageIndex]} alt="why card icon" className="w-[60px] h-[60px] object-contain" style={{ filter: iconColor ? `drop-shadow(0 0 0 ${iconColor})` : undefined }} />

      <p className="text-white text-[16px] leading-relaxed mt-4">{title || ""}</p>
    </div>
  );
};

export default WhyCardComp;
