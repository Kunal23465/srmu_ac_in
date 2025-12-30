import Placement_Director from "../../../assets/images/placements/placement-cell/director-photo-21062505382147.jpg";
const DirectorMessage = () => {
  return (
    <div className="flex items-start flex-col lg:flex-row  gap-x-10 my-20">
      <div className="w-full relative">
        <img className="xl:rounded-md sm:rounded-t-md  w-full lg:max-w-[500px]" alt="Mr. Rakesh Jaiswal" src={Placement_Director} />
        <div className="lg:absolute lg:bottom-5  lg:right-0 lg:rounded-xl   p-8 text-white bg-sky-900 rounded-b-xl ">
          <p className="lg:text-[20px] md:text-[18.75px] sm:text-[17.5px] text-[17.5px] font-medium">Mr. Rakesh Jaiswal</p>
          <p className="lg:text-[13px] md:text-[12.195px] sm:text-[11.382px] text-[11.382px] pb-4">Director Placement</p>
          <p className="lg:text-[15px] md:text-[14px] sm:text-[13.132px] text-[13.132px]">
            +91- 9312113944
            <br />
            director.placement@srmu.ac.in
          </p>
        </div>
      </div>
      <div className="w-full">
        <h2 className="text-[#023047] text-[28px] lg:text-[3.125rem] fw500 mb-5 mt-2 lg:mt-0 md:mb-10">Message From Director</h2>

        <p className="text-justify text-[#000000b3] text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px]">
          <strong>Dear Recruiters,</strong>
          <br />
          Greetings from the Training and Placement Department of Shri Ramswaroop Memorial University (SRMU), Lucknow. SRMU is one of North India's emerging universities with over
          5,000 students graduating annually from its group campuses. Backed by two IIT Gold Medalists—Shri Pankaj Agarwal (Chancellor) and Mrs. Pooja Agarwal (Pro-Chancellor)—the
          SRM Group has been shaping future leaders in higher education for the past two decades. Our students are regularly assessed for employability by platforms like Aspiring
          Minds, Cocubes, Wheebox, Monster College, and eLitmus. In recent batches, over 450 students have qualified prestigious exams such as GATE, GMAT, CAT, and TOEFL, securing
          top placements and PG admissions in India and abroad.
          <br />
          <br />
          Top recruiters such as TCS, Accenture, Capgemini, Cognizant, Wipro, Adani, HUL, Tata Steel, Daikin, Axis Bank, BYJU's, and many more regularly hire from SRMU. With a
          well-equipped campus that can host large-scale drives for over 750 students, and with its central location in Lucknow, SRMU proudly serves as a hub for major pool campus
          recruitments. We warmly invite you to experience a smooth and productive hiring process with us and look forward to a strong and collaborative association to fulfill your
          talent needs while empowering our students for the corporate world.
        </p>
      </div>
    </div>
  );
};

export default DirectorMessage;
