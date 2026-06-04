import { FaArrowRight } from "react-icons/fa";
import mou from "../../assets/new-home/mou/mou.webp";
import mou_mobile from "../../assets/new-home/mou/mobile-mou.webp";
import MobileReadMore from "./MobileReadMore";
import Classes from "../../utils/styles/Global.module.css";
import { Link } from "react-router-dom";
export default function MoU() {
  return (
    <section className="bg-[#0F4A85]  relative">
      <div className={`${Classes["container"]} py-8 md:py-10 lg:py-12`}>
        <div className=" mb-6 ">
          <h2 className="text-lg md:text-3xl lg:text-4xl font-bold text-white leading-tight md:leading-tight">
            Memorandum of Understanding
            <span className="text-[#FFC107]"> (MoU)</span>
          </h2>
          <MobileReadMore className="text-[13px] md:text-base text-white leading-relaxed mt-2 md:mt-3">
            SRMU collaborates with leading industries, government organizations
            and international universities to provide students with global
            exposure, live projects, internships, certifications and career
            opportunities, making it one of the emerging best colleges in Uttar
            Pradesh for industry-focused education.
          </MobileReadMore>
        </div>

        <picture>
          <source media="(max-width: 639px)" srcSet={mou_mobile} />
          <img
            src={mou}
            alt="MoU"
            width={1600}
            height={188}
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="rounded-md w-full"
          />
        </picture>
        <div className="mt-5 md:mt-6 flex justify-center">
          <Link to="/recognition-approvals" className="btn-primary text-xs md:text-sm py-2.5 md:py-3">
            Know More
            <FaArrowRight aria-hidden="true" className="text-sm" />
          </Link>
        </div>
      </div>
    </section>
  );
}
