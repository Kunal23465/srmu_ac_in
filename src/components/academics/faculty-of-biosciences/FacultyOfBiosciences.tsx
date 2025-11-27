import Counter from "../../../utils/custom/Counter";
import CustomDepartmentVissionMission from "../../../utils/custom/CustomDepartmentVissionMission";
import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../scholarship/ScholarshipOverviewSection";
import {
  counterDataFoFacultyOfBiosciencess,
  counterDataForPlacedStudentsOFBioscience,
  facultyDetailsOfBioScienceDepartment,
  facultyofBioscienceOverviewData,
  facultyOfBioscienceProfileData,
  facultyOfBiosciencesVMData,
  postGraduateFeeDataOfBioscience,
  underGraduateFeeDataOfBioscience,
} from "../../../data/academics/faculty-of-biosciences/faculty-of-biosciences-data";
import CustomInstituteProfileCard from "../../../utils/custom/CustomInstituteProfileCard";
import CustomTabs from "../../../utils/custom/CustomTabs";
import CustomDepartmentFeeDetailsTable from "../../../utils/custom/CustomDepartmentFeeDetailsTable";
import CustomDepartmentSlider from "../../../utils/custom/CustomDepartmentSlider";
import CustomFacultyListCard from "../../../utils/custom/CustomFacultyListCard";
import facultybg from "../../../assets/images/placements/placement-overview/placementrecords.jpeg";
import CustomPlacedStudentTable, {
  Headers,
  Student,
} from "../../../utils/custom/CustomPlacedStudentTable";
import { instituteFooterData } from "../../../data/academics/institute/department-of-electrical-and-electronics-engineering-data";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";

const FacultyOfBiosciences = () => {
  const items = [
    {
      key: "1",
      label: "Postgraduate",
      content: (
        <CustomDepartmentFeeDetailsTable
          data={postGraduateFeeDataOfBioscience}
        />
      ),
    },
    {
      key: "2",
      label: "Undergraduate",
      content: (
        <CustomDepartmentFeeDetailsTable
          data={underGraduateFeeDataOfBioscience}
        />
      ),
    },
  ];

  const tableHeaders: Headers = {
    name: "NAME OF STUDENT",
    program: "PROGRAM",
    company: "COMPANY",
  };

  const placedStudents: Student[] = [
    {
      name: "Mohd Arsh khan",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Pulsus Healthtech",
    },
    {
      name: "Jyoti Agarwal",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Pulsus Healthtech",
    },
    {
      name: "Arpita Tiwari",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Pulsus Healthtech",
    },
    {
      name: "Ajay Kumar Pandey",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Pulsus Healthtech",
    },
    {
      name: "Sneha Singh",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Pulsus Healthtech",
    },
    {
      name: "Ambika Singh",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Pulsus Healthtech",
    },
    {
      name: "Anshu Tiwari",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Pulsus Healthtech",
    },
    {
      name: "Shraddha Singh",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Pulsus Healthtech",
    },
    {
      name: "Dipti Singh",
      program: "M.Sc. in Biotechnology",
      company: "Pulsus Healthtech",
    },
    {
      name: "Mansi Shahi",
      program: "M.Sc. in Biotechnology",
      company: "Pulsus Healthtech",
    },
    {
      name: "Richa pathak",
      program: "M.Sc. in Biotechnology",
      company: "Pulsus Healthtech",
    },
    {
      name: "Chandra Prabha",
      program: "M.Sc. in Biotechnology",
      company: "Pulsus Healthtech",
    },
    {
      name: "Vidushi Sharma",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Learningshala",
    },
    {
      name: "Riya Singh",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Pulsus Healthtech",
    },
    {
      name: "Sakshi Singh",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Pulsus Healthtech",
    },
    {
      name: "Prabhat Shukla",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Pulsus Healthtech",
    },
    {
      name: "Yogeshwar Rao",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Pulsus Healthtech",
    },
    {
      name: "Ashwani Singh Parihar",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Pulsus Healthtech",
    },
    {
      name: "Himanshee Yadav",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Integrated resources",
    },
    {
      name: "Harshita Awasthi",
      program: "M.Sc. in Biotechnology",
      company: "Jaro Education",
    },
    {
      name: "Keshav Bajpai",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Integrated resources",
    },
    {
      name: "Om Mishra",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Integrated resources",
    },
    {
      name: "Vanshika Srivastava",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Integrated resources",
    },
    {
      name: "Prachi Srivastava",
      program: "M.Sc. in Biotechnology",
      company: "Pulsus Healthtech",
    },
    {
      name: "Nida Fatima",
      program: "M.Sc. in Biotechnology",
      company: "Pulsus Healthtech",
    },
    {
      name: "Ankit Pandey",
      program: "M.Sc. in Biotechnology",
      company: "Pulsus Healthtech",
    },
    {
      name: "Batool Hasnain",
      program: "M.Sc. in Biotechnology",
      company: "Pulsus Healthtech",
    },
    {
      name: "Muskan Singh",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Teachnook",
    },
    {
      name: "Nalini Agarwal",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Integrated resources",
    },
    {
      name: "Vaishnavi Nigam",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Seeds Fincap",
    },
    {
      name: "Aditya Saxena",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Integrated resources",
    },
    {
      name: "Kanchan Mishra",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Integrated resources",
    },
    {
      name: "Kalash Pandey",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Pulsus Healthtech",
    },
    {
      name: "Shreya Shah",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Pulsus Healthtech",
    },
    {
      name: "Kashika Keshari",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Genpact",
    },
    {
      name: "Mariyam Ariba Khan",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Genpact",
    },
    {
      name: "Aakarsh Arora",
      program: "M.Sc. in Biotechnology",
      company: "Accosts Remedies Pvt.Ltd.",
    },
    {
      name: "Saumya Dwivedi",
      program: "M.Sc. in Biotechnology",
      company: "Accosts Remedies Pvt.Ltd.",
    },
    {
      name: "Anshu Shukla",
      program: "M.Sc. in Biotechnology",
      company: "Accosts Remedies Pvt.Ltd.",
    },
    {
      name: "Updesh Chauhan",
      program: "M.Sc. in Biotechnology",
      company: "Cadila Pharma",
    },
    {
      name: "Arpita Tiwari",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "My Captain",
    },
    {
      name: "Shambhavi Chauhan",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "My Captain",
    },
    {
      name: "Mehak karara",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Integrated resources",
    },
    {
      name: "Vidushi Sharma",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Integrated resources",
    },
    {
      name: "Arpita Tiwari",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Integrated resources",
    },
    {
      name: "Tanya Jaiswal",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Byjus",
    },
    {
      name: "Ajay Kumar Pandey",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Byjus",
    },
    {
      name: "Chandra Prabha",
      program: "M.Sc. in Biotechnology",
      company: "Byjus",
    },
    {
      name: "Priyanshi Dixit",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Planet Spark",
    },
    {
      name: "Shreya Srivastava",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Integrated resources",
    },
    {
      name: "Ananya Sharma",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Coforge",
    },
    {
      name: "Divya Shakti",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Coforge",
    },
    {
      name: "Mona Maddheaiya",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Coforge",
    },
    {
      name: "Rimmi Bhatt",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Pulsus Healthtech",
    },
    {
      name: "Shreya Kumari",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Pulsus Healthtech",
    },
    {
      name: "Vikas Yadav",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Pulsus Healthtech",
    },
    {
      name: "Swarn Deep Bajpai",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Pulsus Healthtech",
    },
    {
      name: "Sneha Keshari",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Pulsus Healthtech",
    },
    {
      name: "Sakshi singh",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Pulsus Healthtech",
    },
    {
      name: "Ashutosh Mishra",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "MyDev IT Solutions",
    },
    {
      name: "Arpita Pandey",
      program: "B.Sc.(Hons.) in Biotechnology",
      company: "Parijaat Infraestate Pvt Ltd.",
    },
  ];

  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={facultyofBioscienceOverviewData} />

        <Counter
          counterData={counterDataFoFacultyOfBiosciencess}
          classes="counter"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12  mb-10">
          {facultyOfBiosciencesVMData.map((item) => (
            <CustomDepartmentVissionMission key={item.id} data={item} />
          ))}
        </div>
      </div>
      <CustomInstituteProfileCard data={facultyOfBioscienceProfileData} />

      <div className={`${Classes["container"]}`}>
        <div className="my-20">
          <div className="flex w-full justify-center flex-col items-center">
            <h1 className="leading-[1.2] font-medium text-[3.125rem] mb-3">
              Programs and Fees
            </h1>
            <p className="text-center text-[15px] mb-[45px]">
              At SRMU we have always believed that a student SHOULD BE TRAINED
              FOR INDUSTRY, BY THE INDUSTRY. Keeping the culture of rich
              academia-industry interface, university is now offering
              specialized programs in different academic domains.
            </p>
          </div>
          <CustomTabs
            items={items}
            variant="pill"
            activeTextColor="#000000"
            inactiveTextColor="#ffffff"
            activeBgColor="#ffb703"
            inactiveBgColor="#0f4a85"
            pillContainerBgColor="#0f4a85"
            alignTabs="center"
          />
        </div>
      </div>

      <CustomDepartmentSlider
        heading="Faculty List"
        description="The University takes pride in recruiting distinguished faculty from reputed central universities and best institutes like- IIT, IIM, MNNIT and IIT-BHU. They bring to the classroom, passion and enthusiasm for teaching, providing an intimate, interactive, personalized approach to learning."
        data={facultyDetailsOfBioScienceDepartment}
        renderCard={({ item }) => <CustomFacultyListCard item={item} />}
        bgImage={facultybg}
        arrowColor="#ffffff"
        arrowBorderColor="#0f4a85"
        headingColor="#ffffff"
        descriptionColor="#ffffff"
        breakpoints={{ desktop: 4, tablet: 2, mobile: 1 }}
      />

      <section className="bg-[#edf0f9] py-14">
        <div className={`${Classes["container"]} bg-[#edf0f9]`}>
          <h1 className="text-3xl font-semibold mb-3">Placed Students</h1>
          <p className="text-sm ">
            With 2000+ Job Offers given by 250+ Top corporates, an average
            package of 4.5 LPA and 100%* placement record in different
            professional programs, SRMU provides the best return on investment.
            More than 30% students have multiple job offers.
          </p>
          <Counter
            counterData={counterDataForPlacedStudentsOFBioscience}
            classes="counter"
          />
          <CustomPlacedStudentTable
            students={placedStudents}
            headers={tableHeaders}
          />
        </div>
      </section>

      <CustomTopFooter data={instituteFooterData} />
    </div>
  );
};

export default FacultyOfBiosciences;
