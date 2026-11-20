import type { ProgramPageDataNew } from "../../types/programPageNew";
import mechanicalBanner from "../../assets/images/institute-of-technology-new/Engineering Blueprints in Motion.png";
import mechanicalCadArtwork from "../../assets/images/new-mechnical-program/industrial-cad-engineering-toolkit.png";
import latheWorkshopImage from "../../assets/images/new-mechnical-program/uabl75dnikvruvxvs5ke.webp";
import weldingWorkshopImage from "../../assets/images/new-mechnical-program/jg3hq3h4vwrxfxh3ejkl.webp";
import mechanicalCurriculumArtwork from "../../assets/images/new-mechnical-program/blrmnpd51nih1a4hunsd.webp";
import mechanicalPlacementImage from "../../assets/images/new-mechnical-program/vett6qrcicwki2tdldms.webp";
import mechanicalEngineeringClassImage from "../../assets/images/academics/institutes/mechanical/mv4.png";
import mechanicalIndustryVisitImage from "../../assets/images/academics/institutes/mechanical/mv1.png";
import cyberSecurityNewData from "./cyberSecurityNew";

const diplomaMechanicalEngineeringProductionNewData: ProgramPageDataNew = {
  // Follow the BBA FinTech programme page's shared visual system with programme-specific content.
  designVariant: "cyber-security",

  heroBanner: {
    degreeTitle: "Diploma in",
    programLabel: "Diploma in Mechanical Engineering (Production)",
    specialization: "Mechanical Engineering (Production)",
    desktopBannerUrl: mechanicalBanner,
    mobileBannerUrl: mechanicalBanner,
    bannerAlt: "Mechanical engineering production and manufacturing",
    applyNowUrl: "https://students.srmu.ac.in/login",
    brochureUrl: "/Broucher_SRMU_25_April___.pdf",
  },

  whyStudy: {
    year: "2027",
    heading: "Why Study a Diploma in Mechanical Engineering (Production) in 2027?",
    headingHighlight: "in 2027?",
    quote: "How are mechanical components, machines, and industrial products designed and manufactured?",
    paragraphs: [
      "Mechanical production engineering plays an important role in manufacturing products, operating machinery, improving production processes, and maintaining industrial equipment. From automobile components and engineering products to industrial machinery, production engineers contribute to the development of different manufacturing sectors.",
      "A three-year Diploma in Mechanical Engineering (Production) in Lucknow helps students develop an understanding of manufacturing processes, machine tools, engineering drawings, material properties, and production methods.",
      "At SRMU, the programme aims to develop technical understanding and practical skills that can help students prepare for entry-level responsibilities in manufacturing and production environments.",
    ],
    imageUrl: latheWorkshopImage,
    imageAlt: "Students learning to operate a lathe in a mechanical engineering workshop",
    benefitCards: [
      { title: "Manufacturing Knowledge", description: "Understand processes involved in producing mechanical components, machines, and industrial products." },
      { title: "Practical Workshop Learning", description: "Develop familiarity with machine tools, workshop procedures, engineering materials, and production techniques." },
      { title: "Industry-Relevant Skills", description: "Build foundational knowledge of manufacturing technology, quality control, maintenance, and production operations." },
      { title: "Career Opportunities", description: "Explore employment pathways in manufacturing companies, automobile industries, production units, and engineering organisations." },
    ],
  },

  ltBenefits: {
    heading: "How Does Practical Learning Benefit Mechanical Engineering (Production) Students?",
    headingHighlight: "Mechanical Engineering (Production) Students?",
    overviewHeading: "Diploma in Mechanical Engineering (Production)",
    overviewHeadingHighlight: "(Production)",
    overviewDescription: "The three-year diploma introduces students to manufacturing processes, machine tools, engineering materials, production methods, and mechanical maintenance through technical subjects, workshop activities, and laboratory exercises.",
    introText: "Mechanical engineering is a practical discipline where students need to understand how machines operate, how components are manufactured, and how production activities are managed. The Diploma in Mechanical Engineering (Production) at SRMU connects engineering concepts with practical applications through workshop activities, laboratory exercises, technical assignments, and project-based learning.",
    domainRows: [
      { tags: ["Manufacturing Processes", "Engineering Drawing", "Workshop Technology"] },
      { tags: ["Machine Tools and Operations", "Engineering Materials", "Production Planning and Control"] },
      { tags: ["Metrology and Measurements", "Mechanical Maintenance", "Basic CAD and Design Concepts"] },
    ],
    followUpText: "Workshop practice, laboratory exercises, technical assignments, and project-based learning help students connect classroom concepts with manufacturing and production applications.",
    projectsHeading: "Students can develop practical understanding through:",
    projectsCol1: [
      { text: "Learning the fundamentals of machining and manufacturing operations" },
      { text: "Understanding different machine tools and their applications" },
      { text: "Reading and interpreting mechanical engineering drawings" },
      { text: "Studying engineering material properties and applications" },
    ],
    projectsCol2: [
      { text: "Learning basic measurement and inspection techniques" },
      { text: "Understanding production processes and quality requirements" },
      { text: "Working on mechanical engineering assignments and projects" },
    ],
    tableRows: [
      { label: "Programme", value: "Diploma in Mechanical Engineering (Production)" },
      { label: "Duration", value: "3 years · 6 semesters" },
      { label: "Entry Qualification", value: "Class 10 or equivalent" },
      { label: "Minimum Marks", value: "35% aggregate" },
      { label: "Compulsory Subjects", value: "Science, Mathematics, and English" },
      { label: "Learning Approach", value: "Workshop-based, practical, and project-based learning" },
    ],
    tableBackgroundImageUrl: "/back2.png",
    artworkUrl: mechanicalCadArtwork,
    artworkAlt: "Mechanical CAD design, gears, production tools, and an industrial robot arm",
  },

  industryExposure: {
    sectionTitle: "Industry Exposure &",
    sectionTitleHighlight: "Mechanical Production Learning at SRMU, Lucknow",
    introParagraph: "Mechanical production education becomes more meaningful when students understand how manufacturing units and industrial production systems function. The Diploma in Mechanical Engineering (Production) at SRMU connects classroom concepts with practical applications through workshops, laboratory activities, technical assignments, and industry-oriented learning opportunities.",
    expertSessionsHeading: "Industrial Visits & Expert Interactions",
    expertSessionsParagraph: "Industrial exposure can help students understand manufacturing processes, machinery, production workflows, and workplace requirements. Students can gain insights into manufacturing and assembly operations, automobile component production, machine tools and machining processes, industrial maintenance, production planning, workflow management, quality inspection, and material testing.",
    featuredCard: {
      badge: "Industrial Visit",
      secondaryBadge: "MECHANICAL PRODUCTION",
      title: "Exploring a Manufacturing Environment",
      presenter: "Industry visits and production workflows",
      imageUrl: mechanicalIndustryVisitImage,
      paragraphs: ["Industrial exposure can help students see how manufacturing units organise machinery, production workflows, assembly operations, and workplace practices."],
    },
    secondaryCards: [
      {
        badge: "Workshop Practice",
        icon: "factory",
        iconLabel: "MANUFACTURING",
        title: "Manufacturing and Assembly Operations",
        presenter: "Production processes and workflow",
        paragraphs: ["Explore how components move through manufacturing and assembly processes and how production workflows are organised."],
      },
      {
        badge: "Technical Learning",
        icon: "settings",
        iconLabel: "MACHINE TOOLS",
        title: "Machine Tools and Machining Processes",
        presenter: "Workshop demonstrations and practice",
        paragraphs: ["Develop an introductory understanding of machine tools, machining operations, and the role of equipment in mechanical production."],
      },
      {
        badge: "Industry Exposure",
        icon: "car",
        iconLabel: "AUTOMOTIVE",
        title: "Automobile Component Production",
        presenter: "Manufacturing applications",
        paragraphs: ["Learn how mechanical production principles relate to automobile components, assembly operations, and quality requirements."],
      },
      {
        badge: "Practical Skills",
        icon: "design",
        iconLabel: "ENGINEERING DRAWING",
        title: "Drawing Interpretation and Basic CAD",
        presenter: "Design concepts and technical communication",
        paragraphs: ["Build familiarity with mechanical drawings and basic computer-aided design concepts used to communicate component details."],
      },
      {
        badge: "Quality Skills",
        icon: "wrench",
        iconLabel: "INSPECTION",
        title: "Measurement, Inspection, and Maintenance",
        presenter: "Metrology and mechanical systems",
        paragraphs: ["Understand basic measurement and inspection techniques, quality checks, and maintenance practices for production equipment."],
      },
      {
        badge: "Technical Activities",
        icon: "energy",
        iconLabel: "PROJECTS",
        title: "Workshops and Project Assignments",
        presenter: "Applied engineering learning",
        paragraphs: ["Technical activities and project assignments encourage students to apply manufacturing concepts to practical mechanical engineering problems."],
      },
    ],
    departmentUrl: "/srmu-polytechnic-new",
    sectionBackgroundImageUrl: mechanicalCurriculumArtwork,
  },

  placement: {
    imageUrl: cyberSecurityNewData.placement.imageUrl,
    imageAlt: cyberSecurityNewData.placement.imageAlt,
    placementDetailUrl: "https://srmu.ac.in/placements",
    // heading: "Where Our Students Get Placed",
    recruitersHeading: "Top Recruiters",
  },

  labs: {
    sectionTitle: "Learn Mechanical Engineering",
    sectionTitleHighlight: "the Way Industry Works",
    introParagraph: "The Diploma in Mechanical Engineering (Production) curriculum introduces students to manufacturing, machining, mechanical systems, and industrial production. Workshop practice and laboratory work help students apply engineering concepts to production activities.",
    curriculumImageDesktop: cyberSecurityNewData.labs.curriculumImageDesktop,
    curriculumImageMobile: cyberSecurityNewData.labs.curriculumImageMobile,
    curriculumOverlayItems: [
      { text: "Engineering\nMathematics" },
      { text: "Engineering\nDrawing" },
      { text: "Workshop\nTechnology" },
      { text: "Engineering\nMaterials" },
      { text: "Manufacturing\nProcesses" },
      { text: "Machine Tools &\nOperations" },
      { text: "Production Planning\n& Control" },
      { text: "Metrology &\nMaintenance" },
    ],
    curriculumSectionTitle: "Mechanical Production Curriculum",
    curriculumDescription: "Students study engineering mathematics and physics, engineering drawing, workshop technology, engineering mechanics and materials, manufacturing processes, machine tools and operations, strength of materials, metrology, production planning and control, industrial engineering, mechanical maintenance, and CAD/CAM fundamentals.",
    reelVideoUrl: "",
    cardBackgroundImageUrl: latheWorkshopImage,
    labsHeading: "Mechanical Engineering Workshop & Laboratories",
    labsDescription: "Build practical familiarity with machine tools, manufacturing operations, engineering materials, and production techniques.",
    labs: [
      {
        label: "LAB / 01",
        title: "Lathe Machine Operations",
        imageUrl: latheWorkshopImage,
        imageAlt: "Mechanical engineering students working with a lathe machine",
        tagline: "Explore machining and machine tool fundamentals.",
        description: "Develop an introductory understanding of lathe machine operations, components, and workshop procedures.",
        items: ["Lathe Machine Parts", "Turning Fundamentals", "Work Holding", "Tool Selection", "Workshop Safety"],
      },
      {
        label: "LAB / 02",
        title: "Milling, Drilling, and Machining",
        imageUrl: mechanicalPlacementImage,
        imageAlt: "Mechanical engineering students practicing machine operations",
        tagline: "Understand common machine tools and their applications.",
        description: "Explore the purpose of milling and drilling operations and how machine tools support component manufacturing.",
        items: ["Milling Operations", "Drilling Operations", "Machine Tool Functions", "Machining Methods", "Safe Operation"],
      },
      {
        label: "LAB / 03",
        title: "Welding and Fabrication",
        imageUrl: weldingWorkshopImage,
        imageAlt: "Workshop fabrication and welding activity",
        tagline: "Learn about fabrication processes and workshop practice.",
        description: "Build familiarity with welding, fabrication, materials, and safe procedures used in mechanical workshops.",
        items: ["Welding Fundamentals", "Fabrication Practice", "Material Preparation", "Joint Types", "Workshop Safety"],
      },
      {
        label: "LAB / 04",
        title: "Fitting, Bench Work, and Measurement",
        imageUrl: mechanicalEngineeringClassImage,
        imageAlt: "Mechanical engineering instruction and technical drawing",
        tagline: "Develop precision and measurement awareness.",
        description: "Understand basic fitting and bench work while learning how measurements support quality and inspection.",
        items: ["Fitting Tools", "Bench Work", "Metrology Basics", "Dimensional Measurement", "Inspection Methods"],
      },
      {
        label: "LAB / 05",
        title: "Engineering Drawing and CAD",
        imageUrl: mechanicalCadArtwork,
        imageAlt: "CAD drawing and mechanical design tools",
        tagline: "Connect component drawings with production concepts.",
        description: "Develop drawing interpretation skills and introductory familiarity with computer-aided design concepts.",
        items: ["Engineering Drawing", "Drawing Interpretation", "Basic CAD Concepts", "Component Details", "Production Applications"],
      },
    ],
  },

  yearJourney: {
    heading: "Your Journey from Student to Mechanical Production Professional",
    introParagraph: "The three-year Diploma in Mechanical Engineering (Production) is structured across six semesters. Each academic year introduces progressively advanced mechanical engineering concepts and manufacturing applications.",
    year1: {
      title: "Year 1 – Engineering Foundations",
      quote: "Build the engineering and workshop foundations used to understand machines and production work.",
      subjects: ["Engineering Mathematics", "Engineering Physics", "Engineering Chemistry", "Engineering Drawing", "Engineering Mechanics", "Workshop Technology"],
      practicalLearning: ["Introduction to mechanical tools and equipment", "Basic workshop and fitting practices", "Understanding engineering drawings", "Introduction to engineering materials", "Basic measurement techniques"],
      projects: ["Basic Workshop Practice", "Engineering Drawing Exercise", "Engineering Materials Study"],
      tools: ["Workshop Hand Tools", "Drawing Instruments", "Basic Measurement Tools"],
      outcome: "Develop a foundation in engineering principles, mechanical concepts, engineering drawings, and workshop practices.",
    },
    year2: {
      title: "Year 2 – Core Mechanical and Manufacturing Concepts",
      quote: "Apply engineering fundamentals to machining, materials, and manufacturing processes.",
      subjects: ["Manufacturing Processes", "Machine Tools and Operations", "Strength of Materials", "Engineering Materials", "Metrology and Measurements", "Mechanical Engineering Fundamentals"],
      practicalLearning: ["Introduction to machining operations", "Understanding machine tools and their functions", "Basic material testing and inspection", "Reading mechanical drawings", "Learning manufacturing and fabrication techniques"],
      projects: ["Machining Process Study", "Measurement and Inspection Exercise", "Manufacturing Methods Assignment"],
      tools: ["Machine Tools", "Measurement Instruments", "Workshop Equipment"],
      outcome: "Develop technical understanding of machining, manufacturing processes, mechanical components, and measurement methods.",
    },
    year3: {
      title: "Year 3 – Production Technology and Industry Readiness",
      quote: "Bring production planning, quality, maintenance, and design concepts together.",
      subjects: ["Production Planning and Control", "Industrial Engineering", "Mechanical Maintenance", "Advanced Manufacturing Concepts", "CAD and Production Applications", "Project Work"],
      practicalLearning: ["Understanding production workflows", "Introduction to quality control procedures", "Learning basic maintenance practices", "Preparing technical project assignments", "Applying manufacturing concepts to practical problems"],
      projects: ["Production Workflow Study", "Quality Inspection Assignment", "Mechanical Production Project"],
      tools: ["CAD Applications", "Inspection Tools", "Production Planning Methods"],
      outcome: "Develop the technical foundation and professional readiness for entry-level opportunities in mechanical production and manufacturing.",
    },
  },

  fee: {
    description: "SRMU lists a ₹57,000 annual course fee, a ₹100 Student Welfare Fund each year, and ₹5,000 first-year caution money. Hostel and transportation fees are listed separately.",
    feeRows: [
      { label: "Course Fee", yr1: "₹57,000", yr2: "₹57,000", yr3: "₹57,000" },
      { label: "Student Welfare Fund", yr1: "₹100", yr2: "₹100", yr3: "₹100" },
      { label: "Caution Money", yr1: "₹5,000", yr2: "–", yr3: "–" },
      { label: "Total Fee", yr1: "₹62,100", yr2: "₹57,100", yr3: "₹57,100" },
      { label: "Hostel Fees + Caution Money (1st Yr. Only)", yr1: "₹85,000", yr2: "₹80,000", yr3: "₹80,000" },
      { label: "Transportation Fees", yr1: "₹35,000", yr2: "₹35,000", yr3: "₹35,000" },
    ],
    feeNote: "SRMU lists the Student Welfare Fund, caution money, hostel, and transportation charges separately. Alumni Fee (₹500) and Degree Fee (₹1,000) are payable in the final year. Confirm the fee schedule for your admission session.",
  },

  poPsoPlo: {
    objectives: [
      { text: "Develop foundational knowledge of mechanical engineering, manufacturing processes, materials, machine tools, and production systems." },
      { text: "Build practical skills through workshop practice, laboratory exercises, technical assignments, and projects." },
      { text: "Strengthen drawing interpretation, measurement, inspection, and basic CAD capabilities." },
      { text: "Prepare students to contribute to entry-level manufacturing, production, quality, and maintenance activities." },
      { text: "Encourage safe, responsible, ethical, and collaborative engineering practice." },
    ],
    learningOutcomes: [
      { text: "Explain introductory mechanical engineering concepts, engineering materials, and manufacturing processes." },
      { text: "Interpret basic mechanical engineering drawings and communicate component details." },
      { text: "Describe machine tools, machining operations, workshop methods, and production activities." },
      { text: "Apply basic measurement and inspection concepts to mechanical components under guidance." },
      { text: "Explain how production planning, quality requirements, and maintenance support manufacturing operations." },
      { text: "Work collaboratively while following applicable workshop safety and professional practices." },
    ],
    specificOutcomes: [
      { text: "Apply foundational manufacturing and machine tool knowledge in guided workshop assignments." },
      { text: "Use basic engineering drawing, CAD, metrology, and inspection concepts in mechanical production tasks." },
      { text: "Support production workflow, quality, and mechanical maintenance activities at an entry level." },
    ],
  },

  careerOpportunities: {
    headingHighlight: "in Mechanical Engineering (Production)",
    description: "A Diploma in Mechanical Engineering (Production) can help students explore technical roles in manufacturing, automobile components, fabrication, industrial machinery, production units, quality inspection, and mechanical maintenance. Opportunities depend on technical skills, experience, employer requirements, and relevant training.",
    imageUrl: mechanicalPlacementImage,
    imageAlt: "Mechanical engineering student working with manufacturing equipment",
    industries: [
      { title: "Manufacturing and Production", descriptionLabel: "Career areas", description: "Production units making mechanical components, industrial products, and machine parts." },
      { title: "Automobile and Auto Components", descriptionLabel: "Career areas", description: "Vehicle component production, automobile manufacturing, and assembly operations." },
      { title: "Machine Tools and Manufacturing", descriptionLabel: "Career areas", description: "Machining operations, equipment handling, and manufacturing processes." },
      { title: "Quality Control and Inspection", descriptionLabel: "Career areas", description: "Component inspection, dimensional checks, and quality requirements." },
      { title: "Maintenance and Engineering Services", descriptionLabel: "Career areas", description: "Industrial machinery, equipment, and production system maintenance." },
      { title: "Fabrication and Industrial Engineering", descriptionLabel: "Career areas", description: "Fabrication workshops, metalworking units, and engineering production facilities." },
    ],
    careerRoles: [
      { title: "Production Assistant", description: "Support production teams involved in making mechanical components, machine parts, and industrial products." },
      { title: "Junior Production Technician", description: "Assist with routine production activities and manufacturing workflow under supervision." },
      { title: "Assembly Technician", description: "Support assembly operations for mechanical and automobile components." },
      { title: "Machine Operator", description: "Assist with machine tool operations after the required practical training." },
      { title: "CNC Operator", description: "Explore CNC operation roles subject to relevant machine training and employer requirements." },
      { title: "Quality Control Assistant", description: "Help check components, dimensions, and production quality requirements." },
      { title: "Inspection Technician", description: "Support measurement, inspection, and technical documentation activities." },
      { title: "Maintenance Technician", description: "Assist industrial teams with routine machinery and equipment maintenance." },
      { title: "Mechanical Technician", description: "Provide technical support for mechanical equipment and production systems." },
      { title: "Fabrication Technician", description: "Support metalworking and fabrication tasks in workshops and production facilities." },
      { title: "Workshop Technician", description: "Assist with workshop processes, equipment preparation, and safe work procedures." },
    ],
  },

  programComparison: {
    headers: [
      { label: "Feature" },
      { label: "Mechanical (Production)", highlight: true },
      { label: "Civil Engineering" },
      { label: "Electrical Engineering" },
      { label: "Computer Science" },
    ],
    rows: [
      { feature: "Main Focus", values: ["Manufacturing and production", "Construction and infrastructure", "Electrical systems", "Computing and software"] },
      { feature: "Key Skills", values: ["Machining, production, quality control", "Surveying and construction", "Circuits and power systems", "Programming and computing"] },
      { feature: "Practical Areas", values: ["Machine tools and workshops", "Building materials and surveying", "Electrical laboratories", "Computer laboratories"] },
      { feature: "Career Roles", values: ["Production technician, CNC operator", "Site supervisor", "Electrical technician", "IT support technician"] },
    ],
    chooseIfCards: [
      {
        heading: "Choose Mechanical Engineering (Production) if you like:",
        bgClass: "bg-white",
        items: [
          "Understanding how machines and mechanical components work",
          "Learning manufacturing and production techniques",
          "Working with machine tools and industrial equipment",
          "Exploring automobile and manufacturing industries",
          "Understanding quality control and production processes",
        ],
      },
    ],
  },

  faqs: [
    { question: "Which is the best diploma in mechanical engineering (production) college in Lucknow?", answer: "Compare curriculum, workshop facilities, practical training, faculty, industry exposure, and placement support. SRMU offers diploma-level technical education through SRMU Polytechnic." },
    { question: "What is a Diploma in Mechanical Production Engineering?", answer: "It is a technical programme introducing students to manufacturing processes, machine tools, production technology, engineering materials, and industrial operations." },
    { question: "Which are the top polytechnic colleges in Lucknow for mechanical engineering?", answer: "Evaluate polytechnic colleges by programme recognition, workshop facilities, practical learning, faculty, industry exposure, and placement records." },
    { question: "Is SRMU a private diploma in mechanical engineering college in Lucknow?", answer: "Shri Ramswaroop Memorial University is a private university offering diploma programmes through SRMU Polytechnic." },
    { question: "What is the duration of a Diploma in Mechanical Engineering (Production)?", answer: "The regular programme duration is three years, divided into six semesters." },
    { question: "Can I pursue a diploma in mechanical engineering after Class 10 in Lucknow?", answer: "Students who have passed Class 10 and meet the prescribed eligibility requirements can apply." },
    { question: "What is the eligibility for a diploma in mechanical engineering at SRMU?", answer: "The stated eligibility is Class 10 with at least 35% aggregate marks and Science, Mathematics, and English as compulsory subjects. Check the latest admission guidelines before applying." },
    { question: "What are the Diploma in Mechanical Engineering (Production) fees in Lucknow?", answer: "Fees depend on the academic session and university fee structure. Refer to the latest SRMU Polytechnic fee schedule for 2027–28." },
    { question: "Can I get Mechanical Engineering Polytechnic admission without an entrance exam in Lucknow?", answer: "The admission and selection process follows the university's applicable policy. Confirm the 2027–28 requirements with SRMU admissions." },
    { question: "Is lateral entry available for Diploma in Mechanical Engineering?", answer: "Eligible candidates with Class 12 Mathematics or relevant ITI qualifications may explore lateral-entry admission, subject to university and regulatory requirements." },
    { question: "What jobs can I get after a Diploma in Mechanical Engineering (Production)?", answer: "Potential roles include Production Technician, Machine Operator, CNC Operator, Quality Control Assistant, Maintenance Technician, and Workshop Technician, depending on skills and employer requirements." },
    { question: "What is the scope of Diploma in Mechanical Engineering (Production) in UP?", answer: "Career pathways may be available in manufacturing, automobile components, industrial machinery, fabrication, production units, and mechanical maintenance across Uttar Pradesh." },
    { question: "What is the salary after a Diploma in Mechanical Engineering in Uttar Pradesh?", answer: "Salary varies with technical skills, experience, employer, location, and job responsibilities. CNC, CAD, manufacturing, and quality inspection skills may support employment prospects." },
    { question: "Which Polytechnic Mechanical Engineering colleges in Lucknow have the highest placement?", answer: "Review verified placement percentages, recruiter details, job profiles, and salary records specific to diploma students when comparing colleges." },
    { question: "Can I pursue B.Tech after completing a Diploma in Mechanical Engineering?", answer: "Eligible diploma holders can explore lateral-entry admission to the second year of B.Tech Mechanical Engineering, subject to applicable admission and regulatory requirements." },
  ],
};

export default diplomaMechanicalEngineeringProductionNewData;
