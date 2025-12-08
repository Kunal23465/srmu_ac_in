import { customeOverViewType } from "../../../../types/home-data-type";
import vision from "../../../../assets/images/academics/institutes/vision-card/Our-vision-13102304415245.png";
import mission from "../../../../assets/images/academics/institutes/vision-card/Our-Mission-13102304092698.png";
import { CustomInstituteCourseCardProps } from "../../../../utils/custom/CustomInstituteCoursesCard";
import courseImg1 from "../../../../assets/images/academics/departments/group-scientists-wearing-lab-coat-working-laborato-28012512230911.jpg";
import courseImg2 from "../../../../assets/images/academics/departments/bioinformatics-07022411264512.jpg";
import courseImg3 from "../../../../assets/images/academics/departments/biotech-07022411273155.jpg";
import { InstituteProfile } from "../../../../types/profile-data-type";
import TabishImg from "../../../../assets/images/academics/departments/dr.-tabish-kidwai-27022401392651.png"
import { alliedHealthScienceDepartmentEventsData, alliedHealthScienceHighlightsData, counterDataFoFacultyOfAlliedHealthSciences, counterDataForPlacedStudentsOFAlliedHealthSciences, facultyDetailsOfAhsDepartment, facultyofAHSOverviewData, facultyOfAhsProfileData, facultyOfAlliedHealthSciencesVMData, underGraduateFeeDataOfAHS } from "../../faculty-of-allied-health-sciences/faculty-of-allied-health-sciences-data";
import { bioscienceDepartmentEventsData, bioscienceHighlightsData, counterDataFoFacultyOfBiosciencess, counterDataForPlacedStudentsOFBioscience, facultyDetailsOfBioScienceDepartment, facultyofBioscienceOverviewData, facultyOfBioscienceProfileData, facultyOfBiosciencesVMData, postGraduateFeeDataOfBioscience, underGraduateFeeDataOfBioscience } from "../../faculty-of-biosciences/faculty-of-biosciences-data";
import { biotechnologyDepartmentEventsData, biotechnologyHighlightsData, biotechnologyIndustryIntegratedFeeTable, biotechnologyIndustryPostgraduateFeeTable, biotechnologyIndustryUndergraduateFeeTable, counterDataFoFacultyOfBiotechnology, counterDataForPlacedStudentsOFBiotechnology, facultyDetailsOfBiotechnologyDepartment, facultyOfBiostechnologyProfileData, facultyOfBiostechnologyVMData, facultyofBiotechnologyeOverviewData } from "../../faculty-of-biotechnology/faculty-of-biotechnology-data";
export const InstituteofBiosciencesandTechnologyOverviewData: customeOverViewType = {
  heading: "Institute of Biosciences and Technology",
  content:
    "The foundation for Institute of Biosciences and Technology (IBST) was laid down in 2012, with B.Tech. (Biotechnology) programme. Thereafter, Ph.D. programme in Biotechnology was offered from 2013. Subsequently, B.Sc. (Hons), M.Sc. and M.Tech. programmes in Biotechnology were introduced from 2015. Biotechnology encompasses the applications of understanding of the biological systems to improve human life by addressing challenges and issues facing agricultural sciences, medical sciences, food sciences, etc. It has undergone a paradigm shift in the past two decades with the advent of cutting-edge technologies like next generation sequencing NGS), and precise genome editing. Our Biotechnology programmes, both at the undergraduate and postgraduate levels, are designed keeping in view both the fundamental concepts, and these technological advances.",
  counterSibling:
    "The Institute is passionate about the ability of outreach and teamwork to further scientific understanding and improve society. In order to address challenging issues in the fields of biotechnology and bio-sciences, we actively engage with industry and publish collaborative research papers with distinguished scientists from reputable national and institutions. Our goal is to establish significant partnerships that stimulate innovation and produce significant results. By utilizing cutting edge research, teaching, and innovative techniques, we always aim to provide a lively and stimulating learning environment.",
};

export const InstituteofBiosciencesandTechnologyTopFooterData = [
  {
    content: `Want to learn more about SRMU?`,
    btnText: "Request Registration",
  },
];

export const InstituteofBiosciencesandTechnologyvisionMissionData = {
  backgroundColor: "#0f4a85",
  vision: {
    title: "Our Vision",
    description: [
      "To foster an environment where biotechnology teaching and research can be utilized to answer fundamental biological questions, and address the issues pertaining to health care, agriculture, food safety and security, medicine and environmental sustainability.",
    ],
    buttonText: "Vision",
    buttonBgColor: "bg-amber-400",
    imageUrl: vision,
  },

  mission: {
    title: "Our Mission",
    description: [
      "Offering broad and balanced academic programswith high quality teaching at both undergraduate and postgraduate levels.",
      "Promoting research in relevant disciplines that tackle the current global challenges.",
      "Creating awareness about the potential of biotechnology and its socio-ethical implications.",
    ],
    buttonText: "Mission",
    buttonBgColor: "bg-amber-400",
    imageUrl: mission,
  },
};



export const InstituteofBiosciencesandTechnologyinstituteProfiles: InstituteProfile[] = [
  {
    id: 1,
    title: "Institute Head",
    name: "Dr. Tabish Qidwai",
    position: "Offg. Director, IBST, SRMU, Lucknow–Deva Road",
    image: TabishImg,

    summary:
      "",

    detailsHeading: "",
    useBullets: false,

    details: [
      "**Qualification: **M.Tech. (Biotechnology), Ph.D. (Biotechnology)",
      "**Experience**: 13 years",
      "**Specialization/ Area of Research: **Functional Genomics, Immunology and Infectious Disease Research including Malaria and COVID-19.",
      "**Email ID: **director.bio@srmu.ac.in",
      "**ORCID ID: **https://orcid.org/0000-0001-8247-7248",
      "**Contact No.: **+91-9140631326",
    ],

    modalContent: `Tabish Qidwai has done M.Tech and Ph.D. in Biotechnology Engineering. He has worked as a faculty member at B.B. Ambedkar Central University, Lucknow and Raja Balwant Singh College, Agra. He received various prestigious awards including the Rashtriya Gaurav Award for remarkable contributions to Science and Technology, Certificate of Excellence in Science and Technology, University Gold Medal, Research Excellence Award, Teaching and Learning Innovation Award and several certificate of appreciation for significant contribution to academics.

    He has 13 years of teaching and research experience in genomics and immunology and infectious diseases. He has published nearly 52 book chapters, research articles, review articles in peer-reviewed international journals and authored/edited 5 books as a single author/editor. He has I 10 index 25 and h index 20 and more than 1000 citations. Currently, He is supervising 6 Ph.D. students and 1 Ph.D. is awarded under his supervision.

He is a member of many national and international scientific societies and organizations. His research interests are focused on the functional genomics, immunology, and infectious disease research including malaria and COVID-19. Currently, he is working and writing articles/book chapters in collaboration with University of South Florida, USA, Biological Research Centre, Szeged, Hungary, The Arctic University of Norway, AIIMS Hyderabad, AIIMS Bhopal, IIT-BHU, IET Lucknow and University of Delhi.
`
  },


];



export const InstituteofBiosciencesandTechnologyinstituteCourseCardData: CustomInstituteCourseCardProps[] = [
  {
    imageUrl: courseImg1,
    departmentName: "Faculty of Allied Health Sciences",
    path: "institute-of-biosciences-and-technology/faculty-of-allied-health-sciences",
    departmentDetails: {
      overviewData: facultyofAHSOverviewData,
      counterData: counterDataFoFacultyOfAlliedHealthSciences,
      mvData: facultyOfAlliedHealthSciencesVMData,
      departmentHeadData: facultyOfAhsProfileData,
      feeTableData: {
        tab1: { label: "Undergraduate", data: underGraduateFeeDataOfAHS },
      },
      facultyData: facultyDetailsOfAhsDepartment,
      departmentHighlightsData: alliedHealthScienceHighlightsData,
      counterData2: counterDataForPlacedStudentsOFAlliedHealthSciences,
      placedStudentsData: null,
      eventsData: alliedHealthScienceDepartmentEventsData,
    },
  },
  {
    imageUrl: courseImg2,
    departmentName: "Faculty of Biosciences",
    path: "institute-of-biosciences-and-technology/faculty-of-biosciences",
    departmentDetails: {
      overviewData: facultyofBioscienceOverviewData,
      counterData: counterDataFoFacultyOfBiosciencess,
      mvData: facultyOfBiosciencesVMData,
      departmentHeadData: facultyOfBioscienceProfileData,
      feeTableData: {
        tab1: { label: "Postgraduate", data: postGraduateFeeDataOfBioscience },
        tab2: { label: "Undergraduate", data: underGraduateFeeDataOfBioscience },
      },
      facultyData: facultyDetailsOfBioScienceDepartment,
      departmentHighlightsData: bioscienceHighlightsData,
      counterData2: counterDataForPlacedStudentsOFBioscience,
      placedStudentsData: null,
      eventsData: bioscienceDepartmentEventsData,
    },
  },
  {
    imageUrl: courseImg3,
    departmentName: "Faculty of Biotechnology",
    path: "institute-of-biosciences-and-technology/faculty-of-biotechnology",
    departmentDetails: {
      overviewData: facultyofBiotechnologyeOverviewData,
      counterData: counterDataFoFacultyOfBiotechnology,
      mvData: facultyOfBiostechnologyVMData,
      departmentHeadData: facultyOfBiostechnologyProfileData,
      feeTableData: {
        tab1: { label: "Integrated", data: biotechnologyIndustryIntegratedFeeTable },
        tab2: { label: "Postgraduate", data: biotechnologyIndustryPostgraduateFeeTable },
        tab3: { label: "Undergraduate", data: biotechnologyIndustryUndergraduateFeeTable },
      },
      facultyData: facultyDetailsOfBiotechnologyDepartment,
      departmentHighlightsData: biotechnologyHighlightsData,
      counterData2: counterDataForPlacedStudentsOFBiotechnology,
      placedStudentsData: null,
      eventsData: biotechnologyDepartmentEventsData,
    },
  },
];
