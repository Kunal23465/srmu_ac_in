import React from "react";
import CommitteeCards, { CommitteeCardType } from "../../components/about/committee-and-cells/CommitteeCards";

interface CustomCommitteeCardSectionProps {
  data: CommitteeCardType[];
}

const CustomCommitteeCardSection: React.FC<CustomCommitteeCardSectionProps> = ({
  data,
}) => {
  return (
    <section className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((card, index) => (
          <CommitteeCards key={card.id} {...card} index={index} />
        ))}
      </div>
    </section>
  );
};

export default CustomCommitteeCardSection;
