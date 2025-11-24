import React, { useState } from "react";
import CommitteeCards, { CommitteeCardType } from "../../components/about/committee-and-cells/CommitteeCards";

interface CustomCommitteeCardSectionProps {
  data: CommitteeCardType[];
}

const CustomCommitteeCardSection: React.FC<CustomCommitteeCardSectionProps> = ({ data }) => {
  const [visibleCount, setVisibleCount] = useState(6);

  const visibleCards = data.slice(0, visibleCount);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleCards.map((card, index) => (
          <CommitteeCards key={card.id} {...card} index={index} />
        ))}
      </div>

      {visibleCount < data.length && (
        <div className="text-center mt-8">
          <button
            onClick={handleViewMore}
            className="px-6 py-3 view-button text-white rounded-md cursor-pointer transition-all duration-300"
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
};

export default CustomCommitteeCardSection;
