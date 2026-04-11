import React from "react";
import whyIcon1 from "../../../assets/images/programs/btechincseaiandml/why_icon1.png";
import whyIcon2 from "../../../assets/images/programs/btechincseaiandml/why_icon2.png";
import whyIcon3 from "../../../assets/images/programs/btechincseaiandml/why_icon3.png";
import whyIcon4 from "../../../assets/images/programs/btechincseaiandml/why_icon4.png";

export interface WhyCardProps {
  imagePath?: string;
  title: string;
  bgColor?: string;
  iconColor?: string;
}

interface WhyCardCompProps {
  item: WhyCardProps;
  index: number;
}

const images = [whyIcon1, whyIcon2, whyIcon3, whyIcon4];

const WhyCardComp: React.FC<WhyCardCompProps> = ({ item, index }) => {
  const { imagePath, title, bgColor = "#144981", iconColor = "#f5c242" } = item;

  // 🔥 Dynamic image selection
  const dynamicImage = imagePath || images[index % images.length];

  return (
    <div
      className="w-full sm:max-w-[280px] min-h-[250px] rounded-xl flex flex-col items-center justify-center text-center px-6 py-8 shadow-lg"
      style={{ backgroundColor: bgColor }}
    >
      <img
        src={dynamicImage}
        alt="why card icon"
        className="w-[60px] h-[60px] object-contain"
        style={{
          filter: iconColor ? `drop-shadow(0 0 0 ${iconColor})` : undefined,
        }}
      />

      <p className="text-white lg:text-[16px] md:text-[15px] text-[14px] leading-relaxed mt-4">
        {title}
      </p>
    </div>
  );
};

export default WhyCardComp;