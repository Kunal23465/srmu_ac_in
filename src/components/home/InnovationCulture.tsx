import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import girlsimage from "../../assets/images/home/girls-image.webp";
import { Link } from "react-router-dom";
import Classes from "../../utils/styles/Global.module.css";
export default function InnovationCulture() {
  return (
    <section className={`${Classes["container"]} py-8 md:py-10 lg:py-12`}>
      <div className="card-color rounded-3xl overflow-hidden px-3 py-4 sm:p-10 lg:p-[5rem] flex flex-col lg:flex-row max-w-[1300px] w-full items-center relative text-white">
        <div className="w-full pb-4 lg:pb-0">
          <div className="pb-4 sm:pb-8">
            <h2 className="uppercase text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500 leading-tight">Excellent Research and Innovation Culture</h2>
          </div>

          <div className="humming">
            <ul className="text-sm sm:text-base lg:text-lg uppercase font20">
              <li className="border border-[#0e2f46] hover:border-white  rounded-xl transition-all duration-500 py-1 pl-2">
                <Link to="/research-overview" className="text-sm sm:text-base">22 Research & Consultancy Projects Completed</Link>
              </li>
              <li className="border border-[#0e2f46] hover:border-white  rounded-xl transition-all duration-500 py-1 pl-2">
                <Link to="/research-overview" className="text-sm sm:text-base">3 Cr.+ Funding Received For R & C Projects</Link>
              </li>
              <li className="border border-[#0e2f46] hover:border-white  rounded-xl transition-all duration-500 py-1 pl-2">
                <Link to="/research-overview" className="text-sm sm:text-base">90+ Patents Granted / Published</Link>
              </li>
              <li className="border border-[#0e2f46] hover:border-white  rounded-xl transition-all duration-500 py-1 pl-2">
                <Link to="/research-overview" className="text-sm sm:text-base">825+ Research Papers Published</Link>
              </li>
              <li className="border border-[#0e2f46] hover:border-white  rounded-xl transition-all duration-500 py-1 pl-2">
                <Link to="/research-overview" className="text-sm sm:text-base">270+ Books & Book Chapters Published</Link>
              </li>
              <li className="border border-[#0e2f46] hover:border-white  rounded-xl transition-all duration-500 py-1 pl-2">
                <Link to="/research-overview" className="text-sm sm:text-base">125+ Ph.D. Awarded</Link>
              </li>
            </ul>
          </div>

          <Link
            to="/research-overview"
            className="inline-flex items-center cursor-pointer mt-4 sm:mt-8 gap-2 bg-[#ffb703] text-[#023047] fw500 uppercase py-3 px-8 rounded-xl transition border border-[#ffb703] hover:bg-transparent hover:text-[#ffb703]"
          >
            Know More <LiaLongArrowAltRightSolid size={24} />
          </Link>
        </div>

        <div className="w-full max-w-[400px] hidden  mt-10 lg:mt-0 lg:flex justify-center">
          <img 
            src={girlsimage} 
            alt="Students" 
            width={400}
            height={400}
            loading="lazy"
            decoding="async"
            className="block object-contain absolute bottom-0" 
          />
        </div>
      </div>
    </section>
  );
}
