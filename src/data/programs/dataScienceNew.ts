// ============================================================
// dataScienceNew.ts
// Data for the B.Tech CSE Data Science & Artificial Intelligence page.
// ============================================================

import type { ProgramPageDataNew } from "../../types/programPageNew";
import curriculumDesktop from "../../assets/images/data-science-ai-ml-new-page/1 (1).webp";
import curriculumMobile from "../../assets/images/data-science-ai-ml-new-page/1 (2).webp";
import dataScienceAnalyticsLab from "../../assets/images/data-science-ai-ml-new-page/lab-images/data-science-analytics-lab.webp";
import generativeAiLab from "../../assets/images/data-science-ai-ml-new-page/lab-images/generative-ai-intelligent-applications-lab.webp";
import deepLearningNlpLab from "../../assets/images/data-science-ai-ml-new-page/lab-images/deep-learning-nlp-lab.webp";
import artificialIntelligenceMachineLearningLab from "../../assets/images/data-science-ai-ml-new-page/lab-images/artificial-intelligence-machine-learning-lab.webp";
import bigDataCloudComputingLab from "../../assets/images/data-science-ai-ml-new-page/lab-images/big-data-cloud-computing-lab.webp";

const dataScienceNewData: ProgramPageDataNew = {

  // ----------------------------------------------------------
  // HERO BANNER
  // ----------------------------------------------------------
  heroBanner: {
    degreeTitle: "B.Tech. Computer Science and Engineering",
    specialization: "Data Science & Artificial Intelligence",
    subtitle: "In collaboration with L&T",
    desktopBannerUrl: "/assets/images/data-science-ai-ml-new-page/desktop-banner.webp",
    mobileBannerUrl: "/assets/images/data-science-ai-ml-new-page/mobile-banner.webp",
    applyNowUrl: "https://students.srmu.ac.in/login",
    brochureUrl: "/Broucher_SRMU_25_April___.pdf",
  },

  // ----------------------------------------------------------
  // WHY STUDY
  // ----------------------------------------------------------
  whyStudy: {
    year: "2027",
    quote:
      '"Will data science and artificial intelligence still be relevant after four years?" - The growing use of intelligent systems, automation, and data-driven decision-making is creating new applications across industries.',
    paragraphs: [
      "Data is becoming one of the most important resources for modern organizations. From predictive analytics and intelligent automation to recommendation systems and generative AI, businesses increasingly depend on professionals who can turn data into meaningful insights and intelligent solutions.",
      "A B.Tech in Computer Science and Engineering with Data Science & Artificial Intelligence combines core computer science education with data analytics, machine learning, artificial intelligence, and emerging technologies.",
      "At SRMU, the program is offered in collaboration with L&T, giving students an industry-oriented learning environment where they can connect classroom concepts with practical applications in data science, artificial intelligence, and modern computing.",
    ],
    imageUrl: "/assets/images/data-science-ai-ml-new-page/s3xs3kxkhti5ezqvqlzc.webp",
    imageAlt: "Data Science & AI Growth",
    benefitCards: [
      { title: "High Demand", description: "Data and AI technologies are being adopted across technology, finance, healthcare, manufacturing, retail, and other industries." },
      { title: "Diverse Career Roles", description: "Students can explore career paths across data science, AI, machine learning, analytics, and software-driven roles." },
      { title: "Future-Focused Skills", description: "Build knowledge in programming, analytics, machine learning, AI, generative AI, and data-driven problem solving." },
      { title: "Industry Relevance", description: "Learn through an industry-oriented curriculum developed around emerging technologies and practical applications." },
    ],
  },

  // ----------------------------------------------------------
  // L&T BENEFITS
  // ----------------------------------------------------------
  ltBenefits: {
    introText:
      "By combining SRMU's academic foundation with L&T's industry-oriented learning, students can develop more than theoretical knowledge. Through L&T-integrated learning, students gain practical exposure to data science, artificial intelligence, machine learning, and other emerging technologies while working on application-oriented projects and problem-solving activities.",
    domainRows: [
      {
        tags: [
          "Data Analytics",
          "Machine Learning",
          "Artificial Intelligence",
          "Big Data Analytics",
          "Natural Language Processing",
          "Generative AI",
        ],
      },
      {
        tags: [
          "Predictive Analytics",
          "Cloud Computing",
          "NoSQL Databases",
          "Cognitive Computing",
          "Intelligent Automation",
          "Augmented Reality",
        ],
      },
    ],
    followUpText:
      "The L&T-integrated learning experience enables students to move beyond theoretical concepts and apply their knowledge through practical exercises, data-driven projects, case studies, industry sessions, and major projects.",
    projectsHeading: "Students can work on projects such as:",
    projectsCol1: [
      { text: "AI-Based Recommendation System" },
      { text: "Customer Behavior Prediction Platform" },
      { text: "Sales Forecasting System" },
      { text: "Machine Learning Prediction Model" },
    ],
    projectsCol2: [
      { text: "AI-Based Chatbot" },
      { text: "Sentiment Analysis Application" },
      { text: "Fraud Detection System" },
      { text: "Business Intelligence Dashboard" },
    ],
    tableRows: [
      { label: "Program", value: "B.Tech CSE (Data Science & Artificial Intelligence)" },
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
    tableBackgroundImageUrl: "/assets/images/data-science-ai-ml-new-page/Industry-Integrated-Learning-with-L-T-Section-Image.webp",
  },

  // ----------------------------------------------------------
  // INDUSTRY EXPOSURE
  // ----------------------------------------------------------
  industryExposure: {
    sectionTitle: "Industry Exposure & Data Science and AI Learning",
    sectionTitleHighlight: "at SRMU, Lucknow",
    introParagraph:
      "Data science and artificial intelligence education goes beyond textbooks. At SRMU, students pursuing B.Tech CSE Data Science & Artificial Intelligence can develop practical understanding through projects, workshops, expert interactions, and technology-focused learning activities.",
    expertSessionsHeading: "Industry & Expert Sessions",
    expertSessionsParagraph:
      "Students can gain exposure to emerging topics such as: Artificial Intelligence, Generative AI, Machine Learning, Data Analytics, Big Data, Cloud Computing, Natural Language Processing, and AI-driven Automation.",
    featuredCard: {
      badge: "Guest Lecture",
      secondaryBadge: "ARTIFICIAL INTELLIGENCE",
      title: "The Role of AI in Enhancing Production and Operational Efficiency",
      presenter: "International Expert, EIT Australia",
      imageUrl: "/assets/images/data-science-ai-ml-new-page/The-Role-of-AI-in-Enhancing-Production-and-Operational-Efficiency-January-2025-Section-Image.webp",
      paragraphs: [
        "The session introduced students to the applications of artificial intelligence in improving production and operational efficiency.",
        "It provided insights into how AI-based technologies can support automation, data-driven decision-making, and process optimization in modern industries.",
      ],
    },
    secondaryCards: [
      {
        badge: "Workshop",
        icon: "brain",
        iconLabel: "AI TOOLS",
        title: "Implementation of AI Tools for Improving MS Office Skills: Steps toward AI Literacy",
        presenter: "Dr. Mritunjay Rai, Er. Abhishek Kumar Saxena, Er. Shivani Singh & Er. Anand P. Pandey",
        paragraphs: [
          "The workshop focused on developing AI literacy and demonstrating the practical use of artificial intelligence tools with Microsoft Office applications.",
          "Students and participants gained exposure to AI-assisted productivity, automation, and modern digital workflows.",
        ],
      },
      {
        badge: "Hackathon",
        icon: "code",
        iconLabel: "INNOVATION",
        title: "Smart India Hackathon (SIH)",
        presenter: "Internal Selection Rounds at SRMU",
        paragraphs: [
          "The initiative provided students with opportunities to identify real-world problems, develop technology-based solutions, and work collaboratively in multidisciplinary teams.",
          "In 2025, 50 teams were selected for the second round, and 3 teams progressed to the final round.",
        ],
      },
      {
        badge: "Industrial Visit",
        icon: "factory",
        iconLabel: "INDUSTRY VISIT",
        title: "L&T Komatsu Machine Yard",
        presenter: "Larsen & Toubro (L&T)",
        paragraphs: [
          "Students received practical exposure to heavy construction machinery and industrial equipment, helping them understand the application of modern technologies in industrial environments.",
        ],
      },
    ],
    departmentUrl: "https://srmu.ac.in/department-of-computer-science-and-engineering",
    sectionBackgroundImageUrl: "/assets/images/data-science-ai-ml-new-page/Where-Our-Students-Get-Placed-Background-Image.webp",
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
    imageUrl: "/assets/images/data-science-ai-ml-new-page/Where-Our-Students-Get-Placed-Section-Image.webp",
    imageAlt: "Student preparing for career and placement",
    placementDetailUrl: "https://srmu.ac.in/placements",
  },

  // ----------------------------------------------------------
  // LABS & CURRICULUM
  // ----------------------------------------------------------
  labs: {
    sectionTitle: "Learn Data Science & AI",
    sectionTitleHighlight: "the way Industry Works",
    introParagraph:
      "From analyzing large datasets to building intelligent applications, students learn how technology can be used to solve real-world problems.",
    curriculumImageDesktop: curriculumDesktop,
    curriculumImageMobile: curriculumMobile,
    curriculumOverlayItems: [
      { text: "Data\nAnalytics" },
      { text: "Machine\nLearning" },
      { text: "Artificial\nIntelligence" },
      { text: "Big Data\nAnalytics" },
      { text: "Natural\nLanguage\nProcessing" },
      { text: "Cloud\nComputing" },
      { text: "Generative\nAI" },
      { text: "Predictive\nAnalytics" },
    ],
    curriculumSectionTitle: "Industry Integrated Curriculum",
    curriculumDescription:
      "Strengthened through academic collaboration with L&T, the curriculum bridges university education and industry expectations through application-oriented learning, case studies, and problem-solving methodologies. Students develop skills that connect computer science fundamentals with data science, artificial intelligence, analytics, and emerging technologies.",
    reelVideoUrl: "/MicrosoftTeams-video.mp4",
    cardBackgroundImageUrl: "/assets/images/data-science-ai-ml-new-page/Data-Science-Analytics-Lab-Card-Background-Image.webp",
    labs: [
      {
        label: "LAB / 01",
        title: "Data Science & Analytics Lab",
        imageUrl: dataScienceAnalyticsLab,
        tagline: "Turn data into meaningful insights.",
        description:
          "Students work with datasets to understand data preparation, analysis, visualization, and predictive modeling.",
        items: ["Data Cleaning", "Data Visualization", "Statistical Analysis", "Exploratory Data Analysis", "Predictive Modelling", "Data Interpretation"],
      },
      {
        label: "LAB / 02",
        title: "Generative AI & Intelligent Applications Lab",
        imageUrl: generativeAiLab,
        tagline: "Explore the next generation of AI applications.",
        description:
          "Students learn how generative AI and intelligent systems can be used to develop innovative technology solutions.",
        items: ["Generative AI", "Prompt Engineering", "AI Applications", "Intelligent Automation", "AI-assisted Development", "AI Project Development"],
      },
      {
        label: "LAB / 03",
        title: "Deep Learning & NLP Lab",
        imageUrl: deepLearningNlpLab,
        tagline: "Explore intelligent systems that understand patterns and language.",
        description:
          "Students gain practical exposure to deep learning and natural language processing applications.",
        items: ["Neural Networks", "Deep Learning", "Text Classification", "Sentiment Analysis", "Natural Language Processing", "Language Models"],
      },
      {
        label: "LAB / 04",
        title: "Artificial Intelligence & Machine Learning Lab",
        imageUrl: artificialIntelligenceMachineLearningLab,
        tagline: "Build systems that learn from data.",
        description:
          "Students explore machine learning algorithms and AI techniques through practical exercises and application-oriented projects.",
        items: ["Machine Learning", "Classification", "Regression", "Clustering", "Model Evaluation", "AI Applications"],
      },
      {
        label: "LAB / 05",
        title: "Big Data & Cloud Computing Lab",
        imageUrl: bigDataCloudComputingLab,
        tagline: "Learn how modern organizations manage large-scale data.",
        description:
          "Students explore technologies and concepts used for processing, storing, and analyzing large datasets.",
        items: ["Big Data Processing", "Cloud Computing", "Distributed Data", "Data Storage", "Cloud Analytics", "Data Pipelines"],
      },
    ],
  },

  // ----------------------------------------------------------
  // 4-YEAR JOURNEY
  // ----------------------------------------------------------
  yearJourney: {
    introParagraph: "Every year builds on the last, combining computer science foundations, data-driven problem solving, practical implementation, industry exposure and emerging AI technologies.",
    year1: {
      title: "Year 1: Foundations",
      quote: '"Every data science and AI professional begins by understanding data, computing, and how intelligent systems learn."',
      subjects: [
        "Programming Fundamentals",
        "Engineering Mathematics",
        "Computer Organization",
        "Digital Electronics",
        "Python Programming",
        "Problem Solving Techniques",
        "Communication Skills",
        "Engineering Physics",
      ],
      practicalLearning: [
        "Learn Python programming",
        "Work with basic datasets",
        "Learn Git & GitHub",
        "Build introductory applications",
        "Understand computer systems",
        "Develop problem-solving skills",
      ],
      projects: [
        "Student Management System",
        "Python Data Analysis Project",
        "Basic Calculator",
        "Personal Expense Tracker",
        "Student Result Analysis",
        "Command-Line Application",
      ],
      tools: ["Visual Studio Code", "Python", "Jupyter Notebook", "GitHub", "Google Colab"],
      outcome: "Solid programming and mathematical foundation for data science and AI.",
    },
    year2: {
      title: "Year 2: Data & Computing",
      quote: '"You start working with real data and discover how computing powers intelligent systems."',
      subjects: [
        "Data Structures",
        "Database Management Systems",
        "Probability & Statistics",
        "Data Analytics",
        "Object-Oriented Programming",
        "Operating Systems",
        "Computer Networks",
        "Introduction to Machine Learning",
      ],
      practicalLearning: [
        "Analyze datasets",
        "Build SQL queries",
        "Create data visualizations",
        "Develop basic machine learning models",
        "Work with structured and unstructured data",
      ],
      projects: [
        "Sales Data Analytics Dashboard",
        "Student Performance Prediction",
        "Customer Segmentation Model",
        "SQL-Based Management System",
        "Data Visualization Application",
      ],
      tools: ["Python", "SQL", "MySQL", "Jupyter Notebook", "Pandas", "NumPy", "Power BI"],
      outcome: "Ability to query, analyze and visualize data with foundational ML skills.",
    },
    year3: {
      title: "Year 3: AI & Machine Learning",
      quote: '"This is where data becomes intelligence."',
      subjects: [
        "Machine Learning",
        "Artificial Intelligence",
        "Deep Learning",
        "Natural Language Processing",
        "Big Data Analytics",
        "Cloud Computing",
        "Data Mining",
        "Computer Vision",
      ],
      practicalLearning: [
        "Train machine learning models",
        "Work with deep learning frameworks",
        "Build predictive systems",
        "Process large datasets",
        "Develop AI-based applications",
      ],
      projects: [
        "AI Recommendation System",
        "Sentiment Analysis Platform",
        "Image Classification System",
        "Predictive Analytics Application",
        "NLP-Based Chatbot",
      ],
      tools: ["Python", "TensorFlow", "Scikit-learn", "PyTorch", "OpenCV", "Google Colab", "Cloud Platforms"],
      outcome: "Specialized AI & ML skills ready for industry-level problem solving.",
    },
    year4: {
      title: "Year 4: Advanced AI & Industry Project",
      quote: '"Your classroom becomes the industry."',
      subjects: [
        "Generative AI",
        "Advanced Machine Learning",
        "AI Applications",
        "Data Engineering",
        "AI Ethics",
        "Industry Project",
        "Major Project",
      ],
      practicalLearning: [
        "Develop industry-oriented AI solutions",
        "Work on real-world datasets",
        "Build generative AI applications",
        "Develop end-to-end data projects",
        "Complete major project / industry training",
      ],
      projects: [
        "Generative AI Application",
        "Intelligent Business Analytics Platform",
        "AI-Based Fraud Detection",
        "Enterprise Recommendation System",
        "End-to-End Data Science Project",
      ],
      tools: ["Python", "Generative AI Tools", "Cloud Platforms", "Machine Learning Frameworks", "Data Visualization Tools", "GitHub"],
      outcome: "An industry-ready data scientist and AI practitioner with a portfolio of real projects.",
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

  // ----------------------------------------------------------
  // PO / PSO / PLO
  // ----------------------------------------------------------
  poPsoPlo: {
    objectives: [
      { text: "To impart deep technical knowledge about the field of computer science and engineering with a specialization in data science and artificial intelligence." },
      { text: "To develop an understanding of computer science and engineering at different levels of abstraction including programming, data management, algorithms, machine learning, and AI applications." },
      { text: "To provide students with a strong foundation in mathematics, probability, and statistics necessary to analyze data and build intelligent systems." },
      { text: "To develop a life-long learning attitude among students and make them aware about professional and ethical responsibilities in AI and data-driven technologies." },
      { text: "To inculcate an understanding of data science and AI methodologies among students to solve current and future computing and analytical problems." },
      { text: "To inspire leadership, research mindset, and professional values among students pursuing data science and AI engineering." },
    ],
    learningOutcomes: [
      { text: "Apply knowledge of core computer science and data science subjects to solve analytical and intelligence-driven engineering problems." },
      { text: "Problem analysis: Identify, formulate, research literature, and analyze complex data science and AI problems reaching substantiated conclusions using mathematical, statistical, and computational principles." },
      { text: "Design/development of solutions: Design data-driven and AI-powered solutions for complex engineering problems with appropriate consideration for societal, ethical, and environmental factors." },
      { text: "Conduct investigations: Use research-based knowledge and experimental methods including dataset design, model evaluation, and synthesis of information to provide valid conclusions." },
      { text: "Modern tool usage: Select and apply appropriate data science, machine learning, and AI tools including visualization, modelling, and cloud platforms to engineering activities." },
      { text: "The engineer and society: Apply reasoning informed by contextual knowledge to assess societal, ethical, and legal issues related to AI and data-driven technologies." },
      { text: "Environment and sustainability: Understand the impact of AI and data-driven engineering solutions in societal and environmental contexts, and demonstrate the need for sustainable development." },
      { text: "Ethics: Apply ethical principles and commit to professional responsibilities in data handling, AI development, and responsible use of technology." },
      { text: "Individual and team work: Function effectively as an individual, and as a member or leader in diverse, multidisciplinary data science and AI project teams." },
      { text: "Communication: Communicate effectively on data science and AI activities with technical communities and society at large through reports, presentations, and clear documentation." },
      { text: "Project management: Demonstrate understanding of project management and engineering principles and apply these to data science and AI projects in team and multidisciplinary environments." },
      { text: "Life-long learning: Recognize the need for, and engage in independent and life-long learning in the rapidly evolving fields of data science and artificial intelligence." },
    ],
    specificOutcomes: [
      { text: "Understand and develop data science and AI programs in areas related to machine learning, deep learning, natural language processing, generative AI, big data, and predictive analytics to design data-driven systems of varying complexity." },
      { text: "Apply machine learning algorithms, deep learning architectures, and AI techniques to propose optimal solutions to complex analytical and intelligence problems." },
      { text: "Identify standard data science and AI engineering practices and strategies by applying project development methods using modern open-source frameworks to build quality data and AI products." },
      { text: "Demonstrate understanding of data ethics, responsible AI development, professional values, and mathematical foundations to design and solve data science and AI problems." },
    ],
  },

  // ----------------------------------------------------------
  // CAREER OPPORTUNITIES
  // ----------------------------------------------------------
  careerOpportunities: {
    headingHighlight: "in Data Science & Artificial Intelligence",
    description:
      "From banking and healthcare to e-commerce, manufacturing, and technology, organizations increasingly use data and intelligent systems to understand trends, automate processes, and make informed decisions. A B.Tech CSE specialization in Data Science & Artificial Intelligence can help students build skills for a range of technology, analytics, and AI-oriented career paths.",
    imageUrl: "/assets/images/data-science-ai-ml-new-page/Career-Opportunities-in-Data-Science-Artificial-Intelligence-Section-Image.webp",
    imageAlt: "Data scientist working with analytics and AI tools",
    industries: [
      { title: "Banking & Financial Services", descriptionLabel: "Uses", description: "Fraud Detection, Risk Analytics, Customer Analytics, Financial Forecasting" },
      { title: "Healthcare", descriptionLabel: "Uses", description: "Predictive Healthcare Analytics, Medical Data Analysis, Patient Insights, Intelligent Healthcare Applications" },
      { title: "Manufacturing", descriptionLabel: "Uses", description: "Predictive Maintenance, Quality Analytics, Process Optimization, Intelligent Automation" },
      { title: "IT & Software", descriptionLabel: "Uses", description: "AI Applications, Machine Learning, Data Platforms, Intelligent Software Solutions" },
      { title: "E-Commerce & Retail", descriptionLabel: "Uses", description: "Recommendation Systems, Customer Behavior Analysis, Demand Forecasting, Personalization" },
      { title: "Telecom & Networking", descriptionLabel: "Uses", description: "Network Analytics, Customer Insights, Predictive Maintenance, Intelligent Network Management" },
    ],
    careerRoles: [
      { title: "Data Scientist", description: "Analyze data and develop models that support predictions and data-driven decision-making." },
      { title: "Data Analyst", description: "Analyze datasets, identify trends, and communicate actionable insights." },
      { title: "Machine Learning Engineer", description: "Build, train, and deploy machine learning models for practical applications." },
      { title: "AI Engineer", description: "Develop intelligent applications using artificial intelligence technologies." },
      { title: "Data Engineer", description: "Design systems and pipelines for collecting, processing, and managing data." },
      { title: "Business Intelligence Analyst", description: "Convert organizational data into dashboards, reports, and business insights." },
    ],
  },

  // ----------------------------------------------------------
  // PROGRAM COMPARISON
  // ----------------------------------------------------------
  programComparison: {
    headers: [
      { label: "Feature" },
      { label: "Data Science & AI", highlight: true },
      { label: "CSE" },
      { label: "AI & ML" },
      { label: "Cyber Security" },
    ],
    rows: [
      { feature: "Focus", values: ["Data, Analytics & AI", "Software & Computing", "AI & Machine Learning", "Digital Security"] },
      { feature: "Key Skills", values: ["Statistics, Data, Analytics, AI", "Programming, Systems", "ML, AI, Deep Learning", "Security, Networks"] },
      { feature: "Programming", values: ["High", "Very High", "Very High", "High"] },
      { feature: "Data Analytics", values: ["Core", "Medium", "High", "Low"] },
      { feature: "Machine Learning", values: ["High", "Medium", "Core", "Medium"] },
      { feature: "Artificial Intelligence", values: ["Core", "High", "Core", "Growing"] },
      { feature: "Cyber Security", values: ["Medium", "Medium", "Low", "Core"] },
      { feature: "Generative AI", values: ["High", "High", "Core", "Growing"] },
      { feature: "Career Roles", values: ["Data Scientist, Data Analyst", "Software Developer", "AI/ML Engineer", "Security Engineer, SOC Analyst"] },
      { feature: "Future Scope", values: ["AI, Analytics & GenAI", "Cloud & Software", "GenAI & Automation", "AI & Cloud Security"] },
    ],
    chooseIfCards: [
      {
        heading: "Choose Data Science & AI Engineering if you like:",
        bgClass: "bg-white",
        items: [
          "Working with data",
          "Finding patterns and insights",
          "Mathematics and statistics",
          "Artificial Intelligence",
          "Machine Learning",
          "Building predictive models",
          "Solving analytical problems",
          "Exploring Generative AI",
        ],
      },
      {
        heading: "Choose Computer Science Engineering if you like:",
        bgClass: "bg-white",
        items: [
          "Software development",
          "Application building",
          "Programming-heavy careers",
          "Computer systems",
          "Artificial Intelligence",
          "Data Science",
        ],
      },
    ],
  },
};

export default dataScienceNewData;
