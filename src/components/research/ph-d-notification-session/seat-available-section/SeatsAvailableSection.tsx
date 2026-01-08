import React from "react";

// import { facultiesData } from "../../../../data/research/phd-Notification-sesstion/phd-notification-sesstion-data";
const facultiesData = [
  "Physics",
  "Mathematics",
  "Chemical Sciences",
  "English",
  "Political Science",
  "Sociology",
  "Psychology",
  "Social Work",
  "Public Health",
  "Management",
  "Commerce",
  "Civil Engineering",
  "Electrical & Electronics Engineering",
  "Mechanical Engineering",
  "Computer Science & Engineering",
  "Bio-Sciences",
  "Biotechnology",
  "Media Studies",
  "Legal Studies",
  "Horticulture (Fruit Science)",
  "Agronomy",
  "Education",
];




const SeatsAvailableSection: React.FC = () => {
  return (
    <section className="py-16">
      <h2 className="lg:text-[32px] md:text-[27.255px] sm:text-[21.925px] text-[21.925px] font-bold mb-4">Seats Available in Faculties</h2>
      <ul className="list-decimal! ml-6 space-y-2">
        {facultiesData.map((faculty, index) => (
          <li key={index}>
            <span className="text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px]">{faculty}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SeatsAvailableSection;
