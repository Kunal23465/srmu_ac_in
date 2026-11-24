import {
    Cpu,
    Factory,
    FlaskConical,
    GraduationCap,
    Handshake,
    Microscope,
    Pill,
    UsersRound,
} from "lucide-react";
import type { CustomDepartmentNewData } from "../../../customs/department-page-new/CustomDepartmentNew";
import TechCollabImg from "../../../assets/images/new-information-system/Tech-Collaboration_-L-T-EduTech-SRMU.png";
import pharmacyBanner from "../../../assets/images/pharmacy-new/Pharmacy-Banner.webp";
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
import workshopTabletFriability from "../../../assets/images/pharmacy-new/workshops/evaluation-of-tablet-mechanical-strength-focus-on-friability-testing.webp";
import workshopTabletHardness from "../../../assets/images/pharmacy-new/workshops/determining-the-hardness-of-different-types-of-tablets.webp";
import workshopDnaFingerprinting from "../../../assets/images/pharmacy-new/workshops/dna-fingerprinting-a-boon-to-forensic-sciences.webp";
import workshopStressLeadership from "../../../assets/images/pharmacy-new/workshops/stress-to-strength-find-a-leader-in-you.webp";
import abhishekRaj from "../../../assets/images/pharmacy-new/Abhishek Raj.jpg";
import ajeetSingh from "../../../assets/images/pharmacy-new/Ajeet Singh.jpg";
import anupamKumarPal from "../../../assets/images/pharmacy-new/Anupam Kumar Pal.jpg";
import apoorwaSingh from "../../../assets/images/pharmacy-new/Apoorwa Singh.jpg";
import geetikaMishra from "../../../assets/images/pharmacy-new/Geetika Mishra.jpg";
import lavkushKumarPal from "../../../assets/images/pharmacy-new/Lavkush Kumar Pal.jpg";
import manjuPandey from "../../../assets/images/pharmacy-new/Manju Pandey.jpg";
import neerajKumarVerma from "../../../assets/images/pharmacy-new/Neeraj Kumar Verma.png";
import nimishaSingh from "../../../assets/images/pharmacy-new/Nimisha Singh.jpg";
import palakAgarwal from "../../../assets/images/pharmacy-new/Palak Agarwal.jpg";
import pragatiSingh from "../../../assets/images/pharmacy-new/Pragati Singh.jpg";
import pramodChauhan from "../../../assets/images/pharmacy-new/Pramod Chauhan.jpg";
import pratibhaGautam from "../../../assets/images/pharmacy-new/Pratibha Gautam.jpg";
import saritaSingh from "../../../assets/images/pharmacy-new/Sarita Singh.jpg";
import saumyaAwasthi from "../../../assets/images/pharmacy-new/Saumya Awasthi.jpg";
import shikhaShrivastava from "../../../assets/images/pharmacy-new/Shikha Shrivastava.jpg";
import shivangiSharma from "../../../assets/images/pharmacy-new/Shivangi Sharma.jpg";
import shraddhaPandey from "../../../assets/images/pharmacy-new/Shraddha Pandey.jpg";
import shubhamGautam from "../../../assets/images/pharmacy-new/Shubham Gautam.jpg";
import sunilSingh from "../../../assets/images/pharmacy-new/Sunil Singh.jpg";
import sushmaSingh from "../../../assets/images/pharmacy-new/Sushma Singh.jpg";
import yasminKhatoon from "../../../assets/images/pharmacy-new/Yasmin Khatoon.jpg";
import zahidHusain from "../../../assets/images/pharmacy-new/Zahid Husain.jpg";

const image = (index: number) => `/assets/images/new-information-system/${index}.webp`;

export const instituteOfPharmacyNewData: CustomDepartmentNewData = {
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
        title: "Pharmacy",
        backgroundImage: pharmacyBanner,
        stats: [
            { v: "90+", l: "Guest Lectures and\nSeminars", delay: "0ms" },
            { v: "15", l: "Industrial Visits", delay: "90ms" },
            { v: "88+", l: "Research Papers\nPublished by Faculty", delay: "180ms" },
            { v: "12", l: "Workshops Conducted", delay: "270ms" },
        ],
        quickStats: [
            { value: "90+", label: "Guest Lectures and Seminars" },
            { value: "15", label: "Industrial Visits" },
            { value: "88+", label: "Research Papers Published by Faculty" },
            { value: "12", label: "Workshops Conducted" },
        ],
    },
    overview: {
        headingBefore: "About the",
        headingHighlight: "Institute of Pharmacy",
        subtitle: "Building Knowledge for Better Healthcare",
        paragraphs: [
            "The Institute of Pharmacy at Shri Ramswaroop Memorial University (SRMU) prepares students for the evolving pharmaceutical and healthcare sectors through academic learning, laboratory practice, research, and industry exposure.",
            "The programs introduce students to the science behind medicines, from understanding their composition and formulation to studying their quality, safety, and role in patient care. Alongside core pharmaceutical subjects, students get opportunities to interact with industry experts, participate in workshops, explore research, and understand emerging areas such as artificial intelligence in pharmacy.",
            "With 90+ guest lectures and seminars, 15 industrial visits, and 88 research papers published by faculty, the institute encourages students to connect classroom learning with developments in the pharmaceutical field.",
        ],
        preview: "The Institute of Pharmacy at Shri Ramswaroop Memorial University (SRMU) prepares students for the evolving pharmaceutical and healthcare sectors through academic learning, laboratory practice, research, and industry exposure.",
        image: TechCollabImg,
        imageAlt: "",
    },
    missionVision: {
        missionItems: [
            "To provide quality pharmaceutical education through a balanced approach to theoretical knowledge, practical training, and research.",
            "To develop skilled and responsible pharmacy professionals with an understanding of drug development, manufacturing, quality, and patient care.",
            "To encourage innovation, ethical practices, and the use of emerging technologies in pharmaceutical sciences.",
            "To promote industry interaction and community engagement as part of professional learning.",
        ],
        visionText: "To develop competent, research-oriented, and socially responsible pharmacy professionals who contribute to advancements in pharmaceutical sciences, healthcare, and the well-being of society.",
    },
    programHeadingBefore: "Explore",
    programHeadingHighlight: "Programmes",
    programs: [
        {
            category: "Pharmacy Programmes",
            mobileLabel: "Pharmacy",
            badge: "Pharmacy",
            icon: Pill,
            programs: [
                { title: "Bachelor of Pharmacy (B.Pharm.)", description: "A four-year undergraduate program.", icon: GraduationCap, link: "/program/bpharm-bachelor-of-pharmacy" },
                { title: "Diploma in Pharmacy (D.Pharm.)", description: "A two-year diploma program.", icon: Pill, link: "/diploma-pharmacy-new" },
            ],
        },
    ],
    labs: {
        intro: "Pharmaceutical education involves understanding how medicines are formulated, analyzed, evaluated, and used. Practical learning helps students connect scientific concepts with the processes and techniques involved in pharmacy. Through laboratory-based activities, students can develop an understanding of:",
        items: [
            { num: "01", title: "Pharmaceutical Chemistry & Analysis", desc: "Explore the chemical properties of pharmaceutical substances and the methods used to analyze and evaluate them.", accent: "#d62c2b", iconSrc: lab01ChemistryIcon, animClass: "lab-icon-orbital" },
            { num: "02", title: "Pharmaceutics & Drug Formulation", desc: "Understand dosage forms, formulation techniques, and the principles behind drug delivery systems.", accent: "#1B4F91", iconSrc: lab02FormulationIcon, animClass: "lab-icon-pulse" },
            { num: "03", title: "Pharmacology & Drug Evaluation", desc: "Study how drugs interact with biological systems and understand their effects and applications.", accent: "#14284E", iconSrc: lab03PharmacologyIcon, animClass: "lab-icon-float" },
            { num: "04", title: "Pharmacognosy & Medicinal Plants", desc: "Explore natural sources of medicines, medicinal plant constituents, and their relevance to pharmaceutical research.", accent: "#d62c2b", iconSrc: lab04PharmacognosyIcon, animClass: "lab-icon-stack" },
            { num: "05", title: "Pharmaceutical Microbiology", desc: "Understand microorganisms and their significance in pharmaceutical products and practices.", accent: "#1B4F91", iconSrc: lab05MicrobiologyIcon, animClass: "lab-icon-glow" },
            { num: "06", title: "Research & Experimental Learning", desc: "Develop familiarity with scientific methods, experimentation, observation, and pharmaceutical evaluation.", accent: "#14284E", iconSrc: lab06ResearchIcon, animClass: "lab-icon-network" },
        ],
    },
    highlights: {
        headingBefore: "What Makes Pharmacy Learning Different at",
        headingHighlight: "SRMU?",
        items: [
            { num: "01", title: "AI IN PHARMACY", desc: "Artificial intelligence is creating new possibilities in drug discovery, pharmaceutical development, manufacturing, and patient care. Students get exposure to these developments through expert interactions and academic sessions on emerging pharmaceutical technologies.", icon: Cpu },
            { num: "02", title: "PHARMACEUTICAL RESEARCH", desc: "Explore research in medicinal plants, active pharmaceutical constituents, drug delivery systems, and formulation development. Faculty research publications introduce students to ongoing work in pharmaceutical sciences.", icon: Microscope },
            { num: "03", title: "LABORATORY EXPERIENCE", desc: "Connect classroom concepts with practical learning through experiments, pharmaceutical testing, formulation studies, and laboratory-based activities.", icon: FlaskConical },
            { num: "04", title: "INDUSTRY CONNECT", desc: "Understand pharmaceutical manufacturing, quality control, quality assurance, and industrial operations through expert sessions and visits to pharmaceutical companies and research organizations.", icon: Factory },
            { num: "05", title: "COMMUNITY OUTREACH PROGRAMMES", desc: "Understand the social responsibilities of pharmacy professionals through community engagement, NGO visits, and activities that connect education with society.", icon: UsersRound },
            { num: "06", title: "MOUs & COLLABORATIONS", desc: "Academic and industry collaborations can support expert interactions, knowledge exchange, research opportunities, and professional exposure. Details of confirmed partnerships and activities can be explored here.", icon: Handshake },
        ],
    },
    events: {
        headingBefore: "From Classroom Concepts to",
        headingHighlight: "Real-World Applications",
        sectionSubtitle: "90+ Guest Lectures and Seminars Conducted",
        intro: "Guest lectures, seminars, industrial visits, workshops, and research activities give students opportunities to explore different aspects of pharmaceutical sciences and understand how academic knowledge connects with professional practice. The Institute regularly organizes expert sessions that introduce students to emerging technologies, professional skills, pharmaceutical developments, and academic research.",
        cardsEyebrow: "GUEST LECTURES",
        cardsHeading: "",
        cardsSubheading: "Featured Guest Lectures",
        cardsIntro: "",
        cards: [
            {
                tag: "GUEST LECTURE",
                title: "AI and the Future Pharmacist: Innovations in Pharmaceutical Technology, AI and Advanced Printing Systems",
                speaker: "Dr. Md. Yaqub Khan Post-Doctoral Researcher, National Central University, Taiwan 8 June 2026 | 28 Participants",
                shortDesc: "The session explored how artificial intelligence and advanced printing systems are influencing pharmaceutical technology, including drug discovery, development, manufacturing, and patient care.",
                readMore: "The session explored how artificial intelligence and advanced printing systems are influencing pharmaceutical technology, including drug discovery, development, manufacturing, and patient care.",
                img: image(1),
            },
            {
                tag: "GUEST LECTURE",
                title: "The Power of Effective Communication: From Interaction to Impact",
                speaker: "Mr. Priyank Jain Indira Gandhi Delhi Technical University for Women, New Delhi 12 September 2026 | 90 Participants",
                shortDesc: "The session focused on effective communication, building professional connections, and developing the ability to create a positive impact through everyday interactions.",
                readMore: "The session focused on effective communication, building professional connections, and developing the ability to create a positive impact through everyday interactions.",
                img: image(2),
            },
            {
                tag: "GUEST LECTURE",
                title: "Speak with Impact: Mastering the Art of Public Speaking",
                speaker: "Ms. Shikha Singh Visiting Faculty, Indira Gandhi Delhi Technical University for Women, New Delhi 17 September 2026 | 57 Participants",
                shortDesc: "Students explored how to communicate ideas with clarity and confidence, engage an audience, and strengthen public speaking skills for academic and professional settings.",
                readMore: "Students explored how to communicate ideas with clarity and confidence, engage an audience, and strengthen public speaking skills for academic and professional settings.",
                img: image(3),
            },
        ],
    },
    activitySections: [
        {
            id: "seminars-webinars",
            eyebrow: "Seminars & Webinars",
            heading: "Featured Knowledge Sessions",
            cards: [
                { tag: "SEMINAR & WEBINAR", title: "Webinar on Intellectual Property Rights (IPR)", speaker: "Dr. Pulipati Sowjanya Professor and Dean, IQAC, Vignan College of Pharmacy, Andhra Pradesh 1 September 2025 | 405 Participants", shortDesc: "The webinar introduced participants to intellectual property rights and their importance in protecting original ideas, inventions, and innovations in academic and professional fields.", readMore: "The webinar introduced participants to intellectual property rights and their importance in protecting original ideas, inventions, and innovations in academic and professional fields.", img: image(4) },
                { tag: "SEMINAR & WEBINAR", title: "Webinar on IPR - Process of Filing", speaker: "Dr. Shikha Singh Associate Professor, MMMUT 18 March 2026 | 101 Participants", shortDesc: "The session discussed the process of filing intellectual property rights and helped students and faculty understand how research ideas and innovations can be protected.", readMore: "The session discussed the process of filing intellectual property rights and helped students and faculty understand how research ideas and innovations can be protected.", img: image(5) },
                { tag: "SEMINAR & WEBINAR", title: "Webinar on International Women's Day 2026", speaker: "Organized with APTI and the APTI Women's Forum Dr. Smriti Ojha Professor, Department of Pharmaceutical Science and Technology, MMMUT, Gorakhpur 9 March 2026 | 77 Participants", shortDesc: "The webinar highlighted women's contributions to pharmaceutical academia, research, and healthcare, with a focus on leadership, mentorship, and professional growth.", readMore: "The webinar highlighted women's contributions to pharmaceutical academia, research, and healthcare, with a focus on leadership, mentorship, and professional growth.", img: image(6) },
            ],
        },
        {
            id: "industry-exposure",
            eyebrow: "Industry Exposure",
            heading: "15 Industrial Visits Conducted to Date",
            intro: "Industrial visits help students understand how pharmaceutical knowledge is applied in real working environments. They provide exposure to manufacturing processes, formulation development, quality control, quality assurance, packaging, storage, and industrial practices.",
            listTitle: "Other Organizations and Institutions Visited:",
            listItems: ["CSIR-Central Drug Research Institute (CSIR-CDRI)", "National Botanical Research Institute (NBRI)", "Central Institute of Medicinal and Aromatic Plants (CIMAP)", "Biotech Park", "Patanjali Food and Herbal", "Akums Pharmaceuticals"],
            cards: [
                { tag: "INDUSTRIAL VISIT", title: "Visit to CSIR-CIMAP", speaker: "29 September 2026", shortDesc: "The visit, titled Unveiling the Science behind Medicinal Plants and Drug Discovery, introduced students and faculty to the role of medicinal plants in traditional therapeutic practices and modern drug discovery.", readMore: "The visit, titled Unveiling the Science behind Medicinal Plants and Drug Discovery, introduced students and faculty to the role of medicinal plants in traditional therapeutic practices and modern drug discovery.", img: industryVisitCimap },
                { tag: "INDUSTRIAL VISIT", title: "Industrial Visit to Baddi, Himachal Pradesh", speaker: "15 - 19 March 2026", shortDesc: "B.Pharm. students visited ANG Lifesciences India Ltd., Medicef Pharma, Glenmark Pharmaceuticals Ltd., and Oxigen Analytical Laboratories. The visit provided insights into pharmaceutical manufacturing, quality control, quality assurance, and industrial operations.", readMore: "B.Pharm. students visited ANG Lifesciences India Ltd., Medicef Pharma, Glenmark Pharmaceuticals Ltd., and Oxigen Analytical Laboratories. The visit provided insights into pharmaceutical manufacturing, quality control, quality assurance, and industrial operations.", img: industryVisitBaddi },
                { tag: "INDUSTRIAL VISIT", title: "Industrial Visit to Jedux Parenteral Ltd.", speaker: "27 April 2026", shortDesc: "Students gained practical exposure to the manufacturing of sterile pharmaceutical products, including injections and infusions. The visit highlighted the importance of controlled manufacturing environments and stringent quality standards.", readMore: "Students gained practical exposure to the manufacturing of sterile pharmaceutical products, including injections and infusions. The visit highlighted the importance of controlled manufacturing environments and stringent quality standards.", img: industryVisitJedux },
            ],
        },
    ],
    studentProjects: {
        eyebrow: "PROJECTS BY STUDENTS",
        heading: "Putting Pharmaceutical Knowledge into Practice",
        description: "Student projects provide opportunities to explore pharmaceutical concepts, investigate research questions, and apply classroom learning to practical problems. Through project-based learning, students can develop analytical thinking, research skills, and a better understanding of pharmaceutical sciences.",
        image: image(6),
        imageAlt: "",
    },
    research: {
        eyebrow: "Research & Publications",
        heading: "88+ Research Papers Published by Faculty",
        description: "Faculty research at the Institute of Pharmacy covers areas such as medicinal plant constituents, drug delivery systems, formulation development, and pharmaceutical evaluation.",
        cards: [
            { tag: "RESEARCH & PUBLICATIONS", title: "Extraction, Identification, and Isolation of Active Constituents from Curcuma longa and Solanum nigrum", speaker: "Authors: Neeraj Kumar Verma and Prof. (Dr.) Manju Pandey Journal: International Journal of Research and Analytical Reviews (IJRAR)", shortDesc: "Authors: Neeraj Kumar Verma and Prof. (Dr.) Manju Pandey Journal: International Journal of Research and Analytical Reviews (IJRAR)", readMore: "Authors: Neeraj Kumar Verma and Prof. (Dr.) Manju Pandey Journal: International Journal of Research and Analytical Reviews (IJRAR)", img: image(4) },
            { tag: "RESEARCH & PUBLICATIONS", title: "Design and Development of Submicron Emulsion for Delivery of Itraconazole: Characterization and In-Vitro Bioassay", speaker: "Author: Dr. Sushma Singh Journal: India Drugs Journal", shortDesc: "Author: Dr. Sushma Singh Journal: India Drugs Journal", readMore: "Author: Dr. Sushma Singh Journal: India Drugs Journal", img: image(5) },
            { tag: "RESEARCH & PUBLICATIONS", title: "Gemfibrozil Polyspheres with Crosslinked Guar Gum for Sustained Release: Formulation, Characterization, and In-Vivo Lipid Lowering Activity", speaker: "Authors: Apurwa Singh and Shikha Srivastava Journal: Current Cardiology Reviews", shortDesc: "Authors: Apurwa Singh and Shikha Srivastava Journal: Current Cardiology Reviews", readMore: "Authors: Apurwa Singh and Shikha Srivastava Journal: Current Cardiology Reviews", img: image(6) },
        ],
    },
    workshops: {
        eyebrow: "Workshops",
        heading: "12 Workshops Conducted",
        description: "Workshops give students opportunities to understand laboratory techniques, explore pharmaceutical testing methods, and strengthen their practical knowledge.",
        cards: [
            { tag: "WORKSHOP", title: "Beyond the Basics: Hands-on Training in Viscosity Analysis and Micromeritic Characterization", speaker: "19 September 2026", shortDesc: "B.Pharm. second-year students received practical exposure to viscosity analysis and powder characterization, with a focus on their relevance to pharmaceutical formulation and quality evaluation.", readMore: "B.Pharm. second-year students received practical exposure to viscosity analysis and powder characterization, with a focus on their relevance to pharmaceutical formulation and quality evaluation.", img: workshopBeyondBasics },
            { tag: "WORKSHOP", title: "Evaluation of Tablet Mechanical Strength: Focus on Friability Testing", speaker: "8 April 2026", shortDesc: "The workshop introduced students to tablet friability testing and its importance in assessing tablet durability and mechanical strength.", readMore: "The workshop introduced students to tablet friability testing and its importance in assessing tablet durability and mechanical strength.", img: workshopTabletFriability },
            { tag: "WORKSHOP", title: "Determining the Hardness of Different Types of Tablets", speaker: "8 August 2025", shortDesc: "Students explored tablet hardness testing and its role in pharmaceutical quality control.", readMore: "Students explored tablet hardness testing and its role in pharmaceutical quality control.", img: workshopTabletHardness },
            { tag: "WORKSHOP", title: "DNA Fingerprinting: A Boon to Forensic Sciences", speaker: "7 December 2022", shortDesc: "The workshop introduced students to the fundamental principles, techniques, and applications of DNA fingerprinting in forensic investigations, highlighting its role in criminal identification, evidence analysis, and modern forensic science.", readMore: "The workshop introduced students to the fundamental principles, techniques, and applications of DNA fingerprinting in forensic investigations, highlighting its role in criminal identification, evidence analysis, and modern forensic science.", img: workshopDnaFingerprinting },
            { tag: "WORKSHOP", title: "Stress to Strength: Find a Leader in You", speaker: "13 December 2022", shortDesc: "The workshop focused on developing stress management skills, building self-confidence, and nurturing leadership qualities among students. It encouraged participants to overcome challenges positively, recognize their potential, and strengthen essential skills for personal and professional growth.", readMore: "The workshop focused on developing stress management skills, building self-confidence, and nurturing leadership qualities among students. It encouraged participants to overcome challenges positively, recognize their potential, and strengthen essential skills for personal and professional growth.", img: workshopStressLeadership },
        ],
    },
    career: {
        heading: "Career Opportunities",
        items: [
            ["Pharmaceutical", "Production"],
            ["Quality Control", "(QC)"],
            ["Quality Assurance", "(QA)"],
            ["Research &", "Development"],
            ["Hospital &", "Community Pharmacy"],
            ["Clinical Research"],
            ["Regulatory Affairs"],
            ["Pharmacovigilance"],
        ],
        descriptions: [
            { title: "Pharmaceutical Production", description: "Work with medicine manufacturing, formulation processes, and production operations." },
            { title: "Quality Control (QC)", description: "Support the testing and evaluation of pharmaceutical products for quality and consistency." },
            { title: "Quality Assurance (QA)", description: "Work with quality systems, documentation, standard operating procedures, and compliance practices." },
            { title: "Research & Development", description: "Explore research activities involving drug formulation, drug delivery, and pharmaceutical innovation." },
            { title: "Hospital & Community Pharmacy", description: "Contribute to dispensing practices and patient-focused pharmacy services." },
            { title: "Clinical Research", description: "Explore opportunities in clinical trial coordination, research documentation, and related activities, subject to required qualifications." },
            { title: "Regulatory Affairs", description: "Work with pharmaceutical documentation, regulatory submissions, and compliance requirements." },
            { title: "Pharmacovigilance", description: "Contribute to medicine safety monitoring and adverse drug reaction reporting." },
        ],
    },
    community: {
        eyebrow: "Community Outreach Programmes",
        heading: "Learning Beyond the Classroom. Connecting with Society.",
        paragraphs: [
            "Pharmacy is closely connected with public health and community well-being. Community outreach activities help students understand the social responsibilities of healthcare professionals and the importance of engaging with people beyond the classroom. Through community engagement and NGO visits, students can develop awareness of social needs and the role of healthcare education in society.",
            "",
        ],
        focusTitle: "Focus Areas:",
        focusAreas: ["Community Engagement", "Health and Medicine Awareness", "Social Responsibility", "NGO Visits and Community Interaction"],
    },
    faq: [
        { q: "What programs are offered by the Institute of Pharmacy at SRMU?", a: "The Institute of Pharmacy offers a Bachelor of Pharmacy (B.Pharm.), a four-year undergraduate program, and a Diploma in Pharmacy (D.Pharm.), a two-year diploma program." },
        { q: "How many guest lectures and seminars have been conducted by the Institute of Pharmacy?", a: "The Institute of Pharmacy has conducted more than 90 guest lectures and seminars covering pharmaceutical technology, artificial intelligence, intellectual property rights, communication skills, and other relevant topics." },
        { q: "Does SRMU provide industrial exposure to pharmacy students?", a: "Yes. The Institute has conducted 15 industrial visits to date, including visits to Jedux Parenteral Ltd., CSIR-CDRI, CSIR-CIMAP, and pharmaceutical organizations in Baddi, Himachal Pradesh." },
        { q: "How many research papers have been published by the Institute of Pharmacy faculty?", a: "Faculty members of the Institute of Pharmacy have published more than 88 research papers till date." },
        { q: "Are workshops organized for pharmacy students?", a: "Yes. The Institute has conducted 12 workshops covering practical topics such as viscosity analysis, micromeritic characterization, tablet hardness, friability testing, DNA fingerprinting, stress management, and leadership development." },
        { q: "How is artificial intelligence relevant to pharmacy?", a: "Artificial intelligence is influencing areas such as drug discovery, pharmaceutical development, manufacturing, and patient care. The Institute has organized an expert lecture on AI and the future of pharmacy to introduce students to these developments." },
        { q: "What practical learning opportunities are available to pharmacy students?", a: "Students can gain practical exposure through laboratory activities, workshops, industrial visits, research-related activities, and expert interactions." },
        { q: "What career options are available after studying pharmacy?", a: "Depending on their qualification and further specialization, students can explore opportunities in pharmaceutical production, quality control, quality assurance, research and development, hospital and community pharmacy, regulatory affairs, and pharmacovigilance." },
        { q: "Does the Institute organize community outreach activities?", a: "The Institute's activity information includes an NGO visit. Students can explore community engagement and outreach activities through the Institute's event updates." },
        { q: "How can I apply for B.Pharm. or D.Pharm. at SRMU?", a: "Students can visit the SRMU admission portal to check the latest program eligibility, fee structure, scholarship details, and application process." },
    ],
    showCareerDescriptionCards: false,
    facultySection: {
        members: [
            {
                name: "Prof. (Dr.) Manju Pandey",
                role: "Director, IOP",
                img: manjuPandey,
                isHod: true,
                specialization: ["Pharmaceutics"],
                expertise: "Expertise in pharmaceutical formulation, drug development, and quality evaluation.",
            },
            { name: "Prof. (Dr.) Sunil Singh", role: "Professor", img: sunilSingh, specialization: ["Pharmacognosy"] },
            { name: "Prof. (Dr.) Yasmin Khatoon", role: "Professor", img: yasminKhatoon, specialization: ["Pharmaceutical Chemistry"] },
            { name: "Dr. Shikha Shrivastava", role: "Professor", img: shikhaShrivastava, specialization: ["Pharmaceutics"] },
            { name: "Dr. Neeraj Kumar Verma", role: "Associate Professor", img: neerajKumarVerma, specialization: ["Pharmaceutics"] },
            { name: "Dr. Sarita Singh", role: "Associate Professor", img: saritaSingh, specialization: ["Pharmacology"] },
            { name: "Dr. Sushma Singh", role: "Associate Professor", img: sushmaSingh, specialization: ["Pharmacology"] },
            { name: "Mr. Zahid Husain", role: "Associate Professor", img: zahidHusain, specialization: ["Pharmaceutics"] },
            { name: "Ms. Shraddha Pandey", role: "Associate Professor", img: shraddhaPandey, specialization: ["Pharmaceutics"] },
            { name: "Mr. Pramod Chauhan", role: "Assistant Professor", img: pramodChauhan, specialization: ["Pharmaceutical Chemistry"] },
            { name: "Ms. Nimisha Singh", role: "Assistant Professor", img: nimishaSingh, specialization: ["Pharmaceutics"] },
            { name: "Ms. Shivangi Sharma", role: "Assistant Professor", img: shivangiSharma, specialization: ["Pharmaceutics"] },
            { name: "Ms. Saumya Awasthi", role: "Assistant Professor", img: saumyaAwasthi, specialization: ["Pharmacology"] },
            { name: "Mr. Shubham Gautam", role: "Assistant Professor", img: shubhamGautam, specialization: ["Pharmaceutical Chemistry"] },
            { name: "Ms. Pragati Singh", role: "Assistant Professor", img: pragatiSingh, specialization: ["Pharmacology"] },
            { name: "Ms. Geetika Mishra", role: "Assistant Professor", img: geetikaMishra, specialization: ["Pharmaceutical Chemistry"] },
            { name: "Mr. Anupam Kumar Pal", role: "Assistant Professor", img: anupamKumarPal, specialization: ["Pharmaceutics"] },
            { name: "Mr. Ajeet Singh", role: "Assistant Professor", img: ajeetSingh, specialization: ["Pharmacology"] },
            { name: "Ms. Apoorwa Singh", role: "Assistant Professor", img: apoorwaSingh, specialization: ["Pharmaceutics"] },
            { name: "Ms. Palak Agarwal", role: "Assistant Professor", img: palakAgarwal, specialization: ["Pharmacology"] },
            { name: "Mr. Lavkush Kumar Pal", role: "Assistant Professor", img: lavkushKumarPal, specialization: ["Pharmaceutical Chemistry"] },
            { name: "Ms. Pratibha Gautam", role: "Assistant Professor", img: pratibhaGautam, specialization: ["Pharmacognosy"] },
            { name: "Mr. Abhishek Raj", role: "Assistant Professor", img: abhishekRaj, specialization: ["Pharmaceutical Chemistry"] },
        ],
        featuredLabel: "DIRECTOR, IOP",
        subheading: "Faculty expertise across pharmaceutics, pharmacognosy, pharmaceutical chemistry, and pharmacology supports teaching, research, and professional learning.",
        featuredDescription: "Expert in pharmaceutical formulation, drug development, and quality evaluation.",
        profileDescription: "Faculty member at the Institute of Pharmacy, SRMU.",
        showResearchShowcase: false,
    },
    showFaculty: true,
    showScholarships: true,
    showBlogs: true,
};
