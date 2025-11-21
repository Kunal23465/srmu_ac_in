import * as Yup from "yup";

import { customeOverViewType } from "../../types/home-data-type";
import { TableRowData } from "../../types/table-data-types";
import Placement_Policy from "../../assets/pdf/placement/placement-policies/placement-policy-191223122840-060324102152.pdf";
import Early_Joining_Policy from "../../assets/pdf/placement/placement-policies/early-joining-policy-191223122925-060324102214.pdf";
import Industrial_Visit_Policy from "../../assets/pdf/placement/placement-policies/industrial-visit-policy-191223123100-060324102231.pdf";
import { AlumniRegistrationField } from "../../types/placement-type";

export const PlacementCellOverviewData: customeOverViewType = {
  heading: "Placement Cell",
  content:
    "At SRMU, we are proud to have been home to 12000+ well-placed alumni worldwide—our contribution to fueling national growth by providing top-notch talent to various corporate houses. SRMU ensures students unleash their full potential, reaching professional excellence. Hence, our integrated Training and Placement Department tirelessly transforms students' dreams and aspirations into reality.",
};

export const PlacementOverviewData: customeOverViewType = {
  heading: "Placement Overview",
  content: `At SRMU, we transform aspirations into tangible careers.
The key to achieving this goal is our dynamic Placement Cell Team, a group of dedicated students and professionals who are committed to equipping outgoing SRMU students with the essential skills, knowledge, and confidence required to excel in the competitive job market.
Leveraging extensive connections with industry professionals and recruiters, our track record speaks volumes as we consistently place students in leading companies, ensuring a pathway to success right from day one.`,
};

export const PlacementCellTopFooterData = [
  {
    content: `Want to learn more about SRMU?`,
    btnText: "Request Registration",
  },
];

export const studentTestimonialOverviewData: customeOverViewType = {
  heading: "All Testimonial",
  content:
    "Student testimonials serve as invaluable reflections of the educational experience within an institution, offering insights into the impact of academic programs, faculty engagement, and the overall campus environment. These testimonials, often shared voluntarily by students, provide a firsthand account of their journey, highlighting the strengths of the educational institution, personal growth, and the effectiveness of learning methodologies. Student testimonials not only offer prospective students a glimpse into the vibrant and supportive community but also act as a testament to the institution's commitment to delivering a transformative and enriching academic experience.",
};
export const StudentTestimonialTopFooterData = [
  {
    content: `Want to learn more about SRMU?`,
    btnText: "Request Registration",
  },
];

export const PlacementPoliciesOverviewData: customeOverViewType = {
  heading: "Placement Policies",
  content:
    "University placement policies encompass a set of guidelines and strategies designed to facilitate the successful transition of students from academic studies to the professional realm. These policies typically involve collaboration with industries, organizing placement drives, career counseling, and skill development initiatives to enhance students' employability. Universities often cultivate partnerships with various companies and organizations, creating a bridge between students and potential employers. Additionally, placement policies may incorporate internships, workshops, and industry-oriented curricula to ensure students are well-equipped for the demands of the job market. The ultimate goal is to empower graduates with the necessary skills and knowledge to secure fulfilling and relevant employment opportunities upon completing their education.",
};

export const alumniRegistrationTopFooterData = [
  {
    content: `Want to learn more about SRMU?`,
    btnText: "Request Registration",
  },
];
export const PlacementPoliciesTopFooterData = [
  {
    content: `Want to learn more about SRMU?`,
    btnText: "Request Registration",
  },
];

export const placementOverviewStayWithUsData = [
  {
    number: "12000+",
    title: "Students Success Stories",
    description:
      "More than 10 Years of Experience in Shaping Brilliant Careers",
    width: "w-[220px]",
  },
  {
    number: "1500+",
    title: "Job Offers",
    description: "given by 250+ top Companies",
    width: "w-[220px]",
  },
  {
    number: "90%*",
    title: "Placement",
    description: "Students Placed in CMM level-5 Companies",
    width: "w-[260px]",
  },
];


export const policiesPdfData: TableRowData[] = [
  {
    id: 1,
    title: "Placement Policy",
    download: { type: "pdf", url: Placement_Policy },
  },
  {
    id: 2,
    title: "Early Joining Policy",
    download: { type: "pdf", url: Early_Joining_Policy },
  },
  {
    id: 1,
    title: "Industrial Visit Policy",
    download: { type: "pdf", url: Industrial_Visit_Policy },
  },
];
export const alumniRegistrationOverviewData: customeOverViewType = {
  heading: "Alumni Registration",
  content: "",
};

export const alumniRegistrationFormData: AlumniRegistrationField[] = [
  {
    id: 1,
    labelname: "Name",
    name: "name",
    placeholder: "Enter your full name",
    type: "text",
  },
  {
    id: 2,
    labelname: "Contact No.",
    name: "contactNo",
    placeholder: "Enter Contact No",
    type: "text",
  },
  {
    id: 3,
    labelname: "Email",
    name: "email",
    placeholder: "Enter Email Id",
    type: "email",
  },
  {
    id: 4,
    labelname: "Passing Year",
    name: "passingYear",
    placeholder: "Enter your Passing Year",
    type: "text",
  },
  {
    id: 5,
    labelname: "Course Level",
    name: "courseLevel",
    placeholder: "Select Course Level",
    type: "select",
    options: [
      { id: 1, name: "Undergraduate", value: "undergraduate" },
      { id: 2, name: "Postgraduate", value: "postgraduate" },
      { id: 3, name: "Diploma", value: "diploma" },
      { id: 4, name: "Certificate", value: "certificate" },
    ],
  },
  {
    id: 6,
    labelname: "Program",
    name: "program",
    placeholder: "Select Program",
    type: "select",
    options: [
      { id: 1, name: "B.Tech", value: "btech" },
      { id: 2, name: "MBA", value: "mba" },
      { id: 3, name: "MCA", value: "mca" },
      { id: 4, name: "PhD", value: "phd" },
      { id: 5, name: "Other", value: "other" },
    ],
  },
  {
    id: 7,
    labelname: "Current Employer",
    name: "currentEmployer",
    placeholder: "Enter your Current Employer",
    type: "text",
  },
];

// Initial Values
export const initialValuesForAlumniRegistration = {
  name: "",
  contactNo: "",
  email: "",
  passingYear: "",
  courseLevel: "",
  program: "",
  currentEmployer: "",
  consent: false,
};

// Yup Validation Schema
export const validationSchemaForAlumniRegistration = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  contactNo: Yup.string()
    .required("Contact No. is required")
    .matches(/^[0-9]{10}$/, "Contact No. must be 10 digits"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  passingYear: Yup.string()
    .required("Passing Year is required")
    .matches(/^[0-9]{4}$/, "Enter a valid 4-digit year"),
  courseLevel: Yup.string().required("Course Level is required"),
  program: Yup.string().required("Program is required"),
  currentEmployer: Yup.string().required("Current Employer is required"),
  consent: Yup.boolean().oneOf([true], "Consent is required"),
});
