import girlsimage from "../../assets/images/home/girls-image.png";

export default function InnovationCulture() {
  return (
    <section className="flex justify-center py-16 px-4">
      <div className="card-color rounded-3xl overflow-hidden p-10 lg:p-[5rem] flex flex-col lg:flex-row max-w-[1300px] w-full items-center relative text-white">
        <div className="lg:w-3/5 pb-10 lg:pb-0">
          <div className="pb-8">
            <h2 className="uppercase text-[2.5rem] fw500 leading-tight">Excellent Research and Innovation Culture</h2>
          </div>

          <div className="humming">
            <ul className="space-y-4 text-lg">
              <li>
                <a href="#">22 Research & Consultancy Projects Completed</a>
              </li>
              <li>
                <a href="#">3 Cr.+ Funding Received For R & C Projects</a>
              </li>
              <li>
                <a href="#">90+ Patents Granted / Published</a>
              </li>
              <li>
                <a href="#">825+ Research Papers Published</a>
              </li>
              <li>
                <a href="#">270+ Books & Book Chapters Published</a>
              </li>
              <li>
                <a href="#">125+ Ph.D. Awarded</a>
              </li>
            </ul>
          </div>

          <a
            href="#"
            className="inline-flex items-center mt-8 bg-yellow-400 text-[#0F4A85] font-medium uppercase py-3 px-8 rounded-xl transition border border-yellow-400 hover:bg-transparent hover:text-yellow-400"
          >
            Know More
            <svg className="ml-3 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 225">
              <polygon fill="#0F4A85" points="420,94.5 420,94.5 328.3,2.7 310.3,20.7 389.4,99.8 1.9,99.8 1.9,125.2 389.4,125.2 310.3,204.2 328.3,222.2 438,112.5" />
            </svg>
          </a>
        </div>

        <div className="lg:w-1/2  mt-10 lg:mt-0 flex justify-center">
          <img src={girlsimage} alt="Students" className="object-contain absolute bottom-0" />
        </div>
      </div>
    </section>
  );
}
