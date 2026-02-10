import { counterDataForPlacedStudentsOFDepartmentOfElectricalAndElectronicsEngineering } from "../../../../../data/academics/institute/department-of-electrical-and-electronics-engineering-data";
import Counter from "../../../../../utils/custom/Counter";
import CustomPlacedStudentTable, { Headers, Student } from "../../../../../utils/custom/CustomPlacedStudentTable";

const PlacedStudents = () => {
  const tableHeaders: Headers = {
    name: "NAME OF STUDENT",
    program: "PROGRAM",
    company: "COMPANY",
  };

  const placedStudents: Student[] = [
    {
      name: "Lavisha Rupani",
      program: "B.Tech. in Electrical Engineering",
      company: "Cognizant",
    },
    {
      name: "Gaurav Tiwari",
      program: "B.Tech. in Electrical Engineering",
      company: "Cognizant",
    },
    {
      name: "Sudhanshu Ranjan",
      program: "B.Tech. in Electrical Engineering",
      company: "Hettich",
    },
    {
      name: "Abhinav Singh",
      program: "B.Tech. in Electrical Engineering",
      company: "PayTM",
    },
    {
      name: "Gauri Pandey",
      program: "B.Tech. in Electrical Engineering",
      company: "Collabera",
    },
    {
      name: "Sakshi Mishra",
      program: "B.Tech. in Electrical Engineering",
      company: "Edge Technosoft",
    },
    {
      name: "Ishika Jindal",
      program: "B.Tech. in Electrical Engineering",
      company: "Planet Spark",
    },
    {
      name: "Aditya Gupta",
      program: "B.Tech. in Electrical Engineering",
      company: "Yes Papers",
    },
    {
      name: "Shivam Kumar Rai",
      program: "B.Tech. in Electrical Engineering",
      company: "Collabera",
    },
    {
      name: "Avanish Chaudhary",
      program: "B.Tech. in Electrical Engineering",
      company: "Collabera",
    },
    {
      name: "Murlee Dhar Joshee",
      program: "B.Tech. in Electrical Engineering",
      company: "Teachnook",
    },
    {
      name: "Shahsank Kumar",
      program: "B.Tech. in Electrical Engineering",
      company: "Through Nextgen Ventures",
    },
    {
      name: "Arunima Srivastava",
      program: "B.Tech. in Electrical Engineering",
      company: "Teachnook",
    },
    {
      name: "Gaurav Tiwari",
      program: "B.Tech. in Electrical Engineering",
      company: "Windmoller",
    },
    {
      name: "Sumit Singh",
      program: "B.Tech. in Electrical Engineering",
      company: "VDart",
    },
    {
      name: "Ashish Kumar Singh",
      program: "B.Tech. in Electrical Engineering",
      company: "Torrent Power",
    },
    {
      name: "Kshitij Kumar",
      program: "B.Tech. in Electrical Engineering",
      company: "Dhoot Transmission",
    },
    {
      name: "Gaurav Tiwari",
      program: "B.Tech. in Electrical Engineering",
      company: "Torrent Power",
    },
    {
      name: "Ashutosh Prajapati",
      program: "B.Tech. in Electrical Engineering",
      company: "Wonder Eletricals",
    },
    {
      name: "Avanish Chaudhary",
      program: "B.Tech. in Electrical Engineering",
      company: "Wonder Eletricals",
    },
    {
      name: "Kshitij Kumar",
      program: "B.Tech. in Electrical Engineering",
      company: "Wonder Eletricals",
    },
    {
      name: "Mukesh Gupta",
      program: "B.Tech. in Electrical Engineering",
      company: "Wonder Eletricals",
    },
    {
      name: "Siya Rai",
      program: "B.Tech. in Electronics & Communication Engineering",
      company: "Talent Serve",
    },
    {
      name: "Ishika Jindal",
      program: "B.Tech. in Electronics & Communication Engineering",
      company: "Planet Spark",
    },
    {
      name: "MurleeDhar Joshi",
      program: "B.Tech. in Electrical Engineering",
      company: "JayBharatMaruti",
    },
    {
      name: "Sachin Pal",
      program: "B.Tech. in Electrical Engineering",
      company: "JayBharatMaruti",
    },
    {
      name: "Satyam Vishwakarma",
      program: "B.Tech. in Electrical Engineering",
      company: "PTC Industries",
    },
    {
      name: "Sujeet Maurya",
      program: "B.Tech. in Electrical Engineering",
      company: "PTC Industries",
    },
    {
      name: "Atul Verma",
      program: "B.Tech. in Electrical Engineering",
      company: "Torrent Power",
    },
    {
      name: "Kanika Gupta",
      program: "B.Tech. in Electronics & Communication Engineering",
      company: "Accenture",
    },
    {
      name: "Divyansh Singh",
      program: "B.Tech. in Electronics & Communication Engineering",
      company: "Ericsson Globals",
    },
    {
      name: "Kinshuk Sharma",
      program: "B.Tech. in Electronics & Communication Engineering",
      company: "HCL",
    },
    {
      name: "Ankit Mishra",
      program: "B.Tech. in Electronics & Communication Engineering",
      company: "HCL",
    },
    {
      name: "Harsh Bhanot",
      program: "B.Tech. in Electronics & Communication Engineering",
      company: "RDSO",
    },
    {
      name: "Pawan Pandey",
      program: "B.Tech. in Electronics & Communication Engineering",
      company: "Bosch",
    },
    {
      name: "Devansh Awasthi",
      program: "B.Tech. in Electronics & Communication Engineering",
      company: "Tech Mahindra",
    },
    {
      name: "Akanksha Saxena",
      program: "B.Tech. in Electronics & Communication Engineering",
      company: "WIPRO",
    },
    {
      name: "Navish Kumar Singh",
      program: "B.Tech. in Electronics & Communication Engineering",
      company: "Adani",
    },
    {
      name: "Komal Dixit",
      program: "B.Tech. in Electronics & Communication Engineering",
      company: "SBI",
    },
    {
      name: "Komal Yadav",
      program: "B.Tech. in Electronics & Communication Engineering",
      company: "HCL",
    },
    {
      name: "Shivendra Mishra",
      program: "B.Tech. in Electronics & Communication Engineering",
      company: "Qualcomm",
    },
    {
      name: "Kushgra Gupta",
      program: "B.Tech. in Electronics & Communication Engineering",
      company: "Cedcoss Technologies Pvt Ltd",
    },
    {
      name: "Shivam Kumar Rai",
      program: "B.Tech. in Electronics & Communication Engineering",
      company: "Collabera",
    },
    {
      name: "Swapnil Pandey",
      program: "B.Tech. in Electronics & Communication Engineering",
      company: "Infosys",
    },
    {
      name: "Anurag Saxena",
      program: "M.Tech. in Digital Communication",
      company: "ISRO",
    },
    {
      name: "Swati Dwivedi",
      program: "M.Tech. in Digital Communication",
      company: "Aryavart Bank",
    },
    {
      name: "Varsha Pandey",
      program: "M.Tech. in Digital Communication",
      company: "ICMR-NICPR",
    },
    {
      name: "Shubham Chaudhary",
      program: "M.Tech. in Digital Communication",
      company: "TCS",
    },
    {
      name: "Komal Dixit",
      program: "M.Tech. in Digital Communication",
      company: "SBI",
    }

  ];

  return (
    <div>
      <h1 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500 mb-3">Placed Students</h1>
      <p className="text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] ">
        With 2000+ Job Offers given by 250+ Top corporates, an average package of 4.5 LPA and 100%* placement record in different professional programs, SRMU provides the best
        return on investment. More than 30% students have multiple job offers.
      </p>
      <Counter
        // @ts-ignore
        counterData={counterDataForPlacedStudentsOFDepartmentOfElectricalAndElectronicsEngineering}
        classes="counter"
      />
      <CustomPlacedStudentTable students={placedStudents} headers={tableHeaders} />
    </div>
  );
};

export default PlacedStudents;
