import {
    Activity,
    BookOpenCheck,
    BriefcaseBusiness,
    Droplets,
    FlaskConical,
    Flower2,
    GraduationCap,
    Leaf,
    Microscope,
    Sprout,
    Store,
    Tractor,
    UsersRound,
} from "lucide-react";
import type { CustomDepartmentNewData, DepartmentActivityCardNew } from "../../../customs/department-page-new/CustomDepartmentNew";
import type { FacultyMember } from "../departmentOfComputerScienceAndEngineeringNew/DepartmentFaculty";
import {
    InstituteofAgriculturalSciencesandTechnologyDepartmentEventsData,
    InstituteofAgriculturalSciencesandTechnologyfacultyData,
    InstituteofAgriculturalSciencesandTechnologyinstituteProfiles,
} from "../../../data/academics/institute/institute-department/institute-of-agricultural-sciences-and-technology-data";
import departmentBanner from "../../../assets/images/academics/departments/agri1-09052412363771.webp";
import overviewImage from "../../../assets/images/academics/departments/agri3-09052412364666.webp";
import cropScienceImage from "../../../assets/images/academics/departments/agri2-09052412365475.webp";
import researchImage from "../../../assets/images/academics/departments/agri4-09052412370363.webp";
import practicalLearningImage from "../../../assets/images/academics/departments/agri5-09052412371288.webp";

const activityCard = (
    tag: string,
    title: string,
    shortDesc: string,
    img: string,
    speaker?: string,
): DepartmentActivityCardNew => ({
    tag,
    title,
    speaker,
    shortDesc,
    readMore: shortDesc,
    img,
});

const directorProfile = InstituteofAgriculturalSciencesandTechnologyinstituteProfiles[0];

const instituteFaculty: FacultyMember[] = [
    {
        id: "director-iast",
        name: directorProfile.name,
        role: directorProfile.position,
        img: directorProfile.image,
        isHod: true,
        qualification: "Ph.D. in Agronomy and postdoctoral research in China",
        experience: "37+ years",
        email: "director.ag@srmu.ac.in",
        contact: "+91-9474407465",
        specialization: ["Agronomy", "Forage Crops", "Agricultural Extension"],
        expertise: "Dr. Pal has guided more than 30 M.Sc. and Ph.D. students, published over 150 research papers, five books, and more than 50 book chapters, and led research projects funded by UPCAR, ICAR, DST, CIMMYT, and other agencies.",
    },
    ...InstituteofAgriculturalSciencesandTechnologyfacultyData.map((member) => ({
        id: String(member.id),
        name: member.name,
        role: member.designation,
        img: member.image,
    })),
];

const instituteEventCards: DepartmentActivityCardNew[] = InstituteofAgriculturalSciencesandTechnologyDepartmentEventsData
    .slice(0, 6)
    .map((event) => {
        const details = [event.topic, event.venue, event.date].filter(Boolean).join(" · ");
        const description = details
            ? `${event.title}: ${details}. Students connect agricultural learning with field practice, rural development, and current issues in the sector.`
            : `Students connect agricultural learning with field practice, rural development, and current issues in the sector.`;

        return activityCard(
            event.title.toUpperCase(),
            event.topic || event.title,
            description,
            event.image,
            [event.date, event.speaker].filter(Boolean).join(" | ") || undefined,
        );
    });

export const instituteOfAgriculturalSciencesAndTechnologyNewData: CustomDepartmentNewData = {
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
        title: "Agricultural Sciences and Technology",
        backgroundImage: departmentBanner,
        stats: [
            { v: "2019", l: "Established", delay: "0ms" },
            { v: "5", l: "Postgraduate\nProgrammes", delay: "90ms" },
            { v: "Field", l: "Practical\nLearning", delay: "180ms" },
            { v: "ICAR", l: "Curriculum\nAlignment", delay: "270ms" },
        ],
        quickStats: [
            { value: "2019", label: "Established" },
            { value: "5", label: "Postgraduate Programmes" },
            { value: "Field", label: "Practical Learning" },
            { value: "ICAR", label: "Curriculum Alignment" },
        ],
    },
    overview: {
        headingBefore: "About the",
        headingHighlight: "Institute",
        subtitle: "Agricultural Sciences and Technology at SRMU",
        paragraphs: [
            "The Institute of Agricultural Sciences and Technology at Shri Ramswaroop Memorial University (SRMU) focuses on advanced agricultural education, scientific research, and practical learning to prepare students for the evolving agricultural sector.",
            "The institute offers postgraduate programmes in horticulture, agronomy, soil science, and agribusiness management. Students develop specialized knowledge of crop production, agricultural technologies, soil management, horticultural practices, and agricultural business operations.",
            "Academic instruction, research-oriented learning, and field-based activities connect theory with modern agricultural practice and sustainable approaches to improving productivity.",
        ],
        preview: "The Institute of Agricultural Sciences and Technology at SRMU combines agricultural education, research, and practical learning to prepare students for a changing agricultural sector.",
        image: overviewImage,
        imageAlt: "Agricultural sciences and field-based learning at SRMU",
    },
    missionVision: {
        missionItems: [
            "Provide quality education in agricultural sciences through research-oriented and application-based learning.",
            "Develop technical knowledge and practical competencies in horticulture, agronomy, and soil science.",
            "Encourage scientific research and innovation in sustainable agriculture.",
            "Promote modern agricultural practices and responsible resource management.",
            "Develop skilled professionals who can contribute to agricultural development and agribusiness.",
        ],
        visionText: "To emerge as a centre of excellence in agricultural education, research, and innovation by nurturing skilled professionals who contribute to sustainable farming, agricultural advancement, and rural development.",
    },
    programHeadingBefore: "Explore",
    programHeadingHighlight: "Programmes",
    programs: [
        {
            category: "Horticulture Programmes",
            mobileLabel: "Horticulture",
            badge: "M.Sc. Horticulture",
            icon: Flower2,
            programs: [
                {
                    title: "M.Sc. Horticulture in Vegetable Science",
                    description: "Study vegetable crop production, cultivation practices, crop improvement, and protected cultivation.",
                    icon: Sprout,
                    link: "/program/msc-horticulture-veg-sc",
                },
                {
                    title: "M.Sc. Horticulture in Fruit Science",
                    description: "Explore fruit crop production, orchard management, propagation techniques, and post-harvest practices.",
                    icon: Flower2,
                    link: "/program/msc-horticulture-fruit-science",
                },
            ],
        },
        {
            category: "Agricultural Science Programmes",
            mobileLabel: "Agricultural Science",
            badge: "M.Sc.",
            icon: Leaf,
            programs: [
                {
                    title: "M.Sc. in Agronomy",
                    description: "Develop knowledge of crop production systems, field management, cropping patterns, and sustainable agriculture.",
                    icon: Tractor,
                    link: "/program/msc-agronomy",
                },
                {
                    title: "M.Sc. in Soil Science and Agricultural Chemistry",
                    description: "Study soil properties, fertility, nutrient management, and the chemical processes that influence productivity.",
                    icon: Droplets,
                    link: "/program/msc-soil-science-agricultural-chemistry",
                },
            ],
        },
        {
            category: "Agribusiness Programme",
            mobileLabel: "Agribusiness",
            badge: "MBA",
            icon: BriefcaseBusiness,
            programs: [
                {
                    title: "MBA in Agribusiness Management",
                    description: "Connect agricultural knowledge with marketing, supply chain management, farm business operations, and entrepreneurship.",
                    icon: Store,
                    link: "/program/mba-abm",
                },
            ],
        },
    ],
    labs: {
        headingBefore: "Fieldwork &",
        headingHighlight: "Practical Learning",
        intro: "Students connect agricultural concepts with practice through field-based learning, crop studies, research activities, and academic interaction. These activities build an understanding of agricultural processes and sustainable ways to improve productivity.",
        items: [
            { num: "01", title: "Field Experiments", desc: "Observe crop growth, cultivation methods, and agricultural practices through practical experiments.", accent: "#1B7A4B", icon: Sprout, animClass: "lab-icon-orbital" },
            { num: "02", title: "Research Activities", desc: "Explore contemporary agricultural challenges through research projects, field studies, and scientific investigations.", accent: "#D68B18", icon: Microscope, animClass: "lab-icon-pulse" },
            { num: "03", title: "Workshops & Seminars", desc: "Learn about modern agricultural technologies, sustainable farming, and emerging developments.", accent: "#245A89", icon: UsersRound, animClass: "lab-icon-float" },
            { num: "04", title: "Expert Interactions", desc: "Engage with agricultural scientists, researchers, and professionals from across the sector.", accent: "#1B7A4B", icon: BookOpenCheck, animClass: "lab-icon-network" },
            { num: "05", title: "Crop Management", desc: "Build an understanding of crop planning, soil management, and agricultural productivity.", accent: "#D68B18", icon: Tractor, animClass: "lab-icon-stack" },
            { num: "06", title: "Student Projects", desc: "Apply academic knowledge to agricultural questions through project-based learning.", accent: "#245A89", icon: FlaskConical, animClass: "lab-icon-glow" },
        ],
    },
    highlights: {
        headingBefore: "Why Choose Agricultural Sciences at",
        headingHighlight: "SRMU?",
        items: [
            { num: "01", title: "SPECIALIZED PROGRAMMES", desc: "Postgraduate study spans vegetable science, fruit science, agronomy, soil science, and agribusiness management.", icon: GraduationCap },
            { num: "02", title: "SUSTAINABLE AGRICULTURE", desc: "Explore sustainable farming, soil conservation, responsible resource management, and environmentally aware practices.", icon: Leaf },
            { num: "03", title: "PRACTICAL FIELD LEARNING", desc: "Field experiments, crop studies, and research activities connect classroom concepts with agricultural applications.", icon: Tractor },
            { num: "04", title: "RESEARCH & SCIENTIFIC EXPLORATION", desc: "Research-oriented learning addresses crop production, horticulture, soil fertility, productivity, and emerging technologies.", icon: Microscope },
            { num: "05", title: "HORTICULTURAL SCIENCES", desc: "Focused study covers vegetable and fruit cultivation, propagation, orchard management, and post-harvest practices.", icon: Flower2 },
            { num: "06", title: "AGRICULTURE & BUSINESS", desc: "The MBA in Agribusiness Management connects agriculture with marketing, supply chains, and entrepreneurship.", icon: BriefcaseBusiness },
            { num: "07", title: "CAREERS ACROSS AGRICULTURE", desc: "Prepare for professional pathways in research, horticulture, agribusiness, farm management, soil science, and consultancy.", icon: Activity },
        ],
    },
    events: {
        headingBefore: "Agriculture in Practice",
        headingHighlight: "Institute Activities",
        sectionSubtitle: "Field Visits & Expert Sessions",
        intro: "The institute's published activities connect students with field practice, agricultural businesses, rural development, and expert perspectives on emerging topics.",
        cards: instituteEventCards,
    },
    activitySections: [
        {
            id: "industry-exposure",
            eyebrow: "Learning in Agricultural Settings",
            heading: "Field-Based Learning & Agricultural Exposure",
            intro: "Students are encouraged to connect classroom knowledge with agricultural processes through field-based learning, crop management activities, and academic interactions.",
            cards: [
                activityCard("FIELD LEARNING", "Crop Production & Field Experiments", "Practical experiments help students observe crop growth, cultivation methods, field management, and the factors that influence agricultural productivity.", cropScienceImage),
                activityCard("AGRICULTURAL EXPOSURE", "Modern Farming & Resource Management", "Explore modern agricultural practices, sustainable farming, soil conservation, and responsible use of natural resources.", practicalLearningImage),
                activityCard("STUDENT ENGAGEMENT", "Rural Development & Agribusiness", "Academic activities connect agricultural sciences with rural development, farm business operations, marketing, and entrepreneurship.", overviewImage),
            ],
        },
        {
            id: "research-publications",
            eyebrow: "Scientific Inquiry & Scholarly Work",
            heading: "Research & Publications",
            intro: "The institute promotes research-oriented learning in agronomy, crop production, horticulture, soil fertility, agricultural productivity, and sustainable resource use. Its director, Prof. (Dr.) Mahendra Singh Pal, has published more than 150 research papers and led funded projects in agronomy and forage crops.",
            cards: [
                activityCard("RESEARCH AREA", "Agronomy & Crop Production", "Study crop production systems, field management, forage crops, and approaches to improving agricultural productivity.", cropScienceImage),
                activityCard("RESEARCH AREA", "Horticulture & Crop Improvement", "Explore vegetable and fruit science, cultivation practices, propagation, orchard management, and post-harvest work.", overviewImage),
                activityCard("RESEARCH AREA", "Soil Science & Sustainable Agriculture", "Build knowledge of soil fertility, nutrient management, agricultural chemistry, and sustainable use of natural resources.", researchImage),
                activityCard("RESEARCH AREA", "Agricultural Extension & Rural Development", "Connect agricultural research and production technologies with extension, rural livelihoods, and farm communities.", practicalLearningImage),
            ],
        },
        {
            id: "student-projects",
            eyebrow: "Applying Knowledge to Agricultural Questions",
            heading: "Student Projects & Crop Management",
            intro: "Project-based learning encourages students to apply academic knowledge through experiments, field studies, crop planning, soil management, and scientific investigation.",
            cards: [
                activityCard("STUDENT PROJECT", "Crop Planning & Production", "Students investigate crop planning and cultivation practices, then connect their observations with field management and productivity.", cropScienceImage),
                activityCard("STUDENT PROJECT", "Soil & Resource Management", "Students apply concepts in soil properties, nutrient management, and responsible resource use to agricultural problems.", researchImage),
            ],
        },
        {
            id: "workshops",
            eyebrow: "Learning from Research & Practice",
            heading: "Workshops, Seminars & Expert Interactions",
            intro: "Workshops, seminars, and expert interactions introduce students to modern agricultural technologies, sustainable farming, and developments across research and practice.",
            cards: [
                activityCard("WORKSHOPS & SEMINARS", "Emerging Agricultural Technologies", "Academic interactions help students explore developments in agricultural technologies and sustainable farming methods.", practicalLearningImage),
                activityCard("EXPERT INTERACTION", "Agricultural Research & Practice", "Students gain perspectives from agricultural scientists, researchers, and professionals working across the sector.", researchImage),
            ],
        },
    ],
    career: {
        heading: "Career Opportunities",
        items: [
            ["Agricultural Research", "Agricultural Researcher"],
            ["Horticulture", "Horticulturist"],
            ["Crop Science", "Agronomist, Crop Production Specialist"],
            ["Soil Science", "Soil Scientist"],
            ["Agribusiness", "Agribusiness Manager"],
            ["Farm Operations", "Farm Manager"],
            ["Consultancy", "Agricultural Consultant"],
            ["Marketing", "Agricultural Marketing Professional"],
            ["Agricultural Extension", "Agricultural Extension Officer"],
            ["Plantation & Research", "Plantation Manager, Research Associate"],
        ],
        descriptions: [
            { title: "Agricultural Research", description: "Agricultural Researcher" },
            { title: "Horticulture", description: "Horticulturist" },
            { title: "Crop Science", description: "Agronomist, Crop Production Specialist" },
            { title: "Soil Science", description: "Soil Scientist" },
            { title: "Agribusiness", description: "Agribusiness Manager" },
            { title: "Farm Operations", description: "Farm Manager" },
            { title: "Consultancy", description: "Agricultural Consultant" },
            { title: "Marketing", description: "Agricultural Marketing Professional" },
            { title: "Agricultural Extension", description: "Agricultural Extension Officer" },
            { title: "Plantation & Research", description: "Plantation Manager, Research Associate" },
        ],
    },
    facultySection: {
        members: instituteFaculty,
        subheading: "Faculty members support agricultural education, field-based learning, research, and practical understanding across horticulture, agronomy, soil science, and agribusiness.",
        featuredLabel: "DIRECTOR, IAST",
        featuredDescription: "Prof. (Dr.) Mahendra Singh Pal brings extensive experience in agronomy, agricultural research, and extension, with a record of scholarly publications, funded research, and postgraduate supervision.",
        profileDescription: "Institute faculty support teaching, practical learning, research, and student development across agricultural sciences.",
        showResearchShowcase: false,
    },
    faq: [
        { q: "What programmes are offered by the Institute of Agricultural Sciences and Technology?", a: "The institute offers M.Sc. programmes in Vegetable Science, Fruit Science, Agronomy, and Soil Science & Agricultural Chemistry, along with an MBA in Agribusiness Management." },
        { q: "How long are the M.Sc. Horticulture programmes?", a: "The M.Sc. Horticulture programmes in Vegetable Science and Fruit Science have a duration of two years." },
        { q: "What does the M.Sc. in Agronomy cover?", a: "The programme focuses on crop production, field management, cropping systems, and sustainable agricultural practices." },
        { q: "What is covered in Soil Science and Agricultural Chemistry?", a: "Students study soil properties, soil fertility, nutrient management, and chemical processes that influence agricultural productivity." },
        { q: "What does the MBA in Agribusiness Management cover?", a: "The programme focuses on agricultural business operations, marketing, supply chains, farm management, and agribusiness entrepreneurship." },
        { q: "What practical learning activities are available?", a: "Students engage with field experiments, research activities, workshops, seminars, expert interactions, crop management activities, and student projects." },
        { q: "What careers can graduates pursue after studying Horticulture?", a: "Career pathways include horticultural production, fruit and vegetable cultivation, research, nurseries, plantation management, and agricultural consultancy." },
        { q: "What careers can graduates pursue after studying Agronomy?", a: "Graduates can explore crop management, agricultural research, farm consultancy, seed companies, and agricultural development organizations." },
        { q: "What career options are available after an MBA in Agribusiness Management?", a: "Graduates can explore agribusiness management, agricultural marketing, supply chain management, farm enterprises, and agri-input companies." },
        { q: "How can I apply for an agricultural programme at SRMU?", a: "Visit the official SRMU website to review programme eligibility and current fee details, then complete the online admission application." },
    ],
    showFaculty: true,
    showScholarships: true,
    showBlogs: true,
    showCareerDescriptionCards: false,
};
