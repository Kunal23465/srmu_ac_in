import Counter from "../../../utils/custom/Counter";
import CustomTabs from "../../../utils/custom/CustomTabs";
import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../scholarship/ScholarshipOverviewSection";
import CustomInstituteProfileCard from "../../../utils/custom/CustomInstituteProfileCard";
import CustomDepartmentVissionMission from "../../../utils/custom/CustomDepartmentVissionMission";
import CustomDepartmentFeeDetailsTable from "../../../utils/custom/CustomDepartmentFeeDetailsTable";
import {
    biotechnologyDepartmentEventsData,
    biotechnologyHighlightsData,
    biotechnologyIndustryIntegratedFeeTable,
    biotechnologyIndustryPostgraduateFeeTable,
    biotechnologyIndustryUndergraduateFeeTable,
    counterDataFoFacultyOfBiotechnology,
    counterDataForPlacedStudentsOFBiotechnology,
    facultyDetailsOfBiotechnologyDepartment,
    facultyOfBiostechnologyProfileData,
    facultyOfBiostechnologyVMData,
    facultyofBiotechnologyeOverviewData,
} from "../../../data/academics/faculty-of-biotechnology/faculty-of-biotechnology-data";
import CustomDepartmentSlider from "../../../utils/custom/CustomDepartmentSlider";
import CustomFacultyListCard from "../../../utils/custom/CustomFacultyListCard";
import facultybg from "../../../assets/images/placements/placement-overview/placementrecords.jpeg";
import CustomPlacedStudentTable, {
    Headers,
    Student,
} from "../../../utils/custom/CustomPlacedStudentTable";
import CustomDepartmentHighlightCard from "../../../utils/custom/CustomDepartmentHighlightCard";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { instituteFooterData } from "../../../data/academics/institute/department-of-electrical-and-electronics-engineering-data";
import CustomDepartmentEventSlider from "../../../utils/custom/CustomDepartmentEventSlider";
import CustomEventCard from "../../../utils/custom/CustomEventListCard";
import PlacedStudents from "../institutes/institute-department/electricalAndElectronics/PlacedStudents";

const FacultyOfBiotechnology = () => {
    const items = [
        {
            key: "1",
            label: "Integrated",
            content: (
                <CustomDepartmentFeeDetailsTable
                    data={biotechnologyIndustryIntegratedFeeTable}
                />
            ),
        },
        {
            key: "2",
            label: "Postgraduate",
            content: (
                <CustomDepartmentFeeDetailsTable
                    data={biotechnologyIndustryPostgraduateFeeTable}
                />
            ),
        },
        {
            key: "3",
            label: "Undergraduate",
            content: (
                <CustomDepartmentFeeDetailsTable
                    data={biotechnologyIndustryUndergraduateFeeTable}
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
            name: "Prashansha Srivastava",
            program: "B.Tech. in Biotechnology",
            company: "Learning Route",
        },
        {
            name: "Prashansha Srivastava",
            program: "B.Tech. in Biotechnology",
            company: "Cognizant",
        },
        {
            name: "Aditi Srivastava",
            program: "B.Tech. in Biotechnology",
            company: "Pulsus Healthtech",
        },
        {
            name: "Aditi Vikram",
            program: "B.Tech. in Biotechnology",
            company: "Pulsus Healthtech",
        },
        {
            name: "Gaurav maurya",
            program: "B.Tech. in Biotechnology",
            company: "Pulsus Healthtech",
        },
        {
            name: "Gayatri Rawat",
            program: "B.Tech. in Biotechnology",
            company: "Pulsus Healthtech",
        },
        {
            name: "Kundan patwa",
            program: "B.Tech. in Biotechnology",
            company: "Pulsus Healthtech",
        },
        {
            name: "Nandini Pandey",
            program: "B.Tech. in Biotechnology",
            company: "Pulsus Healthtech",
        },
        {
            name: "Saurabh Pandey",
            program: "B.Tech. in Biotechnology",
            company: "Pulsus Healthtech",
        },
        {
            name: "Vanshika Singh",
            program: "B.Tech. in Biotechnology",
            company: "Pulsus Healthtech",
        },
        {
            name: "Aman Kannoujiya",
            program: "B.Tech. in Biotechnology",
            company: "Pulsus Healthtech",
        },
        {
            name: "Krati Jain",
            program: "B.Tech. in Biotechnology",
            company: "Pulsus Healthtech",
        },
        {
            name: "Roshini Singh",
            program: "B.Tech. in Biotechnology",
            company: "Pulsus Healthtech",
        },
        {
            name: "Vikas Kumar Ojha",
            program: "B.Tech. in Biotechnology",
            company: "Pulsus Healthtech",
        },
        {
            name: "Jatin Arora",
            program: "B.Tech. in Biotechnology",
            company: "Pulsus Healthtech",
        },
        {
            name: "Sameer Mishra",
            program: "B.Tech. in Biotechnology",
            company: "Pulsus Healthtech",
        },
        {
            name: "Saumya Lahri",
            program: "B.Tech. in Biotechnology",
            company: "Pulsus Healthtech",
        },
        {
            name: "Shambhavi Singh",
            program: "B.Tech. in Biotechnology",
            company: "eTeam",
        },
        {
            name: "Aabha Arya",
            program: "B.Tech. in Biotechnology",
            company: "Pulsus Healthtech",
        },
        {
            name: "Anjali Singh",
            program: "B.Tech. in Biotechnology",
            company: "Pulsus Healthtech",
        },
        {
            name: "Divisha Mishra",
            program: "B.Tech. in Biotechnology",
            company: "Pulsus Healthtech",
        },
        {
            name: "Anshita Sharma",
            program: "B.Tech. in Biotechnology",
            company: "Pulsus Healthtech",
        },
        {
            name: "Akash Nigam",
            program: "B.Tech. in Biotechnology",
            company: "Pulsus Healthtech",
        },
        {
            name: "Mo Vaseem",
            program: "B.Tech. in Biotechnology",
            company: "Pulsus Healthtech",
        },
        {
            name: "Prashansha Srivastava",
            program: "B.Tech. in Biotechnology",
            company: "Pulsus Healthtech",
        },
        {
            name: "Mohd Shahzain Haneef",
            program: "B.Tech. in Biotechnology",
            company: "Pulsus Healthtech",
        },
        {
            name: "Devesh Kumar Singh",
            program: "B.Tech. in Biotechnology",
            company: "Pulsus Healthtech",
        },
        {
            name: "Abhishek Kumar Agrahari",
            program: "B.Tech. in Biotechnology",
            company: "Pulsus Healthtech",
        },
        {
            name: "Manika Srivastava",
            program: "B.Tech. in Biotechnology",
            company: "Integrated resources",
        },
        {
            name: "Yashi Srivastava",
            program: "B.Tech. in Biotechnology",
            company: "Integrated resources",
        },
        {
            name: "Eram Tariq",
            program: "B.Tech. in Biotechnology",
            company: "Integrated resources",
        },
        {
            name: "Jasmeen Kaur",
            program: "B.Tech. in Biotechnology",
            company: "Integrated resources",
        },
        {
            name: "Aditi Shukla",
            program: "B.Tech. in Biotechnology",
            company: "Integrated resources",
        },
        {
            name: "Ayushi Srivastava",
            program: "B.Tech. in Biotechnology",
            company: "Integrated resources",
        },
        {
            name: "Priya Bajpai",
            program: "B.Tech. in Biotechnology",
            company: "Integrated resources",
        },
        {
            name: "Shivani Singh Sengar",
            program: "B.Tech. in Biotechnology",
            company: "Integrated resources",
        },
        {
            name: "Vrinda Kapoor",
            program: "B.Tech. in Biotechnology",
            company: "Integrated resources",
        },
        {
            name: "Shruti Sonekar",
            program: "B.Tech. in Biotechnology",
            company: "Integrated resources",
        },
        {
            name: "Rashi Asthana",
            program: "B.Tech. in Biotechnology",
            company: "Integrated resources",
        },
        {
            name: "Deeksha Gupta",
            program: "B.Tech. in Biotechnology",
            company: "Integrated resources",
        },
        {
            name: "Anshika Srivastava",
            program: "B.Tech. in Biotechnology",
            company: "Integrated resources",
        },
        {
            name: "Meghna Tiwari",
            program: "B.Tech. in Biotechnology",
            company: "Corizo",
        },
        {
            name: "Ananya Khare",
            program: "B.Tech. in Biotechnology",
            company: "Integrated resources",
        },
        {
            name: "Harshita Shukla",
            program: "B.Tech. in Biotechnology",
            company: "Corizo",
        },
        {
            name: "Shreya Srivastava",
            program: "B.Tech. in Biotechnology",
            company: "Certybox",
        },
        {
            name: "Shubham Mishra",
            program: "B.Tech. in Biotechnology",
            company: "Certybox",
        },
        {
            name: "Shivangi Sinqh",
            program: "B.Tech. in Biotechnology",
            company: "Integrated resources",
        },
        {
            name: "Anushka Singh",
            program: "B.Tech. in Biotechnology",
            company: "Integrated resources",
        },
        {
            name: "Kumari Rishita",
            program: "B.Tech. in Biotechnology",
            company: "Integrated resources",
        },
        {
            name: "Sakshi Tandon",
            program: "B.Tech. in Biotechnology",
            company: "Integrated resources",
        },
        {
            name: "lshita Mishra",
            program: "B.Tech. in Biotechnology",
            company: "Integrated resources",
        },
        {
            name: "Akash Bajpai",
            program: "B.Tech. in Biotechnology",
            company: "Collabera",
        },
        {
            name: "Devpriya",
            program: "B.Tech. in Biotechnology",
            company: "Collabera",
        },
        {
            name: "Saba parveen",
            program: "B.Tech. in Biotechnology",
            company: "Collabera",
        },
        {
            name: "Shriyam Yadav",
            program: "B.Tech. in Biotechnology",
            company: "Collabera",
        },
        {
            name: "Shashi Yadav",
            program: "B.Tech. in Biotechnology",
            company: "Pulsus Healthtech",
        },
        {
            name: "Sadaf Beg",
            program: "B.Tech. in Biotechnology",
            company: "eTeam",
        },
        {
            name: "Saumya Lahri",
            program: "B.Tech. in Biotechnology",
            company: "Integrated resources",
        },
        {
            name: "Nandini Pandey",
            program: "B.Tech. in Biotechnology",
            company: "Integrated resources",
        },
        {
            name: "Shagun Kohli",
            program: "B.Tech. in Biotechnology",
            company: "Cognizant",
        },
        {
            name: "Pooja Singh",
            program: "B.Tech. in Biotechnology",
            company: "WIPRO",
        },
        {
            name: "Aditi Vikram",
            program: "B.Tech. in Biotechnology",
            company: "Planet Spark",
        },
        {
            name: "Vidiksha Deep",
            program: "B.Tech. in Biotechnology",
            company: "Integrated resources",
        },
        {
            name: "Anjali Shukla",
            program: "B.Tech. in Biotechnology",
            company: "Integrated resources",
        },
        {
            name: "Yashi Saxena",
            program: "B.Tech. in Biotechnology",
            company: "Integrated resources",
        },
        {
            name: "Shreya Bajpai",
            program: "B.Tech. in Biotechnology",
            company: "Codeyoung",
        },
        {
            name: "Sameer Mishra",
            program: "B.Tech. in Biotechnology",
            company: "Codeyoung",
        },
        {
            name: "Divisha Mishra",
            program: "B.Tech. in Biotechnology",
            company: "Codeyoung",
        },
        {
            name: "Vishal Kumar",
            program: "B.Tech. in Biotechnology",
            company: "Certybox",
        },
        {
            name: "Sakshi Singh",
            program: "B.Tech. in Biotechnology",
            company: "Integrated resources",
        },
        {
            name: "Jhanvi Sahai",
            program: "B.Tech. in Biotechnology",
            company: "Cloud Analogy",
        },
        {
            name: "Varsha Priya",
            program: "B.Tech. in Biotechnology",
            company: "Cloud Analogy",
        },
        {
            name: "Ajit Singh",
            program: "B.Tech. in Biotechnology",
            company: "Pulsus Healthtech",
        },
        {
            name: "Pranjal Dubey",
            program: "B.Tech. in Biotechnology",
            company: "Cloud Analogy",
        },
        {
            name: "Vimarsh Srivastava",
            program: "B.Tech. in Biotechnology",
            company: "Anlage Infotech (India) Private Ltd.",
        },
        {
            name: "Meghna Tiwari",
            program: "B.Tech. in Biotechnology",
            company: "Hike Education",
        },
        {
            name: "Anchal Singh Somvanshi",
            program: "B.Tech. in Biotechnology",
            company: "Cloud Analogy",
        },
        {
            name: "Anshi Raguvanshi",
            program: "B.Tech. in Biotechnology",
            company: "Integrated resources",
        },
        {
            name: "Anjeeta Singh",
            program: "B.Tech. in Biotechnology",
            company: "Integrated resources",
        },
        {
            name: "Shubhra Rao",
            program: "B.Tech. in Biotechnology",
            company: "Pulsus Healthtech",
        },
        {
            name: "Tanay Shukla",
            program: "B.Tech. in Biotechnology",
            company: "Pulsus Healthtech",
        },
        {
            name: "Neha Gupta",
            program: "B.Tech. in Biotechnology",
            company: "Pulsus Healthtech",
        },
        {
            name: "Soumya Singh",
            program: "B.Tech. in Biotechnology",
            company: "Pulsus Healthtech",
        },
        {
            name: "Abhishek Kumar Agrahari",
            program: "B.Tech. in Biotechnology",
            company: "Consus Global",
        },
        {
            name: "Anubhav Singh",
            program: "B.Tech. in Biotechnology",
            company: "Pulsus Healthtech",
        },
        {
            name: "Jahnuvi Chauhan",
            program: "B.Tech. in Biotechnology",
            company: "Pulsus Healthtech",
        },
        {
            name: "Shubhi Agarwal",
            program: "B.Tech. in Biotechnology",
            company: "Integrated resources",
        },
        {
            name: "Arpita Singh",
            program: "B.Tech. in Biotechnology",
            company: "Integrated resources",
        },
        {
            name: "Vikas Kumar Ojha",
            program: "B.Tech. in Biotechnology",
            company: "Integrated resources",
        },
        {
            name: "Devesh Kumar Singh",
            program: "B.Tech. in Biotechnology",
            company: "Integrated resources",
        },
        {
            name: "Amit Raj",
            program: "B.Tech. in Biotechnology",
            company: "Integrated resources",
        },
        {
            name: "Niharika Chand",
            program: "B.Tech. in Biotechnology",
            company: "Oncology Forum",
        },
        {
            name: "Priyadarshini Jaiswal",
            program: "B.Tech. in Biotechnology",
            company: "Techsolvo",
        },
        {
            name: "Jatin Arora",
            program: "B.Tech. in Biotechnology",
            company: "Integrated resources",
        },
        {
            name: "Vanya Mishra",
            program: "B.Tech. in Biotechnology",
            company: "Integrated resources",
        },
        {
            name: "Anushka Chatuevedi",
            program: "B.Tech. in Biotechnology",
            company: "Sun MeditechConsultancy",
        },
        {
            name: "Priya Yadav",
            program: "B.Tech. in Biotechnology",
            company: "Varite India",
        },
        {
            name: "Ishika Srivasatava",
            program: "B.Tech. in Biotechnology",
            company: "Head feid",
        },
        {
            name: "Aditya Singh",
            program: "B.Tech. in Biotechnology",
            company: "Opusing Information",
        },
        {
            name: "Vaishnavi Srivastava",
            program: "B.Tech. in Biotechnology",
            company: "PC Hospital",
        },
    ];

    return (
        <div>
            <div className={`${Classes["container"]}`}>
                <CustomOverviewSection data={facultyofBiotechnologyeOverviewData} />

                <Counter
                    counterData={counterDataFoFacultyOfBiotechnology}
                    classes="counter"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12  mb-10">
                    {facultyOfBiostechnologyVMData.map((item) => (
                        <CustomDepartmentVissionMission key={item.id} data={item} />
                    ))}
                </div>
            </div>

            <CustomInstituteProfileCard data={facultyOfBiostechnologyProfileData} />

            <div className={`${Classes["container"]}`}>
                <div className="my-20">
                    <div className="flex w-full justify-center flex-col items-center">
                        <h2 className="leading-[1.2] font-medium text-[3.125rem] mb-3">
                            Programs and Fees
                        </h2>
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
                data={facultyDetailsOfBiotechnologyDepartment}
                renderCard={({ item }) => <CustomFacultyListCard item={item} />}
                bgImage={facultybg}
                // arrowColor="#ffffff"
                // arrowBorderColor="#0f4a85"
                headingColor="#ffffff"
                descriptionColor="#ffffff"
                breakpoints={{ desktop: 4, tablet: 2, mobile: 1 }}
            />

            {/* <section className="bg-[#edf0f9] py-14">
                <div className={`${Classes["container"]} bg-[#edf0f9]`}>
                    <h2 className="text-3xl font-semibold mb-3">Placed Students</h2>
                    <p className="text-sm ">
                        With 2000+ Job Offers given by 250+ Top corporates, an average
                        package of 4.5 LPA and 100%* placement record in different
                        professional programs, SRMU provides the best return on investment.
                        More than 30% students have multiple job offers.
                    </p>
                    <Counter
                        counterData={counterDataForPlacedStudentsOFBiotechnology}
                        classes="counter"
                    /> 
               <CustomPlacedStudentTable
                        students={placedStudents}
                        headers={tableHeaders}
                    />
                 
                    
                </div>
            </section> */}

            <section className="bg-[#edf0f9] py-14">
                <div className={`${Classes["container"]} bg-[#edf0f9]`}>
                    <PlacedStudents placedStudents={placedStudents} counterData={counterDataForPlacedStudentsOFBiotechnology} />
                </div>
            </section>

            <CustomDepartmentSlider
                heading="Key Highlights of Our Department"
                description=""
                data={biotechnologyHighlightsData}
                renderCard={({ item }) => <CustomDepartmentHighlightCard item={item} />}
                bgColor="#f8b922"
                // arrowColor="#000"
                breakpoints={{ desktop: 3, tablet: 2, mobile: 1 }}
            />

            <CustomDepartmentEventSlider
                heading="Events of Department"
                description="SRMU is committed to leveraging its facilities and the system to world-class standards, with a goal to provide the best academic professional resources, to prepare its students for global opportunities. This makes SRMU a repository of academic and extra-curricular excellence."
                data={biotechnologyDepartmentEventsData}
                renderCard={({ item }) => <CustomEventCard item={item} />}
                bgColor="#ffffff"
                arrowColor="#96a9c4"
                arrowBorderColor="#0f4a85"
            />

            <CustomTopFooter data={instituteFooterData} />
        </div>
    );
};

export default FacultyOfBiotechnology;
