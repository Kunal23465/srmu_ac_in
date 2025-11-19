import React from 'react'

interface AboutGrievanceProps {
  data: {
    title: string;
    purposeText1: string;
    purposeText2?: string;
    objectivesList: string[];
  };
}
const RegistringGrievance: React.FC<AboutGrievanceProps> = ({ data }) => {
  return (
    <div>
      <h2 className="text-[#0f4a85] font-semibold text-[19px] mb-4">{data.title}</h2>

      <p className="mb-3">{data.purposeText1}</p>
      {data.purposeText2 && <p className="mb-6">{data.purposeText2}</p>}



      <ul className="space-y-4 list-none pl-0 !list-none !pl-0">
        {data.objectivesList.map((obj, idx) => (
          <div className='bg-white px-3 py-[18px] rounded-md shadow-xl'>

            <li key={idx} className='relative' >
              <span
                className="
                absolute left-0 top-1/2 translate-y-[-50%]
                text-[#ffb703]/30 
                text-5xl 
                font-semibold
                leading-none 
              
              "
              >
                {idx + 1}
              </span>
              <div className='pl-4 !font-semibold text-[16px] !text-[#212529]'>{obj}</div>
            </li>
          </div>
        ))}
      </ul>

    </div>)
}

export default RegistringGrievance