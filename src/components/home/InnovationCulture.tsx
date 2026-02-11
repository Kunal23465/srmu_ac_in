import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import girlsimage from "../../assets/images/home/girls-image.png";
import { Link } from "react-router-dom";
import Classes from "../../utils/styles/Global.module.css";
export default function InnovationCulture() {
  return (
    <section className={`${Classes["container"]}  py-16  `}>
      <div className="card-color rounded-3xl overflow-hidden p-10 lg:p-[5rem] flex flex-col lg:flex-row max-w-[1300px] w-full items-center relative text-white">
        <div className="w-full pb-10 lg:pb-0">
          <div className="pb-8">
            <h2 className="uppercase text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500 leading-tight">Excellent Research and Innovation Culture</h2>
          </div>

          <div className="humming">
            <ul className=" text-lg uppercase font20">
              <li className="border border-[#0e2f46] hover:border-white  rounded-xl transition-all duration-500 px-5 py-3">
                <a href="#">22 Research & Consultancy Projects Completed</a>
              </li>
              <li className="border border-[#0e2f46] hover:border-white  rounded-xl transition-all duration-500 px-5 py-3">
                <a href="#">3 Cr.+ Funding Received For R & C Projects</a>
              </li>
              <li className="border border-[#0e2f46] hover:border-white  rounded-xl transition-all duration-500 px-5 py-3">
                <a href="#">90+ Patents Granted / Published</a>
              </li>
              <li className="border border-[#0e2f46] hover:border-white  rounded-xl transition-all duration-500 px-5 py-3">
                <a href="#">825+ Research Papers Published</a>
              </li>
              <li className="border border-[#0e2f46] hover:border-white  rounded-xl transition-all duration-500 px-5 py-3">
                <a href="#">270+ Books & Book Chapters Published</a>
              </li>
              <li className="border border-[#0e2f46] hover:border-white  rounded-xl transition-all duration-500 px-5 py-3">
                <a href="#">125+ Ph.D. Awarded</a>
              </li>
            </ul>
          </div>

          <Link
            to="/research"
            className="inline-flex items-center cursor-pointer mt-8 gap-2 bg-[#ffb703] text-[#023047] fw500 uppercase py-3 px-8 rounded-xl transition border border-[#ffb703] hover:bg-transparent hover:text-[#ffb703]"
          >
            Know More <LiaLongArrowAltRightSolid size={24} />
          </Link>
        </div>

        <div className="w-full max-w-[400px] hidden  mt-10 lg:mt-0 lg:flex justify-center">
          <img src={girlsimage} alt="Students" className=" block object-contain absolute bottom-0" />
        </div>
      </div>
    </section>
  );
}
