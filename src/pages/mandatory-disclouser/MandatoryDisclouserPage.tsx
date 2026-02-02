import React from "react";
import { mandatoryDisclousertOverviewData } from "../../data/about/aboutusData";
import CustomOverviewSection from "../../utils/custom/CustomOverviewSection";
import Classes from "../../utils/styles/Global.module.css";
import standard from "../../assets/pdf/standard-inspection-form-26-27-261225040325.pdf";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const MandatoryDisclouserPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Shri Ramswaroop Memorial University | SRMU</title>
        <meta name="description" content="Shri Ramswaroop Memorial University is located in Lucknow-Deva Road, Barabanki, Uttar Pradesh, India. SRMU takes pride in its excellent faculty hailing from leading central universities and premier institutes like IIT(s) and NIT(s) etc." />
      </Helmet>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={mandatoryDisclousertOverviewData} />
        <div className="py-7 md:py-10 lg:py-14">
          <h3 className="font-semibold text-[24px] xl:text-[28px]">Standard Inspection Form – Institute of Pharmacy</h3>
          <p className="text-lg  mb-2">
            The Standard Inspection Form of the Institute of Pharmacy, as prescribed by the concerned regulatory authority, is available for public reference.
          </p>
          <Link className="font-semibold  text-xl" target="_blank" to={standard}>
            Click here to view/ download the document
          </Link>
        </div>
      </div>
    </>
  );
};

export default MandatoryDisclouserPage;
