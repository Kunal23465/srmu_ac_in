import React from 'react'
import girl from "../../../assets/images/admissions/overview/girl-08022411552330.webp"
import Classes from "../../../utils/styles/Global.module.css";

const OnlyCampus: React.FC = () => {
    return (
        <div>
            <section className="relative bg-cover bg-center bg-no-repeat  skoi overflow-hidden">
                <div className="absolute inset-0 bg-slate-700/10"></div>

                <div className={`${Classes["container"]}`}>
                    <div className="flex flex-col md:flex-row items-start  ">

                        <div className="text-white md:w-[60%] lg:w-[70%]   z-10 py-20">
                            <h2 className="lg:text-[35px] text-[30.632px] md:text-[32.82px] sm:text-[30.632px] fw500 mb-4 leading-snug">
                                Only Campus is the Region with a Future Driven Environment
                            </h2>

                            <p className="mb-2 text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] leading-relaxed text-justify">
                                SRMU, uniquely founded and led by two IIT Gold medalists in India, boasts 24 years of hands-on experience in managing esteemed Engineering and Management colleges within the Ramswaroop group. Our commitment is to elevate our facilities to international standards, providing top-notch academia and professional resources to prepare students for global opportunities.
                            </p>

                            <p className="leading-relaxed text-justify">
                                SRMU stands out as a hub of academic and extra-curricular excellence, equipped with cutting-edge infrastructure and amenities. It serves as a dynamic confluence of academic, cultural, and intellectual resources, striving for the highest levels of distinction in knowledge innovation and transmission. With 10 institutes offering a diverse array of programs in Engineering, Computer Applications, Agriculture, Pharmacy, Biotechnology & Bio-Sciences, Management, Commerce, Economics, Journalism & Mass Communication, Law, Natural Sciences, Humanities, Education & Research, SRMU provides a wide spectrum of choices for students.
                            </p>

                            <p className='text-justify'>
                                Additionally, our Institute of Diploma Studies offers job-oriented Polytechnic courses in Automobile, Production, Civil, Electrical, Electronics & Communication, Computer Science, and Biomedical Engineering. Join SRMU for an unparalleled educational experience that goes beyond traditional boundaries.
                            </p>

                        </div>

                        <div className="xl:w-[420px]  w-[320px]
                         hidden md:block 
                            md:absolute bottom-0 2xl:right-[180px] right-0 z-0  ">
                            <img
                                src={girl}
                                alt="Student"
                                className="w-full  vb"
                            />
                        </div>

                    </div>
                </div>
            </section>


        </div>
    )
}

export default OnlyCampus