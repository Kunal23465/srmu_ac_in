import {
    BookOpen,
    BriefcaseBusiness,
    FileText,
    Gavel,
    GraduationCap,
    Landmark,
    Scale,
    UsersRound,
} from "lucide-react";
import type { CustomDepartmentNewData, DepartmentActivityCardNew } from "../../../customs/department-page-new/CustomDepartmentNew";
import { InstituteofLegalStudiesfacultyData } from "../../../data/academics/institute/institute-department/institute-of-legal-studies-data";
import mootCourtImage from "../../../assets/images/academics/departments/mootcourt-06022404053661.webp";
import legalSupportImage from "../../../assets/images/academics/departments/legalsupp-06022404091718.webp";
import legalStudiesImage from "../../../assets/images/academics/departments/legalstudies-06022404143177.webp";
import seminarImage from "../../../assets/images/academics/departments/seminar1-10022412522592.webp";
import workshopImage from "../../../assets/images/academics/departments/workshop4-09052412404740.webp";
import cyberCrimeLectureImage from "../../../assets/new-home/events/cyberCrime.jpeg";
import legalEventImage from "../../../assets/new-home/events/legal_studies.jpeg";
import dileepSinghPortrait from "../../../assets/images/academics/departments/legal-of-studies-new/dileep-singh-portrait.jpg";
import ramKrishnaManiTripathiPortrait from "../../../assets/images/academics/departments/legal-of-studies-new/ram-krishna-mani-tripathi-portrait.jpg";
import anandKumarPortrait from "../../../assets/images/academics/departments/legal-of-studies-new/anand-kumar-portrait.jpg";
import kamaljeetKaurPortrait from "../../../assets/images/academics/departments/legal-of-studies-new/kamaljeet-kaur-portrait.jpg";
import vivekKumarMishraPortrait from "../../../assets/images/academics/departments/legal-of-studies-new/vivek-kumar-mishra-portrait.jpg";
import mahendraKumarPortrait from "../../../assets/images/academics/departments/legal-of-studies-new/mahendra-kumar-portrait.jpg";
import rajatSaxenaPortrait from "../../../assets/images/academics/departments/legal-of-studies-new/rajat-saxena-portrait.jpg";
import prashantKumarPortrait from "../../../assets/images/academics/departments/legal-of-studies-new/prashant-kumar-srivastava-portrait.jpg";
import dravyeshNarayanPathakPortrait from "../../../assets/images/academics/departments/legal-of-studies-new/dravyesh-narayan-pathak-portrait.jpg";
import akankshaTiwariPortrait from "../../../assets/images/academics/departments/legal-of-studies-new/akanksha-tiwari-portrait.jpg";

const activityCard = (
    tag: string,
    title: string,
    shortDesc: string,
    img: string,
    speaker?: string,
): DepartmentActivityCardNew => ({
    tag,
    title,
    shortDesc,
    readMore: shortDesc,
    img,
    ...(speaker ? { speaker } : {}),
});

const portraitFixes: Record<string, string> = {
    "Mr. Dileep Kumar Singh": dileepSinghPortrait,
    "Mr. Ram Krishna Mani Tripathi": ramKrishnaManiTripathiPortrait,
    "Mr. Anand Kumar": anandKumarPortrait,
    "Ms. Kamaljeet Kaur": kamaljeetKaurPortrait,
    "Dr. Vivek Kumar Mishra": vivekKumarMishraPortrait,
    "Dr. Mahendra Kumar": mahendraKumarPortrait,
    "Mr. Rajat Saxena": rajatSaxenaPortrait,
    "Dr. Prashant Kumar": prashantKumarPortrait,
    "Mr. Dravyesh Narayan Pathak": dravyeshNarayanPathakPortrait,
    "Ms. Akanksha Tiwari": akankshaTiwariPortrait,
};

const legalFaculty = InstituteofLegalStudiesfacultyData.map((member, index) => ({
    id: `legal-faculty-${index + 1}`,
    name: member.name,
    role: member.designation,
    img: portraitFixes[member.name] ?? member.image,
    isHod: member.name.includes("Narendra Bahadur Singh"),
}));

export const instituteOfLegalStudiesNewData: CustomDepartmentNewData = {
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
        title: "Legal Studies",
        backgroundImage: mootCourtImage,
        stats: [
            { v: "2", l: "Integrated Law\nProgrammes", delay: "0ms" },
            { v: "4", l: "Core Areas of\nLegal Study", delay: "90ms" },
            { v: "5", l: "Practical Learning\nFormats", delay: "180ms" },
            { v: "5", l: "Featured Activities\nin 2026", delay: "270ms" },
        ],
        quickStats: [
            { value: "2", label: "Integrated Law Programmes" },
            { value: "4", label: "Core Areas of Legal Study" },
            { value: "5", label: "Practical Learning Formats" },
            { value: "5", label: "Featured Activities in 2026" },
        ],
    },
    overview: {
        headingBefore: "About the",
        headingHighlight: "Institute",
        subtitle: "Practice-oriented legal education at SRMU",
        paragraphs: [
            "The Institute of Legal Studies at Shri Ramswaroop Memorial University(SRMU) provides an academic environment for students interested in understanding law, legal systems, and their role in society. Its programmes cover criminal and security law, corporate and commercial law, constitutional and administrative law, and international and comparative law.",
            "The institute follows a practice-oriented approach to legal education. Alongside classroom learning, students take part in moot court exercises, legal literacy initiatives, internships, court visits, seminars, and interactions with members of the legal and judicial community.",
            "Through these activities, the institute aims to prepare students for diverse career paths in litigation, corporate law, legal consultancy, judicial services, policy research, mediation, arbitration, and legal academia.",
        ],
        preview: "The Institute of Legal Studies at Shri Ramswaroop Memorial University provides an academic environment for students interested in law, legal systems, and their role in society.",
        image: legalStudiesImage,
        imageAlt: "Legal studies and digital law resources",
    },
    missionVision: {
        missionItems: [
            "To advance and disseminate knowledge of law and legal processes, and strengthen their role in national development.",
            "Provide students with a strong understanding of legal principles and judicial processes.",
            "Develop professional skills required for advocacy, legal practice, and judicial services, while keeping students informed about developments in law and the legal profession.",
            "Organize seminars, symposiums, conferences, and moot court activities, and prepare students to meet professional and ethical challenges.",
        ],
        visionText: "To provide quality legal education, teaching, and research resources that develop a sense of responsibility among students and research scholars while preparing them to serve society through advocacy, judicial services, and other legal professions.",
    },
    programHeadingBefore: "Explore",
    programHeadingHighlight: "Programmes",
    programs: [
        {
            category: "B.A. + LL.B. (Hons.)",
            mobileLabel: "B.A. + LL.B.",
            badge: "Integrated",
            icon: BookOpen,
            programs: [
                {
                    title: "B.A. + LL.B. (Hons.)",
                    description: "A five-year integrated programme combining undergraduate study with legal education.",
                    icon: Scale,
                    link: "/program/ba-llb-hons",
                },
            ],
        },
        {
            category: "B.B.A. + LL.B. (Hons.)",
            mobileLabel: "B.B.A. + LL.B.",
            badge: "Integrated",
            icon: BriefcaseBusiness,
            programs: [
                {
                    title: "B.B.A. + LL.B. (Hons.)",
                    description: "A five-year integrated programme combining business and management study with legal education.",
                    icon: Landmark,
                    link: "/program/bba-llb-hons",
                },
            ],
        },
    ],
    labs: {
        headingBefore: "Practical Learning Through",
        headingHighlight: "Moot Courts and Legal Training",
        intro: "Legal education requires more than an understanding of statutes and case law. The institute emphasizes practical exercises that help students develop advocacy, legal drafting, research, argumentation, and courtroom communication skills.",
        // learningAreasHeading: "Other Practical Learning Opportunities",
        // learningAreas: [
        //     "Court visits and observation of judicial proceedings.",
        //     "Internships and professional interactions.",
        //     "Legal literacy camps and community outreach.",
        //     "Seminars, conferences, and expert-led discussions.",
        //     "Trial advocacy and legal drafting exercises.",
        // ],
        items: [
            { num: "01", title: "Moot Court Room", desc: "The institute has a well-equipped moot court room where students participate in simulated court proceedings. Regular moot court exercises help students practice case analysis and legal research; preparation of memorials and written submissions; oral advocacy and legal arguments; courtroom etiquette and procedural understanding; and presentation of cases from opposing perspectives.", accent: "#d62c2b", icon: Gavel, animClass: "lab-icon-orbital" },
            { num: "02", title: "Legal Aid Clinic", desc: "The Legal Aid Clinic provides a platform for legal awareness and community-oriented activities. Students and faculty members participate in initiatives that promote understanding of legal rights, access to justice, and constitutional values.", accent: "#1B4F91", icon: Scale, animClass: "lab-icon-pulse" },
        ],
    },
    highlights: {
        headingBefore: "What Makes the",
        headingHighlight: "Institute Different?",
        items: [
            { num: "01", title: "Practice-Oriented Legal Education", desc: "Students develop practical legal skills through moot courts, trial advocacy, case preparation and courtroom simulations.", icon: Gavel },
            { num: "02", title: "Dedicated Moot Court Facility", desc: "The well-equipped moot court room provides an environment for practising oral arguments, legal drafting and courtroom procedures.", icon: Landmark },
            { num: "03", title: "Legal Aid and Community Engagement", desc: "The Legal Aid Cell encourages students to understand social justice, constitutional rights and access to legal awareness.", icon: UsersRound },
            { num: "04", title: "Expert-Led Learning", desc: "Interactions with advocates, forensic experts, legal professionals and academic specialists expose students to diverse areas of legal practice.", icon: BriefcaseBusiness },
            { num: "05", title: "Competitive Examination Preparation", desc: "The institute highlights specialised sessions for students preparing for examinations such as UPPCS-J and APO.", icon: GraduationCap },
            { num: "06", title: "Research and Doctoral Opportunities", desc: "Academic research and doctoral programmes provide opportunities for advanced study and scholarly contribution to legal knowledge.", icon: FileText },
        ],
    },
    events: {
        headingBefore: "From Classroom Learning to",
        headingHighlight: "Real-World Legal Exposure",
        sectionSubtitle: "Selected Academic Activities — 2026",
        intro: "Guest lectures, legal awareness programmes, workshops, and academic events give students exposure to emerging legal issues and professional practice.",
        cards: [
            activityCard("GUEST LECTURE", "Guest Lecture: Cyber Crime in Everyday Life: Prevention, Investigation & Legal Remedies", "The session introduced students to common forms of cybercrime, online fraud, and cybersecurity concerns. It covered digital evidence, investigation procedures, legal remedies, and responsible digital practices.", cyberCrimeLectureImage, "12 August 2026 · Speaker: Ms. Titiksha Srivastava, Advocate and Cyber Law Expert"),
            activityCard("LEGAL AID CELL", "Legal Aid Cell Outreach: Mati Village Visit", "The Legal Aid Cell organized a community outreach visit featuring a Nukkad Natak on children's right to education and the importance of access to education.", legalSupportImage, "10 September 2026"),
            activityCard("LITERARY & CULTURAL ACTIVITIES", "Abhivyakti - Literary and Cultural Activities", "The Institute of Legal Studies organized Abhivyakti, featuring debate, speech, story and essay writing, and meme-making competitions. Mr. Ved Prakash joined the program as a guest. The event was conducted under the guidance of Director Prof. (Dr.) Narendra Bahadur Singh and coordinated by Dr. Shruti Sharma.", legalEventImage, "14–15 September 2026"),
            activityCard("FORENSIC AWARENESS PROGRAMME", "Forensic Awareness Program: Questioned Documents & Fingerprint Examination", "Students were introduced to forensic techniques used in questioned document examination and fingerprint analysis, and the role of forensic evidence in investigation and legal proceedings.", seminarImage, "24 September 2026 · Speaker: Mr. Darshan Murali, CCIF, Delhi · Chair: Prof. (Dr.) Narendra Bahadur Singh · Convener: Mr. Rajat Saxena"),
            activityCard("WORKSHOP", "Contemporary Issues in Contract Law: E-Contracts and Digital Agreements", "The workshop focused on contemporary developments in contract law, with particular attention to electronic contracts and digital agreements. It introduced students to legal considerations surrounding agreements formed and executed through digital platforms. The resource person's full name and designation for the 28 October workshop were not included in the available event details.", workshopImage, "28 October 2026"),
            activityCard("MOOT COURT", "Legal Aid, Moot Courts, and Student Engagement", "The institute encourages students to participate in activities that strengthen their understanding of legal processes and social responsibilities.", mootCourtImage),
            activityCard("LEGAL AID", "Legal Awareness and Community Outreach", "Students participate in legal literacy initiatives and awareness campaigns that connect legal education with community needs.", legalSupportImage),
            activityCard("PROFESSIONAL EXPOSURE", "Moot Court and Trial Advocacy", "Moot court exercises help students develop legal arguments, prepare case memorials, and understand courtroom procedures through simulated proceedings", legalStudiesImage),
            activityCard("PROFESSIONAL EXPOSURE", "Debates and Academic Competitions", "Activities such as Abhivyakti provide opportunities to strengthen public speaking, research, reasoning, writing, and presentation skills.", legalStudiesImage),
            activityCard("PROFESSIONAL EXPOSURE", "Expert Interactions", "Guest lectures and workshops allow students to interact with advocates, legal experts, researchers, and professionals working in specialized areas of law.", legalStudiesImage),
        ],
    },
    // activitySections: [
    //     {
    //         id: "legal-skills",
    //         eyebrow: "Practical Legal Skills",
    //         heading: "From Classroom Learning to Real-World Legal Exposure",
    //         intro: "Students are encouraged to understand how legal principles operate in everyday life, judicial proceedings, digital environments, and community settings.",
    //         cards: [
              
    //         ],
    //     },
    // ],
    research: {
        eyebrow: "Research & Publications",
        heading: "Explore Contemporary Areas of Law",
        description: "The institute's academic focus includes key fields of law and provides opportunities for advanced study, research, and scholarly contribution to legal knowledge.",
        cards: [
            activityCard("AREA OF STUDY", "Criminal & Security Law", "Study legal frameworks and contemporary issues relating to criminal justice and security.", legalStudiesImage),
            activityCard("AREA OF STUDY", "Corporate & Commercial Law", "Explore legal principles and developments relevant to business, commerce, and corporate practice.", legalEventImage),
            activityCard("AREA OF STUDY", "Constitutional & Administrative Law", "Examine constitutional principles, public administration, and the legal processes that govern public institutions.", seminarImage),
            activityCard("AREA OF STUDY", "International & Comparative Law", "Consider legal systems and processes across jurisdictions and the issues that shape international and comparative law.", legalSupportImage),
        ],
    },
    career: {
        heading: "Career Opportunities",
        items: [
            ["Advocate / Legal", "Practitioner"],
            ["Judicial Services", "Aspirant"],
            ["Corporate Lawyer"],
            ["Legal Advisor"],
            ["Legal Researcher"],
            ["Legal Consultant"],
            ["Compliance Officer"],
            ["Contract Management", "Professional"],
            ["Legal Drafting", "Specialist"],
            ["Mediator and Arbitration", "Professional"],
            ["Public Policy", "Researcher"],
            ["Legal Academician"],
        ],
        descriptions: [],
    },
    // community: {
    //     eyebrow: "Legal Aid & Outreach",
    //     heading: "Connecting Legal Education with Community Needs",
    //     paragraphs: [
    //         "The Legal Aid Cell encourages students and faculty members to promote understanding of legal rights, access to justice, and constitutional values through community-oriented activities.",
    //         "Legal literacy programmes and outreach initiatives help students connect legal education with social responsibility and the needs of communities.",
    //     ],
    //     focusTitle: "Student Engagement",
    //     focusAreas: [
    //         "Legal literacy initiatives and awareness campaigns",
    //         "Moot court, trial advocacy, and case preparation",
    //         "Debates, academic competitions, and public speaking",
    //         "Guest lectures and workshops with legal professionals",
    //     ],
    // },
    facultySection: {
        members: legalFaculty,
        headingText: "Meet Our",
        headingHighlight: "Faculty",
        subheading: "Faculty members guide students through legal principles, professional skills, research, and practice-oriented learning.",
        featuredDescription: "Prof. (Dr.) Narendra Bahadur Singh is listed as Director of the Institute of Legal Studies at SRMU.",
        featuredLabel: "Director",
        profileDescription: "Faculty members support legal education and practice-oriented learning at the Institute of Legal Studies.",
        showResearchShowcase: false,
    },
    faq: [
        { q: "What programmes are offered by the Institute of Legal Studies at SRMU?", a: "The current institute webpage lists B.A. + LL.B. (Hons.) and B.B.A. + LL.B. (Hons.) integrated programmes. Other law programmes have appeared in earlier academic records; check the current admission prospectus for availability." },
        { q: "What is the duration of the integrated law programmes at SRMU?", a: "Both B.A. + LL.B. (Hons.) and B.B.A. + LL.B. (Hons.) are five-year programmes." },
        { q: "What is the annual fee for B.A. + LL.B. (Hons.)?", a: "The listed annual fee is ₹1,00,000. Students should refer to the latest fee schedule for applicable charges." },
        { q: "What is the annual fee for B.B.A. + LL.B. (Hons.)?", a: "The listed annual fee is ₹90,000. Students should check the current admission information for the latest fee details." },
        { q: "Is the Institute of Legal Studies approved by the Bar Council of India?", a: "The institute's official webpage states that it is approved by the Bar Council of India. Students can refer to the university's current approval documentation for programme-specific details." },
        { q: "Does SRMU have a moot court facility?", a: "Yes. The Institute of Legal Studies has a well-equipped moot court room where students practise legal arguments, case preparation, memorial writing, and courtroom procedures." },
        { q: "Does the institute provide practical legal training?", a: "The institute promotes practical learning through moot courts, internships, legal camps, court visits, trial advocacy, and interactions with legal professionals." },
        { q: "Does the institute organise legal awareness programmes?", a: "Yes. The Legal Aid Cell conducts outreach and awareness activities to promote legal literacy and understanding of rights among communities." },
        { q: "What competitive examinations can law students prepare for?", a: "Students can prepare for judicial service examinations such as UPPCS-J and other relevant examinations, depending on their eligibility and career goals." },
        { q: "What career opportunities are available after studying law?", a: "Graduates can explore careers in litigation, corporate law, legal consultancy, judicial services, legal research, compliance, mediation, arbitration, and academia." },
        { q: "Where is SRMU located?", a: "Shri Ramswaroop Memorial University is located on Lucknow–Deva Road, Barabanki, Uttar Pradesh." },
    ],
    showFaculty: true,
    showScholarships: true,
    showBlogs: true,
    showCareerDescriptionCards: false,
};
