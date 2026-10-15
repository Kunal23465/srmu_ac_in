// ============================================================
// cyberSecurityNew.ts
// Data for the B.Tech CSE Cyber Security program page.
// All content extracted from BTechCseCyberSecurityNew.tsx.
// Suffix "New" matches the file-naming convention of the template.
// ============================================================

import type { ProgramPageDataNew } from "../../types/programPageNew";
import cloudSecurityLab from "../../assets/images/cyber-security-new/cloud-security-lab.webp";
import cyberSecuritySimulationLab from "../../assets/images/cyber-security-new/cyber-security-simulation-lab.webp";
import digitalForensicsLab from "../../assets/images/cyber-security-new/digital-forensics-lab.webp";
import ethicalHackingLab from "../../assets/images/cyber-security-new/ethical-hacking-lab.webp";
import reelThumbnail from "../../assets/images/cyber-security-new/cyber-security-reel-thumbnail.webp";
import industrialControlSystems from "../../assets/images/cyber-security-new/securing-industrial-control-systems-ot-security.webp";
import socLearningEnvironment from "../../assets/images/cyber-security-new/security-operations-centre-soc-learning-environment.webp";
import studentsPlaced from "../../assets/images/cyber-security-new/where-our-students-get-placed.webp";
import whyStudyCyberSecurity from "../../assets/images/cyber-security-new/why-study-b-tech-cse-cyber-security-2027.webp";

const cyberSecurityNewData: ProgramPageDataNew = {
  // ----------------------------------------------------------
  // HERO BANNER
  // ----------------------------------------------------------
  heroBanner: {
    degreeTitle: "B.Tech. Computer Science and Engineering",
    specialization: "Cyber Security",
    subtitle: "In collaboration with L&T",
    desktopBannerUrl: "/shared-image-banner.jpg",
    mobileBannerUrl: "/new-imagine.jpg",
    applyNowUrl:
      "https://students.srmu.ac.in/login?_gl=1*1hjhqxh*_gcl_au*ODkzODU3MDY4LjE3ODkxODk4NTc.*_ga*Mjc4NTk1MjY4LjE3ODkxODk4NTc.*_ga_QZEQ59Q6ZL*czE3ODkxOTIxMTIkbzIkZzEkdDE3ODkxOTM2NDIkajYwJGwwJGg1NzMzMjQwNzM.",
    brochureUrl: "/Broucher_SRMU_25_April___.pdf",
  },

  // ----------------------------------------------------------
  // WHY STUDY
  // ----------------------------------------------------------
  whyStudy: {
    year: "2027",
    quote:
      '"Will this course still be relevant after four years?" — For cybersecurity, the answer is yes, and the demand continues to grow.',
    paragraphs: [
      "Cybersecurity has become important across banks, hospitals, government organizations, e-commerce, manufacturing, technology companies, and cloud-based services. As organizations adopt cloud computing, artificial intelligence, IoT, and digital payments, they need professionals who can identify vulnerabilities, protect data, and respond to security threats.",
      "A B.Tech in Computer Science and Engineering with Cyber Security provides students with a foundation in both computer science and information security, making it a relevant choice for students exploring the best B.Tech college in Lucknow for future-focused engineering education.",
    ],
    imageUrl: whyStudyCyberSecurity,
    imageAlt: "Data Protection - Cyber Security Growth",
    benefitCards: [
      { title: "High Demand", description: "Cybersecurity roles are growing exponentially worldwide." },
      { title: "Diverse Roles", description: "From analyst to architect, the field offers varied career paths." },
      { title: "Critical Skills", description: "Protecting data and infrastructure is non-negotiable for modern businesses." },
      { title: "Global Relevance", description: "Cyber threats are a global issue, making your skills transferable anywhere." },
    ],
  },

  // ----------------------------------------------------------
  // L&T BENEFITS
  // ----------------------------------------------------------
  ltBenefits: {
    introText:
      "By combining SRMU's academic foundation with L&T's industry-oriented learning, students can graduate with more than theoretical knowledge. At this leading CSE Cyber Security university in Lucknow, through L&T-integrated learning, students build practical cybersecurity skills, project experience, and an industry-ready portfolio in futuristic domains such as:",
    domainRows: [
      { tags: ["Secure Networking", "Application Security", "Ethical Hacking & Penetration Testing", "Cyber Forensics"] },
      { tags: ["Governance, Risk & Compliance (GRC)", "Bioinformatics & Cybersecurity", "Malware Awareness & Analysis"] },
    ],
    followUpText:
      "The L&T-integrated learning experience enables students to move beyond theoretical concepts and apply their knowledge through practical exercises, cybersecurity labs, case studies, summer training, and major projects.",
    projectsHeading: "Students have worked on projects such as:",
    projectsCol1: [
      { text: "Network Intrusion Detection & Monitoring System" },
      { text: "Web Application Vulnerability Assessment Tool" },
      { text: "Phishing Detection & Awareness Platform" },
      { text: "Malware Behavior Analysis System" },
    ],
    projectsCol2: [
      { text: "Digital Forensics Investigation Framework" },
      { text: "Security Information & Event Monitoring Dashboard" },
      { text: "Secure Authentication & Access Control System" },
      { text: "Cyber Risk & Compliance Assessment Framework" },
    ],
    tableRows: [
      { label: "Program", value: "B.Tech CSE (Cyber Security)" },
      { label: "Duration", value: "4 Years" },
      { label: "Eligibility", value: "10+2 with Physics & Mathematics" },
      { label: "Recognised By", value: "UGC" },
      { label: "University Accreditation", value: "NAAC Accredited" },
      { label: "Industry Partner", value: "Larsen & Toubro (L&T)" },
      { label: "Learning Model", value: "Classroom + Labs + Projects + Industry Learning" },
      { label: "Internship", value: "Included" },
      { label: "Placement Assistance", value: "Available" },
      { label: "Research Opportunities", value: "Yes" },
      { label: "Capstone Project", value: "Yes" },
      { label: "Industry Certifications", value: "Supported" },
      { label: "Career Support", value: "Resume Building, Coding, Mock Interviews & Placement Training" },
    ],
  },

  // ----------------------------------------------------------
  // INDUSTRY EXPOSURE
  // ----------------------------------------------------------
  industryExposure: {
    sectionTitle: "Industry Exposure & Cyber Security Learning",
    sectionTitleHighlight: "at SRMU, Lucknow",
    introParagraph:
      "Cyber security education goes beyond textbooks. At SRMU, students pursuing B.Tech CSE Cyber Security participate in industry sessions, workshops, hackathons, and expert interactions that connect academic concepts with practical security scenarios.",
    expertSessionsHeading: "Industry & Expert Sessions",
    expertSessionsParagraph:
      "Students have been exposed to topics including operational technology security, cloud security, application security, ethical hacking, networking, Android security, and generative AI.",
    featuredCard: {
      badge: "Guest Lecture",
      secondaryBadge: "OT SECURITY",
      title: "Securing Industrial Control Systems-OT Security",
      presenter: "Mr. Rajeev Malhotra, L&T Cyber Security Division",
      imageUrl: industrialControlSystems,
      paragraphs: [
        "Topic: Securing Industrial Control Systems (OT Security)",
        "The session explored how Operational Technology (OT) networks used in manufacturing environments can be targeted by cyber attackers.",
        "Students were introduced to real-world detection and response workflows used in industrial security environments, followed by a discussion on career opportunities in OT security.",
      ],
    },
    secondaryCards: [
      {
        badge: "Guest Lecture",
        icon: "cpu",
        title: "From Code to Creativity - The Rise of Generative AI",
        presenter: "Er. Subham Mishra · Automation Test Engineer, TCS Kolkata",
        paragraphs: [
          'A guest lecture on "From Code to Creativity: The Rise of Generative AI" was conducted for B.Tech CSE Cyber Security students.',
          "The session introduced participants to key concepts in generative AI and provided practical exposure to AI tools and prompt engineering techniques.",
        ],
      },
      {
        badge: "Industry Workshop",
        icon: "lock",
        title: "Networking with Ethical Hacking & Android Development",
        presenter: "Mr. Santu Purkait · Director, Netcamp Solutions Pvt. Ltd.",
        paragraphs: [
          "The workshop introduced students to practical concepts related to network security, penetration testing, ethical hacking, cyber security best practices, secure Android application development, mobile application security, and real-world cyber threats and defense mechanisms.",
          "The session helped students connect networking fundamentals with practical ethical hacking and application security concepts.",
        ],
      },
    ],
    departmentUrl: "https://srmu.ac.in/department-of-computer-science-and-engineering",
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
    imageUrl: studentsPlaced,
    imageAlt: "Student preparing for career and placement",
    placementDetailUrl: "https://srmu.ac.in/placements",
  },

  // ----------------------------------------------------------
  // LABS & CURRICULUM
  // ----------------------------------------------------------
  labs: {
    sectionTitle: "Learn Cyber Security",
    sectionTitleHighlight: "the way Industry Works",
    introParagraph:
      "From the first year, you'll build, test, analyse and secure real systems — not just study theory.",
    curriculumImageDesktop: "/shared-image2.png",
    curriculumImageMobile: "/shared-image2.png",
    curriculumOverlayItems: [
      { text: "Secure\nSoftware\nDevelopment" },
      { text: "Enterprise\nNetwork\nSecurity" },
      { text: "Cloud\nInfrastructure\nSecurity" },
      { text: "Cyber\nRisk\nManagement" },
      { text: "Security\nAuditing" },
      { text: "Ethical\nHacking\nMethodologies" },
      { text: "Secure\nCoding\nPractices" },
      { text: "AI & Cyber\nSecurity\nApplications" },
    ],
    curriculumSectionTitle: "Industry Integrated Curriculum",
    curriculumDescription:
      "Strengthened through academic collaboration with L&T, the curriculum bridges university education and industry expectations through application-oriented learning, case studies and problem-solving methodologies.",
    reelVideoUrl: "/MicrosoftTeams-video.mp4",
    reelPosterUrl: reelThumbnail,
    cardBackgroundImageUrl: "/backgroundIm.png",
    labs: [
      {
        label: "LAB / 02",
        title: "Ethical Hacking Lab",
        imageUrl: ethicalHackingLab,
        tagline: "Think like an attacker to build stronger security.",
        description: "Students learn ethical hacking techniques under expert supervision in legal, controlled lab environments.",
        items: ["Password Security", "Web Application Testing", "Network Exploitation", "Wireless Security", "Reconnaissance", "Vulnerability Scanning"],
      },
      {
        label: "LAB / 05",
        title: "Security Operations Centre (SOC) Learning Environment",
        imageUrl: socLearningEnvironment,
        tagline: "Understand how organisations monitor threats 24×7.",
        description: "Students learn how a real SOC team detects, investigates and responds to live threats.",
        items: ["SIEM Monitoring", "Security Alerts", "Threat Intelligence", "Incident Response", "Log Correlation", "Threat Hunting"],
      },
      {
        label: "LAB / 03",
        title: "Digital Forensics Lab",
        imageUrl: digitalForensicsLab,
        tagline: "Every cyber attack leaves digital evidence.",
        description: "Students learn how investigators recover, preserve, and analyse digital evidence using professional forensic methodologies.",
        items: ["Log Analysis", "Hard Disk Investigation", "Incident Documentation", "Memory Forensics", "Email Investigation"],
      },
      {
        label: "LAB / 04",
        title: "Cloud Security Lab",
        imageUrl: cloudSecurityLab,
        tagline: "Modern businesses run on cloud infrastructure.",
        description: "Students gain practical exposure to securing cloud environments across identity, storage, and deployment.",
        items: ["Identity & Access Management", "Cloud Storage Security", "Virtual Machine Security", "Secure Deployment", "Cloud Monitoring", "Multi-Cloud Architecture"],
      },
      {
        label: "LAB / 01",
        title: "Cyber Security Simulation Lab",
        imageUrl: cyberSecuritySimulationLab,
        tagline: "Experience real-world attack scenarios safely.",
        description:
          "Students analyse vulnerabilities, secure systems, and understand how organisations defend against modern cyber threats.",
        items: ["Network Monitoring", "Vulnerability Assessment", "Penetration Testing", "Malware Behaviour Analysis", "Threat Detection", "Security Monitoring"],
      },
    ],
  },

  // ----------------------------------------------------------
  // 4-YEAR JOURNEY
  // ----------------------------------------------------------
  yearJourney: {
    introParagraph: "Every year builds on the last — combining theory, practical implementation, industry exposure and certifications.",
    year1: {
      title: "Year 1: Foundations",
      quote: '"Every cyber security expert begins by understanding how computers actually work."',
      subjects: [
        "Programming Fundamentals (C & Python)",
        "Engineering Mathematics",
        "Computer Organization",
        "Digital Electronics",
        "Linux Basics",
        "Problem Solving Techniques",
        "Communication Skills",
        "Engineering Physics",
      ],
      practicalLearning: [
        "Install and configure Linux",
        "Write your first secure programs",
        "Learn Git & GitHub",
        "Build command-line applications",
        "Understand computer architecture",
      ],
      projects: ["Password Generator", "File Encryption Tool", "Student Management System", "Basic Calculator using C", "Command Line Notes App"],
      tools: ["Visual Studio Code", "Ubuntu Linux", "GitHub", "CodeBlocks", "VirtualBox"],
      outcome: "Solid foundation for advanced topics and hands-on labs.",
    },
    year2: {
      title: "Year 2: Core Development & Security",
      quote: '"Now you begin thinking like both a developer and a defender."',
      subjects: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "Computer Networks",
        "Database Management Systems",
        "Python Programming",
        "Object-Oriented Programming",
        "Cryptography",
        "Information Security",
      ],
      practicalLearning: [
        "Configure secure networks",
        "Implement encryption algorithms",
        "Build secure databases",
        "Perform packet analysis",
        "Learn secure coding practices",
      ],
      projects: ["Secure Login System", "File Encryption Software", "Network Packet Analyzer", "Database Access Control System", "Password Vault"],
      tools: ["MySQL", "Cisco Packet Tracer", "Wireshark", "Ubuntu", "GitHub"],
      outcome: "Ability to build secure applications and identify vulnerabilities.",
    },
    year3: {
      title: "Year 3: Advanced Security & Specialization",
      quote: '"This is where you start solving real cyber security challenges."',
      subjects: [
        "Ethical Hacking",
        "Penetration Testing",
        "Cloud Security",
        "Cyber Laws",
        "Malware Analysis",
        "Digital Forensics",
        "Secure Software Development",
        "Incident Response",
        "SIEM Fundamentals",
      ],
      practicalLearning: [
        "Vulnerability Assessment",
        "Security Audits",
        "Malware Behaviour Analysis",
        "Penetration Testing",
        "Web Security Testing",
        "Mobile Application Security",
        "Digital Evidence Collection",
        "Threat Hunting",
      ],
      projects: [
        "AI-Based Phishing Detector",
        "Vulnerability Scanner",
        "Secure Banking Portal",
        "Cloud Access Manager",
        "Secure Online Voting System",
        "Malware Detection Dashboard",
        "IoT Security Framework",
      ],
      tools: ["Kali Linux", "Burp Suite", "Metasploit", "OWASP ZAP", "Nmap", "Splunk", "Snort IDS", "Security Onion", "VMware"],
      outcome: "Specialized skills for roles like Penetration Tester & Security Analyst.",
    },
    year4: {
      title: "Year 4: Capstone & Industry Readiness",
      quote: '"Your classroom becomes the workplace."',
      subjects: [
        "Capstone Project",
        "Industry Internship",
        "Research Methodology",
        "Artificial Intelligence Security",
        "DevSecOps",
        "Cloud Security Architecture",
        "Emerging Cyber Technologies",
      ],
      practicalLearning: [
        "Aptitude Training",
        "Coding Interviews",
        "HR Interviews",
        "Technical Interviews",
        "Resume Building",
        "LinkedIn Branding",
        "Mock Group Discussions",
      ],
      projects: [
        "Enterprise SOC Dashboard",
        "AI Intrusion Detection System",
        "Blockchain Identity Management",
        "Smart Healthcare Security Platform",
        "Cloud Security Monitoring Dashboard",
        "Ransomware Detection using Machine Learning",
        "Secure Smart City Infrastructure",
        "Autonomous Threat Intelligence Platform",
      ],
      tools: ["—"],
      outcome: "An industry-ready professional with a portfolio of projects and certifications.",
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
    feeNote:
      "Additional charges: Alumni Fee ₹500 and Degree Fee ₹1,000 (payable in the final year). *One-time refundable caution money as per university policy. **Hostel and transportation are optional and subject to university guidelines.",
    scholarshipItems: [
      { text: "Students securing 80% and above in 10+2 Board Examination are eligible for a merit-based scholarship on Course Fee." },
      { text: "Scholarship up to 100% for students with 95% and above (exceptional performance)." },
      { text: "Special scholarships for students from economically weaker sections (EWS)." },
      { text: "Defence personnel wards scholarship — additional benefits for children of ex-servicemen." },
      { text: "Sports scholarship — for national and state-level athletes." },
      { text: "Girl child scholarship — additional support for female students." },
    ],
  },

  // ----------------------------------------------------------
  // PO / PSO / PLO
  // ----------------------------------------------------------
  poPsoPlo: {
    objectives: [
      { text: "To impart deep technical knowledge about the field of computer science and engineering." },
      {
        text: "To develop an understanding of computer science and engineering at different levels of abstraction including computer architecture and design, operating systems, database management, algorithms and applications.",
      },
      {
        text: "To aware students with a strong foundation in the field of Mathematical and basics of engineering fundamentals necessary to analyze and evaluate real world engineering problems and to further prepare them for higher studies, R&D.",
      },
      { text: "To develop life-long learning attitude among students and to make them aware about professional and social responsibility." },
      {
        text: "To inculcate an understanding among the students for utilizing their knowledge of computer engineering and mathematical theory to solve current and future computing problems.",
      },
      { text: "To inspire leadership and professional values in the students." },
    ],
    learningOutcomes: [
      { text: "Apply possessed knowledge of core subjects of production and industrial engineering to solve different problems." },
      { text: "Problem analysis: Identify, formulate, research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences." },
      { text: "Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations." },
      { text: "Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions." },
      { text: "Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations." },
      { text: "The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice." },
      { text: "Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development." },
      { text: "Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice." },
      { text: "Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings." },
      { text: "Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions." },
      { text: "Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments." },
      { text: "Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change." },
    ],
    specificOutcomes: [
      {
        text: "Understand and develop computer programs in the areas related to algorithms, system software, multimedia, web design, big data analytics and networking by identifying, demonstrating and analyzing the knowledge of engineering in efficient design of computer-based systems of varying complexity.",
      },
      {
        text: "Applying algorithmic principles, innovative Computer science and engineering design and implementation skills to propose optimal solutions to complex problems by choosing a better platform for research in emerging areas.",
      },
      {
        text: "Identify standard Software Engineering practices and strategies by applying software project development methods using open-source programming environment to design and evaluate a quality product for business success.",
      },
      {
        text: "Demonstrate and examine basic understanding of engineering fundamentals, professional/social ethics and apply mathematical foundations to design and solve computational problems.",
      },
    ],
  },

  // ----------------------------------------------------------
  // CAREER OPPORTUNITIES
  // ----------------------------------------------------------
  careerOpportunities: {
    headingHighlight: "in Cybersecurity",
    description:
      "From banking dashboards to hospital records, every industry now runs on data and digital systems — and every one of them needs professionals who can keep that data safe.",
    imageUrl: "https://ik.imagekit.io/ttalcskjf/IMAGE%203.webp?updatedAt=1788439003298",
    imageAlt: "Cyber security professionals protecting digital systems",
    industries: [
      { title: "Banking & Financial Services", descriptionLabel: "Protects", description: "Online transactions, customer data, payment systems, digital banking" },
      { title: "IT & Software Companies", descriptionLabel: "Protects", description: "Application security, cloud protection, network security, data privacy" },
      { title: "Healthcare", descriptionLabel: "Protects", description: "Patient records, medical devices, healthcare applications, digital platforms" },
      { title: "Defence & Government", descriptionLabel: "Protects", description: "National security, critical infrastructure, government digital systems" },
      { title: "E-Commerce", descriptionLabel: "Protects", description: "Customer information, payment gateways, applications, digital transactions" },
      { title: "Telecom & Networking", descriptionLabel: "Protects", description: "Network protection, infrastructure security, threat monitoring" },
    ],
  },

  // ----------------------------------------------------------
  // PROGRAM COMPARISON
  // ----------------------------------------------------------
  programComparison: {
    headers: [
      { label: "Feature" },
      { label: "Cyber Security", highlight: true },
      { label: "CSE" },
      { label: "AI & ML" },
      { label: "Data Science" },
    ],
    rows: [
      { feature: "Focus", values: ["Digital Security", "Software & Computing", "AI & Machine Learning", "Data & Analytics"] },
      { feature: "Key Skills", values: ["Security, Networks", "Programming, Systems", "ML, AI, Deep Learning", "Statistics, Data, Analytics"] },
      { feature: "Programming", values: ["High", "Very High", "Very High", "High"] },
      { feature: "Networking", values: ["High", "Medium", "Low", "Low"] },
      { feature: "Ethical Hacking", values: ["High", "Low", "Low", "Low"] },
      { feature: "Software Development", values: ["Medium", "High", "High", "Medium"] },
      { feature: "AI Integration", values: ["Growing", "High", "Core", "High"] },
      { feature: "Career Roles", values: ["Security Engineer, SOC Analyst", "Software Developer", "AI/ML Engineer", "Data Scientist"] },
    ],
    chooseIfCards: [
      {
        heading: "Choose B.Tech Cyber Security if you like:",
        bgClass: "bg-white",
        items: [
          "Solving security problems",
          "Investigating technology issues",
          "Understanding how systems work",
          "Protecting digital information",
          "Ethical hacking",
        ],
      },
      {
        heading: "Choose B.Tech Computer Science if you like:",
        bgClass: "bg-white",
        items: [
          "Software development",
          "Application building",
          "Programming-heavy careers",
          "Artificial Intelligence",
          "Data Science",
        ],
      },
    ],
  },
};

export default cyberSecurityNewData;
