import { customeOverViewType } from "../../../types/home-data-type";
import { counterDataType } from "../../home/counterData";
import visionImg from "../../../assets/images/academics/institutes/dept-vision.png";
import misionImg from "../../../assets/images/academics/institutes/dept-mission.png";

export const facultyofMEOverviewData: customeOverViewType = {
  heading: "Faculty of Mechanical Engineering",
  content: `The faculty of Mechanical Engineering started since the inception of the university. It is one of the biggest faculties of the university in terms of infrastructure. Its main objective is to prepare students for a broad range of career choices in the field of mechanical engineering and to transform bright students into technically skilled and industry oriented engineers. The faculty offers three tier programs - B.Tech., M.Tech., and Ph.D. It offers specialization in the area of thermal engineering, design engineering, production engineering and industrial engineering. The Mechanical Engineering Faculty has fully equipped labs and a semester-by-semester curriculum that is reinforced by hands-on labs covering all of the foundational theory areas. 

The syllabus is created with the needs of the industry in mind as well as practical and competitive considerations. For P.G. students, research-focused programs are provided, and online journals are accessible. The assessment procedure is transparent and constantly observed, with updates to all academic-related actions made on the ERP system. Additionally, the department actively offers industry-driven programs and collaborates on a national and international level with a variety of organizations. By implementing cutting-edge teaching and learning strategies, encouraging faculty and students to publish high-caliber research, and assisting them in developing working models and prototypes based on the technical skills they have acquired throughout the course, FoME is constantly working to improve the teaching-learning process and environment.`,
};

export const counterDataFoFacultyOfMechanicalEngineering: counterDataType[] =
  [
    { id: 1, value: "2012", suffix: "", label: "Established" },
    { id: 2, value: "20", suffix: "", label: "Faculty & Staff" },
    { id: 3, value: "287", suffix: "", label: "Students" },
  ];

  export const facultyOfMechanicalEngineeringVMData = [
  {
    id: 1,
    bgColor: "#E5F3FC",
    img: misionImg,
    heading: "Mission",
    points: [
      "To educate individuals to become creative intuitive, industrious in both national and international arenas, instilled with global knowledge and abilities, and able to be leaders and pioneers in their field.",
      "To strive constantly to improve pedagogical methods employed in delivering the academic programs.",
      "To perform research and development activities that will contribute to science and technology and to respond effectively to the changing needs of the industry and the world.",
      "To provide beneficial service to the local, state, national and international communities and cultivate the spirit of entrepreneurship."
    ],
  },
  {
    id: 2,
    bgColor: "#FFF2D2",
    img: visionImg,
    heading: "Vision",
    points: [
      "To be a center of excellence in the field of Mechanical Engineering where the best of teaching, learning, research and innovations converge.",
    ],
  },
];
