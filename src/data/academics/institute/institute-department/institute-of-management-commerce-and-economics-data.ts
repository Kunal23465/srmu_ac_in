import { customeOverViewType } from "../../../../types/home-data-type";
import vision from "../../../../assets/images/academics/institutes/vision-card/Our-vision-13102304415245.png";
import mission from "../../../../assets/images/academics/institutes/vision-card/Our-Mission-13102304092698.png";
import { CustomInstituteCourseCardProps } from "../../../../utils/custom/CustomInstituteCoursesCard";
import courseImg1 from "../../../../assets/images/academics/departments/commerce-07052412092026.jpg";
import courseImg2 from "../../../../assets/images/academics/departments/management1-07052412144882.jpg";

export const InstituteofManagementCommerceandEconomicsOverviewData: customeOverViewType = {
  heading: "Institute of Management, Commerce and Economics",
  content:
    "The Institute of Management, Commerce and Economics (IMCE) was started in the year 2012. The highly qualified teaching members of the Institute of Management, Commerce & Economics offer state-of-the-art business education, preparing students for the quickly changing corporate environment. The Institute aggressively seeks for outstanding scholars who are committed to developing the next generation of leaders from all across the world. Modern amenities provided by the institute include smart classrooms equipped with latest ICT resources, a completely wi-fi environment, cutting-edge computer laboratories, well-stocked libraries, on-campus cafeterias, and sports facilities.",
  counterSibling:
    "The institute's instructional strategies include in-depth workshops, fieldwork, lectures, tutorials, seminars, and presentations. A flexible credit system that enables students to follow their own academic interests and benefit from a variety of educational opportunities is advantageous to them. IMCE seeks to be a trailblazer in management education through strong academic-industry collaboration, promoting entrepreneurial programs, and developing initiatives for international alliances. IMCE thrusts on creating an innovative, ethical and intellectual environment with a focus on leadership and management in a technology intensive global market. IMCE has been playing a pivotal role in the growth of students and scholars through blend of theory and practice, using highly innovative teaching pedagogy.",
};

export const InstituteofManagementCommerceandEconomicsTopFooterData = [
  {
    content: `Want to learn more about SRMU?`,
    btnText: "Request Registration",
  },
];

export const InstituteofManagementCommerceandEconomicsvisionMissionData = {
     backgroundColor: "bg-blue-900",
 vision: {
    title: "Our Vision",
    description: [
      "To be a leading institute where knowledge and excellence&nbsp;shall be delivered through strong academic business collaborations for holistic development of students which will make them more creative and productive members of the country.",
    ],
    buttonText: "Vision",
    buttonBgColor: "bg-amber-400",
    imageUrl: vision,
  },

  mission: {
    title: "Our Mission",
    description: [
      "Offering high quality programs to prepare students to excel in a global and rapidly changing environment.",
      "Integrating theory and practice in programs helping student for successful employment and continuing higher education.",
      "Nurturing students through an advanced curriculum and effective pedagogy emphasizing on experiential learning to grow in their career and life.",
    ],
    buttonText: "Mission",
    buttonBgColor: "bg-amber-400",
    imageUrl: mission,
  },
};

export const instituteCourseCardData: CustomInstituteCourseCardProps[] = [
  {
    imageUrl: courseImg1,
    departmentName: "Faculty of Commerce and Economics",
  },
  {
    imageUrl: courseImg2,
    departmentName: "Faculty Of Management",
  },

];
