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
];

  return (
    <div >
      <h1 className="text-3xl font-semibold mb-3">Placed Students</h1>
      <p className="text-sm ">
        With 2000+ Job Offers given by 250+ Top corporates, an average package
        of 4.5 LPA and 100%* placement record in different professional
        programs, SRMU provides the best return on investment. More than 30%
        students have multiple job offers.
      </p>
      <Counter
        counterData={
          counterDataForPlacedStudentsOFDepartmentOfElectricalAndElectronicsEngineering
        }
        classes="counter"
      />
      <CustomPlacedStudentTable
        students={placedStudents}
        headers={tableHeaders}
      />
    </div>
  );
};

export default PlacedStudents;
