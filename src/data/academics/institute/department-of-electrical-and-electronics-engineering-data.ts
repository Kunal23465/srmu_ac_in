import { customeOverViewType } from "../../../types/home-data-type";

import { counterDataType } from "../../home/counterData";
import drrsbajpai from "../../../assets/images/academics/institutes/dr.r.s.bajpai.jpg";

import visionImg from "../../../assets/images/academics/institutes/dept-vision.png";
import misionImg from "../../../assets/images/academics/institutes/dept-mission.png";

export const instituteOverviewData: customeOverViewType = {
  heading: "Department of Electrical and Electronics Engineering",
  content: `The department of Electrical & Electronics Engineering was established in 2012. Currently department is offering undergraduate, post graduate and doctorate programmes in various specialized disciplines of electrical & electronics engineering, EV field, Renewable energy, artificial intelligence, machine learning, drone technology and microelectronics are the emerging field & field of the near future.

Department has started EV specialization programme in association with Morris Garages (MG) motors & ISIE, IoT & Artificial Intellegence with IBM. Programs are designed by industry experts with prime focus on practical industrial skill development towards E-Mobility and embedded systems. The department of Electrical & Electronics Engineering has well qualified faculty members and most faculty members hold PG/doctorate from reputed institutes like IIT Delhi, IIT Roorkee, IIT BHU and NIT Allahabad to name a few. Faculty members have specialization in diverse fields of Electrical & Electronics Engineering such as Power systems, Electrical Machines, Electrical Drives, High Voltage Engineering, Control systems, Instrumentation, Renewable Energy, Image Processing, Microwave Engineering, Absorbers and Patch Antennas, Virtual Instrumentation, Signal Processing, Information Theory & Coding and Digital Communication, competency in 5G technology with EIT, Melbourne Austrlia. Department has industrial and academic collaboration with TATA Motors, ISIE India, L&T and engineering Institute of technology (EIT), Melbourne Austrlia. SRMU in collaboration with EIT offers various programs such as Data Communication & Industrial IT, Electronics Engineering, Industrial automation, Instrumentation and process control, under graduate certificates, Advance Diplomas etc, where students can join online programs.

The faculty members have published significant number of research articles in International Journals, IEEE Transactions and in the Proceedings of various International and National Seminars, Conferences, Symposia and Workshops. The faculty members have also published several book chapters and prepared online teaching aid. The theoretical knowledge is further supplemented by well-equipped laboratories.

Department is equipped with latest state of art laboratories for electrical machines, power electronics, electric drives, power systems, control systems, micro-processor & microcontroller, electrical engineering, measurements and instrumentation and renewable energy with excellent computing facilities such as Scilab, Labview & PLC/SCADA software’s.`,
};

export const instituteFooterData = [
  {
    content: `Want to learn more about SRMU?`,
    btnText: "Request Registration",
  },
];

export const counterDataForDepartmentOfElectricalAndElectronicsEngineering: counterDataType[] =
  [
    { id: 1, value: "2012", suffix: "", label: "Established" },
    { id: 2, value: "24", suffix: "", label: "Faculty & Staff" },
    { id: 3, value: "215", suffix: "", label: "Students" },
  ];

// department-of-electrical-and-electronics-engineering-data.ts

// export const missionandvisionofelectricalandelectronicsengineering: VisionMissionProps =
//   {
//     mission: {
//       title: "Mission",
//       description: [
//         "To prepare engineering graduates with deep understanding of the fundamentals of Electrical & Electronics Engineering.",
//         "To collaborate with industry, research organizations and academia for encouraging creativity and innovation.",
//         "To achieve excellence in teaching and to provide a platform for developing new products and systems that can help industry and society as a whole.",
//       ],
//       buttonText: "Our Mission",
//       buttonBgColor: "bg-blue-300",
//       imageUrl: "mission-image-url.png",
//       bgColor: "#E9F4FF",
//     },
//     vision: {
//       title: "Vision",
//       description: [
//         "To impart quality education in the field of Electrical & Electronics Engineering and to produce globally competent engineers to serve the society.",
//       ],
//       buttonText: "Our Vision",
//       buttonBgColor: "bg-yellow-300",
//       imageUrl: "vision-image-url.png",
//       bgColor: "#FFF8EA",
//     },
//   };

export const departmentHeadProfileData= {
  name: "Prof. (Dr.) N.S. Bajpai",
  title: "Department Head",
  designation: "Dean, FoEEE, SRMU, Lucknow-Deva Road",
  office: "",
  imageSrc: drrsbajpai,
  experienceTotal: "30+ years",
  profileButtonText: "VIEW PROFILE",
  profileButtonLink: "",
  achievements: [
    "**Qualification:** M.Tech. (Power Electronics), Ph.D. (Renewable Energy)",
    "**Specialization/ Area of Research:** Power Electronics, Power Quality, Renewable Energy and Electric Vehicle Technology",
    "**Email ID:** dean.eee@srmu.ac.in, nsbajpai.eee@srmu.ac.in",
    "**ORCID ID:** https://orcid.org/0000-0001-6117-1756",
    "**Contact No.:** +91-6319859195",
  ],

  backgroundColor: "bg-[#224984]",
};

const misiondata= {
  title: "Mission",
  description: [
    "To prepare engineering graduates with deep understanding of the fundamentals of Electrical & Electronics Engineering.",
    "To collaborate with industry, research organizations and academia for encouraging creativity and innovation.",
    "To achieve excellence in teaching and to provide a platform for developing new products and systems that can help industry and society as a whole.",
  ],

  imageUrl: misionImg,
  bgColor: "#E9F4FF",
};

const visiondata = {
 
      title: "Vision",
      description: [
        "To impart quality education in the field of Electrical & Electronics Engineering and to produce globally competent engineers to serve the society.",
      ],
      imageUrl: visionImg,
      bgColor: "#FFF8EA",
    
};


export const missionandvisionofelectricalandelectronicsengineering = {
  vision: visiondata,
  mission: misiondata,
  backgroundColor: "#E9F4FF",
};
