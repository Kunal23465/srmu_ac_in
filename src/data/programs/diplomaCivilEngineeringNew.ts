import type { ProgramPageDataNew } from "../../types/programPageNew";
import civilBanner from "../../assets/images/institute-of-technology-new/Engineering Blueprints in Motion.png";
import civilDrawingImage from "../../assets/images/home/program-section/undergraduate/engineering-06052402032951.jpg";
import civilHardHatImage from "../../assets/images/academics/departments/civil-07052411084968.webp";
import cyberSecurityNewData from "./cyberSecurityNew";

const diplomaCivilEngineeringNewData: ProgramPageDataNew = {
  // Use the BBA FinTech page's established visual treatment with civil-specific content.
  designVariant: "cyber-security",

  heroBanner: {
    degreeTitle: "Diploma in",
    programLabel: "Diploma in Civil Engineering",
    specialization: "Civil Engineering",
    desktopBannerUrl: civilBanner,
    mobileBannerUrl: civilBanner,
    bannerAlt: "Civil engineering blueprints and a construction hard hat",
    applyNowUrl: "https://students.srmu.ac.in/login",
    brochureUrl: "/Broucher_SRMU_25_April___.pdf",
  },

  whyStudy: {
    year: "2027",
    heading: "Why Study Diploma in Civil Engineering in 2027?",
    headingHighlight: "in 2027?",
    quote: "How do roads, bridges, buildings, and water systems move from engineering drawings to real infrastructure?",
    paragraphs: [
      "Civil engineering plays an important role in developing roads, bridges, buildings, highways, water supply systems, and other infrastructure. With ongoing infrastructure development across Uttar Pradesh and India, trained diploma holders can explore opportunities in construction companies, engineering consultancies, infrastructure projects, and government-related technical services.",
      "A three-year Diploma in Civil Engineering in Lucknow gives students an opportunity to understand how engineering principles are applied to real construction projects. It is a starting point for students looking for a diploma in civil engineering after Class 10.",
      "At SRMU, the programme focuses on technical understanding, problem-solving, drawing interpretation, and practical skills for entry-level civil engineering roles.",
    ],
    imageUrl: civilHardHatImage,
    imageAlt: "Construction hard hat, engineering drawings, and measuring tools",
    benefitCards: [
      {
        title: "Infrastructure Development",
        description: "Understand the engineering behind buildings, roads, bridges, and public infrastructure.",
      },
      {
        title: "Practical Learning",
        description: "Develop familiarity with surveying, construction materials, measurements, and engineering drawings.",
      },
      {
        title: "Career Opportunities",
        description: "Explore entry-level roles in construction companies, infrastructure projects, and engineering organisations.",
      },
      {
        title: "Higher Education Pathways",
        description: "Build a foundation for further technical education, including eligible lateral-entry routes.",
      },
    ],
  },

  ltBenefits: {
    heading: "How Does Practical Learning Prepare Civil Engineering Diploma Students?",
    headingHighlight: "Civil Engineering Diploma Students?",
    overviewHeading: "Diploma in Civil Engineering",
    overviewHeadingHighlight: "at SRMU",
    overviewDescription:
      "The three-year programme introduces students to the technical areas involved in planning, designing, constructing, and maintaining infrastructure. It combines engineering fundamentals with laboratory exercises, practical assignments, and project-based activities.",
    introText:
      "Civil engineering requires more than an understanding of formulas and construction theory. Students need to learn how materials behave, how measurements are taken, how drawings are interpreted, and how construction activities are planned. At SRMU, the Diploma in Civil Engineering emphasises practical and laboratory-based learning to connect classroom concepts with engineering applications.",
    domainRows: [
      { tags: ["Building Materials and Construction Technology", "Surveying and Levelling", "Engineering Drawing"] },
      { tags: ["Concrete Technology", "Structural Engineering Fundamentals", "Soil Mechanics Fundamentals"] },
      { tags: ["Construction Planning and Estimation", "Building Construction Practices"] },
    ],
    followUpText:
      "Practical assignments, laboratory exercises, and project-based activities help students understand the technical requirements of civil engineering work.",
    projectsHeading: "Students develop practical familiarity with:",
    projectsCol1: [
      { text: "Building Materials and Construction Technology" },
      { text: "Surveying and Levelling" },
      { text: "Engineering Drawing" },
      { text: "Concrete Technology" },
    ],
    projectsCol2: [
      { text: "Structural Engineering Fundamentals" },
      { text: "Construction Planning and Estimation" },
      { text: "Soil Mechanics Fundamentals" },
      { text: "Building Construction Practices" },
    ],
    tableRows: [
      { label: "Programme", value: "Diploma in Civil Engineering" },
      { label: "Duration", value: "3 years · 6 semesters" },
      { label: "Entry Qualification", value: "Class 10 or equivalent" },
      { label: "Minimum Marks", value: "35% aggregate" },
      { label: "Compulsory Subjects", value: "Science, Mathematics, and English" },
      { label: "Learning Approach", value: "Practical, laboratory-based, and project-based learning" },
    ],
    tableBackgroundImageUrl: "/back2.png",
    artworkUrl: civilHardHatImage,
    artworkAlt: "Civil engineering construction drawing and safety equipment",
  },

  industryExposure: {
    sectionTitle: "Develop Civil Engineering Skills",
    sectionTitleHighlight: "Through Practical Learning",
    introParagraph:
      "Civil engineering students learn how construction materials, measurements, drawings, and project activities contribute to infrastructure work. At SRMU, laboratory exercises, practical assignments, and project-based activities help connect classroom learning with engineering applications.",
    expertSessionsHeading: "Technical Learning Areas",
    expertSessionsParagraph:
      "Students develop familiarity with building materials, construction technology, surveying and levelling, engineering drawing, concrete, structural fundamentals, soil mechanics, construction planning, and estimation.",
    featuredCard: {
      badge: "Practical Learning",
      secondaryBadge: "CIVIL ENGINEERING",
      title: "From Engineering Drawings to Construction Practice",
      presenter: "Laboratory exercises and project-based activities",
      imageUrl: civilDrawingImage,
      paragraphs: [
        "Practical assignments help students interpret engineering drawings, take measurements, understand material properties, and explore how construction work is planned.",
      ],
    },
    secondaryCards: [
      {
        badge: "Core Skill",
        icon: "compass",
        iconLabel: "SURVEYING",
        title: "Surveying and Levelling",
        presenter: "Measurements and field techniques",
        paragraphs: ["Build familiarity with surveying instruments, site measurements, and levelling procedures used in civil engineering work."],
      },
      {
        badge: "Laboratory Learning",
        icon: "factory",
        iconLabel: "MATERIALS",
        title: "Construction Materials and Concrete",
        presenter: "Testing fundamentals and materials study",
        paragraphs: ["Explore construction material properties and introductory testing concepts for cement, aggregates, and concrete."],
      },
      {
        badge: "Project Skills",
        icon: "design",
        iconLabel: "PLANNING",
        title: "Construction Planning and Estimation",
        presenter: "Technical assignments and project activities",
        paragraphs: ["Understand how drawings, quantities, estimates, and planning considerations support construction projects."],
      },
    ],
    departmentUrl: "/srmu-polytechnic-new",
  },

  placement: {
    imageUrl: cyberSecurityNewData.placement.imageUrl,
    imageAlt: cyberSecurityNewData.placement.imageAlt,
    placementDetailUrl: "https://srmu.ac.in/placements",
    // heading: "Where Our Students Get Placed",
    recruitersHeading: "Top Recruiters",
  },

  labs: {
    sectionTitle: "Learn Civil Engineering",
    sectionTitleHighlight: "Through Practical Learning",
    introParagraph:
      "The Diploma in Civil Engineering curriculum introduces students to the technical areas involved in planning, designing, constructing, and maintaining infrastructure. Practical exercises and laboratory work help students apply engineering concepts to construction projects.",
    curriculumImageDesktop: cyberSecurityNewData.labs.curriculumImageDesktop,
    curriculumImageMobile: cyberSecurityNewData.labs.curriculumImageMobile,
    curriculumOverlayItems: [
      { text: "Engineering\nMathematics" },
      { text: "Engineering\nDrawing" },
      { text: "Building\nMaterials" },
      { text: "Building\nConstruction" },
      { text: "Surveying &\nLevelling" },
      { text: "Concrete &\nStructures" },
      { text: "Soil &\nTransportation" },
      { text: "Estimation &\nManagement" },
    ],
    curriculumSectionTitle: "Civil Engineering Curriculum",
    curriculumDescription:
      "Students study engineering mathematics, drawing, building materials and construction, surveying, concrete technology, structural engineering fundamentals, soil mechanics, transportation engineering, estimation and costing, construction management, and environmental engineering.",
    reelVideoUrl: "",
    cardBackgroundImageUrl: civilHardHatImage,
    labsHeading: "Civil Engineering Laboratories",
    labsDescription: "Gain practical familiarity with construction materials, measurements, surveying instruments, and testing concepts.",
    labs: [
      {
        label: "LAB / 01",
        title: "Civil Engineering Laboratory",
        imageUrl: civilHardHatImage,
        imageAlt: "Civil engineering plans and construction measuring tools",
        tagline: "Explore materials, measurements, and testing concepts.",
        description: "Develop practical familiarity with engineering materials, measurement procedures, and testing concepts used in civil engineering.",
        items: ["Building Materials Testing", "Concrete Testing Fundamentals", "Cement Testing", "Aggregate Testing", "Construction Material Properties"],
      },
      {
        label: "LAB / 02",
        title: "Surveying and Levelling",
        imageUrl: civilDrawingImage,
        imageAlt: "Surveying instruments and civil engineering plans",
        tagline: "Understand how measurements guide construction work.",
        description: "Learn the purpose of surveying instruments and levelling in site measurement and infrastructure projects.",
        items: ["Surveying Instruments", "Measurement", "Levelling", "Site Records", "Field Techniques"],
      },
      {
        label: "LAB / 03",
        title: "Construction Materials",
        imageUrl: civilHardHatImage,
        imageAlt: "Construction materials and engineering drawings",
        tagline: "Study materials used in construction projects.",
        description: "Explore the properties and basic testing of materials used in building and infrastructure work.",
        items: ["Building Materials", "Cement", "Aggregates", "Concrete", "Material Properties"],
      },
      {
        label: "LAB / 04",
        title: "Engineering Drawing",
        imageUrl: civilDrawingImage,
        imageAlt: "Civil engineering drawing activity",
        tagline: "Interpret drawings used to plan construction.",
        description: "Build familiarity with engineering drawings and their role in communicating project dimensions and construction details.",
        items: ["Drawing Interpretation", "Dimensions and Scale", "Construction Details", "Plan Reading", "Technical Communication"],
      },
      {
        label: "LAB / 05",
        title: "Construction Planning and Estimation",
        imageUrl: civilDrawingImage,
        imageAlt: "Civil engineering drawings used in construction planning",
        tagline: "Connect project planning with technical learning.",
        description: "Understand how measurements, estimates, and construction planning contribute to infrastructure projects.",
        items: ["Construction Planning", "Estimation and Costing", "Project Activities", "Quantity Basics", "Quality Considerations"],
      },
    ],
  },

  yearJourney: {
    heading: "Your Journey from Student to Civil Engineering Professional",
    introParagraph:
      "The three-year diploma is divided into six semesters. Students build a foundation in engineering and drawing, develop practical skills in surveying and materials, and progress to infrastructure planning and estimation topics.",
    year1: {
      title: "Year 1 – Engineering Foundations",
      quote: "Build the fundamentals used to read, measure, and understand construction work.",
      subjects: ["Engineering Mathematics", "Engineering Drawing", "Building Materials", "Building Construction"],
      practicalLearning: ["Interpret introductory engineering drawings", "Understand construction material properties", "Practise basic measurements", "Connect classroom concepts with construction examples"],
      projects: ["Basic Building Drawing", "Construction Material Study", "Site Measurement Exercise"],
      tools: ["Engineering Drawing Instruments", "Measurement Tools", "Surveying Instruments"],
      outcome: "Develop a foundation in engineering mathematics, drawing, construction materials, and building practices.",
    },
    year2: {
      title: "Year 2 – Surveying and Construction Technology",
      quote: "Apply measurements and material knowledge to practical engineering tasks.",
      subjects: ["Surveying", "Concrete Technology", "Structural Engineering Fundamentals", "Soil Mechanics"],
      practicalLearning: ["Use surveying and levelling concepts", "Explore concrete testing fundamentals", "Understand basic structural behaviour", "Study soil properties used in construction"],
      projects: ["Surveying and Levelling Exercise", "Concrete Material Study", "Soil Mechanics Assignment"],
      tools: ["Surveying Instruments", "Levelling Equipment", "Construction Testing Equipment"],
      outcome: "Strengthen practical understanding of surveying, construction materials, structures, and soil.",
    },
    year3: {
      title: "Year 3 – Infrastructure Planning and Estimation",
      quote: "Bring technical knowledge together to understand larger infrastructure projects.",
      subjects: ["Transportation Engineering", "Estimation and Costing", "Construction Management", "Environmental Engineering"],
      practicalLearning: ["Understand road and transportation infrastructure", "Prepare introductory estimates", "Explore construction planning", "Consider environmental aspects of infrastructure"],
      projects: ["Construction Estimate Exercise", "Infrastructure Planning Assignment", "Environmental Engineering Study"],
      tools: ["Engineering Drawings", "Measurement and Levelling Tools", "Estimation Worksheets"],
      outcome: "Apply civil engineering fundamentals to planning, estimation, construction, and infrastructure topics.",
    },
  },

  fee: {
    description:
      "SRMU lists a ₹57,000 annual course fee, a ₹100 Student Welfare Fund each year, and ₹5,000 first-year caution money. Hostel and transportation fees are listed separately.",
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
      { text: "Develop foundational knowledge of civil engineering materials, construction, surveying, drawings, and infrastructure." },
      { text: "Build practical skills through laboratory work, technical assignments, and project-based learning." },
      { text: "Strengthen measurement, drawing interpretation, planning, and problem-solving abilities." },
      { text: "Prepare students to contribute to construction and infrastructure work in entry-level technical roles." },
      { text: "Encourage responsible, ethical, and safety-conscious professional practice." },
    ],
    learningOutcomes: [
      { text: "Explain fundamental civil engineering concepts related to construction materials, buildings, structures, soil, and transportation." },
      { text: "Interpret basic engineering drawings and communicate dimensions and construction details." },
      { text: "Apply surveying, measurement, and levelling concepts to introductory site tasks." },
      { text: "Describe basic testing concepts for cement, aggregates, concrete, and other construction materials." },
      { text: "Contribute to construction planning, estimation, documentation, and project activities under appropriate supervision." },
      { text: "Work responsibly with teams while following applicable safety and professional practices." },
    ],
    specificOutcomes: [
      { text: "Use civil engineering drawings, measurements, and surveying fundamentals in guided technical assignments." },
      { text: "Apply basic knowledge of construction materials, building practices, concrete, and structural fundamentals." },
      { text: "Support estimation, construction planning, and infrastructure project activities at an entry level." },
    ],
  },

  careerOpportunities: {
    headingHighlight: "in Civil Engineering",
    description:
      "A diploma in civil engineering can prepare students to explore technical and supervisory roles in construction, infrastructure, real estate, road development, surveying, and engineering consultancy. Opportunities depend on qualifications, technical skills, experience, and employer requirements. Salary varies by employer, job role, location, skills, and work experience.",
    imageUrl: civilDrawingImage,
    imageAlt: "Construction drawing and hard hat for civil engineering work",
    industries: [
      { title: "Construction and Real Estate", descriptionLabel: "Career areas", description: "Residential, commercial, and institutional building projects." },
      { title: "Roads and Highways", descriptionLabel: "Career areas", description: "Road development, highway construction, and infrastructure maintenance." },
      { title: "Surveying and Land Development", descriptionLabel: "Career areas", description: "Site surveys, land measurements, levelling, and survey records." },
      { title: "Infrastructure Projects", descriptionLabel: "Career areas", description: "Technical and supervisory support across infrastructure work." },
      { title: "Engineering Consultancies", descriptionLabel: "Career areas", description: "Drawing support, documentation, measurements, and project activities." },
      { title: "Government Technical Services", descriptionLabel: "Career areas", description: "Eligible technical vacancies in public works and municipal bodies." },
    ],
    careerRoles: [
      { title: "Site Supervisor", description: "Work with construction teams on residential, commercial, and institutional building projects." },
      { title: "Construction Assistant", description: "Support site teams with measurements, documentation, and construction activities." },
      { title: "Junior Site Supervisor", description: "Assist with site coordination and day-to-day project activities." },
      { title: "Highway Project Assistant", description: "Support road development, highway construction, and infrastructure maintenance work." },
      { title: "Surveying Assistant", description: "Assist with land measurements, site surveys, levelling, and survey records." },
      { title: "Survey Technician", description: "Support survey teams with field measurements and technical records." },
      { title: "CAD Technician", description: "Assist engineering teams with drawings and project documentation." },
      { title: "Junior Engineering Assistant", description: "Support measurements and construction-related technical activities." },
      { title: "Junior Engineer (where eligible)", description: "Explore eligible technical vacancies subject to the relevant recruitment requirements." },
      { title: "Technical Assistant", description: "Provide technical support to engineering and public works teams." },
    ],
  },

  programComparison: {
    headers: [
      { label: "Feature" },
      { label: "Civil Engineering", highlight: true },
      { label: "Mechanical Engineering" },
      { label: "Electrical Engineering" },
      { label: "Computer Science" },
    ],
    rows: [
      { feature: "Main Focus", values: ["Construction and infrastructure", "Machines and manufacturing", "Electrical systems", "Computing and software"] },
      { feature: "Key Skills", values: ["Surveying, construction, estimation", "Design and manufacturing", "Circuits and power systems", "Programming and computing"] },
      { feature: "Practical Areas", values: ["Building materials and surveying", "Workshops and machines", "Electrical laboratories", "Computer laboratories"] },
      { feature: "Career Roles", values: ["Site supervisor, CAD technician", "Production assistant", "Electrical technician", "IT support technician"] },
    ],
    chooseIfCards: [
      {
        heading: "Consider Civil Engineering if you enjoy:",
        bgClass: "bg-white",
        items: [
          "Understanding how buildings, bridges, and roads are constructed",
          "Working with engineering drawings and measurements",
          "Exploring construction materials and surveying",
          "Participating in infrastructure development projects",
          "Working in construction and engineering environments",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "Which is the best diploma in civil engineering college in Lucknow?",
      answer: "Compare eligibility, practical facilities, faculty, curriculum, infrastructure, and placement guidance. SRMU offers a three-year Diploma in Civil Engineering through SRMU Polytechnic.",
    },
    {
      question: "Is Shri Ramswaroop Memorial University a private university?",
      answer: "Yes. Shri Ramswaroop Memorial University is a private university offering diploma-level engineering programmes through SRMU Polytechnic.",
    },
    {
      question: "What is the duration of the Diploma in Civil Engineering?",
      answer: "The Diploma in Civil Engineering is a three-year programme divided into six semesters.",
    },
    {
      question: "Can I pursue a diploma in civil engineering after Class 10?",
      answer: "Yes. Students who have passed Class 10 or an equivalent examination can apply if they meet the prescribed eligibility requirements.",
    },
    {
      question: "What are the eligibility requirements for admission?",
      answer: "Candidates must have passed Class 10 or equivalent with at least 35% aggregate marks. Science, Mathematics, and English are compulsory subjects.",
    },
    {
      question: "How can I apply for the 2027–28 academic session?",
      answer: "Students can apply through the SRMU admission portal. Admission is subject to the university's eligibility and selection requirements for the session.",
    },
    {
      question: "What is the fee for the Diploma in Civil Engineering?",
      answer: "The fee depends on the applicable academic session and university fee schedule. Refer to the latest official SRMU fee structure for confirmed 2027–28 charges.",
    },
    {
      question: "What admission requirements should I check before applying?",
      answer: "Admission requirements can vary by session. Check the official SRMU admission guidelines for the current eligibility, documents, and selection process.",
    },
    {
      question: "What jobs can I explore after a diploma in civil engineering?",
      answer: "Depending on qualifications and skills, diploma holders can explore roles such as site supervisor, junior engineering assistant, CAD technician, surveying assistant, and construction assistant.",
    },
    {
      question: "How should I compare polytechnic colleges by placement?",
      answer: "Review verified placement records, the number of students placed, recruiters, salary packages, and how closely the offered job roles relate to civil engineering.",
    },
    {
      question: "What is the salary after a diploma in civil engineering?",
      answer: "Salary depends on experience, technical skills, employer, location, job role, and responsibilities.",
    },
    {
      question: "Can diploma holders pursue B.Tech. through lateral entry?",
      answer: "Eligible diploma holders can explore admission to the second year of B.Tech. Civil Engineering, subject to the applicable university and regulatory eligibility criteria.",
    },
  ],
};

export default diplomaCivilEngineeringNewData;
