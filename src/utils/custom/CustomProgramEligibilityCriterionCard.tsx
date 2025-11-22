import EligibilityImg from "../../assets/images/eligibility-img.jpg";
import React from "react";

interface CustomProgramEligibilityCriterionCardProps {
  heading: string;
  content: string;
  extraContent?: string;
}

const CustomProgramEligibilityCriterionCard: React.FC<CustomProgramEligibilityCriterionCardProps> = (data) => {
  return (
    <div
      className="relative rounded-xl bg-cover bg-center bg-no-repeat py-30 p-15 text-white min-h-[350px]"
      style={{ backgroundImage: `url(${EligibilityImg})` }}
    >
      <div className="max-w-[50%] xl:ml-auto lg:ml-auto sm:ml-15">
        <p className="text-3xl font-medium pb-3">{data.heading}</p>
        <p className="pb-4">{data.content}</p>

        {data.extraContent && (
          <>
            <p className="pb-4 font-semibold">OR</p>
            <p>{data.extraContent}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default CustomProgramEligibilityCriterionCard;


/*
-------- How To Use -------
<CustomProgramEligibilityCriterionCard {...xyz}/>


-------- Example Data ---------

interface CustomProgramEligibilityCriterionCardProps{
    heading: string;
    content: string;
    extraContent?: string;

}

export const xyz: CustomProgramEligibilityCriterionCardProps = 
  {
    heading: "Eligibility Criterion",
    content: "Candidate must have passed B.Tech (CSE) from any recognized University or AICTE recognized Institute/College with minimum aggregate marks of 50% or 5.5 CGPA for GEN/OBC and 45% marks or 5.0 CGPA for SC/ST Category.",
    extraContent: "Candidate must have passed MCA/M.Sc(CS)/MA(CA)/M.Sc.(IT)/M.Sc.(Electronics)/B.Tech (EC) from any recognized University or AICTE recognized Institute/College with minimum aggregate marks of 50% or 5.5 CGPA for GEN/OBC and 45% marks or 5.0 CGPA for SC/ST Category."
  };
  */