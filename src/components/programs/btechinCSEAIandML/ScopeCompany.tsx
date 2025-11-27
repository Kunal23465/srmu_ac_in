import React from 'react';

// Define the type for a single career option
type CareerOption = {
  name: string;
};

// Define the props for the component
interface ScopeInCompaniesProps {
  careerOptions: CareerOption[];
}


const chunkArray = <T,>(arr: T[], chunkSize: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
};

const ScopeInCompanies: React.FC<ScopeInCompaniesProps> = ({ careerOptions }) => {
  const midpoint = Math.ceil(careerOptions.length / 2);
  const columns = chunkArray(careerOptions, midpoint);
  const column1 = columns[0] || [];
  const column2 = columns[1] || [];




  return (
    <div className="p-10 bg-gray-100 font-sans">
      <div className="flex gap-12 max-w-7xl mx-auto">
        <div className="flex-shrink-0 w-[250px]">
          <h1 className="text-6xl m-0 text-[#001f3f] leading-tight font-extrabold">
            Scope <br /> in Companies
          </h1>
        </div>

        <div className="flex-grow">
          <p className="text-base text-gray-700">
            By pursuing this program the students will get an in-depth understanding into the modern emerging
            technologies. They will also get an endless exposure to endless career possibilities.
          </p>

          <div className="flex gap-20 mt-5">
            <ul className="list-none p-0 m-0">
              {column1.map((option, index) => (
                <li key={index} className="mb-2.5 flex items-center text-base">
                  <span className="text-orange-500 mr-2.5 text-xl font-bold">
                    &#10003;
                  </span>
                  {option.name}
                </li>
              ))}
            </ul>

            <ul className="list-none p-0 m-0">
              {column2.map((option, index) => (
                <li key={index} className="mb-2.5 flex items-center text-base">
                  <span className="text-orange-500 mr-2.5 text-xl font-bold">
                    &#10003;
                  </span>
                  {option.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScopeInCompanies;