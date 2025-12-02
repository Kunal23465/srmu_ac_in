import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import girlsimage from "../../assets/images/home/girls-image.png";
import { Link } from "react-router-dom";

export default function InnovationCulture() {
  return (
    <section className="flex justify-center py-16 px-4">
      <div className="card-color rounded-3xl overflow-hidden p-10 lg:p-[5rem] flex flex-col lg:flex-row max-w-[1300px] w-full items-center relative text-white">
        <div className="lg:w-3/5 pb-10 lg:pb-0">
          <div className="pb-8">
            <h2 className="uppercase text-[2.5rem] fw500 leading-tight">Excellent Research and Innovation Culture</h2>
          </div>

          <div className="humming">
            <ul className="space-y-8 text-lg uppercase font20">
              <li className="hover:border hover:border-white hover:px-3 hover:py-4 hover:rounded-xl transition-all duration-500">
                <a href="#">22 Research & Consultancy Projects Completed</a>
              </li>
              <li className="hover:border hover:border-white hover:px-3 hover:py-4 hover:rounded-xl transition-all duration-500">
                <a href="#">3 Cr.+ Funding Received For R & C Projects</a>
              </li>
              <li className="hover:border hover:border-white hover:px-3 hover:py-4 hover:rounded-xl transition-all duration-500">
                <a href="#">90+ Patents Granted / Published</a>
              </li>
              <li className="hover:border hover:border-white hover:px-3 hover:py-4 hover:rounded-xl transition-all duration-500">
                <a href="#">825+ Research Papers Published</a>
              </li>
              <li className="hover:border hover:border-white hover:px-3 hover:py-4 hover:rounded-xl transition-all duration-500">
                <a href="#">270+ Books & Book Chapters Published</a>
              </li>
              <li className="hover:border hover:border-white hover:px-3 hover:py-4 hover:rounded-xl transition-all duration-500">
                <a href="#">125+ Ph.D. Awarded</a>
              </li>
            </ul>
          </div>

<<<<<<< HEAD
          <Link
            to="/research/overview"
            className="inline-flex items-center cursor-pointer mt-8 gap-2 bg-[#ffb703] text-[#023047] fw500 uppercase py-3 px-8 rounded-xl transition border border-[#ffb703] hover:bg-transparent hover:text-[#ffb703]"
=======
          <a
            href="/research/overview"
            className="inline-flex items-center mt-8 bg-yellow-400 text-[#0F4A85] font-medium uppercase py-3 px-8 rounded-xl transition border border-yellow-400 hover:bg-transparent hover:text-yellow-400"
>>>>>>> 244cbf5b6cef6d620f006913e814d62555b80fd5
          >
            Know More <LiaLongArrowAltRightSolid size={24} />
          </Link>
        </div>

        <div className="lg:w-1/2  mt-10 lg:mt-0 flex justify-center">
          <img src={girlsimage} alt="Students" className="object-contain absolute bottom-0" />
        </div>
      </div>
    </section>
  );
}
