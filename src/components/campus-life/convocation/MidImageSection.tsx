import convocationimage from "../../../assets/images/campus-life/convocation/convocation-hat.jpg"


const MidImageSection = () => {
    return (
        <section className="w-full">
            <div className="relative w-full h-[500px] md:h-[580px]">
                <img
                    src={convocationimage}
                    alt="Graduation"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/10" />

                <div className="absolute inset-0 flex items-end mb-10 px-6 md:px-16">
                    <h2 className="text-white font32 fw500 leading-snug max-w-3xl">
                        "As you start this new chapter, remember that learning is a lifelong
                        journey, and your convocation is just the beginning."
                    </h2>
                </div>
            </div>

            <div className=" py-10  text-md leading-relaxed ">
                <p>
                    The first convocation is a momentous occasion marking the inaugural
                    formal graduation ceremony for an academic institution. It symbolizes
                    the culmination of students' educational journeys and their transition
                    to the next phase of life. The event is a proud celebration for both
                    graduates and the institution, laying the foundation for a tradition
                    of recognizing academic accomplishments.
                </p>
            </div>
        </section>
    );
}



export default MidImageSection