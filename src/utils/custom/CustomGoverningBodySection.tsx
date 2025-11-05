import React, { useState } from "react";
import ProfileCards from "../../components/about/message/ProfileCards";
import { Member } from "../../data/about/message/messageData";



interface GoverningBodySectionProps {
  title: string;
  description: string;
  data: Member[];
}

const CustomGoverningBodySection: React.FC<GoverningBodySectionProps> = ({
  title,
  description,
  data,
}) => {
  const [visibleCount, setVisibleCount] = useState(8);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          {title}
        </h2>
        <p className="text-gray-600 mb-10">{description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {data.slice(0, visibleCount).map((member, index) => (
            <ProfileCards key={index} member={member} />
          ))}
        </div>

        {visibleCount < data.length && (
          <button
            onClick={handleViewMore}
            className="mt-10 view-button text-white px-6 py-3 cursor-pointer rounded-lg transition-all duration-200 flex items-center mx-auto gap-2 font-semibold"
          >
            VIEW MORE
            <span className="text-lg">→</span>
          </button>
        )}
      </div>
    </section>
  );
};

export default CustomGoverningBodySection;
