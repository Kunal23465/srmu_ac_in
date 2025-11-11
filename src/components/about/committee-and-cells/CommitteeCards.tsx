import React from "react";

export interface CommitteeCardType {
  id: number;
  title: string;
  description: string;
  imagePath: string;
  readMoreLink: string;
}

interface CommitteeCardProps extends CommitteeCardType {
  index: number;
}

const CommitteeCard: React.FC<CommitteeCardProps> = ({
  title,
  description,
  imagePath,
  readMoreLink,
  index,
}) => {
  const imageIsBottom = index % 2 !== 0;

  const cardContent = (
    <div className="p-6 flex flex-col justify-between flex-grow transition-colors duration-300 group-hover:text-white cursor-pointer">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-white">
          {title}
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-100">
          {description}
        </p>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100 transition-colors duration-300 group-hover:border-gray-300">
        <a
          href={readMoreLink}
          className="text-sm font-medium text-blue-600 hover:text-blue-300 transition-colors duration-200 flex items-center group-hover:text-blue-200"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );

  const cardImage = (
    <div className="aspect-video p-2">
      <img
        src={imagePath}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer rounded-br-3xl"
      />
    </div>
  );

  return (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full hover:bg-[rgb(15,74,133)] p-2">

      {!imageIsBottom && cardImage}
      {cardContent}
      {imageIsBottom && cardImage}
    </div>
  );
};

export default CommitteeCard;
