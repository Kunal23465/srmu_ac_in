// ============================================================
// eceSemiconductorDesignNew.ts
// Data for the B.Tech ECE Semiconductor Design page.
// ============================================================

import type { ProgramPageDataNew } from "../../types/programPageNew";

const eceSemiconductorDesignNewData: ProgramPageDataNew = {
  heroBanner: {
    degreeTitle: "B.Tech. in Electronics & Communication Engineering",
    specialization: "Semiconductor Design",
    subtitle: "In collaboration with L&T",
    desktopBannerUrl: "/assets/images/semiconductor-new/desktop-banner.webp",
    mobileBannerUrl: "/assets/images/semiconductor-new/mobile-banner.webp",
    applyNowUrl: "https://students.srmu.ac.in/login",
    brochureUrl: "/Broucher_SRMU_25_April___.pdf",
  },
  whyStudy: {
    year: "2027",
    quote: '"The future of technology is built on semiconductors."',
    paragraphs: [
      "Semiconductors are at the heart of modern technologies, powering smartphones, electric vehicles, artificial intelligence systems, communication networks, consumer electronics, data centers, and smart devices.",
      "The B.Tech. in ECE (Semiconductor Design) combines the fundamentals of Electronics & Communication Engineering with specialized learning in semiconductor technologies, VLSI, chip design, embedded systems, and digital hardware.",
      "At SRMU, the program is offered in collaboration with L&T, providing an industry-oriented learning environment that connects electronics education with practical applications in semiconductor and electronic system design. The current SRMU ECE program lists specialized laboratories, including VLSI, Simulation, Microprocessor, Digital Electronics, Signal Processing & Communication, Networking, and Antenna & Microwave Labs.",
    ],
    imageUrl: "/assets/images/semiconductor-new/why-study-image.webp",
    imageAlt: "Semiconductor Design Growth",
    benefitCards: [
      { title: "Semiconductor-Focused Education", description: "Develop knowledge of semiconductor devices, digital electronics, integrated circuits, VLSI, and chip design." },
      { title: "Industry-Relevant Skills", description: "Build practical skills relevant to semiconductor, electronics, embedded systems, and hardware industries." },
      { title: "Hands-On Learning", description: "Work with electronics, VLSI, microprocessor, simulation, and communication laboratories." },
      { title: "L&T Industry Integration", description: "Gain exposure to industry-oriented learning through the L&T collaboration and practical engineering activities." },
    ],
  },
  ltBenefits: {
    introText: "The collaboration with L&T adds an industry-oriented dimension to the B.Tech. ECE Semiconductor Design program. The program combines the academic foundation of electronics & communication engineering with industry-oriented learning in semiconductor and electronic system design.",
    domainRows: [
      { tags: ["Digital IC Design", "VLSI-Based System", "Embedded Electronics Prototype", "FPGA-Based Digital System", "IoT Hardware Prototype"] },
      { tags: ["Microcontroller-Based Automation System", "Semiconductor Device Simulation", "Digital Signal Processing System", "Smart Sensor System", "Communication System Prototype"] }
    ],
    followUpText: "Students are introduced to practical engineering workflows involving circuit design, simulation, digital systems, embedded technologies, and VLSI. The L&T collaboration helps students understand how electronics engineering concepts can be applied to real-world technology and industrial applications.",
    projectsHeading: "Students work on projects such as:",
    projectsCol1: [
      { text: "Digital IC Design" },
      { text: "VLSI-Based System" },
      { text: "Embedded Electronics Prototype" },
      { text: "FPGA-Based Digital System" },
      { text: "IoT Hardware Prototype" },
    ],
    projectsCol2: [
      { text: "Microcontroller-Based Automation System" },
      { text: "Semiconductor Device Simulation" },
      { text: "Digital Signal Processing System" },
      { text: "Smart Sensor System" },
      { text: "Communication System Prototype" },
    ],
    tableRows: [
      { label: "Program", value: "B.Tech. in ECE (Semiconductor Design)" },
      { label: "Duration", value: "4 Years" },
      { label: "Eligibility", value: "10+2 with Physics & Mathematics" },
      { label: "Recognized By", value: "UGC" },
      { label: "University Accreditation", value: "NAAC Accredited" },
      { label: "Industry Partner", value: "Larsen & Toubro (L&T) EduTech" },
      { label: "Learning Model", value: "Classroom + Labs + Projects + Industry Learning" },
      { label: "Internship", value: "Included" },
      { label: "Placement Assistance", value: "Available" },
      { label: "Research Opportunities", value: "Yes" },
      { label: "Capstone Project", value: "Yes" },
      { label: "Industry Certifications", value: "Supported" },
      { label: "Career Support", value: "Resume Building, Coding, Mock Interviews & Placement Training" },
    ],
    tableBackgroundImageUrl: "/assets/images/semiconductor-new/industry.webp",
  },
  industryExposure: {
    sectionTitle: "Industry Exposure & Semiconductor Engineering Learning",
    sectionTitleHighlight: "at SRMU",
    introParagraph: "Semiconductor engineering requires strong theoretical knowledge combined with practical electronics and hardware skills. At SRMU, students can strengthen their learning through laboratory work, workshops, expert sessions, projects, simulations, and industry-oriented activities.",
    expertSessionsHeading: "Industry & Expert Sessions",
    expertSessionsParagraph: "Students can strengthen their learning through laboratory work, workshops, expert sessions, projects, simulations, and industry-oriented activities.",
    featuredCard: {
      badge: "Guest Lecture",
      secondaryBadge: "OPTICAL COMMUNICATION",
      title: "Guest Lecture on Opto-Electronics & Optical Fibre Communication",
      presenter: "Optical Communication & Photonics",
      imageUrl: "/assets/images/semiconductor-new/guest-lecture.webp",
      paragraphs: [
        "Students gained insights into opto-electronics, optical fibre communication, and the role of photonic technologies in modern communication systems."
      ],
    },
    secondaryCards: [
      {
        badge: "Guest Lecture",
        icon: "cpu",
        title: "Guest Lecture on Short Channel MOSFETs",
        presenter: "Semiconductor Devices",
        paragraphs: [
          "The session introduced students to the theory and characteristics of short-channel MOSFETs, providing exposure to semiconductor-device concepts relevant to modern integrated-circuit design."
        ],
      },
      {
        badge: "Guest Lecture",
        icon: "cpu",
        title: "Guest Lecture on Mobile Communication",
        presenter: "Mobile & Wireless Communication",
        paragraphs: [
          "Students explored the fundamentals and applications of mobile communication technologies and their role in contemporary wireless communication systems."
        ],
      },
      {
        badge: "Workshop",
        icon: "code2",
        title: "Hands-on Training on NI-LabVIEW and MyRIO",
        presenter: "LabVIEW and MyRIO-based hardware",
        paragraphs: [
          "The four-week hands-on training provided practical exposure to LabVIEW and MyRIO-based hardware interfacing, measurement, and engineering applications."
        ],
      },
      {
        badge: "Workshop",
        icon: "code2",
        title: "Workshop on Implementation of Channel Coding Schemes in LabVIEW & Scilab",
        presenter: "Implementation and simulation",
        paragraphs: [
          "The workshop introduced students to the implementation and simulation of channel-coding techniques using LabVIEW and Scilab, connecting communication theory with practical tools."
        ],
      },
      {
        badge: "Industrial Visit",
        icon: "compass",
        title: "L&T Industrial Exposure",
        presenter: "Larsen & Toubro (L&T)",
        paragraphs: [
          "Students gain exposure to industrial engineering practices, technology-driven operations, and professional workflows through industry interaction and practical learning associated with the L&T collaboration."
        ],
      },
    ],
    departmentUrl: "https://srmu.ac.in/department-of-computer-science-and-engineering",
    sectionBackgroundImageUrl: "/assets/images/semiconductor-new/industry-exposure-background.webp",
  },
  placement: {
    stats: [
      { val: "₹53 LPA", label: "Highest Package" },
      { val: "₹4.5 LPA", label: "Average Package" },
      { val: "1200+", label: "Job Offers Given" },
      { val: "225+", label: "Students Placed" },
    ],
    imageUrl: "/assets/images/semiconductor-new/where-students-placed.webp",
    imageAlt: "Student preparing for career and placement",
    placementDetailUrl: "https://srmu.ac.in/placements",
  },
  labs: {
    sectionTitle: "Learn Semiconductor Design",
    sectionTitleHighlight: "the Way Industry Works",
    introParagraph: "From analyzing large datasets to building intelligent applications, students learn how technology can be used to solve real-world problems.",
    curriculumImageDesktop: "/assets/images/semiconductor-new/learn-semi.webp",
    curriculumImageMobile: "/assets/images/semiconductor-new/learn-semi.webp",
    curriculumOverlayItems: [
      { text: "Semiconductor\nDevices" },
      { text: "Digital\nElectronics" },
      { text: "VLSI\nDesign" },
      { text: "Integrated\nCircuits" },
      { text: "Chip\nDesign" },
      { text: "Embedded\nSystems" },
      { text: "Microprocessors\n& Microcontrollers" },
      { text: "Hardware\nDesign" },
    ],
    curriculumSectionTitle: "Industry Integrated Curriculum with L&T",
    curriculumDescription: "Through collaboration with L&T, the curriculum connects electronics & communication engineering fundamentals with industry-oriented semiconductor and hardware learning. Students develop knowledge of electronics, digital systems, VLSI, embedded technologies, communication systems, and modern engineering tools. The program is designed to help students understand both engineering fundamentals and practical technology applications.",
    reelVideoUrl: "/MicrosoftTeams-video.mp4",
    cardBackgroundImageUrl: "/assets/images/semiconductor-new/card-image.webp",
    labs: [
      {
        label: "LAB / 01",
        title: "VLSI Design Lab",
        tagline: "Design the building blocks of modern chips.",
        description: "Students explore digital design and VLSI concepts through simulation, circuit development and hardware-oriented exercises.",
        items: ["Digital Circuit Design", "VLSI Fundamentals", "IC Design", "FPGA Concepts", "Hardware Description Languages", "Circuit Simulation"],
      },
      {
        label: "LAB / 02",
        title: "Microprocessor & Microcontroller Lab",
        tagline: "Build intelligent electronic systems.",
        description: "Students work with microprocessors and microcontrollers to understand embedded hardware and control applications.",
        items: ["Microprocessor Programming", "Microcontroller Programming", "Embedded Systems", "Interfacing", "Sensors", "Hardware Control"],
      },
      {
        label: "LAB / 03",
        title: "Digital Electronics Lab",
        tagline: "Build the foundation of digital hardware.",
        description: "Students learn to design, analyse and implement digital electronic circuits.",
        items: ["Logic Gates", "Combinational Circuits", "Sequential Circuits", "Digital ICs", "Counters", "Registers"],
      },
      {
        label: "LAB / 04",
        title: "Simulation & Electronic Circuit Design Lab",
        tagline: "Design, simulate and test electronic systems.",
        description: "Students use simulation tools to analyse circuits before hardware implementation.",
        items: ["Circuit Simulation", "Analog Circuits", "Digital Circuits", "Electronic Components", "Circuit Analysis", "System Modelling"],
      },
      {
        label: "LAB / 05",
        title: "Signal Processing & Communication Lab",
        tagline: "Understand how information travels through electronic systems.",
        description: "Students explore signal processing and communication technologies through practical experiments.",
        items: ["Digital Signal Processing", "Communication Systems", "Signal Analysis", "Modulation", "Wireless Communication", "Optical Communication"],
      },
    ],
  },
  yearJourney: {
    introParagraph: "Every year builds on the last, combining electronics fundamentals, digital systems, semiconductor concepts, VLSI, embedded systems, practical laboratory experience, and industry-oriented projects.",
    year1: {
      title: "Year 1: ELECTRONICS & ENGINEERING FOUNDATIONS",
      quote: '"Every data science and AI professional begins by understanding data, computing, and how intelligent systems learn."',
      subjects: [
        "Engineering Mathematics",
        "Engineering Physics",
        "Engineering Chemistry",
        "Basic Electrical Engineering",
        "Engineering Graphics",
        "Programming Fundamentals",
        "Basic Electronics",
        "Communication Skills"
      ],
      practicalLearning: [
        "Understand basic electronic components",
        "Build introductory circuits",
        "Learn engineering mathematics",
        "Develop programming fundamentals",
        "Perform basic electronics experiments",
        "Understand digital logic"
      ],
      projects: [
        "Electronic Sensor Project",
        "Basic Digital Circuit",
        "LED Control System",
        "Mini Embedded Prototype",
        "Basic Power Supply"
      ],
      tools: ["MATLAB", "Multisim", "Proteus", "Arduino IDE", "Basic Circuit Simulation Tools"],
      outcome: "Solid programming and mathematical foundation for data science and AI.",
    },
    year2: {
      title: "Year 2: DIGITAL SYSTEMS & ELECTRONICS",
      quote: '"You start working with real data and discover how computing powers intelligent systems."',
      subjects: [
        "Electronic Devices & Circuits",
        "Digital Electronics",
        "Signals & Systems",
        "Network Theory",
        "Microprocessors",
        "Microcontrollers",
        "Analog Electronics",
        "Electromagnetic Theory"
      ],
      practicalLearning: [
        "Design electronic circuits",
        "Program microcontrollers",
        "Analyse digital systems",
        "Work with sensors",
        "Understand semiconductor devices",
        "Perform circuit simulations"
      ],
      projects: [
        "Microcontroller-Based System",
        "Digital Electronics Project",
        "Smart Sensor System",
        "Embedded Monitoring System",
        "Electronic Control System"
      ],
      tools: ["MATLAB", "Proteus", "Multisim", "Arduino IDE", "Embedded Development Tools"],
      outcome: "Ability to query, analyze and visualize data with foundational ML skills.",
    },
    year3: {
      title: "Year 3: VLSI, EMBEDDED SYSTEMS & COMMUNICATION",
      quote: '"This is where data becomes intelligence."',
      subjects: [
        "VLSI Design",
        "Embedded Systems",
        "Digital Signal Processing",
        "Communication Systems",
        "Computer Architecture",
        "Integrated Circuits",
        "Semiconductor Devices",
        "FPGA Design"
      ],
      practicalLearning: [
        "Design digital systems",
        "Work with FPGA platforms",
        "Develop embedded applications",
        "Simulate electronic circuits",
        "Understand VLSI workflows",
        "Analyze communication systems"
      ],
      projects: [
        "FPGA-Based Digital System",
        "VLSI Design Project",
        "Embedded IoT System",
        "Digital Signal Processing Project",
        "Communication System Prototype"
      ],
      tools: ["Verilog / HDL Tools", "MATLAB", "Xilinx / FPGA Tools", "Proteus", "LTspice / Circuit Simulation Tools"],
      outcome: "Specialized AI & ML skills ready for industry-level problem solving.",
    },
    year4: {
      title: "Year 4: SEMICONDUCTOR DESIGN & INDUSTRY PROJECT",
      quote: '"Your classroom becomes the industry."',
      subjects: [
        "Advanced VLSI Design",
        "Semiconductor Technology",
        "Chip Design",
        "Embedded System Design",
        "Hardware Verification",
        "Advanced Communication Systems",
        "Industrial Training",
        "Major Project"
      ],
      practicalLearning: [
        "Work on semiconductor-oriented projects",
        "Design and simulate digital circuits",
        "Develop hardware prototypes",
        "Explore chip design workflows",
        "Apply VLSI concepts",
        "Complete industry-oriented training"
      ],
      projects: [
        "FPGA-Based Processor",
        "VLSI Design Project",
        "Embedded Hardware System",
        "Semiconductor Simulation Project",
        "Digital IC Design Project",
        "Smart Electronics System"
      ],
      tools: ["Verilog / HDL", "FPGA Design Tools", "MATLAB", "Cadence / EDA Tools*", "LTspice", "Proteus"],
      outcome: "An industry-ready data scientist and AI practitioner with a portfolio of real projects.",
    },
  },
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
    scholarshipItems: [
      { text: "SRMUSET Based Scholarship" },
      { text: "MERIT Based Scholarship" },
      { text: "Defence, Paramilitary & Police" },
      { text: "Sibling/Ward of SRM Group Staff, Student & Alumni" },
      { text: "Divyang" },
      { text: "National/State Level" },
      { text: "Sportsperson" },
      { text: "Career Progression" },
      { text: "Student of another state and country" },
      { text: "Ward of a Single Parent" },
    ],
  },
  poPsoPlo: {
    objectives: [
      { text: "To impart deep technical knowledge about the field of electronics and communication engineering with a specialization in semiconductor design." },
      { text: "To develop an understanding of semiconductor technologies at different levels of abstraction including VLSI, digital hardware, embedded systems, and communication." },
    ],
    learningOutcomes: [
      { text: "Apply knowledge of core electronics and semiconductor subjects to solve complex engineering problems." },
    ],
    specificOutcomes: [
      { text: "Understand and develop semiconductor design solutions in areas related to VLSI, chip design, and digital electronics." },
    ],
  },
  careerOpportunities: {
    headingHighlight: "in Semiconductor Design",
    description: "The semiconductor industry supports technologies ranging from smartphones and communication systems to electric vehicles, artificial intelligence hardware, consumer electronics, and data centers. A B.Tech. in ECE (Semiconductor Design) can prepare students for career paths in semiconductor design, VLSI, embedded systems, electronics, communication, and hardware engineering.",
    imageUrl: "/assets/images/semiconductor-new/career-oppo.webp",
    imageAlt: "Semiconductor professional working with electronics",
    industries: [
      { title: "Semiconductor & Chip Design", descriptionLabel: "Work Areas", description: "Chip Design, IC Design, VLSI, Digital Hardware, Semiconductor Devices, Hardware Verification" },
      { title: "Embedded Systems", descriptionLabel: "Work Areas", description: "Microcontrollers, Embedded Hardware, IoT Devices, Real-Time Systems, Smart Electronics, Hardware-Software Integration" },
      { title: "Electronics & Hardware", descriptionLabel: "Work Areas", description: "Electronic Circuit Design, Hardware Development, Digital Systems, Product Engineering, Electronics Testing, System Integration" },
      { title: "Communication Technology", descriptionLabel: "Work Areas", description: "Communication Systems, Wireless Technology, Signal Processing, RF Systems, Optical Communication, Networking Hardware" },
      { title: "Consumer Electronics", descriptionLabel: "Work Areas", description: "Smart Devices, Electronic Products, Embedded Controllers, Digital Systems, Hardware Testing" },
      { title: "Automotive & EV Electronics", descriptionLabel: "Work Areas", description: "Automotive Electronics, Embedded Systems, Vehicle Controllers, Sensors, Electronic Control Units, Intelligent Mobility Systems" },
    ],
    careerRoles: [
      { title: "VLSI Engineer", description: "Design and verify complex digital integrated circuits." },
      { title: "Embedded Systems Engineer", description: "Develop and program embedded microcontrollers for electronic products." },
      { title: "Electronics Engineer", description: "Design, test, and troubleshoot electronic circuits and hardware systems." },
      { title: "Hardware Design Engineer", description: "Create specifications and design digital or analog hardware components." },
    ],
  },
  programComparison: {
    headers: [
      { label: "Feature" },
      { label: "ECE Semiconductor Design", highlight: true },
      { label: "ECE" },
      { label: "CSE" },
      { label: "Electrical Engineering" },
    ],
    rows: [
      { feature: "Primary Focus", values: ["Semiconductors, VLSI & Chip Design", "Electronics & Communication", "Software & Computing", "Power & Electrical Systems"] },
      { feature: "Core Skills", values: ["VLSI, Digital Design, Embedded Systems", "Electronics, Communication", "Programming, Software", "Power, Circuits, Control"] },
      { feature: "Programming", values: ["Medium–High", "Medium", "Very High", "Medium"] },
      { feature: "VLSI", values: ["Core", "High", "Low", "Low"] },
      { feature: "Chip Design", values: ["Core", "High", "Low", "Low"] },
      { feature: "Embedded Systems", values: ["High", "High", "Medium", "Medium"] },
      { feature: "Communication Systems", values: ["High", "Core", "Low", "Medium"] },
      { feature: "Hardware Design", values: ["Core", "Core", "Low", "Medium"] },
      { feature: "AI / Computing", values: ["Medium", "Medium", "Core", "Low–Medium"] },
      { feature: "Career Roles", values: ["VLSI/Chip/Embedded Engineer", "ECE/Communication Engineer", "Software/AI Engineer", "Electrical/Power Engineer"] },
    ],
    chooseIfCards: [
      {
        heading: "Choose B.Tech. ECE Semiconductor Design if you like:",
        bgClass: "bg-[#E6FAF8]",
        items: [
          "Electronics and hardware",
          "Chip design",
          "Semiconductor technology",
          "VLSI",
          "Digital electronics",
          "Embedded systems",
          "Microprocessors and microcontrollers",
          "Circuit design",
          "Robotics and IoT hardware",
          "Communication technology"
        ],
      },
      {
        heading: "Choose B.Tech. ECE if you like:",
        bgClass: "bg-[#FFFBEB]",
        items: [
          "Electronics",
          "Communication systems",
          "Signal processing",
          "Embedded systems",
          "Networking",
          "Digital electronics",
          "Wireless technologies"
        ],
      },
    ],
  },
};

export default eceSemiconductorDesignNewData;
