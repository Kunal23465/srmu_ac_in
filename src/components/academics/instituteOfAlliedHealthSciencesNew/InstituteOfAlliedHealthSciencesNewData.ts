import {
    Activity,
    Eye,
    FlaskConical,
    GraduationCap,
    HeartPulse,
    Lightbulb,
    Microscope,
    Search,
    ShieldCheck,
    UsersRound,
} from "lucide-react";
import type { CustomDepartmentNewData, DepartmentActivityCardNew } from "../../../customs/department-page-new/CustomDepartmentNew";
import type { FacultyMember } from "../departmentOfComputerScienceAndEngineeringNew/DepartmentFaculty";
import {
    facultyDetailsOfAhsDepartment,
    facultyOfAhsProfileData,
} from "../../../data/academics/faculty-of-allied-health-sciences/faculty-of-allied-health-sciences-data";
import alliedHealthHero from "../../../assets/images/institute-of-allied-health-sciences-new/allied-health-sciences-banner.webp";
import alliedHealthLabImage from "../../../assets/images/academics/institutes/statelab.webp";
import biomedicalImage from "../../../assets/images/academics/institutes/biomedical.webp";
import healthcareProgramImage from "../../../assets/images/academics/institutes/diverseprogram.webp";
import facultyLearningImage from "../../../assets/images/academics/institutes/experiencedfaculty.webp";
import researchImage from "../../../assets/images/academics/institutes/researchdevelopment.webp";
import studentSupportImage from "../../../assets/images/academics/institutes/studentsupport.webp";

const card = (
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

const directorProfile = facultyOfAhsProfileData[0];

const alliedHealthFaculty: FacultyMember[] = [
    {
        id: "nabeel-ahmad",
        name: directorProfile.name,
        role: directorProfile.position,
        img: directorProfile.image,
        isHod: true,
        qualification: "M.Tech. in Biotechnology and Ph.D. in Biotechnology",
        experience: "17 years",
        specialization: [
            "Bioprocess Engineering",
            "Nanobiotechnology",
            "Biomaterials",
            "Bioimaging",
            "Enzymology",
            "Environmental Engineering",
            "Nanosensors",
        ],
        expertise: "Prof. (Dr.) Nabeel Ahmad's research interests include nanobiotechnology, biomaterials, bioimaging, and bioprocess engineering.",
    },
    ...facultyDetailsOfAhsDepartment.map((member) => ({
        id: String(member.id),
        name: member.name,
        role: member.designation,
        img: member.image,
    })),
];

export const instituteOfAlliedHealthSciencesNewData: CustomDepartmentNewData = {
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
        title: "Allied Health Sciences",
        backgroundImage: alliedHealthHero,
        stats: [
            { v: "05", l: "Undergraduate\nProgrammes", delay: "0ms" },
            { v: "06", l: "Practical Learning\nAreas", delay: "90ms" },
            { v: "05", l: "Healthcare Career\nPathways", delay: "180ms" },
            { v: "UG", l: "Clinical & Lab\nLearning", delay: "270ms" },
        ],
        quickStats: [
            { value: "05", label: "Undergraduate Programmes" },
            { value: "06", label: "Practical Learning Areas" },
            { value: "05", label: "Healthcare Career Pathways" },
            { value: "UG", label: "Clinical & Laboratory Learning" },
        ],
    },
    overview: {
        headingBefore: "About the",
        headingHighlight: "Institute",
        subtitle: "Allied Health Sciences at SRMU",
        paragraphs: [
            "Choosing a career in healthcare requires more than academic knowledge. It demands technical competence, practical experience, precision, and the ability to work responsibly in clinical environments.",
            "The Institute of Allied Health Sciences at Shri Ramswaroop Memorial University offers undergraduate programmes for students aspiring to build careers in healthcare. The institute develops a strong foundation in medical sciences through practical learning, laboratory training, and clinical exposure.",
            "Though its multidisciplinary academic approach introduces students to medical laboratory sciences, physiotherapy, medical imaging, optometry, anaesthesia, and operation theatre technology. ",
            "With an emphasis on experiential learning, professional ethics and patient-centred practices, the institute aims to prepare competent healthcare professionals who can contribute to diagnostic, therapeutic, rehabilitation and hospital-based services.",
        ],
        preview: "The Institute of Allied Health Sciences at SRMU combines medical science foundations with laboratory practice, clinical exposure, and patient-centred professional learning.",
        image: alliedHealthLabImage,
        imageAlt: "Laboratory learning for allied health sciences students",
    },
    missionVision: {
        missionItems: [
            "To deliver comprehensive healthcare education by integrating theoretical knowledge with practical and clinical skills.",
            "To encourage interdisciplinary research initiatives that contribute to advancements in medical and healthcare technologies.",
            "To establish meaningful partnerships with healthcare institutions for real-world learning and professional exposure.",
            "To develop competent, ethical, and responsible healthcare professionals.",
            "To promote patient-centred care, professional integrity, and community well-being.",
        ],
        visionText: "To advance allied health sciences education and research by equipping students with the knowledge, practical skills, and professional competencies required to excel in healthcare settings, improve patient outcomes, and contribute to community well-being.",
    },
    programHeadingBefore: "Explore",
    programHeadingHighlight: "Programmes",
    programs: [
        {
            category: "Undergraduate Programmes",
            mobileLabel: "Undergraduate",
            badge: "Bachelor's Degrees",
            icon: GraduationCap,
            programs: [
                { title: "Bachelor of Medical Laboratory Sciences (BMLS)", description: "Four-year undergraduate study in medical laboratory sciences and diagnostic practice.", icon: FlaskConical, link: "/bachelor-of-medical-laboratory-sciences-new" },
                { title: "Bachelor of Physiotherapy (BPT)", description: "Five-year undergraduate study in physiotherapy, rehabilitation, and patient care.", icon: Activity, link: "/program/bachelor-in-physiotherapy" },
                { title: "Bachelor of Medical Radiology and Imaging Technology (BMRIT)", description: "Four-year undergraduate study in medical radiology and diagnostic imaging.", icon: Search, link: "/program/bachelor-of-medical-radiology-imaging-technology-bmrit" },
                { title: "Bachelor of Optometry", description: "Five-year undergraduate study in vision assessment and optometric care.", icon: Eye, link: "/program/bachelor-of-optometry" },
                { title: "Bachelor of Anaesthesia and Operation Theatre Technology (B.AOTT)", description: "Four-year undergraduate study in anaesthesia support and operation theatre technology.", icon: HeartPulse, link: "/bachelor-of-anaesthesia-and-operation-theatre-technology-new" },
            ],
        },
    ],
    labs: {
        headingBefore: "Learn Through Practical Experience and",
        headingHighlight: "Clinical Applications",
        intro: "At the Institute of Allied Health Sciences, practical learning is an essential part of healthcare education. Students are encouraged to develop technical proficiency, understand clinical procedures, and gain familiarity with healthcare equipment through laboratory-based learning and practical demonstrations.",
        items: [
            { num: "01", title: "Medical Laboratory Sciences Lab", desc: "Provides exposure to laboratory diagnostic procedures, sample handling, microscopy, clinical pathology, and basic laboratory investigations.", accent: "#d62c2b", icon: FlaskConical, animClass: "lab-icon-orbital" },
            { num: "02", title: "Physiotherapy Lab", desc: "Supports practical learning in therapeutic exercises, physical rehabilitation, movement assessment, electrotherapy techniques, and patient-care procedures.", accent: "#1B4F91", icon: Activity, animClass: "lab-icon-pulse" },
            { num: "03", title: "Medical Radiology & Imaging Lab", desc: "Introduces students to radiographic principles, imaging techniques, radiation safety, patient positioning, and diagnostic imaging equipment.", accent: "#14284E", icon: Search, animClass: "lab-icon-network" },
            { num: "04", title: "Optometry Lab", desc: "Facilitates practical learning in vision assessment, refraction techniques, ocular examination, and optometric instruments.", accent: "#d62c2b", icon: Eye, animClass: "lab-icon-float" },
            { num: "05", title: "Anaesthesia Technology Lab", desc: "Provides exposure to anesthesia equipment, patient monitoring systems, operation theater procedures, and perioperative care practices.", accent: "#1B4F91", icon: HeartPulse, animClass: "lab-icon-glow" },
            { num: "06", title: "Clinical Skills & Simulation Lab", desc: "Encourages students to develop practical competencies through simulated healthcare situations, patient-handling exercises, and clinical skill demonstrations.", accent: "#14284E", icon: ShieldCheck, animClass: "lab-icon-stack" },
        ],
    },
    highlights: {
        headingBefore: "What Makes the Institute of Allied Health Sciences Different at",
        headingHighlight: "SRMU?",
        items: [
            { num: "01", title: "Multidisciplinary Healthcare Programs", desc: "Explore specialised undergraduate programmes across medical laboratory sciences, physiotherapy, radiology, optometry and operation theatre technology.", icon: UsersRound },
            { num: "02", title: "Practical-Oriented Education", desc: "The academic approach combines theoretical understanding with practical demonstrations, laboratory activities, and skill development.", icon: FlaskConical },
            { num: "03", title: "Clinical Exposure & Training", desc: "Students are introduced to clinical environments and healthcare workflows to understand professional practices and patient-care responsibilities.", icon: HeartPulse },
            { num: "04", title: "Industry-Relevant Curriculum", desc: "The academic framework focuses on relevant healthcare knowledge, diagnostic techniques, and clinical competencies, with reference to applicable NCAHP standards.", icon: ShieldCheck },
            { num: "05", title: "Experienced Faculty & Academic Mentoring", desc: "Students receive academic guidance and subject-specific support to strengthen their healthcare knowledge and professional capabilities.", icon: GraduationCap },
            { num: "06", title: "Interdisciplinary Learning", desc: "The institute encourages students to understand the relationship between medical sciences, diagnostic technologies, rehabilitation, and modern healthcare delivery.", icon: Lightbulb },
            { num: "07", title: "Professional & Ethical Development", desc: "Emphasis on communication, teamwork, patient safety, professional ethics, and responsible healthcare practices.", icon: UsersRound },
        ],
    },
    events: {
        headingBefore: "From Classroom Concepts to",
        headingHighlight: "Real-World Applications",
        sectionSubtitle: "",
        intro: "",
        cards: [
            card("CLINICAL TRAINING", "Learning Through Healthcare Practice", "Students develop practical understanding of healthcare procedures, patient interaction, clinical protocols, and professional responsibilities through structured clinical learning opportunities.", biomedicalImage, "Clinical learning"),
            card("DIAGNOSTIC SKILLS", "Understanding the Science Behind Diagnosis", "Practical learning introduces students to diagnostic procedures, laboratory investigations, medical imaging, and clinical assessment techniques.", alliedHealthLabImage, "Laboratory & diagnostic learning"),
            card("HEALTHCARE WORKSHOPS", "Strengthening Practical Competencies", "Workshops provide opportunities to explore healthcare equipment, clinical techniques, patient-care practices, and emerging developments in allied health sciences.", healthcareProgramImage, "Practical skill development"),
            card("EXPERT GUEST LECTURES", "Insights from Healthcare Professionals", "Interactions with healthcare experts expose students to current clinical practices, technological advancements, professional expectations, and developments in healthcare delivery.", facultyLearningImage, "Academic and professional interaction"),
            card("RESEARCH & ACADEMIC ACTIVITIES", "Encouraging Scientific Thinking", "Academic discussions, research presentations, and scientific activities encourage students to explore healthcare challenges and develop evidence-based perspectives.", researchImage, "Research-oriented learning"),
            card("COMMUNITY HEALTH AWARENESS", "Extending Healthcare Knowledge Beyond Campus", "Community-oriented activities can help students understand public health concerns, preventive healthcare, health awareness, and the importance of accessible healthcare services.", studentSupportImage, "Community well-being"),
        ],
    },
    research: {
        eyebrow: "Research & Publications",
        heading: "Research Supporting Healthcare Innovation",
        description: "The institute encourages interdisciplinary research initiatives that contribute to medical and healthcare technologies. Faculty research interests represented in the institute's existing faculty profile include nanobiotechnology, biomaterials, bioimaging, bioprocess engineering, and nanosensors.",
        cards: [
            card("RESEARCH AREA", "Medical & Healthcare Technologies", "Interdisciplinary research initiatives contribute to advancements in medical and healthcare technologies.", researchImage),
            card("FACULTY RESEARCH", "Nanobiotechnology & Biomaterials", "Faculty research interests include nanobiotechnology, biomaterials, and nanosensors.", biomedicalImage),
            card("FACULTY RESEARCH", "Bioimaging & Bioprocess Engineering", "Research interests also include bioimaging and bioprocess engineering, connecting scientific work with healthcare applications.", alliedHealthLabImage),
        ],
    },
    career: {
        heading: "Career Opportunities",
        items: [
            ["Medical Laboratory", "Sciences"],
            ["Physiotherapy &", "Rehabilitation"],
            ["Medical Radiology &", "Imaging"],
            ["Optometry & Vision", "Care"],
            ["Anaesthesia &", "Operation Theatre"],
        ],
        descriptions: [
            { title: "Medical Laboratory Sciences", description: "Medical Laboratory Technologist, Laboratory Technician, Diagnostic Assistant." },
            { title: "Physiotherapy", description: "Physiotherapist, Rehabilitation Assistant, Sports Rehabilitation Professional." },
            { title: "Medical Radiology & Imaging", description: "Radiology Technologist, Imaging Technician, Radiology Assistant." },
            { title: "Optometry", description: "Optometrist, Vision Care Professional, Optometry Assistant." },
            { title: "Anaesthesia & Operation Theatre Technology", description: "Anesthesia Technologist, Operation Theatre Technologist, OT Assistant." },
        ],
    },
    facultySection: {
        members: alliedHealthFaculty,
        subheading: "The institute's faculty supports academic learning and professional preparation across allied health sciences and healthcare practice.",
        featuredLabel: "OFFICIATING DIRECTOR",
        featuredDescription: "Prof. (Dr.) Nabeel Ahmad serves as Officiating Director of the Institute of Allied Health Sciences. His research interests include nanobiotechnology, biomaterials, bioimaging, and bioprocess engineering.",
        profileDescription: "Faculty members support subject learning, practical skills, academic mentoring, and healthcare-oriented education.",
        showResearchShowcase: false,
    },
    faq: [
        { q: "What is the Institute of Allied Health Sciences at SRMU?", a: "The Institute of Allied Health Sciences at Shri Ramswaroop Memorial University focuses on undergraduate healthcare education, practical training, and clinical skill development. It prepares students for opportunities in diagnostic, therapeutic, rehabilitation, and hospital-based healthcare services." },
        { q: "Which courses are offered by the Institute of Allied Health Sciences at SRMU?", a: "The institute offers five undergraduate programmes: Bachelor of Medical Laboratory Sciences (BMLS), Bachelor of Physiotherapy (BPT), Bachelor of Medical Radiology and Imaging Technology (BMRIT), Bachelor of Optometry, and Bachelor of Anaesthesia and Operation Theatre Technology (B.AOTT)." },
        { q: "What is the duration of allied health sciences courses at SRMU?", a: "BMLS and BMRIT are four-year programmes. BPT and Bachelor of Optometry have a five-year duration, while B.AOTT is a four-year programme." },
        { q: "What are the eligibility criteria for admission to allied health sciences programs?", a: "Eligibility depends on the selected programme and applicable university admission requirements. Students who have completed Class 12 in the relevant science stream should check the individual programme criteria before applying." },
        { q: "What is the scope of Allied Health Sciences?", a: "Allied Health Sciences offers career opportunities across diagnostic laboratories, hospitals, rehabilitation centres, imaging departments, eye-care facilities, and operation theatres. Graduates contribute to healthcare delivery through specialized technical and clinical support roles." },
        { q: "Does SRMU provide practical and clinical training?", a: "Yes. The institute emphasizes practical learning through laboratory activities, clinical exposure, practical demonstrations, and healthcare-oriented training to help students understand real-world clinical environments." },
        { q: "What career opportunities are available after BMLS?", a: "BMLS graduates can explore opportunities as medical laboratory technologists, laboratory technicians, and diagnostic assistants in hospitals, diagnostic centres, pathology laboratories, and clinical research facilities." },
        { q: "What can I do after completing BPT?", a: "After completing BPT and meeting applicable professional requirements, graduates can explore opportunities as physiotherapists in hospitals, rehabilitation centres, sports facilities, and specialized clinics." },
        { q: "What is the difference between BMRIT and B.AOTT?", a: "BMRIT focuses on medical imaging and diagnostic radiology techniques, whereas B.AOTT focuses on anaesthesia support, operation theatre procedures, surgical equipment, and perioperative patient care." },
        { q: "Does SRMU provide placement assistance to Allied Health Sciences students?", a: "SRMU provides career guidance and placement support to help eligible students explore opportunities in hospitals, diagnostic centres, rehabilitation facilities, and other healthcare organizations." },
        { q: "Why should I choose SRMU for Allied Health Sciences?", a: "SRMU offers specialized undergraduate programmes, practical-oriented education, clinical exposure, academic mentoring, and a multidisciplinary learning environment to help students develop healthcare knowledge and professional skills." },
        { q: "Can I pursue higher studies after completing an allied health sciences degree?", a: "Yes. Graduates can explore postgraduate education and specialized professional development in their respective disciplines, subject to the eligibility criteria of the chosen programme." },
    ],
    showFaculty: true,
    showScholarships: true,
    showBlogs: true,
    showCareerDescriptionCards: true,
};
