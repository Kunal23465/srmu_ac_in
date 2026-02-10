import { FC } from "react";

interface EligibilityProps {
  data: string;
}

const CustomEligibilitySection: FC<EligibilityProps> = ({ data }) => {
  return (
    <div>
      <section className="eligibility-container">
        <div className="eligibility-content">
          <h2 className="lg:text-[30px] md:text-[28.125px] text-[26.25px]">Eligibility Criterion</h2>
          <div
            className="text-white [&_span]:!text-[14px] lg:[&_span]:!text-[16px]"
            dangerouslySetInnerHTML={{ __html: data }}
          />
        </div>
      </section>
    </div>
  );
};

export default CustomEligibilitySection;



//Candidate must have passed 10+2 or equivalent system from any recognized Central/ State Board with Physics and Mathematics as 
// compulsory subjects along with one of the Chemistry/Computer Science/Technical Vocational Subject with minimum aggregate marks of 45%.