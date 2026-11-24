import {
    Activity,
    BookOpen,
    Factory,
    FlaskConical,
    GraduationCap,
    Lightbulb,
    Microscope,
    Pill,
    ShieldCheck,
    UsersRound,
} from "lucide-react";
import type { CustomDepartmentNewData, DepartmentActivityCardNew } from "../../../customs/department-page-new/CustomDepartmentNew";
import { instituteOfPharmacyNewData } from "../instituteOfPharmacyNew/InstituteOfPharmacyNewData";
import pharmacyBanner from "../../../assets/images/institute-of-pharmaceutical-sciences-new/pharmaceutical-sciences-banner.webp";
import pharmaceuticalOverview from "../../../assets/images/academics/institutes/pharmaceutical-12022411152655.webp";
import lab01ChemistryIcon from "../../../assets/images/pharmacy-new/icons/lab-01-chemistry.svg";
import lab02FormulationIcon from "../../../assets/images/pharmacy-new/icons/lab-02-formulation.svg";
import lab03PharmacologyIcon from "../../../assets/images/pharmacy-new/icons/lab-03-pharmacology.svg";
import lab04PharmacognosyIcon from "../../../assets/images/pharmacy-new/icons/lab-04-pharmacognosy.svg";
import lab05MicrobiologyIcon from "../../../assets/images/pharmacy-new/icons/lab-05-microbiology.svg";
import lab06ResearchIcon from "../../../assets/images/pharmacy-new/icons/lab-06-research.svg";
import industryVisitBaddi from "../../../assets/images/pharmacy-new/industry-visit/industrial-visit-to-baddi-himachal-pradesh.webp";
import industryVisitCimap from "../../../assets/images/pharmacy-new/industry-visit/visit-to-csir-cimap.webp";
import industryVisitJedux from "../../../assets/images/pharmacy-new/industry-visit/industrial-visit-to-jedux-parenteral-ltd.webp";
import workshopBeyondBasics from "../../../assets/images/pharmacy-new/workshops/beyond-the-basics-hands-on-training-in-viscosity-analysis-and-micromeritic-characterization.webp";
import workshopDnaFingerprinting from "../../../assets/images/pharmacy-new/workshops/dna-fingerprinting-a-boon-to-forensic-sciences.webp";
import workshopStressLeadership from "../../../assets/images/pharmacy-new/workshops/stress-to-strength-find-a-leader-in-you.webp";
import workshopTabletHardness from "../../../assets/images/pharmacy-new/workshops/determining-the-hardness-of-different-types-of-tablets.webp";
import workshopTabletFriability from "../../../assets/images/pharmacy-new/workshops/evaluation-of-tablet-mechanical-strength-focus-on-friability-testing.webp";
import pharmaceuticalResearch from "../../../assets/images/academics/institutes/researchdevelopment.webp";
import researchCollaboration from "../../../assets/images/academics/institutes/researchCollaboration.webp";
import medicalFacility from "../../../assets/images/new-labo/medical-facility.webp";

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

const pharmacyFaculty = instituteOfPharmacyNewData.facultySection?.members ?? [];

export const instituteOfPharmaceuticalSciencesNewData: CustomDepartmentNewData = {
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
        title: "Pharmaceutical Sciences",
        backgroundImage: pharmacyBanner,
        stats: [
            { v: "03", l: "Programme Pathways", delay: "0ms" },
            { v: "07", l: "Key Laboratory Facilities", delay: "90ms" },
            { v: "12", l: "Featured Academic Events", delay: "180ms" },
            { v: "04", l: "M.Pharm Specialisations", delay: "270ms" },
        ],
        quickStats: [
            { value: "03", label: "Programme Pathways" },
            { value: "07", label: "Laboratory Facilities" },
            { value: "12", label: "Featured Academic Events" },
            { value: "04", label: "M.Pharm Specialisations" },
        ],
    },
    overview: {
        headingBefore: "About the",
        headingHighlight: "Institute",
        subtitle: "Pharmaceutical Sciences at SRMU",
        paragraphs: [
            "The Institute of Pharmaceutical Sciences aims to develop knowledgeable and responsible pharmacy professionals equipped to contribute to pharmaceutical education, research, industry, hospitals, and healthcare services.",
            "The institute emphasizes a blend of classroom instruction and practical training. Students are introduced to key areas of pharmaceutical sciences, including pharmaceutics, pharmaceutical chemistry, pharmacology, pharmacognosy, and pharmaceutical analysis.",
            "Through academic collaborations, expert interactions, industrial visits, and research opportunities, the institute encourages students to connect pharmaceutical concepts with their applications in drug development, formulation, quality evaluation, and healthcare.",
        ],
        preview: "The Institute of Pharmaceutical Sciences connects pharmaceutical education with laboratory practice, research, industry exposure, and healthcare services.",
        image: pharmaceuticalOverview,
        imageAlt: "Pharmaceutical sciences laboratory and research learning",
    },
    missionVision: {
        missionItems: [
            "To develop competent pharmacy professionals through quality education, practical training, research, and industry-oriented learning.",
            "Enhance students' creativity, motivation, and professional capabilities.",
            "Build a strong connection between academics, research, and the pharmaceutical industry.",
            "Provide practical exposure through training, internships, and expert interactions.",
            "Encourage self-learning, professional ethics, and continuous development.",
            "Prepare students to contribute responsibly to the pharmaceutical and healthcare sectors.",
        ],
        visionText: "To provide a value-driven educational environment that develops quality professionals in pharmacy education, research, industry, hospitals, and other healthcare-related fields, contributing to the well-being of society.",
    },
    programHeadingBefore: "Explore",
    programHeadingHighlight: "Programmes",
    programs: [
        {
            category: "Diploma & Undergraduate Programmes",
            mobileLabel: "Diploma & UG",
            badge: "Pharmacy Programmes",
            icon: Pill,
            programs: [
                { title: "Bachelor of Pharmacy (B.Pharm.)", description: "Four-year undergraduate programme. Listed annual tuition fee: ₹145,000; additional applicable charges may apply.", icon: GraduationCap, link: "/program/bpharm-bachelor-of-pharmacy" },
                { title: "Diploma in Pharmacy (D.Pharm.)", description: "Two-year diploma programme. Listed annual tuition fee: ₹92,000; additional applicable charges may apply.", icon: Pill, link: "/diploma-pharmacy-new" },
            ],
        },
        {
            category: "Postgraduate Programmes",
            mobileLabel: "Postgraduate",
            badge: "M.Pharm Specialisations",
            icon: Microscope,
            programs: [
                { title: "M.Pharm in Pharmaceutics", description: "Postgraduate specialisation in pharmaceutics.", icon: FlaskConical, link: "/m-pharm-in-pharmaceutics" },
                { title: "M.Pharm in Pharmacology", description: "Postgraduate specialisation in pharmacology.", icon: Activity, link: "/m-pharm-in-pharmacology" },
                { title: "M.Pharm in Pharmacognosy", description: "Postgraduate specialisation in pharmacognosy.", icon: BookOpen, link: "/m-pharm-in-pharmacognosy" },
                { title: "M.Pharm in Pharmaceutical Chemistry", description: "Postgraduate specialisation in pharmaceutical chemistry.", icon: Microscope, link: "/m-pharm-in-pharmaceutical-chemistry" },
            ],
        },
    ],
    labs: {
        headingBefore: "Laboratories &",
        headingHighlight: "Research Facilities",
        intro: "Pharmaceutical education requires a strong understanding of drug formulation, chemical analysis, biological systems, and quality evaluation. The institute supports practical learning through specialized laboratories and research facilities.",
        items: [
            { num: "01", title: "Pharmaceutical Chemistry Lab", desc: "Supports learning in medicinal chemistry, drug synthesis, and chemical evaluation.", accent: "#d62c2b", iconSrc: lab01ChemistryIcon, animClass: "lab-icon-orbital" },
            { num: "02", title: "Physiology and Human Anatomy Lab", desc: "Introduces students to the structure and functioning of the human body.", accent: "#1B4F91", icon: Activity, animClass: "lab-icon-pulse" },
            { num: "03", title: "Pharmacognosy Lab", desc: "Provides exposure to medicinal plants, natural products, and herbal drug materials.", accent: "#14284E", iconSrc: lab04PharmacognosyIcon, animClass: "lab-icon-float" },
            { num: "04", title: "Pharmacology Lab", desc: "Supports the study of drug actions, effects, and biological responses.", accent: "#d62c2b", iconSrc: lab03PharmacologyIcon, animClass: "lab-icon-stack" },
            { num: "05", title: "Pharmaceutical Microbiology Lab", desc: "Covers microorganisms and their relevance to pharmaceutical products and processes.", accent: "#1B4F91", iconSrc: lab05MicrobiologyIcon, animClass: "lab-icon-glow" },
            { num: "06", title: "Pharmaceutics Lab", desc: "Provides practical exposure to dosage forms, formulation development, and pharmaceutical preparations.", accent: "#14284E", iconSrc: lab02FormulationIcon, animClass: "lab-icon-network" },
            { num: "07", title: "Research Lab", desc: "Supports research-oriented learning and experimental work.", accent: "#d62c2b", iconSrc: lab06ResearchIcon, animClass: "lab-icon-orbital" },
        ],
    },
    events: {
        headingBefore: "From Classroom Learning to",
        headingHighlight: "Industry Exposure",
        sectionSubtitle: "",
        intro: "",
        cards: [
            card("INTERNATIONAL CONFERENCE", "International Conference on Sustainable Development", "The conference provided an academic platform for discussions on sustainability, research, and emerging approaches to contemporary environmental and developmental challenges.", researchCollaboration, "9–11 April 2026"),
            card("COMMUNITY HEALTH ACTIVITY", "Health Camp on Pharma Anveshan", "The activity connected pharmaceutical education with healthcare awareness and community engagement.", medicalFacility, "13 March 2026"),
            card("RESEARCH LABORATORY VISIT", "Research Laboratory Visit to CDRI, Lucknow", "Students visited the Central Drug Research Institute to gain exposure to research activities and scientific work in pharmaceutical and allied disciplines.", pharmaceuticalResearch, "19 March 2026"),
            card("GUEST LECTURE", "Guest Lecture on CPCSEA Guidelines", "The session introduced students to guidelines and ethical considerations concerning the use of animals in scientific research and experimentation.", workshopDnaFingerprinting, "23 July 2025"),
            card("INDUSTRIAL VISIT", "Industrial Visit to Akums, Haridwar", "The visit offered students exposure to the pharmaceutical industry and an opportunity to understand pharmaceutical manufacturing and industrial operations.", industryVisitBaddi, "1 March 2025"),
            card("RESEARCH LABORATORY VISIT", "Research Laboratory Visit to CSIR-CIMAP, Lucknow", "Students visited CSIR-CIMAP to gain exposure to research involving medicinal and aromatic plants and their applications.", industryVisitCimap, "28 February 2025"),
            card("INTERNATIONAL CONFERENCE", "International Conference", "The institute organized an international conference at the university, providing an academic platform for knowledge sharing and research discussions.", researchCollaboration, "24–25 February 2025"),
            card("ACADEMIC COLLABORATION", "MoU with SND Regenic Pvt. Ltd., Japan", "The collaboration reflects the institute's efforts to develop academic and professional connections that support pharmaceutical learning and research.", pharmaceuticalResearch, "23 January 2025"),
            card("ACADEMIC-INDUSTRY COLLABORATION", "MoU with Jedux Parenterals Pvt. Ltd.", "The collaboration supports the institute's focus on strengthening academic-industry interaction and providing opportunities for practical exposure.", industryVisitJedux, "31 August 2024"),
            card("INDUSTRIAL VISIT", "Industrial Visit to Kunal Remedies Pvt. Ltd.", "The visit familiarized students with pharmaceutical industry operations and practical aspects of medicine production.", industryVisitBaddi, "6 April 2024"),
            card("RESEARCH LABORATORY VISIT", "Research Laboratory Visit to CBMR, Lucknow", "Students gained exposure to biomedical research facilities and scientific approaches used in interdisciplinary healthcare research.", pharmaceuticalResearch, "11 April 2024"),
            card("GUEST LECTURE", "Guest Lecture on Radiopharmaceutical Devices in Product Development", "The session introduced students to radiopharmaceutical applications and their relevance in product development.", workshopBeyondBasics, "23 February 2024"),
        ],
    },
    highlights: {
        headingBefore: "What Makes the",
        headingHighlight: "Institute Different?",
        items: [
            { num: "01", title: "Industry-Oriented Pharmaceutical Education", desc: "The institute aims to connect academic learning with pharmaceutical industry requirements through practical training, industry interactions and professional exposure.", icon: Factory },
            { num: "02", title: "Specialised Laboratory Facilities", desc: "Dedicated laboratories support practical learning in pharmaceutics, pharmacology, pharmaceutical chemistry, pharmacognosy and related areas.", icon: FlaskConical },
            { num: "03", title: "Research and Innovation", desc: "Research activities and academic collaborations encourage students to explore emerging pharmaceutical technologies and scientific applications.", icon: Microscope },
            { num: "04", title: "Expert-Led Academic Interactions", desc: "Guest lectures and academic events provide opportunities to learn from professionals, researchers and subject experts.", icon: UsersRound },
            { num: "05", title: "Professional and Ethical Development", desc: "The institute emphasises scientific understanding, professional responsibility, communication and ethical practices required in pharmaceutical careers.", icon: ShieldCheck },
            { num: "06", title: "NEP-Aligned Learning", desc: "The academic framework incorporates the UGC Curriculum Framework, Choice Based Credit System and NEP 2020, as described on the institute's website.", icon: Lightbulb },
        ],
    },
    career: {
        heading: "Career Opportunities",
        items: [
            ["Pharmacy", "Assistant"],
            ["Community Pharmacy", "Professional"],
            ["Hospital Pharmacy", "Support"],
            ["Pharmacy Store", "Executive"],
            ["Medical Store", "Entrepreneur"],
            ["Pharmacist"],
            // ["Production", "Executive"],
            // ["Quality Control", "Analyst"],
            ["Quality Assurance", "Executive"],
            ["Pharmaceutical Research", "Associate"],
            // ["Regulatory Affairs", "Associate"],
            ["Clinical Research", "Associate"],
            ["Pharmacovigilance", "Associate"],
            ["Medical", "Representative"],
            ["Pharmaceutical Sales", "Executive"],
            ["Formulation Development", "Scientist"],
            ["Research Scientist"],
            ["Pharmacology Research", "Associate"],
            ["Drug Safety", "Associate"],
            ["Pharmaceutical Quality", "Specialist"],
            ["Academic", "Professional"],
            ["Pharmaceutical Development", "Executive"],
        ],
        descriptions: [
            { title: "Pharmacy Assistant", description: "Support routine pharmacy operations within the scope of the role and applicable requirements." },
            { title: "Community Pharmacy Professional", description: "Contribute to community pharmacy services and medicine-related support." },
            { title: "Hospital Pharmacy Support", description: "Support pharmacy operations and medicine services in hospital settings." },
            { title: "Pharmacy Store Executive", description: "Support pharmaceutical store operations, inventory, and product handling." },
            { title: "Medical Store Entrepreneur", description: "Explore medical store entrepreneurship subject to applicable registration and licensing requirements." },
            { title: "Pharmacist", description: "Pursue pharmacist roles subject to the applicable professional registration requirements." },
            { title: "Production Executive", description: "Contribute to pharmaceutical production and medicine manufacturing operations." },
            { title: "Quality Control Analyst", description: "Support testing and quality evaluation of pharmaceutical products." },
            { title: "Quality Assurance Executive", description: "Work with pharmaceutical quality systems, documentation, and compliance processes." },
            { title: "Pharmaceutical Research Associate", description: "Support research activities in pharmaceutical sciences and product development." },
            { title: "Regulatory Affairs Associate", description: "Work with pharmaceutical regulatory documentation and compliance requirements." },
            { title: "Clinical Research Associate", description: "Support clinical research coordination, documentation, and study activities." },
            { title: "Pharmacovigilance Associate", description: "Contribute to medicine safety monitoring and adverse drug reaction reporting." },
            { title: "Medical Representative", description: "Communicate pharmaceutical product information to healthcare professionals." },
            { title: "Pharmaceutical Sales Executive", description: "Support sales and professional outreach across pharmaceutical products and services." },
            { title: "Formulation Development Scientist", description: "Explore formulation development and pharmaceutical product research." },
            { title: "Research Scientist", description: "Contribute to scientific research in pharmaceutical and related disciplines." },
            { title: "Pharmacology Research Associate", description: "Support research on drug actions, effects, and biological responses." },
            { title: "Drug Safety Associate", description: "Support the evaluation and monitoring of medicine safety information." },
            { title: "Pharmaceutical Quality Specialist", description: "Contribute to quality evaluation and standards across pharmaceutical operations." },
            { title: "Academic Professional", description: "Explore teaching and academic opportunities in pharmacy and pharmaceutical sciences." },
            { title: "Pharmaceutical Development Executive", description: "Support pharmaceutical development activities across product and process teams." },
        ],
    },
    facultySection: {
        members: pharmacyFaculty,
        headingText: "Meet the",
        headingHighlight: "Faculty",
        subheading: "Faculty expertise across pharmaceutics, pharmacognosy, pharmaceutical chemistry, and pharmacology supports teaching, research, and professional learning.",
        featuredLabel: "DIRECTOR, INSTITUTE",
        featuredDescription: "The Institute's faculty supports pharmaceutical education, research, laboratory learning, and professional development.",
        profileDescription: "Faculty member at the Institute of Pharmaceutical Sciences, SRMU.",
        showResearchShowcase: false,
    },
    faq: [
        { q: "What programs are offered by the Institute of Pharmaceutical Sciences at SRMU?", a: "The institute's published program information includes D.Pharm and B.Pharm. The university also lists M.Pharm specializations in Pharmaceutics, Pharmacology, Pharmacognosy, and Pharmaceutical Chemistry." },
        { q: "What is the duration of B.Pharm at SRMU?", a: "The B.Pharm program is four years long." },
        { q: "What is the duration of D.Pharm at SRMU?", a: "The D.Pharm program is two years long." },
        { q: "What is the annual fee for B.Pharm at SRMU?", a: "The listed annual tuition fee is ₹145,000. Additional applicable charges may be payable." },
        { q: "What is the annual fee for D.Pharm at SRMU?", a: "The listed annual tuition fee is ₹92,000. Students should check the latest admission fee schedule for applicable additional charges." },
        { q: "Is the B.Pharm program approved by PCI?", a: "SRMU's pharmacy programs are listed under the Pharmacy Council of India approvals on the university's recognition and approvals page. Students should refer to the current approval documents for program-specific details." },
        { q: "What laboratories are available for pharmacy students?", a: "The published B.Pharm program information lists Pharmaceutical Chemistry, Physiology and Human Anatomy, Pharmacognosy, Pharmacology, Pharmaceutical Microbiology, Pharmaceutics, and Research Laboratories." },
        { q: "What are the career options after B.Pharm?", a: "B.Pharm graduates can explore opportunities in pharmaceutical production, quality control, quality assurance, research and development, regulatory affairs, clinical research, pharmacovigilance, and healthcare services." },
        { q: "Does the institute organize industrial visits and research laboratory visits?", a: "Yes. The institute's published event records include visits to pharmaceutical companies and research organizations such as CDRI, CSIR-CIMAP, and CBMR." },
        { q: "Can students pursue higher education after B.Pharm?", a: "Yes. Students can pursue M.Pharm specializations and subsequently explore doctoral research and other advanced academic opportunities, subject to eligibility and program availability." },
        { q: "Where is SRMU located?", a: "Shri Ramswaroop Memorial University is situated on Lucknow–Deva Road, Barabanki, Uttar Pradesh." },
    ],
    showFaculty: true,
    showScholarships: true,
    showBlogs: true,
    showCareerDescriptionCards: false,
};
