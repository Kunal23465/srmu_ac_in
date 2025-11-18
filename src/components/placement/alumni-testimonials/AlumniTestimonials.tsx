import React from "react";
import { AlumniCardType, alumniData, alumniTestimonialOverviewData, alumniTestimonialTopFooterData } from "../../../data/placement/alumni-testimonials-data";
import CustomAlumniCard from "../../../utils/custom/CustomAlumniCard";
import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";


const AlumniTestimonials: React.FC = () => {
    return (
        <div>
            <div className={`${Classes["container"]}`}>
                <CustomOverviewSection data={alumniTestimonialOverviewData} />
                <div className="w-full py-10">

                    {/* GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {alumniData.map((item: AlumniCardType) => (
                            <CustomAlumniCard key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            </div>
             <CustomTopFooter data={alumniTestimonialTopFooterData} />
        </div>

    );
};

export default AlumniTestimonials;
