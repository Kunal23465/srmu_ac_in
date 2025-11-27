import { customeOverViewType } from "../../../../types/home-data-type";
import vision from "../../../../assets/images/academics/institutes/vision-card/Our-vision-13102304415245.png";
import mission from "../../../../assets/images/academics/institutes/vision-card/Our-Mission-13102304092698.png";
import { CustomInstituteCourseCardProps } from "../../../../utils/custom/CustomInstituteCoursesCard";
import courseImg1 from "../../../../assets/images/academics/departments/physics1-07022411301098.jpg";
import courseImg2 from "../../../../assets/images/academics/departments/chemisty-07052401043586.jpg";
import courseImg3 from "../../../../assets/images/academics/departments/maths-07022411311165.jpg";
import courseImg4 from "../../../../assets/images/academics/departments/social-science-07052401093595.jpg";

export const InstituteofNaturalSciencesandHumanitiesOverviewData: customeOverViewType = {
  heading: "Institute of Natural Sciences and Humanities",
  content:
    "The Institute boasts of being the heart and soul of the University as its various disciplines of knowledge is essentially required with all the academic programs that run across the University. Our Institute consists of four Faculties vis. a viz. Faculty of Physical Sciences, Faculty of Chemical Sciences, Faculty of Mathematical & Statistical Sciences and Faculty of Humanities & Social Sciences.",
  counterSibling:
    "We have more than 65 faculty members and almost all have earned Doctorate degrees from reputed institutes and universities and are adequately experienced to take up academics in the right pursuit. They are also involved in high end research and have published many Patents, Research Papers in very reputed Journals and also earned Research Projects from DST, Govt. of India and CST, Govt. of UP respectively. We also have more than 20 Research Scholars who are pursuing Ph. D from our Institute. Well qualified teachers, well equipped laboratories along with advance teaching aids to enhance learning outcome is our strength. We follow program specific curricula containing awareness and skill developing courses in addition to core courses which are pedagogically designed to cater to the fast changing needs of the student.",
};

export const InstituteofNaturalSciencesandHumanitiesTopFooterData = [
  {
    content: `Want to learn more about SRMU?`,
    btnText: "Request Registration",
  },
];


export const InstituteofNaturalSciencesandHumanitiesvisionMissionData = {
  backgroundColor: "#0f4a85",
  vision: {
    title: "Our Vision",
    description: [
      "To be an institute recognized for creating interdisciplinary knowledge and human capital embedded with values and ethics that directly benefits society and contributes for nation building.",
    ],
    buttonText: "Vision",
    buttonBgColor: "bg-amber-400",
    imageUrl: vision,
  },

  mission: {
    title: "Our Mission",
    description: [
      "To create an educational environment that fosters curiosity, integrates rigorous inquiry, creative imagination, and reflective thought process for academic excellence.",
      "To inculcate integrity towards work place and social sensibility for a better society.",
      "To choose participative learning in creating wisdom over developing intelligence alone for pursuing successful career in diverse fields.",
      "To instill among students highest ethical standards and values with a sense of professionalism.",
      "To prepare undergraduate and postgraduate students who can take up future challenges of higher studies and research.",
    ],
    buttonText: "Mission",
    buttonBgColor: "bg-amber-400",
    imageUrl: mission,
  },

};

export const InstituteofNaturalSciencesandHumanitiesinstituteCourseCardData: CustomInstituteCourseCardProps[] = [
  {
    imageUrl: courseImg1,
    departmentName: "Faculty of Physical Sciences",
  },
  {
    imageUrl: courseImg2,
    departmentName: "Faculty of Chemical Sciences",
  },
  {
    imageUrl: courseImg3,
    departmentName: "Faculty of Mathematical and Statistical Sciences",
  },
  {
    imageUrl: courseImg4,
    departmentName: "Faculty of Humanities and Social Sciences",
  },
];
