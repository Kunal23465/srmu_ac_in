import React, { useState } from "react";
import Classes from "../../utils/styles/Global.module.css";
import { FaAngleRight } from "react-icons/fa";
import img1 from "../../assets/images/home/apply-srmu1.jpg";
import { Link } from "react-router-dom";
import img2 from "../../assets/images/home/apply2.jpg"
import img3 from "../../assets/images/home/apply3.jpg"
import img4 from "../../assets/images/home/apply4.jpg"
import img5 from "../../assets/images/home/apply5.jpg"
import img6 from "../../assets/images/home/apply6.jpg"

const accordianData = [
    {
        id: 0,
        title: "After Class 10th",
        content: (
            <>
                <p>Explore a range of design and polytechnic courses.</p>
                <Link to="/programs/after-class-10th" className="text-[#ffb703] font-medium">Read More</Link>
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
                <Link to="/programs/after-class-12th" className="text-[#ffb703] font-medium">Read More</Link>
            </>
        ),
        imgSrc: img2,
    },
    {
        id: 2,
        title: "Industry Honors",
        content: (
            <>
                <p>Our outcome-based programs your professional growth and skill-building.</p>
                <Link to="/programs/industry-honors" className="text-[#ffb703] font-medium">Read More</Link>
            </>
        ),
        imgSrc: img3,
    },
    {
        id: 3,
        title: "After Graduation",
        content: (
            <>
                <h3 className="text-[40px] text-[#260805] font-medium">Commerce and Economics</h3>
                <p>Hone your proficiency in your respective fields with our post-graduate degrees.</p>
                <Link to="/programs/after-graduation" className="text-[#ffb703] font-medium">Read More</Link>
            </>
        ),
        imgSrc: img4,
    },
    {
        id: 4,
        title: "After Polytechnic",
        content: (
            <>
                <p>Develop greater technical knowledge with these skills-based programs.</p>
                <Link to="/programs/after-polytechnic" className="text-[#ffb703] font-medium">Read More...</Link>
            </>
        ),
        imgSrc: img5,
    },
    {
        id: 5,
        title: "After Post Graduation",
        content: (
            <>
                <p>Become a sought-after researcher with our PHD programs.</p>
                <Link to="/programs/after-post-graduation" className="text-[#ffb703] font-medium">Read More...</Link>
            </>
        ),
        imgSrc: img6,
    },
];

const Apply: React.FC = () => {
    const [active, setActive] = useState<number>(0);
    return (
        <div className={`${Classes.container} pb-7 md:pb-10 lg:pb-14`}>

            <div className="flex flex-col-reverse sm:flex-row gap-x-10 gap-y-6">

                {/* Left Part - Accordion */}
                <div className="left-part w-full sm:max-w-[500px] sm:min-w-[500px]">
                    <h2 className="font36 fw600">Apply to SRMU</h2>
                    <p className="mt-4 sm:mt-8">
                        Whether you’re looking for an undergraduate degree or to develop industry-specific skills, SRMU has every pathway available for you.
                    </p>

                    <div className="mt-4 sm:mt-8">
                        {accordianData.map((item) => (
                            <div
                                key={item.id}
                                className={`sm:w-[125%] relative px-6 py-4 ${
                                    item.id === active
                                        ? "bg-[#eefcff] border border-[#219ebc] rounded-lg"
                                        : ""
                                }`}
                            >
                                
                                <div /* @ts-ignore */
                                    onClick={() => setActive((ele) => (ele !== item.id ? item.id : null))}
                                    className={`cursor-pointer font-medium text-xl flex items-center gap-x-2 ${
                                        item.id === active ? "text-[#219ebc]" : ""
                                    }`}
                                >
                                    <span className={`transform ${item.id === active ? "rotate-90" : ""}`}>
                                        <FaAngleRight color="#219ebc" />
                                    </span>
                                    {item.title}
                                </div>

                                <div
                                    className={`mt-2 overflow-hidden  ease-in-out ${
                                        item.id === active ? "max-h-[1500px]" : "max-h-0"
                                    }`}
                                >
                                    {item.content}

                                    {/* 👉 Mobile Image (inside accordion width) */}
                                    {item.id === active && (
                                        <img
                                            src={item.imgSrc}
                                            alt="Program visual"
                                            className="mt-4 rounded-lg block sm:hidden w-full"
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Part - Image (Desktop only) */}
                <div className="right-part w-full sm:w-auto hidden sm:block">
                    <img
                        className="w-full h-auto rounded-lg max-w-[720px] max-h-[500px]"
                        src={active !== null ? accordianData[active].imgSrc : accordianData[0].imgSrc}
                        alt="Accordion Visual"
                    />
                </div>

            </div>
        </div>
    );
};

export default Apply;
