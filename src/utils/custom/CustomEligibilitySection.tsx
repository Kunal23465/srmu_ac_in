import { FC } from "react"

const CustomEligibilitySection: FC = () => {
    return (
        <div>
            <section className="eligibility-container">
                <div className="eligibility-content">
                    <h2>Eligibility Criterion</h2>
                    <p>
                        Candidate must have passed 10+2 or equivalent system from any recognized
                        Central/ State Board with Physics and Mathematics as compulsory subjects
                        alongwith one of the Chemistry/Computer Science/Technical Vocational Subject.
                        Candidate must obtained minimum 45% marks or equivalent grade for GEN/OBC
                        and 40% marks or equivalent grade for SC/ST Category in the above subjects
                        taken together.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default CustomEligibilitySection