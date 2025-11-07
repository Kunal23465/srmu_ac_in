import nagendra from "../../../assets/images/about/message/nagendra.png";
import bhavnesh from "../../../assets/images/about/message/bhavnesh.png";
import pankaj from "../../../assets/images/about/message/pankaj.png";
import pooja from "../../../assets/images/about/message/pooja.png";
import vijaytiwari from "../../../assets/images/about/message/vijaytiwari.jpeg"
import dixit from "../../../assets/images/about/message/dixit.jpg"
import neerja from "../../../assets/images/about/message/neerja.jpg"
import ritu from "../../../assets/images/about/message/ritu.jpg"
import jaiswal from "../../../assets/images/about/message/jaiswal.jpg"
import manju from "../../../assets/images/about/message/manju.jpg"
import sachin from "../../../assets/images/about/message/sachin.png"
import amit from "../../../assets/images/about/message/amit.png"
import chauhan from "../../../assets/images/about/message/chauhan.png"
import justice from "../../../assets/images/about/message/justice.png"
import pragati from "../../../assets/images/about/message/pragati.png"
import balraj from "../../../assets/images/about/message/balraj.png"
import kiran from "../../../assets/images/about/message/kiran.png"
import defaultimg from "../../../assets/images/about/message/defaultimg.png"
import rajeev from "../../../assets/images/about/message/rajeev.png"
import rastogi from "../../../assets/images/about/message/rastogi.png"
import shanoli from "../../../assets/images/about/message/shanoli.png"


import icon1 from "../../../assets/images/about/message/icon1.png";
import icon2 from "../../../assets/images/about/message/icon2.png";
import icon3 from "../../../assets/images/about/message/icon3.png";
import icon4 from "../../../assets/images/about/message/icon4.png";
import { customeOverViewType } from "../../../types/home-data-type";
export interface counterDataType {
  id: number;
  icon?: string;
  value: string;
  label: string;
  suffix: string;
}

export interface Member {
  name: string;
  title: string;
  position: string;
  image: string;
}

export const profileData = [
  {
    name: "Er. Pankaj Agarwal",
    title: "Executive Director",
    image: pankaj,
    description: [
      "SRMCEM is committed to make available the best of education to the aspiring professionals. Here pursuit to excellence is a way of life. The sensitivity and thoughtfulness of its managerial leadership and value based performance initiatives of its faculty community has made this institution come a long way. SRMCEM is an expedition of quality professional education interspersed with a variety of co-curricular and extra-curricular activities of its own kind that obviously go beyond the conventional class room limitations. I am sure our students will keep achieving still greater heights and contribute to society as a good professional and a good citizen.",
    ],
    styleType: "StyleB",
  },

  {
    name: "Er. Pooja Agarwal",
    title: "Additional Executive Director",
    image: pooja,
    description: [
      "At Shri Ramswaroop Memorial University (SRMU) we believe in the power of hardwork as a driving factor of success. We have faith that this institute will make you someone who is not afraid of working hard and going that extra mile which is what makes our students into pillars of the nation. It is our goal to make you into a student with a well-rounded personality, passion for driving change and most importantly keep you grounded in your culture. SRMCEM believes in making students into proud Indians who know their roots and have their wings in the sky.",
    ],
    styleType: "StyleB",
  },
  {
    name: "Mr. Nagendra Kumar Agarwal",
    title: "Secretary",
    image: nagendra,
    description: [
      "SRMCEM strives for distinction through its institutional culture, passion for innovation and academic integrity evoking trust and credibility.",
      "After all, institutions are not made in a day. The college has made incessant efforts in improvising systems befitting to its students.",
      "It offers its students a complete career building platform to make them hone up their skills, develop knowledge and nurture values.",
    ],
    styleType: "StyleA",
  },
  {
    name: "Prof. (Dr.) Bhavesh Kumar Chauhan",
    title: "Group Director",
    image: bhavnesh,
    description: [
      "A successful career doesn’t happen by chance. The grit to be successful needs guidance and proper format to take shape and crystallize itself.",
      " SRMCEM ensure pertinent benchmarks, quality management systems, and innovative facilities to meet the aspirations of its students.",
      "Our well-qualified faculty members are incessantly engaged in enhanced teaching and learning.",
    ],
    styleType: "StyleA",
  },
];





export const counterDataForMessagepage: counterDataType[] = [
  { id: 1, icon: icon1, value: "10", suffix: "+", label: "Department" },
  { id: 2, icon: icon2, value: "20", suffix: "+", label: "Programs" },
  { id: 3, icon: icon3, value: "200", suffix: "+", label: "Academicians" },
  { id: 4, icon: icon4, value: "3700", suffix: "+", label: "Students" },
];
export const counterDataForAboutPage: counterDataType[] = [
  { id: 1, value: "3700", suffix: "+", label: "Students Enrolled" },
  { id: 2, value: "20", suffix: "+", label: "Courses Uploaded" },
  { id: 3, value: "1100", suffix: "+", label: "People Certificate" },
  { id: 4, value: "200", suffix: "+", label: "Global Teachers" },
];
export const counterDataForHomePage: counterDataType[] = [
  { id: 1, value: "20", suffix: "+", label: "Years Of Experience" },
  { id: 2, value: "20", suffix: "+", label: "Number Of Courses" },
  { id: 3, value: "3700", suffix: "+", label: "Students" },
  { id: 4, value: "1000", suffix: "+", label: "Number Of Placements" },
];
export const counterDataFoPlacementTrainingPage: counterDataType[] = [
  { id: 1, value: "500", suffix: "+", label: "Companies Visited" },
  { id: 2, value: "5000", suffix: "+", label: "Job Offers" },
  { id: 3, value: "88", suffix: "%", label: "Placement" },
];



export const MessageOverviewData: customeOverViewType = {
  heading: "Leaders Vision",
  content:
    "Established in 1998 by distinguished alumni and Gold Medalists from IIT Kanpur, SRMCEM embarked on an extraordinary journey. Our innovative leadership team sought to develop a globally esteemed institution that not only delivers knowledge but also promotes ethical values and encourages social and environmental consciousness.",
};

export const CustomTopFooterData1 = [
  {
    content: ` Unlock your potential and shape your future`,
    btnText: "Register Now",
  },
];


export const governingBodyData: Member[] = [
  {
    name: "Er. Pankaj Agarwal",
    title: "(Chairman)",
    position: "Chancellor, SRMU, Lucknow–Deva Road",
    image: pankaj,
  },
  {
    name: "Er. Pooja Agarwal",
    title: "(Vice Chairperson)",
    position: "Pro Chancellor, SRMU, Lucknow–Deva Road",
    image: pooja,
  },
  {
    name: "Prof. (Dr.) Vijay Tiwari",
    title: "(Member)",
    position: "Vice Chancellor, SRMU, Lucknow–Deva Road",
    image: vijaytiwari,
  },
  {
    name: "Mr. Sachin Agarwal",
    title: "(Nominated Member)",
    position: "MD, PTC Industries Ltd., Lucknow",
    image: sachin,
  },
  {
    name: "Adv. Amit Jaiswal",
    title: "(Nominated Member)",
    position: "Advocate, High Court of Judicature, Allahabad",
    image: amit,
  },
  {
    name: "Prof. (Dr.) B.M. Dixit",
    title: "(Nominated Member)",
    position: "Director, INSH, SRMU, Lucknow–Deva Road",
    image: dixit,
  },
  {
    name: "Prof. (Dr.) Ritu Chandra",
    title: "(Nominated Member)",
    position: "Director, IQAC & Principal, IER, SRMU, Lucknow–Deva Road",
    image: ritu,
  },
  {
    name: "Mr. R.K. Jaiswal",
    title: "(Special Invitee)",
    position: "Finance Officer, SRMU, Lucknow–Deva Road",
    image: jaiswal,
  },
  {
    name: "Prof. (Dr.) Neerja Jindal",
    title: "(Member Secretary)",
    position: "Registrar, SRMU, Lucknow–Deva Road",
    image: neerja,
  },
];


export const executiveCouncilData: Member[] = [
  {
    name: "Prof. (Dr.) Vijay Tiwari",
    title: "(Chairman)",
    position: "Vice Chancellor, SRMU, Lucknow–Deva Road",
    image: vijaytiwari,
  },
  {
    name: "Prof. (Dr.) D. S. Chauhan",
    title: "(Nominated Member)",
    position: "Pro Chancellor, GLA University, Mathura",
    image: chauhan,
  },
  {
    name: "Justice K.S. Rakhra",
    title: "(Nominated Member)",
    position: "Retd. Judge, High Court of Judicature, Allahabad",
    image: justice,
  },
  {
    name: "Prof. (Dr.) Pragati Kumar",
    title: "(Nominated Member)",
    position: "Vice Chancellor, SMVDU, J&K",
    image: pragati,
  },
  {
    name: "Prof. (Dr.) Balraj Chauhan",
    title: "(Nominated Member)",
    position: "Director, INSH, SRMU, Lucknow–Deva Road",
    image: balraj,
  },
  {
    name: "Mr. Kiron Chopra",
    title: "(Nominated Member)",
    position: "Chairman & MD, CBRPL & Member, CII Northern Region",
    image: kiran,
  },
  {
    name: "Mr. Ajay Agarwal",
    title: "(Nominated Member)",
    position: "Chief Engineer, UPPCL, Lucknow",
    image: defaultimg,
  },
  {
    name: "Mr. Rajeev Sharma",
    title: "(Nominated Member)",
    position: "Senior VP, IBM, Gurugram",
    image: rajeev,
  },
  {
    name: "Mr. Prabhat Ranjan",
    title: "(Nominated Member)",
    position: "DGM, HCL, Lucknow",
    image: defaultimg,
  },
  {
    name: "Mr. Sudhanshu Rastogi",
    title: "(Nominated Member)",
    position: "President, Vision StartUps, Lucknow",
    image: rastogi,
  },
  {
    name: "Mr. Vishu Kumar Singhal",
    title: "(Nominated Member)",
    position: "MD, Kanheiho Avr Pvt Ltd., New Delhi",
    image: defaultimg,
  },
  {
    name: "Ms. Shamoli Agarwal",
    title: "(Ex-Officio Member)",
    position: "Director, Admissions, SRMU, Lucknow–Deva Road",
    image: shanoli,
  },
  {
    name: "Prof. (Dr.) B.M. Dixit",
    title: "(Ex-Officio Member)",
    position: "Director, INSH, SRMU, Lucknow–Deva Road",
    image: dixit,
  },
  {
    name: "Prof. (Dr.) Manju Pandey",
    title: "(Ex-Officio Member)",
    position: "Director, IQAC & Principal, IER, SRMU, Lucknow–Deva Road",
    image: manju,
  },
  {
    name: "Prof. (Dr.) Ritu Chandra",
    title: "(Ex-Officio Member)",
    position: "Director, IQAC & Principal, IER, SRMU, Lucknow–Deva Road",
    image: ritu,
  },
  
];
