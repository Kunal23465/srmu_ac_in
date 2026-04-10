
// import { FacultyItem } from "../../../utils/custom/CustomFacultyListCard";
// import { VisionMissionProps } from "../../../utils/custom/CustomInstitueVissionMissionCard";
import { InstituteProfile } from "../../../types/profile-data-type";

// import { InstituteProfile } from "../../../types/profile-data-type";
// import { FeeTableData } from "../faculty-of-civil-engineering/faculty-of-civil-engineering-data";
import professor from "../../../assets/images/academics/institutes/dr.r.s.bajpai.webp"


// export const headers = {
//     name: "NAME OF STUDENT",
//     program: "PROGRAM",
//     company: "COMPANY",
// };

// export const studentData = [
//     { name: "Pankaj Gupta", program: "B.Tech. in Civil Engineering", company: "Shapoorji Pallonji" },
//     { name: "Pawan Kumar Singh", program: "B.Tech. in Civil Engineering", company: "Shapoorji Pallonji" },
//     { name: "Ujjawal Pratap Singh", program: "B.Tech. in Civil Engineering", company: "Shapoorji Pallonji" },
//     { name: "Sarvagya Pandey", program: "B.Tech. in Civil Engineering", company: "Central Water Commission of India" },
//     { name: "Sudheer Yadav", program: "B.Tech. in Civil Engineering", company: "Power Grid Corporation of India" },
//     { name: "Amit Raj", program: "B.Tech. in Mechanical Engineering", company: "Tata Motors" },
//     { name: "Neeraj Chauhan", program: "B.Tech. in Computer Science", company: "Infosys" },
//     { name: "Divya Sharma", program: "B.Tech. in Electrical Engineering", company: "L&T" },
//     { name: "Abhishek Tiwari", program: "B.Tech. in Civil Engineering", company: "AFCONS" },
//     { name: "Rahul Verma", program: "B.Tech. in Civil Engineering", company: "GMR" },
//     { name: "Priya Sinha", program: "B.Tech. in Computer Science", company: "Wipro" },
//     { name: "Saurabh Shukla", program: "B.Tech. in Civil Engineering", company: "DLF" },
//     { name: "Mohit Mishra", program: "B.Tech. in Mechanical Engineering", company: "Toyo Engineering" },
//     { name: "Vivek Rathi", program: "B.Tech. in Electrical Engineering", company: "Adani" },
//     { name: "Kunal Kashyap", program: "B.Tech. in Civil Engineering", company: "Punj Lloyd" },
//     { name: "Ankit Singh", program: "B.Tech. in Chemical Engineering", company: "ONGC" },
//     { name: "Aditi Tripathi", program: "B.Tech. in Civil Engineering", company: "NBCC" },
//     { name: "Manish Yadav", program: "B.Tech. in Civil Engineering", company: "Shapoorji Pallonji" },
//     { name: "Rohit Singh", program: "B.Tech. in Civil Engineering", company: "L&T Construction" },
//     { name: "Shreya Gupta", program: "B.Tech. in Computer Science", company: "Microsoft" },
// ];


// export const visionMissionData: VisionMissionProps["data"] = {
//     backgroundColor: "#0f4a85",
//     vision: {
//         title: "Our Vision",
//         description: [
//             "To foster an environment where biotechnology teaching and research can be utilized to answer fundamental biological questions, and address the issues pertaining to health care, agriculture, food safety and security, medicine and environmental sustainability.",
//         ],
//         buttonText: "View Vision",
//         buttonBgColor: "bg-yellow-400",
//         imageUrl: image2
//     },
//     mission: {
//         title: "Our Mission",
//         description: [
//             "To provide quality education with a focus on personal and professional growth.",
//             "Delivering technology-led learning experiences that drive transformation."
//         ],
//         buttonText: "View Mission",
//         buttonBgColor: "bg-green-400",
//         imageUrl: image1
//     }
// };



// export const facultyData: FacultyItem[] = [
//   {
//     id: 1,
//     name: "Dr. Aditi Sharma",
//     designation: "Professor & Head of Department",
//     image: "https://via.placeholder.com/200",
//     cardBgColor: "#001219",
//   },
//   {
//     id: 2,
//     name: "Prof. Rohit Malhotra",
//     designation: "Associate Professor",
//     image: "https://via.placeholder.com/200",
//     cardBgColor: "#003049",
//   },
//   {
//     id: 3,
//     name: "Dr. Neha Kapoor",
//     designation: "Assistant Professor",
//     image: "https://via.placeholder.com/200",
//     cardBgColor: "#370617",
//   },
//   {
//     id: 4,
//     name: "Mr. Arjun Pratap",
//     designation: "Senior Lecturer",
//     image: "https://via.placeholder.com/200",
//     cardBgColor: "#283618",
//   },
//   {
//     id: 5,
//     name: "Dr. Suman Verma",
//     designation: "Research Coordinator",
//     image: "https://via.placeholder.com/200",
//     cardBgColor: "#432818",
//   },
// ];




// data/instituteProfiles.ts

export const instituteProfiles: InstituteProfile[] = [
  {
    id: 1,
    title: "Department Head",
    name: "Prof. (Dr.) Abhishek Saxena",
    position: "Offg. Director, IAP & Dean FoCE, SRMU, Lucknow–Deva Road",
    image: professor,

    summary: "Total experience of 23+ years in industry and academics. Functional Area Expert for EIA studies and empanelled groundwater expert for various government bodies.",

    detailsHeading: "Experience & Achievements",
    useBullets: false,

    details: [
      "**Total Experience**: 23+ years (Industry: 10 years, Academics: 13+ years)",
      "8 patents and 60 research papers/book chapters published in renowned journals",
      "Supervisor of 5 PhD; 7 scholars awarded",
      "Functional Area Expert for EIA studies (Category 'A' projects – HG & Geo) since 2011",
      "Empanelled Groundwater Expert for Central Ground Water Authority & Ministry of Jal Shakti",
      "Consultancy Projects: 9 | Total Cost: Rs. 2.0+ Cr",
      "Total EIA Projects = 19 (5 Category 'A' + 14 Category 'B')",
      "iwjhfisnvjnsvjnsjnvnv",
    ],

    modalContent: `
<span class="text-red-500 font-semibold">Prof. (Dr.) Abhishek Saxena</span>, an environmentalist and academician, is currently working as Dean, Faculty of Civil Engineering with additional charge of Director in Institute of Architecture and Planning at Shri Ramswaroop Memorial University, Barabanki.

He is empanelled Functional Area Expert for EIA studies (Category "A" projects– HG) since 2011 (till date), empanelled by National Accreditation Board for Education and Training (NABET), Ministry of Environment, Forest and Climate Change (MoEFCC), Government of India. He is a renowned member of the National Level Expert Committee for “Auto Detection of Construction through Satellite Imageries”, Ghaziabad Development Authority since 2013. He is also Empanelled Groundwater Expert for CGWA (Central Ground Water Authority), Government of India (2021).

He received the “ITP Young Scientist Award 2006” by IWMI–TATA Water Policy Program for major findings in his Ph.D. research work, and the Guru Pranam Award 2016 by Amar Ujala for contributions in education and research. He is Principal Investigator in the project “Affordable filter for arsenic removal from drinking water using bio-adsorption techniques” funded by UPCST.

His career began with World Bank projects, later joining SMEC (Australia) where he worked on several ADB, JICA, World Bank, and GoI funded assignments. He played a major role in Water Resource Management of Uttar Pradesh (35 districts) under the World Bank UPWRSP Phase-I. UNICEF also utilized his expertise as State Water Safety Consultant for Uttar Pradesh.

He has more than 22 years of experience in water quality, EIA, groundwater and resource management. He holds the fellowship of “The Society of Earth Scientists” and “Indian Society of Remote Sensing”.

Prof. Saxena has 60+ publications in journals, conferences, books and book chapters and has been granted 8 International Patents. Under his guidance, 7 PhDs have been awarded and 5 are in progress.
`,
  },
];



// export const events: EventItem[] = [
//   {
//     id: 1,
//     title: "Industrial Visit",
//     venue: "Renewable Energy and Electric Vehicle Exhibition",
//     date: "24th August, 2025",
//     image: img1,
//   },
//   {
//     id: 2,
//     title: "National Workshop",
//     topic: "Role of AI in Achieving SDGs",
//     date: "04th–16th November, 2024",
//     image: img1,
//   },

//   {
//     id: 3,
//     title: "National Workshop",
//     topic: "Role of AI in Achieving SDGs",
//     date: "04th–16th November, 2024",
//     image: img1,
//   },
// ];








// export const civilEngineeringFeeTable: FeeTableData = {
//     columns: [
//         "Fee Type",
//         "1st Year",
//         "2nd Year",
//         "3rd Year",
      
//     ],

//     rows: [
//         {
//             course: "Tuition Fee",
//             duration: "45000 | 45000 | 45000",
//             fee: "₹45,000 / Year",
//             eligibility: "Click",
//             eligibilityContent: `
//                 <h2 class='font-bold text-lg mb-3'>Tuition Fee Details</h2>
//                 <ul class='list-disc pl-5 space-y-2'>
//                     <li>1st Year: ₹45,000</li>
//                     <li>2nd Year: ₹45,000</li>
//                     <li>3rd Year: ₹45,000</li>
//                 </ul>
//             `
//         },
//         {
//             course: "Examination Fee",
//             duration: "5000 | 5000 | 5000",
//             fee: "₹5,000 / Year",
//             eligibility: "Click",
//             eligibilityContent: `
//                 <h2 class='font-bold text-lg mb-3'>Examination Fee</h2>
//                 <ul class='list-disc pl-5 space-y-2'>
//                     <li>1st Year: ₹5,000</li>
//                     <li>2nd Year: ₹5,000</li>
//                     <li>3rd Year: ₹5,000</li>
//                 </ul>
//             `
//         },
//         {
//             course: "Other Fees",
//             duration: "7000 | 7000 | 7000",
//             fee: "₹7,000 / Year",
//             eligibility: "Click",
//             eligibilityContent: `
//                 <h2 class='font-bold text-lg mb-3'>Other Fees</h2>
//                 <ul class='list-disc pl-5 space-y-2'>
//                     <li>1st Year: ₹7,000</li>
//                     <li>2nd Year: ₹7,000</li>
//                     <li>3rd Year: ₹7,000</li>
//                 </ul>
//             `
//         },
//         {
//             course: "Development Fund",
//             duration: "5000 | 5000 | 5000",
//             fee: "₹5,000 / Year",
//             eligibility: "Click",
//             eligibilityContent: `
//                 <h2 class='font-bold text-lg mb-3'>Development Fund Details</h2>
//                 <ul class='list-disc pl-5 space-y-2'>
//                     <li>1st Year: ₹5,000</li>
//                     <li>2nd Year: ₹5,000</li>
//                     <li>3rd Year: ₹5,000</li>
//                 </ul>
//             `
//         },
//         {
//             course: "Caution Money",
//             duration: "5000 | NA | NA",
//             fee: "₹5,000 (One Time)",
//             eligibility: "Click",
//             eligibilityContent: `
//                 <h2 class='font-bold text-lg mb-3'>Caution Money</h2>
//                 <ul class='list-disc pl-5 space-y-2'>
//                     <li>1st Year: ₹5,000 (Refundable)</li>
//                     <li>2nd Year: NA</li>
//                     <li>3rd Year: NA</li>
//                 </ul>
//             `
//         },
//         {
//             course: "Total Fee",
//             duration: "67000 | 62000 | 62000",
//             fee: "₹67,000 / ₹62,000",
//             eligibility: "Click",
//             eligibilityContent: `
//                 <h2 class='font-bold text-lg mb-3'>Total Yearly Fee</h2>
//                 <ul class='list-disc pl-5 space-y-2'>
//                     <li>1st Year: ₹67,000</li>
//                     <li>2nd Year: ₹62,000</li>
//                     <li>3rd Year: ₹62,000</li>
//                 </ul>
//             `
//         },
//         {
//             course: "Hostel Fees",
//             duration: "85000 | 80000 | 80000",
//             fee: "₹85,000 / ₹80,000",
//             eligibility: "Click",
//             eligibilityContent: `
//                 <h2 class='font-bold text-lg mb-3'>Hostel Fee</h2>
//                 <ul class='list-disc pl-5 space-y-2'>
//                     <li>1st Year: ₹85,000</li>
//                     <li>2nd Year: ₹80,000</li>
//                     <li>3rd Year: ₹80,000</li>
//                 </ul>
//             `
//         },
//         {
//             course: "Transportation",
//             duration: "33000 | 33000 | 33000",
//             fee: "₹33,000 / Year",
//             eligibility: "Click",
//             eligibilityContent: `
//                 <h2 class='font-bold text-lg mb-3'>Transportation Fee</h2>
//                 <ul class='list-disc pl-5 space-y-2'>
//                     <li>Same Amount for All Years</li>
//                     <li>₹33,000 per year</li>
//                 </ul>
//             `
//         }
//     ],

//     notes: [
//         "Alumni Fee: 500",
//         "Degree Fee: 1000",
//         "Both these fees are payable in the final year of the program"
//     ]
// };





// export const civilEngineeringFeeTable: FeeTableData = {
//     columns: [
//         "Fee Type",
//         "1st Year",
//         "2nd Year",
//         "3rd Year",
     
//     ],
 
//     rows: [
//         {
//             course: "Tuition Fee",
//             duration: "45000 | 45000 | 45000",
//             fee: "₹45,000 / Year",
//             eligibility: "Click",
//             eligibilityContent: `
//                 <h2 class='font-bold text-lg mb-3'>Tuition Fee Details</h2>
//                 <ul class='list-disc pl-5 space-y-2'>
//                     <li>1st Year: ₹45,000</li>
//                     <li>2nd Year: ₹45,000</li>
//                     <li>3rd Year: ₹45,000</li>
//                 </ul>
//             `
//         },
//         {
//             course: "Examination Fee",
//             duration: "5000 | 5000 | 5000",
//             fee: "₹5,000 / Year",
//             eligibility: "Click",
//             eligibilityContent: `
//                 <h2 class='font-bold text-lg mb-3'>Examination Fee</h2>
//                 <ul class='list-disc pl-5 space-y-2'>
//                     <li>1st Year: ₹5,000</li>
//                     <li>2nd Year: ₹5,000</li>
//                     <li>3rd Year: ₹5,000</li>
//                 </ul>
//             `
//         },
//         {
//             course: "Other Fees",
//             duration: "7000 | 7000 | 7000",
//             fee: "₹7,000 / Year",
//             eligibility: "Click",
//             eligibilityContent: `
//                 <h2 class='font-bold text-lg mb-3'>Other Fees</h2>
//                 <ul class='list-disc pl-5 space-y-2'>
//                     <li>1st Year: ₹7,000</li>
//                     <li>2nd Year: ₹7,000</li>
//                     <li>3rd Year: ₹7,000</li>
//                 </ul>
//             `
//         },
//         {
//             course: "Development Fund",
//             duration: "5000 | 5000 | 5000",
//             fee: "₹5,000 / Year",
//             eligibility: "Click",
//             eligibilityContent: `
//                 <h2 class='font-bold text-lg mb-3'>Development Fund Details</h2>
//                 <ul class='list-disc pl-5 space-y-2'>
//                     <li>1st Year: ₹5,000</li>
//                     <li>2nd Year: ₹5,000</li>
//                     <li>3rd Year: ₹5,000</li>
//                 </ul>
//             `
//         },
//         {
//             course: "Caution Money",
//             duration: "5000 | NA | NA",
//             fee: "₹5,000 (One Time)",
//             eligibility: "Click",
//             eligibilityContent: `
//                 <h2 class='font-bold text-lg mb-3'>Caution Money</h2>
//                 <ul class='list-disc pl-5 space-y-2'>
//                     <li>1st Year: ₹5,000 (Refundable)</li>
//                     <li>2nd Year: NA</li>
//                     <li>3rd Year: NA</li>
//                 </ul>
//             `
//         },
//         {
//             course: "Total Fee",
//             duration: "67000 | 62000 | 62000",
//             fee: "₹67,000 / ₹62,000",
//             eligibility: "Click",
//             eligibilityContent: `
//                 <h2 class='font-bold text-lg mb-3'>Total Yearly Fee</h2>
//                 <ul class='list-disc pl-5 space-y-2'>
//                     <li>1st Year: ₹67,000</li>
//                     <li>2nd Year: ₹62,000</li>
//                     <li>3rd Year: ₹62,000</li>
//                 </ul>
//             `
//         },
//         {
//             course: "Hostel Fees",
//             duration: "85000 | 80000 | 80000",
//             fee: "₹85,000 / ₹80,000",
//             eligibility: "Click",
//             eligibilityContent: `
//                 <h2 class='font-bold text-lg mb-3'>Hostel Fee</h2>
//                 <ul class='list-disc pl-5 space-y-2'>
//                     <li>1st Year: ₹85,000</li>
//                     <li>2nd Year: ₹80,000</li>
//                     <li>3rd Year: ₹80,000</li>
//                 </ul>
//             `
//         },
//         {
//             course: "Transportation",
//             duration: "33000 | 33000 | 33000",
//             fee: "₹33,000 / Year",
//             eligibility: "Click",
//             eligibilityContent: `
//                 <h2 class='font-bold text-lg mb-3'>Transportation Fee</h2>
//                 <ul class='list-disc pl-5 space-y-2'>
//                     <li>Same Amount for All Years</li>
//                     <li>₹33,000 per year</li>
//                 </ul>
//             `
//         }
//     ],
 
//     notes: [
//         "Alumni Fee: 500",
//         "Degree Fee: 1000",
//         "Both these fees are payable in the final year of the program"
//     ]
// };