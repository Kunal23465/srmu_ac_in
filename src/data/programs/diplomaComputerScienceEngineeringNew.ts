import type { ProgramPageDataNew } from "../../types/programPageNew";
import computerLabImage from "../../assets/images/new-labo/computer-centres.webp";
import computerTrainingImage from "../../assets/images/campus-life/facilities/computerlab-1302241158026.jpg";
import computerScienceImage from "../../assets/images/programs/btechincseaiandml/opportunities/computer-science1-03022411495890.jpg";
import diplomaMechanicalProductionNewData from "./diplomaMechanicalEngineeringProductionNew";

const diplomaComputerScienceEngineeringNewData: ProgramPageDataNew = {
  ...diplomaMechanicalProductionNewData,
  // Reuse the Production diploma page's layout, shared placement block, and curriculum artwork.
  designVariant: "cyber-security",

  heroBanner: {
    ...diplomaMechanicalProductionNewData.heroBanner,
    programLabel: "Diploma in Computer Science Engineering",
    specialization: "Computer Science Engineering",
    bannerAlt: "Computer science engineering and digital technology",
  },

  whyStudy: {
    year: "2027",
    heading: "Why Study a Diploma in Computer Science Engineering in 2027?",
    headingHighlight: "in 2027?",
    quote: "How do computer systems work, and how are software and digital applications developed?",
    paragraphs: [
      "Computer technology is now an essential part of almost every industry, from banking and healthcare to education, manufacturing, and communication. A Diploma in Computer Science Engineering helps students understand how computer systems work and how software and digital applications are developed.",
      "At SRMU, students are introduced to core areas of computing through academic instruction and practical learning in programming, computer fundamentals, databases, networking, and software concepts.",
      "Students looking for a diploma in computer science engineering in Lucknow can consider the quality of practical training, faculty support, curriculum, and opportunities for further learning. The programme also provides a foundation for eligible higher education pathways, including B.Tech lateral entry.",
    ],
    imageUrl: computerScienceImage,
    imageAlt: "Computer science and digital technology learning",
    benefitCards: [
      { title: "Strong Technical Foundation", description: "Learn programming, computer fundamentals, databases, networking, and software concepts." },
      { title: "Practical Computer Training", description: "Apply classroom concepts through programming exercises and computer laboratory sessions." },
      { title: "Industry-Oriented Learning", description: "Explore real-world applications of computer technology through projects and industry interactions." },
      { title: "Career and Higher Education Preparation", description: "Develop technical, analytical, communication, and problem-solving skills for career or further study." },
    ],
  },

  ltBenefits: {
    heading: "How Does Practical Learning Prepare Computer Science Engineering Students?",
    headingHighlight: "Computer Science Engineering Students?",
    overviewHeading: "Diploma in Computer Science Engineering",
    overviewHeadingHighlight: "at SRMU",
    overviewDescription: "The three-year diploma introduces students to computer systems, programming, databases, networks, and software through technical subjects, laboratory sessions, and project-based learning.",
    introText: "Computer Science Engineering continues to evolve alongside technology and industry requirements. At SRMU Polytechnic, students build practical understanding through programming exercises, laboratory sessions, projects, industry visits, workshops, seminars, and guest lectures. These activities help connect classroom learning with software and hardware applications and develop technical communication, teamwork, and problem-solving skills.",
    domainRows: [
      { tags: ["Programming Fundamentals", "Computer Systems", "Digital Techniques"] },
      { tags: ["Database Management", "Computer Networks", "Object-Oriented Programming"] },
      { tags: ["Software Engineering", "Web Technology", "Internet of Things"] },
    ],
    followUpText: "Practical assignments and project-based learning help students apply computing concepts, collaborate with others, and understand professional expectations in IT and technology environments.",
    projectsHeading: "Students develop practical understanding through:",
    projectsCol1: [
      { text: "Practising programming logic with C and Python" },
      { text: "Understanding computer systems and digital techniques" },
      { text: "Working with database concepts and records" },
      { text: "Exploring computer networks and connectivity" },
    ],
    projectsCol2: [
      { text: "Applying object-oriented programming concepts" },
      { text: "Learning software engineering fundamentals" },
      { text: "Building familiarity with web technology" },
      { text: "Exploring Internet of Things applications" },
    ],
    tableRows: [
      { label: "Programme", value: "Diploma in Computer Science Engineering" },
      { label: "Duration", value: "3 years · 6 semesters" },
      { label: "Entry Qualification", value: "Class 10 or equivalent" },
      { label: "Minimum Marks", value: "35% aggregate" },
      { label: "Learning Approach", value: "Computer laboratory, practical, and project-based learning" },
    ],
    tableBackgroundImageUrl: "/back2.png",
    artworkUrl: computerTrainingImage,
    artworkAlt: "Computer laboratory used for practical computer science training",
  },

  industryExposure: {
    sectionTitle: "Industry Exposure &",
    sectionTitleHighlight: "Project-Based Learning",
    introParagraph: "Along with academic learning, students need opportunities to understand how computing skills are used in professional environments. At SRMU Polytechnic, project-based learning, industry visits, workshops, seminars, and guest lectures help connect classroom knowledge with the requirements of IT and technology sectors.",
    expertSessionsHeading: "Projects, Workshops & Industry Interactions",
    expertSessionsParagraph: "These activities help students explore computer technology applications across industries, improve technical communication and teamwork, develop problem-solving skills, gain exposure to software and hardware applications, and understand professional expectations and workplace practices.",
    featuredCard: {
      badge: "Practical Learning",
      secondaryBadge: "COMPUTER SCIENCE",
      title: "Applying Computing Skills to Practical Work",
      presenter: "Programming exercises and project-based learning",
      imageUrl: computerScienceImage,
      paragraphs: ["Programming exercises, projects, workshops, and technical activities help students connect computer science concepts with practical applications."],
    },
    secondaryCards: [
      {
        badge: "Core Skill",
        icon: "code2",
        iconLabel: "PROGRAMMING",
        title: "Programming Fundamentals",
        presenter: "C and Python programming concepts",
        paragraphs: ["Build familiarity with programming logic, foundational coding concepts, and structured problem-solving."],
      },
      {
        badge: "Technical Learning",
        icon: "cpu",
        iconLabel: "COMPUTER SYSTEMS",
        title: "Computer Systems and Digital Techniques",
        presenter: "Hardware and computer fundamentals",
        paragraphs: ["Understand introductory computer hardware, system components, and digital techniques."],
      },
      {
        badge: "Applied Skills",
        icon: "settings",
        iconLabel: "SOFTWARE",
        title: "Software Engineering and Testing",
        presenter: "Software development fundamentals",
        paragraphs: ["Explore foundational software engineering concepts and the role of testing in application development."],
      },
      {
        badge: "Connected Technology",
        icon: "code",
        iconLabel: "NETWORKS & WEB",
        title: "Networks, Databases, and Web Technology",
        presenter: "Digital services and information systems",
        paragraphs: ["Develop a foundation in computer networks, database management, and web technology."],
      },
      {
        badge: "Emerging Applications",
        icon: "cpu",
        iconLabel: "INTERNET OF THINGS",
        title: "Internet of Things Applications",
        presenter: "Connected devices and digital systems",
        paragraphs: ["Explore introductory Internet of Things concepts and how connected devices interact with computer systems."],
      },
    ],
    departmentUrl: "/srmu-polytechnic-new",
    sectionBackgroundImageUrl: diplomaMechanicalProductionNewData.industryExposure.sectionBackgroundImageUrl,
  },

  // Placement image, statistics, and recruiter strip are shared with the reference programme page.
  placement: { ...diplomaMechanicalProductionNewData.placement },

  labs: {
    ...diplomaMechanicalProductionNewData.labs,
    sectionTitle: "Learn Computer Science Engineering",
    sectionTitleHighlight: "the Way Industry Works",
    introParagraph: "The Diploma in Computer Science Engineering introduces students to programming, computer systems, databases, networks, software engineering, and web technology. Practical exercises and laboratory work help students apply computing concepts to software and digital applications.",
    curriculumOverlayItems: [
      { text: "C Programming" },
      { text: "Python Programming" },
      { text: "Digital Techniques" },
      { text: "Database Management" },
      { text: "Computer Networks" },
      { text: "Object-Oriented Programming" },
      { text: "Software Engineering" },
      { text: "Web Technology & IoT" },
    ],
    curriculumSectionTitle: "Computer Science Engineering Curriculum",
    curriculumDescription: "The programme covers C Programming, Python Programming, Digital Techniques, Database Management Systems, Computer Networks, Object-Oriented Programming, Software Engineering, Web Technology, and the Internet of Things.",
    cardBackgroundImageUrl: computerLabImage,
    labsHeading: "Computer Science Engineering Laboratories",
    labsDescription: "Apply classroom concepts through programming exercises and practical sessions in computer systems, software, databases, and networks.",
    labs: [
      {
        label: "LAB / 01",
        title: "Computer Engineering Laboratory",
        imageUrl: computerLabImage,
        imageAlt: "Computer engineering laboratory and workstations",
        tagline: "Explore computer systems and engineering fundamentals.",
        description: "Develop practical familiarity with computer systems, components, and introductory engineering concepts.",
        items: ["Computer Fundamentals", "System Components", "Digital Techniques", "Operating Environments", "Laboratory Practice"],
      },
      {
        label: "LAB / 02",
        title: "Programming Laboratory",
        imageUrl: computerTrainingImage,
        imageAlt: "Students using computers for programming practice",
        tagline: "Practise programming logic and coding concepts.",
        description: "Apply programming fundamentals through structured exercises and introductory problem-solving tasks.",
        items: ["C Programming", "Python Programming", "Programming Logic", "Object-Oriented Concepts", "Coding Exercises"],
      },
      {
        label: "LAB / 03",
        title: "Computer System and Hardware Laboratory",
        imageUrl: computerLabImage,
        imageAlt: "Computer laboratory for learning computer systems and hardware",
        tagline: "Understand computer systems and their components.",
        description: "Build familiarity with computer system components, hardware concepts, and operating environments.",
        items: ["Computer Systems", "Hardware Fundamentals", "Peripheral Devices", "System Configuration", "Operating Systems"],
      },
      {
        label: "LAB / 04",
        title: "Database and Network Technology",
        imageUrl: computerScienceImage,
        imageAlt: "Digital computer science and network technology illustration",
        tagline: "Explore information systems and connectivity.",
        description: "Study database management concepts and the fundamentals of computer networks through guided practical work.",
        items: ["Database Management Systems", "Data Organisation", "Computer Networks", "Network Fundamentals", "Web Technology"],
      },
      {
        label: "LAB / 05",
        title: "Software Engineering and IoT",
        imageUrl: computerTrainingImage,
        imageAlt: "Computer workstation for software and IoT learning activities",
        tagline: "Connect software concepts with digital applications.",
        description: "Develop an introductory understanding of software engineering, application development, and Internet of Things concepts.",
        items: ["Software Engineering", "Application Concepts", "Internet of Things", "Testing Fundamentals", "Project Exercises"],
      },
    ],
  },

  yearJourney: {
    heading: "Your Journey from Student to Computer Science Professional",
    introParagraph: "The three-year Diploma in Computer Science Engineering takes students from computer and engineering fundamentals to programming, networks, software, and applied projects. Practical activities help students progressively develop the skills needed for further study or entry-level technical roles.",
    year1: {
      title: "Year 1 – Computing and Engineering Foundations",
      quote: "Build a foundation in engineering concepts, computer systems, and programming.",
      subjects: ["Engineering Mathematics", "Computer Fundamentals", "Digital Techniques", "C Programming"],
      practicalLearning: ["Use computer systems and common software environments", "Practise programming logic", "Understand basic digital concepts", "Develop foundational technical communication"],
      projects: ["Introductory C Programming Exercises", "Computer Fundamentals Assignment", "Digital Techniques Activities"],
      tools: ["Computer Workstations", "Programming Environments", "Digital Learning Tools"],
      outcome: "Develop a foundation in computer systems, engineering concepts, digital techniques, and programming logic.",
    },
    year2: {
      title: "Year 2 – Core Computing and Software Skills",
      quote: "Apply programming concepts to databases, networks, and software applications.",
      subjects: ["Python Programming", "Object-Oriented Programming", "Database Management Systems", "Computer Networks"],
      practicalLearning: ["Practise structured programming", "Explore database concepts and records", "Understand network fundamentals", "Apply object-oriented programming concepts"],
      projects: ["Python Programming Exercises", "Database Application Assignment", "Computer Network Study"],
      tools: ["Programming Environments", "Database Software", "Network Learning Tools"],
      outcome: "Strengthen practical understanding of programming, databases, and computer networking.",
    },
    year3: {
      title: "Year 3 – Applied Software and Career Readiness",
      quote: "Bring software, web, and connected technology concepts together through applied learning.",
      subjects: ["Software Engineering", "Web Technology", "Internet of Things", "Project Work"],
      practicalLearning: ["Explore software development fundamentals", "Develop familiarity with web technologies", "Study introductory Internet of Things applications", "Build communication, teamwork, and problem-solving skills"],
      projects: ["Web Technology Exercise", "Software Development Assignment", "Computer Science Project"],
      tools: ["Web Development Tools", "Software Applications", "Computer Laboratory Resources"],
      outcome: "Prepare to explore entry-level technical opportunities or eligible further education pathways, including B.Tech lateral entry.",
    },
  },

  fee: {
    description: "The currently published course fee is ₹57,000 per year. Additional charges may apply; confirm the applicable 2027–28 fee schedule with SRMU before admission.",
    feeRows: [
      { label: "Course Fee", yr1: "₹57,000", yr2: "₹57,000", yr3: "₹57,000" },
      { label: "Student Welfare Fund", yr1: "As applicable", yr2: "As applicable", yr3: "As applicable" },
      { label: "Caution Money", yr1: "As applicable", yr2: "—", yr3: "—" },
    ],
    feeNote: "Additional charges, including student welfare fund and first-year caution money, may apply. Confirm the 2027–28 fee structure before admission.",
  },

  poPsoPlo: {
    objectives: [
      { text: "Develop foundational knowledge of computer systems, programming, databases, networks, and software concepts." },
      { text: "Provide practical learning through programming exercises, laboratory sessions, and projects." },
      { text: "Build analytical, communication, teamwork, and problem-solving skills for technical environments." },
      { text: "Prepare students to explore entry-level roles in IT, software support, networking, and computer operations." },
      { text: "Support progression to further technical education, including eligible B.Tech lateral-entry pathways." },
    ],
    learningOutcomes: [
      { text: "Explain fundamental computer system components and digital techniques." },
      { text: "Apply basic programming concepts using C and Python in guided exercises." },
      { text: "Describe database management, computer networking, and web technology fundamentals." },
      { text: "Explain object-oriented programming, software engineering, and Internet of Things concepts." },
      { text: "Use practical problem-solving, communication, and teamwork skills in technical assignments." },
      { text: "Recognise professional expectations and responsible practices in computing environments." },
    ],
    specificOutcomes: [
      { text: "Develop and test basic computer programs using foundational programming concepts." },
      { text: "Support introductory database, network, web, and computer system tasks under guidance." },
      { text: "Contribute to entry-level software, IT support, computer operations, and technical project activities." },
    ],
  },

  careerOpportunities: {
    headingHighlight: "in Computer Science Engineering",
    description: "A Diploma in Computer Science Engineering can provide a starting point for students interested in software, IT services, networking, and computer operations. Career options depend on technical skills, practical experience, communication abilities, and employer requirements.",
    imageUrl: computerScienceImage,
    imageAlt: "Computer science technology and software development",
    industries: [
      { title: "IT Services", descriptionLabel: "Career areas", description: "User support, system assistance, and day-to-day technology services." },
      { title: "Software and Web", descriptionLabel: "Career areas", description: "Application support, website maintenance, and software testing assistance." },
      { title: "Computer Operations", descriptionLabel: "Career areas", description: "Computer-based office operations, system use, and digital records." },
      { title: "Networking", descriptionLabel: "Career areas", description: "Network setup assistance, connectivity, and basic troubleshooting." },
      { title: "Database Support", descriptionLabel: "Career areas", description: "Database operations, information organisation, and records support." },
      { title: "Technology Support", descriptionLabel: "Career areas", description: "Hardware and software assistance across technology-enabled workplaces." },
    ],
    careerRoles: [
      { title: "Junior Programmer", description: "Write and maintain basic computer programs under guidance." },
      { title: "Web Development Assistant", description: "Support website development and maintenance tasks." },
      { title: "IT Support Executive", description: "Help users resolve computer and software issues." },
      { title: "Computer Operator", description: "Manage computer-based office operations and digital records." },
      { title: "Network Support Technician", description: "Assist with network setup and basic troubleshooting." },
      { title: "Database Assistant", description: "Support database operations and information records." },
      { title: "Software Testing Assistant", description: "Help test software applications and record issues." },
      { title: "System Support Assistant", description: "Support computer systems and operating environments." },
    ],
  },

  programComparison: {
    heading: "Diploma in Computer Science Engineering vs. Other Polytechnic Courses",
    headingHighlight: "Other Polytechnic Courses",
    headers: [
      { label: "Programme" },
      { label: "Computer Science Engineering", highlight: true },
      { label: "Electrical Engineering" },
      { label: "Mechanical Engineering (Production)" },
      { label: "Mechanical Engineering (Automobile)" },
      { label: "Civil Engineering" },
    ],
    rows: [
      { feature: "Main area of study", values: ["Programming, software, databases, and networking", "Electrical machines, circuits, and power systems", "Manufacturing, machines, and production processes", "Vehicle systems and automobile technology", "Construction, structures, and surveying"] },
      { feature: "Suitable for students interested in", values: ["Computers, coding, and digital technologies", "Electricity, power, and electrical equipment", "Machinery and industrial production", "Vehicles, engines, and automobile systems", "Buildings, infrastructure, and construction"] },
    ],
    chooseIfCards: [
      {
        heading: "Choose Computer Science Engineering if you like:",
        bgClass: "bg-white",
        items: ["Computers, coding, and digital technologies", "Learning how software and applications work", "Exploring databases and computer networks", "Solving problems using technology", "Building a foundation for further computing studies"],
      },
    ],
  },

  faqs: [
    { question: "What is a Diploma in Computer Science Engineering?", answer: "It is a technical programme that introduces students to programming, computer systems, databases, networking, software development, and related technologies through classroom learning and practical laboratory work." },
    { question: "What is the duration of a Diploma in Computer Science Engineering at SRMU?", answer: "The regular programme is three years full-time and is divided into six semesters." },
    { question: "What is the eligibility for a Diploma in Computer Science Engineering at SRMU?", answer: "The currently published requirement is Class 10 or an equivalent examination from a recognised board with a minimum 35% aggregate. Check the latest admission notification for updated requirements." },
    { question: "Can I pursue a Diploma in Computer Science Engineering after Class 10?", answer: "Yes. Students who have passed Class 10 can apply for the three-year programme if they meet the university's eligibility requirements." },
    { question: "What is the fee for a Diploma in Computer Science Engineering at SRMU?", answer: "The currently published course fee is ₹57,000 per year. Additional charges, such as the student welfare fund and first-year caution money, may apply. Confirm the 2027–28 fee structure before admission." },
    { question: "Which subjects are taught in Diploma Computer Science Engineering?", answer: "Learning areas include C Programming, Python Programming, Digital Techniques, Database Management Systems, Computer Networks, Object-Oriented Programming, Software Engineering, Web Technology, and the Internet of Things." },
    { question: "What are the career options after a Diploma in Computer Science Engineering?", answer: "Graduates can explore roles such as junior programmer, IT support executive, web development assistant, network support technician, computer operator, database assistant, and software testing assistant." },
    { question: "What is the scope of Diploma in Computer Science Engineering in Uttar Pradesh?", answer: "The diploma can help students explore entry-level opportunities in IT services, software support, networking, web development, and computer operations. Lucknow, Noida, Greater Noida, and Kanpur are among the locations where relevant opportunities may be explored." },
    { question: "What is the salary after a Diploma in Computer Science Engineering?", answer: "Salary depends on technical skills, job profile, employer, location, and experience. Programming ability, project experience, and relevant certifications can support career prospects." },
    { question: "Can I pursue a B.Tech after completing a Diploma in Computer Science Engineering?", answer: "Eligible diploma holders may apply for B.Tech lateral entry, which generally allows admission into the second year of an engineering programme. Admission depends on the institution's eligibility criteria and applicable regulations." },
    { question: "Does SRMU provide placement assistance for Diploma CSE students?", answer: "SRMU has a placement team that supports student training, career preparation, and industry engagement. Actual opportunities depend on student skills and performance as well as participating organisations' recruitment requirements." },
    { question: "How do I apply for Diploma in Computer Science Engineering admission in 2027?", answer: "Review the programme details and eligibility requirements on the official SRMU website, then complete the application process according to the university's 2027–28 admission notification." },
  ],
};

export default diplomaComputerScienceEngineeringNewData;
