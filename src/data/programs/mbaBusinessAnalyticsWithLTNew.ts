import type { ProgramPageDataNew } from "../../types/programPageNew";
import cyberSecurityNewData from "./cyberSecurityNew";

const mbaBusinessAnalyticsLTNewData: ProgramPageDataNew = {
  heroBanner: {
    degreeTitle: "",
    pageHeading: "M.B.A. in Business Analytics ",
    programLabel: "M.B.A. (Business Analytics) with L&T",
    specialization: "Business Analytics",
    subtitle: "In collaboration with L&T",
    desktopBannerUrl: cyberSecurityNewData.heroBanner.desktopBannerUrl,
    mobileBannerUrl: cyberSecurityNewData.heroBanner.mobileBannerUrl,
    bannerAlt: "MBA Business Analytics with L&T program banner",
    applyNowUrl: "https://students.srmu.ac.in/login",
    brochureUrl: "/Broucher_SRMU_25_April___.pdf",
  },

  whyStudy: {
    year: "2027",
    heading: "Why Study M.B.A. (Business Analytics) in 2027?",
    headingHighlight: "in 2027?",
    subheading: "",
    subheadingHighlight: "",
    heading27pxOnDesktop: true,
    quote: "Why has the ability to interpret business information and use it for management decisions become an important part of modern management?",
    paragraphs: [
      "Organizations across industries generate large volumes of information every day. The ability to interpret this information and use it for business decisions has become an important part of modern management.",
      "The M.B.A. (Business Analytics) with L&T at SRMU brings management education and analytical learning together. Students develop an understanding of how data can support business planning, improve operational processes, and help organizations respond to changing market requirements.",
      "For graduates comparing an MBA college in Lucknow, the program offers a combination of management education, business intelligence, and industry-oriented learning.",
    ],
    imageUrl: cyberSecurityNewData.whyStudy.imageUrl,
    imageAlt: cyberSecurityNewData.whyStudy.imageAlt,
    benefitCards: [
      {
        title: "Management and Analytics Together",
        description: "Understand business functions while learning how analytical insights support management decisions.",
      },
      {
        title: "Industry-Integrated Curriculum",
        description: "Study through a curriculum developed with inputs from L&T experts and university researchers.",
      },
      {
        title: "Business Intelligence",
        description: "Explore how organizations collect, interpret, and present information to support business decisions.",
      },
      {
        title: "Practical Learning",
        description: "Apply concepts through practical sessions, business cases, projects, and industry-oriented activities.",
      },
      {
        title: "Professional Certifications",
        description: "Access multiple levels of L&T certification, subject to applicable program requirements.",
      },
      {
        title: "Leadership Development",
        description: "Strengthen communication, teamwork, problem-solving, and decision-making skills.",
      },
    ],
  },

  ltBenefits: {
    heading: "How Does the L&T Collaboration Benefit Students?",
    headingHighlight: "Students?",
    overviewHeading: "Industry-Integrated Learning with L&T",
    overviewHeadingHighlight: "with L&T",
    overviewDescription: "The program combines the academic foundation of an MBA with industry-oriented learning in business analytics.",
    introText:
      "The objective is to help students understand not only management concepts but also how analytical thinking can support real business decisions. The program combines the academic foundation of an MBA with industry-oriented learning in business analytics.",
    domainRows: [
      {
        tags: ["Industry-Oriented Curriculum", "Blended Teaching (32 hours per module)", "L&T Certification", "Business Intelligence Exposure", "Practical Application"],
      },
      {
        tags: ["Professional Readiness", "Business Intelligence", "Business Analytics", "Research Methodology", "Management"],
      },
    ],
    followUpText:
      "The curriculum is developed with inputs from L&T experts and university researchers, providing practical exposure to business intelligence and analytical applications.",
    projectsHeading: "Students benefit from:",
    projectsCol1: [{ text: "Industry-Oriented Curriculum" }, { text: "Blended Teaching" }, { text: "L&T Certification" }, { text: "Business Intelligence Exposure" }],
    projectsCol2: [{ text: "Practical Application" }, { text: "Professional Readiness" }, { text: "Integration of Management and Technology" }],
    tableRows: [
      { label: "Program", value: "M.B.A. (Business Analytics) with L&T" },
      { label: "Degree", value: "Master of Business Administration" },
      { label: "Duration", value: "2 Years" },
      { label: "Industry Partner", value: "Larsen & Toubro (L&T)" },
      { label: "Eligibility", value: "Graduation in any discipline" },
      {
        label: "Industry Learning",
        value: "32 blended teaching hours for every module",
      },
    ],
    tableBackgroundImageUrl: cyberSecurityNewData.ltBenefits.tableBackgroundImageUrl,
  },

  industryExposure: {
    sectionTitle: "Industry Exposure and Practical Learning",
    sectionTitleHighlight: "at SRMU, Lucknow",
    introParagraph:
      "Business analytics is best understood when students work with business situations, interpret information, and explore possible solutions. SRMU encourages practical learning through academic and industry-oriented activities.",
    expertSessionsHeading: "Industry & Expert Sessions",
    expertSessionsParagraph:
      "Students can participate in guest lectures, budget sessions, industrial visits, national and international conferences, faculty development and academic activities, and research and projects that develop analytical thinking and apply management concepts to business-related problems.",
    featuredCard: {
      badge: "Practical Learning",
      secondaryBadge: "BUSINESS ANALYTICS",
      title: "Industry Exposure and Practical Learning",
      presenter: "Guest lectures, budget sessions, and industrial visits",
      imageUrl: cyberSecurityNewData.industryExposure.featuredCard.imageUrl,
      paragraphs: [
        "SRMU encourages practical learning through academic and industry-oriented activities including guest lectures, budget sessions, industrial visits, national and international conferences, faculty development and academic activities, and research and projects.",
      ],
    },
    secondaryCards: [
      {
        badge: "Guest Lectures",
        icon: "brain",
        iconLabel: "MANAGEMENT PRACTICES",
        title: "Guest Lectures",
        presenter: "Experts in management and business practices",
        paragraphs: ["Interact with experts and gain perspectives on current management and business practices."],
      },
      {
        badge: "Budget Sessions",
        icon: "code",
        iconLabel: "FINANCIAL POLICIES",
        title: "Budget Sessions",
        presenter: "Economic and financial policy sessions",
        paragraphs: ["Understand economic developments, financial policies, and their implications for businesses."],
      },
      {
        badge: "Industrial Visits",
        icon: "settings",
        iconLabel: "BUSINESS FUNCTIONS",
        title: "Industrial Visits & Conferences",
        presenter: "Industry visits and national/international conferences",
        paragraphs: [
          "Observe organizational operations and learn how different business functions work, and engage with discussions on emerging management practices, research, and industry developments.",
        ],
      },
      {
        badge: "National & International Conferences",
        icon: "factory",
        iconLabel: "CONFERENCES",
        title: "National and International Conferences",
        presenter: "Emerging management practices, research, and industry developments",
        paragraphs: ["Engage with discussions on emerging management practices, research, and industry developments."],
      },
      {
        badge: "Faculty Development",
        icon: "energy",
        iconLabel: "ACADEMIC ACTIVITIES",
        title: "Faculty Development and Academic Activities",
        presenter: "Continuous academic and professional development",
        paragraphs: ["Learn in an environment that encourages continuous academic and professional development."],
      },
      {
        badge: "Research & Projects",
        icon: "design",
        iconLabel: "RESEARCH",
        title: "Research and Projects",
        presenter: "Analytical thinking and practical application of management concepts",
        paragraphs: ["Develop analytical thinking and apply management concepts to business-related problems."],
      },
    ],
    departmentUrl: "https://srmu.ac.in/department-of-computer-science-and-information-systems",
  },

  placement: {
    imageUrl: cyberSecurityNewData.placement.imageUrl,
    imageAlt: "Student preparing for career and placement",
    placementDetailUrl: "https://srmu.ac.in/placements",
  },

  labs: {
    sectionTitle: "Learn Business Analytics",
    sectionTitleHighlight: "the Way Organisations Work",
    introParagraph:
      "SRMU provides specialized laboratories and learning facilities to support management education, research, and analytical learning. The program introduces students to business intelligence, business analytics, research methodology, financial management, human resource management, production and operations management, innovation and entrepreneurship, and design thinking.",
    curriculumImageDesktop: cyberSecurityNewData.labs.curriculumImageDesktop,
    curriculumImageMobile: cyberSecurityNewData.labs.curriculumImageMobile,
    curriculumOverlayItems: [
      { text: "Business\nIntelligence" },
      { text: "Business\nAnalytics" },
      { text: "Research\nMethodology" },
      { text: "Financial\nManagement" },
      { text: "Human Resource\nManagement" },
      { text: "Production and\nOperations" },
      { text: "Innovation and\nEntrepreneurship" },
      { text: "Design\nThinking" },
    ],
    curriculumSectionTitle: "Industry-Integrated Curriculum with L&T",
    curriculumDescription:
      "The curriculum is developed with inputs from L&T experts and university researchers, with 32 hours of blended teaching for every module, multiple levels of L&T certification, practical exposure to business intelligence and analytical applications, and integration of management concepts with technology-enabled business learning.",
    reelVideoUrl: "/MicrosoftTeams-video.mp4",
    reelPosterUrl: cyberSecurityNewData.labs.reelPosterUrl,
    cardBackgroundImageUrl: cyberSecurityNewData.labs.cardBackgroundImageUrl,
    labs: [
      {
        label: "LAB / 01",
        title: "IBM Research Lab",
        imageUrl: cyberSecurityNewData.labs.labs[0].imageUrl,
        imageAlt: cyberSecurityNewData.labs.labs[0].title,
        tagline: "Support research-oriented learning.",
        description: "Supports research-oriented learning and exposure to technology-enabled applications.",
        items: ["Research-Oriented Learning", "Technology-Enabled Applications", "Analytical Learning", "Business Research", "Applied Projects"],
      },
      {
        label: "LAB / 02",
        title: "Advanced Data Science Lab",
        imageUrl: cyberSecurityNewData.labs.labs[1].imageUrl,
        imageAlt: cyberSecurityNewData.labs.labs[1].title,
        tagline: "Explore data-related concepts and analytical methods.",
        description: "Provides a learning environment for exploring data-related concepts, analytical methods, and practical applications.",
        items: ["Data Concepts", "Analytical Methods", "Practical Applications", "Data Interpretation", "Applied Analytics"],
      },
      {
        label: "LAB / 03",
        title: "Oracle Lab",
        imageUrl: cyberSecurityNewData.labs.labs[2].imageUrl,
        imageAlt: cyberSecurityNewData.labs.labs[2].title,
        tagline: "Explore database-related concepts and business applications.",
        description: "Supports technology-enabled learning and exposure to database-related concepts and business applications.",
        items: ["Database Concepts", "Technology-Enabled Learning", "Business Applications", "Data Organization", "Business Information Systems"],
      },
      {
        label: "LAB / 04",
        title: "FinTech Smart Lab",
        imageUrl: cyberSecurityNewData.labs.labs[3].imageUrl,
        imageAlt: cyberSecurityNewData.labs.labs[3].title,
        tagline: "Explore technology-led financial services.",
        description: "Introduces students to technology-led developments in financial services and digital business environments.",
        items: ["Financial Technology", "Digital Business", "Financial Services", "Digital Environments", "Innovation in Finance"],
      },
      {
        label: "LAB / 05",
        title: "SPSS Lab",
        imageUrl: cyberSecurityNewData.labs.labs[4].imageUrl,
        imageAlt: cyberSecurityNewData.labs.labs[4].title,
        tagline: "Support statistical analysis and research.",
        description: "Supports statistical analysis, research activities, and interpretation of data.",
        items: ["Statistical Analysis", "Research Activities", "Data Interpretation", "Quantitative Analysis", "Business Research"],
      },
      {
        label: "LAB / 06",
        title: "Business Management Labs",
        imageUrl: cyberSecurityNewData.labs.labs[4].imageUrl,
        imageAlt: cyberSecurityNewData.labs.labs[4].title,
        tagline: "Understand management concepts through practical exercises.",
        description: "Provide opportunities to understand management concepts through practical exercises and business-related learning activities.",
        items: ["Management Concepts", "Practical Exercises", "Business Learning Activities", "Organizational Practices", "Decision-Making"],
      },
      {
        label: "LAB / 07",
        title: "Professional Communication Lab",
        imageUrl: cyberSecurityNewData.labs.labs[4].imageUrl,
        imageAlt: cyberSecurityNewData.labs.labs[4].title,
        tagline: "Improve presentation, communication, and interpersonal skills.",
        description: "Helps students improve presentation, communication, and interpersonal skills needed in professional environments.",
        items: ["Presentation Skills", "Communication", "Interpersonal Skills", "Professional Environments", "Academic Communication"],
      },
    ],
  },

  yearJourney: {
    heading: "Your Two-Year Learning Journey",
    introParagraph: "The two-year MBA program helps students build a foundation in management before developing a deeper understanding of business analytics and its applications.",
    year1: {
      title: "Year 1: Build Your Management and Analytical Foundation",
      quote: "Develop an understanding of core management functions and the skills required to evaluate business situations.",
      subjects: [
        "Management Principles and Organizational Functions",
        "Human Resource Management",
        "Financial Management",
        "Business Environment",
        "Research Methodology",
        "Production and Operations Management",
        "Business Intelligence",
        "Design Thinking",
        "Communication and Professional Skills",
      ],
      practicalLearning: [
        "Understand management principles and organizational functions",
        "Study human resource management",
        "Study financial management",
        "Understand the business environment",
        "Explore research methodology",
        "Study production and operations management",
        "Explore business intelligence",
        "Develop communication and professional skills",
      ],
      projects: ["Management Foundation Exercises", "Business Environment Study", "Research Methodology Assignment", "Business Intelligence Exploration"],
      tools: ["MS Excel", "MS PowerPoint", "MS Word", "Business Intelligence Tools"],
      outcome: "Build a foundation in management functions, business intelligence, and professional skills.",
    },
    year2: {
      title: "Year 2: Apply Analytics to Business Decisions",
      quote: "Build on management knowledge and explore how analytical thinking can support business strategy and organizational performance.",
      subjects: [
        "Advanced Application of Business Analytics",
        "Business Research and Problem-Solving",
        "Industry-Oriented Learning Modules",
        "Projects and Internship Exposure",
        "Business Strategy and Decision-Making",
        "Analytical Applications Across Management Functions",
        "Professional Development and Career Preparation",
      ],
      practicalLearning: [
        "Apply business analytics concepts",
        "Conduct business research and problem-solving",
        "Engage with industry-oriented learning modules",
        "Complete projects and internship exposure",
        "Apply analytical thinking across management functions",
        "Prepare for careers and professional development",
      ],
      projects: ["Industry-Oriented Project", "Internship Exposure", "Business Research Project", "Analytics Application Project", "Career Preparation Activities"],
      tools: ["MS Excel", "SPSS", "Power BI", "Business Intelligence Tools"],
      outcome: "Apply analytics to business decisions and develop professional readiness for analytics-related careers.",
    },
    year3: {
      title: "",
      quote: "",
      subjects: [],
      practicalLearning: [],
      projects: [],
      tools: [],
      outcome: "",
    },
  },

  fee: {
    description:
      "The published annual course fee for M.B.A. (Business Analytics) with L&T is ₹1,60,000. The first-year academic fee, including the Student Welfare Fund and caution money, is ₹1,65,100. The second-year academic fee is ₹1,60,100. Hostel, transportation, and other applicable charges are additional.",
    feeRows: [
      { label: "Course Fee", yr1: "₹1,60,000", yr2: "₹1,60,000", yr3: "–" },
      { label: "Student Welfare Fund", yr1: "₹100", yr2: "₹100", yr3: "–" },
      { label: "Caution Money", yr1: "₹5,000", yr2: "–", yr3: "–" },
      { label: "Total Fee", yr1: "₹1,65,100", yr2: "₹1,60,100", yr3: "–" },
      { label: "Hostel Fees + Caution Money (1st Yr. Only)", yr1: "₹85,000", yr2: "₹80,000", yr3: "–" },
      { label: "Transportation Fees", yr1: "₹35,000", yr2: "₹35,000", yr3: "–" },
    ],
    feeNote: "SRMU lists the Student Welfare Fund, caution money, hostel, and transportation charges separately. Alumni Fee (₹500) and Degree Fee (₹1,000) are payable in the final year. Confirm the fee schedule for your admission session.",
  },

  poPsoPlo: {
    objectives: [
      { text: "Build knowledge of business administration, business intelligence, and business analytics." },
      { text: "Develop an understanding of management functions, research methodology, and analytical methods." },
      { text: "Strengthen analytical and management foundations for interpreting business information and supporting decisions." },
      { text: "Encourage lifelong learning, professional conduct, and social responsibility." },
      { text: "Apply management and analytical concepts to current and emerging business and analytics applications." },
      { text: "Develop leadership, communication, teamwork, and professional values." },
    ],
    learningOutcomes: [
      { text: "Apply management and business analytics knowledge to practical business tasks." },
      { text: "Collect, organize, process, and interpret business information using suitable tools and methods." },
      { text: "Design, implement, and evaluate business and analytics-driven solutions." },
      { text: "Use business intelligence, statistical, and management tools responsibly." },
      { text: "Communicate business findings clearly and work effectively as an individual or team member." },
      { text: "Recognize ethical and social responsibilities when working with business data and analytical systems." },
      { text: "Continue learning as management and business analytics evolve." },
    ],
    specificOutcomes: [
      { text: "Apply business intelligence and analytical methods to interpret business performance and support decisions." },
      { text: "Conduct business research and apply analytical thinking to business-related problems." },
      { text: "Apply business analytics across management functions in guided practical activities." },
      { text: "Apply ethical principles while developing and evaluating analytics-driven business solutions." },
    ],
  },

  careerOpportunities: {
    headingHighlight: "After M.B.A. in Business Analytics",
    description:
      "An M.B.A. in Business Analytics can help graduates explore roles that connect business management with data interpretation and analytical decision-making. Career progression depends on individual interests, additional qualifications, practical experience, and professional skills.",
    imageUrl: cyberSecurityNewData.careerOpportunities.imageUrl,
    imageAlt: cyberSecurityNewData.careerOpportunities.imageAlt,
    industries: [
      {
        title: "Information Technology",
        descriptionLabel: "Career areas",
        description: "Business analytics, business intelligence, and data analysis roles.",
      },
      {
        title: "Banking and Financial Services",
        descriptionLabel: "Career areas",
        description: "Risk analysis, financial data analysis, and business analysis roles.",
      },
      {
        title: "Consulting and Professional Services",
        descriptionLabel: "Career areas",
        description: "Business consulting, strategy analysis, and analytics consulting roles.",
      },
      {
        title: "Healthcare",
        descriptionLabel: "Career areas",
        description: "Business analysis and analytical decision-making roles.",
      },
      {
        title: "Retail and E-commerce",
        descriptionLabel: "Career areas",
        description: "Market research, business analysis, and analytics roles.",
      },
      {
        title: "Manufacturing",
        descriptionLabel: "Career areas",
        description: "Operations analysis and business analysis roles.",
      },
      {
        title: "Telecommunications",
        descriptionLabel: "Career areas",
        description: "Business analysis and analytics roles.",
      },
      {
        title: "Logistics and Supply Chain",
        descriptionLabel: "Career areas",
        description: "Operations analysis and business analytics roles.",
      },
    ],
    careerRoles: [
      { title: "Business Intelligence Analyst", description: "Interpret business information and support decision-making using business intelligence." },
      { title: "Business Analyst", description: "Analyze business information to support management and business decisions." },
      { title: "Data Analyst", description: "Analyze data to identify trends and support business decisions." },
      { title: "Market Research Analyst", description: "Study market data and support market-related decisions." },
      { title: "Business Analytics Manager", description: "Lead business analytics activities and support organizational decision-making." },
      { title: "Risk Analyst", description: "Analyze risk-related information to support business decisions." },
      { title: "Business Consultant", description: "Provide consulting support on business and analytical matters." },
      { title: "Project Manager", description: "Manage projects and support organizational performance." },
      { title: "Research Associate", description: "Support business research and analytical activities." },
      { title: "Strategy Analyst", description: "Support business strategy through analytical insights." },
      { title: "Operations Analyst", description: "Analyze operations data and support process performance." },
      { title: "Analytics Consultant", description: "Provide analytics consulting and support business decisions." },
    ],
  },

  programComparison: {
    headers: [
      { label: "Feature" },
      { label: "MBA Business Analytics with L&T", highlight: true },
      { label: "MBA AI-Augmented FinTech with L&T" },
      { label: "BBA AI-Augmented FinTech with L&T" },
    ],
    rows: [
      {
        feature: "Degree Level",
        values: ["Postgraduate", "Postgraduate", "Undergraduate"],
      },
      {
        feature: "Duration",
        values: ["2 Years", "2 Years", "3 Years"],
      },
      {
        feature: "Eligibility",
        values: ["Graduation in any discipline", "Graduation in any discipline", "10+2 in any stream"],
      },
      {
        feature: "Industry Collaboration",
        values: ["L&T", "L&T EduTech", "L&T EduTech"],
      },
      {
        feature: "Main Focus",
        values: ["Business Intelligence and Analytics", "AI, Finance and Financial Technology", "Business Management and FinTech"],
      },
      {
        feature: "Learning Approach",
        values: [
          "Data-driven business decisions and management analytics",
          "AI-enabled financial services and digital finance",
          "Foundation in business, finance and emerging technologies",
        ],
      },
      {
        feature: "Key Areas",
        values: [
          "Business Analytics, Research, Business Intelligence and Management",
          "Digital Banking, Blockchain, Financial Analytics and AI",
          "Accounting, Business Management, Digital Banking and FinTech",
        ],
      },
      {
        feature: "Career Direction",
        values: [
          "Business Analyst, BI Analyst, Data Analyst, Business Consultant",
          "FinTech Analyst, Digital Banking Associate, Financial Data Analyst, Payments Product Analyst",
          "FinTech Associate, Banking Executive, Business Analyst, Digital Payments Associate",
        ],
      },
    ],
    chooseIfCards: [
      {
        heading: "Choose MBA Business Analytics with L&T if you like:",
        bgClass: "bg-white",
        items: [
          "Business intelligence and analytics",
          "Data-driven business decisions and management analytics",
          "Business analytics, research, and management",
          "Careers as a Business Analyst, BI Analyst, Data Analyst, or Business Consultant",
        ],
      },
      {
        heading: "Choose MBA AI-Augmented FinTech with L&T if you like:",
        bgClass: "bg-white",
        items: [
          "AI, finance, and financial technology",
          "AI-enabled financial services and digital finance",
          "Digital banking, blockchain, financial analytics, and AI",
          "Careers as a FinTech Analyst, Digital Banking Associate, Financial Data Analyst, or Payments Product Analyst",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "Which is an M.B.A. from Business Analytics College in Lucknow?",
      answer:
        "Students comparing an M.B.A. in Business Analytics College in Lucknow should consider curriculum, industry collaboration, practical learning, faculty, laboratories, internships, and career support. Shri Ramswaroop Memorial University offers an M.B.A. (Business Analytics) program in collaboration with L&T.",
    },
    {
      question: "Is the M.B.A. in Business Analytics Admission Open in Lucknow for 2026?",
      answer:
        "Yes. SRMU's program page advertises the M.B.A. in Business Analytics Admission Open 2026 in Lucknow for the 2026–27 admission session. Applicants should check the university's admission portal for the latest application and counselling updates.",
    },
    {
      question: "What is the eligibility for M.B.A. (Business Analytics) admission at SRMU?",
      answer:
        "Candidates must have completed graduation or an equivalent qualification in any discipline from a recognized university or an AICTE-recognized institute/college. The published eligibility criteria specify a minimum aggregate of 50% or CGPA 5.5 for General/OBC candidates and 45% or CGPA 5.0 for SC/ST candidates.",
    },
    {
      question: "What is the fee for M.B.A. (Business Analytics) with L&T at SRMU?",
      answer:
        "The published annual course fee is ₹1,60,000. The first-year academic fee, including the Student Welfare Fund and caution money, is ₹1,65,100. The second-year academic fee is ₹1,60,100. Hostel, transportation, and other applicable charges are additional.",
    },
    {
      question: "What is the benefit of the L&T collaboration in this MBA program?",
      answer:
        "The collaboration brings industry-oriented learning into the program through a curriculum developed with inputs from L&T experts and university researchers. The program page also specifies 32 blended teaching hours for every module and multiple levels of L&T certification.",
    },
    {
      question: "What subjects are covered in M.B.A. (Business Analytics)?",
      answer:
        "The program covers management areas such as research methodology, human resource management, business environment, financial management, innovation and entrepreneurship, production and operations management, legal aspects of business, business intelligence, and design thinking. Students should refer to the approved study and evaluation scheme for the complete semester-wise curriculum.",
    },
    {
      question: "Is M.B.A. (Business Analytics) suitable for students from non-technical backgrounds?",
      answer:
        "Yes. The published eligibility criteria allow graduates from any discipline, subject to the prescribed marks or CGPA. Students develop their management and analytical understanding through the program.",
    },
    {
      question: "What are the career opportunities after M.B.A. (Business Analytics)?",
      answer:
        "Graduates can explore roles such as business analyst, business intelligence analyst, data analyst, market research analyst, risk analyst, business consultant, and project manager, depending on their skills and experience.",
    },
    {
      question: "Does SRMU provide practical learning opportunities for MBA students?",
      answer:
        "The program highlights industry-oriented modules, blended teaching, research, and practical learning. Students can also explore activities such as guest lectures, budget sessions, industrial visits, conferences, and research projects.",
    },
    {
      question: "Which labs are available for M.B.A. (Business Analytics) students at SRMU?",
      answer:
        "The program page lists the IBM Research Lab, Advanced Data Science Lab, Oracle Lab, FinTech Smart Lab, SPSS Lab, Business Management Labs, and Professional Communication Lab.",
    },
    {
      question: "Is business analytics a good MBA specialization?",
      answer:
        "Business analytics can be a relevant specialization for students interested in using data and analytical methods to understand business performance, identify opportunities, and support management decisions. Its suitability depends on a student's interests and career goals.",
    },
    {
      question: "Why choose SRMU as an MBA College in Lucknow?",
      answer:
        "Students searching for an MBA college in Lucknow can consider SRMU for its management programs, industry collaborations, practical learning facilities, academic activities, and placement support. The M.B.A. (Business Analytics) program with L&T is designed for graduates interested in combining management knowledge with business analytics.",
    },
    {
      question: "How can I apply for MBA admission in Lucknow at SRMU?",
      answer:
        "Students interested in MBA admission in Lucknow can visit the SRMU admission portal, review the eligibility criteria for their chosen program, and complete the application process. Applicants should follow the latest admission and counselling instructions issued by the university.",
    },
    {
      question: "Is MBA Admission Open 2026 in Lucknow at SRMU?",
      answer:
        "SRMU's program page advertises MBA Admission Open 2026 in Lucknow for the 2026–27 session. Students should check the official admission portal for current application deadlines and seat availability.",
    },
    {
      question: "Does SRMU offer an MBA in Healthcare & Hospital Management?",
      answer:
        "Yes. SRMU offers a separate M.B.A. in Healthcare & Hospital Management program for graduates interested in hospital administration, healthcare operations, and management of healthcare services. Visit the dedicated program page for details.",
    },
    {
      question: "Can I apply for an M.B.A. in Healthcare & Hospital Management at SRMU?",
      answer:
        "Graduates from any discipline can explore admission to the M.B.A. in Healthcare & Hospital Management program, subject to the university's prescribed eligibility criteria. Visit the official program page for admission details, fees, and other requirements.",
    },
    {
      question: "Can I pursue a Ph.D. after M.B.A. (Business Analytics)?",
      answer:
        "Yes. After completing the MBA, graduates may explore doctoral studies in management or related disciplines, subject to the eligibility criteria and admission requirements of the institution.",
    },
  ],
};

export default mbaBusinessAnalyticsLTNewData;
