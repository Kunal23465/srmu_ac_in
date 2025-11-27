import { FC } from "react";

export interface ScholarshipSchemeItem {
  id: number;
  name: string;
}

export interface ScholarshipSchemesData {
  title: string;
  description: string;
  schemes: ScholarshipSchemeItem[];
  buttonText: string;
}

export interface ExtendedScholarshipScheme {
  data: ScholarshipSchemesData;
}

const ScholarshipSchemes: FC<ExtendedScholarshipScheme> = ({ data }) => {
  const { title, description, schemes, buttonText } = data;

  const accentColor = "bg-[#ffb703]"; // yellow accent

  // Image URL

  return (
    <section
      className="text-white px-4 sm:px-8 flex items-center justify-center bg-cover bg-center bg-no-repeat skoi"
    >
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto w-full p-6 rounded-lg justify-between">
        {/* LEFT SECTION */}
        <div className="lg:w-[500px] pr-0 lg:pr-12 mb-10 lg:mb-0">
          <h1 className="font50 fw500 mt-6 leading-15">
            {title}
          </h1>

          <p className=" mb-7 text-white">
            {description}
          </p>

          <button
            className={`
              ${accentColor} text-[#0a3d62] font-bold py-4 px-8 mt-10
              rounded-lg shadow-lg transition duration-300 ease-in-out 
              hover:bg-transparent hover:border-yellow-500 hover:text-yellow-500 hover:border-1 cursor-pointer focus:outline-none uppercase focus:ring-4 focus:ring-yellow-500/50
            `}
          >
            {buttonText} →
          </button>
        </div>

        <div className="lg:w-1/2 space-y-2">
          <ul className="list-none p-0 m-0 mt-6">
            {schemes.map((scheme: ScholarshipSchemeItem) => (
              <li key={scheme.id} className="flex items-start mb-4 ">
                <span
                  className={` mr-3 font-bold ${accentColor.replace(
                    "bg-",
                    "text-"
                  )}`}
                >
                  ✓
                </span>

                <span className="flex-1 pt-0.5">{scheme.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipSchemes;
