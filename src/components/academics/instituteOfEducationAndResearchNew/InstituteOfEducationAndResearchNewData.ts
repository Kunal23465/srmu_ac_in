import {
    BookOpen,
    Brain,
    ClipboardList,
    GraduationCap,
    Laptop,
    Lightbulb,
    MessagesSquare,
    Microscope,
    Monitor,
    School,
    UsersRound,
} from "lucide-react";
import type { CustomDepartmentNewData, DepartmentActivityCardNew } from "../../../customs/department-page-new/CustomDepartmentNew";
import { InstituteofEducationandResearchfacultyData } from "../../../data/academics/institute/institute-department/institute-of-education-and-research-data";
import educationBanner from "../../../assets/images/institute-of-education-and-research-new/education-and-research-banner.webp";
import educationOverview from "../../../assets/images/academics/institutes/handsonlearning.webp";
import activityImageOne from "../../../assets/images/campus-life/events/new-education/1.webp";
import activityImageTwo from "../../../assets/images/campus-life/events/new-education/2.webp";
import activityImageThree from "../../../assets/images/campus-life/events/new-education/3.webp";
import activityImageFour from "../../../assets/images/campus-life/events/new-education/4.webp";
import activityImageFive from "../../../assets/images/campus-life/events/new-education/5.webp";
import activityImageSix from "../../../assets/images/campus-life/events/new-education/6.webp";

const activityCard = (
    tag: string,
    title: string,
    shortDesc: string,
    img: string,
): DepartmentActivityCardNew => ({
    tag,
    title,
    shortDesc,
    readMore: shortDesc,
    img,
});

const educationFaculty = InstituteofEducationandResearchfacultyData.map((member) => {
    const isPrincipal = member.name === "Prof. (Dr.) Ritu Chandra";

    return {
        id: String(member.id),
        name: member.name,
        role: isPrincipal ? "Professor & Principal" : member.designation,
        img: member.image,
        isHod: isPrincipal,
        ...(isPrincipal
            ? {
                qualification: "Ph.D., UGC-NET (Education)",
                experience: "14 years",
                specialization: ["Educational Psychology", "Outcome-Based Education", "Learning Outcomes"],
                expertise: "Prof. (Dr.) Ritu Chandra is an educationist and academician whose work focuses on educational psychology, academic achievement, learning skills, individual differences, and outcome-based education.",
                email: "principal.edu@srmu.ac.in",
                contact: "+91-9451404099",
            }
            : {}),
    };
});

export const instituteOfEducationAndResearchNewData: CustomDepartmentNewData = {
    navSections: [
        { id: "overview", label: "Overview" },
        { id: "programs", label: "Programmes" },
        { id: "labs", label: "Labs & Learning" },
        { id: "events", label: "Activities" },
        { id: "faculty", label: "Faculty" },
        { id: "faq", label: "FAQs" },
    ],
    hero: {
        prefix: "Institute of",
        title: "Education and Research",
        backgroundImage: educationBanner,
        stats: [
            { v: "2", l: "Education\nProgrammes", delay: "0ms" },
            { v: "6", l: "Learning\nLaboratories", delay: "90ms" },
            { v: "6", l: "Faculty\nMembers", delay: "180ms" },
            { v: "6", l: "Activity\nAreas", delay: "270ms" },
        ],
        quickStats: [
            { value: "2", label: "Education Programmes" },
            { value: "6", label: "Learning Laboratories" },
            { value: "6", label: "Faculty Members" },
            { value: "6", label: "Activity Areas" },
        ],
    },
    overview: {
        headingBefore: "About the",
        headingHighlight: "Institute",
        subtitle: "Education and Research at SRMU",
        paragraphs: [
            "The Institute of Education and Research at Shri Ramswaroop Memorial University is committed to advancing the field of education through academic excellence, research, and innovative teaching practices. The institute aims to develop a deeper understanding of learners, learning processes, and educational development while connecting theoretical knowledge with practical applications.",
            "The M.A. in Education program is designed to strengthen students' understanding of educational philosophy, psychology, curriculum development, teaching-learning methodologies, and research practices. It encourages critical thinking, independent learning, and analytical approaches to contemporary educational challenges.",
            "With experienced faculty, academic mentoring, research opportunities, and modern learning resources, the institute strives to prepare graduates for professional opportunities in education, academic administration, research, and educational development.",
        ],
        preview: "The Institute of Education and Research advances education through academic excellence, research, and innovative teaching, connecting an understanding of learning with practical educational work.",
        image: educationOverview,
        imageAlt: "Students taking part in practical learning",
    },
    missionVision: {
        missionItems: [
            "To promote quality learning through postgraduate education, teaching, and research that responds to society's changing needs.",
            "To encourage experiential learning through innovative teaching-learning methods and interdisciplinary approaches.",
            "To develop the intellectual abilities, creativity, and critical thinking skills of every learner.",
            "To nurture ethical values, professional integrity, and social responsibility among students.",
            "To promote educational research and contribute to the continuous improvement of teaching and learning practices.",
        ],
        visionText: "To achieve excellence in Education and Research through innovative, socially enriching, and ethically responsible academic pursuits, while contributing to the development of knowledgeable, skilled, and responsible education professionals.",
    },
    programHeadingBefore: "Explore",
    programHeadingHighlight: "Programmes",
    programs: [
        {
            category: "Undergraduate Programme",
            mobileLabel: "Undergraduate",
            badge: "B.Ed.",
            icon: School,
            programs: [
                {
                    title: "B.Ed. (Bachelor of Education)",
                    description: "A two-year teacher education programme combining educational study with practical preparation for teaching.",
                    icon: BookOpen,
                    link: "/program/bed-bachelor-of-education",
                },
            ],
        },
        {
            category: "Postgraduate Programme",
            mobileLabel: "Postgraduate",
            badge: "M.A.",
            icon: GraduationCap,
            programs: [
                {
                    title: "M.A. in Education",
                    description: "A two-year postgraduate programme in educational theory, psychology, curriculum, teaching-learning practices, and research.",
                    icon: GraduationCap,
                    link: "/program/m-a-education",
                },
            ],
        },
    ],
    labs: {
        headingBefore: "Labs &",
        headingHighlight: "Practical Learning",
        intro: "The Institute of Education and Research provides dedicated learning facilities that support academic understanding, research activities, educational technology, and practical skill development.",
        items: [
            { num: "01", title: "Research Lab", desc: "An academic environment supporting research activities, data analysis, academic writing, and the exploration of contemporary educational issues.", accent: "#d62c2b", icon: Microscope, animClass: "lab-icon-orbital" },
            { num: "02", title: "ICT Lab", desc: "Provides exposure to information and communication technologies used in modern teaching, digital learning, and educational resource development.", accent: "#1B4F91", icon: Monitor, animClass: "lab-icon-pulse" },
            { num: "03", title: "Curriculum Lab", desc: "Encourages students to understand curriculum planning, instructional design, teaching resources, and the development of effective learning materials.", accent: "#14284E", icon: ClipboardList, animClass: "lab-icon-float" },
            { num: "04", title: "Educational Psychology Lab", desc: "Supports the study of learner behaviour, cognitive development, individual differences, and psychological principles influencing the teaching-learning process.", accent: "#d62c2b", icon: Brain, animClass: "lab-icon-network" },
            { num: "05", title: "Computer Lab", desc: "Provides access to digital tools and computer-based resources for academic research, presentations, educational content development, and data management.", accent: "#1B4F91", icon: Laptop, animClass: "lab-icon-stack" },
            { num: "06", title: "Communication Lab", desc: "Helps students strengthen communication, presentation, interpersonal, and professional interaction skills required in educational environments.", accent: "#14284E", icon: MessagesSquare, animClass: "lab-icon-glow" },
        ],
    },
    highlights: {
        headingBefore: "What Makes the Institute of Education and Research Different at",
        headingHighlight: "SRMU?",
        items: [
            { num: "01", title: "RESEARCH-ORIENTED LEARNING", desc: "Students are encouraged to explore educational challenges, develop research skills, and engage in academic inquiry.", icon: Microscope },
            { num: "02", title: "NEP 2020-ALIGNED EDUCATION", desc: "The academic approach promotes contemporary educational practices, multidisciplinary learning, and competency-based development.", icon: Lightbulb },
            { num: "03", title: "TECHNOLOGY-ENABLED LEARNING", desc: "Exposure to ICT tools and digital learning resources helps students understand the role of technology in modern education.", icon: Monitor },
            { num: "04", title: "FACULTY MENTORING", desc: "Faculty guidance and academic mentoring support students as they develop subject knowledge, research capabilities, and professional skills.", icon: UsersRound },
            { num: "05", title: "PRACTICAL & EXPERIENTIAL LEARNING", desc: "Workshops, seminars, educational activities, and academic interactions help students connect theory with practical applications.", icon: BookOpen },
            { num: "06", title: "PROFESSIONAL DEVELOPMENT", desc: "Students have opportunities to strengthen communication, analytical thinking, presentation, and educational planning skills.", icon: GraduationCap },
        ],
    },
    events: {
        headingBefore: "From Classroom Concepts to",
        headingHighlight: "Real-World Applications",
        sectionSubtitle: "Building Perspectives Through Academic Engagement",
        intro: "The Institute connects academic concepts with contemporary educational practice through seminars, workshops, expert interactions, and research activities.",
        cards: [
            activityCard("FACULTY DEVELOPMENT PROGRAMME", "Advanced Teaching-Learning Pedagogies and Strategies", "A faculty development initiative focused on innovative pedagogical approaches, effective classroom practices, and strategies for improving the teaching-learning experience.", activityImageOne),
            activityCard("WORKSHOP", "Teaching Learning Material (TLM)", "An interactive learning initiative introducing participants to the preparation and application of teaching-learning materials for more engaging and effective classroom instruction.", activityImageTwo),
            activityCard("NATIONAL WEBINAR", "Transformation in Education", "An academic discussion exploring the changing landscape of education, emerging learning approaches, and the importance of educational transformation.", activityImageThree),
            activityCard("RESEARCH & ACADEMIC DEVELOPMENT", "Research Methodology Certificate Course", "A short-term academic course designed to strengthen understanding of research methods, academic inquiry, and systematic approaches to educational research.", activityImageFour),
            activityCard("SEMINAR", "New Education Policy and Quality Education for Sustainable Future", "An academic platform to discuss the role of NEP 2020 in transforming education, improving learning outcomes, and promoting sustainable educational development.", activityImageFive),
            activityCard("COMMUNITY ENGAGEMENT", "Educational Awareness & Outreach Activities", "Students participate in educational and community-oriented activities that encourage social awareness, communication skills, and responsible citizenship.", activityImageSix),
        ],
    },
    career: {
        heading: "Where Can an M.A. in Education Take You?",
        items: [
            ["Education Consultant"],
            ["Academic Coordinator"],
            ["Educational Researcher"],
            ["Curriculum Developer"],
            ["Education Counsellor"],
            ["Instructional Designer"],
        ],
        descriptions: [
            { title: "Education Consultant", description: "Support educational institutions and organisations with learning, programme, and academic development." },
            { title: "Academic Coordinator", description: "Coordinate academic activities, teaching programmes, and learning support in educational settings." },
            { title: "Educational Researcher", description: "Conduct research into educational systems, teaching practices, and learning outcomes." },
            { title: "Curriculum Developer", description: "Contribute to curriculum planning, instructional design, and the development of learning materials." },
            { title: "Education Counsellor", description: "Guide learners as they navigate educational choices and learning needs." },
            { title: "Instructional Designer", description: "Design teaching resources and learning experiences for classroom and digital environments." },
        ],
    },
    facultySection: {
        members: educationFaculty,
        headingText: "Institute",
        headingHighlight: "Faculty",
        subheading: "Our faculty support education and research through academic guidance, mentoring, and a focus on teaching and learning.",
        featuredLabel: "Institute Principal",
        featuredDescription: "Prof. (Dr.) Ritu Chandra leads the Institute as Principal and brings 14 years of experience in education, with a focus on educational psychology.",
        profileDescription: "Faculty members guide students in education, teaching-learning practice, academic research, and professional development.",
        showResearchShowcase: false,
    },
    faq: [
        { q: "What is the Institute of Education and Research at SRMU?", a: "The Institute of Education and Research at Shri Ramswaroop Memorial University focuses on postgraduate education, academic research, and professional competencies in education. Its M.A. in Education programme develops a deeper understanding of teaching, learning, and educational systems." },
        { q: "What postgraduate programme does the Institute offer?", a: "The institute offers a Master of Arts (M.A.) in Education, a two-year postgraduate program focusing on educational theory, research, psychology, curriculum development, and modern teaching-learning practices" },
        { q: "What is the duration of the M.A. in Education programme?", a: "The M.A. in Education program at SRMU has a duration of two years, divided into four semesters." },
        { q: "What are the eligibility criteria for M.A. in Education at SRMU?", a: "Candidates must have completed graduation in any stream from a recognised university or AICTE-recognised institution. The minimum aggregate requirement is 45% or CGPA 5.0 for General/OBC candidates and 40% or CGPA 4.5 for SC/ST candidates." },
        { q: "What subjects are covered in M.A. Education?", a: "The programme covers educational psychology, philosophy of education, sociology of education, curriculum development, educational technology, educational administration, educational measurement and evaluation, and research methodology." },
        { q: "What practical learning facilities are available at the Institute?", a: "Students have access to dedicated learning facilities, including Research, ICT, Curriculum, Educational Psychology, and Computer and Communication Labs, which support academic learning and research activities." },
        { q: "What career opportunities are available after M.A. in Education?", a: "Graduates can explore opportunities as education consultants, academic coordinators, educational researchers, curriculum developers, education counsellors, instructional designers, and educational content developers." },
        { q: "Can students pursue a Ph.D. after completing an M.A. in Education?", a: "Yes. Graduates can pursue a Ph.D. in Education or a related discipline, subject to the eligibility criteria and admission requirements of the university." },
        { q: "Does SRMU provide placement assistance to M.A. Education students?", a: "SRMU provides career guidance and placement assistance to help students explore professional opportunities in educational institutions, research organisations, and related sectors." },
        { q: "Why choose SRMU for M.A. in Education?", a: "SRMU offers an academically focused learning environment, experienced faculty, research opportunities, modern educational laboratories, technology-enabled learning and professional development support to help students build careers in the education sector." },
    ],
    showFaculty: true,
    showScholarships: true,
    showBlogs: false,
    showCareerDescriptionCards: false,
};
