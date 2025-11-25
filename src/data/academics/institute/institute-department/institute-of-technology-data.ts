import { customeOverViewType } from "../../../../types/home-data-type";
import vision from "../../../../assets/images/academics/institutes/vision-card/Our-vision-13102304415245.png";
import mission from "../../../../assets/images/academics/institutes/vision-card/Our-Mission-13102304092698.png";
import { CustomInstituteCourseCardProps } from "../../../../utils/custom/CustomInstituteCoursesCard";
import courseImg1 from "../../../../assets/images/academics/departments/civil-07052411084968.jpg";
import courseImg2 from "../../../../assets/images/academics/departments/electronics-communication-06022402270981.jpg";
import courseImg3 from "../../../../assets/images/academics/departments/mech-06022402242113.jpg";
import courseImg4 from "../../../../assets/images/academics/departments/comp-06022402295417.jpg";
import courseImg5 from "../../../../assets/images/academics/departments/html-06022402320038.jpg";

export const InstituteofTechnologyOverviewData: customeOverViewType = {
  heading: "Institute of Technology",
  content:
    "The Institute of Technology is committed to provide focused learning in the fields of Engineering and technology with the aim of creating human resources with knowledge and abilities to contribute successfully to a complex and ever changing world. We have faculty members recruited from the premier National & International Institutes & Universities, bringing creativity, experience, and expertise to build and execute career-targeted learning programs. Our undergraduate programs are pedagogically designed and the execution of teaching learning processes is performed with the aid of well-equipped laboratories, IT facilities, which help graduates begin careers in various fields of engineering and technology with minimal training. Postgraduate programs of the Institute have the research integrated with education, making the students a creative and innovative member of the society.",
  counterSibling:
    "Innovation and research in the emerging & front area of science & technology is essential part of all the Faculties, creating a very vibrating atmosphere for our PhD program. We make extensive efforts to train students in professional and soft skills and focus on lifelong learning which are critical for success at the corporate world. In the past, several events including International conference, National conferences, Seminars, Short Term Training Programs, Faculty Development Programs, Workshops & Industrial Visits have been organized and similar events are planned to be organized in future too for students and faculties. Institute of Technology at SRMU is one of the best Engineering College in Uttar Pradesh. It offers specialized IBM collaborative programs in B.Tech CSE & BCA. Further it provides industry driven program in core engineering branches in collaboration with ISIE India & MG Motors.",
};

export const InstituteofTechnologyTopFooterData = [
  {
    content: `Want to learn more about SRMU?`,
    btnText: "Request Registration",
  },
];


export const visionMissionData = {
  backgroundColor: "bg-blue-900",
  vision: {
    title: "Our Vision",
    description: [
      "To be a Institute of excellence in the field of Engineering and Technology with emphasis on quality education, research, consultancy and innovations blended with values and commitment to society.",
    ],
    buttonText: "Vision",
    buttonBgColor: "bg-amber-400",
    imageUrl: vision
  },

  mission: {
    title: "Our Mission",
    description: [
      "To offer Graduate, Post-graduate, Doctoral and other value-added programmes beneficial for the students.",
      "To establish state-of-the-art facilities and resources required to achieve excellence in teaching-learning and supplementary processes.",
      "To promote research among students and faculty through projects and consultancy by collaboration with national and international institute of eminence.",
      "To instill among students highest ethical standards and values with a sense of professionalism.",
      "To make students socially responsible citizen.",
    ],
    buttonText: "Mission",
    buttonBgColor: "bg-amber-400",
    imageUrl: mission
  }
};


export const instituteCourseCardData: CustomInstituteCourseCardProps[] = [
  {
    imageUrl: courseImg1,
    departmentName: "Faculty of Civil Engineering",
  },
  {
    imageUrl: courseImg2,
    departmentName: "Department of Electrical and Electronics Engineering",
  },
  {
    imageUrl: courseImg3,
    departmentName: "Faculty of Mechanical Engineering",
  },
  {
    imageUrl: courseImg4,
    departmentName: "Department of Computer Science and Engineering",
  },
  {
    imageUrl: courseImg5,
    departmentName: "Department of Computer Science and Information Systems",
  },
];
