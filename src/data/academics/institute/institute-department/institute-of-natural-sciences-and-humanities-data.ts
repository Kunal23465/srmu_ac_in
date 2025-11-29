import { customeOverViewType } from "../../../../types/home-data-type";
import vision from "../../../../assets/images/academics/institutes/vision-card/Our-vision-13102304415245.png";
import mission from "../../../../assets/images/academics/institutes/vision-card/Our-Mission-13102304092698.png";
import { CustomInstituteCourseCardProps } from "../../../../utils/custom/CustomInstituteCoursesCard";
import courseImg1 from "../../../../assets/images/academics/departments/physics1-07022411301098.jpg";
import courseImg2 from "../../../../assets/images/academics/departments/chemisty-07052401043586.jpg";
import courseImg3 from "../../../../assets/images/academics/departments/maths-07022411311165.jpg";
import courseImg4 from "../../../../assets/images/academics/departments/social-science-07052401093595.jpg";
import { InstituteProfile } from "../../../../types/profile-data-type";
import BMdixitImg from "../../../../assets/images/academics/departments/prof.-b-m-dixit-photo-10062510410818.jpg"
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
      "To prepare undergraduate and postgraduate students who can take up future challenges of higher studies and research.",
    ],
    buttonText: "Mission",
    buttonBgColor: "bg-amber-400",
    imageUrl: mission,
  },

};

export const InstituteofNaturalSciencesandHumanitiesinstituteProfiles: InstituteProfile[] = [
  {
    id: 1,
    title: "Institute Head",
    name: "Prof. (Dr.) B.M. Dixit",
    position: "Director, INSH, SRMU, Lucknow-Deva Road",
    image: BMdixitImg,

    summary:
      "",

    detailsHeading: "",
    useBullets: false,

    details: [
      "**Qualification: **M.Sc. (Physics), M.Sc. (Maths), Ph.D.",
      "**Experience**: 20+ years",
      "**Specialization/ Area of Research: **Nuclear Structure Physics and Medical Physics",
      "**Email ID: **director.insh@srmu.ac.in, director.sw@srmu.ac.in, bmdixit.ph@srmu.ac.in",
      "**ORCID ID: **https://orcid.org/0000-0002-3490-9162",
      "**Contact No.: **+91-9554966267",
    ],

    modalContent: `Dr. Bhanu Mani Dixit is Professor in Faculty of Physical Sciences and also holds position of Director – Student Welfare. He after earning two Postgraduate degrees first in Physics and then in Mathematics, obtained his Ph.D degree in cross-disciplinary topic of double beta decay which deals theoretically - nuclear structure frameworks and neutrino physics. His philosophy about effective teaching is that it requires understanding of a subject to a level which is appropriate for the transference of knowledge from the teacher’s perspective to that of the students. Further, he acknowledges the importance of innovation in delivery style apart from the up gradation of knowledge.

For past two decades, he has taught over a dozen different courses at Undergraduate and Postgraduate levels, wrote popular science articles and delivered popular lectures, presented and published many research papers in conferences and in peer reviewed journals respectively. His current research interest includes medical physics and academic planning in higher education. To pursue his research interest, he is also guiding couple of students for a Ph.D. degree.

Being associated with the present group since its inception way back in 2001, he was among the very few who were entrusted to raise this University in 2011 as a center of universal learning. His academic outlook towards teaching methodology, faculty constitution is to create conducive environment for academic learning, while in administration his active role in team building and establishing harmonious accord amongst hundreds of faculty members and thousands of students is pivotal and all inclusive.`
  },


]; 

export const InstituteofNaturalSciencesandHumanitiesinstituteCourseCardData: CustomInstituteCourseCardProps[] = [
  {
    imageUrl: courseImg1,
    departmentName: "Faculty of Physical Sciences",
    path: "/academics/institutes-info/faculty-of-physical-sciences",
  },
  {
    imageUrl: courseImg2,
    departmentName: "Faculty of Chemical Sciences",
    path: "/academics/institutes-info/faculty-of-chemical-sciences",
  },
  {
    imageUrl: courseImg3,
    departmentName: "Faculty of Mathematical and Statistical Sciences",
    path: "/academics/institutes-info/faculty-of-mathematical-and-statistical-sciences",
  },
  {
    imageUrl: courseImg4,
    departmentName: "Faculty of Humanities and Social Sciences",
    path: "/academics/institutes-info/faculty-of-humanities-and-social-sciences",
  },
];
