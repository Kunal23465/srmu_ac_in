import { FC } from "react"
import isro from "../../../assets/images/academics/isro/iirs-130925105210.jpg"

const About: FC = () => {
    return (
        <div className="py-4 md:py-7 lg:py-7">

            <div className="font18 mb-4">
                <p>
                    The IIRS e-learning courses are flexible for anytime, anywhere learning keeping in mind the demands of geographically dispersed audience and their requirements. The program is comprehensive with variety of online delivery modes with interactive, easy to learn and having a proper blend of concepts and practical to elicit students' full potential.
                </p>
            </div>

            <div className="font18 mb-4">
                <p>
                    IIRS Outreach Programme focuses on strengthening the Academia and User Segments in Space Technology & Its Applications using Online Learning Platforms. Under this programme the two mode of content delivery system is developed using online learning platform (i.e) Live & Interactive mode (known as EDUSAT) and e-Learning mode.
                </p>
            </div>

            <p>
                <img src={isro}/>
            </p>
        </div>
    )
}

export default About