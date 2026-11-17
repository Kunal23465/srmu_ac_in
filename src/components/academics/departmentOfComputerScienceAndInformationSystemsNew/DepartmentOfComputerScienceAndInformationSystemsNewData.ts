import {
    Activity,
    BookOpenCheck,
    Cpu,
    Factory,
    GraduationCap,
    Lightbulb,
    Microscope,
    Settings,
    ShieldCheck,
    Zap,
} from "lucide-react";
import type { CustomDepartmentNewData, DepartmentActivityCardNew } from "../../../customs/department-page-new/CustomDepartmentNew";
import type { FacultyMember } from "../departmentOfComputerScienceAndEngineeringNew/DepartmentFaculty";
import departmentBanner from "../../../assets/images/new-information-system/Banner.webp";
import departmentOverview from "../../../assets/images/new-labo/computer-centres.webp";
import industryCollaboration from "../../../assets/images/new-information-system/Tech-Collaboration_-L-T-EduTech-SRMU.png";
import dataScienceLecture from "../../../assets/images/new-information-system/Data-Science-Fundamentals-and-its-Application.webp";
import constructAiImage from "../../../assets/images/new-information-system/6.webp";
import nationalScienceDay from "../../../assets/images/new-information-system/National-Science-Day.webp";
import inspirationWorkshop from "../../../assets/images/new-information-system/Inspiring-Innovation-and-Learning.webp";
import hackathonImage from "../../../assets/images/new-information-system/Internal-Smart-India-Hackathon.webp";
import headPortrait from "../../../assets/images/academics/departments/csis/dr.-bineet-gupta.webp";
import rohitAnandPortrait from "../../../assets/images/academics/institutes/cse-is/cse-is1.png";
import archanaMauryaPortrait from "../../../assets/images/academics/institutes/cse-is/cse-is2.png";
import julliusKumarPortrait from "../../../assets/images/academics/institutes/cse-is/cse-is3.png";
import anuradhaYadavPortrait from "../../../assets/images/academics/institutes/cse-is/Anuradha Yadav.png";
import higherStudiesBackground from "../../../assets/images/department-of-computer-science-and-information-systems-new/Modern-Higher-Studies-Wave-Banner.png";

const card = (
    tag: string,
    title: string,
    shortDesc: string,
    img: string,
    speaker?: string,
    readMore = shortDesc,
): DepartmentActivityCardNew => ({
    tag,
    title,
    speaker,
    shortDesc,
    readMore,
    img,
});

const faculty: FacultyMember[] = [
    {
        name: "Prof. (Dr.) Bineet Kumar Gupta",
        role: "HoD DCSIS, SRMU, Lucknow-Deva Road",
        img: headPortrait,
        isHod: true,
        qualification: "M.Tech. (Data Science), Ph.D. (AI/ML/Data Science/ICT/Cyber Security/Computational Neuro Science/IKS-Computing)",
        experience: "16+ Years",
        specialization: [
            "Artificial Intelligence & Machine Learning",
            "Data Science",
            "ICT",
            "Cyber Security",
            "Computational Neuro Science",
            "IKS-Computing",
        ],
        expertise: "Specialization/ Area of Research: Artificial Intelligence & Machine Learning, Data Science, ICT, Cyber Security, Computational Neuro Science, IKS-Computing",
        email: "hod.csis@srmu.ac.in",
        contact: "+91-9621340860",
    },
    { name: "Mr. Rohit Anand", role: "Lecturer", img: rohitAnandPortrait },
    { name: "Dr. Archana Sachindeo Maurya", role: "Assistant Professor", img: archanaMauryaPortrait },
    { name: "Mr. Jullius Kumar", role: "Assistant Professor", img: julliusKumarPortrait },
    { name: "Ms. Anuradha Yadav", role: "Assistant Professor", img: anuradhaYadavPortrait },
];

export const departmentOfComputerScienceAndInformationSystemsNewData: CustomDepartmentNewData = {
    navSections: [
        { id: "overview", label: "Overview" },
        { id: "programs", label: "Programmes" },
        { id: "labs", label: "Labs & Practical Learning" },
        { id: "events", label: "Activities" },
        { id: "faculty", label: "Faculty" },
        { id: "faq", label: "FAQs" },
    ],
    hero: {
        prefix: "Department of",
        title: "Computer Science and Information Systems",
        backgroundImage: departmentBanner,
        stats: [
            { v: "2017", l: "Established", delay: "0ms" },
            { v: "50", l: "Faculty & Staff", delay: "90ms" },
            { v: "2000", l: "Students", delay: "180ms" },
        ],
        quickStats: [
            { value: "2017", label: "Established" },
            { value: "50", label: "Faculty & Staff" },
            { value: "2000", label: "Students" },
        ],
    },
    overview: {
        headingBefore: "About the",
        headingHighlight: "Department",
        subtitle: "Department Of Computer Science And Information Systems",
        paragraphs: [
            "Established in 2012, the Department of Computer Science and Engineering at SRMU focuses on developing technology professionals equipped with industry-relevant knowledge, practical skills, and research capabilities.",
            "The department offers undergraduate, postgraduate, integrated, and doctoral programs across computing and emerging technology domains. Its academic approach combines classroom learning, practical laboratory sessions, industry exposure, research, and project-based learning.",
            "Students explore areas such as Python programming, application development, cloud computing, cybersecurity, artificial intelligence, machine learning, and data science. The department also offers industry-integrated programs in collaboration with Larsen & Toubro (L&T), including specialized B.Tech. and BCA pathways.",
        ],
        preview: "Established in 2012, the Department of Computer Science and Engineering at SRMU focuses on developing technology professionals equipped with industry-relevant knowledge, practical skills, and research capabilities.",
        image: departmentOverview,
        imageAlt: "Computer centres",
    },
    missionVision: {
        visionText: "To become a center of excellence in developing indigenous technologies for the advancement of society.",
        missionItems: [
            "To provide an industry-ready curriculum aligned with emerging technological developments.",
            "To develop multidisciplinary skills for solving real-world problems.",
            "To encourage research, innovation, and industry collaboration.",
            "To promote technical competence, professional ethics, and responsible use of technology.",
            "To prepare students for evolving opportunities in computing and information technology.",
        ],
    },
    programHeadingBefore: "Programs and",
    programHeadingHighlight: "Fees",
    programs: [
        {
            category: "Undergraduate",
            mobileLabel: "Undergraduate",
            badge: "B.C.A.",
            icon: GraduationCap,
            programs: [
                {
                    title: "B.C.A. (Data Science & Artificial Intelligence) with L&T",
                    description: "Duration: 3 Years · Course Fees (PA): Rs. 1,10,500/-",
                    icon: Cpu,
                    link: "/program/bca-data-science-artificial-intelligence",
                },
                {
                    title: "B.C.A. (Cyber Security) with L&T",
                    description: "Duration: 3 Years · Course Fees (PA): Rs. 1,10,500/-",
                    icon: ShieldCheck,
                    link: "/program/bca-cyber-security",
                },
                {
                    title: "B.C.A. (Artificial Intelligence & Machine Learning)",
                    description: "Duration: 3 Years · Course Fees (PA): Rs. 1,10,500/-",
                    icon: Lightbulb,
                    link: "/program/bca-artificial-intelligence-machine-learning",
                },
            ],
        },
    ],
    labs: {
        headingBefore: "Labs &",
        headingHighlight: "Practical Learning",
        intro: "Students explore areas such as Python programming, application development, cloud computing, cybersecurity, artificial intelligence, machine learning, and data science.",
        learningAreasHeading: "Practical Learning Areas",
        learningAreas: [
            "Programming and coding exercises",
            "Software and application development",
            "Database management",
            "AI and machine learning applications",
            "Cybersecurity practices",
            "Cloud-based application development",
            "Technical projects and problem-solving",
        ],
        itemsHeading: "Labs",
        items: [
            { num: "01", title: "Artificial Intelligence & Machine Learning Lab", desc: "Explore AI concepts, machine learning techniques and intelligent applications.", accent: "#d62c2b", icon: Lightbulb, animClass: "lab-icon-orbital" },
            { num: "02", title: "Cyber Security Lab", desc: "Develop an understanding of information security, network protection and cybersecurity practices.", accent: "#1B4F91", icon: ShieldCheck, animClass: "lab-icon-pulse" },
            { num: "03", title: "Cloud Computing Lab", desc: "Learn cloud-based technologies, application deployment and computing infrastructure.", accent: "#14284E", icon: Cpu, animClass: "lab-icon-float" },
            { num: "04", title: "Database Lab", desc: "Gain practical knowledge of database design, management and data handling.", accent: "#d62c2b", icon: Settings, animClass: "lab-icon-stack" },
            { num: "05", title: "Research & Development Lab", desc: "Explore innovative ideas and undertake research-oriented technical projects.", accent: "#1B4F91", icon: Microscope, animClass: "lab-icon-glow" },
            { num: "06", title: "Network Security Lab", desc: "Understand network architecture, security protocols and network protection.", accent: "#14284E", icon: Activity, animClass: "lab-icon-network" },
        ],
    },
    highlights: {
        headingBefore: "Key Highlights of Our",
        headingHighlight: "Department",
        items: [
            { num: "01", title: "Multiple Academic Pathways", desc: "Explore B.Tech., BCA, integrated, postgraduate, and doctoral programs.", icon: GraduationCap },
            { num: "02", title: "Industry-Integrated Programmes", desc: "Specialized B.Tech. and BCA programmes with L&T.", icon: Factory },
            { num: "03", title: "Advanced Computing Laboratories", desc: "Practical learning through AI, cybersecurity, cloud computing, database, and network security labs.", icon: Cpu },
            { num: "04", title: "Industry Exposure", desc: "Opportunities to participate in industry visits, expert interactions, and professional learning activities.", icon: Factory },
            { num: "05", title: "Research and Innovation", desc: "Exposure to research papers, patents, technical projects, and innovation activities.", icon: Microscope },
            { num: "06", title: "Hackathon Participation", desc: "Opportunities to collaborate and develop solutions through technical competitions such as the Smart India Hackathon.", icon: Lightbulb },
            { num: "07", title: "Career-Oriented Learning", desc: "Focus on technical skills, practical knowledge, and professional development.", icon: Zap },
        ],
    },
    events: {
        headingBefore: "From Classroom Concepts to",
        headingHighlight: "Real-World Applications",
        sectionSubtitle: "Guest Lectures",
        intro: "The department encourages students to connect academic concepts with practical applications through expert interactions, industry visits, workshops, student projects, research activities, and hackathons.",
        cards: [
            card("GUEST LECTURE", "Energy Systems and Smart Grid: Expert Lecture", "The department organizes expert lectures and knowledge-sharing sessions that introduce students to emerging technologies, industry developments, and research trends.", departmentOverview),
            card("GUEST LECTURE", "Data Science Fundamentals and its Application", "16th April, 2025", dataScienceLecture, "Mr. Shivam Tiwari, Data Engineer, IBM Hyderabad", "Speaker: Mr. Shivam Tiwari, Data Engineer, IBM Hyderabad. Topic: Data Science Fundamentals and its Application. Date: 16th April, 2025"),
            card("GUEST LECTURE", "International Women's Day", "08th March, 2025", inspirationWorkshop, "Prof. Dr. Bineet Kumar Gupta, Head of DCSIS, SRMU Barabanki", "Speaker: Prof. Dr. Bineet Kumar Gupta, Head of DCSIS, SRMU Barabanki. Topic: International Women's Day. Date: 08th March, 2025"),
            card("GUEST LECTURE", "National Science Day", "28th February, 2025", nationalScienceDay, "Dr. Anil Gaikwadji, Sr. Principal Scientist CSIS, CDRI Lucknow", "Speaker: Dr. Anil Gaikwadji, Sr. Principal Scientist CSIS, CDRI Lucknow. Topic: National Science Day. Date: 28th February, 2025"),
            card("INDUSTRY EXPOSURE", "Larsen & Toubro (L&T)", "The department highlights industry exposure and collaborations with Larsen & Toubro (L&T), supporting opportunities for students to understand industry-oriented learning and professional practices.", industryCollaboration),
            card("STUDENT PROJECT", "ConstructAI – AI-Powered Construction Assistant", "An AI-powered project focused on applying artificial intelligence to construction-related assistance and information needs.", constructAiImage),
            card("WORKSHOP", "Hands-on Practice on LabVIEW", "A practical learning session introducing students to LabVIEW and its applications.", inspirationWorkshop),
            card("HACKATHON", "Smart India Hackathon (SIH)", "Participation in the Smart India Hackathon provides students with opportunities to work on problem statements, develop technology-based solutions, and collaborate in teams.", hackathonImage),


        ],
    },
    activitySections: [
        // {
        //     id: "industry-exposure",
        //     eyebrow: "Industry Exposure and Collaborations",
        //     heading: "",
        //     intro: "Industry visits and professional interactions help students understand workplace practices, technology applications, and industry expectations.\n\nThe department highlights industry exposure and collaborations with Larsen & Toubro (L&T), supporting opportunities for students to understand industry-oriented learning and professional practices.",
        //     cards: [
        //     ],
        // },
        // {
        //     id: "student-projects",
        //     eyebrow: "Student Projects",
        //     heading: "",
        //     intro: "Project-based learning encourages students to develop technical solutions, apply programming concepts, and strengthen their problem-solving abilities.",
        //     cards: [
        //     ],
        // },
        // {
        //     id: "workshops",
        //     eyebrow: "Workshops",
        //     heading: "",
        //     intro: "Hands-on workshops help students strengthen their practical understanding of programming tools, software platforms, and emerging technologies.",
        //     cards: [
        //     ],
        // },
        // {
        //     id: "hackathons",
        //     eyebrow: "Hackathons",
        //     heading: "",
        //     intro: "Students are encouraged to participate in innovation challenges and collaborative problem-solving activities.",
        //     cards: [
        //     ],
        // },
        {
            id: "research-publications",
            eyebrow: "Research & Publications",
            heading: "",
            intro: "The department encourages research, innovation, and the development of technology-driven solutions. Students and faculty members explore emerging areas of computer science through research papers, publications, patents, and technical projects.",
            stats: [
                { value: "100+", label: "Research Papers Published in Reputed Journals", icon: Microscope },
                { value: "8+", label: "Books and Book Chapters Published", icon: BookOpenCheck },
                { value: "5+", label: "Ph.D. Awarded", icon: GraduationCap },
                { value: "4+", label: "Patents Granted/Published", icon: ShieldCheck },
            ],
            lists: [
                {
                    title: "Key Research Areas",
                    items: [
                        "Artificial Intelligence and Machine Learning",
                        "Data Science and Analytics",
                        "Cyber Security and Network Security",
                        "Cloud Computing",
                        "Software Engineering",
                        "Computer Vision and Image Processing",
                        "Emerging Computing Technologies",
                    ],
                },
            ],
        },
        {
            id: "higher-studies",
            eyebrow: "Higher Studies",
            heading: "Higher Studies",
            backgroundImage: higherStudiesBackground,
            listLayout: "capsule",
            listItems: [
                "After completing a BCA, students can explore postgraduate options such as an MCA and other relevant postgraduate programs, subject to eligibility requirements.",
                "B.Tech. graduates can pursue M.Tech., specialized postgraduate programs, and research opportunities in computing and emerging technologies.",
            ],
        },
    ],
    career: {
        heading: "Career Opportunities",
        items: [
            ["Software Engineer / Developer"],
            ["Full-Stack Developer"],
            ["Artificial Intelligence Engineer"],
            ["Machine Learning Engineer"],
            ["Data Scientist"],
            ["Data Analyst"],
            ["Systems and Database Administrator"],
            ["Network Security Engineer"],
            ["Cybersecurity Analyst"],
            ["DevOps Engineer"],
            ["Cloud Engineer"],
            ["Research and Development Engineer"],
        ],
        descriptions: [
            { title: "Software Engineer / Developer", description: "Software Engineer / Developer" },
            { title: "Full-Stack Developer", description: "Full-Stack Developer" },
            { title: "Artificial Intelligence Engineer", description: "Artificial Intelligence Engineer" },
            { title: "Machine Learning Engineer", description: "Machine Learning Engineer" },
            { title: "Data Scientist", description: "Data Scientist" },
            { title: "Data Analyst", description: "Data Analyst" },
            { title: "Systems and Database Administrator", description: "Systems and Database Administrator" },
            { title: "Network Security Engineer", description: "Network Security Engineer" },
            { title: "Cybersecurity Analyst", description: "Cybersecurity Analyst" },
            { title: "DevOps Engineer", description: "DevOps Engineer" },
            { title: "Cloud Engineer", description: "Cloud Engineer" },
            { title: "Research and Development Engineer", description: "Research and Development Engineer" },
        ],
    },
    facultySection: {
        members: faculty,
        headingText: "Our",
        headingHighlight: "Faculty",
        subheading: "The University takes pride in recruiting distinguished faculty from reputed central universities and best institutes like- IIT, IIM, MNNIT and IIT-BHU. They bring to the classroom, passion and enthusiasm for teaching, providing an intimate, interactive, personalized approach to learning.",
        featuredLabel: "DEPARTMENT HEAD",
        featuredDescription: "M.Tech. (Data Science), Ph.D. (AI/ML/Data Science/ICT/Cyber Security/Computational Neuro Science/IKS-Computing). Specialization/ Area of Research: Artificial Intelligence & Machine Learning, Data Science, ICT, Cyber Security, Computational Neuro Science, IKS-Computing",
        profileDescription: "The University takes pride in recruiting distinguished faculty from reputed central universities and best institutes like- IIT, IIM, MNNIT and IIT-BHU.",
        showResearchShowcase: false,
    },
    faq: [
        { q: "What programs are offered by the Department of Computer Science and Engineering at SRMU?", a: "The department offers B.Tech. programs in computer science and engineering and specialized computing domains, BCA programs, integrated programs, M.Tech. in computer science and engineering, and Ph.D. programs." },
        { q: "Does SRMU offer BCA under the Department of Computer Science and Engineering?", a: "Yes. Students can explore BCA programs, including BCA Cyber Security with L&T and BCA Data Science & Artificial Intelligence with L&T." },
        { q: "What is the difference between BCA and B.Tech. CSE?", a: "BCA focuses on computer applications, programming, software development, databases, and related IT technologies. B.Tech. CSE provides a broader engineering foundation in computing, computer systems, software engineering, and advanced technology domains." },
        { q: "What specializations are available in BCA at SRMU?", a: "SRMU offers specialized BCA programs in Cyber Security and Data Science & Artificial Intelligence with L&T." },
        { q: "Is BCA Cyber Security available with L&T at SRMU?", a: "Yes. SRMU offers BCA Cyber Security with L&T as an industry-integrated program." },
        { q: "Is BCA Data Science & Artificial Intelligence available with L&T?", a: "Yes, SRMU offers BCA Data Science & Artificial Intelligence with L&T." },
        { q: "What subjects are covered in BCA?", a: "BCA covers areas such as programming, computer applications, software development, databases, networking, and related computing technologies. Specialized programs introduce students to areas such as cybersecurity, data science, and artificial intelligence." },
        { q: "What are the career opportunities after BCA?", a: "BCA graduates can explore opportunities in software development, web development, application development, data analytics, cybersecurity, database management, and IT services." },
        { q: "Can students pursue MCA after BCA?", a: "Yes. BCA graduates can pursue MCA, subject to the eligibility requirements of the respective university or institution." },
        { q: "What laboratories are available in the CSE Department?", a: "The department highlights specialized laboratories in artificial intelligence & machine learning, cyber security, cloud computing, database management, research & development, and network security." },
        { q: "Does the department provide industry exposure?", a: "The department highlights industry visits, expert interactions, and collaborations with L&T to help students understand professional practices and industry requirements." },
        { q: "What career opportunities are available after B.Tech. CSE?", a: "Graduates can explore roles such as software engineer, AI engineer, machine learning engineer, data scientist, cybersecurity analyst, cloud engineer, and DevOps engineer." },
    ],
    showFaculty: true,
    showScholarships: true,
    showBlogs: true,
    showCareerDescriptionCards: false,
};
