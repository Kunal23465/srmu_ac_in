import React, { useState } from "react";
import ProfileCards from "../../components/about/leadership-and-governance/ProfileCards";
import { Member } from "../../data/about/leadership-and-governance/leadership-and-governance-data";



interface MembersSectionProps {
  title: string;
  description: string;
  data: Member[];
}

const CustomMembersSection: React.FC<MembersSectionProps> = ({
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
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
          {title}
        </h2>
        <p className="text-gray-600 mb-10">{description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-0 gap-y-8
 justify-items-center text-left">
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

export default CustomMembersSection;
