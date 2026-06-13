import { Link } from "react-router-dom";
import Classes from "../../../utils/styles/Global.module.css";

export const ABC = () => {
  return (
    <div className="bg-[#f1f1f1] py-20">
      <div className={`${Classes["container"]}`}>
        <h2 className="lg:text-[22px] sm:text-[19.5px] text-[19.5px] md:text-[20.625px] mb-4 color_light_blue">
          <strong>Academic Bank of Credits (ABC)</strong>
        </h2>

        <div className="mb-4 lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] text-justify">
          <p>
            Government of India, Under National Education Policy-2020,intends to
            enable students across the nation with the "Academic Bank of
            Credits" (ABC) system for fulfilling their thirst for knowledge by
            providing academic flexibility to pick and modify their educational
            paths,link diverse disciplines, and assist them in acquiring the
            proper foundations and building blocks for their ambitions.
          </p>
        </div>

        <div className="mb-4 lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] text-justify">
          <p>
            The "Academic Bank of Credits" (ABC) is an educational digital
            platform created to faciltate students' seamless mobility between or
            within degree-granting Higher Education Institutions (HEls) through
            a formal system of credit recognition, credit accumulation, credit
            transfers, and credit redemption in order to promote distributed and
            flexible teaching and learning. The ABC platform will provide
            students with the opportunity to register for a unique ABC ID, an
            interactive dashboard to see their credit accumulation, and options
            to begin a choice-based credit transfer mechanism.
          </p>
        </div>

        <div className="mb-4 lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] text-justify">
          <p>
            ABC can be considered as an authentic reference to check the credit
            record of any student at any given pointin time.
          </p>
        </div>

        <div className="mb-4">
          <Link
            target="_blannk"
            rel="noopener noreferrer"
            aria-label="GO TO ABC PORTAL"
            title="GO TO ABC PORTAL"
            to="https://www.abc.gov.in/assets/resources/Academic-Bank-of-Credits_User_Manual_V3.pdf"
            className="color_light_blue lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] font-semibold"
          >
            GO TO ABC PORTAL
          </Link>
        </div>

        <div className="mb-4">
          <Link
            target="_blannk"
            rel="noopener noreferrer"
            aria-label="USER MANUAL:STUDENT REGISTRATION AND CREDIT TRANSFER UNDER ABC"
            title="USER MANUAL:STUDENT REGISTRATION AND CREDIT TRANSFER UNDER ABC"
            to="https://www.abc.gov.in/assets/resources/Academic-Bank-of-Credits_User_Manual_V3.pdf"
            className="color_light_blue lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] font-semibold"
          >
            USER MANUAL:STUDENT REGISTRATION AND CREDIT TRANSFER UNDER ABC
          </Link>
        </div>
      </div>
    </div>
  );
};
