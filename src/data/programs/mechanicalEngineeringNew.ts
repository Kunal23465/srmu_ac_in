import type { ProgramPageDataNew } from "../../types/programPageNew";

const mechanicalEngineeringNewData: ProgramPageDataNew = {
  // ----------------------------------------------------------
  // HERO BANNER
  // ----------------------------------------------------------
  heroBanner: {
    degreeTitle: "B.Tech. in Mechanical Engineering",
    specialization: "Mechanical Engineering",
    subtitle: "In collaboration with L&T",
    desktopBannerUrl: "/assets/images/new-mechnical-program/desktop-banner.webp",
    mobileBannerUrl: "/assets/images/new-mechnical-program/mobile-banner.webp",
    applyNowUrl: "https://students.srmu.ac.in/login",
    brochureUrl: "/Broucher_SRMU_25_April___.pdf",
  },

  // ----------------------------------------------------------
  // WHY STUDY
  // ----------------------------------------------------------
  whyStudy: {
    year: "2027",
    quote: '"Will mechanical engineering remain relevant in the age of artificial intelligence manufacturing?"—Yes. Modern mechanical engineering is evolving with advanced manufacturing, automation, robotics, digital design, energy systems, and smart technologies.',
    paragraphs: [
      "Mechanical engineering continues to play an important role in manufacturing, automotive, construction, energy, aerospace, automation, and industrial production. As industries adopt automation, computer-aided design, smart manufacturing, and advanced production systems, mechanical engineers increasingly need both strong engineering fundamentals and practical industry skills.",
      "A B.Tech. in Mechanical Engineering provides students with a foundation in engineering mechanics, thermodynamics, fluid mechanics, machine design, manufacturing, materials, and industrial engineering.",
      "At SRMU, the B.Tech. in Mechanical Engineering is offered in collaboration with L&T, combining academic learning with industry-oriented exposure in areas such as design, manufacturing, and automation."
    ],
    imageUrl: "/assets/images/new-mechnical-program/vett6qrcicwki2tdldms.webp",
    imageAlt: "Mechanical Engineering with L&T",
    benefitCards: [
      { title: "Strong Industry Relevance", description: "Mechanical engineers are required across manufacturing, automotive, energy, infrastructure, aerospace, and industrial engineering." },
      { title: "Diverse Career Roles", description: "Career pathways can include design engineering, production engineering, manufacturing, quality, maintenance, automation, and project engineering." },
      { title: "Practical Engineering Skills", description: "Students develop hands-on understanding of machine design, manufacturing processes, CAD, thermal systems, and industrial engineering." },
      { title: "Industry Integration", description: "The L&T collaboration connects academic learning with industry-oriented modules, practical training, and application-based engineering education." },
    ],
  },

  // ----------------------------------------------------------
  // L&T BENEFITS
  // ----------------------------------------------------------
  ltBenefits: {
    introText: "By combining SRMU's academic foundation with L&T's industry-oriented learning, students can develop practical engineering skills alongside their theoretical knowledge. The industry-integrated learning approach exposes students to areas such as:",
    domainRows: [
      { tags: ["Mechanical Design", "Manufacturing Engineering", "Computer-Aided Design", "Production Engineering"] },
      { tags: ["Industrial Automation", "Engineering Materials", "Thermal Engineering", "Machine Design"] },
      { tags: ["Quality & Process Engineering", "Industrial Safety", "Maintenance Engineering", "Project Engineering"] }
    ],
    followUpText: "The L&T-integrated learning experience enables students to connect classroom concepts with practical engineering applications through laboratory work, industrial exposure, case studies, training and projects.",
    projectsHeading: "Students can work on projects such as:",
    projectsCol1: [
      { text: "Automated Manufacturing System" },
      { text: "CAD-Based Machine Component Design" },
      { text: "Pneumatic & Hydraulic System" },
      { text: "CNC-Based Manufacturing Project" },
      { text: "Solar Thermal System" }
    ],
    projectsCol2: [
      { text: "Industrial Automation Prototype" },
      { text: "Mechanical Product Design" },
      { text: "Heat Transfer Analysis" },
      { text: "Manufacturing Process Optimisation" },
      { text: "Predictive Maintenance Model" }
    ],
    tableRows: [
      { label: "Program", value: "B.Tech. in Mechanical Engineering" },
      { label: "Duration", value: "4 Years" },
      { label: "Eligibility", value: "Passed 10+2 or equivalent with Physics and Mathematics as compulsory subjects along with one of Chemistry/Computer Science/Technical Vocational Subject with minimum 45% aggregate marks." },
      { label: "Recognised By", value: "UGC" },
      { label: "University Accreditation", value: "NAAC Accredited" },
      { label: "Industry Partner", value: "Larsen & Toubro (L&T)" },
      { label: "Learning Model", value: "Classroom + Labs + Projects + Industry Learning" },
      { label: "Internship", value: "Included" },
      { label: "Placement Assistance", value: "Available" },
      { label: "Research Opportunities", value: "Yes" },
      { label: "Capstone Project", value: "Yes" },
      { label: "Industry Certifications", value: "Supported" },
      { label: "Career Support", value: "Resume Building, Coding, Mock Interviews & Placement Training" }
    ],
    tableBackgroundImageUrl: "/assets/images/new-mechnical-program/gzpezebn8pgp0oqnxpdq.webp",
  },

  // ----------------------------------------------------------
  // INDUSTRY EXPOSURE
  // ----------------------------------------------------------
  industryExposure: {
    sectionTitle: "Industry Exposure &",
    sectionTitleHighlight: "Mechanical Engineering Learning at SRMU, Lucknow",
    introParagraph: "Mechanical engineering education goes beyond classroom theory. At SRMU, students pursuing a B.Tech. in Mechanical Engineering can gain practical exposure through laboratories, workshops, industrial visits, expert interactions, projects, and industry-oriented learning.",
    expertSessionsHeading: "Students develop an understanding of how engineering principles are used in real manufacturing, design, production, and industrial environments.",
    expertSessionsParagraph: "",
    featuredCard: {
      badge: "Guest Lecture",
      secondaryBadge: "",
      title: "Students were introduced to modern manufacturing practices, production systems and technology-driven industrial processes",
      presenter: "",
      paragraphs: ["helping them understand how mechanical engineering concepts are applied in real manufacturing environments."],
      imageUrl: "/assets/images/new-mechnical-program/lhnggy89mzsivw8j6k7g.webp",
      icon: "compass"
    },
    secondaryCards: [
      {
        badge: "Expert Session on Industry 4.0",
        title: "Automation, Smart Manufacturing & Digital Technologies",
        presenter: "",
        paragraphs: ["The session provided students with an understanding of Industry 4.0, automation and emerging digital technologies transforming modern manufacturing and engineering operations."],
        icon: "factory"
      },
      {
        badge: "Expert Interaction on Automotive Engineering",
        title: "Automotive Systems & Emerging Technologies",
        presenter: "",
        paragraphs: ["Students gained insights into contemporary automotive engineering, vehicle technologies, manufacturing processes and the evolving requirements of the automotive industry."],
        icon: "car"
      },
      {
        badge: "Workshop",
        title: "CAD/CAM & Design Engineering Workshop",
        presenter: "Computer-Aided Design & Manufacturing",
        paragraphs: ["The workshop provided practical exposure to CAD/CAM concepts, engineering design and computer-aided manufacturing processes used in modern mechanical engineering."],
        icon: "design"
      },
      {
        badge: "Workshop",
        title: "Automation & Industrial Systems Workshop",
        presenter: "Industrial Automation",
        paragraphs: ["Students explored automation technologies, industrial systems and their applications in manufacturing environments."],
        icon: "settings"
      },
      {
        badge: "Workshop",
        title: "Design Thinking & Critical Thinking Workshop",
        presenter: "Engineering Problem Solving",
        paragraphs: ["The workshop encouraged students to approach engineering challenges through structured problem-solving, creative thinking and innovative design methods."],
        icon: "wrench"
      },
      {
        badge: "Workshop",
        title: "Lean Startup & Minimum Viable Product Workshop",
        presenter: "Innovation & Product Development",
        paragraphs: ["Students learned how ideas can be developed into practical products through problem identification, validation, prototyping and iterative improvement."],
        icon: "settings"
      },
      {
        badge: "Hackathons / Innovation Activities",
        title: "Innovation & Engineering Challenges",
        presenter: "Product design and development, Smart manufacturing, Industrial automation",
        paragraphs: ["Students get opportunities to work on engineering challenges that encourage innovation, teamwork, and practical problem-solving. Such activities help learners transform engineering concepts into prototypes, products, and technology-driven solutions."],
        icon: "energy"
      },
      {
        badge: "Industrial Visit",
        title: "L&T Komatsu Machine Yard",
        presenter: "26 February 2026",
        paragraphs: ["Students received practical exposure to heavy construction machinery, equipment and industrial operations, helping them understand the application of mechanical engineering principles in large-scale industrial environments."],
        icon: "factory"
      },
      {
        badge: "Industrial Visit",
        title: "L&T Construction and Mining Machinery",
        presenter: "18 September 2025",
        paragraphs: ["The visit provided students with first-hand exposure to construction and mining machinery, manufacturing-related processes and industrial equipment used in the infrastructure sector."],
        icon: "factory"
      },
      {
        badge: "Industrial Visit",
        title: "NTPC, Tanda",
        presenter: "26 April 2025",
        paragraphs: ["Students gained practical exposure to power-generation systems, plant operations, and engineering processes used in a large industrial facility."],
        icon: "energy"
      }
    ],
    departmentUrl: "/department-of-mechanical-engineering",
    sectionBackgroundImageUrl: "/assets/images/new-mechnical-program/tsb9lhfday8gnfbkkhjz.webp",
  },

  // ----------------------------------------------------------
  // PLACEMENT
  // ----------------------------------------------------------
  placement: {
    stats: [
      { val: "₹53 LPA", label: "Highest Package" },
      { val: "₹4.5 LPA", label: "Average Package" },
      { val: "1200+", label: "Job Offers Given" },
      { val: "225+", label: "Students Placed" },
    ],
    imageUrl: "/assets/images/new-mechnical-program/uabl75dnikvruvxvs5ke.webp",
    imageAlt: "Mechanical Engineering Placement Highlights",
    placementDetailUrl: "/placement-records",
  },

  // ----------------------------------------------------------
  // LABS
  // ----------------------------------------------------------
  labs: {
    sectionTitle: "Industry Integrated Curriculum",
    sectionTitleHighlight: "with L&T",
    introParagraph: "Strengthened through academic collaboration with L&T, the curriculum connects university education with industry expectations through application-oriented learning, engineering case studies, practical training and problem-solving methodologies. Students develop a foundation in mechanical engineering while gaining exposure to modern design, manufacturing and automation practices.",
    curriculumImageDesktop: "/assets/images/new-mechnical-program/lzc1zhjq1rvlllinpi6b.webp",
    curriculumImageMobile: "/assets/images/new-mechnical-program/lzc1zhjq1rvlllinpi6b.webp",
    curriculumOverlayItems: [
      { text: "Design Engineering" },
      { text: "Advanced Manufacturing" },
      { text: "Industrial Automation" },
      { text: "Machine Design" },
      { text: "CAD/CAM" },
      { text: "Thermal Engineering" },
      { text: "Production Engineering" },
      { text: "Quality & Process Engineering" },
    ],
    curriculumSectionTitle: "Learn Mechanical Engineering the Way Industry Works",
    curriculumDescription: "From the first year, students learn to design, analyse, manufacture, test and improve mechanical systems through engineering fundamentals, practical work and industry-oriented learning.",
    reelVideoUrl: "/MicrosoftTeams-video.mp4",
    cardBackgroundImageUrl: "/assets/images/new-mechnical-program/blrmnpd51nih1a4hunsd.webp",
    labs: [
      {
        label: "LAB / 01",
        title: "Mechanical Engineering Design Lab",
        tagline: "Turn engineering concepts into practical designs.",
        description: "Students apply principles of machine design, engineering drawing and mechanical systems to develop and analyse engineering components.",
        items: ["Machine Component Design", "Engineering Drawing", "CAD Modelling", "Design Analysis", "Mechanical Assemblies", "Product Development"],
      },
      {
        label: "LAB / 02",
        title: "Manufacturing & Production Lab",
        tagline: "Understand how engineering products are manufactured.",
        description: "Students gain practical exposure to conventional and modern manufacturing processes used in mechanical industries.",
        items: ["Machining Processes", "CNC Manufacturing", "Welding", "Casting", "Metal Forming", "Production Processes"],
      },
      {
        label: "LAB / 03",
        title: "Thermal Engineering Lab",
        tagline: "Explore energy, heat and fluid systems.",
        description: "Students understand the behaviour and performance of thermal systems used across industrial and engineering applications.",
        items: ["Heat Transfer", "Thermodynamics", "Fluid Mechanics", "IC Engines", "Refrigeration", "Energy Systems"],
      },
      {
        label: "LAB / 04",
        title: "CAD/CAM & Automation Lab",
        tagline: "Design digitally. Manufacture intelligently.",
        description: "Students explore computer-aided design, manufacturing and automation technologies used in modern production environments.",
        items: ["3D CAD Modelling", "CAD/CAM", "CNC Programming", "Automation", "Robotics", "Digital Manufacturing"],
      },
      {
        label: "LAB / 05",
        title: "Industrial Automation & Robotics Learning Environment",
        tagline: "Understand the future of intelligent manufacturing.",
        description: "Students explore how automation and robotics are used to improve productivity, precision and efficiency in industrial environments.",
        items: ["Industrial Robotics", "PLC Fundamentals", "Automated Production", "Sensors & Actuators", "Process Automation", "Smart Manufacturing"],
      }
    ],
  },

  // ----------------------------------------------------------
  // YEAR JOURNEY
  // ----------------------------------------------------------
  yearJourney: {
    introParagraph: "Every year builds on the last—combining engineering fundamentals, practical implementation, industry exposure, design skills, manufacturing knowledge, and project experience.",
    year1: {
      title: "YEAR 1 — FOUNDATIONS",
      quote: "Every mechanical engineer begins by understanding how machines work — and grows by learning how to design, improve and build them.",
      subjects: [
        "Engineering Mathematics",
        "Engineering Physics",
        "Engineering Chemistry",
        "Engineering Graphics",
        "Basic Electrical Engineering",
        "Basic Mechanical Engineering",
        "Programming Fundamentals",
        "Communication Skills"
      ],
      practicalLearning: [
        "Learn engineering drawing",
        "Understand basic mechanical systems",
        "Perform introductory workshop practices",
        "Learn basic CAD concepts",
        "Develop engineering problem-solving skills"
      ],
      projects: [
        "Mechanical Workshop Project",
        "Basic CAD Model",
        "Simple Mechanical Mechanism",
        "Engineering Drawing Project",
        "Basic Automation Prototype"
      ],
      tools: ["AutoCAD", "SolidWorks", "CATIA", "MATLAB", "Basic CAD Tools"],
      outcome: "A strong foundation in engineering mechanics and drawing.",
    },
    year2: {
      title: "YEAR 2 — DESIGN & MANUFACTURING",
      quote: "Every mechanical engineer begins by understanding how machines work — and grows by learning how to design, improve and build them.",
      subjects: [
        "Engineering Mechanics",
        "Strength of Materials",
        "Manufacturing Processes",
        "Thermodynamics",
        "Fluid Mechanics",
        "Machine Drawing",
        "Materials Science",
        "Mechanical Measurements"
      ],
      practicalLearning: [
        "Design mechanical components",
        "Perform material testing",
        "Study manufacturing processes",
        "Analyse mechanical systems",
        "Work with CAD software"
      ],
      projects: [
        "Machine Component Design",
        "Heat Transfer Experiment",
        "CAD-Based Product Design",
        "Manufacturing Process Project",
        "Hydraulic/Pneumatic System"
      ],
      tools: ["AutoCAD", "SolidWorks", "ANSYS", "MATLAB", "CNC/CAM Software"],
      outcome: "Ability to analyze and design simple mechanical systems.",
    },
    year3: {
      title: "YEAR 3 — ADVANCED ENGINEERING & INDUSTRIAL SYSTEMS",
      quote: "Every mechanical engineer begins by understanding how machines work — and grows by learning how to design, improve and build them.",
      subjects: [
        "Machine Design",
        "Heat & Mass Transfer",
        "Manufacturing Science",
        "Computer-Aided Design",
        "Applied Thermodynamics",
        "Industrial Engineering",
        "Mechatronics",
        "Production Management"
      ],
      practicalLearning: [
        "Design complex mechanical components",
        "Analyse thermal systems",
        "Work with CNC and CAM technologies",
        "Understand industrial automation",
        "Perform engineering simulations"
      ],
      projects: [
        "CNC Manufacturing Project",
        "Mechanical System Simulation",
        "Automated Production Prototype",
        "Thermal System Design",
        "Industrial Automation Project"
      ],
      tools: ["SolidWorks", "CATIA", "ANSYS", "AutoCAD", "MATLAB", "CNC/CAM Tools"],
      outcome: "Proficiency in complex system design and simulation.",
    },
    year4: {
      title: "YEAR 4 — INDUSTRY PROJECT & PROFESSIONAL APPLICATION",
      quote: "Every mechanical engineer begins by understanding how machines work — and grows by learning how to design, improve and build them.",
      subjects: [
        "Advanced Manufacturing",
        "Industrial Automation",
        "Robotics",
        "Engineering Management",
        "Quality Control",
        "Industrial Training",
        "Major Project"
      ],
      practicalLearning: [
        "Work on industry-oriented projects",
        "Apply mechanical design principles",
        "Develop manufacturing solutions",
        "Work with automation systems",
        "Complete industrial training",
        "Develop a major engineering project"
      ],
      projects: [
        "Smart Manufacturing System",
        "Industrial Automation Project",
        "Robotics Application",
        "Advanced Machine Design",
        "Manufacturing Optimisation Project"
      ],
      tools: ["SolidWorks", "CATIA", "ANSYS", "AutoCAD", "MATLAB", "PLC/Automation Tools"],
      outcome: "Industry-ready professional with hands-on mechanical and automation experience.",
    },
  },

  // ----------------------------------------------------------
  // FEE STRUCTURE
  // ----------------------------------------------------------
  fee: {
    feeRows: [
      { label: "Course Fee", yr1: "₹1,70,000", yr2: "₹1,70,000", yr3: "₹1,70,000", yr4: "₹1,70,000" },
      { label: "Student Welfare Fund", yr1: "₹100", yr2: "₹100", yr3: "₹100", yr4: "₹100" },
      { label: "Caution Money*", yr1: "₹5,000", yr2: "–", yr3: "–", yr4: "–" },
      { label: "Academic Fee Total", yr1: "₹1,75,100", yr2: "₹1,70,100", yr3: "₹1,70,100", yr4: "₹1,70,100" },
      { label: "Hostel Fee (Optional)**", yr1: "₹85,000", yr2: "₹80,000", yr3: "₹80,000", yr4: "₹80,000" },
      { label: "Transportation (Optional)", yr1: "₹35,000", yr2: "₹35,000", yr3: "₹35,000", yr4: "₹35,000" },
    ],
    feeNote: "Additional charges: Alumni Fee ₹500 and Degree Fee ₹1,000 (payable in the final year). *One-time refundable caution money as per university policy. **Hostel and transportation are optional and subject to university guidelines.",
  },

  // ----------------------------------------------------------
  // PO / PSO / PLO
  // ----------------------------------------------------------
  poPsoPlo: {
    objectives: [
      { text: "Candidate must have passed 10+2 or equivalent system from any recognized Central/ State Board with Physics and Mathematics as compulsory subjects along with one of the Chemistry/Computer Science/Technical Vocational Subject with minimum aggregate marks of 45%." },
    
    ],
    learningOutcomes: [
       { text: "Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems." },
      { text: "Problem analysis: Identify, formulate, research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences." },
      { text: "Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations." },
      { text: "Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions." },
      { text: "Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations." },
      { text: "The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice." },
      { text: "Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development." },
      { text: "Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice." },
      { text: "Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings." },
      { text: "Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions." },
      { text: "Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments." },
      { text: "Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change." }
    ],
    specificOutcomes: [
      {
  text: "To develop the impact of engineering on society and utilize the skills to work on multi-disciplinary tasks for social and economic benefit of society.",
},
{
  text: "Ability to identify, formulate and solve complex engineering problems by utilizing the knowledge gained from different subjects of Electrical Engineering.",
},
{
  text: "Ability to develop new knowledge to use modern engineering tools, software and equipment to analyze problems necessary for engineering practice and the knowledge and skills gained also help to make society aware of non-conventional energy resources and help to overcome the problems of depletion of conventional energy resources.",
},
{
  text: "Ability to improve the techniques and skills to appear and succeed in competitive examinations like GATE, GRE, TOEFL, GMAT etc and to develop the technical skills, communication skills and helps in implementing in small sector industries to develop the entrepreneur skills.",
}
    ],
  },

  // ----------------------------------------------------------
  // CAREER OPPORTUNITIES
  // ----------------------------------------------------------
  careerOpportunities: {
    headingHighlight: "in Mechanical Engineering",
    description: "Mechanical engineering is applied across industries that design, manufacture, operate and maintain machines, products, energy systems and industrial infrastructure. A B.Tech. in Mechanical Engineering can prepare students for career pathways across manufacturing, automotive, aerospace, energy, automation, infrastructure, design and industrial engineering.",
    imageUrl: "/assets/images/new-mechnical-program/jg3hq3h4vwrxfxh3ejkl.webp",
    imageAlt: "Mechanical Engineering Career Opportunities",
    industries: [
      { title: "Automotive & Mobility", descriptionLabel: "Works on", description: "Vehicle Design, Powertrain Systems, Manufacturing, Vehicle Components, Testing & Quality" },
      { title: "Manufacturing", descriptionLabel: "Works on", description: "Production Systems, CNC & Machining, Process Engineering, Quality Control, Manufacturing Automation" },
      { title: "Energy & Power", descriptionLabel: "Works on", description: "Thermal Systems, Power Generation, Energy Efficiency, Renewable Energy Systems, Equipment Design" },
      { title: "Aerospace", descriptionLabel: "Works on", description: "Aerospace Components, Mechanical Systems, Manufacturing, Materials, Testing & Maintenance" },
      { title: "Industrial Automation", descriptionLabel: "Works on", description: "Robotics, Automated Production, PLC Systems, Process Automation, Smart Manufacturing" },
      { title: "Infrastructure & Engineering", descriptionLabel: "Works on", description: "Mechanical Systems, Equipment, Plant Engineering, Project Engineering, Maintenance" }
    ],
    careerRoles: [
      { title: "Design Engineer", description: "Design and develop mechanical components and systems." },
      { title: "Production Engineer", description: "Manage and optimize manufacturing processes." },
      { title: "Automation Engineer", description: "Develop automated solutions and robotics for industrial processes." }
    ],
  },

  // ----------------------------------------------------------
  // PROGRAM COMPARISON
  // ----------------------------------------------------------
  programComparison: {
    headers: [
      { label: "Feature" },
      { label: "Mechanical Engineering", highlight: true },
      { label: "CSE" },
      { label: "Electrical Engineering" },
      { label: "Civil Engineering" },
    ],
    rows: [
      { feature: "Focus", values: ["Machines, Design & Manufacturing", "Software & Computing", "Electrical & Power Systems", "Infrastructure & Construction"] },
      { feature: "Key Skills", values: ["Design, Manufacturing, Mechanics", "Programming, Systems", "Circuits, Power, Control", "Structures, Construction"] },
      { feature: "Programming", values: ["Medium", "Very High", "Medium", "Low"] },
      { feature: "CAD / Design", values: ["Core", "Low", "Medium", "High"] },
      { feature: "Manufacturing", values: ["Core", "Low", "Medium", "Low"] },
      { feature: "Automation", values: ["High", "High", "High", "Low"] },
      { feature: "Thermal Engineering", values: ["Core", "Low", "Medium", "Low"] },
      { feature: "Robotics", values: ["High", "High", "High", "Low"] },
      { feature: "Career Roles", values: ["Design/Production Engineer", "Software Developer", "Electrical Engineer", "Civil/Structural Engineer"] },
      { feature: "Future Scope", values: ["Automation, Robotics & Smart Manufacturing", "AI, Cloud & Software", "EV, Power & Automation", "Smart Infrastructure & Sustainable Construction"] },
    ],
    chooseIfCards: [
      {
        heading: "Choose B.Tech. Mechanical Engineering if you like:",
        bgClass: "bg-[#E6FAF8]",
        items: [
          "Understanding how machines work",
          "Designing mechanical systems",
          "Manufacturing and production",
          "CAD and 3D modelling",
          "Robotics and automation",
          "Automotive technology",
          "Engineering problem-solving",
          "Working with machines and physical systems"
        ],
      },
      {
        heading: "Choose B.Tech. Computer Science if you like:",
        bgClass: "bg-[#FFFBEB]",
        items: [
          "Software development",
          "Application building",
          "Programming-heavy careers",
          "Artificial Intelligence",
          "Data Science",
          "Cloud Computing"
        ],
      },
    ],
  },
};

export default mechanicalEngineeringNewData;
