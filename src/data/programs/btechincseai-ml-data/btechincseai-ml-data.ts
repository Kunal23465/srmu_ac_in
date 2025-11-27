import { WhyCardProps } from "../../../components/programs/btechinCSEAIandML/WhyCardComp";
import { customeOverViewType } from "../../../types/home-data-type";
import { counterDataType } from "../../home/counterData";
import { FileCheck, School, BookOpen } from "lucide-react";
import img1 from "../../../assets/images/programs/btechincseaiandml/continuous-evaluation-system-15122301313957-211223-1505241033464.png"
import img2 from "../../../assets/images/programs/btechincseaiandml/continuous-evaluation-system-15122301313957-211223-15052410351265.png"
import img3 from "../../../assets/images/programs/btechincseaiandml/continuous-evaluation-system-15122301313957-211223-15052410353556.png"
import img4 from "../../../assets/images/programs/btechincseaiandml/opportunity-to-work-on-live-projects-1512230130556-15052410344778.png"
import img5 from "../../../assets/images/programs/btechincseaiandml/project-based-experiential-learning-15122301311298-15052410340799.png"
import img6 from "../../../assets/images/programs/btechincseaiandml/specialized-curriculum-designed-by-the-industry-ex-15052410365972.png"






export const BtechCSEAIandMLOverviewData: customeOverViewType = {
    heading: "Overview",
    content:
        `
  <p>
  The B.Tech. Computer Science and Engineering program at SRMU with a specialization in Artificial Intelligence and Machine Learning offers students an immersive learning experience at the forefront of technological innovation. Through a comprehensive curriculum, students delve into the intricacies of AI and ML, mastering algorithms, data mining, pattern recognition, and more.
  </p>
  <br/>
  <p>
  This specialized track equips graduates with the skills and knowledge to develop intelligent systems, analyze complex datasets, and create innovative solutions that drive advancements in various industries, from healthcare and finance to autonomous vehicles and robotics. With hands-on projects, industry collaborations, and expert faculty guidance, students emerge as proficient professionals ready to tackle real-world challenges in the dynamic field of AI and ML.
  </p>
  <br/>
  <strong>Understanding Artificial Intelligence:</strong>
  <br/>
  <p>
  Artificial intelligence revolutionizes industries by simulating human intelligence in machines, empowering them to perform tasks that typically require human intervention. It encompasses various technologies like machine learning, natural language processing, and computer vision, enabling systems to learn, reason, and problem-solve autonomously.
  </p>
  <br/>
  <p>
  AI applications range from virtual assistants and recommendation systems to autonomous vehicles and medical diagnosis, driving innovation across sectors. As AI continues to evolve, its ethical implications, societal impact, and responsible deployment remain critical considerations in shaping its future.
  </p>
  <br/>
  <strong>Understanding Machine Learning:</strong>
  <br/>
  
  <p>
  Machine learning, a subset of artificial intelligence, empowers systems to learn from data and improve over time without explicit programming. It utilizes algorithms to analyze large datasets, identify patterns, and make predictions or decisions autonomously. From personalized recommendations on streaming platforms to fraud detection in banking, machine learning permeates diverse domains, optimizing processes and enhancing efficiency.
  </p>
  <br/>
  <p>
  As it continues to advance, understanding its principles and applications becomes increasingly essential in driving innovation and solving complex problems.
  </p>
  <br/>
  <p>
  Ramswaroop graduates get the advantage of gaining most comprehensive practical understanding of these futuristic technologies. The program is led by expert instructors who go on to expose the students to the fundamentals of NLP, AutoML, Quantum Computing, Data Preprocessing and Feature Engineering, Neural Networks and Deep Learning, Computer Vision, Reinforcement Learning and many more.
  </p>
  <br/>
  <p>
  SRMU is one of the best College for <strong>B.Tech. in CSE (Artificial Intelligence & Machine Learning)</strong>in Lucknow, Uttar Pradesh providing endless opportunities in this dynamic world of computing.
  </p>
  `
};



export const counterDataForBtechinCSEAIandML: counterDataType[] = [
    { id: 1, value: "NAAC", suffix: "", label: "Accredited" },
    { id: 2, value: "30", suffix: "LPA", label: "Highest Package" },
    { id: 3, value: "100", suffix: "%*", label: "Placement" },
    { id: 4, value: "30", suffix: "%", label: "Students have multiple job offers" },
];


// whyData.ts



export const whyData: WhyCardProps[] = [
    {
        img: img1,
        text: "Continuous evaluation system providing students several opportunities to improve their grades",
    },
    {
        img: img5,
        text: "Modules as per NEP for developing industry required skills",
    },
    {
        img: img4,
        text: "Curriculum developed by the experts from industry and university researchers",
    },
    {
        img: img1,
        text: "Multiple levels of industry certification",
    },
    {
        img: img1,
        text: "32 hours of blended teaching hours for every module to meet industry expectations",
    },
    {
        img: img5,
        text: "Sessions and lectures by industry leaders for experiential acquaintance to enhance learning",
    },
    {
        img: img4,
        text: "Industry sponsored labs for providing the best hands-on knowledge exposure",
    },
    {
        img: img6,
        text: "Opportunities to work on LIVE projects of IT Companies",
    },
    {
        img: img1,
        text: "350+ exclusive learning hours in industry hub",
    },
    {
        img: img5,
        text: "Student feedback mechanism for improving learning experience",
    },

    {
        img: img4,
        text: "Host of clubs to provide a platform for creativity",
    },
];