import React from "react";

export interface CustomInstituteCourseCardProps {
  imageUrl: string;
  departmentName: string;
}

interface CustomInstituteCourseCardComponentProps {
  data: CustomInstituteCourseCardProps[];
}

const CardItem: React.FC<CustomInstituteCourseCardProps> = ({
  imageUrl,
  departmentName,
}) => {
  return (
    <div
      className="
        relative
        w-full
        h-[19.5rem]
        max-w-[17rem]
        overflow-hidden
        rounded-xl
        shadow-lg
        transition duration-300 ease-in-out
        hover:shadow-2xl hover:scale-[1.02]
      "
    >
      <img src={imageUrl} alt={departmentName} className="w-full h-full object-cover" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

      <div className="absolute inset-0 p-4 sm:p-6 flex items-end">
        <p className="text-white font15 fw500 leading-snug">{departmentName}</p>
      </div>
    </div>
  );
};

const CustomInstituteCoursesCard: React.FC<CustomInstituteCourseCardComponentProps> = ({
  data,
}) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {data.map((card, index) => (
          <CardItem key={index} imageUrl={card.imageUrl} departmentName={card.departmentName} />
        ))}
      </div>
    </div>
  );
};

export default CustomInstituteCoursesCard;
