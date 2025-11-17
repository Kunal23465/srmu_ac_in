import React, { useState } from "react";
import Classes from "../../utils/styles/Global.module.css";
import { FaAngleRight } from "react-icons/fa";
import img1 from "../../assets/images/home/apply-srmu1.jpg";

const accordianData = [
    {
        id: 0,
        title: "After Class 10th",
        content: (
            <>
                <p>Explore a range of design and polytechnic courses.</p>
                <button className="text-[#ffb703] font-medium">Read More...</button>
            </>
        ),
        imgSrc: img1,
    },
    {
        id: 1,
        title: "After Class 12th",
        content: (
            <>
                <p>Our bachelor's degrees offer versatile options, from agriculture to law to media studies.</p>
                <button className="text-[#ffb703] font-medium">Read More...</button>
            </>
        ),
        imgSrc: img1,
    },
    {
        id: 2,
        title: "Industry Honors",
        content: (
            <>
                <p>Our outcome-based programs your professional growth and skill-building.</p>
                <button className="text-[#ffb703] font-medium">Read More...</button>
            </>
        ),
        imgSrc: img1,
    },
    {
        id: 3,
        title: "After Graduation",
        content: (
            <>
                <h3 className="text-[40px] text-[#260805] font-medium">Commerce and Economics</h3>
                <p>Hone your proficiency in your respective fields with our post-graduate degrees.</p>
                <button className="text-[#ffb703] font-medium">Read More...</button>
            </>
        ),
        imgSrc: img1,
    },
    {
        id: 4,
        title: "After Polytechnic",
        content: (
            <>
                <p>Develop greater technical knowledge with these skills-based programs.</p>
                <button className="text-[#ffb703] font-medium">Read More...</button>
            </>
        ),
        imgSrc: img1,
    },
    {
        id: 5,
        title: "After Post Graduation",
        content: (
            <>
                <p>Become a sought-after researcher with our PHD programs.</p>
                <button className="text-[#ffb703] font-medium">Read More...</button>
            </>
        ),
        imgSrc: img1,
    },
];

const Apply: React.FC = () => {
    const [active, setActive] = useState<number | null>(null);
    return (
        <div className={`${Classes.container} pb-7 md:pb-10 lg:pb-14`}>
            <div className="flex gap-x-10">
                {/* Left Part - Accordion */}
                <div className="left-part max-w-[500px] sm:min-w-[500px]">
                    <h2 className="text-3xl lg:text-5xl  font-semibold">Apply to SRMU</h2>
                    <p className="mt-4 sm:mt-8 ">
                        Whether you’re looking for an undergraduate degree or to develop industry-specific skills, SRMU has every pathway available for you.
                    </p>


                    <div className="mt-4 sm:mt-8">
                        {accordianData.map((item) => (
                            <div key={item.id} className={`sm:w-[125%] relative px-6 py-4 ${item.id === active ? "bg-[#eefcff] border border-[#219ebc] rounded-lg" : ""}`}>
                                <div
                                    onClick={() => setActive((ele) => (ele !== item.id ? item.id : null))}
                                    className={`cursor-pointer font-medium text-xl flex items-center gap-x-2 ${item.id === active ? "text-[#219ebc]" : ""}`}
                                >
                                    <span className={`transform ${item.id === active ? "rotate-90" : ""}`}>
                                        <FaAngleRight color="#219ebc" />
                                    </span>
                                    {item.title}
                                </div>
                                <div className={`mt-2 overflow-hidden transition-[max-height] duration-500 ease-in-out ${item.id === active ? "max-h-[500px]" : "max-h-0"}`}>{item.content}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Part - Image */}
                <div className="right-part">
                    <img className="w-full h-auto rounded-lg max-w-[720px] max-h-[500px]" src={accordianData[0].imgSrc} alt="Accordion Visual" />

                </div>
            </div>
        </div>
    );
};

export default Apply;
