import { customeOverViewType } from "../../../../types/home-data-type";
import vision from "../../../../assets/images/academics/institutes/vision-card/Our-vision-13102304415245.png";
import mission from "../../../../assets/images/academics/institutes/vision-card/Our-Mission-13102304092698.png";
import { CustomInstituteCourseCardProps } from "../../../../utils/custom/CustomInstituteCoursesCard";
import courseImg1 from "../../../../assets/images/academics/departments/group-scientists-wearing-lab-coat-working-laborato-28012512230911.jpg";
import courseImg2 from "../../../../assets/images/academics/departments/bioinformatics-07022411264512.jpg";
import courseImg3 from "../../../../assets/images/academics/departments/biotech-07022411273155.jpg";
import { InstituteProfile } from "../../../../types/profile-data-type";
import TabishImg from "../../../../assets/images/academics/departments/dr.-tabish-kidwai-27022401392651.png"
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

export const visionMissionData = {
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



export const instituteProfiles: InstituteProfile[] = [
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

    modalContent: `He has more than 35+ years of experience in Management & Media Education and the Industry.He has worked across the different domains including  Advertising, Media  and Management education. He has received laurels as a Director of the Year in 2023 and granted Patent on “Employability “in the managemnt stream in the same year. He began his career with a Publishing Company in New Delhi,India and moved to Academics in the year 1995.In his career span has been associated with leading media institutions such as Film Institute of eMITS,Lucknow and JIT Media Institute ,Barabanki.

He has been guiding and counselling the students across various academic domains. He is capable to motivate young minds and developing synergy between the students and the teachers for their growth.His Research Interest  area is Advertising and Visual Communication.
`
  },


]; 



export const instituteCourseCardData: CustomInstituteCourseCardProps[] = [
  {
    imageUrl: courseImg1,
    departmentName: "Faculty of Allied Health Sciences",
  },
  {
    imageUrl: courseImg2,
    departmentName: "Faculty of Biosciences",
  },
  {
    imageUrl: courseImg3,
    departmentName: "Faculty of Biotechnology",
  },
];
