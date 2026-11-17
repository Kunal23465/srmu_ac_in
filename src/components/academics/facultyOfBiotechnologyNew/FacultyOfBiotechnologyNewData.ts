import {
    BookOpenCheck,
    Factory,
    FlaskConical,
    GraduationCap,
    Lightbulb,
    Microscope,
    UsersRound,
} from "lucide-react";
import type { CustomDepartmentNewData, DepartmentActivityCardNew } from "../../../customs/department-page-new/CustomDepartmentNew";
import type { FacultyMember } from "../departmentOfComputerScienceAndEngineeringNew/DepartmentFaculty";
import { facultyDetailsOfBiotechnologyDepartment } from "../../../data/academics/faculty-of-biotechnology/faculty-of-biotechnology-data";
import heroImage from "../../../assets/images/academics/departments/biotech-07022411273155.webp";
import overviewImage from "../../../assets/images/academics/departments/group-scientists-wearing-lab-coat-working-laborato-28012512230911.webp";
import labImage from "../../../assets/images/academics/departments/biotech-lab-07052412272588.webp";
import biotechImage from "../../../assets/images/academics/departments/biotech1-07052412253675.webp";
import csirNBRIImage from "../../../assets/images/academics/institutes/csir-cimap.webp";
import ibstImage from "../../../assets/images/academics/institutes/ibst.webp";
import industryImage from "../../../assets/images/academics/institutes/industrial-csir.webp";
import foodSafetyImage from "../../../assets/images/academics/institutes/foodsafety.webp";
import researchPapersImage from "../../../assets/images/academics/institutes/researchpapers-.webp";
import researchDevelopmentImage from "../../../assets/images/academics/institutes/researchdevelopment.webp";
import interdisciplinaryResearchImage from "../../../assets/images/academics/institutes/interdisciplinaryresearch.webp";
import molecularBiologyIcon from "../../../assets/images/academics/institutes/biosciences-research-icons/molecular-biology.svg";
import microbialBiotechnologyIcon from "../../../assets/images/academics/institutes/biosciences-research-icons/microbial-biotechnology.svg";
import plantBiotechnologyIcon from "../../../assets/images/academics/institutes/biosciences-research-icons/plant-biotechnology.svg";
import healthcareBiotechnologyIcon from "../../../assets/images/academics/institutes/biosciences-research-icons/healthcare-biotechnology.svg";
import nanotechnologyIcon from "../../../assets/images/academics/institutes/biosciences-research-icons/nanotechnology.svg";

const card = (
    tag: string,
    title: string,
    speaker: string,
    description: string,
    img: string,
): DepartmentActivityCardNew => ({ tag, title, speaker, shortDesc: description, readMore: description, img });

const facultyMembers: FacultyMember[] = facultyDetailsOfBiotechnologyDepartment
    .map(({ name, designation, image }) => ({
        name,
        role: designation,
        img: image,
        isHod: name === "Dr. Tabish Qidwai",
    }))
    .sort((first, second) => Number(second.isHod) - Number(first.isHod));

export const facultyOfBiotechnologyNewData: CustomDepartmentNewData = {
    navSections: [
        { id: "overview", label: "Overview" },
        { id: "programs", label: "Programmes" },
        { id: "labs", label: "Labs & Practical Learning" },
        { id: "events", label: "Activities" },
        { id: "faculty", label: "Faculty" },
        { id: "faq", label: "FAQs" },
    ],
    hero: {
        prefix: "Faculty of",
        title: "Biotechnology",
        backgroundImage: heroImage,
        stats: [
            { v: "2012", l: "Established", delay: "0ms" },
            { v: "05", l: "Featured Guest Lectures", delay: "90ms" },
            { v: "03", l: "Industrial and Institutional Visits", delay: "180ms" },
            { v: "02", l: "Scientific Workshops", delay: "270ms" },
        ],
        quickStats: [
            { value: "2012", label: "Established" },
            { value: "05", label: "Featured Guest Lectures" },
            { value: "03", label: "Industrial and Institutional Visits" },
            { value: "02", label: "Scientific Workshops" },
        ],
    },
    overview: {
        headingBefore: "About the Faculty of",
        headingHighlight: "Biotechnology",
        paragraphs: [
            "Established in 2012 with the introduction of the B.Tech. in Biotechnology program, the Faculty of Biotechnology at Shri Ramswaroop Memorial University has developed an academic environment focused on biological sciences, scientific investigation, and research.",
            "The faculty explores the application of biotechnology in areas such as healthcare, agriculture, food science, medicine, and environmental sustainability. Its academic and research interests include molecular biology, genome editing, microbial technology, plant biotechnology, immunology, nanotechnology, and environmental biotechnology.",
            "Learning extends beyond conventional classroom teaching through expert interactions, industrial visits, scientific workshops, and research activities. Students get opportunities to understand emerging scientific developments and explore how biotechnology can address real-world challenges.",
            "As part of the Institute of Biosciences and Technology, the Faculty of Biotechnology contributes to interdisciplinary teaching, collaborative research, and knowledge exchange with established scientific institutions.",
        ],
        preview: "Established in 2012 with the introduction of the B.Tech. in Biotechnology program, the Faculty of Biotechnology at Shri Ramswaroop Memorial University has developed an academic environment focused on biological sciences, scientific investigation, and research.",
        image: overviewImage,
        imageAlt: "Faculty of Biotechnology",
    },
    missionVision: {
        missionItems: [
            "To provide quality education in biotechnology through a strong foundation in fundamental and applied biological sciences.",
            "To encourage research, innovation, and interdisciplinary learning in emerging areas of biotechnology and life sciences.",
            "To develop scientific skills among students through practical exposure, expert interactions, workshops, and industry visits.",
            "To promote collaborative research addressing challenges in healthcare, agriculture, food safety, and environmental sustainability.",
            "To nurture responsible professionals and researchers who can contribute to scientific advancement and societal development.",
        ],
        visionText: "To foster an academic and research environment where biotechnology can be applied to address fundamental biological questions and challenges in healthcare, agriculture, food safety and security, medicine, and environmental sustainability.",
    },
    programHeadingBefore: "Explore",
    programHeadingHighlight: "Programs",
    programs: [
        {
            category: "Explore Programs",
            mobileLabel: "Explore Programs",
            badge: "Faculty of Biotechnology",
            icon: GraduationCap,
            programs: [
                { title: "B.Tech. in Biotechnology", icon: FlaskConical, link: "/b-tech-biotechnology" },
                { title: "B.Sc. (Hons.)", icon: Microscope, link: "/b-sc-hons-biotechnology" },
                { title: "M.Sc.", icon: Microscope, link: "/m-sc-biotechnology" },
                { title: "M.Tech.", icon: FlaskConical, link: "/m-tech-biotechnology" },
                { title: "Ph.D.", icon: BookOpenCheck, link: "/ph-d-notification-session-2026-27" },
            ],
        },
    ],
    labs: {
        headingBefore: "Research &",
        headingHighlight: "Practical Learning",
        intro: "Research and practical learning form an important part of biotechnology education at SRMU. The Faculty of Biotechnology encourages students to explore scientific questions, understand emerging research methodologies, and connect biological concepts with practical applications. Through academic collaborations, expert interactions, scientific investigations, and exposure to research institutions, students gain opportunities to understand how biotechnology contributes to developments in healthcare, agriculture, and environmental sustainability.",
        itemsHeading: "Research Focus Areas",
        items: [
            { num: "01", title: "Molecular Biology & Genome Editing", desc: "Exploring molecular mechanisms, genetic regulation, and genome-editing approaches with applications in agriculture and healthcare.", accent: "#FFB703", iconSrc: molecularBiologyIcon, animClass: "lab-icon-orbital" },
            { num: "02", title: "Microbial Biotechnology", desc: "Studying beneficial microorganisms, microbial interactions, and their applications in agriculture, environmental management, and biotechnology.", accent: "#1B4F91", iconSrc: microbialBiotechnologyIcon, animClass: "lab-icon-pulse" },
            { num: "03", title: "Plant Biotechnology & Sustainable Agriculture", desc: "Researching plant growth-promoting microorganisms, nanofertilizers, crop productivity, and environmental resilience.", accent: "#14284E", iconSrc: plantBiotechnologyIcon, animClass: "lab-icon-float" },
            { num: "04", title: "Healthcare & Medical Biotechnology", desc: "Exploring cancer research, liquid biopsy, immunology, infectious diseases, and emerging biomedical applications.", accent: "#FFB703", iconSrc: healthcareBiotechnologyIcon, animClass: "lab-icon-stack" },
            { num: "05", title: "Nanotechnology & Biosciences", desc: "Investigating nanomaterials and their potential applications in healthcare, agriculture, and biological systems.", accent: "#1B4F91", iconSrc: nanotechnologyIcon, animClass: "lab-icon-glow" },
            { num: "06", title: "Environmental Biotechnology", desc: "Studying microbial ecosystem services, environmental stress management, and sustainable biological solutions.", accent: "#14284E", icon: Factory, animClass: "lab-icon-network" },
        ],
    },
    highlights: {
        headingBefore: "Why Choose Biotechnology",
        headingHighlight: "at SRMU?",
        items: [
            { num: "01", title: "Research-Oriented Academic Environment", desc: "Students are encouraged to explore scientific developments and research opportunities across molecular biology, microbiology, healthcare and agricultural biotechnology.", icon: Microscope },
            { num: "02", title: "Interdisciplinary Learning", desc: "The academic environment connects biotechnology with healthcare, agriculture, food science, medicine and environmental sustainability.", icon: BookOpenCheck },
            { num: "03", title: "Expert Interactions", desc: "Guest lectures and academic interactions with scientists from reputed institutions provide exposure to current research developments and scientific applications.", icon: UsersRound },
            { num: "04", title: "Industry & Institutional Exposure", desc: "Visits to organisations such as CSIR-NBRI, Prospera Biotech and Amul Banas Dairy help students understand the practical applications of biotechnology.", icon: Factory },
            { num: "05", title: "Research & Publication Opportunities", desc: "Faculty research contributions and scientific publications expose students to emerging areas of biotechnology and encourage research-oriented thinking.", icon: Lightbulb },
            { num: "06", title: "Innovation & Scientific Competitions", desc: "Participation in hackathons, international conferences and poster presentations encourages creativity, scientific communication and problem-solving.", icon: Lightbulb },
            { num: "07", title: "Emerging Research Areas", desc: "Students get academic exposure to developing fields such as genome editing, nanobiotechnology, immunology, microbial technology and environmental biotechnology.", icon: FlaskConical },
        ],
    },
    events: {
        headingBefore: "From Scientific Concepts to",
        headingHighlight: "Real-World Applications",
        sectionSubtitle: "Learning from Experts in Biotechnology and Biosciences",
        intro: "The Faculty of Biotechnology regularly organizes expert lectures and academic interactions to familiarize students with emerging scientific developments, research methodologies, and practical applications.",
        cardsHeading: "Featured Guest Lectures",
        cards: [
            card("GUEST LECTURE", "Bacillus subtilis: A Potent Biological Control Agent", "Dr. Poonam Singh · Senior Principal Scientist · CSIR-NBRI, Lucknow · 13 February 2026", "Exploring the potential of beneficial microorganisms in biological control and sustainable agricultural practices.", csirNBRIImage),
            card("GUEST LECTURE", "Genome Editing: A New Era for Crop Improvement", "Dr. Vidhu A. Sane · Chief Scientist · CSIR-NBRI, Lucknow · 6 October 2025", "Discussing genome-editing approaches and their potential role in improving crop characteristics.", biotechImage),
            card("GUEST LECTURE", "Use of AI Tools in Healthcare and Teaching Innovations", "Dr. Santosh Kumar · Principal Scientist · CSIR-CDRI, Lucknow · 20 November 2025", "Exploring the application of artificial intelligence in healthcare and emerging approaches to teaching and learning.", ibstImage),
            card("GUEST LECTURE", "Epigenetics in Health and Diseases", "Dr. Kulwant Singh · Associate Professor · Stem Cell Research Centre, SGPGIMS, Lucknow · 24 April 2024", "Understanding the role of epigenetic mechanisms in health, disease, and biomedical research.", industryImage),
            card("GUEST LECTURE", "Environment and Health: Biotechnological Interventions in Current Perspectives", "Dr. V. P. Sharma · Chief Scientist and Professor · AcSIR, CSIR-IITR, Lucknow · 30 August 2024", "Exploring how biotechnology can contribute to environmental management and address health-related challenges.", labImage),
        ],
    },
    activitySections: [
        {
            id: "industry-exposure",
            eyebrow: "",
            heading: "Connecting Biotechnology Education with Industry and Research Institutions",
            intro: "Industrial and institutional visits provide students with opportunities to observe scientific processes, understand research environments, and explore the practical applications of biotechnology.",
            cards: [
                card("INSTITUTIONAL VISIT", "National Botanical Research Institute (CSIR-NBRI)", "Date: 27 February 2026\nLocation: Rana Pratap Marg, Lucknow\nTheme: Women in Science: Catalyzing Viksit Bharat\nOccasion: National Science Day\nParticipants: M.Sc., B.Tech., and B.Sc. Biotechnology students", "Date: 27 February 2026\nLocation: Rana Pratap Marg, Lucknow\nTheme: Women in Science: Catalyzing Viksit Bharat\nOccasion: National Science Day\nParticipants: M.Sc., B.Tech., and B.Sc. Biotechnology students", csirNBRIImage),
                card("INDUSTRY VISIT", "Prospera Biotech", "Date: 8 April 2026\nLocation: Zaidpur, Barabanki, Uttar Pradesh\nParticipants: B.Tech. and B.Sc. Biotechnology students", "Date: 8 April 2026\nLocation: Zaidpur, Barabanki, Uttar Pradesh\nParticipants: B.Tech. and B.Sc. Biotechnology students", industryImage),
                card("INDUSTRY VISIT", "Amul Banas Dairy", "Date: 15 November 2025\nLocation: Sultanpur Road, Lucknow\nParticipants: B.Tech. and B.Sc. Biotechnology students", "Date: 15 November 2025\nLocation: Sultanpur Road, Lucknow\nParticipants: B.Tech. and B.Sc. Biotechnology students", foodSafetyImage),
            ],
        },
        {
            id: "workshops",
            eyebrow: "",
            heading: "Building Practical Skills Through Scientific Workshops",
            intro: "The faculty organizes workshops to strengthen students' practical knowledge, professional skills, and understanding of emerging opportunities in biotechnology and related fields.",
            cards: [
                card("WORKSHOP", "Workshop 01 – Entrepreneurship and Skill Development", "Duration: 10–14 June 2024\nMode: Online\nFocus: Entrepreneurship and Skill Development", "A one-week online workshop organized by the Institute of Biosciences and Technology in collaboration with the Internal Quality Assurance Cell (IQAC), SRMU.", ibstImage),
                card("WORKSHOP", "Workshop 02 – General Awareness on Food Safety of Daily Life Commodities", "Guest Speakers:\nDr. Ankita Yadav, Food Safety Officer, FSDA\nMs. Pallavi Tiwari, Food Safety Officer, FSDA", "A one-day workshop focused on creating awareness about food safety and the quality of everyday commodities.", foodSafetyImage),
            ],
        },
        {
            id: "hackathons",
            eyebrow: "",
            heading: "Student Achievements & Innovation",
            intro: "Students of SRMU actively participate in technical competitions, international conferences, and innovation-driven events. These platforms encourage scientific exploration, creativity, teamwork, and problem-solving.",
            cards: [
                card("STUDENT ACHIEVEMENT", "Participation in Hack-A-Thon - VIVEKA: The Intelligence 5.0", "Student: Shweta Ojha\nOrganizer: Tech Fusion Club, SRMU\nEvent: VIVEKA: The Intelligence 5.0 (Techfest 2K26)\nDate: 18–20 February 2026\nAchievement: Certificate of Participation", "Student: Shweta Ojha\nOrganizer: Tech Fusion Club, SRMU\nEvent: VIVEKA: The Intelligence 5.0 (Techfest 2K26)\nDate: 18–20 February 2026\nAchievement: Certificate of Participation", researchDevelopmentImage),
                card("STUDENT ACHIEVEMENT", "Best Poster Presentation – International Conference SI:BRIRF 2.0", "Student: Astha Maurya\nConference: International Conference on Sustainable Innovation: Bridging Research and Industry for a Resilient Future 2.0\nPresentation Title: Nanobiotechnology for Achieving Environmental Sustainability\nDate: 9 -11 April 2026\nAchievement: Best Poster Presentation", "Student: Astha Maurya\nConference: International Conference on Sustainable Innovation: Bridging Research and Industry for a Resilient Future 2.0\nPresentation Title: Nanobiotechnology for Achieving Environmental Sustainability\nDate: 9 -11 April 2026\nAchievement: Best Poster Presentation", researchPapersImage),
                card("STUDENT ACHIEVEMENT", "NASA International Space Apps Challenge 2025", "Student: Akash Singh\nEvent: NASA International Space Apps Challenge 2025\nDate: 4 - 5 October 2025\nRecognition: Galactic Problem Solver – Certificate of Participation", "Student: Akash Singh\nEvent: NASA International Space Apps Challenge 2025\nDate: 4 - 5 October 2025\nRecognition: Galactic Problem Solver – Certificate of Participation", interdisciplinaryResearchImage),
            ],
        },
        {
            id: "research-publications",
            eyebrow: "",
            heading: "Research & Publications",
            intro: "Students are encouraged to engage on research projects at recognized local and international organizations and institutes in order to enhance their technical expertise.",
            cards: [
                card("RESEARCH PUBLICATION", "Drug Target Identification for Listeria monocytogenes by Subtractive Genomics Approach", "Authors: Niharika Chandra, Tabish Qidwai, Sachidanand Singh\nJournal: Journal of Pure & Applied Microbiology\nPublication details: September 2023", "Authors: Niharika Chandra, Tabish Qidwai, Sachidanand Singh\nJournal: Journal of Pure & Applied Microbiology\nPublication details: September 2023", labImage),
                card("RESEARCH PUBLICATION", "Cytokine storm in COVID-19 and malaria: Annals of pro-inflammatory cytokines", "Authors: Tabish Qidwai\nJournal: Cytokine Journal\nPublication details: January 2024", "Authors: Tabish Qidwai\nJournal: Cytokine Journal\nPublication details: January 2024", biotechImage),
                card("RESEARCH PUBLICATION", "Machine learning-based monkeypox virus image prognosis with feature selection and advanced statistical loss function", "Authors: Tabish Qidwai and Sonam Yadav\nJournal: Medicine in Microecology\nPublication details: March 2024", "Authors: Tabish Qidwai and Sonam Yadav\nJournal: Medicine in Microecology\nPublication details: March 2024", researchDevelopmentImage),
                card("RESEARCH PUBLICATION", "Biodecolorization and biodegradation of Reactive Green 12 textile industry dye and their post-degradation phytotoxicity-genotoxicity assessments", "Authors: Shweta Singh, Roshan Lal Gautam, Dhirendra K. Chaudhary, Devendra Singh, Ram Naraian\nJournal: Archives of Microbiology\nPublication details: May 2024", "Authors: Shweta Singh, Roshan Lal Gautam, Dhirendra K. Chaudhary, Devendra Singh, Ram Naraian\nJournal: Archives of Microbiology\nPublication details: May 2024", interdisciplinaryResearchImage),
                card("RESEARCH PUBLICATION", "Genetic relatedness analysis in sapota using SSR markers", "Authors: Rathva Hemangini, Avnish Kumar Pandey, Kiran Suthar, Harish Suthar, Ankita Chakote, Diwakar Singh, Timur Ahlawat, Vivek Kumar Dhiman, Himanshu Pandey, Devendra Singh\nJournal: Ecological Genetics and Genomics\nPublication details: June 2024", "Authors: Rathva Hemangini, Avnish Kumar Pandey, Kiran Suthar, Harish Suthar, Ankita Chakote, Diwakar Singh, Timur Ahlawat, Vivek Kumar Dhiman, Himanshu Pandey, Devendra Singh\nJournal: Ecological Genetics and Genomics\nPublication details: June 2024", researchPapersImage),
            ],
        },
    ],
    career: {
        heading: "Where Our Students Get Career Opportunities",
        items: [
            ["Molecular Biology Research Assistant"],
            ["Research Associate"],
            ["Microbiologist"],
            ["Microbiology Research Assistant"],
            ["Plant Biotechnology Researcher"],
            ["Agricultural Research Assistant"],
            ["Biomedical Research Associate"],
            ["Biotechnology Research Assistant"],
            ["Nanotechnology Research Assistant"],
            ["Research Associate"],
            ["Environmental Biotechnology Researcher"],
            ["Environmental Analyst"],
        ],
        descriptions: [],
    },
    facultySection: {
        members: facultyMembers,
        headingText: "Our",
        headingHighlight: "Faculty",
        subheading: "",
        featuredDescription: "",
        featuredLabel: "",
        showResearchShowcase: false,
    },
    faq: [
        { q: "What is the Faculty of Biotechnology at SRMU?", a: "The Faculty of Biotechnology is part of the Institute of Biosciences and Technology at Shri Ramswaroop Memorial University. It focuses on biological sciences, biotechnology education, scientific research and applications in healthcare, agriculture, food science and environmental sustainability." },
        { q: "When was the Faculty of Biotechnology established at SRMU?", a: "The biotechnology academic programme was introduced at SRMU in 2012 with the launch of B.Tech. in Biotechnology. The institute subsequently expanded its academic offerings with doctoral and postgraduate programmes." },
        { q: "What programmes are offered in Biotechnology at SRMU?", a: "The Institute of Biosciences and Technology has introduced B.Tech. in Biotechnology, B.Sc. (Hons.), M.Sc., M.Tech. and Ph.D. programmes. Students should check the current admission portal for programme availability." },
        { q: "What are the major research areas in Biotechnology at SRMU?", a: "The major research areas include molecular biology, genome editing, microbial biotechnology, plant biotechnology, immunology, healthcare and medical biotechnology, nanotechnology and environmental biotechnology." },
        { q: "Does SRMU provide research opportunities in Biotechnology?", a: "Yes. The Institute of Biosciences and Technology promotes research-oriented learning through scientific investigations, academic collaborations, expert interactions, workshops and research publications." },
        { q: "Does the Faculty of Biotechnology organise guest lectures?", a: "Yes. The faculty organises expert lectures featuring scientists and researchers from reputed scientific institutions, including CSIR-NBRI, CSIR-CDRI and SGPGIMS, Lucknow." },
        { q: "Does SRMU organise industrial visits for Biotechnology students?", a: "Yes. Students have participated in industrial and institutional visits to organisations such as CSIR-NBRI, Prospera Biotech and Amul Banas Dairy to understand practical applications of biotechnology." },
        { q: "What practical learning opportunities are available to Biotechnology students?", a: "Students get opportunities to engage in scientific workshops, research activities, expert interactions, institutional visits, academic conferences and innovation-driven competitions." },
        { q: "What research publications have been contributed by the Faculty of Biotechnology?", a: "The institute's 2026 research publication list includes work on liquid biopsy, BCG vaccination and COVID-19, AI applications in healthcare, sustained-release fertilisers, millet starch digestibility and other emerging areas of biotechnology and biosciences." },
        { q: "What career opportunities are available after studying Biotechnology?", a: "Graduates can explore opportunities in biotechnology companies, pharmaceutical organisations, research institutions, diagnostic laboratories, agricultural biotechnology, food science and environmental biotechnology, depending on their qualification and specialisation." },
        { q: "Can students pursue higher studies after B.Tech. in Biotechnology?", a: "Yes. Students can explore postgraduate programmes such as M.Tech. and M.Sc. in relevant disciplines, followed by doctoral research, subject to the eligibility criteria of the respective programmes." },
        { q: "Why choose SRMU for Biotechnology?", a: "SRMU provides a research-oriented academic environment, expert interactions, industrial exposure, interdisciplinary learning and opportunities to explore emerging scientific areas such as genome editing, nanobiotechnology, microbial technology and medical biotechnology." },
    ],
    showFaculty: true,
    showScholarships: true,
    showBlogs: true,
    showCareerDescriptionCards: false,
};
