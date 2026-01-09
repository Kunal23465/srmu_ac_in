import { FaArrowRightLong } from 'react-icons/fa6'
import bus from "../../../assets/images/campus-life/facilities/1-1-18102301254317.png"
import { Link } from 'react-router-dom'

const Transportation = () => {
    return (
      <div className=" py-10">
        <div className="mb-8">
          <h2 className="text-[28px] lg:text-[3.125rem] text-[#023047]  fw600">Transportation</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-20 w-full">
          <div className="flex-1">
            <img src={bus} className="w-full h-auto object-cover rounded-lg" alt="Campus Bus" />
          </div>

          <div className="flex-1 flex flex-col gap-4 text-[15px] lg:text-[16px] md:text-[15px] sm:text-[15px]">
            <p>
              Shri Ramswaroop Memorial University (SRMU) boasts an exemplary transportation facility that plays a pivotal role in fostering accessibility and connectivity across
              its sprawling campus. The university's commitment to providing efficient transport services is evident through a well-maintained fleet of buses that cater to the
              commuting needs of students and faculty. These buses operate on multiple routes, linking various departments, hostels, and facilities, ensuring seamless mobility for
              the university community.
            </p>
            <p>
              SRMU's transportation facility is not merely about facilitating movement; it prioritizes safety and comfort. The buses are equipped with modern amenities, and the
              experienced drivers adhere to stringent safety measures, creating a secure environment for all passengers. The system operates on a well-organized schedule, enabling
              timely arrivals and departures. This well-coordinated transportation network contributes significantly to the overall campus experience, allowing students and staff
              to navigate the expansive university grounds efficiently.
            </p>
            <Link
              to="/campus-life/transportation"
              className="bg-[#233E6F] hover:bg-white hover:text-[#233E6F] hover:border hover:border-[#233E6F] cursor-pointer text-white px-6 py-3 transition-all duration-500 lg:text-[13px] md:text-[12.195px] sm:text-[11.382px] text-[11.382px] uppercase rounded-lg flex items-center gap-2 mt-4 w-max"
            >
              Read More <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </div>
    );
}

export default Transportation
