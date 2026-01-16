import { FC } from "react";

interface EligibilityProps {
  data: string;
}

const CustomEligibilitySection: FC<EligibilityProps> = ({ data }) => {
  return (
    <div>
      <section className="eligibility-container">
        <div className="eligibility-content">
          <h2>Eligibility Criterion</h2>
          <div dangerouslySetInnerHTML={{ __html: data }} />
        </div>
      </section>
    </div>
  );
};

export default CustomEligibilitySection;



//Candidate must have passed 10+2 or equivalent system from any recognized Central/ State Board with Physics and Mathematics as 
// compulsory subjects along with one of the Chemistry/Computer Science/Technical Vocational Subject with minimum aggregate marks of 45%.