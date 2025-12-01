import { customeOverViewType } from "../../../types/home-data-type";
import instituteoftech from "../../../assets/images/academics/institutes/instoftech-06052402531738.jpg";
import instituteofbio from "../../../assets/images/academics/institutes/Institute-of-Bio-Sciences-Technology-17102303070795.jpg";
import instituteofmang from "../../../assets/images/academics/institutes/corporate-manag-06052401232352.jpg";
import instituteofagri from "../../../assets/images/academics/institutes/agri-06052403361755.jpg";
import instituteoflegal from "../../../assets/images/academics/institutes/legal-07052411041620.jpg";
import instituteofpharmacy from "../../../assets/images/academics/institutes/dpharma--08022401004122.jpg";
import instituteofmedia from "../../../assets/images/academics/institutes/media1-06052403225269.jpg";
import instituteofnatural from "../../../assets/images/academics/institutes/naturalscience-06052403201478.jpg";
import instituteofpharmaceutical from "../../../assets/images/academics/institutes/pharmaceutical-12022411152655.jpg";
import instituteofedu from "../../../assets/images/academics/institutes/economics--08022401082492.jpg";
import instituteofpolytech from "../../../assets/images/academics/institutes/polytechnic11-08022412560314.jpg";
import * as Yup from "yup";
import { instituteCourseCardData, InstituteofManagementCommerceandEconomicsinstituteProfiles, InstituteofManagementCommerceandEconomicsOverviewData, InstituteofManagementCommerceandEconomicsTopFooterData, InstituteofManagementCommerceandEconomicsvisionMissionData } from "./institute-department/institute-of-management-commerce-and-economics-data/institute-of-management-commerce-and-economics-data";
import { instituteofTechnologyCourseCardData, InstituteofTechnologyOverviewData, InstituteofTechnologyTopFooterData, visionMissionData } from "./institute-department/institute-of-technology-data";
import { InstituteofBiosciencesandTechnologyinstituteCourseCardData, InstituteofBiosciencesandTechnologyinstituteProfiles, InstituteofBiosciencesandTechnologyOverviewData, InstituteofBiosciencesandTechnologyTopFooterData, InstituteofBiosciencesandTechnologyvisionMissionData } from "./institute-department/institute-of-biosciences-and-technology-data";
import { InstituteofMediaStudiesCounterData1, InstituteofMediaStudiesCounterData2, InstituteofMediaStudiesData1, InstituteofMediaStudiesData2, InstituteofMediaStudiesDepartmentEventsData, InstituteofMediaStudiesdepartmentHighlights, InstituteofMediaStudiesfacultyData, InstituteofMediaStudiesOverviewData, InstituteofMediaStudiesplacedStudents, InstituteofMediaStudiesProfiles, InstituteofMediaStudiesVMData } from "./institute-department/institute-of-media-studies-data";
import { InstituteofPharmaceuticalSciencesCounterData1, InstituteofPharmaceuticalSciencesCounterData2, InstituteofPharmaceuticalSciencesData1, InstituteofPharmaceuticalSciencesfacultyData, InstituteofPharmaceuticalSciencesinstituteProfiles, InstituteofPharmaceuticalSciencesOverviewData, InstituteofPharmaceuticalSciencesVMData } from "./institute-department/institute-of-pharmaceutical-sciences-data";
import { InstituteofAgriculturalSciencesandTechnologyCounterData2, InstituteofAgriculturalSciencesandTechnologyData1, InstituteofAgriculturalSciencesandTechnologyData2, InstituteofAgriculturalSciencesandTechnologyDepartmentEventsData, InstituteofAgriculturalSciencesandTechnologydepartmentHighlights, InstituteofAgriculturalSciencesandTechnologyfacultyData, InstituteofAgriculturalSciencesandTechnologyinstituteProfiles, InstituteofAgriculturalSciencesandTechnologyOverviewData, InstituteofAgriculturalSciencesandTechnologyplacedStudents, InstituteofAgriculturalSciencesandTechnologyVMData } from "./institute-department/institute-of-agricultural-sciences-and-technology-data";
import { InstituteofLegalStudiesCounterData1, InstituteofLegalStudiesCounterData2, InstituteofLegalStudiesData1, InstituteofLegalStudiesData2, InstituteofLegalStudiesData3, InstituteofLegalStudiesDepartmentEventsData, InstituteofLegalStudiesdepartmentHighlights, InstituteofLegalStudiesfacultyData, InstituteofLegalStudiesOverviewData, InstituteofLegalStudiesplacedStudents, InstituteofLegalStudiesVMData } from "./institute-department/institute-of-legal-studies-data";
import { InstituteofPharmacyCounterData1, InstituteofPharmacyCounterData2, InstituteofPharmacyData1, InstituteofPharmacyDepartmentEventsData, InstituteofPharmacydepartmentHighlights, InstituteofPharmacyfacultyData, InstituteofPharmacyinstituteProfiles, InstituteofPharmacyOverviewData, InstituteofPharmacyplacedStudents, InstituteofPharmacyVMData } from "./institute-department/institute-of-pharmacy-data";
import { InstituteofEducationandResearchCounterData1, InstituteofEducationandResearchCounterData2, InstituteofEducationandResearchData1, InstituteofEducationandResearchData2, InstituteofEducationandResearchDepartmentEventsData, InstituteofEducationandResearchdepartmentHighlights, InstituteofEducationandResearchfacultyData, InstituteofEducationandResearchinstituteProfiles, InstituteofEducationandResearchOverviewData, InstituteofEducationandResearchplacedStudents, InstituteofEducationandResearchVMData } from "./institute-department/institute-of-education-and-research-data";
import { SRMUPolytechnicCounterData2, SRMUPolytechnicData1, SRMUPolytechnicDepartmentEventsData, SRMUPolytechnicdepartmentHighlights, SRMUPolytechnicfacultyData, SRMUPolytechnicinstituteProfiles, SRMUPolytechnicOverviewData, SRMUPolytechnicplacedStudents, SRMUPolytechnicVMData } from "./institute-department/srmu-polytechnic-data";
import { InstituteofNaturalSciencesandHumanitiesinstituteCourseCardData, InstituteofNaturalSciencesandHumanitiesinstituteProfiles, InstituteofNaturalSciencesandHumanitiesOverviewData, InstituteofNaturalSciencesandHumanitiesTopFooterData, InstituteofNaturalSciencesandHumanitiesvisionMissionData } from "./institute-department/institute-of-natural-sciences-and-humanities-data";




export const AcademicsOverviewData: customeOverViewType = {
  heading: "Academics",
  content:
    "SRMU is committed to leveraging its wide-ranging facilities to world-class standards with a goal to provide the best academia and professional resources and to prepare students for global opportunities. This makes SRMU a repository of academic and extra-curricular excellence with its state-of-the-art infrastructure and amenities. University is a confluence of academic, cultural and intellectual resources. It seeks to achieve the highest levels of distinction in the innovation and transmission of knowledge and understanding. ",
};

export interface Institute {
  id: number;
  title: string;
  description: string;
  departments: number;
  departmentsData?: any;
  image: string;
  path?: string;
}

export const institutes: Institute[] = [
  {
    id: 1,
    title: "Institute of Technology",
    description:
      "The Institute of Technology is committed to provide focused learning in the fields of engineering with an aim of creating human resources with knowledge and skills to contribute successfully to a complex world.",
    departments: 5,
    image: instituteoftech,
    path: "institute-of-technology",
    departmentsData: {
      overviewData: InstituteofTechnologyOverviewData,
      visionMissionData: visionMissionData,
      profileCardData: null,
      instituteCourseCardData: instituteofTechnologyCourseCardData,
      footerData: InstituteofTechnologyTopFooterData
    }
  },
  {
    id: 2,
    title: "Institute of Biosciences and Technology",
    description:
      "Biotechnology encompasses the applications of understanding of the biological systems to improve human life by addressing challenges and issues facing agricultural sciences, medical sciences, food sciences, etc.",
    departments: 3,
    image: instituteofbio,
    path: "institute-of-biosciences-and-technology",
    departmentsData: {
      overviewData: InstituteofBiosciencesandTechnologyOverviewData,
      visionMissionData: InstituteofBiosciencesandTechnologyvisionMissionData,
      profileCardData: InstituteofBiosciencesandTechnologyinstituteProfiles,
      instituteCourseCardData: InstituteofBiosciencesandTechnologyinstituteCourseCardData,
      footerData: InstituteofBiosciencesandTechnologyTopFooterData
    }
  },
  {
    id: 3,
    title: "Institute of Management, Commerce and Economics",
    description:
      "The Institute of Management, Commerce and Economics (IMCE) was started in the year 2012. IMCE seeks to be a trailblazer in management education through strong academic-industry collaboration for international alliances.",
    departments: 2,
    image: instituteofmang,
    path: "institute-of-management-commerce-and-economics",
    departmentsData: {
      overviewData: InstituteofManagementCommerceandEconomicsOverviewData,
      visionMissionData: InstituteofManagementCommerceandEconomicsvisionMissionData,
      profileCardData: InstituteofManagementCommerceandEconomicsinstituteProfiles,
      instituteCourseCardData: instituteCourseCardData,
      footerData: InstituteofManagementCommerceandEconomicsTopFooterData
    }
  },
  {
    id: 4,
    title: "Institute of Media Studies",
    description:
      "Journalism and Mass Communication study is an encouragement to think about the forces involved in giving it shape. Mass Media industry is one of the fastest growing industries with the mission of social conscience.",
    departments: 1,
    image: instituteofmedia,
    path: "institute-of-media-studies",
    departmentsData: {
      overviewData: InstituteofMediaStudiesOverviewData,
      counterData: InstituteofMediaStudiesCounterData1,
      mvData: InstituteofMediaStudiesVMData,
      departmentHeadData: InstituteofMediaStudiesProfiles,
      feeTableData: {
        tab1: { label: "Postgraduate", data: InstituteofMediaStudiesData1 },
        tab2: { label: "Undergraduate", data: InstituteofMediaStudiesData2 },
      },
      facultyData: InstituteofMediaStudiesfacultyData,
      departmentHighlightsData: InstituteofMediaStudiesdepartmentHighlights,
      counterData2: InstituteofMediaStudiesCounterData2,
      placedStudentsData: InstituteofMediaStudiesplacedStudents,
      eventsData: InstituteofMediaStudiesDepartmentEventsData
    }
  },
  {
    id: 5,
    title: "Institute of Natural Sciences and Humanities",
    description:
      "The Institute boasts of being the heart and soul of the University as its various disciplines of knowledge is essentially required with all the academic programs that run across the University.",
    departments: 4,
    image: instituteofnatural,
    path: "institute-of-natural-sciences-and-humanities",
    departmentsData: {
      overviewData: InstituteofNaturalSciencesandHumanitiesOverviewData,
      visionMissionData: InstituteofNaturalSciencesandHumanitiesvisionMissionData,
      profileCardData: InstituteofNaturalSciencesandHumanitiesinstituteProfiles,
      instituteCourseCardData: InstituteofNaturalSciencesandHumanitiesinstituteCourseCardData,
      footerData: InstituteofNaturalSciencesandHumanitiesTopFooterData
    }
  },
  {
    id: 6,
    title: "Institute of Pharmaceutical Sciences",
    description: "Due to its integration of chemistry and health sciences, pharmaceutical science is both a unique field and extremely important to human survival.",
    departments: 1,
    image: instituteofpharmaceutical,
    path: "institute-of-pharmaceutical-sciences1",
    departmentsData: {
      overviewData: InstituteofPharmaceuticalSciencesOverviewData,
      counterData: InstituteofPharmaceuticalSciencesCounterData1,
      mvData: InstituteofPharmaceuticalSciencesVMData,
      departmentHeadData: InstituteofPharmaceuticalSciencesinstituteProfiles,
      feeTableData: {
        tab1: { label: "Undergraduate", data: InstituteofPharmaceuticalSciencesData1 },
      },
      facultyData: InstituteofPharmaceuticalSciencesfacultyData,
      departmentHighlightsData: null,
      counterData2: InstituteofPharmaceuticalSciencesCounterData2,
      placedStudentsData: null,
      eventsData: null
    }
  },
  {
    id: 7,
    title: "Institute of Agricultural Sciences and Technology",
    description:
      "The Indian Council of Agricultural Sciences has already recognized the B.Sc.(Hons.) Agriculture 4 Years as a professional Degree with consequential benefits to the Students.",
    departments: 1,
    image: instituteofagri,
    path: "institute-of-agricultural-sciences-and-technology",
    departmentsData: {
      overviewData: InstituteofAgriculturalSciencesandTechnologyOverviewData,
      counterData: InstituteofLegalStudiesCounterData1,
      mvData: InstituteofAgriculturalSciencesandTechnologyVMData,
      departmentHeadData: InstituteofAgriculturalSciencesandTechnologyinstituteProfiles,
      feeTableData: {
        tab1: { label: "Postgraduate", data: InstituteofAgriculturalSciencesandTechnologyData1 },
        tab2: { label: "Undergraduate", data: InstituteofAgriculturalSciencesandTechnologyData2 },
      },
      facultyData: InstituteofAgriculturalSciencesandTechnologyfacultyData,
      departmentHighlightsData: InstituteofAgriculturalSciencesandTechnologydepartmentHighlights,
      counterData2: InstituteofAgriculturalSciencesandTechnologyCounterData2,
      placedStudentsData: InstituteofAgriculturalSciencesandTechnologyplacedStudents,
      eventsData: InstituteofAgriculturalSciencesandTechnologyDepartmentEventsData
    }
  },
  {
    id: 8,
    title: "Institute of Legal Studies",
    description:
      "The Institute of Legal Studies is a convergence of academic, cultural and intellectual resources. It aims at achieving the highest levels of distinction in the innovation and transmission of knowledge and understanding.",
    departments: 1,
    image: instituteoflegal,
    path: "institute-of-legal-studies1",
    departmentsData: {
      overviewData: InstituteofLegalStudiesOverviewData,
      counterData: InstituteofPharmaceuticalSciencesCounterData1,
      mvData: InstituteofLegalStudiesVMData,
      departmentHeadData: InstituteofAgriculturalSciencesandTechnologyinstituteProfiles,
      feeTableData: {
        tab1: { label: "Integrated", data: InstituteofLegalStudiesData1 },
        tab2: { label: "Postgraduate", data: InstituteofLegalStudiesData2 },
        tab3: { label: "Undergraduate", data: InstituteofLegalStudiesData3 },
      },
      facultyData: InstituteofLegalStudiesfacultyData,
      departmentHighlightsData: InstituteofLegalStudiesdepartmentHighlights,
      counterData2: InstituteofLegalStudiesCounterData2,
      placedStudentsData: InstituteofLegalStudiesplacedStudents,
      eventsData: InstituteofLegalStudiesDepartmentEventsData
    }
  },
  {
    id: 9,
    title: "Institute of Pharmacy",
    description:
      "Pharmacy is one of the unique professions and also very vital for the sustenance of human lives as it involves the combination of chemical science with health sciences.",
    departments: 1,
    image: instituteofpharmacy,
    path: "institute-of-pharmacy",
    
    departmentsData: {
      overviewData: InstituteofPharmacyOverviewData,
      counterData: InstituteofPharmacyCounterData1,
      mvData: InstituteofPharmacyVMData,
      departmentHeadData: InstituteofPharmacyinstituteProfiles,
      feeTableData: {
       
        tab1: { label: "Undergraduate", data: InstituteofPharmacyData1 },
      },
      facultyData: InstituteofPharmacyfacultyData,
      departmentHighlightsData: InstituteofPharmacydepartmentHighlights,
      counterData2: InstituteofPharmacyCounterData2,
      placedStudentsData: InstituteofPharmacyplacedStudents,
      eventsData: InstituteofPharmacyDepartmentEventsData
    }
  },
  {
    id: 10,
    title: "Institute of Education and Research",
    description:
      "Institute of Education and Research, Shri Ramswoop Memorial University offers Bachelor's degree course. Institute tries its best to produce teachers embodied with traditions values.",
    departments: 1,
    image: instituteofedu,
    path: "institute-of-education-and-research",
    departmentsData: {
      overviewData: InstituteofEducationandResearchOverviewData,
      counterData: InstituteofEducationandResearchCounterData1,
      mvData: InstituteofEducationandResearchVMData,
      departmentHeadData: InstituteofEducationandResearchinstituteProfiles,
      feeTableData: {
        tab1: { label: "Postgraduate", data: InstituteofEducationandResearchData1 },
        tab2: { label: "Undergraduate", data: InstituteofEducationandResearchData2 },
      },
      facultyData: InstituteofEducationandResearchfacultyData,
      departmentHighlightsData: InstituteofEducationandResearchdepartmentHighlights,
      counterData2: InstituteofEducationandResearchCounterData2,
      placedStudentsData: InstituteofEducationandResearchplacedStudents,
      eventsData: InstituteofEducationandResearchDepartmentEventsData
    }
  },
  {
    id: 11,
    title: "SRMU Polytechnic",
    description:
      "The Institute was established during the academic session 2015-16 and commenced its curriculum for Diploma in Mechanical, Civil, Electrical, Electronics and Communication and Computer Science Engineering.",
    departments: 1,
    image: instituteofpolytech,
    path: "srmu-polytechnic1",
    departmentsData: {
      overviewData: SRMUPolytechnicOverviewData,
      counterData: InstituteofEducationandResearchCounterData1,
      mvData: SRMUPolytechnicVMData,
      departmentHeadData: SRMUPolytechnicinstituteProfiles,
      feeTableData: {
        tab1: { label: "Polytechnic (Diploma)", data: SRMUPolytechnicData1 },
      },
      facultyData: SRMUPolytechnicfacultyData,
      departmentHighlightsData: SRMUPolytechnicdepartmentHighlights,
      counterData2: SRMUPolytechnicCounterData2,
      placedStudentsData: SRMUPolytechnicplacedStudents,
      eventsData: SRMUPolytechnicDepartmentEventsData
    }
  },
];

export const validationSchemaForEnquiry = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phone: Yup.string()
    .required("Contact Number is required")
    .matches(/^[0-9]{10}$/, "Contact Number must be exactly 10 digits"),

  academicCareerId: Yup.string().required("Course selection is required"),
  academicProgramId: Yup.string().required("Program selection is required"),
  coreStateId: Yup.string().required("State is required"),
  coreCityId: Yup.string().required("City is required"),
  consent: Yup.bool().oneOf([true], "You must accept the terms"),
});

export const initialValuesForEnquiry = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  coreStateId: "",
  coreCityId: "",
  academicCareerId: "",
  academicProgramId: "",
  coreSessionId: 4,
  leadSourceId: 43,

  consent: false,
};

export const EnquiryFormData = [
  {
    id: 1,
    labelname: "First Name",
    name: "firstName",
    placeholder: "Enter your First Name",
    type: "text",
  },
  {
    id: 2,
    labelname: "Last Name",
    name: "lastName",
    placeholder: "Enter your Last Name",
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
    labelname: "Phone Number",
    name: "phone",
    placeholder: "Enter Contact Number",
    type: "tel",
  },
  {
    id: 5,
    labelname: "Career",
    name: "academicCareerId",
    placeholder: "Select Career",
    type: "select",
  },
  {
    id: 6,
    labelname: "Program",
    name: "academicProgramId",
    placeholder: "Select Program ",
    type: "select", // Change to select
    options: [
      { value: "", label: "Select Program" },
      { value: "program1", label: "Program 1" },
      { value: "program2", label: "Program 2" },
    ],
  },
  {
    id: 7,
    labelname: "State",
    name: "coreStateId",
    placeholder: "Select State",
    type: "select", // Change to select
    options: [
      { value: "", label: "Select State" },
      { value: "state1", label: "State 1" },
      { value: "state2", label: "State 2" },
    ],
  },
  {
    id: 8,
    labelname: "City",
    name: "coreCityId",
    placeholder: "Select your City",
    type: "select", // Change to select
    options: [
      { value: "", label: "Select City" },
      { value: "city1", label: "City 1" },
      { value: "city2", label: "City 2" },
    ],
  },
];
