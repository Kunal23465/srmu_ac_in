import nptel from "../../../assets/images/academics/swayam/nptel-130925102034 (1).jpg"


const SrmuSwayam = () => {
    return (
        <div className="py-4 md:py-7 lg:py-7">

            <h2 className='font22 fw600 mb-4 color_light_blue'>
                <strong>SRMU SWAYAM NPTEL Local Chapter</strong>
            </h2>
            <div className="font18 mb-4">
                <p>
                    To take this initiative forward and to encourage more students across university to participate in this initiative, the <strong>SWAYAM NPTEL Local Chapter</strong> has been established at <strong>Shri Ramswaroop University</strong>. The details have been uploaded on our Local Chapter website link <strong>https://nptel.ac.in/LocalChapter</strong>.
                </p>
            </div>

            <div className="font18 mb-4">
                <p>
                    <strong>Dr. Sonal Prasad, Assistant Professor, Faculty of Biosciences</strong> has been nominated as the single point of contact (SPOC) for <strong>SWAYAM NPTEL Local Chapter</strong> and would have all the updates and information. SPOC will identify suitable mentors for various courses to ensure that students are active in a course.
                </p>
            </div>

            <p>
                <img src={nptel} />
            </p>
        </div>
    )
}

export default SrmuSwayam