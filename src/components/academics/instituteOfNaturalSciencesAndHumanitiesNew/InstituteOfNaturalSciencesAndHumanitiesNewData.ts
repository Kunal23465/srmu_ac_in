import {
    Activity,
    BookOpenCheck,
    Calculator,
    ChartNoAxesColumnIncreasing,
    FlaskConical,
    GraduationCap,
    Lightbulb,
    Microscope,
    Presentation,
    UsersRound,
} from "lucide-react";
import type { CustomDepartmentNewData, DepartmentActivityCardNew } from "../../../customs/department-page-new/CustomDepartmentNew";
import type { FacultyMember } from "../departmentOfComputerScienceAndEngineeringNew/DepartmentFaculty";
import heroImage from "../../../assets/images/academics/institutes/naturalscience-06052403201478.webp";
import heroBannerImage from "../../../assets/images/institute-of-natural-sciences-and-humanities-new/natural-sciences-and-humanities-banner.webp";
import overviewImage from "../../../assets/images/home/program-section/undergraduate/natural-science.jpg";
import humanitiesImage from "../../../assets/images/home/program-section/undergraduate/humanities-22022410271022.jpg";
import chemistryImage from "../../../assets/images/academics/departments/chemisty.webp";
import physicalSciencesImage from "../../../assets/images/academics/departments/physics1-07022411301098.webp";
import mathematicsImage from "../../../assets/images/academics/departments/maths-07022411311165.webp";
import conferenceImage from "../../../assets/images/research/publication/NATIONALMATHSCONFERENCE(2)-24112310463276.jpeg";
import solarConferenceImage from "../../../assets/images/research/publication/conference/chem1-04032402231959.jpg";
import guestLectureImage from "../../../assets/images/academics/departments/wee-0206250448025.webp";
import centralLimitLectureImage from "../../../assets/images/academics/departments/guest7-09052401033814.webp";
import vedicSeminarImage from "../../../assets/images/academics/departments/internation1-09052401044878.webp";
import directorImage from "../../../assets/images/academics/departments/prof.-b-m-dixit-photo-10062510410818.webp";

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

const instituteDirector: FacultyMember = {
    id: "insh-director",
    name: "Prof. (Dr.) B.M. Dixit",
    role: "Director, Institute of Natural Sciences and Humanities",
    img: directorImage,
    isHod: true,
    qualification: "M.Sc. in Physics, M.Sc. in Mathematics, and Ph.D.",
    experience: "20+ years",
    email: "director.insh@srmu.ac.in",
    contact: "+91-9554966267",
    specialization: ["Nuclear Structure Physics", "Medical Physics"],
    expertise: "Prof. (Dr.) B.M. Dixit is Professor in the Faculty of Physical Sciences and Director of the Institute of Natural Sciences and Humanities. His academic and research work includes nuclear structure physics and medical physics. He has taught undergraduate and postgraduate courses, published research, delivered popular science lectures, and guided doctoral scholars.",
};

export const instituteOfNaturalSciencesAndHumanitiesNewData: CustomDepartmentNewData = {
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
        title: "Natural Sciences and Humanities",
        backgroundImage: heroBannerImage,
        stats: [
            { v: "04", l: "Faculties", delay: "0ms" },
            { v: "65+", l: "Faculty Members", delay: "90ms" },
            { v: "20+", l: "Ph.D. Scholars", delay: "180ms" },
            { v: "UG–PG–Ph.D.", l: "Academic Levels", delay: "270ms" },
        ],
        quickStats: [
            { value: "04", label: "Faculties" },
            { value: "65+", label: "Faculty Members" },
            { value: "20+", label: "Ph.D. Scholars" },
            { value: "UG–PG–Ph.D.", label: "Academic Levels" },
        ],
    },
    overview: {
        headingBefore: "About the",
        headingHighlight: "Institute",
        subtitle: "Natural Sciences, Mathematics & Humanities",
        paragraphs: [
            "The Institute of Natural Sciences and Humanities is an interdisciplinary academic center at SRMU. Its academic framework combines the study of natural sciences with mathematics, statistics, and humanities, helping students understand both scientific principles and the social contexts in which knowledge is applied.",
            "The institute has more than 65 faculty members, many of whom hold doctoral qualifications and are engaged in research and scholarly publications. It also supports more than 20 Ph.D. research scholars. Its teaching approach combines program-specific curricula, skill-development courses, laboratory learning, and research-oriented activities.",
            "",
        ],
        preview: "The Institute of Natural Sciences and Humanities is an interdisciplinary academic center at Shri Ramswaroop Memorial University, bringing together natural sciences, mathematics, statistics, and humanities.",
        image: overviewImage,
        imageAlt: "Natural sciences and humanities learning at SRMU",
    },
    missionVision: {
        missionItems: [
            "Promote quality education, research, and interdisciplinary learning while developing students who apply knowledge, analytical thinking, and ethical values to academic, professional, and societal challenges.",
            "Build strong conceptual foundations across scientific and humanities disciplines.",
            "Encourage research, innovation, and evidence-based thinking.",
            "Develop analytical, communication, and problem-solving skills.",
            "Connect classroom learning with practical applications and contemporary issues.",
            "Promote academic integrity, social responsibility, and lifelong learning.",
        ],
        visionText: "To be recognized for creating interdisciplinary knowledge and skilled human capital embedded with values and ethics, contributing meaningfully to society and nation-building.",
    },
    programs: [
        {
            category: "Faculty of Physical Sciences",
            mobileLabel: "Physical",
            badge: "Faculty Programme",
            icon: Microscope,
            programs: [
                { title: "B.Sc. (Hons.) in Physics", description: "Undergraduate study in physics and the scientific principles describing the natural world.", icon: GraduationCap, link: "/program/b-sc-hons-physics" },
                { title: "M.Sc. in Physics", description: "Postgraduate study in physics for advanced learning and research.", icon: BookOpenCheck, link: "/program/m-sc-physics" },
            ],
        },
        {
            category: "Faculty of Chemical Sciences",
            mobileLabel: "Chemical",
            badge: "Faculty Programme",
            icon: FlaskConical,
            programs: [
                { title: "B.Sc. (Hons.) in Chemistry", description: "Undergraduate study in chemical sciences, concepts, and laboratory practice.", icon: GraduationCap, link: "/program/b-sc-hons-chemistry" },
                { title: "M.Sc. in Chemistry", description: "Postgraduate study in chemistry supporting advanced subject learning and research.", icon: BookOpenCheck, link: "/program/m-sc-chemistry" },
            ],
        },
        {
            category: "Faculty of Mathematical and Statistical Sciences",
            mobileLabel: "Mathematics",
            badge: "Faculty Programme",
            icon: Calculator,
            programs: [
                { title: "B.Sc. (Hons.) in Mathematics", description: "Undergraduate study in mathematical concepts, analysis, and applications.", icon: GraduationCap, link: "/program/b-sc-hons-mathematics" },
                { title: "M.Sc. in Mathematics", description: "Postgraduate study in mathematics for advanced learning and research.", icon: BookOpenCheck, link: "/program/m-sc-mathematics" },
                { title: "M.Sc. in Statistics", description: "Postgraduate study in statistical methods, probability, and data analysis.", icon: ChartNoAxesColumnIncreasing, link: "/program/m-sc-statistics" },
            ],
        },
        {
            category: "Faculty of Humanities and Social Sciences",
            mobileLabel: "Humanities",
            badge: "Faculty Programme",
            icon: UsersRound,
            programs: [
                { title: "B.A. (Hons.) in English", description: "Undergraduate study in English language, literature, and communication.", icon: GraduationCap, link: "/program/b-a-hons-english" },
                { title: "B.A. (Hons.) in Political Science", description: "Undergraduate study in political systems, institutions, and public affairs.", icon: GraduationCap, link: "/program/b-a-hons-political-science" },
                { title: "B.A. (Hons.) in Sociology", description: "Undergraduate study of society, social relationships, and institutions.", icon: GraduationCap, link: "/program/b-a-hons-sociology" },
                { title: "B.A. (Hons.) in Applied Psychology", description: "Undergraduate study of psychological concepts and their applications.", icon: GraduationCap, link: "/program/b-a-hons-applied-psychology" },
                { title: "M.A. in English", description: "Postgraduate study in English language, literature, and communication.", icon: BookOpenCheck, link: "/program/m-a-english" },
                { title: "M.A. in Psychology", description: "Postgraduate study in psychological concepts and their applications.", icon: BookOpenCheck, link: "/program/m-a-psychology" },
                { title: "M.A. in Political Science", description: "Postgraduate study in politics, governance, and public affairs.", icon: BookOpenCheck, link: "/program/m-a-political-science" },
                { title: "M.A. in Sociology", description: "Postgraduate study in society, social structures, and contemporary issues.", icon: BookOpenCheck, link: "/program/m-a-sociology" },
                { title: "Master of Social Work (MSW)", description: "Postgraduate study in social work and related practice.", icon: UsersRound, link: "/program/msw" },
                { title: "Master in Public Health (MPH)", description: "Postgraduate study in public health.", icon: Activity, link: "/program/mph-master-in-public-health" },
            ],
        },
    ],
    programHeadingBefore: "Our Faculties &",
    programHeadingHighlight: "Programmes",
    labs: {
        headingBefore: "Academic Learning &",
        headingHighlight: "Practical Resources",
        intro: "The institute encourages students to connect theoretical concepts with observation, experimentation, computation, and research. Laboratory-based learning and academic resources support the development of subject knowledge and practical skills.",
        items: [
            { num: "01", title: "Experimental & Applied Sciences", desc: "Connect scientific concepts with observation, experimentation, and practical applications.", accent: "#D62C2B", icon: Microscope, animClass: "lab-icon-glow" },
            { num: "02", title: "Chemical Analysis & Laboratory Techniques", desc: "Develop practical understanding of chemical analysis and laboratory methods.", accent: "#1B4F91", icon: FlaskConical, animClass: "lab-icon-network" },
            { num: "03", title: "Mathematical Modelling & Statistics", desc: "Explore mathematical modelling and statistical methods for academic and applied questions.", accent: "#D62C2B", icon: Calculator, animClass: "lab-icon-pulse" },
            { num: "04", title: "Computational & Data-Oriented Learning", desc: "Build computational skills and learn to work with data across relevant disciplines.", accent: "#1B4F91", icon: ChartNoAxesColumnIncreasing, animClass: "lab-icon-float" },
            { num: "05", title: "Research Methodology & Scientific Communication", desc: "Develop research methods and communicate academic ideas and findings clearly.", accent: "#D62C2B", icon: BookOpenCheck, animClass: "lab-icon-stack" },
            { num: "06", title: "Social Research & Field-Based Learning", desc: "Explore social questions through research and field-based learning.", accent: "#1B4F91", icon: UsersRound, animClass: "lab-icon-network" },
            { num: "07", title: "Chemistry Laboratories", desc: "Support practical experimentation, chemical analysis, and laboratory techniques across relevant programmes.", accent: "#D62C2B", icon: FlaskConical, animClass: "lab-icon-glow" },
            { num: "08", title: "Computer & SPSS Laboratories", desc: "Support computational and statistical learning, mathematical applications, and data-oriented work.", accent: "#1B4F91", icon: ChartNoAxesColumnIncreasing, animClass: "lab-icon-network" },
            { num: "09", title: "Research Facilities", desc: "Provide an academic setting for faculty- and scholar-led research and research-oriented learning.", accent: "#D62C2B", icon: Microscope, animClass: "lab-icon-pulse" },
            { num: "10", title: "Communication Facilities", desc: "Help students strengthen presentation, language, and scientific communication skills.", accent: "#1B4F91", icon: Presentation, animClass: "lab-icon-float" },
            { num: "11", title: "Vedic Science Center", desc: "Offers an opportunity to explore traditional mathematical knowledge and its relationship with learning.", accent: "#D62C2B", icon: Lightbulb, animClass: "lab-icon-stack" },
        ],
    },
    highlights: {
        headingBefore: "What Makes the",
        headingHighlight: "Institute Different?",
        items: [
            { num: "01", title: "Interdisciplinary Academic Structure", desc: "Four faculties bring together scientific, mathematical, and social science disciplines under one institute.", icon: UsersRound },
            { num: "02", title: "Research-Oriented Learning", desc: "Students and scholars are encouraged to engage with research, publications, conferences, and academic projects.", icon: Microscope },
            { num: "03", title: "Laboratory-Based Education", desc: "Practical learning resources complement theoretical concepts across relevant science disciplines.", icon: FlaskConical },
            { num: "04", title: "Experienced Faculty", desc: "The institute's faculty brings academic qualifications, teaching experience, and research expertise to the learning environment.", icon: GraduationCap },
            { num: "05", title: "Academic Platforms", desc: "Guest lectures, workshops, seminars, and conferences connect students with ideas and perspectives beyond regular coursework.", icon: Presentation },
            { num: "06", title: "Values & Ethics", desc: "The institute connects academic development with ethical understanding and contributions to society.", icon: Lightbulb },
        ],
    },
    events: {
        headingBefore: "From Classroom Learning to",
        headingHighlight: "Academic Engagement",
        sectionSubtitle: "",
        intro: "The institute encourages academic participation through guest lectures, workshops, seminars, conferences, and research discussions. These activities expose students to new ideas, expert perspectives, and developments across scientific and humanities disciplines.",
        cards: [
            card("INTERNATIONAL CONFERENCE", "Advancement in Natural Sciences: Vedic to Modern Era (ICANSVME-24)", "A three-day international conference hosted by SRMU, bringing together academic discussions on developments in natural sciences and the relationship between traditional knowledge and modern scientific approaches.", heroImage, "22–24 January 2024"),
            card("NATIONAL CONFERENCE", "SOLARIS 2020: Sustainable Environment and Climate", "Organized by the Faculty of Physical Sciences, INSH, in collaboration with BERS, Sukrit Solar Pvt. Limited, and Gajah Solar Power Pvt. Limited. The conference included invited lectures, poster presentations, and technical sessions on sustainability and climate-related research.", solarConferenceImage, "7–9 February 2020"),
            card("NATIONAL CONFERENCE", "National Conference on Recent Trends in Mathematics with Applications (NCRTMA-20)", "Organized by the Faculty of Mathematical and Statistical Sciences, the conference provided a platform for researchers and mathematicians to discuss recent developments and applications of mathematical concepts.", conferenceImage, "30–31 January 2020"),
            card("INTERNATIONAL SEMINAR", "International Seminar on Emerging Trends in Mathematics and Its Applications", "The seminar explored emerging developments in mathematics and their relevance to research and practical applications.", vedicSeminarImage, "23 March 2023"),
            card("GUEST LECTURE", "Guest Lecture: Numbers and Their Relevance in Our Daily Life", "The lecture highlighted the role of numbers and mathematical concepts in everyday situations, helping students connect classroom learning with practical experiences.", guestLectureImage, "8 November 2024"),
            card("GUEST LECTURE", "Guest Lecture: An Overview of the Central Limit Theorem", "The session introduced the Central Limit Theorem and its significance in probability, statistical reasoning, and data analysis.", centralLimitLectureImage, "21 February 2025"),
        ],
    },
    activitySections: [
        {
            id: "research-publications",
            eyebrow: "Research & Innovation",
            heading: "Interdisciplinary Academic Inquiry",
            intro: "The institute supports research and scholarly publications across its constituent faculties, alongside doctoral research and academic exchange through conferences, seminars, and research discussions.",
            cards: [
                card("PHYSICAL SCIENCES", "Research in Natural Sciences", "Academic work across physical sciences connects scientific concepts with observation, research, and contemporary questions.", physicalSciencesImage),
                card("CHEMICAL SCIENCES", "Research & Chemical Analysis", "Chemical sciences learning includes laboratory techniques, practical experimentation, and analysis.", chemistryImage),
                card("MATHEMATICAL & STATISTICAL SCIENCES", "Quantitative Research & Analysis", "Mathematical and statistical methods support research, data interpretation, and applications across disciplines.", mathematicsImage),
                card("HUMANITIES & SOCIAL SCIENCES", "Social Research & Humanities", "Social research and field-based learning help students examine society and contemporary issues.", humanitiesImage),
            ],
        },
    ],
    community: {
        eyebrow: "",
        heading: "Student Development and Academic Achievements",
        paragraphs: [
            "The institute encourages students to develop beyond classroom learning through academic events, research participation, seminars, conferences, and interdisciplinary engagement.",
            "",
        ],
        focusTitle: "Students can build capabilities in:",
        focusAreas: [
            "Critical and analytical thinking",
            "Scientific observation and research",
            "Data interpretation and problem-solving",
            "Academic writing and communication",
            "Teamwork and collaborative learning",
            "Social awareness and responsible citizenship",
        ],
    },
    career: {
        heading: "Career Opportunities",
        items: [
            ["Social Researcher"],
            ["Content Professional"],
            ["Policy Research Assistant"],
            ["Social Worker"],
            ["Psychology Support Roles"],
        ],
        descriptions: [
            { title: "Social Research", description: "Social researcher" },
            { title: "Content & Communication", description: "Content professional" },
            { title: "Policy Research", description: "Policy research assistant" },
            { title: "Social Work", description: "Social worker" },
            { title: "Psychology", description: "Psychology-related support roles, subject to qualification" },
        ],
    },
    facultySection: {
        members: [instituteDirector],
        headingText: "Faculty & Academic",
        headingHighlight: "Leadership",
        subheading: "Prof. (Dr.) B.M. Dixit leads the institute, which brings together more than 65 faculty members and supports more than 20 Ph.D. research scholars.",
        featuredLabel: "INSTITUTE DIRECTOR",
        featuredDescription: "Prof. (Dr.) B.M. Dixit leads the Institute of Natural Sciences and Humanities and works in nuclear structure physics and medical physics.",
        profileDescription: "Institute faculty contribute to teaching, research, scholarly publications, academic events, and interdisciplinary learning.",
        showResearchShowcase: false,
    },
    faq: [
        { q: "What is the Institute of Natural Sciences and Humanities at SRMU?", a: "It is an academic institute at SRMU comprising four faculties: Physical Sciences, Chemical Sciences, Mathematical and Statistical Sciences, and Humanities and Social Sciences." },
        { q: "Which faculties are part of the institute?", a: "The institute has four faculties covering physical sciences, chemical sciences, mathematics and statistics, and humanities and social sciences." },
        { q: "What programmes are offered by the institute?", a: "Programmes span undergraduate, postgraduate, and doctoral levels across its constituent faculties, including disciplines such as chemistry, mathematics, statistics, English, political science, sociology, and psychology." },
        { q: "Does the institute offer postgraduate programmes?", a: "Yes. Published program information includes postgraduate programs such as M.Sc. Chemistry, M.Sc. Mathematics, M.Sc. Statistics, M.A. programs, MSW, and MPH. Current availability should be checked in the admission prospectus." },
        { q: "Does SRMU offer Ph.D. programmes in these disciplines?", a: "The institute supports doctoral research across relevant disciplines. Refer to the current Ph.D. admission notification for available subjects and eligibility." },
        { q: "What practical learning facilities are available?", a: "Learning resources include science laboratories, computer facilities, an SPSS lab, research facilities, and communication-related resources, depending on the discipline." },
        { q: "Does the institute organize conferences and seminars?", a: "Yes. The institute and its faculties organize and participate in academic events, including conferences, seminars, workshops, and guest lectures." },
        { q: "What career options are available after studying at the institute?", a: "Career pathways vary by programme and may include research, education, laboratory work, data analysis, social research, public health, and other specialized fields." },
        { q: "Who heads the Institute of Natural Sciences and Humanities?", a: "Prof. (Dr.) B.M. Dixit is listed as the director of the institute." },
        { q: "Where is SRMU located?", a: "Shri Ramswaroop Memorial University is located on Lucknow–Deva Road, Barabanki, Uttar Pradesh." },
    ],
    showFaculty: true,
    showScholarships: true,
    showCareerDescriptionCards: false,
};
