
import pankaj from "../../../assets/images/about/leadershipGovernance/pankaj.png";
import pooja from "../../../assets/images/about/leadershipGovernance/pooja.png";
import vijaytiwari from "../../../assets/images/about/leadershipGovernance/vijaytiwari.jpeg"
import dixit from "../../../assets/images/about/leadershipGovernance/dixit.jpg"
import neerja from "../../../assets/images/about/leadershipGovernance/neerja.jpg"
import ritu from "../../../assets/images/about/leadershipGovernance/ritu.jpg"
import jaiswal from "../../../assets/images/about/leadershipGovernance/jaiswal.jpg"
import manju from "../../../assets/images/about/leadershipGovernance/manju.jpg"
import sachin from "../../../assets/images/about/leadershipGovernance/sachin.png"
import amit from "../../../assets/images/about/leadershipGovernance/amit.png"
import chauhan from "../../../assets/images/about/leadershipGovernance/chauhan.png"
import justice from "../../../assets/images/about/leadershipGovernance/justice.png"
import pragati from "../../../assets/images/about/leadershipGovernance/pragati.png"
import balraj from "../../../assets/images/about/leadershipGovernance/balraj.png"
import kiran from "../../../assets/images/about/leadershipGovernance/kiran.png"
import defaultimg from "../../../assets/images/about/leadershipGovernance/defaultimg.png"
import rajeev from "../../../assets/images/about/leadershipGovernance/rajeev.png"
import rastogi from "../../../assets/images/about/leadershipGovernance/rastogi.png"
import shanoli from "../../../assets/images/about/leadershipGovernance/shanoli.png"
import { customeOverViewType } from "../../../types/home-data-type";

import ansingh from "../../../assets/images/about/leadershipGovernance/ansingh.png";
import jitendraagrawal from "../../../assets/images/about/leadershipGovernance/jitendraagarwal.png";
import rakeshjain from "../../../assets/images/about/leadershipGovernance/rakeshjain.png";
import riturajmishra from "../../../assets/images/about/leadershipGovernance/riturajmishra.png";
import abhabishnoi from "../../../assets/images/about/leadershipGovernance/abhabishnoi.png";
import riteshkhanna from "../../../assets/images/about/leadershipGovernance/riteshkhanna.png";
import bobbylyall from "../../../assets/images/about/leadershipGovernance/bobbylyall.png";
import sksingh from "../../../assets/images/about/leadershipGovernance/sksingh.jpg";
import rsbajpai from "../../../assets/images/about/leadershipGovernance/rsbajpai.jpg";
import alokeshagarwal from "../../../assets/images/about/leadershipGovernance/alokeshagarwal.jpg";
import rajeshporwal from "../../../assets/images/about/leadershipGovernance/rajeshporwal.jpg";
import krishnasrivastava from "../../../assets/images/about/leadershipGovernance/krishnasrivastava.jpg";
import vnpathak from "../../../assets/images/about/leadershipGovernance/vnpathak.png";
import ramgopalsingh from "../../../assets/images/about/leadershipGovernance/ramgopalsingh.png";
import madhudixit from "../../../assets/images/about/leadershipGovernance/madhudixit.png";
import bineetgupta from "../../../assets/images/about/leadershipGovernance/bineetgupta.jpg";
import rdyadav from "../../../assets/images/about/leadershipGovernance/rdyadav.png";
import tabishqidwai from "../../../assets/images/about/leadershipGovernance/tabishqidwai.png";
import akankshanigam from "../../../assets/images/about/leadershipGovernance/akankshanigam.jpg";
import amittrivedi from "../../../assets/images/about/leadershipGovernance/amittrivedi.png";
import abhishek from "../../../assets/images/about/leadershipGovernance/abhishek.jpg";



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
    name: "Prof. (Dr.) Vijay Tiwari",
    title: "Vice Chancellor",
    image: vijaytiwari,
    description: [
      "At SRM University, we are committed to nurturing future-ready professionals through a dynamic and holistic education ecosystem that fully aligns with the vision of the National Education Policy (NEP) 2020.",
      "Our academic framework emphasizes flexibility, multidisciplinary learning, and experiential education, ensuring that every student is equipped with the knowledge, creativity, and critical thinking skills essential for success in a rapidly evolving world.",
      "We take pride in offering programs that are closely aligned with industry requirements, designed in consultation with experts and delivered through hands-on learning, internships, and research-driven pedagogy.",
      "Our goal is to bridge the gap between academia and the professional world, preparing our students to become leaders, innovators, and entrepreneurs.",
      "SRM University provides a safe, inclusive, and secure campus environment, fostering a culture of respect, collaboration, and intellectual curiosity.",
      "We believe education is not just about knowledge—it is about empowering young minds to create, innovate, and transform the world for the better."
    ],
    styleType: "StyleA",
  },
  {
    name: "Prof. (Dr.) Neerja Jindal",
    title: "Registrar",
    image: neerja,
    description: [
      "Education is the pathway to a meaningful and socially productive life, fostering success, stability and growth.In today's fast-changing world, where new skills and strategies are in demand, education stands as the most powerful tool to meet emerging societal needs.",
      "At SRMU, we are dedicated to shaping young minds that can transform the world for the better.",
      "Our goal is to be a reservoir of learning that nurtures the potential and possibilities of students, and equips them with the tools to build brighter futures.",
      "‘Learning is not attained by chance, it must be sought for with ardor and attended to with diligence’ — and providing this diligence and fostering a passion for learning is our top priority.",
      "Let's embrace the art of learning, educate, and create a world full of opportunities together."
    ],
    styleType: "StyleA",
  },
];



export const LeadershiOverviewData: customeOverViewType = {
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


export const academicCouncilData: Member[] = [
  {
    name: "Prof. (Dr.) Vijay Tiwari",
    title: "(Chairman)",
    position: "Vice Chancellor, SRMU, Lucknow–Deva Road",
    image: vijaytiwari,
  },
  {
    name: "Prof. (Dr.) Pragati Kumar",
    title: "(Nominated Member)",
    position: "Vice Chancellor, SMVDU, J&K",
    image: pragati,
  },
  {
    name: "Prof. (Dr.) A.N. Singh",
    title: "(Nominated Member)",
    position: "Former Professor, DSW, University of Lucknow, Lucknow",
    image: ansingh,
  },
  {
    name: "Dr. Jitendra Agrawal",
    title: "(Nominated Member)",
    position: "Director, SoIT, RGPV, Bhopal, MP",
    image: jitendraagrawal,
  },
  {
    name: "Dr. Rakesh Kumar Jain",
    title: "(Nominated Member)",
    position: "Principal, RSCOE, Pune, Maharashtra",
    image: rakeshjain,
  },
  {
    name: "Mr. Rituraj Mishra",
    title: "(Nominated Member)",
    position: "HR, Tata Motors, Lucknow",
    image: riturajmishra,
  },
  {
    name: "Prof. (Dr.) Abha Bishnoi",
    title: "(Nominated Member)",
    position: "Professor, Dept. of Chemistry, University of Lucknow, Lucknow",
    image: abhabishnoi,
  },
  {
    name: "Er. Ritesh Khanna",
    title: "(Nominated Member)",
    position: "Project Manager, SRDT, Lucknow",
    image: riteshkhanna,
  },
  {
    name: "Dr. Bobby W. Lyall",
    title: "(Nominated Member)",
    position: "Professor & Head, Dept. of Management, SRCEM, Lucknow",
    image: bobbylyall,
  },
  {
    name: "Prof. (Dr.) B.M. Dixit",
    title: "(Ex-Officio Member)",
    position: "Director, NSH, SRMU, Lucknow–Deva Road",
    image: dixit,
  },
  {
    name: "Prof. (Dr.) Manju Pandey",
    title: "(Ex-Officio Member)",
    position: "Director, IQAC, SRMU, Lucknow–Deva Road",
    image: manju,
  },
  {
    name: "Prof. (Dr.) Ritu Chandra",
    title: "(Ex-Officio Member)",
    position: "Director, IQAC & Principal, IER, SRMU, Lucknow–Deva Road",
    image: ritu,
  },
  {
    name: "Prof. (Dr.) Abhishek Saxena",
    title: "(Ex-Officio Member)",
    position: "Dy. Director, IQAP & Dean FoCE, SRMU, Lucknow–Deva Road",
    image: abhishek,
  },
  {
    name: "Dr. Rajeev Kumar",
    title: "(Ex-Officio Member)",
    position: "Dean, CoE & Dean, SRMU, Lucknow–Deva Road",
    image: rajeev,
  },
  {
    name: "Mr. S.K. Singh",
    title: "(Ex-Officio Member)",
    position: "Deputy Director, Polytechnic, SRMU, Lucknow–Deva Road",
    image: sksingh,
  },
  {
    name: "Prof. (Dr.) R.S. Bajpai",
    title: "(Ex-Officio Member)",
    position: "Dean, FoECE, SRMU, Lucknow–Deva Road",
    image: rsbajpai,
  },
  {
    name: "Dr. Alokesh Agarwal",
    title: "(Ex-Officio Member)",
    position: "Dean, DoECE & Convenor, CIIE, SRMU, Lucknow–Deva Road",
    image: alokeshagarwal,
  },
  {
    name: "Dr. Rajesh Kumar Porwal",
    title: "(Ex-Officio Member)",
    position: "Dean, FoME, SRMU, Lucknow–Deva Road",
    image: rajeshporwal,
  },
  {
    name: "Prof. (Dr.) Krishna Srivastava",
    title: "(Ex-Officio Member)",
    position: "Dean, FoMS, SRMU, Lucknow–Deva Road",
    image: krishnasrivastava,
  },
  {
    name: "Prof. (Dr.) V.N. Pathak",
    title: "(Ex-Officio Member)",
    position: "Dean, FoHS, SRMU, Lucknow–Deva Road",
    image: vnpathak,
  },
  {
    name: "Dr. Ram Gopal Singh",
    title: "(Ex-Officio Member)",
    position: "Dean, FoPS, SRMU, Lucknow–Deva Road",
    image: ramgopalsingh,
  },
  {
    name: "Prof. (Dr.) Madhu Dixit",
    title: "(Ex-Officio Member)",
    position: "HoD, Management, SRMU, Lucknow–Deva Road",
    image: madhudixit,
  },
  {
    name: "Prof. (Dr.) Bineet Kumar Gupta",
    title: "(Ex-Officio Member)",
    position: "HoD, SRMU, Lucknow–Deva Road",
    image: bineetgupta,
  },
  {
    name: "Dr. R.D. Yadav",
    title: "(Ex-Officio Member)",
    position: "Librarian, SRMU, Lucknow–Deva Road",
    image: rdyadav,
  },
  {
    name: "Dr. Tabish Qidwai",
    title: "(Ex-Officio Member)",
    position: "Dy. Director, IST, SRMU, Lucknow–Deva Road",
    image: tabishqidwai,
  },
  {
    name: "Prof. (Dr.) Akanksha Nigam",
    title: "(Ex-Officio Member)",
    position: "CoE, SRMU, Lucknow–Deva Road",
    image: akankshanigam,
  },
  {
    name: "Dr. Amit Trivedi",
    title: "(Special Invitee)",
    position: "Asst. Prof., MCE & Coordinator, Acad., SRMU, Lucknow–Deva Road",
    image: amittrivedi,
  },
  {
    name: "Prof. (Dr.) Neerja Jindal",
    title: "(Member Secretary)",
    position: "Registrar, SRMU, Lucknow–Deva Road",
    image: neerja,
  },
];
