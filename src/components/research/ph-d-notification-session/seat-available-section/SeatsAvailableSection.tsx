import React from "react";

import { facultiesData } from "../../../../data/research/phd-Notification-sesstion/phd-notification-sesstion-data";

const SeatsAvailableSection: React.FC = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-4">Seats Available in Faculties</h2>
      <ol className="list-decimal ml-6 space-y-2">
        {facultiesData.map((faculty, index) => (
          <li key={index}>
            <span className="font-semibold">{faculty.name}</span>

            {faculty.subFields && (
              <ul className="list-disc ml-8 mt-1 space-y-1">
                {faculty.subFields.map((sub, subIndex) => (
                  <li key={subIndex}>{sub}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default SeatsAvailableSection;
