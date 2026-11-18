import type { ProgramPageDataNew } from "../../types/programPageNew";
import diplomaMechanicalProductionNewData from "./diplomaMechanicalEngineeringProductionNew";

const productionData = diplomaMechanicalProductionNewData;

const diplomaElectronicsCommunicationEngineeringNewData: ProgramPageDataNew = {
  ...productionData,
  designVariant: "cyber-security",

  // Keep the Production diploma page's existing banner and imagery throughout this page.
  heroBanner: {
    ...productionData.heroBanner,
    programLabel: "Diploma in Electronics & Communication Engineering",
    specialization: "Electronics & Communication Engineering",
    bannerAlt: "Engineering blueprint background with gears and a hardhat",
  },

  whyStudy: {
    ...productionData.whyStudy,
    year: "2027",
    heading: "Why Study a Diploma in Electronics & Communication Engineering in 2027?",
    headingHighlight: "in 2027?",
    quote: "How do electronic devices, communication networks, and smart systems work?",
    paragraphs: [
      "From smartphones and wireless networks to smart devices, satellites, and automation systems, electronics and communication technologies play an important role in everyday life. As industries adopt connected devices, digital communication, and automated systems, demand for technically skilled professionals continues to grow.",
      "A Diploma in Electronics & Communication Engineering in Lucknow introduces students to electronic devices, communication networks, and electrical systems. The programme combines engineering fundamentals with practical learning to develop skills for entry-level opportunities across electronics, telecommunications, manufacturing, and related industries.",
      "For students considering a three-year diploma after Class 10, SRMU offers a learning environment focused on engineering fundamentals, laboratory practice, technical understanding, and career development.",
    ],
    imageAlt: "Students learning mechanical engineering in the Production diploma workshop",
    benefitCards: [
      { title: "Growing Industry Demand", description: "Electronics and communication technologies support telecommunications, manufacturing, healthcare, automotive, and consumer electronics." },
      { title: "Diverse Career Opportunities", description: "Explore opportunities in electronics manufacturing, telecom services, hardware maintenance, testing, and technical support." },
      { title: "Practical Technical Skills", description: "Learn about electronic circuits, communication systems, digital devices, instrumentation, and troubleshooting." },
      { title: "Technology-Driven Careers", description: "Build foundational knowledge relevant to IoT, embedded systems, wireless communication, and automation." },
    ],
  },

  ltBenefits: {
    ...productionData.ltBenefits,
    heading: "How Does Practical Learning Benefit Electronics & Communication Engineering Students?",
    headingHighlight: "Electronics & Communication Engineering Students?",
    overviewHeading: "Diploma in Electronics & Communication Engineering",
    overviewHeadingHighlight: "at SRMU",
    overviewDescription: "The three-year diploma introduces students to electronic devices, circuits, digital systems, communication, instrumentation, and embedded technology through technical subjects, laboratory activities, and project-based learning.",
    introText: "Electronics engineering is best understood when theoretical concepts are connected with practical applications. At SRMU, the Diploma in Electronics & Communication Engineering helps students understand the working principles of electronic components, circuits, communication equipment, and digital systems through classroom teaching, laboratory activities, demonstrations, and project-based learning.",
    domainRows: [
      { tags: ["Electronic Devices and Circuits", "Digital Electronics", "Analog and Digital Communication"] },
      { tags: ["Microprocessors and Microcontrollers", "Measurements and Instrumentation", "Communication Systems"] },
      { tags: ["Embedded Systems", "Industrial Electronics", "IoT and Smart Devices"] },
    ],
    followUpText: "Practical learning encourages students to apply engineering concepts, understand circuit behaviour, identify technical problems, and develop systematic troubleshooting skills.",
    projectsHeading: "Students can explore technical areas such as:",
    projectsCol1: [
      { text: "Electronic devices, components, and circuit applications" },
      { text: "Digital electronics and logic systems" },
      { text: "Analog and digital communication fundamentals" },
      { text: "Microprocessors and microcontrollers" },
      { text: "Electronic measurements and instrumentation" },
    ],
    projectsCol2: [
      { text: "Computer networks and communication systems" },
      { text: "Embedded systems fundamentals" },
      { text: "Wireless communication applications" },
      { text: "IoT and smart electronic devices" },
      { text: "Basic industrial electronics and automation" },
    ],
    tableRows: [
      { label: "Programme", value: "Diploma in Electronics & Communication Engineering" },
      { label: "Duration", value: "3 years · 6 semesters" },
      { label: "Entry Qualification", value: "As per university admission guidelines" },
      { label: "Programme Level", value: "Polytechnic Diploma" },
      { label: "Institute", value: "SRMU Polytechnic" },
      { label: "Learning Approach", value: "Laboratory-based, practical, and project-based learning" },
    ],
    artworkAlt: "Mechanical engineering CAD and workshop artwork from the Production diploma page",
  },

  industryExposure: {
    ...productionData.industryExposure,
    sectionTitle: "Industry Exposure &",
    sectionTitleHighlight: "Electronics Learning",
    introParagraph: "The programme focuses on the technologies and technical processes used in modern industries. Students develop foundational knowledge of electronic components, communication devices, testing equipment, and circuit applications through laboratory sessions, technical demonstrations, projects, and industry-oriented activities.",
    expertSessionsHeading: "Industry & Expert Sessions",
    expertSessionsParagraph: "Industry-oriented sessions and technical interactions can introduce students to modern communication technologies, IoT and smart electronic devices, embedded systems and microcontrollers, electronic equipment testing, wireless communication applications, and industrial automation fundamentals.",
    featuredCard: {
      ...productionData.industryExposure.featuredCard,
      badge: "Practical Learning",
      secondaryBadge: "ELECTRONICS & COMMUNICATION",
      title: "Electronic Systems and Communication Applications",
      presenter: "Technical demonstrations and project-based learning",
      paragraphs: ["Technical demonstrations, laboratory exercises, and projects help students connect circuit and communication concepts with practical engineering applications."],
    },
    secondaryCards: [
      {
        badge: "Core Skill",
        icon: "cpu",
        iconLabel: "ELECTRONIC CIRCUITS",
        title: "Electronic Devices and Circuits",
        presenter: "Components and circuit applications",
        paragraphs: ["Explore the working principles of electronic components and learn how different circuits function."],
      },
      {
        badge: "Digital Systems",
        icon: "code",
        iconLabel: "DIGITAL ELECTRONICS",
        title: "Digital Electronics and Logic Systems",
        presenter: "Digital circuits and information processing",
        paragraphs: ["Build familiarity with logic gates, digital circuits, and the systems used in electronic equipment."],
      },
      {
        badge: "Communication",
        icon: "energy",
        iconLabel: "WIRELESS & NETWORKS",
        title: "Communication and Wireless Technologies",
        presenter: "Signals and communication systems",
        paragraphs: ["Understand introductory signal transmission and communication technologies used in connected systems."],
      },
      {
        badge: "Embedded Technology",
        icon: "settings",
        iconLabel: "MICROCONTROLLERS",
        title: "Microprocessors and Embedded Systems",
        presenter: "Programmable electronic systems",
        paragraphs: ["Explore microprocessor and microcontroller fundamentals and their applications in embedded systems."],
      },
      {
        badge: "Applied Electronics",
        icon: "wrench",
        iconLabel: "TESTING & AUTOMATION",
        title: "Instrumentation, Testing, and Automation",
        presenter: "Measurements and industrial applications",
        paragraphs: ["Develop an understanding of electronic measurements, equipment testing, and basic industrial automation."],
      },
    ],
    // Preserve the exact Production page background image.
    sectionBackgroundImageUrl: productionData.industryExposure.sectionBackgroundImageUrl,
  },

  // The placement image and recruiter strip are shared with the Production reference page.
  placement: { ...productionData.placement },

  labs: {
    ...productionData.labs,
    sectionTitle: "Learn Electronics & Communication Engineering",
    sectionTitleHighlight: "the Way Industry Works",
    introParagraph: "The Diploma in Electronics & Communication Engineering introduces students to electronic components, circuits, communication systems, digital devices, instrumentation, and embedded technology. Laboratory sessions and project activities help students apply engineering concepts to practical systems.",
    curriculumOverlayItems: [
      { text: "Electronic Devices\n& Circuits" },
      { text: "Digital\nElectronics" },
      { text: "Analog\nCommunication" },
      { text: "Electronic\nMeasurements" },
      { text: "Microprocessors\n& Controllers" },
      { text: "Digital\nCommunication" },
      { text: "Embedded\nSystems" },
      { text: "Networks, IoT\n& Automation" },
    ],
    curriculumSectionTitle: "Electronics & Communication Engineering Curriculum",
    curriculumDescription: "The programme covers electronic devices and circuits, digital electronics, analog and digital communication, electronic measurements and instrumentation, network fundamentals, microprocessors, microcontrollers, embedded systems, industrial electronics, electronic system design, computer networks, and project work with industrial training.",
    labsHeading: "Electronics & Communication Engineering Laboratories",
    labsDescription: "Work with electronic instruments, circuit components, and testing equipment through guided practical sessions.",
    labs: productionData.labs.labs.map((lab, index) => {
      const electronicsLabs = [
        {
          title: "Electronics Devices & Circuits Lab",
          tagline: "Understand the building blocks of electronic systems.",
          description: "Explore the working principles of electronic components and learn how different circuits function.",
          items: ["Semiconductor Devices", "Diodes and Transistors", "Rectifier Circuits", "Amplifier Circuits", "Circuit Testing", "Basic Troubleshooting"],
        },
        {
          title: "Digital Electronics Lab",
          tagline: "Explore how digital devices process information.",
          description: "Learn the fundamentals of digital circuits and logic systems used in modern electronic equipment.",
          items: ["Logic Gates", "Boolean Algebra", "Combinational Circuits", "Sequential Circuits", "Flip-Flops", "Digital Circuit Design"],
        },
        {
          title: "Communication Engineering Lab",
          tagline: "Understand how information travels across communication systems.",
          description: "Explore signal transmission, modulation, communication circuits, and introductory wireless communication.",
          items: ["Analog Communication", "Digital Communication", "Modulation Techniques", "Signal Transmission", "Communication Circuit Analysis", "Wireless Communication"],
        },
        {
          title: "Microprocessor & Microcontroller Lab",
          tagline: "Discover programmable electronic systems.",
          description: "Develop foundational knowledge of microprocessors and microcontrollers through practical exercises and basic programming applications.",
          items: ["Microprocessor Fundamentals", "Microcontroller Architecture", "Basic Programming", "Interfacing Techniques", "Input and Output Devices", "Embedded Applications"],
        },
        {
          title: "Electronic Measurements & Instrumentation Lab",
          tagline: "Learn how electronic systems are tested and measured.",
          description: "Become familiar with measurement instruments and testing procedures used to examine electronic circuits and devices.",
          items: ["Digital Multimeter", "Oscilloscope", "Signal Generator", "Voltage and Current Measurement", "Frequency Measurement", "Equipment Testing"],
        },
      ];
      return {
        ...lab,
        label: `LAB / 0${index + 1}`,
        ...electronicsLabs[index],
        imageAlt: "Mechanical workshop image reused from the Production diploma page",
      };
    }),
  },

  yearJourney: {
    heading: "Your Journey from Student to Electronics & Communication Engineering Professional",
    introParagraph: "The three-year diploma builds technical knowledge progressively, starting with engineering fundamentals and moving towards specialised electronics and communication applications. Practical learning and projects help students prepare for entry-level work or further study.",
    year1: {
      title: "Year 1 – Engineering Foundations",
      quote: "Build a foundation in engineering, science, and basic technical applications.",
      subjects: ["Engineering Mathematics", "Applied Physics", "Applied Chemistry", "Basic Electrical Engineering", "Engineering Drawing", "Workshop Practice", "Communication Skills", "Fundamentals of Computer Applications"],
      practicalLearning: ["Understand basic electrical and electronic components", "Learn engineering drawing fundamentals", "Perform basic electrical measurements", "Understand workshop tools and safety", "Develop basic computer skills"],
      projects: ["Simple Electrical Circuit", "Electronic Components Identification", "Battery-Based Circuit Model", "Basic Measurement and Testing Exercise"],
      tools: ["Basic Electrical Instruments", "Workshop Tools", "Engineering Drawing Instruments"],
      outcome: "Develop a strong foundation in engineering, mathematics, science, and basic technical applications.",
    },
    year2: {
      title: "Year 2 – Core Electronics & Communication Development",
      quote: "Apply engineering fundamentals to electronic circuits, digital systems, and communication.",
      subjects: ["Electronic Devices and Circuits", "Digital Electronics", "Analog Communication", "Electronic Measurements and Instrumentation", "Network Fundamentals", "Microprocessors", "Electrical and Electronic Engineering Materials"],
      practicalLearning: ["Design and test basic electronic circuits", "Work with digital logic circuits", "Understand communication signals", "Perform electronic measurements", "Explore microprocessor applications"],
      projects: ["Digital Logic-Based Circuit", "Automatic Light Control System", "Basic Audio Amplifier", "Digital Temperature Indicator"],
      tools: ["Electronic Testing Instruments", "Digital Circuit Components", "Microprocessor Learning Tools"],
      outcome: "Build practical understanding of electronic circuits, communication fundamentals, and digital systems.",
    },
    year3: {
      title: "Year 3 – Advanced Applications & Career Readiness",
      quote: "Bring communication, embedded systems, and electronic design concepts into applied projects.",
      subjects: ["Digital Communication", "Microcontrollers", "Embedded Systems Fundamentals", "Industrial Electronics", "Electronic System Design", "Computer Networks", "Project Work and Industrial Training"],
      practicalLearning: ["Work on microcontroller-based applications", "Understand electronic system testing", "Explore communication technologies", "Develop project documentation", "Apply technical knowledge to practical problems"],
      projects: ["Smart Home Automation Model", "Sensor-Based Monitoring System", "Wireless Communication Prototype", "Microcontroller-Based Security System"],
      tools: ["Microcontrollers", "Electronic Measurement Instruments", "Circuit Testing Equipment"],
      outcome: "Develop the technical foundation, project experience, and workplace readiness for entry-level opportunities in electronics and communication industries.",
    },
  },

  fee: {
    description: "Programme fees depend on the applicable academic session and university fee schedule. Contact SRMU admissions for the latest Diploma in Electronics & Communication Engineering fee details and applicable scholarships.",
    feeRows: [
      { label: "Course Fee", yr1: "Refer to current schedule", yr2: "Refer to current schedule", yr3: "Refer to current schedule" },
      { label: "Student Welfare Fund", yr1: "As per university schedule", yr2: "As per university schedule", yr3: "As per university schedule" },
      { label: "Caution Money", yr1: "As per university schedule", yr2: "—", yr3: "—" },
    ],
    feeNote: "Fees and additional charges may change by academic session. Confirm the applicable fee structure and scholarship details with SRMU admissions before applying.",
  },

  poPsoPlo: {
    objectives: [
      { text: "Develop foundational knowledge of electronic components, circuits, digital systems, and communication technologies." },
      { text: "Build practical skills through laboratory sessions, technical demonstrations, and project work." },
      { text: "Strengthen circuit analysis, testing, measurement, and troubleshooting capabilities." },
      { text: "Prepare students to explore entry-level technical roles across electronics, telecommunications, manufacturing, and support services." },
      { text: "Provide a foundation for further education, including eligible B.Tech lateral-entry pathways." },
    ],
    learningOutcomes: [
      { text: "Explain the basic operation of electronic devices, circuits, and digital systems." },
      { text: "Describe analog and digital communication fundamentals and signal transmission." },
      { text: "Use basic electronic measurement and testing instruments in guided practical work." },
      { text: "Explain microprocessor, microcontroller, and embedded system fundamentals." },
      { text: "Apply systematic problem-solving and troubleshooting methods to introductory circuit tasks." },
      { text: "Work collaboratively and follow safe practices in laboratory and technical settings." },
    ],
    specificOutcomes: [
      { text: "Assemble, test, and troubleshoot basic electronic circuits under guidance." },
      { text: "Use foundational communication, digital electronics, and instrumentation concepts in practical assignments." },
      { text: "Support entry-level activities involving electronic equipment, telecom systems, testing, and maintenance." },
    ],
  },

  careerOpportunities: {
    ...productionData.careerOpportunities,
    headingHighlight: "in Electronics & Communication Engineering",
    description: "Electronics and communication technologies are used across telecommunications, manufacturing, healthcare, consumer electronics, and automation. A diploma can provide a foundation for students interested in technical and operational roles in these sectors. Graduates may also explore eligible higher education pathways, including B.Tech lateral entry.",
    industries: [
      { title: "Electronics Manufacturing", descriptionLabel: "Career areas", description: "Electronic components, circuit assembly, product testing, and manufacturing processes." },
      { title: "Telecommunications", descriptionLabel: "Career areas", description: "Communication equipment, network installation, signal systems, and maintenance." },
      { title: "Consumer Electronics", descriptionLabel: "Career areas", description: "Electronic appliances, diagnostic procedures, product servicing, and equipment maintenance." },
      { title: "Industrial Automation", descriptionLabel: "Career areas", description: "Electronic control systems, sensors, and automated industrial equipment." },
      { title: "IT Hardware and Technical Support", descriptionLabel: "Career areas", description: "Computer hardware, electronic devices, system installation, and technical troubleshooting." },
      { title: "Testing and Quality Control", descriptionLabel: "Career areas", description: "Electronic testing procedures, inspection processes, and quality assurance." },
    ],
    careerRoles: [
      { title: "Electronics Technician", description: "Assist with electronic components, circuits, and equipment maintenance." },
      { title: "Production Technician", description: "Support electronics manufacturing and production processes." },
      { title: "Assembly Technician", description: "Assist with assembly of electronic components and products." },
      { title: "Telecom Technician", description: "Support communication equipment, network installation, and maintenance." },
      { title: "Network Support Technician", description: "Assist with network setup and communication system support." },
      { title: "Communication Equipment Technician", description: "Help install, test, and maintain communication equipment." },
      { title: "Electronics Service Technician", description: "Support servicing and maintenance of consumer electronics." },
      { title: "Repair Technician", description: "Assist with diagnosing and repairing electronic devices." },
      { title: "Maintenance Technician", description: "Support routine maintenance of electronic and industrial equipment." },
      { title: "Automation Technician", description: "Assist with sensors, electronic controls, and automated equipment." },
      { title: "Control Panel Technician", description: "Support installation and maintenance activities for control panels." },
      { title: "Instrumentation Technician", description: "Assist with measurement and instrumentation equipment." },
      { title: "Hardware Technician", description: "Support installation and troubleshooting of computer hardware and devices." },
      { title: "Technical Support Executive", description: "Help users with technical issues involving devices and systems." },
      { title: "Field Service Technician", description: "Provide on-site technical support and equipment servicing." },
      { title: "Testing Technician", description: "Assist with testing electronic products and recording results." },
      { title: "Quality Control Technician", description: "Support inspections and quality checks for electronic products." },
      { title: "Electronics Testing Assistant", description: "Help carry out circuit and equipment testing procedures." },
    ],
  },

  programComparison: {
    heading: "Diploma in Electronics & Communication Engineering vs. Other Polytechnic Specialisations",
    headingHighlight: "Other Polytechnic Specialisations",
    headers: [
      { label: "Feature" },
      { label: "Electronics & Communication", highlight: true },
      { label: "Electrical Engineering" },
      { label: "Computer Science" },
    ],
    rows: [
      { feature: "Main Focus", values: ["Electronic devices and communication systems", "Electrical power and equipment", "Computing and software"] },
      { feature: "Core Learning", values: ["Circuits, signals, and communication", "Electrical machines and power systems", "Programming and databases"] },
      { feature: "Practical Skills", values: ["Circuit testing and electronic troubleshooting", "Electrical installation and maintenance", "Coding and computer applications"] },
      { feature: "Career Areas", values: ["Telecom, electronics, and manufacturing", "Power and electrical maintenance", "IT and software support"] },
      { feature: "Suitable For", values: ["Students interested in electronics and communication technology", "Students interested in electrical systems", "Students interested in computers and programming"] },
    ],
    chooseIfCards: [
      {
        heading: "Choose Electronics & Communication Engineering if you like:",
        bgClass: "bg-white",
        items: ["Understanding how electronic devices work", "Exploring communication and networking technologies", "Working with circuits and electronic components", "Learning about digital systems and microcontrollers", "Building practical electronic projects", "Exploring careers in electronics and telecommunications"],
      },
    ],
  },

  faqs: [
    { question: "What is a Diploma in Electronics & Communication Engineering?", answer: "It is a three-year technical programme focused on electronic devices, digital circuits, communication systems, microprocessors, and electronic equipment. It develops practical engineering knowledge and technical skills for electronics, telecommunications, and related industries." },
    { question: "What is the eligibility for a Diploma in Electronics & Communication Engineering at SRMU?", answer: "Students who have completed Class 10 from a recognised board can apply, subject to the university's prescribed eligibility criteria and admission guidelines." },
    { question: "What is the duration of a Diploma in Electronics & Communication Engineering in Lucknow?", answer: "The diploma is generally three years, divided into six semesters, with theoretical learning, laboratory sessions, practical assignments, and project work." },
    { question: "Why should I choose SRMU for a Diploma in Electronics & Communication Engineering in Lucknow?", answer: "SRMU provides an academic environment focused on engineering fundamentals, practical learning, and technical skill development. Students study electronic circuits, communication systems, digital technologies, and their industrial applications through academic and practical activities." },
    { question: "What subjects are taught in the Diploma in Electronics and Communication Engineering?", answer: "The programme generally covers electronic devices and circuits, digital electronics, analog and digital communication, microprocessors, microcontrollers, electronic measurements, computer networks, and industrial electronics. Subjects follow the approved programme curriculum." },
    { question: "What are the career opportunities after a Diploma in Electronics & Communication Engineering?", answer: "Graduates can explore electronics manufacturing, telecommunications, consumer electronics, industrial automation, hardware maintenance, and technical support. Roles may include Electronics Technician, Telecom Technician, Testing Technician, and Maintenance Technician." },
    { question: "What is the scope and salary after a Diploma in Electronics & Communication Engineering in UP?", answer: "Potential fields include electronics manufacturing, telecommunications, industrial maintenance, automation, and technical services. Entry-level salaries vary by skills, employer, role, and experience." },
    { question: "Can I get a job after completing a Diploma in Electronics & Communication Engineering?", answer: "Diploma graduates can apply for entry-level technical positions in electronics manufacturing, equipment maintenance, telecom services, testing, and quality control, subject to employer requirements and individual skills." },
    { question: "Can I pursue a B.Tech after a Diploma in Electronics & Communication Engineering?", answer: "Diploma holders can explore B.Tech admission through eligible lateral-entry pathways, subject to applicable university, state admission, and regulatory requirements." },
    { question: "What practical skills will I develop during the ECE Diploma?", answer: "Students can develop skills in electronic circuit testing, digital electronics, communication fundamentals, microcontroller applications, electronic measurements, equipment troubleshooting, and basic embedded systems through practical learning and projects." },
    { question: "Which are the best polytechnic colleges in Lucknow for Electronics & Communication?", answer: "Compare programme recognition, curriculum, laboratory facilities, faculty expertise, practical training, fees, internship opportunities, and verified placement records." },
    { question: "How do I choose the best polytechnic college in Lucknow for ECE?", answer: "Compare the academic curriculum, practical learning facilities, industry exposure, student support, fee structure, and career development opportunities. Check whether the diploma programme meets relevant regulatory and approval requirements." },
    { question: "What are the placement opportunities after an Electronics & Communication diploma?", answer: "Graduates can explore electronics manufacturing, telecommunications, hardware servicing, industrial maintenance, testing, and technical support. Opportunities depend on employer requirements, technical proficiency, and student performance." },
    { question: "What is the fee structure for a private Diploma in Electronics & Communication at a college in Lucknow?", answer: "Fees vary by institution, facilities, and academic structure. Contact SRMU admissions for current programme fees and applicable scholarships." },
    { question: "What are the job opportunities after a Diploma in Electronics & Communication Engineering in Lucknow and UP?", answer: "Students can explore opportunities in electronics manufacturing, telecom services, industrial automation, electronic equipment maintenance, and IT hardware support. Entry-level roles may include Electronics Technician, Telecom Support Technician, Field Service Technician, and Testing Assistant." },
  ],
};

export default diplomaElectronicsCommunicationEngineeringNewData;
