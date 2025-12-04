import React, { useState } from "react";
import CommitteeCards, { CommitteeCardType } from "../../components/about/committee-and-cells/CommitteeCards";
import { MdArrowRightAlt } from "react-icons/md";

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleCards.map((card, index) => (
          <CommitteeCards key={card.id} {...card} index={index} />
        ))}
      </div>

      {visibleCount < data.length && (
        <div className="text-center mt-8">
          <button
            onClick={handleViewMore}
            className="inline-flex px-8 py-3 view-button uppercase font-medium text-white rounded-md cursor-pointer transition-all duration-300"
          >
            View More <span className="ml-1"><MdArrowRightAlt size={26} /></span>
          </button>
        </div>
      )}
    </section>
  );
};

export default CustomCommitteeCardSection;
