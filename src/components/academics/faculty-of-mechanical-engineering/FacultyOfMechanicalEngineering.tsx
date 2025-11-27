import Counter from "../../../utils/custom/Counter";
import CustomTabs from "../../../utils/custom/CustomTabs";
import Classes from "../../../utils/styles/Global.module.css";
import CustomFacultyListCard from "../../../utils/custom/CustomFacultyListCard";
import CustomOverviewSection from "../../scholarship/ScholarshipOverviewSection";
import CustomDepartmentSlider from "../../../utils/custom/CustomDepartmentSlider";
import CustomInstituteProfileCard from "../../../utils/custom/CustomInstituteProfileCard";
import CustomDepartmentHighlightCard from "../../../utils/custom/CustomDepartmentHighlightCard";
import CustomDepartmentVissionMission from "../../../utils/custom/CustomDepartmentVissionMission";
import facultybg from "../../../assets/images/placements/placement-overview/placementrecords.jpeg";
import CustomDepartmentFeeDetailsTable from "../../../utils/custom/CustomDepartmentFeeDetailsTable";
import CustomPlacedStudentTable, {
  Headers,
  Student,
} from "../../../utils/custom/CustomPlacedStudentTable";
import {
  counterDataFoFacultyOfMechanicalEngineering,
  counterDataForPlacedStudentsOFMechanicalEngineering,
  facultyDetailsOfMeDepartment,
  facultyOfMechanicalEngineeringVMData,
  facultyofMEOverviewData,
  facultyOfMeProfileData,
  industryHonorsFeeDataOfME,
  integratedFeeDataOfME,
  mechanicalDepartmentEventsData,
  mechanicalDepartmentHighlightsData,
  postGraduateFeeDataOfME,
  underGraduateFeeDataOfME,
} from "../../../data/academics/faculty-of-mechanical-engineering/faculty-of-mechanical-engineering";
import CustomDepartmentEventSlider from "../../../utils/custom/CustomDepartmentEventSlider";
import CustomEventCard from "../../../utils/custom/CustomEventListCard";

const FacultyOfMechanicalEngineering = () => {
  const items = [
    {
      key: "1",
      label: "Industry Honors",
      content: (
        <CustomDepartmentFeeDetailsTable data={industryHonorsFeeDataOfME} />
      ),
    },
    {
      key: "2",
      label: "Integrated",
      content: <CustomDepartmentFeeDetailsTable data={integratedFeeDataOfME} />,
    },
    {
      key: "3",
      label: "Postgraduate",
      content: (
        <CustomDepartmentFeeDetailsTable data={postGraduateFeeDataOfME} />
      ),
    },
    {
      key: "4",
      label: "Undergraduate",
      content: (
        <CustomDepartmentFeeDetailsTable data={underGraduateFeeDataOfME} />
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
      name: "Gaurav Kumar Chaturvedi",
      program: "B.Tech. in Mechanical Engineering",
      company: "Hettich",
    },
    {
      name: "Md Amaan Abidin",
      program: "B.Tech. in Mechanical Engineering",
      company: "Hettich",
    },
    {
      name: "Indronil Ghosh",
      program: "B.Tech. in Mechanical Engineering",
      company: "Collabera",
    },
    {
      name: "Harshit Shukla",
      program: "B.Tech. in Mechanical Engineering",
      company: "KP Reliable",
    },
    {
      name: "Yash Prajapati",
      program: "B.Tech. in Mechanical Engineering",
      company: "KP Reliable",
    },
    {
      name: "Aman Kumar Singh",
      program: "B.Tech. in Mechanical Engineering",
      company: "KP Reliable",
    },
    {
      name: "Savarni Pandey",
      program: "B.Tech. in Mechanical Engineering",
      company: "KP Reliable",
    },
    {
      name: "Ayush Singh",
      program: "B.Tech. in Mechanical Engineering",
      company: "KP Reliable",
    },
    {
      name: "Nitin Verma",
      program: "B.Tech. in Mechanical Engineering",
      company: "Focus Energy",
    },
    {
      name: "Ankit Kumar Singh",
      program: "B.Tech. in Mechanical Engineering",
      company: "Focus Energy",
    },
    {
      name: "Saumya Dixit",
      program: "B.Tech. in Mechanical Engineering",
      company: "Nityo",
    },
    {
      name: "Sunil Chetri",
      program: "B.Tech. in Mechanical Engineering",
      company: "Maswer through Cocubes",
    },
    {
      name: "Anuj Tripathi",
      program: "B.Tech. in Mechanical Engineering",
      company: "Maswer through Cocubes",
    },
    {
      name: "Saurabh Srivastava",
      program: "B.Tech. in Mechanical Engineering",
      company: "Ramky Engineers -",
    },
    {
      name: "Nikhil Pandey",
      program: "B.Tech. in Mechanical Engineering",
      company: "Ramky Engineers -",
    },
    {
      name: "Shikhar Sinqh",
      program: "B.Tech. in Mechanical Engineering",
      company: "KP Reliable",
    },
    {
      name: "Md Amaan Abidin",
      program: "B.Tech. in Mechanical Engineering",
      company: "My Captain",
    },
    {
      name: "Animesh Pandev",
      program: "B.Tech. in Mechanical Engineering",
      company: "Ramky Engineers -",
    },
    {
      name: "Amit Sinqh",
      program: "B.Tech. in Mechanical Engineering",
      company: "Collabera",
    },
    {
      name: "Arpit sinqh",
      program: "B.Tech. in Mechanical Engineering",
      company: "Collabera",
    },
    {
      name: "Devesh Sinqh",
      program: "B.Tech. in Mechanical Engineering",
      company: "Collabera",
    },
    {
      name: "Shekhar Sharma",
      program: "B.Tech. in Mechanical Engineering",
      company: "KP Reliable",
    },
    {
      name: "Shrijan Pandey",
      program: "B.Tech. in Mechanical Engineering",
      company: "KP Reliable",
    },
    {
      name: "Shubham Sinah",
      program: "B.Tech. in Mechanical Engineering",
      company: "KP Reliable",
    },
    {
      name: "Divyansh Srivastava",
      program: "B.Tech. in Mechanical Engineering",
      company: "Newgen Software",
    },
    {
      name: "Saurabh Tripathi",
      program: "B.Tech. in Mechanical Engineering",
      company: "Cognizant",
    },
    {
      name: "Gaurang Gupta",
      program: "B.Tech. in Mechanical Engineering",
      company: "Eckovation",
    },
    {
      name: "Ritu Jaiswar",
      program: "B.Tech. in Mechanical Engineering",
      company: "Chem Seals Engg Pvt Ltd",
    },
    {
      name: "Abdul Samad Khan",
      program: "B.Tech. in Mechanical Engineering",
      company: "Toppr",
    },
    {
      name: "Anoop Kumar Dubey",
      program: "B.Tech. in Mechanical Engineering",
      company: "Hettich",
    },
    {
      name: "Alok Singh",
      program: "B.Tech. in Mechanical Engineering",
      company: "Cloud Analogy",
    },
    {
      name: "Tanmay Tewari",
      program: "B.Tech. in Mechanical Engineering",
      company: "Byjus",
    },
    {
      name: "Nilesh Singh",
      program: "B.Tech. in Mechanical Engineering",
      company: "KP Reliable",
    },
    {
      name: "Satya Prakash",
      program: "B.Tech. in Mechanical Engineering",
      company: "Enoble IP",
    },
    {
      name: "Abhishek Kumar",
      program: "B.Tech. in Mechanical Engineering",
      company: "Dhoot Transmission",
    },
    {
      name: "Shubham Vats",
      program: "B.Tech. in Mechanical Engineering",
      company: "Dhoot Transmission",
    },
    {
      name: "Aditya Singh",
      program: "B.Tech. in Mechanical Engineering",
      company: "Dhoot Transmission",
    },
    {
      name: "Arbaz Ali Shah",
      program: "B.Tech. in Mechanical Engineering",
      company: "KP Reliable",
    },
    {
      name: "Kaushik Kr Upadhyay",
      program: "B.Tech. in Mechanical Engineering",
      company: "Dhoot Transmission",
    },
    {
      name: "Matendra Singh",
      program: "B.Tech. in Mechanical Engineering",
      company: "Dhoot Transmission",
    },
    {
      name: "Kaushik Kumar Upadhyay",
      program: "B.Tech. in Mechanical Engineering",
      company: "KP Reliable",
    },
    {
      name: "Arbaz Ali Shah",
      program: "B.Tech. in Mechanical Engineering",
      company: "Dhoot Transmission",
    },
    {
      name: "Adarsh Awasthi",
      program: "B.Tech. in Mechanical Engineering",
      company: "Dhoot Transmission",
    },
    {
      name: "Amrendra Sharma",
      program: "B.Tech. in Mechanical Engineering",
      company: "Tadano Cranes",
    },
    {
      name: "Kaushik Kumar Upadhyay",
      program: "B.Tech. in Mechanical Engineering",
      company: "Byjus",
    },
    {
      name: "Adarsh Awasthi",
      program: "B.Tech. in Mechanical Engineering",
      company: "SPM Autocomp",
    },
    {
      name: "Shubham Verma",
      program: "B.Tech. in Mechanical Engineering",
      company: "SPM Autocomp",
    },
    {
      name: "Abhishek Kumar Singh",
      program: "B.Tech. in Mechanical Engineering",
      company: "SPM Autocomp",
    },
    {
      name: "Kaushik Kumar Upadhyay",
      program: "B.Tech. in Mechanical Engineering",
      company: "SPM Autocomp",
    },
    {
      name: "Rohitesh Mandal",
      program: "B.Tech. in Mechanical Engineering",
      company: "SPM Autocomp",
    },
    {
      name: "Aditya Singh",
      program: "B.Tech. in Mechanical Engineering",
      company: "SPM Autocomp",
    },
    {
      name: "Ashish Kumar",
      program: "B.Tech. in Mechanical Engineering",
      company: "GVK Emri",
    },
    {
      name: "Avijit Kumar",
      program: "B.Tech. in Mechanical Engineering",
      company: "GVK Emri",
    },
    {
      name: "Pranshu Vishwakarma",
      program: "B.Tech. in Mechanical Engineering",
      company: "GVK Emri",
    },
    {
      name: "Suyash Tripathi",
      program: "B.Tech. in Mechanical Engineering",
      company: "MWIDM",
    },
    {
      name: "Anchal Srivastava",
      program: "B.Tech. in Mechanical Engineering",
      company: "AWACP",
    },
    {
      name: "Aniket Mishra",
      program: "B.Tech. in Mechanical Engineering",
      company: "The Judge Group",
    },
    {
      name: "Abahy R Singh",
      program: "B.Tech. in Mechanical Engineering",
      company: "PTC Industries",
    },
    {
      name: "Abhishek Pal",
      program: "B.Tech. in Mechanical Engineering",
      company: "PTC Industries",
    },
    {
      name: "Prashant Kumar",
      program: "B.Tech. in Mechanical Engineering",
      company: "The Judge Group",
    },
    {
      name: "Harshit Shukla",
      program: "B.Tech. in Mechanical Engineering",
      company: "JBM Auto",
    },
    {
      name: "Yash Prajapati",
      program: "B.Tech. in Mechanical Engineering",
      company: "JBM Auto",
    },
    {
      name: "Rohitesh Mandal",
      program: "B.Tech. in Mechanical Engineering",
      company: "Dhoot Transmission",
    },
    {
      name: "Shubham Verma",
      program: "B.Tech. in Mechanical Engineering",
      company: "Dhoot Transmission",
    },
    {
      name: "Arbaz Ali Shah",
      program: "B.Tech. in Mechanical Engineering",
      company: "NLMK",
    },
    {
      name: "Arvil Rishi Hitalia",
      program: "B.Tech. in Mechanical Engineering",
      company: "PTC Industries",
    },
  ];

  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={facultyofMEOverviewData} />
        <Counter
          counterData={counterDataFoFacultyOfMechanicalEngineering}
          classes="counter"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12  mb-10">
          {facultyOfMechanicalEngineeringVMData.map((item) => (
            <CustomDepartmentVissionMission key={item.id} data={item} />
          ))}
        </div>
      </div>
      <CustomInstituteProfileCard data={facultyOfMeProfileData} />
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
        data={facultyDetailsOfMeDepartment}
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
            counterData={counterDataForPlacedStudentsOFMechanicalEngineering}
            classes="counter"
          />
          <CustomPlacedStudentTable
            students={placedStudents}
            headers={tableHeaders}
          />
        </div>
      </section>
      <CustomDepartmentSlider
        heading="Key Highlights of Our Department"
        description=""
        data={mechanicalDepartmentHighlightsData}
        renderCard={({ item }) => <CustomDepartmentHighlightCard item={item} />}
        bgColor="#f8b922"
        arrowColor="#000"
        breakpoints={{ desktop: 3, tablet: 2, mobile: 1 }}
      />

      <CustomDepartmentEventSlider
        heading="Events of Department"
        description="SRMU is committed to leveraging its facilities and the system to world-class standards, with a goal to provide the best academic professional resources, to prepare its students for global opportunities. This makes SRMU a repository of academic and extra-curricular excellence."
        data={mechanicalDepartmentEventsData}
        renderCard={({ item }) => <CustomEventCard item={item} />}
        bgColor="#ffffff"
        arrowColor="#96a9c4"
        arrowBorderColor="#0f4a85"
      />
    </div>
  );
};

export default FacultyOfMechanicalEngineering;
