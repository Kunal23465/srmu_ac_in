import React, { useEffect, useRef, useState } from 'react';
import Classes from "../../../utils/styles/Global.module.css";
import { outreachStats } from '../../../data/campus-life/outreach-activations/outreach-activations-data';
import { useCountUp } from '../../../utils/useCountUp';

const OutreachStats: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [startCount, setStartCount] = useState(false);

    // Observe when section appears on screen
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setStartCount(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="bg-[#0E4A85]" ref={sectionRef}>
            <div className={`${Classes["container"]} flex items-center justify-between py-8 flex-wrap`}>
                
                {outreachStats.map((stat, index) => {
                    const animatedValue = useCountUp(stat.value, 1500);

                    return (
                        <div key={index} className="flex gap-5 px-10 md:px-0 items-center justify-center my-10">
                            <img src={stat.img} alt={stat.label} className="w-16 h-16 md:w-24 md:h-24" />

                            <div>
                                <h2 className="lg:text-[60px] md:text-[56.25px] text-[35px] sm:text-[35px] font-normal text-[#FFB701]">
                                    {startCount ? animatedValue : 0}+
                                </h2>
                                <p className="text-[16px] md:text-[22px] -mt-3 text-white text-center">
                                    {stat.label}
                                </p>
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    );
};

export default OutreachStats;
