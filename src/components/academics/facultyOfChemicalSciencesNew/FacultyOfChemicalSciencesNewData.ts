import {
    Atom,
    BookOpenCheck,
    FlaskConical,
    GraduationCap,
    Leaf,
    Lightbulb,
    Microscope,
    Pill,
    Presentation,
    Search,
} from "lucide-react";
import type { CustomDepartmentNewData, DepartmentActivityCardNew } from "../../../customs/department-page-new/CustomDepartmentNew";
import type { FacultyMember } from "../departmentOfComputerScienceAndEngineeringNew/DepartmentFaculty";
import {
    PlacedStudentsDataOfFacultyChemicalScienceData,
} from "../../../data/academics/institute/institute-department/faculty-of-chemical-sciences-data";
import chemistryImage from "../../../assets/images/academics/departments/chemisty.webp";
import chemistryBannerImage from "../../../assets/images/faculty-of-chemical-sciences-new/physical-sciences-banner.webp";
import chemistryEvent1 from "../../../assets/images/academics/departments/faculty-of-chemical-science/events/img1.webp";
import chemistryEvent2 from "../../../assets/images/academics/departments/faculty-of-chemical-science/events/img2.webp";
import chemistryEvent3 from "../../../assets/images/academics/departments/faculty-of-chemical-science/events/img3.webp";
import chemistryEvent4 from "../../../assets/images/academics/departments/faculty-of-chemical-science/events/img4.webp";
import chemistryEvent5 from "../../../assets/images/academics/departments/faculty-of-chemical-science/events/img5.webp";
import chemistryEvent6 from "../../../assets/images/academics/departments/faculty-of-chemical-science/events/img6.webp";
import chemistryEvent7 from "../../../assets/images/academics/departments/faculty-of-chemical-science/events/img7.webp";
import chemistryEvent8 from "../../../assets/images/academics/departments/faculty-of-chemical-science/events/img8.webp";
import chemistryEvent9 from "../../../assets/images/academics/departments/faculty-of-chemical-science/events/img9.webp";
import chemistryEvent10 from "../../../assets/images/academics/departments/faculty-of-chemical-science/events/img10.webp";

const card = (
    tag: string,
    title: string,
    description: string,
    img: string,
    speaker?: string,
): DepartmentActivityCardNew => ({
    tag,
    title,
    speaker,
    shortDesc: description,
    readMore: description,
    img,
});

const chemicalSciencesFaculty: FacultyMember[] = PlacedStudentsDataOfFacultyChemicalScienceData.map((member) => {
    const isFacultyLead = member.name.includes("Krishna Srivastava");

    return {
        id: String(member.id),
        name: member.name,
        role: member.designation,
        img: member.image,
        isHod: isFacultyLead,
        ...(isFacultyLead
            ? {
                qualification: "M.Sc. in Chemistry and Ph.D. in Chemistry",
                experience: "21+ years",
                specialization: ["Heterocyclic medicinal compounds", "Organic chemistry"],
                expertise: "Professor Krishna Srivastava's academic and research work includes medicinal chemistry, heterocyclic synthesis, and computational chemistry.",
            }
            : {}),
    };
});

export const facultyOfChemicalSciencesNewData: CustomDepartmentNewData = {
    navSections: [
        { id: "overview", label: "Overview" },
        { id: "programs", label: "Programmes" },
        { id: "labs", label: "Learning Areas" },
        { id: "events", label: "Activities" },
        { id: "faculty", label: "Faculty" },
        { id: "faq", label: "FAQs" },
    ],
    hero: {
        prefix: "Faculty of",
        title: "Chemical Sciences",
        backgroundImage: chemistryBannerImage,
        stats: [
            { v: "6", l: "Guest Lectures\nReported", delay: "0ms" },
            { v: "10", l: "Research\nPublications", delay: "90ms" },
            { v: "2", l: "Patents\nGranted", delay: "180ms" },
            { v: "4", l: "Patents\nPublished", delay: "270ms" },
        ],
        quickStats: [
            { value: "6", label: "Guest Lectures Reported" },
            { value: "10", label: "Research Publications" },
            { value: "2", label: "Patents Granted" },
            { value: "4", label: "Patents Published" },
        ],
    },
    overview: {
        headingBefore: "About the",
        headingHighlight: "Faculty",
        subtitle: "Chemical Sciences at SRMU",
        paragraphs: [
            "The Faculty of Chemical Sciences at Shri Ramswaroop Memorial University (SRMU) provides an academic environment focused on understanding chemical principles, laboratory-based learning, and research. The faculty encourages students to explore the applications of chemistry across areas such as drug discovery, environmental science, nanotechnology, material science, and sustainable chemical processes.",
            "Through academic discussions, expert lectures, and research activities, the faculty aims to develop scientific understanding, analytical thinking, and research capabilities among undergraduate, postgraduate, and doctoral students.",
            "",
        ],
        preview: "The Faculty of Chemical Sciences at SRMU combines core chemistry, laboratory-based learning, expert academic interaction, and research across applied areas of science.",
        image: chemistryImage,
        imageAlt: "Laboratory experiment in the chemical sciences",
    },
    missionVision: {
        missionItems: [
            "To provide quality education and research opportunities in chemical sciences while developing students' scientific knowledge, practical skills, and ability to address contemporary challenges.",
            "Strengthen conceptual understanding of fundamental and applied chemistry.",
            "Promote laboratory-based learning and experimental skills.",
            "Encourage research, innovation, and interdisciplinary collaboration.",
            "Connect chemical sciences with industrial, environmental, and healthcare applications.",
            "Develop scientific ethics, critical thinking, and problem-solving abilities.",
        ],
        visionText: "To establish an academically progressive environment that promotes excellence in chemical sciences through quality education, innovative research, and meaningful contributions to science, technology, and society.",
    },
    programHeadingBefore: "Explore",
    programHeadingHighlight: "Programmes",
    programs: [
        {
            category: "Undergraduate Programme",
            mobileLabel: "Undergraduate",
            badge: "B.Sc.",
            icon: GraduationCap,
            programs: [
                { title: "B.Sc. (Hons.) in Chemistry", description: "Undergraduate study in chemistry with theoretical learning and laboratory practice.", icon: FlaskConical, link: "/program/b-sc-hons-chemistry" },
            ],
        },
        {
            category: "Postgraduate Programme",
            mobileLabel: "Postgraduate",
            badge: "M.Sc.",
            icon: BookOpenCheck,
            programs: [
                { title: "M.Sc. in Chemistry", description: "Advanced study in chemistry supporting subject learning and research.", icon: Microscope, link: "/program/m-sc-chemistry" },
            ],
        },
        {
            category: "Doctoral Programme",
            mobileLabel: "Doctoral",
            badge: "Ph.D.",
            icon: Microscope,
            programs: [
                { title: "Ph.D. in Chemistry", description: "Doctoral research in chemical sciences.", icon: Search, link: "/program/phd" },
            ],
        },
    ],
    labs: {
        headingBefore: "Learning Through",
        headingHighlight: "Practical Application",
        intro: "Chemical sciences combines theoretical knowledge with experimental investigation. Students are encouraged to understand chemical reactions, material properties, analytical techniques, and the applications of chemistry through practical learning and research-oriented activities.",
        items: [
            { num: "01", title: "Organic & Inorganic Chemistry", desc: "Build conceptual understanding of organic and inorganic chemistry and their applications.", accent: "#d62c2b", icon: FlaskConical, animClass: "lab-icon-orbital" },
            { num: "02", title: "Physical & Analytical Chemistry", desc: "Explore physical chemistry and analytical techniques used to investigate chemical systems.", accent: "#1B4F91", icon: Search, animClass: "lab-icon-pulse" },
            { num: "03", title: "Synthesis & Characterization", desc: "Study chemical synthesis and the characterization of compounds and materials through experimental learning.", accent: "#14284E", icon: Atom, animClass: "lab-icon-network" },
            { num: "04", title: "Environmental & Sustainable Chemistry", desc: "Examine sustainable chemical processes and applications related to environmental challenges.", accent: "#d62c2b", icon: Leaf, animClass: "lab-icon-float" },
            { num: "05", title: "Nanomaterials & Catalysis", desc: "Explore nanomaterials and catalytic applications in contemporary chemical research.", accent: "#1B4F91", icon: Lightbulb, animClass: "lab-icon-glow" },
            { num: "06", title: "Molecular Modelling & Drug Discovery", desc: "Connect molecular modelling and chemical science with the process of drug discovery.", accent: "#14284E", icon: Pill, animClass: "lab-icon-stack" },
        ],
    },
    highlights: {
        headingBefore: "What Makes the",
        headingHighlight: "Chemical Department Different?",
        items: [
            { num: "01", title: "RESEARCH-ORIENTED LEARNING", desc: "Students are exposed to contemporary research topics through expert lectures, academic webinars, and research discussions.", icon: Microscope },
            { num: "02", title: "FOCUS ON SUSTAINABLE CHEMISTRY", desc: "Research activities explore sustainable synthesis, biomass utilization, nanomaterials, and environmental remediation.", icon: Leaf },
            { num: "03", title: "INDUSTRY-RELEVANT SCIENTIFIC APPLICATIONS", desc: "Academic discussions connect chemical principles with applications in drug discovery, catalysis, material development, and environmental technologies.", icon: Atom },
            { num: "04", title: "EXPERT ACADEMIC INTERACTION", desc: "Guest lectures provide opportunities to learn from researchers and experts from universities and institutions across India and abroad.", icon: Presentation },
            { num: "05", title: "RESEARCH AND INTELLECTUAL PROPERTY DEVELOPMENT", desc: "Faculty research contributes to publications and patent-related innovation across multiple areas of chemical sciences.", icon: Lightbulb },
        ],
    },
    events: {
        headingBefore: "Expert Lectures and",
        headingHighlight: "Academic Engagement",
        sectionSubtitle: "Guest Lectures",
        intro: "Six guest lectures are reported for the supplied reporting period; details were provided for four of them. The sessions introduced students to current topics and applications across chemical sciences.",
        cards: [
            card("GUEST LECTURE", "Atmospheric Chemistry of Pollutants and Their Potential Health Impacts", "Dr. Verma discussed atmospheric particulate matter, particularly PM2.5 and PM10, commonly found in busy Indian cities. The session highlighted their potential health impacts and explained preventive measures to students of B.Sc. and M.Sc. Chemistry and faculty members.", chemistryEvent1, "15 October 2025 · Speaker: Dr. Puneet Kumar Verma, PDF, USA"),
            card("GUEST LECTURE", "Coordination Compounds and Their Reaction Mechanism", "The lecture explored coordination compounds and their reaction mechanisms, including how these reactions contribute to industrially relevant products.", chemistryEvent2, "17 September 2025 · Speaker: Dr. Vikas Singh, Lucknow, Uttar Pradesh"),
            card("GUEST LECTURE", "Molecular Docking: Applications in Drug Discovery", "Dr. Adhikari introduced students to the drug discovery process, explaining the stages involved in identifying and developing drug molecules, the time and costs associated with discovery, and the applications and potential side effects of commonly used drugs.", chemistryEvent3, "9 September 2026 · Speaker: Dr. Anupriya Adhikari, Graphic Era Hill University, Dehradun, Uttarakhand"),
            card("GUEST LECTURE", "Green and Sustainable Synthesis of Nanostructured Materials for Catalytic Applications", "The lecture discussed the synthesis of aluminum- and zinc-based nanomaterials through sustainable approaches and their catalytic applications. The session also introduced students to novel and complex applications of nanostructured materials.", chemistryEvent4, "6 October 2026 · Speaker: Dr. Sreenivasulu Peta, School of Applied Science and Humanities, Vadlamudi, Guntur, Andhra Pradesh"),
        ],
    },
    activitySections: [
        {
            id: "academic-events",
            eyebrow: "Events, Webinars, and Student Engagement",
            heading: "",
            intro: "The faculty supports academic interaction through webinars and student activities that strengthen subject awareness, communication, and critical thinking.",
            cards: [
                card("NATIONAL WEBINAR", "Frontiers in Chemistry: Innovations and Future Perspectives", "The Faculty of Chemical Sciences organized a two-day national webinar titled Frontiers in Chemistry: Innovations and Future Perspectives. Experts from various institutions delivered talks on emerging areas of chemistry, offering students of B.Sc., M.Sc., and Ph.D. programs, along with faculty members, an opportunity to engage with contemporary developments in the discipline.", chemistryEvent5, "8–9 June 2026"),
                card("UNIVERSITY-LEVEL DEBATE", "University-Level Debate Competition", "Organized in collaboration with the Faculty of Humanities and Social Sciences, the University-Level Debate Competition brought together students from different departments to exchange ideas and develop their communication, reasoning, and public-speaking skills. The competition was coordinated by Dr.Sadhana Singh and Dr.Dolly Kumari, with student coordinators Shriya Mishra and Payal Maurya.Approximately 31 students participated.", chemistryEvent6, "26 September · Year to be verified · Coordinators: Dr. Sadhana Singh and Dr. Dolly Kumari; student coordinators: Shriya Mishra and Payal Maurya"),
            ],
        },
    ],
    research: {
        eyebrow: "Research & Publications",
        heading: "Research Across Chemical Sciences",
        description: "The supplied update reports 10 research publications. It includes details for publication records 5 through 10, shown below with their journal information.",
        cards: [
            card("RESEARCH PUBLICATION · 5", "Solvent-Free Synthesis of a Binary Organic Material with Spectroscopic, Thermodynamic, Dielectric and Computational Studies", "Scientific Reports, Springer Nature · Volume 16, article 8242.", chemistryEvent7),
            card("RESEARCH PUBLICATION · 6", "Phase Diagram, Thermal Structure and Optical Studies of Newly Synthesized Co-crystals", "Journal of Thermal Analysis and Calorimetry, Springer Nature · Volume 151, pages 3811–3822.", chemistryEvent8),
            card("RESEARCH PUBLICATION · 7", "Synthesis, Characterization and Antimicrobial Activities of Novel Heterocycles 8-(3-chloro-2-(2-hydroxy-3-nitrophenyl)-4-oxoazetidin-1-yl)-4-methylpyrano[2,3-b]phenothiazin-2(11H)-one and 8-(4-(2-(3-bromo-2-hydroxyphenyl)-3-chloro-4-oxoazetidin-1-yl)phenyl)-4-methylpyrano[2,3-b]phenothiazin-2(11H)-one Derivatives", "International Journal of Engineering Research & Science (IJOER) · Volume 12, issue 5, pages 29–42.", chemistryEvent9),
            card("RESEARCH PUBLICATION · 8", "Conventional Route for Synthesis of Novel Heterocyclic 2-(Substituted-2-oxo-2H-chromen-3-yl)-3-(4-(2-(substitutedphenyl)-4,5-diphenyl-4,5-dihydro-1H-imidazol-1-yl)phenyl)-2-methylthiazolidin-4-one Derivatives and Their Antimicrobial Activity", "International Journal of Engineering Research & Science (IJOER) · Volume 12, issue 5, pages 19–28.", chemistryEvent10),
            card("RESEARCH PUBLICATION · 9", "Synthesis, Characterization and Biological Evaluation of Novel Thiadiazin-2-yl-Thiazolidin-4-one and Dihydrothiazol-2-yl-Thiazolidin-4-one Analogs", "Research Journal of Chemistry and Environment · Volume 30, issue 7, pages 48–55.", chemistryImage),
            card("RESEARCH PUBLICATION · 10", "Sustainable Polypyrrole@CoFe2O4 Nanocomposite for the Enhanced Removal of Toxic Mercury(II): Kinetic Modeling and Mechanistic Approach", "Pure and Applied Chemistry, De Gruyter Brill · DOI: 10.1515/pac-2025-0653.", chemistryImage),
        ],
    },
    career: {
        heading: "Career Opportunities",
        items: [
            ["Research", "Scientist"],
            ["Analytical", "Chemist"],
            ["Quality Control", "Analyst"],
            ["Quality Assurance", "Executive"],
            ["Laboratory", "Analyst"],
            ["Chemical Research", "Associate"],
            ["Environmental", "Chemist"],
            ["Pharmaceutical Research", "Associate"],
            ["Material Science", "Researcher"],
            ["Chemistry", "Educator"],
        ],
        descriptions: [],
    },
    facultySection: {
        members: chemicalSciencesFaculty,
        subheading: "Faculty members bring teaching and research experience across chemistry, including medicinal chemistry, organic synthesis, materials, and related areas.",
        featuredLabel: "FACULTY LEAD",
        featuredDescription: "Prof. (Dr.) Krishna Srivastava is listed as Professor and Department Head in the Faculty of Chemical Sciences.",
        profileDescription: "Faculty members support chemistry teaching, research, expert academic interaction, and student learning.",
        showResearchShowcase: false,
    },
    faq: [
        { q: "What is the focus of the Faculty of Chemical Sciences at SRMU?", a: "The faculty focuses on teaching and research in Chemistry, including chemical synthesis, analytical methods, sustainable chemistry, nanomaterials, and their applications." },
        { q: "Does the faculty organise guest lectures?", a: "Yes. The faculty organises expert lectures featuring speakers from universities and research institutions to introduce students to emerging developments in Chemistry." },
        { q: "What topics were covered in the recent guest lectures?", a: "The reported topics include atmospheric chemistry and pollution, coordination compounds, molecular docking, and sustainable synthesis of nanostructured materials." },
        { q: "Does the faculty organise national-level academic events?", a: "Yes. The faculty organised the National Webinar on Frontiers in Chemistry: Innovations and Future Perspectives on 8 and 9 June 2026." },
        { q: "What research areas are covered by faculty members?", a: "Research areas include heterocyclic synthesis, antimicrobial studies, sustainable chemistry, nanocomposites, materials science, and environmental remediation." },
        { q: "How many research papers were reported during the update period?", a: "The faculty reported 10 research publications for the period covered by the supplied update." },
        { q: "Has the faculty contributed to patent development?", a: "Yes. The supplied update reports two patents granted and four patents published." },
        { q: "Does the faculty organise student activities beyond classroom learning?", a: "Yes. Activities include expert lectures, academic webinars, and student competitions, including a university-level debate competition." },
        { q: "What career opportunities are available after studying Chemistry?", a: "Students can explore careers in research, pharmaceutical and chemical industries, quality control, environmental analysis, laboratory services and education, depending on their qualifications and specialisation." },
        { q: "Where is SRMU located?", a: "Shri Ramswaroop Memorial University is located on Lucknow–Deva Road, Barabanki, Uttar Pradesh." },
    ],
    showFaculty: true,
    showScholarships: true,
    showBlogs: true,
    showCareerDescriptionCards: false,
};
