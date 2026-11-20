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
    InstituteofAgriculturalSciencesandTechnologyfacultyData,
} from "../../../data/academics/institute/institute-department/institute-of-agricultural-sciences-and-technology-data";
import directorImage from "../../../assets/images/institute-of-agricultural-sciences-and-technology-new/prof-dr-gajendra-singh.jpg";
import arunKumarSinghImage from "../../../assets/images/institute-of-agricultural-sciences-and-technology-new/mr-arun-kumar-singh.jpg";
import lavKumarImage from "../../../assets/images/institute-of-agricultural-sciences-and-technology-new/dr-lav-kumar.jpg";
import akashSinghImage from "../../../assets/images/institute-of-agricultural-sciences-and-technology-new/dr-akash-singh.jpg";
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

const instituteFaculty: FacultyMember[] = [
    {
        id: "director-iast",
        name: "Prof. (Dr.) Gajendra Singh",
        role: "Director, IAST, SRMU, Lucknow–Deva Road",
        img: directorImage,
        isHod: true,
        qualification: "Ph. D. in Agronomy",
        experience: "More than 40 Years",
        email: "director.ag@srmu.ac.in",
        contact: ["+91-9453601240", "+91-9076815959"],
        specialization: [
            "Cropping Systems",
            "Nutrient Management",
            "Weed Management",
            "Rice-Based Cropping Systems in Rainfed Lowland and Flood-Prone Ecosystems",
        ],
        expertise: [
            "Prof. Gajendra Singh completed his B.Sc. (Ag.) in 1979, M.Sc. (Agronomy) in 1981, and Ph.D. (Agronomy) in 1985 from Raja Balwant Singh P.G. College, affiliated with Agra University, Agra, Uttar Pradesh.",
            "Prof. Singh began his academic career as an Assistant Professor in 1986 at Acharya Narendra Deva University of Agriculture and Technology (ANDUAT), Kumarganj, Ayodhya, Uttar Pradesh. He was promoted to Associate Professor in 1998 and Professor in 2003. He served as a Rice Agronomist for more than 22 years and as Chief Scientist at Krishi Vigyan Kendra (KVK), Bahraich, from July 1, 2008 to March 31, 2011.",
            "He served on deputation as State Technical Coordinator under the Uttar Pradesh Diversified Agriculture Support Project (UPDASP), Project Coordinating Unit, PICUP Bhawan, Vibhuti Khand, Lucknow, from April 1, 2011 to May 31, 2016. He then returned to academic service as Professor of Agronomy, became Professor and Head of the Department of Agronomy in 2018, and served as Director of Research from 2019 to 2021.",
            "Prof. Singh has published more than 250 research papers in national and international journals, including Scopus-indexed, UGC-CARE-listed, NAAS-rated, and other peer-reviewed publications. He has guided more than 30 M.Sc. students and five Ph.D. scholars. He has handled approximately 30 research projects under the All India Coordinated Research Project (AICRP) and other programmes funded by UPCAR, ICAR, the International Maize and Wheat Improvement Center (CIMMYT), and Rashtriya Krishi Vikas Yojana (RKVY).",
            "He has participated in numerous national and international conferences and contributed to research projects through the ICAR–International Rice Research Institute (IRRI)–ANDUAT collaboration. He visited IRRI in Manila, Philippines, in 1995, 1996, 2000, and 2001 for workshops on GIS mapping and strategic research on Integrated Nutrient Management.",
            "Prof. Singh contributed to four crop production technologies, including deep-water rice cultivation, sugarcane cultivation in flood-prone areas, and wheat cultivation under late-sown conditions following rice. He was also associated with the development of three rice varieties—Jalnidhi, Jalpriya, and Barhavrodhi—for deep-water, semi-deep-water, and flood-prone conditions, respectively. Nine improved agricultural technologies were popularized and demonstrated in farmers’ fields in Bahraich district, Uttar Pradesh.",
            "He has been a life member of several academic and professional societies in India, a Fellow of the Indian Journal of Pulses Research and Development, IIPR, Kanpur, and a Councillor representing Uttar Pradesh in the Society of Agronomy, IARI, New Delhi.",
            "In recognition of his contributions to agricultural research, Prof. Singh received the Best Scientist Award from UPCAR in 2003 and certificates of appreciation on two occasions from the Agricultural Technology Application Research Institute (ATARI), Kanpur. He contributed to the Uttar Pradesh Agriculture Policy, 2017, including the chapter “Diversification of Agriculture.”",
            "After retiring from ANDUAT, Kumarganj, Ayodhya, Prof. Singh served as Principal of Chandra Bhan Gupt Agriculture P.G. College, affiliated with the University of Lucknow, from October 7, 2021 to September 8, 2025. He then served as Research Officer from September 9, 2025 to January 20, 2026.",
        ].join("\n\n"),
    },
    ...InstituteofAgriculturalSciencesandTechnologyfacultyData
        .filter((member) => member.name !== "Ms. Anam Khan")
        .map((member) => ({
            id: String(member.id),
            name: member.name === "Dr. Balvir Singh" ? "Prof. (Dr.) Balvir Singh" : member.name,
            role: member.name === "Dr. Pranav Kumar Mishra"
                ? "Associate Professor"
                : member.name === "Dr. Balvir Singh"
                    ? "Professor and Deputy Director"
                    : member.designation,
            img: member.image,
        })),
    {
        id: "arun-kumar-singh",
        name: "Mr. Arun Kumar Singh",
        role: "Assistant Professor",
        img: arunKumarSinghImage,
    },
    {
        id: "lav-kumar",
        name: "Dr. Lav Kumar",
        role: "Assistant Professor",
        img: lavKumarImage,
    },
    {
        id: "akash-singh",
        name: "Dr. Akash Singh",
        role: "Assistant Professor",
        img: akashSinghImage,
    },
];

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
            "The Institute of Agricultural Sciences and Technology (IAST) at Shri Ramswaroop Memorial University (SRMU), Deva Road, Barabanki, was established in 2019 with a mission to nurture skilled, innovative and entrepreneurial manpower for the agriculture sector. The four-year B.Sc. (Hons.) Agriculture programme, recognized by the Indian Council of Agricultural Research (ICAR) as a professional degree with consequential benefits for students, fully incorporates the recommendations of the Sixth Dean’s Committee of ICAR on Agricultural Education. The Institute follows the ICAR Student READY (Rural Entrepreneurship Awareness Development Yojana) framework, comprising experiential learning, hands-on and skill development training, Rural Agricultural Work Experience (RAWE), and industrial attachment, ensuring that students gain practical, field-ready competence.",
            "With modern laboratories, field facilities and infrastructure, IAST offers an ideal environment for learning and research. Students broaden their perspectives and build leadership, teamwork and social responsibility through co-curricular and extracurricular activities and community service, while a regular process of curriculum renewal, guided by best practices and continuous evaluation of learning outcomes, keeps teaching relevant and innovative. The Institute offers B.Sc. (Hons.) Agriculture; M.Sc. in Agronomy, Soil Science, Horticulture (Fruit Science) and Horticulture (Vegetable Science); MBA in Agribusiness Management; and Ph.D. programmes in Agronomy, Horticulture (Fruit Science) and Agribusiness Management, preparing graduates to succeed in a competitive global agricultural marketplace.",
            
        ],
        preview: "The Institute of Agricultural Sciences and Technology at SRMU combines agricultural education, research, and practical learning to prepare students for a changing agricultural sector.",
        image: overviewImage,
        imageAlt: "Agricultural sciences and field-based learning at SRMU",
    },
    missionVision: {
        missionItems: [
            "To provide quality education in agricultural sciences through research-oriented and application-based learning.",
            "To develop technical knowledge and practical competencies in horticulture, agronomy, and soil science.",
            "To encourage scientific research and innovation in sustainable agriculture.",
            "To promote modern agricultural practices and responsible resource management.",
            "To develop skilled professionals who can contribute to agricultural development and agribusiness.",
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
        {
            category: "Doctoral Programmes",
            mobileLabel: "Ph.D.",
            badge: "Doctoral",
            icon: GraduationCap,
            programs: [
                {
                    title: "Ph.D. in Agronomy",
                    description: "Eligibility: Master degree in the concerned subject. Course fee: Refer to the Ph.D. fee structure on the university Research page.",
                    icon: GraduationCap,
                    link: "/program/phd",
                },
                {
                    title: "Ph.D. (Horticulture) Fruit Science",
                    description: "Eligibility: Master degree in the concerned subject. Course fee: Refer to the Ph.D. fee structure on the university Research page.",
                    icon: GraduationCap,
                    link: "/program/phd",
                },
                {
                    title: "Ph.D. in Agribusiness Management",
                    description: "Eligibility: Master degree in the concerned subject. Course fee: Refer to the Ph.D. fee structure on the university Research page.",
                    icon: GraduationCap,
                    link: "/program/phd",
                },
            ],
        },
    ],
    labs: {
        headingBefore: "Practical Learning &",
        headingHighlight: "Research Exposure",
        intro: "The institute emphasizes practical and research-oriented learning to help students understand agricultural processes, crop management, and scientific approaches to improving productivity.",
        items: [
            { num: "01", title: "Vegetable Science", desc: "Explore vegetable crop production, cultivation practices, crop improvement, and protected cultivation.", accent: "#1B7A4B", icon: Sprout, animClass: "lab-icon-orbital" },
            { num: "02", title: "Fruit Science", desc: "Develop knowledge of fruit crop production, orchard management, propagation techniques, and post-harvest practices.", accent: "#D68B18", icon: Microscope, animClass: "lab-icon-pulse" },
            { num: "03", title: "Agronomy", desc: "Understand crop production systems, field management, cropping patterns, and sustainable agricultural practices.", accent: "#245A89", icon: UsersRound, animClass: "lab-icon-float" },
            { num: "04", title: "Soil Science & Agricultural Chemistry", desc: "Study soil properties, soil fertility, nutrient management, and agricultural chemistry.", accent: "#1B7A4B", icon: BookOpenCheck, animClass: "lab-icon-network" },
            { num: "05", title: "Agribusiness Management", desc: "Explore agricultural marketing, supply chain management, farm business operations, and agribusiness entrepreneurship.", accent: "#D68B18", icon: Tractor, animClass: "lab-icon-stack" },
            { num: "06", title: "Agricultural Research", desc: "Develop research and analytical skills through experiments, field studies, and scientific investigations.", accent: "#245A89", icon: FlaskConical, animClass: "lab-icon-glow" },
        ],
    },
    highlights: {
        headingBefore: "What Makes the Institute of Agricultural Sciences and Technology Different at",
        headingHighlight: "SRMU?",
        items: [
            { num: "01", title: "Specialized Agricultural Programs", desc: "Offers postgraduate programs in horticulture, agronomy, soil science, and agribusiness management, providing opportunities to develop specialized knowledge across agricultural disciplines.", icon: GraduationCap },
            { num: "02", title: "Focus on Sustainable Agriculture", desc: "Encourages understanding of sustainable farming practices, soil conservation, resource management, and environmentally responsible agricultural methods.", icon: Leaf },
            { num: "03", title: "Practical & Field-Based Learning", desc: "Emphasizes practical learning, field experiments, crop studies, and research activities to connect theoretical concepts with agricultural applications.", icon: Tractor },
            { num: "04", title: "Research & Scientific Exploration", desc: "Promotes research-oriented learning in crop production, horticultural development, soil fertility, agricultural productivity, and emerging agricultural technologies.", icon: Microscope },
            { num: "05", title: "Specialization in Horticultural Sciences", desc: "Provides focused learning opportunities in vegetable science and fruit science, covering crop cultivation, propagation, orchard management, and post-harvest practices.", icon: Flower2 },
            { num: "06", title: "Agriculture Meets Business Management", desc: "The MBA in Agribusiness Management connects agricultural knowledge with business operations, agricultural marketing, supply chain management, and entrepreneurship.", icon: BriefcaseBusiness },
            { num: "07", title: "Career Opportunities Across Agricultural Sectors", desc: "Prepares students to explore professional pathways in agricultural research, horticulture, agribusiness, farm management, soil science, and agricultural consultancy.", icon: Activity },
        ],
    },
    events: {
        headingBefore: "From Classroom Concepts to",
        headingHighlight: "Field Applications",
        sectionSubtitle: "",
        intro: "Students are encouraged to connect theoretical agricultural knowledge with practical applications through field-based learning, research activities, and academic interactions.",
        cards: [
            activityCard("PRACTICAL LEARNING", "Field Experiments", "Understand crop growth, cultivation methods, and agricultural practices through practical experiments.", cropScienceImage),
            activityCard("PRACTICAL LEARNING", "Research Activities", "Explore contemporary agricultural challenges through research projects and scientific studies.", researchImage),
            activityCard("PRACTICAL LEARNING", "Workshops & Seminars", "Gain insights into modern agricultural technologies, sustainable farming, and emerging developments.", practicalLearningImage),
            activityCard("PRACTICAL LEARNING", "Expert Interactions", "Learn from agricultural scientists, researchers, and industry professionals.", overviewImage),
            activityCard("PRACTICAL LEARNING", "Crop Management Activities", "Develop an understanding of crop planning, soil management, and agricultural productivity.", cropScienceImage),
            activityCard("PRACTICAL LEARNING", "Student Projects", "Apply academic knowledge to agricultural problems through project-based learning.", practicalLearningImage),
        ],
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
            intro: "The institute promotes research-oriented learning in agronomy, crop production, horticulture, soil fertility, agricultural productivity, and sustainable resource use. Its director, Prof. (Dr.) Gajendra Singh, has published more than 250 research papers and guided postgraduate research scholars.",
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
            eyebrow: "Research & Publication",
            heading: "",
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
            ["Agronomist"],
            ["Horticulturist"],
            ["Agricultural", "Researcher"],
            ["Soil Scientist"],
            ["Agricultural", "Consultant"],
            ["Agribusiness", "Manager"],
            ["Farm Manager"],
            ["Crop Production", "Specialist"],
            ["Agricultural Marketing", "Professional"],
            ["Agricultural Extension", "Officer"],
            ["Plantation Manager"],
            ["Research Associate"],
        ],
        descriptions: [
            { title: "Agronomist", description: "Agronomist" },
            { title: "Horticulturist", description: "Horticulturist" },
            { title: "Agricultural Researcher", description: "Agricultural Researcher" },
            { title: "Soil Scientist", description: "Soil Scientist" },
            { title: "Agricultural Consultant", description: "Agricultural Consultant" },
            { title: "Agribusiness Manager", description: "Agribusiness Manager" },
            { title: "Farm Manager", description: "Farm Manager" },
            { title: "Crop Production Specialist", description: "Crop Production Specialist" },
            { title: "Agricultural Marketing Professional", description: "Agricultural Marketing Professional" },
            { title: "Agricultural Extension Officer", description: "Agricultural Extension Officer" },
            { title: "Plantation Manager", description: "Plantation Manager" },
            { title: "Research Associate", description: "Research Associate" },
        ],
    },
    facultySection: {
        members: instituteFaculty,
        subheading: "SRMU takes pride in recruiting distinguished faculty from some of the country’s best and most reputed agricultural universities, including G.B. Pant University of Agriculture and Technology, Pantnagar (Uttarakhand); Acharya Narendra Deva University of Agriculture and Technology, Kumarganj, Ayodhya (UP); Chandra Shekhar Azad University of Agriculture and Technology, Kanpur (UP); Banaras Hindu University, Varanasi; and Banda University of Agriculture and Technology, Banda (UP).",
        featuredLabel: "DEPARTMENT HEAD",
        featuredDescription: "Prof. (Dr.) Gajendra Singh brings more than 40 years of experience in agronomy, rice-based cropping systems, agricultural research, and postgraduate supervision.",
        profileDescription: "Institute faculty support teaching, practical learning, research, and student development across agricultural sciences.",
        showResearchShowcase: false,
    },
    faq: [
        { q: "What postgraduate courses are offered by the Institute of Agricultural Sciences and Technology at SRMU?", a: "The institute offers M.Sc. programs in vegetable science, fruit science, agronomy, soil science & agricultural chemistry, along with an MBA in agribusiness management." },
        { q: "What is the duration of M.Sc. Horticulture programs at SRMU?", a: "The M.Sc. Horticulture programs in Vegetable Science and Fruit Science have a duration of two years." },
        { q: "What is an M.Sc. in Agronomy?", a: "The M.Sc. in Agronomy is a postgraduate program focused on crop production, field management, cropping systems, and sustainable agricultural practices." },
        { q: "What is an M.Sc. in Soil Science & Agricultural Chemistry?", a: "This program focuses on soil properties, soil fertility, nutrient management, and the chemical processes that influence agricultural productivity." },
        { q: "What is an MBA in Agribusiness Management?", a: "An MBA in Agribusiness Management focuses on business and management practices related to agriculture, including agricultural marketing, supply chains, farm management, and agribusiness operations." },
        { q: "What career opportunities are available after an M.Sc. in Horticulture?", a: "Graduates can explore careers in horticultural production, fruit and vegetable cultivation, research, nurseries, plantation management, and agricultural consultancy." },
        { q: "What career opportunities are available after an M.Sc. in Agronomy?", a: "Graduates can pursue opportunities in crop management, agricultural research, farm consultancy, seed companies, and agricultural development organizations." },
        { q: "What career options are available after an MBA in Agribusiness Management?", a: "Graduates can explore roles in agribusiness management, agricultural marketing, supply chain management, farm enterprises, and agri-input companies." },
        { q: "What is the annual fee for postgraduate agricultural programs at SRMU?", a: "The listed annual fee for M.Sc. Vegetable Science, M.Sc. Fruit Science, MBA Agribusiness Management, and M.Sc. Agronomy is ₹50,000. The remaining program fee should be confirmed through the official admission details." },
        { q: "How can I apply for postgraduate agricultural programs at SRMU?", a: "Interested candidates can visit the official SRMU website, check program eligibility and fee details, and complete the online admission application." },
    ],
    showFaculty: true,
    showScholarships: true,
    showBlogs: true,
    showCareerDescriptionCards: false,
};
