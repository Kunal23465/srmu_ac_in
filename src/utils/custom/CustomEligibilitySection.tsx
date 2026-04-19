import { FC } from "react";
import "./CustomEligibilitySection.css";

interface EligibilityProps {
    data: string;
}

const CustomEligibilitySection: FC<EligibilityProps> = ({ data }) => {
    return (
        <div>
            <section className="eligibility-container">
                <div className="eligibility-content">
                    <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem]">Eligibility Criterion</h2>
                    <div
                        className="text-white [&_span]:!text-[14px] lg:[&_span]:!text-[16px] text-justify"
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
