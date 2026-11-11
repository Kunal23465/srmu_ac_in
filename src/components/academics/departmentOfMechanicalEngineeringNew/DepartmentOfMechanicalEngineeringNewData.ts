import {
    Activity,
    Cpu,
    Factory,
    GraduationCap,
    Lightbulb,
    Microscope,
    Settings,
    Thermometer,
    Wind,
    Wrench,
    Zap,
} from "lucide-react";
import type { CustomDepartmentNewData, DepartmentActivityCardNew } from "../../../customs/department-page-new/CustomDepartmentNew";
import { facultyDetailsOfMeDepartment } from "../../../data/academics/faculty-of-mechanical-engineering/faculty-of-mechanical-engineering";
import departmentBanner from "../../../assets/images/new-mechnical-program/desktop-banner.webp";
import overviewImage from "../../../assets/images/new-mechnical-program/vett6qrcicwki2tdldms.webp";
import designImage from "../../../assets/images/new-mechnical-program/industrial-cad-engineering-toolkit.png";
import industryImage from "../../../assets/images/new-mechnical-program/lhnggy89mzsivw8j6k7g.webp";
import energyImage from "../../../assets/images/new-mechnical-program/gzpezebn8pgp0oqnxpdq.webp";
import thermalImage from "../../../assets/images/new-mechnical-program/jg3hq3h4vwrxfxh3ejkl.webp";
import projectImage from "../../../assets/images/new-mechnical-program/tsb9lhfday8gnfbkkhjz.webp";
import saquibBinReyazPortrait from "../../../assets/images/department-of-mechanical-engineering-new/dr-md-saquib-bin-reyaz.jpg";
import rajeshPorwalPortrait from "../../../assets/images/department-of-mechanical-engineering-new/dr-rajesh-kr-porwal.jpg";
import shashankShuklaPortrait from "../../../assets/images/department-of-mechanical-engineering-new/er-s-k-shukla.png";
import rohitSinghPortrait from "../../../assets/images/department-of-mechanical-engineering-new/dr-rohit-singh.jpg";
import amitKumarSinghPortrait from "../../../assets/images/department-of-mechanical-engineering-new/dr-amit-kumar-singh.jpg";
import neerajKumarGuptaPortrait from "../../../assets/images/department-of-mechanical-engineering-new/neeraj-kumar-gupta.png";
import niteshKumarPandeyPortrait from "../../../assets/images/department-of-mechanical-engineering-new/nitesh-kumar-pandey.jpg";
import rakeshDwivediPortrait from "../../../assets/images/department-of-mechanical-engineering-new/rakesh-dwivedi.jpg";
import umeshVishwakarmaPortrait from "../../../assets/images/department-of-mechanical-engineering-new/umesh-vishwakarma-im.jpg";
import vinodKumarPortrait from "../../../assets/images/department-of-mechanical-engineering-new/vinod-kumar.jpg";
import vikramSinghPortrait from "../../../assets/images/department-of-mechanical-engineering-new/er-vikram-singh.png";

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

const facultyProfilesProvided = new Set([
    "Dr. Md Saquib Bin Reyaz",
    "Mr. Neeraj Kumar Gupta",
    "Mr. Rohit Singh",
    "Mr. Rakesh Dwivedi",
    "Mr. Shashank Kumar Shukla",
    "Mr. Vinod Kumar",
    "Mr. Nitesh Kumar Pandey",
    "Mr. Umesh Vishwakarma",
    "Mr. Vikram Singh",
    "Dr. Amit Kumar Singh",
    "Prof. (Dr.) Rajesh Kumar Porwal",
]);

const mechanicalFaculty = facultyDetailsOfMeDepartment.filter((member) => facultyProfilesProvided.has(member.name)).map((member) => {
    const isHod = member.name.includes("Rajesh Kumar Porwal");
    const isSaquibBinReyaz = member.name.includes("Saquib Bin Reyaz");
    const isShashankShukla = member.name.includes("Shashank Kumar Shukla");
    const isRohitSingh = member.name === "Mr. Rohit Singh";
    const isAmitKumarSingh = member.name === "Dr. Amit Kumar Singh";
    const isNeerajKumarGupta = member.name === "Mr. Neeraj Kumar Gupta";
    const isNiteshKumarPandey = member.name === "Mr. Nitesh Kumar Pandey";
    const isRakeshDwivedi = member.name === "Mr. Rakesh Dwivedi";
    const isUmeshVishwakarma = member.name === "Mr. Umesh Vishwakarma";
    const isVinodKumar = member.name === "Mr. Vinod Kumar";
    const isVikramSingh = member.name === "Mr. Vikram Singh";

    return {
        id: String(member.id),
        name: isHod ? "Dr. Rajesh Kr. Porwal" : isSaquibBinReyaz ? "Dr. Md Saquib Bin-Reyaz" : isShashankShukla ? "Er. S. K. Shukla" : isRohitSingh ? "Dr. Rohit Singh" : isNeerajKumarGupta ? "Neeraj Kumar Gupta" : isNiteshKumarPandey ? "Nitesh Kumar Pandey" : isRakeshDwivedi ? "Rakesh Dwivedi" : isUmeshVishwakarma ? "Umesh Vishwakarma" : isVinodKumar ? "Vinod Kumar" : isVikramSingh ? "Er. Vikram Singh" : member.name,
        role: isHod ? "Professor & Dean" : isShashankShukla || isNeerajKumarGupta || isNiteshKumarPandey || isRakeshDwivedi || isUmeshVishwakarma || isVinodKumar || isVikramSingh ? "Assistant Professor" : member.designation,
        img: isHod ? rajeshPorwalPortrait : isSaquibBinReyaz ? saquibBinReyazPortrait : isShashankShukla ? shashankShuklaPortrait : isRohitSingh ? rohitSinghPortrait : isAmitKumarSingh ? amitKumarSinghPortrait : isNeerajKumarGupta ? neerajKumarGuptaPortrait : isNiteshKumarPandey ? niteshKumarPandeyPortrait : isRakeshDwivedi ? rakeshDwivediPortrait : isUmeshVishwakarma ? umeshVishwakarmaPortrait : isVinodKumar ? vinodKumarPortrait : isVikramSingh ? vikramSinghPortrait : member.image,
        isHod,
        ...(isSaquibBinReyaz
            ? {
                qualification: "Ph.D. in Mechanical Engineering, National Institute of Technology Patna; Project Research Associate in Mechanical Engineering, Indian Institute of Technology Patna",
                experience: "1 Year",
                email: "saquibreyaz.research.fome@srmu.ac.in",
                contact: "8825169196",
                specialization: [
                    "Welding & Joining",
                    "Metal Matrix Composite",
                    "Additive Manufacturing",
                    "Surface Coating",
                    "Materials Characterization",
                ],
                expertise: "Research areas include welding and joining, metal matrix composites, additive manufacturing, surface coating, and materials characterization. Academic contributions include 19 research papers, 3 books/book chapters, 1 patent, and 4 conference presentations/participations, with 0 research projects. Recognition: GATE in Mechanical Engineering (2016). He serves on the University Research and Advisory Committee and is the Departmental Research Coordinator.",
            }
            : isHod
            ? {
                qualification: "Ph.D. in Micro Machining, Motilal Nehru National Institute of Technology Allahabad; M.E. in Advanced Manufacturing Systems, Birla Institute of Technology Mesra, Ranchi; B.E. in Production Engineering, Sardar Vallabhbhai National Institute of Technology Surat",
                experience: "25 years",
                email: "dean.me@srmu.ac.in",
                contact: "9873013273",
                specialization: [
                    "Micro Manufacturing",
                    "Renewable Energy",
                    "Optimization",
                    "Industrial Engineering",
                ],
                expertise: "Research profile: advanced macro/micro machining, Industry 5.0, and biofuels. Academic contributions include 45 research papers, 10 books/book chapters, 4 patents, and 26 conference presentations/participations; research projects: Nil. Awards include the Production Engineering Division Prize (2014), Institution of Engineers India, Kolkata, and the 2nd Best Paper Award (2005), Journal of Advances in Management Research, Emerald (UK). He has guided 5 Ph.D. students, has 2 Ph.D. scholars under supervision, and has guided 10 M.Tech. students.",
            }
            : isShashankShukla
                ? {
                    qualification: "M.Tech. in Fluids Engineering, MNNIT Prayagraj",
                    experience: "13 years",
                    email: "shashank.fome@srmu.ac.in",
                    contact: "9456340844",
                    specialization: [
                        "Computational Fluid Dynamics",
                        "Numerical Methods",
                        "Heat and Mass Transfer",
                        "Turbulent Flow",
                        "Mixed Flow Analysis using ANSYS",
                    ],
                    expertise: "Research areas include computational fluid dynamics, mixed flow analysis using ANSYS, numerical methods, heat and mass transfer, and turbulent flow. Academic contributions include 2 research papers and 2 international conference presentations/participations. Books/book chapters, patents, research projects, awards, and other academic achievements: Nil.",
                }
                : isRohitSingh
                    ? {
                        qualification: "Ph.D. in Mechanical Engineering, SRMU; M.Tech. in Energy Science & Technology, BIET Jhansi",
                        experience: "10 years",
                        email: "rohitsingh.fome@srmu.ac.in",
                        contact: "6306743738",
                        specialization: [
                            "Energy Science",
                            "Biofuels",
                            "IC Engines",
                            "Thermal Engineering",
                            "Manufacturing Technology",
                        ],
                        expertise: "Research areas include biofuels, nanoparticles, solar energy, and renewable energy. Academic contributions include 18 research papers, 17 books/book chapters, 4 patents, 23 conference presentations/participations, 13 awards/recognitions, and 4 other academic achievements. Research project details were not provided.",
                    }
                    : isAmitKumarSingh
                        ? {
                            qualification: "Ph.D. in Thermal and Renewable Energy, Shri Ramswaroop Memorial University / Institute of Technology",
                            experience: "13 years",
                            email: "amit.fome@srmu.ac.in",
                            contact: "998944344",
                            specialization: [
                                "Thermal and Fluid Engineering",
                                "Solar Energy",
                                "Biomass Energy",
                            ],
                            expertise: "Research profile includes Solar PVT Systems, Applied Numerical Methods, Computational Fluid Dynamics, and Sustainable Energy Systems. Academic contributions include 7 research papers, 0 books/book chapters, 1 patent, 0 research projects, 3 conference presentations/participations, and 1 award/recognition. Award: Best Paper Award in the Solar Thermal Applications category at SOLRIS-2019, an international conference held at Jamia Millia Islamia University, New Delhi.",
                        }
                : isNeerajKumarGupta
                    ? {
                        qualification: "M.Tech. in Material Science and Engineering, Motilal Nehru National Institute of Technology Allahabad",
                        experience: "13 years",
                        email: "neerajgupta.fome@srmu.ac.in",
                        contact: "9151144339",
                        specialization: [
                            "Polymer Processing & Composite Fabrication",
                            "Polymer Nanocomposites & Biomaterials",
                            "Materials Characterization & Mechanical Characterization",
                        ],
                        expertise: `Research profile: Polymer Nanocomposites and Biomaterials; Polymer Processing and Composite Fabrication; Tribology, Wear and Surface Engineering; Materials Characterization and Mechanical Testing. Research papers (2): Friction Stir Welding: A Review of Optimization by Taguchi Approach, International Journal of Science and Research (IJSR), 2023; Gupta, N. K., & Dwivedi, R. (2026), Recent advances in sustainable polymer nanocomposites for biomedical applications: Mechanical and tribological perspectives, TIJER – International Research Journal, 13(5), b334–b340, ISSN 2349-9249. Book chapter (1): Gupta, N. K., & Verma, R. K. (2025), Next-generation polymer nanocomposites: Pioneering innovations for tribological excellence in advanced applications, Chapter 5, Taylor & Francis, https://doi.org/10.1201/9781003668206-5. Patent (1): AI Powered Solar Optimization Support Device, Registered Design No. 506462-001, Class 13-04, Government of India, 20 June 2026. Research projects: N.A. Conference presentations/participation (4): Effect of Single and Hybrid Nanofillers on Mechanical Characterization and Tribological Performance of PMMA Nanocomposite for Prosthodontic Applications: A Review, Paper ID 147, RADM-2026, NIT Patna, 24–26 June 2026; Synthesis and Characterization of Doxycycline-Loaded Chitosan–Zinc Oxide Nanocomposite for Antimicrobial Drug Delivery Applications, ICRAM-2013, IIT (BHU), Varanasi, 18–21 February 2013, supported by AFOSR-AOARD (USA), ONRG (Singapore), and IIT (BHU); Recent Advances in Sustainable Polymer Nanocomposites for Biomedical Applications: Mechanical and Tribological Perspectives, oral presentation, International Conference on Sustainable Innovation 2.0, SRMU, Lucknow, 9–11 April 2026; International Conference on Computing, Communicating and Control Technology, SRMU, Lucknow, 10–12 November 2016. Awards/recognitions: N.A. Other academic achievements (8): UGC-Sponsored Faculty Induction Programme (Guru-Dakshita), Sardar Patel University, 2024; NPTEL Characterization of Polymers, Elastomers and Composites, IIT Kharagpur, 2025; NPTEL Artificial Intelligence and Machine Learning in Materials Engineering, IIT Kanpur, 2024; NEP 2020 Orientation and Sensitization Programme under MM-TTP, UGC, 2024; Smart Manufacturing and Industry 4.0, Amity University, Noida, 2025; Effective Curriculum Implementation, NITTTR Chandigarh, 2023; Emerging Materials, Sensors and Devices for IoT and Industry 4.0, C. V. Raman Global University, 2021; NAAC Assessment and Accreditation training, Research Foundation of India, 2023.`,
                    }
                : isNiteshKumarPandey
                    ? {
                        qualification: "M.Tech. in Production Engineering (Ph.D. pursuing), MNNIT Prayagraj",
                        experience: "14 years",
                        email: "niteshpandeg.fome@srmu.ac.in",
                        contact: "7388436940",
                        specialization: [
                            "Unconventional Manufacturing",
                            "Additive Manufacturing",
                            "Friction Stir Additive Manufacturing",
                        ],
                        expertise: "Research profile includes unconventional manufacturing, additive manufacturing, and friction stir additive manufacturing. Conference presentations/participation: 2. Research papers, books/book chapters, patents, research projects, awards/recognitions, and other academic achievements were not specified.",
                    }
                : isRakeshDwivedi
                    ? {
                        qualification: "M.Tech. in Design, MNNIT Allahabad; B.Tech. in Mechanical Engineering, LNCT Bhopal",
                        experience: "12 years",
                        contact: "9554502887",
                        specialization: [
                            "Machine Design",
                            "Theory of Machines",
                            "Strength of Materials",
                            "Engineering Mechanics",
                        ],
                        expertise: "Research profile includes design, solar energy, and materials. Academic contributions include 3 research papers and 1 conference presentation/participation. Books/book chapters, patents, research projects, awards/recognitions, and other academic achievements: Nil.",
                    }
                : isUmeshVishwakarma
                    ? {
                        qualification: "M.Tech. in Thermal and Fluid Engineering, IIT BHU",
                        experience: "12 years",
                        email: "Umeshvish.fome@srmu.ac.in",
                        contact: "7408135589",
                        specialization: [
                            "Heat and Mass Transfer",
                            "Theory of Elasticity",
                            "Applied Thermodynamics",
                            "Fluid Mechanics",
                            "I.C. Engine",
                        ],
                        expertise: "Research profile details were not provided. Academic contributions include 1 research paper and 1 patent. Details for books/book chapters, research projects, conference presentations/participation, awards/recognitions, and other academic achievements were not provided.",
                    }
                : isVinodKumar
                    ? {
                        qualification: "M.Tech. in Manufacturing Technology, SRMU Institute of Technology; Ph.D. pursuing",
                        experience: "16 years",
                        email: "vinod.fome@srmu.ac.in",
                        contact: "8574104166",
                        specialization: [
                            "Welding",
                            "Friction Stir Welding",
                            "Erosion Wear",
                            "Manufacturing",
                            "Additive Manufacturing",
                        ],
                        expertise: "Research profile includes welding, EDM, friction stir welding, and friction stir processing. Academic contributions include 4 research papers, 3 patents, and 4 conference presentations/participations. Books/book chapters, research projects, awards/recognitions, and other academic achievements: Nil.",
                    }
                : isVikramSingh
                    ? {
                        qualification: "M.Tech. in CAD/CAM, MNNIT Allahabad; Ph.D. pursuing",
                        experience: "12 years",
                        email: "vikramsingh.fome@srmu.ac.in",
                        contact: "9621319545",
                        specialization: [
                            "CAD/CAM",
                            "Optimization Methods",
                            "Operations Management",
                            "Six Sigma",
                            "Solar Energy & Solar Technology",
                        ],
                        expertise: "Research profile includes CAD/CAM, optimization methods, operations management, Six Sigma, and solar energy and technology. Academic contributions include 4 research papers, 1 patent, 0 research projects, and 1 conference presentation/participation. Books/book chapters: 0. Awards/recognitions and other academic achievements were not specified.",
                    }
                : {}),
    };
});

export const departmentOfMechanicalEngineeringNewData: CustomDepartmentNewData = {
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
        title: "Mechanical Engineering",
        backgroundImage: departmentBanner,
        stats: [
            { v: "4", l: "Practical Learning\nAreas", delay: "0ms" },
            { v: "2", l: "Industrial Visits\nRecorded", delay: "90ms" },
            { v: "4", l: "Student Projects\nCompleted", delay: "180ms" },
            { v: "3", l: "Guest Lectures\nRecorded", delay: "270ms" },
        ],
        quickStats: [
            { value: "4", label: "Practical Learning Areas" },
            { value: "2", label: "Industrial Visits Recorded" },
            { value: "4", label: "Student Projects Completed" },
            { value: "3", label: "Guest Lectures Recorded" },
        ],
    },
    overview: {
        headingBefore: "About the",
        headingHighlight: "Department",
        subtitle: "Mechanical Engineering at SRMU",
        paragraphs: [
            "The Department of Mechanical Engineering at Shri Ramswaroop Memorial University (SRMU) develops technically competent engineers through engineering fundamentals, practical learning, research, and industry exposure. Students explore mechanical design, thermal engineering, manufacturing processes, energy systems, and sustainable engineering technologies.",
            "Student projects, technical workshops, expert lectures, and industrial visits help students connect engineering concepts with their practical applications. Visits to organizations such as Larsen & Toubro (L&T) introduce students to construction technologies, prefabrication processes, and industrial engineering operations.",
            "The department promotes innovation through project-based and research-oriented learning. Students explore sustainable energy solutions, thermoelectric systems, HVAC technologies, and emerging mechanical engineering applications.",
        ],
        preview: "The Department of Mechanical Engineering at SRMU develops technically competent engineers through a combination of engineering fundamentals, practical learning, research, and industry exposure.",
        image: overviewImage,
        imageAlt: "Mechanical engineering students learning through practical applications",
    },
    missionVision: {
        missionItems: [
            "Provide quality education in mechanical engineering through effective teaching, practical training, research, and innovation.",
            "Develop technically skilled professionals with analytical abilities, creativity, and strong problem-solving skills.",
            "Prepare students to address evolving engineering and industrial challenges.",
        ],
        visionText: "To develop competent mechanical engineering professionals through quality education, research, and industry-oriented learning, contributing to technological advancement, innovation, and sustainable development.",
    },
    programHeadingBefore: "Explore",
    programHeadingHighlight: "Programmes",
    programs: [
        {
            category: "Undergraduate Programmes",
            mobileLabel: "Undergraduate",
            badge: "B.Tech.",
            icon: GraduationCap,
            programs: [
                { title: "B.Tech. in Mechanical Engineering with L&T", description: "An industry-integrated undergraduate programme connecting mechanical engineering fundamentals with practical learning.", icon: Factory, link: "/program/b-tech-me-ev-engineering" },
                { title: "B.Tech. + M.Tech. in Mechanical Engineering", description: "An integrated programme combining undergraduate and postgraduate study in mechanical engineering.", icon: GraduationCap, link: "/program/b-tech-m-tech-me" },
                { title: "B.Tech. in Mechanical Engineering + M.B.A.", description: "An integrated engineering and management programme.", icon: Settings, link: "/program/b-tech-me-mba" },
            ],
        },
        {
            category: "Postgraduate Programmes",
            mobileLabel: "Postgraduate",
            badge: "M.Tech.",
            icon: Cpu,
            programs: [
                { title: "M.Tech. in Production & Industrial Engineering", description: "A postgraduate programme focused on production systems and industrial engineering.", icon: Factory, link: "/program/m-tech-production-industrial-engineering" },
            ],
        },
    ],
    labs: {
        headingBefore: "Labs &",
        headingHighlight: "Practical Learning",
        intro: "Students apply engineering principles through practical projects, technical workshops, and exposure to industrial technologies. Learning activities cover energy conversion, sustainable systems, fabrication, and thermal engineering.",
        items: [
            { num: "01", title: "Thermal Engineering & Energy Systems", desc: "Explore heat transfer, energy conversion, thermal performance, and sustainable energy applications.", accent: "#d62c2b", icon: Thermometer, animClass: "lab-icon-orbital" },
            { num: "02", title: "Design & Fabrication", desc: "Build practical understanding of engineering design, fabrication techniques, material selection, and prototype development through project-based learning.", accent: "#1B4F91", icon: Wrench, animClass: "lab-icon-pulse" },
            { num: "03", title: "Sustainable Energy & Energy Harvesting", desc: "Explore energy utilization, thermoelectric systems, and sustainable energy solutions through research-oriented projects.", accent: "#14284E", icon: Zap, animClass: "lab-icon-float" },
            { num: "04", title: "HVAC & Thermal Systems", desc: "Learn about heating, ventilation, and air-conditioning systems, their components, operating principles, and industrial applications.", accent: "#d62c2b", icon: Wind, animClass: "lab-icon-network" },
        ],
    },
    highlights: {
        headingBefore: "Why Choose Mechanical Engineering at",
        headingHighlight: "SRMU?",
        items: [
            { num: "01", title: "INDUSTRY EXPOSURE WITH L&T", desc: "The visit to L&T's PPVC Factory provides insight into modular construction, prefabrication, and modern engineering practices.", icon: Factory },
            { num: "02", title: "PROJECT-BASED LEARNING", desc: "Students apply engineering concepts through projects in biogas purification, sustainable energy, and thermoelectric energy conversion.", icon: Settings },
            { num: "03", title: "EXPERT-LED TECHNICAL WORKSHOPS", desc: "HVAC training introduces students to engineering systems and their practical industrial applications.", icon: Wrench },
            { num: "04", title: "RESEARCH-ORIENTED LEARNING", desc: "Expert lectures on smart materials, piezoelectric structures, and energy harvesting introduce contemporary engineering research.", icon: Microscope },
            { num: "05", title: "SUSTAINABLE ENGINEERING FOCUS", desc: "Student projects explore energy-efficient technologies, cleaner fuels, and sustainable energy solutions.", icon: Lightbulb },
            { num: "06", title: "INDUSTRIAL & TECHNICAL EXPOSURE", desc: "Industrial visits and expert interactions show how engineering principles are applied in professional environments.", icon: Activity },
        ],
    },
    events: {
        headingBefore: "From Classroom Concepts to",
        headingHighlight: "Real-World Applications",
        sectionSubtitle: "Guest Lectures & Expert Sessions",
        intro: "The department has recorded three guest lectures. The featured session below connected mechanical engineering students with current research in smart materials and energy harvesting.",
        cards: [
            activityCard(
                "EXPERT LECTURE",
                "Vibration Analysis of Energy Harvesting Functionally Graded Piezoelectric Structures under Hygrothermal Load",
                "The lecture explored the integration of piezoelectric materials with functionally graded structures for energy harvesting under changing temperature and humidity conditions. Topics included smart materials, mathematical modelling, free and forced vibration analysis, environmental and boundary conditions, Finite Element Method (FEM) analysis, and applications in aerospace, civil, and mechanical engineering.",
                energyImage,
                "1 April 2026 | Dr. Pawan Kumar, Assistant Professor, Department of Mechanical Engineering, IIITDM Kurnool, Andhra Pradesh",
            ),
        ],
    },
    activitySections: [
        {
            id: "industry-exposure",
            eyebrow: "Learning from Engineering Workplaces",
            heading: "Industrial Visits & Industry Exposure",
            intro: "The department has recorded two industrial visits. The featured visit gave students exposure to prefabricated construction, modular building methods, and engineering applications in Ayodhya.",
            cards: [
                activityCard(
                    "INDUSTRIAL VISIT",
                    "L&T PPVC Factory and Ram Temple, Ayodhya",
                    "Students and faculty visited the L&T PPVC Factory to learn about prefabricated prefinished volumetric construction (PPVC), off-site modular construction, prefabrication processes, and sustainable building techniques. At the Ram Temple, students observed how traditional Nagara-style architecture integrates with modern engineering practices.",
                    industryImage,
                    "18 September 2025 | Ayodhya",
                ),
            ],
        },
        {
            id: "workshops",
            eyebrow: "Develop Practical Skills Through Expert-Led Workshops",
            heading: "Workshops & Technical Training",
            intro: "Technical workshops strengthen students' understanding of engineering systems, industrial technologies, and their practical applications.",
            cards: [
                activityCard(
                    "TECHNICAL WORKSHOP",
                    "Heating, Ventilation, and Air Conditioning (HVAC)",
                    "The workshop introduced the fundamental principles, major components, and practical applications of modern air-conditioning and ventilation systems. Students explored centralized HVAC systems, how they operate, and their industrial applications.",
                    thermalImage,
                    "5 February 2025 | Er. Veer Shankar Bhatnagar, SCORTEK Technology India Pvt. Ltd.",
                ),
            ],
        },
        {
            id: "student-projects",
            eyebrow: "Applying Engineering Concepts to Practical Challenges",
            heading: "Student Projects & Innovation",
            intro: "Four student projects were completed across academic years 2024–25 and 2025–26. Featured projects connect engineering fundamentals with energy and sustainability challenges.",
            cards: [
                activityCard(
                    "STUDENT PROJECT",
                    "Removal of CO₂ from Biogas Using Sustainable Energy",
                    "This project explores an energy-efficient and sustainable method for removing carbon dioxide from biogas to improve methane content and fuel quality. It uses sustainable energy sources to reduce energy consumption and environmental impact while supporting cleaner biofuel production.",
                    projectImage,
                    "Academic years 2024–25 and 2025–26",
                ),
                activityCard(
                    "STUDENT PROJECT",
                    "Fabrication and Study of a Flat Plate Thermoelectric Collector",
                    "Students designed, fabricated, and experimentally investigated a flat plate thermoelectric collector that converts available heat into electrical energy. The study evaluates temperature differences, power output, efficiency, and performance under different operating conditions.",
                    energyImage,
                    "Academic years 2024–25 and 2025–26",
                ),
            ],
        },
    ],
    research: {
        eyebrow: "Exploring Sustainable Engineering Through Research",
        heading: "Research & Innovation",
        description: "Research-oriented learning encourages students to explore practical engineering challenges and develop solutions that contribute to technological advancement and sustainable development.",
        cards: [
            activityCard("RESEARCH FOCUS", "Sustainable Energy Systems", "Explore energy-efficient methods and sustainable technologies that improve energy utilization and reduce environmental impact.", energyImage),
            activityCard("RESEARCH FOCUS", "Biogas Purification & CO₂ Removal", "Study sustainable approaches to removing carbon dioxide from biogas and improving methane content and fuel quality.", projectImage),
            activityCard("RESEARCH FOCUS", "Thermoelectric Energy Harvesting", "Investigate heat-to-electricity conversion through thermoelectric collectors and experimental performance analysis.", designImage),
            activityCard("RESEARCH FOCUS", "HVAC & Thermal Engineering", "Explore heating, ventilation, air-conditioning, and thermal system technologies with practical industrial applications.", thermalImage),
        ],
    },
    career: {
        heading: "Career Opportunities",
        items: [
            ["Design & Development", "Design Engineer, CAD Engineer"],
            ["Manufacturing", "Production Engineer, Quality Engineer"],
            ["Automotive", "Automotive Design Engineer"],
            ["Thermal Engineering", "Thermal Engineer"],
            ["HVAC", "HVAC Engineer"],
            ["Energy & Sustainability", "Energy Engineer"],
            ["Infrastructure", "Project Engineer"],
            ["Research & Development", "Research & Development Engineer"],
        ],
        descriptions: [
            { title: "Design & Development", description: "Design Engineer, CAD Engineer" },
            { title: "Manufacturing", description: "Production Engineer, Quality Engineer" },
            { title: "Automotive", description: "Automotive Design Engineer" },
            { title: "Thermal Engineering", description: "Thermal Engineer" },
            { title: "HVAC", description: "HVAC Engineer" },
            { title: "Energy & Sustainability", description: "Energy Engineer" },
            { title: "Infrastructure", description: "Project Engineer" },
            { title: "Research & Development", description: "Research & Development Engineer" },
        ],
    },
    facultySection: {
        members: mechanicalFaculty,
        subheading: "Faculty members guide students in engineering fundamentals, project work, practical learning, and emerging mechanical engineering applications.",
        featuredLabel: "PROFESSOR & DEAN",
        featuredDescription: "Dr. Rajesh Kr. Porwal leads the Faculty of Mechanical Engineering, with research expertise in micro manufacturing, optimization, industrial engineering, renewable energy, machining, Industry 5.0, and biofuels.",
        profileDescription: "Mechanical Engineering faculty support academic learning, practical training, student projects, and research-oriented activities.",
        showResearchShowcase: false,
    },
    faq: [
        { q: "What is the Department of Mechanical Engineering at SRMU?", a: "The department focuses on engineering education, practical learning, research, and innovation in mechanical systems, thermal engineering, design, manufacturing, and sustainable technologies." },
        { q: "Which programmes are offered by the Department of Mechanical Engineering?", a: "The programme list includes undergraduate options in mechanical engineering, integrated programmes, and postgraduate study in production and industrial engineering. Refer to SRMU's current approved programme list for the latest availability." },
        { q: "Does the department provide industry exposure through L&T?", a: "Yes. The department organized an industrial visit to the L&T PPVC Factory in Ayodhya on 18 September 2025, where students learned about prefabrication, modular construction, and sustainable building techniques." },
        { q: "What practical projects do Mechanical Engineering students undertake?", a: "Featured student projects include sustainable energy-based CO₂ removal from biogas and the fabrication and study of a flat plate thermoelectric collector." },
        { q: "How many student projects have been completed in the last two academic years?", a: "The department has recorded four student projects during academic years 2024–25 and 2025–26." },
        { q: "Does the department organize technical workshops?", a: "Yes. An HVAC workshop was conducted on 5 February 2025 by Er. Veer Shankar Bhatnagar from SCORTEK Technology India Pvt. Ltd." },
        { q: "Are guest lectures organized for Mechanical Engineering students?", a: "Yes. The department has recorded three guest lectures. A featured session by Dr. Pawan Kumar of IIITDM Kurnool covered vibration analysis of energy harvesting functionally graded piezoelectric structures." },
        { q: "What are the key research areas explored by students?", a: "Project and research areas include sustainable energy, biogas purification, CO₂ removal, thermoelectric energy conversion, energy harvesting, and HVAC and thermal engineering." },
        { q: "What was the purpose of the industrial visit to Ram Temple, Ayodhya?", a: "The visit gave students an opportunity to observe the integration of traditional Nagara-style architecture with modern engineering practices and understand construction-related applications." },
        { q: "What career opportunities are available after Mechanical Engineering?", a: "Graduates can explore opportunities in mechanical design, manufacturing, production, automotive engineering, HVAC, thermal systems, energy engineering, infrastructure, and research and development." },
    ],
    showFaculty: true,
    showScholarships: true,
    showBlogs: true,
    showCareerDescriptionCards: false,
};
