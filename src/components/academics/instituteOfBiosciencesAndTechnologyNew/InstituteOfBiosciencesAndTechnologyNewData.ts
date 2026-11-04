import {
    BookOpenCheck,
    BrainCircuit,
    Factory,
    FlaskConical,
    GraduationCap,
    Lightbulb,
    Microscope,
    Settings,
    UsersRound,
} from "lucide-react";
import type { CustomDepartmentNewData, DepartmentActivityCardNew } from "../../../customs/department-page-new/CustomDepartmentNew";
import type { FacultyMember } from "../departmentOfComputerScienceAndEngineeringNew/DepartmentFaculty";
import overviewImage from "../../../assets/images/academics/departments/group-scientists-wearing-lab-coat-working-laborato-28012512230911.webp";
import heroImage from "../../../assets/images/academics/departments/biotech-07022411273155.webp";
import labImage from "../../../assets/images/academics/departments/biotech-lab-07052412272588.webp";
import biotechImage from "../../../assets/images/academics/departments/biotech1-07052412253675.webp";
import csirCimapImage from "../../../assets/images/academics/institutes/csir-cimap.webp";
import ibstImage from "../../../assets/images/academics/institutes/ibst.webp";
import industryImage from "../../../assets/images/academics/institutes/industrial-csir.webp";
import foodSafetyImage from "../../../assets/images/academics/institutes/foodsafety.webp";
import researchPapersImage from "../../../assets/images/academics/institutes/researchpapers-.webp";
import researchDevelopmentImage from "../../../assets/images/academics/institutes/researchdevelopment.webp";
import interdisciplinaryResearchImage from "../../../assets/images/academics/institutes/interdisciplinaryresearch.webp";
import {
    facultyDetailsOfBioScienceDepartment,
} from "../../../data/academics/faculty-of-biosciences/faculty-of-biosciences-data";
import {
    facultyDetailsOfBiotechnologyDepartment,
} from "../../../data/academics/faculty-of-biotechnology/faculty-of-biotechnology-data";

const makeCard = (
    tag: string,
    title: string,
    speaker: string,
    description: string,
    img: string,
): DepartmentActivityCardNew => ({ tag, title, speaker, shortDesc: description, readMore: description, img });

const ibstFaculty: FacultyMember[] = Array.from(
    new Map(
        [...facultyDetailsOfBiotechnologyDepartment, ...facultyDetailsOfBioScienceDepartment]
            .map((member) => [member.name, member] as const),
    ).values(),
).map((member) => ({
    name: member.name,
    role: member.designation,
    img: member.image,
    isHod: member.name === "Dr. Tabish Qidwai",
}));

export const instituteOfBiosciencesAndTechnologyNewData: CustomDepartmentNewData = {
    navSections: [
        { id: "overview", label: "Overview" },
        { id: "programs", label: "Programmes" },
        { id: "labs", label: "Labs & Practical Learning" },
        { id: "events", label: "Activities" },
        { id: "faculty", label: "Faculty" },
        { id: "faq", label: "FAQs" },
    ],
    hero: {
        prefix: "Institute of",
        title: "Biosciences and Technology",
        backgroundImage: heroImage,
        stats: [
            { v: "5", l: "Featured Guest Lectures", delay: "0ms" },
            { v: "3", l: "Industry and Research Visits", delay: "90ms" },
            { v: "2", l: "Scientific Workshops", delay: "180ms" },
            { v: "9", l: "Research Contributions", delay: "270ms" },
        ],
        quickStats: [
            { value: "5", label: "Featured Guest Lectures" },
            { value: "3", label: "Industry and Research Visits" },
            { value: "2", label: "Scientific Workshops" },
            { value: "9", label: "Research Contributions (2025–2026)" },
        ],
    },
    overview: {
        headingBefore: "About the",
        headingHighlight: "Institute of Biosciences and Technology at SRMU",
        subtitle: "Interdisciplinary education and research in biological sciences",
        paragraphs: [
            "The Institute of Biosciences and Technology (IBST) at Shri Ramswaroop Memorial University (SRMU) was established in 2012 with the introduction of the B.Tech. in Biotechnology program. The institute subsequently expanded its academic offerings with a Ph.D. program in biotechnology in 2013, followed by B.Sc. (Hons.), M.Sc., and M.Tech. programs in 2015.",
            "The institute focuses on the study and application of biological sciences to address challenges in healthcare, agriculture, food science, medicine, and environmental sustainability. Its academic and research activities cover emerging areas such as molecular biology, genome editing, microbial technology, plant biotechnology, immunology, nanotechnology, and environmental biotechnology.",
            "Through expert interactions, industrial visits, workshops, and research publications, the institute encourages students and faculty members to engage with scientific developments and practical applications. Collaborative research and knowledge exchange with established scientific institutions further contribute to its academic environment.",
            "The Institute comprises two academic units—Faculty of Biotechnology and Faculty of Biosciences—bringing together interdisciplinary teaching and research in biological sciences.",
        ],
        preview: "The Institute of Biosciences and Technology (IBST) at Shri Ramswaroop Memorial University (SRMU) was established in 2012 with the introduction of the B.Tech. in Biotechnology program.",
        image: overviewImage,
        imageAlt: "Researchers working together in a biotechnology laboratory",
    },
    missionVision: {
        missionItems: [
            "To provide quality education in biotechnology and biosciences through a strong foundation in fundamental and applied biological sciences.",
            "To encourage research, innovation, and interdisciplinary learning in emerging areas of biotechnology and life sciences.",
            "To develop scientific skills among students through practical exposure, expert interactions, workshops, and industry visits.",
            "To promote collaborative research addressing challenges in healthcare, agriculture, food safety, and environmental sustainability.",
            "To nurture responsible professionals and researchers who can contribute to scientific advancement and societal development.",
        ],
        visionText: "To foster an academic and research environment where biotechnology and biosciences can be applied to address fundamental biological questions and challenges in healthcare, agriculture, food safety, medicine, and environmental sustainability.",
    },
    programHeadingBefore: "Explore",
    programHeadingHighlight: "Programmes",
    programs: [
        {
            category: "Undergraduate Programmes",
            mobileLabel: "UG",
            badge: "Undergraduate",
            icon: GraduationCap,
            programs: [
                { title: "B.Tech. in Biotechnology", description: "An undergraduate programme in biological engineering and applied biotechnology.", icon: FlaskConical, link: "/program/b-tech-biotechnology" },
                { title: "B.Sc. (Hons.) in Biotechnology", description: "An undergraduate programme in biotechnology and life sciences.", icon: Microscope, link: "/program/b-sc-hons-biotechnology" },
            ],
        },
        {
            category: "Postgraduate Programmes",
            mobileLabel: "PG",
            badge: "Postgraduate",
            icon: BookOpenCheck,
            programs: [
                { title: "M.Sc. in Biotechnology", description: "Advanced study in biotechnology and biosciences.", icon: Microscope, link: "/program/m-sc-biotechnology" },
                { title: "M.Tech. in Biotechnology", description: "Postgraduate study in biotechnology and biological engineering.", icon: Settings, link: "/program/m-tech-biotechnology" },
            ],
        },
        {
            category: "Doctoral Programme",
            mobileLabel: "Ph.D.",
            badge: "Doctoral",
            icon: BookOpenCheck,
            programs: [
                { title: "Ph.D. in Biotechnology", description: "The institute introduced its doctoral programme in biotechnology in 2013.", icon: Microscope, link: "/ph-d-notification-session-2026-27" },
            ],
        },
    ],
    labs: {
        headingBefore: "Research &",
        headingHighlight: "Practical Learning",
        intro: "The Institute of Biosciences and Technology promotes research-oriented learning through scientific investigations, academic collaborations, expert interactions, and exposure to industry practices. Students can explore the applications of biological sciences through these research areas:",
        items: [
            { num: "01", title: "Molecular Biology & Genome Editing", desc: "Explore molecular mechanisms, genetic regulation, and genome-editing approaches for applications in agriculture and healthcare.", accent: "#FFB703", icon: BrainCircuit, animClass: "lab-icon-orbital" },
            { num: "02", title: "Microbial Biotechnology", desc: "Study beneficial microorganisms, microbial interactions, and their applications in agriculture, environmental management, and biotechnology.", accent: "#1B4F91", icon: FlaskConical, animClass: "lab-icon-pulse" },
            { num: "03", title: "Plant Biotechnology & Sustainable Agriculture", desc: "Explore plant growth-promoting microorganisms, nanofertilizers, crop productivity, and environmental resilience.", accent: "#14284E", icon: Lightbulb, animClass: "lab-icon-float" },
            { num: "04", title: "Healthcare & Medical Biotechnology", desc: "Study cancer research, liquid biopsy, immunology, infectious diseases, and emerging biomedical applications.", accent: "#FFB703", icon: Microscope, animClass: "lab-icon-stack" },
            { num: "05", title: "Nanotechnology & Biosciences", desc: "Investigate nanomaterials and their potential applications in healthcare, agriculture, and biological systems.", accent: "#1B4F91", icon: Settings, animClass: "lab-icon-glow" },
            { num: "06", title: "Environmental Biotechnology", desc: "Study microbial ecosystem services, environmental stress management, and sustainable biological solutions.", accent: "#14284E", icon: Factory, animClass: "lab-icon-network" },
        ],
    },
    highlights: {
        headingBefore: "Biological Sciences for",
        headingHighlight: "Real-World Challenges",
        items: [
            { num: "01", title: "Interdisciplinary Teaching", desc: "Faculty of Biotechnology and Faculty of Biosciences bring together teaching and research across biological sciences.", icon: UsersRound },
            { num: "02", title: "Research and Innovation", desc: "Students and faculty engage with scientific investigations and emerging research methodologies.", icon: Lightbulb },
            { num: "03", title: "Practical Scientific Skills", desc: "Workshops, expert interactions, and visits help students connect academic learning with practical applications.", icon: FlaskConical },
            { num: "04", title: "Collaborative Research", desc: "Academic collaborations and knowledge exchange connect the institute with established scientific institutions.", icon: BookOpenCheck },
        ],
    },
    events: {
        headingBefore: "Learning from Experts in",
        headingHighlight: "Biotechnology and Biosciences",
        intro: "The Institute of Biosciences and Technology regularly organizes expert lectures to familiarize students with emerging scientific developments, research methodologies, and practical applications in biotechnology and biosciences.",
        cardsEyebrow: "Featured Guest Lectures",
        cards: [
            makeCard("GUEST LECTURE", "Bacillus subtilis: A Potent Biological Control Agent", "Dr. Poonam Singh · Senior Principal Scientist · CSIR-National Botanical Research Institute (CSIR-NBRI), Lucknow · 13 February 2026", "The lecture introduced students to Bacillus subtilis and its role as a biological control agent.", csirCimapImage),
            makeCard("GUEST LECTURE", "Genome Editing: A New Era for Crop Improvement", "Dr. Vidhu A. Sane · Chief Scientist, Department of Molecular Biology and Biotechnology · CSIR-NBRI, Lucknow · 6 October 2025", "The session explored genome-editing approaches and their potential for crop improvement.", biotechImage),
            makeCard("GUEST LECTURE", "Use of AI Tools in Healthcare and Teaching Innovations", "Dr. Santosh Kumar · Principal Scientist · CSIR-Central Drug Research Institute (CSIR-CDRI), Lucknow · 20 November 2025", "The lecture discussed uses of artificial intelligence tools in healthcare and teaching.", ibstImage),
            makeCard("GUEST LECTURE", "Epigenetics in Health and Diseases", "Dr. Kulwant Singh · Associate Professor, Stem Cell Research Centre, Department of Haematology · SGPGIMS, Lucknow · 24 April 2024", "The session introduced epigenetics and its relevance to health and disease research.", industryImage),
            makeCard("GUEST LECTURE", "Environment and Health: Biotechnological Interventions in Current Perspectives", "Dr. V. P. Sharma · Chief Scientist and Professor, AcSIR · CSIR-Indian Institute of Toxicology Research, Lucknow · 30 August 2024", "The lecture considered biotechnological approaches to current environment and health challenges.", labImage),
        ],
    },
    activitySections: [
        {
            id: "industry-exposure",
            eyebrow: "INDUSTRY & INSTITUTIONAL VISITS",
            heading: "Connecting Biotechnology Education with Industry and Research Institutions",
            intro: "Industrial and institutional visits provide students with opportunities to observe scientific processes, understand research environments, and explore the practical applications of biotechnology.",
            cards: [
                makeCard("INSTITUTIONAL VISIT", "National Botanical Research Institute (CSIR-NBRI)", "27 February 2026 · Rana Pratap Marg, Lucknow · National Science Day", "M.Sc., B.Tech., and B.Sc. Biotechnology students took part in the Women in Science: Catalyzing Viksit Bharat programme on National Science Day.", csirCimapImage),
                makeCard("INDUSTRY VISIT", "Prospera Biotech", "8 April 2026 · Zaidpur, Barabanki, Uttar Pradesh", "B.Tech. and B.Sc. Biotechnology students visited Prospera Biotech to learn about industry practices and biotechnology applications.", industryImage),
                makeCard("INDUSTRY VISIT", "Amul Banas Dairy", "15 November 2025 · Sultanpur Road, Lucknow", "B.Tech. and B.Sc. Biotechnology students visited Amul Banas Dairy to observe applied processes in food and biotechnology.", foodSafetyImage),
            ],
        },
        {
            id: "workshops",
            eyebrow: "WORKSHOPS",
            heading: "Building Practical Skills Through Scientific Workshops",
            intro: "The institute organizes workshops to strengthen students' practical knowledge, professional skills, and understanding of emerging opportunities in biotechnology and related fields.",
            cards: [
                makeCard("WORKSHOP", "Workshop on Entrepreneurship and Skill Development", "10–14 June 2024 · One week · Online · Organized with the SRMU Internal Quality Assurance Cell (IQAC)", "A one-week online workshop organized by the Institute of Biosciences and Technology in collaboration with the Internal Quality Assurance Cell (IQAC), Shri Ramswaroop Memorial University. The focus was entrepreneurship and skill development.", ibstImage),
                makeCard("WORKSHOP", "General Awareness on Food Safety of Daily Life Commodities", "One-day workshop · Guest speakers: Dr. Ankita Yadav and Ms. Pallavi Tiwari, Food Safety Officers, FSDA", "A one-day workshop focused on creating awareness about food safety and the quality of everyday commodities.", foodSafetyImage),
            ],
        },
        {
            id: "hackathons",
            eyebrow: "HACKATHONS & CONFERENCES",
            heading: "Student Participation in Innovation and Research Events",
            intro: "Students of Shri Ramswaroop Memorial University actively participate in technical competitions, international conferences, and innovation-driven events, showcasing their knowledge, research capabilities, and problem-solving skills.",
            cards: [
                makeCard("HACKATHON", "VIVEKA: The Intelligence 5.0", "Shweta Ojha · Tech Fusion Club, SRMU · 18–20 February 2026", "Participation in Hack-A-Thon VIVEKA: The Intelligence 5.0 (Techfest 2K26). Achievement: Certificate of Participation. Tagline: #HackLearnWinSmile.", ibstImage),
                makeCard("CONFERENCE", "Best Poster Presentation at SI:BRIRF 2.0", "Astha Maurya · International Conference on Sustainable Innovation: Bridging Research and Industry for a Resilient Future 2.0 · 9–11 April 2026", "Astha Maurya received the Best Poster Presentation achievement for STBTPP002 – Nanobiotechnology for Achieving Environmental Sustainability at Shri Ramswaroop Memorial University, Barabanki, Uttar Pradesh.", researchPapersImage),
                makeCard("INTERNATIONAL CHALLENGE", "NASA International Space Apps Challenge 2025", "Akash Singh · 4–5 October 2025", "Akash Singh was recognized as a Galactic Problem Solver and received a Certificate of Participation for outstanding participation and efforts addressing challenges on Earth and in space.", researchDevelopmentImage),
            ],
        },
        {
            id: "research-publications",
            eyebrow: "RESEARCH CONTRIBUTIONS",
            heading: "Research Contributions in Biotechnology and Biosciences (2025–2026)",
            intro: "Selected faculty and student research contributions published during 2025–2026.",
            cards: [
                makeCard("RESEARCH CONTRIBUTION", "Clinical Evidence on BCG Vaccination and COVID-19 Infection: A Systematic Review", "Praneta Yadav, Arpita Singh, Manju Kumari, Sunil Kumar Verma, Devendra Singh · Respiratory Investigation · 2026", "Affiliation: Faculty of Biotechnology, Institute of Biosciences and Technology, Shri Ramswaroop Memorial University, Barabanki, Uttar Pradesh, India.", researchPapersImage),
                makeCard("RESEARCH CONTRIBUTION", "Liquid Biopsy in Modern Medicine: Advancing Diagnostics from Molecular Insights to Clinical Practice", "Vivek Kumar Dhiman, Stuti Srivastava, Manju Kumari, Devendra Singh · Clinical and Translational Oncology · 2026", "Affiliation: Faculty of Biotechnology, Institute of Biosciences and Technology, Shri Ramswaroop Memorial University, Barabanki, Uttar Pradesh, India.", researchDevelopmentImage),
                makeCard("RESEARCH CONTRIBUTION", "Large Language Models and Multimodal AI as Clinical Copilots in Allergy Clinics", "Sunil Kumar Verma, Stuti Srivastava, Manju Kumari, Devendra Singh, Veena Singh, Bineet Kumar Gupta · Allergy Medicine · 2026", "Full title: Large Language Models (LLMs) and Multimodal AI as Clinical Copilots in Allergy Clinics: Opportunities, Pitfalls, and Regulatory Horizons. Affiliation: Faculty of Biotechnology, Institute of Biosciences and Technology, SRMU, Lucknow, Uttar Pradesh, India.", interdisciplinaryResearchImage),
                makeCard("RESEARCH CONTRIBUTION", "Sustained-Release Fertilizers for Nutrient-Use Efficiency and Environmental Resilience", "Vivek Kumar Dhiman, Rakesh Kumar, Babit Kumar Thakur, Vinay Kumar Dhiman, Mukul Sharma, Prashant Sharma, Garima Rana, Ritesh Verma, Devendra Singh · Journal of Environmental Chemical Engineering · 2026", "Full title: Sustained-Release Fertilizers for Nutrient-Use Efficiency and Environmental Resilience: A Critical and Integrative Review. Affiliation: Faculty of Biotechnology, Institute of Biosciences and Technology, SRMU, Lucknow–Deva Road, Barabanki, Uttar Pradesh, India.", researchDevelopmentImage),
                makeCard("RESEARCH CONTRIBUTION", "Bioefficiency and Profile of Lignocellulolytic Enzymes in Oyster Mushroom", "Roshan Lal Gautam, Shweta Singh, Devendra Singh, Siya Ram, Ram Naraian · Vegetos · 2026", "Full title: Bioefficiency and Profile of Lignocellulolytic Enzymes in Oyster Mushroom (Pleurotus florida) Cultured on the Substrate with Dried Mango Leaves. Affiliation: Faculty of Biotechnology, Institute of Biosciences and Technology, SRMU, Barabanki, Uttar Pradesh, India.", labImage),
                makeCard("RESEARCH CONTRIBUTION", "Millet Starch Digestibility: Structural Characteristics, Processing Strategies, and Nutritional Implications", "Rakesh Raghunathan, Prashant Anil Pawase, Aniket M. Pathare, Diksha Singh, Gaurav Chandola, Swasti Mudgal, Omar Bashir, Mudasir Ahmad · Food and Humanity · 2026", "Affiliation: Institute of Biosciences and Technology, Shri Ramswaroop Memorial University, Lucknow, India.", foodSafetyImage),
                makeCard("RESEARCH CONTRIBUTION", "The Biostimulant Role of Microbial Exopolysaccharides: Mechanisms and Agricultural Applications", "Sankalp Misra, Salimi Fatemah, Farrokh Parisa · World Journal of Microbiology and Biotechnology · 2026", "Affiliation: Faculty of Biosciences, Institute of Biosciences and Technology, Shri Ramswaroop Memorial University, Barabanki, Uttar Pradesh, India.", interdisciplinaryResearchImage),
                makeCard("RESEARCH CONTRIBUTION", "Bacillus spp. and Jeotgalicoccus huakuii Induce Rice Growth and Salt Stress Resilience", "Sankalp Misra, Semwal Pradeep, Umrao Vaishali, Mishra Shashank Kumar, Shirke Pramod Anand, Chauhan Puneet Singh · Environmental Sustainability · 2026", "The research examines eco-physiological adaptations associated with rice growth and salt stress resilience. Affiliation: Faculty of Biosciences, Institute of Biosciences and Technology, SRMU, Barabanki, Uttar Pradesh, India.", labImage),
                makeCard("RESEARCH CONTRIBUTION", "Harnessing Endophytes and Multi-Omics for Sustainable Colchicine", "Semwal Pradeep, Majhi Basudev, Shivhare Radha, Mishra Shashank Kumar, Sankalp Misra, Chauhan Puneet Singh · World Journal of Microbiology and Biotechnology · 2026", "Affiliation: Faculty of Biosciences, Institute of Biosciences and Technology, Shri Ramswaroop Memorial University, Barabanki, Uttar Pradesh, India.", researchPapersImage),
            ],
        },
    ],
    career: {
        heading: "Career Opportunities in Biotechnology and Biosciences",
        items: [
            ["Biotechnology", "Researcher"],
            ["Molecular", "Biologist"],
            ["Microbiology", "Professional"],
            ["Clinical Research", "Associate"],
            ["Plant Biotechnology", "Specialist"],
            ["Environmental", "Biotechnologist"],
        ],
        descriptions: [],
    },
    facultySection: {
        members: ibstFaculty,
        subheading: "Faculty of Biotechnology and Faculty of Biosciences bring together teaching and research expertise across biological sciences.",
        featuredDescription: "The Institute's academic and research activities connect biotechnology, biosciences, and interdisciplinary scientific work.",
        featuredLabel: "IBST Leadership",
        profileDescription: "Faculty members teach and conduct research across biotechnology and biosciences, including molecular biology, microbial technology, plant biotechnology, immunology, and environmental biotechnology.",
        showResearchShowcase: false,
    },
    faq: [
        { q: "When was the Institute of Biosciences and Technology established?", a: "The institute was established in 2012 with the introduction of the B.Tech. in Biotechnology program. A Ph.D. program in Biotechnology followed in 2013, with B.Sc. (Hons.), M.Sc., and M.Tech. programs introduced in 2015." },
        { q: "Which academic units are part of IBST?", a: "The Institute comprises the Faculty of Biotechnology and the Faculty of Biosciences." },
        { q: "What research areas can students explore?", a: "Research areas include molecular biology and genome editing, microbial biotechnology, plant biotechnology and sustainable agriculture, healthcare and medical biotechnology, nanotechnology and biosciences, and environmental biotechnology." },
        { q: "What practical learning opportunities are available?", a: "Students can take part in expert lectures, industrial and institutional visits, scientific workshops, research activities, and collaborative learning." },
        { q: "Which institutions have hosted student visits?", a: "The supplied activities include visits to CSIR-NBRI, Prospera Biotech, and Amul Banas Dairy." },
        { q: "Where can students find placement information?", a: "The placements section on this page provides the university's placement information and employer details." },
    ],
    showFaculty: true,
    showScholarships: false,
    showBlogs: false,
    showCareerDescriptionCards: false,
};
