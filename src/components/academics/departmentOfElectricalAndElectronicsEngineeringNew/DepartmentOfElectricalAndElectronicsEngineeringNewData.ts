import {
    Activity,
    Cpu,
    Factory,
    GraduationCap,
    Lightbulb,
    Microscope,
    Settings,
    Zap,
} from "lucide-react";
import type { CustomDepartmentNewData, DepartmentActivityCardNew } from "../../../customs/department-page-new/CustomDepartmentNew";
import {
    ElectricalAndElectronicsfacultyDetails,
} from "../../../data/academics/institute/department-of-electrical-and-electronics-engineering-data";
import departmentBanner from "../../../assets/images/department-of-electrical-and-electronics-engineering-new/department-of-electrical-and-electronics-engineering.webp";
import departmentOverview from "../../../assets/images/academics/institutes/learning-.webp";
import researchImage from "../../../assets/images/academics/institutes/researchpapers-.webp";
import skillsImage from "../../../assets/images/academics/institutes/skill-.webp";
import evTechnologyImage from "../../../assets/images/academics/institutes/evtechnology-.webp";
import practicalLearningImage from "../../../assets/images/academics/institutes/learning-.webp";
import innovationImage from "../../../assets/images/academics/institutes/holistic-.webp";
import industryImage from "../../../assets/images/academics/institutes/corporate-manag-.webp";
import trainingImage from "../../../assets/images/academics/institutes/training-.webp";
import researchDevelopmentImage from "../../../assets/images/academics/institutes/researchdevelopment.webp";
import ltCollaborationImage from "../../../assets/images/new-information-system/Tech-Collaboration_-L-T-EduTech-SRMU.png";
import drRamSharanBajpaiPortrait from "../../../assets/images/new-eee-depart/Dr Ram Sharan Bajpai.jpg";
import drShubhamMishraPortrait from "../../../assets/images/new-eee-depart/Dr. Shubham Mishra.jpg";
import drSandeepOjhaPortrait from "../../../assets/images/new-eee-depart/Dr. Sandeep Ojha.jpg";
import drMukeshKumarSinghPortrait from "../../../assets/images/new-eee-depart/Dr. Mukesh Kumar Singh.jpg";
import sandeepTiwariPortrait from "../../../assets/images/new-eee-depart/Sandeep Tiwari.png";
import sandeepDixitPortrait from "../../../assets/images/new-eee-depart/Er. Sandeep Dixit.png";
import drVijayLaxmiMishraPortrait from "../../../assets/images/new-eee-depart/Dr. Vijay Laxmi Mishra.jpg";
import drSunilKumarSinghPortrait from "../../../assets/images/new-eee-depart/Dr. Sunil Kumar Singh.jpg";
import drAlkeshAgrawalPortrait from "../../../assets/images/new-eee-depart/Dr. Alkesh Agrawal.png";
import drMritunjayRaiPortrait from "../../../assets/images/new-eee-depart/Dr. Mritunjay Rai.jpg";
import drJayKumarPandeyPortrait from "../../../assets/images/new-eee-depart/Dr. Jay Kumar Pandey.jpg";
import drAkhileshKumarGuptaPortrait from "../../../assets/images/new-eee-depart/Dr. Akhilesh Kumar Gupta.jpg";
import drRasmitaBarikPortrait from "../../../assets/images/new-eee-depart/Dr. Rasmita Barik.jpg";
import abhishekKumarSaxenaPortrait from "../../../assets/images/new-eee-depart/Abhishek Kumar Saxena.jpg";
import anandPrakashPandeyPortrait from "../../../assets/images/new-eee-depart/Anand Prakash Pandey.jpg";
import abhishekPortrait from "../../../assets/images/new-eee-depart/Abhishek.jpg";
import prabhatSrivastavaPortrait from "../../../assets/images/new-eee-depart/Er. Prabhat Srivastava.jpg";
import shivaniSinghPortrait from "../../../assets/images/new-eee-depart/Shivani Singh.jpg";
import pappuKumarPortrait from "../../../assets/images/new-eee-depart/Pappu Kumar.jpg";

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

const facultyWithSuppliedProfiles = new Set([
    "Dr. Vijay Laxmi Mishra",
    "Dr. Mritunjay Rai",
    "Mr. Pappu Kumar",
    "Mr. Sandeep Tiwari",
    "Prof. (Dr.) R.S. Bajpai",
    "Ms. Shivani Singh",
    "Dr. Shubham Mishra",
    "Mr. Sandeep Dixit",
    "Dr. Jay Kumar Pandey",
    "Mr. Anand Prakash Pandey",
    "Mr. Abhishek Kumar Saxena",
    "Dr. Alkesh Agarwal",
]);

const eeeFaculty = [...ElectricalAndElectronicsfacultyDetails.filter((member) => facultyWithSuppliedProfiles.has(member.name)), {
    id: 17,
    name: "Dr. Sandeep Ojha",
    designation: "Assistant Professor",
    image: drSandeepOjhaPortrait,
    cardBgColor: "transparent",
}, {
    id: 18,
    name: "Dr. Mukesh Kumar Singh",
    designation: "Assistant Professor",
    image: drMukeshKumarSinghPortrait,
    cardBgColor: "transparent",
}, {
    id: 19,
    name: "Dr. Sunil Kumar Singh",
    designation: "Assistant Professor",
    image: drSunilKumarSinghPortrait,
    cardBgColor: "transparent",
}, {
    id: 20,
    name: "Dr. Akhilesh Kumar Gupta",
    designation: "Assistant Professor",
    image: drAkhileshKumarGuptaPortrait,
    cardBgColor: "transparent",
}, {
    id: 21,
    name: "Dr. Rasmita Barik",
    designation: "Assistant Professor",
    image: drRasmitaBarikPortrait,
    cardBgColor: "transparent",
}, {
    id: 22,
    name: "Abhishek",
    designation: "Assistant Professor",
    image: abhishekPortrait,
    cardBgColor: "transparent",
}, {
    id: 23,
    name: "Er. Prabhat Srivastava",
    designation: "Assistant Professor",
    image: prabhatSrivastavaPortrait,
    cardBgColor: "transparent",
}]
    .sort((left, right) => Number(right.name.includes("R.S. Bajpai")) - Number(left.name.includes("R.S. Bajpai")))
    .map((member) => {
        const isHod = member.name.includes("R.S. Bajpai");
        const isShubhamMishra = member.name === "Dr. Shubham Mishra";
        const isSandeepOjha = member.name === "Dr. Sandeep Ojha";
        const isMukeshKumarSingh = member.name === "Dr. Mukesh Kumar Singh";
        const isSandeepTiwari = member.name === "Mr. Sandeep Tiwari";
        const isSandeepDixit = member.name === "Mr. Sandeep Dixit";
        const isVijayLaxmiMishra = member.name === "Dr. Vijay Laxmi Mishra";
        const isSunilKumarSingh = member.name === "Dr. Sunil Kumar Singh";
        const isAlkeshAgrawal = member.name === "Dr. Alkesh Agarwal";
        const isMritunjayRai = member.name === "Dr. Mritunjay Rai";
        const isJayKumarPandey = member.name === "Dr. Jay Kumar Pandey";
        const isAkhileshKumarGupta = member.name === "Dr. Akhilesh Kumar Gupta";
        const isRasmitaBarik = member.name === "Dr. Rasmita Barik";
        const isAbhishekKumarSaxena = member.name === "Mr. Abhishek Kumar Saxena";
        const isAnandPrakashPandey = member.name === "Mr. Anand Prakash Pandey";
        const isAbhishek = member.name === "Abhishek";
        const isPrabhatSrivastava = member.name === "Er. Prabhat Srivastava";
        const isShivaniSingh = member.name === "Ms. Shivani Singh";
        const isPappuKumar = member.name === "Mr. Pappu Kumar";

        return {
            name: isHod ? "Dr Ram Sharan Bajpai" : isSandeepTiwari ? "Sandeep Tiwari" : isSandeepDixit ? "Er. Sandeep Dixit" : isAlkeshAgrawal ? "Dr. Alkesh Agrawal" : isAbhishekKumarSaxena ? "Abhishek Kumar Saxena" : isAnandPrakashPandey ? "Anand Prakash Pandey" : isShivaniSingh ? "Shivani Singh" : isPappuKumar ? "Pappu Kumar" : member.name,
            role: isHod ? "Professor & HoD" : isSandeepOjha ? "Assistant Professor · DoEEE (IoT)" : isMukeshKumarSingh || isSandeepDixit || isSunilKumarSingh ? "Assistant Professor · DoEEE" : isVijayLaxmiMishra ? "Assistant Professor · Electrical Engineering" : isAlkeshAgrawal ? "Professor & Deputy Director (Research)" : isMritunjayRai ? "Assistant Professor · Assistant Director, IQAC · Coordinator, Tech Fusion Club" : isAbhishekKumarSaxena ? "Assistant Professor · Assistant Director, IQAC · Faculty In-charge, Technical & Social Media Society" : isShivaniSingh ? "Assistant Professor" : isPappuKumar ? "Assistant Professor · DEEE" : member.designation,
            img: isHod ? drRamSharanBajpaiPortrait : isShubhamMishra ? drShubhamMishraPortrait : isSandeepOjha ? drSandeepOjhaPortrait : isMukeshKumarSingh ? drMukeshKumarSinghPortrait : isSandeepTiwari ? sandeepTiwariPortrait : isSandeepDixit ? sandeepDixitPortrait : isVijayLaxmiMishra ? drVijayLaxmiMishraPortrait : isSunilKumarSingh ? drSunilKumarSinghPortrait : isAlkeshAgrawal ? drAlkeshAgrawalPortrait : isMritunjayRai ? drMritunjayRaiPortrait : isJayKumarPandey ? drJayKumarPandeyPortrait : isAkhileshKumarGupta ? drAkhileshKumarGuptaPortrait : isRasmitaBarik ? drRasmitaBarikPortrait : isAbhishekKumarSaxena ? abhishekKumarSaxenaPortrait : isAnandPrakashPandey ? anandPrakashPandeyPortrait : isAbhishek ? abhishekPortrait : isPrabhatSrivastava ? prabhatSrivastavaPortrait : isShivaniSingh ? shivaniSinghPortrait : isPappuKumar ? pappuKumarPortrait : member.image,
            portraitObjectPosition: isAbhishek ? "center center" : undefined,
            isHod,
            ...(isHod
                ? {
                    qualification: "Ph.D. in Power Electronics and Renewable Energy, Shri Ramswaroop Memorial University; M.Tech. in Power Electronics, MNNIT, Prayagraj",
                    experience: "23 Years",
                    email: "dean.ee@srmu.ac.in",
                    contact: "9415190186",
                    specialization: [
                        "Smart EV Charging & Battery Management",
                        "Renewable Energy & Distributed Generation",
                        "Power Quality Monitoring & Mitigation",
                        "Power Electronics Converter",
                    ],
                    expertise: "Research areas include EV + Energy, Renewable Energy & Smart Grid, Power Electronics, Intelligent Power Quality, and Energy Storage & Battery Intelligence. Academic contributions include 35 research papers, 4 books/book chapters, 3 patents, 1 research project, 45 conference presentations/participations, and 1 award/recognition.",
                }
                : isShubhamMishra
                    ? {
                        qualification: "Ph.D. in Electrical Engineering, SRMU Barabanki; M.Tech. in Electrical Machines, IIT BHU; B.Tech. in Electrical Engineering, IET Lucknow",
                        experience: "18 Years",
                        email: "shubhammishra.foeee@srmu.ac.in",
                        contact: "9305056663",
                        specialization: [
                            "Power Electronics Converters",
                            "Air Conditioning Systems",
                            "Power Quality Improvement",
                            "Renewable Energy",
                        ],
                        expertise: "At DoEEE (IoT), research areas include power electronics converters, air conditioning systems, power quality improvement, and renewable energy. Academic contributions include 4 research papers, 1 book/book chapter, 6 patents, and 5 conference presentations/participations. Research projects, awards/recognitions, and other academic achievements: Nil.",
                    }
                    : isSandeepOjha
                        ? {
                            qualification: "Ph.D. in Power Electronics & Drives, Motilal Nehru National Institute of Technology Allahabad, Prayagraj; M.Tech. in Power Electronics & Drives, Madan Mohan Malaviya University of Technology, Gorakhpur; B.Tech. in Electrical Engineering, Madan Mohan Malaviya University of Technology, Gorakhpur",
                            experience: "4 Years",
                            email: "sandeepojha.eee@srmu.ac.in",
                            contact: "7054577852",
                            specialization: [
                                "AI-Based Control of Power Electronics Converters",
                                "Renewable Energy Conversion (Solar and Wind)",
                                "EV Battery Charging Topologies",
                                "Switching and Sampling Effects in Digital Controllers",
                                "Power Electronics Converter Topologies",
                            ],
                            expertise: "14 papers · 1 book/chapter · 1 patent · 6 conferences. No projects, awards, or other achievements.",
                        }
                        : isMukeshKumarSingh
                            ? {
                                qualification: "Ph.D. in Electrical Distribution System/Microgrid, National Institute of Technology, Kurukshetra; M.Tech. in Power System, National Institute of Technology, Hamirpur",
                                experience: "12 Years",
                                email: "mukeshkumarsingh.eee@srmu.ac.in",
                                contact: "9616639674",
                                specialization: [
                                    "Power System & Control System",
                                    "Electrical Distribution System",
                                    "Renewable Energy Sources",
                                    "Electric Vehicle",
                                    "D-FACTS Devices",
                                ],
                                expertise: "4 papers · 1 book/chapter · 1 patent · 1 project · 4 conferences · NPTEL STAR award.",
                            }
                            : isSandeepTiwari
                                ? {
                                    qualification: "M.Tech. in Power System, SRMU IOT; B.Tech. in Electrical and Electronics Engineering, UPTU",
                                    experience: "9 Years",
                                    email: "sandeeptiwari.eee@srmu.ac.in",
                                    contact: "7607878427",
                                    specialization: [
                                        "Power System & Electrical Measurement",
                                        "Automation & PLC",
                                        "Renewable Energy",
                                        "Quantum Computing",
                                        "High Voltage Engineering",
                                    ],
                                    expertise: "3 papers · 1 book/chapter · 1 project · 1 conference. Patents & awards: NA.",
                                }
                                : isSandeepDixit
                                    ? {
                                        qualification: "M.Tech. in Power System Engineering, IIT Roorkee",
                                        experience: "18 Years",
                                        email: "sandeepdixit.foeee@srmu.ac.in",
                                        contact: "8418910265",
                                        specialization: ["Power System", "FACTS", "Power Electronics"],
                                        expertise: "Areas of expertise include power systems, FACTS, and power electronics.",
                                    }
                                    : isVijayLaxmiMishra
                                        ? {
                                            qualification: "Ph.D. in Power Electronics and Renewable Energy Systems, Dr. A. P. J. Abdul Kalam Technical University, Lucknow (Research Centre: Kamla Nehru Institute of Technology, Sultanpur); M.Tech. in Power Systems, Shri Ramswaroop Memorial University",
                                            experience: "4 Years",
                                            email: "vijaylaxmimishra.doeee@srmu.ac.in",
                                            contact: "8005331332",
                                            specialization: [
                                                "Renewable Energy Systems & PV Reconfiguration/Shading",
                                                "AI/ML & Optimization Techniques",
                                                "MPPT, Power Electronics, Energy Management & Smart Grid Integration",
                                                "Embedded Systems, IoT/AIoT & ESP32-Based Applications",
                                                "Quantum Computing",
                                            ],
                                            expertise: "15 papers · 5 books/chapters · 1 patent · 0 projects · 7 conferences · 2 awards.",
                                        }
                                        : isSunilKumarSingh
                                            ? {
                                                qualification: "Ph.D. in Electrical Engineering, Institute of Technology BHU, Varanasi; M.Tech. in Electrical Engineering (Power System), NIT Hamirpur, HP",
                                                experience: "8 Years",
                                                email: "sunilkrsingh.foeee@srmu.ac.in",
                                                contact: "9450533611",
                                                specialization: [
                                                    "Power System Analysis & Protection",
                                                    "Basic Electrical Engineering",
                                                    "AI & ML Applications in Power Systems",
                                                    "Advanced Power System Protection",
                                                    "Machine Learning for EVs & Battery Management",
                                                ],
                                                expertise: "10 journal papers · 1 book · 4 chapters · 2 patents · 8 conferences; no research projects.",
                                            }
                                            : isAlkeshAgrawal
                                                ? {
                                                    qualification: "Ph.D. in Metamaterial-Based Microwave Devices, SRMU / IoT, Barabanki; M.Tech. in Digital Communication, U.P.T.U. (U.P.); B.Tech. in Electronics and Telecommunications, J.K. Institute of Applied Physics and Technology, Central University of Allahabad",
                                                    experience: "10 years (SRMCEM, Lucknow) · 14 years (SRMU, Barabanki)",
                                                    email: "alkesh.ec@srmu.ac.in",
                                                    contact: "9935363326",
                                                    specialization: [
                                                        "Metamaterial Absorbers",
                                                        "Metamaterial Microstrip Patch Antennas",
                                                        "Microwave Device Fabrication & Testing",
                                                        "Wide-Angle, Polarization-Independent EM-Wave Absorption",
                                                        "Stealth Technology Applications",
                                                    ],
                                                    expertise: "Research includes simulated, fabricated, and tested metamaterial absorbers for wide-angle and polarization response, with stealth applications. Results appeared in SCIE/Scopus journals including PIER-M, Material Research Xpress (IOP), and JMoE. Contributions: 13 WoS/22 Scopus papers, 6 Scopus-indexed books/chapters, 10 UK patents granted, 7 Indian patents published, 23 conferences, and 3 awards (2 Best Paper, 1 E-Learning Excellence); projects: NA.",
                                                }
                                                : isMritunjayRai
                                                    ? {
                                                        qualification: "Ph.D. in Image Processing (Application of Thermal Imaging Systems), IIT (ISM) Dhanbad, Jharkhand; M.E. in Instrumentation and Control, Birla Institute of Technology, Mesra, Ranchi; B.Tech. in Electronics and Communication Engineering, Uttar Pradesh Technical University, Lucknow",
                                                        experience: "13 Years",
                                                        email: "mirtunjayrai.foeee@srmu.ac.in",
                                                        contact: "8750032288",
                                                        specialization: [
                                                            "Signals & Systems · Control Systems · Artificial Neural Networks",
                                                            "AI/ML · Data Science · IoT",
                                                            "Digital & Thermal Image Processing · Real-Time Image Analysis",
                                                            "Computer Vision · Intelligent Algorithms",
                                                            "Applications in Healthcare, Agriculture, Surveillance, Smart Transportation & Industry 5.0",
                                                        ],
                                                        expertise: "10 journal papers · 30+ each in books/chapters · 4 published patents · 1 IIT Roorkee/DST project · 17+ conferences · awards: NA.",
                                                    }
                                                    : isJayKumarPandey
                                                        ? {
                                                            qualification: "Ph.D. in Image Processing, Biomedical Imaging, AI & Renewable Energy, Institute of Technology; M.Tech. in Power Control (Instrumentation); MBA in Finance & Marketing, Punjab Technical University",
                                                            experience: "15+ Years",
                                                            email: "jay.pandey@srmu.ac.in",
                                                            contact: "+91-9335719922",
                                                            specialization: [
                                                                "Image & Biomedical Imaging",
                                                                "Artificial Intelligence & Machine Learning",
                                                                "Healthcare, Computer Vision & IoT Applications",
                                                                "Renewable Energy",
                                                                "Business Management · Scholarly Editing & Peer Review",
                                                            ],
                                                            expertise: "Papers 15+ list/30+ profile · books/chapters 20+ · patents 10+ · projects Nil · conferences 15+ · awards 5+ · other achievements NA.",
                                                        }
                                                        : isAkhileshKumarGupta
                                                            ? {
                                                                qualification: "Ph.D. in Power Electronics and Renewable Energy, Motilal Nehru National Institute of Technology, Allahabad; M.Tech. in Power Electronics and ASIC Design, Motilal Nehru National Institute of Technology, Allahabad; B.Tech. in Electronics and Communication Engineering, BIET Jhansi",
                                                                experience: "10 Years",
                                                                email: "akhileshkumargupta.eee@srmu.ac.in",
                                                                contact: "9457547242",
                                                                specialization: [
                                                                    "Image Processing",
                                                                    "Power Electronics",
                                                                    "Renewable Energy",
                                                                    "Model Order Reduction · Optimization Techniques",
                                                                    "Optical Networks",
                                                                ],
                                                                expertise: "26 papers · 4 books/5 chapters · 18 conferences · 2 awards (M.Tech. Gold, Best Paper) · GATE qualified 6 times; patents/projects: --.",
                                                            }
                                                            : isRasmitaBarik
                                                                ? {
                                                                    qualification: "Ph.D. in Nanoelectronics, NIT Mizoram; M.Tech. in Signal Processing, Biju Patnaik University of Technology",
                                                                    experience: "10 Years",
                                                                    email: "rasmitabarik.eee@srmu.ac.in",
                                                                    contact: "9583090853",
                                                                    specialization: [
                                                                        "Nanoelectronics & Semiconductor Device Modeling",
                                                                        "TCAD Simulation & Analysis (Silvaco ATLAS)",
                                                                        "Advanced MOSFETs, GAA & CGAA FETs",
                                                                        "Strained-Silicon/SiGe Heterostructures, QWB & Low-Power VLSI",
                                                                        "Digital Electronics, Microelectronics & Emerging Semiconductor Technologies",
                                                                    ],
                                                                    expertise: "4 papers · 1 book · 5 patents · 0 projects · 7 conferences · 0 awards · 0 other achievements.",
                                                                }
                                                                : isAbhishekKumarSaxena
                                                                    ? {
                                                                        qualification: "M.Tech. in VLSI Design, CDAC Mohali; MBA in Human Resources; B.Tech. in Electronics & Communication Engineering, UPTU",
                                                                        experience: "8+ Years Academic · 2 Years Industry",
                                                                        email: "abhisheksaxena.foeee@srmu.ac.in",
                                                                        contact: "08299399820",
                                                                        specialization: [
                                                                            "Digital Electronics & CMOS Design",
                                                                            "Computer Organization & Architecture",
                                                                            "Machine Learning & Artificial Intelligence",
                                                                            "VLSI Design",
                                                                            "Image Processing",
                                                                        ],
                                                                        expertise: "16 papers · 1 book/10 chapters · 4 patents · 0 projects · 11 conferences · 3 awards (Teaching Learning Innovation, Dronacharya, Covid Warrior). Innovation Ambassador (MoE, Govt. of India); SPOC/SIH internal-round convener (2021, 2022, 2023, 2025, 2026); Viveka technical-fest convener (1.0–5.0).",
                                                                    }
                                                                    : isAnandPrakashPandey
                                                                        ? {
                                                                            qualification: "M.Tech. in Green Technology, Maulana Azad National Institute of Technology, Bhopal; B.Tech. in Electronics & Communication Engineering, AKTU Lucknow",
                                                                            experience: "14 Years",
                                                                            email: "anandpandey.foeee@gmail.com",
                                                                            contact: "9873471171",
                                                                            specialization: [
                                                                                "Electronic Devices & Circuits",
                                                                                "Renewable Energy",
                                                                                "Green Technology",
                                                                                "Microwave Electronic Devices",
                                                                                "Optoelectronic Devices & Solar PV",
                                                                            ],
                                                                            expertise: "7 papers · 1 book · 3 patents · 1 MNRE project · 15 conferences; awards/other achievements: --.",
                                                                        }
                                                                        : isAbhishek
                                                                            ? {
                                                                                qualification: "M.Tech. in Embedded System Technology, Amity University; Ph.D. pursuing at IIIT Lucknow",
                                                                                experience: "3 Years",
                                                                                email: "abhishek.doece@srmu.ac.in",
                                                                                contact: "9559770468",
                                                                                specialization: [
                                                                                    "AI & Machine Learning",
                                                                                    "Automated Vehicles & VANET",
                                                                                    "Internet of Things (IoT)",
                                                                                    "Embedded System Technology",
                                                                                    "VLSI",
                                                                                ],
                                                                                expertise: "2 papers · 2 books/chapters · 2 patents · 1 conference; projects/awards/other achievements: --.",
                                                                            }
                                                                            : isPrabhatSrivastava
                                                                                ? {
                                                                                    qualification: "Ph.D. in Electrical Engineering (pursuing, Electric Vehicle Charging), Netaji Subhas University of Technology, Delhi; M.Tech. in Instrumentation & Control Engineering (Process Control), Netaji Subhas Institute of Technology",
                                                                                    experience: "11 Years",
                                                                                    email: "prabhatsrivastava.eee@srmu.ac.in",
                                                                                    contact: "9793892222",
                                                                                    specialization: [
                                                                                        "Digital Electronics · Analog & Digital Communication",
                                                                                        "EV Charging Systems · Optimization & Scheduling",
                                                                                        "AI/ANN-Based EV Load Forecasting · Charging Reliability & False Communication Detection",
                                                                                        "Renewable Energy · Solar PV Integration",
                                                                                        "IoT-Enabled Smart Homes & Energy Management · VANET",
                                                                                    ],
                                                                                    expertise: "1 paper · 4 IEEE conferences · NPTEL Elite + Silver; books/patents/projects: none; awards: --.",
                                                                                }
                                                                                : isShivaniSingh
                                                                                    ? {
                                                                                        qualification: "M.Tech. in ECE, Amity University Uttar Pradesh; B.Tech. in ECE, Amity University Uttar Pradesh",
                                                                                        experience: "3 Years",
                                                                                        email: "shivanisingh.ec@srmu.ac.in",
                                                                                        contact: "7388533128",
                                                                                        specialization: [
                                                                                            "Artificial Intelligence & Machine Learning",
                                                                                            "Deep Learning",
                                                                                            "Digital Image Processing",
                                                                                            "Optical Wireless Communication",
                                                                                            "Optical Communication",
                                                                                        ],
                                                                                        expertise: "2 papers · 4 books/chapters · 4 conferences; patents, projects, awards and other achievements: NIL.",
                                                                                    }
                                                                                    : isPappuKumar
                                                                                        ? {
                                                                                            qualification: "M.Tech. in Wireless Communication, RGPV, Bhopal; B.E. in Electronics & Communication Engineering, Annamalai University",
                                                                                            experience: "9+ Years",
                                                                                            email: "pappukumar.ee@srmu.ac.in",
                                                                                            contact: "06204387984",
                                                                                            specialization: [
                                                                                                "Digital Electronics",
                                                                                                "Basic Electronics",
                                                                                                "Computer Organization & Architecture",
                                                                                                "Electronic Devices",
                                                                                                "Analog & Wireless Communication",
                                                                                            ],
                                                                                            expertise: "1 paper · National-Level Technical Symposium Surge winner · Viveka (4.0/5.0) coordinator · Cadence programme/training coordinator (2025/2026); books, patents and conferences: Nil; projects: 0.",
                                                                                        }
                                                                                        : {}),
        };
    });

export const departmentOfElectricalAndElectronicsEngineeringNewData: CustomDepartmentNewData = {
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
        title: "Electrical and Electronics Engineering",
        backgroundImage: departmentBanner,
        stats: [
            { v: "6", l: "Featured Expert\nSessions", delay: "0ms" },
            { v: "3", l: "Industry Visits\nFeatured", delay: "90ms" },
            { v: "4", l: "Practical Learning\nAreas", delay: "180ms" },
            { v: "3", l: "SIH Finalist Teams\nin 2025", delay: "270ms" },
        ],
        quickStats: [
            { value: "6", label: "Featured Expert Sessions" },
            { value: "3", label: "Industry Visits Featured" },
            { value: "4", label: "Practical Learning Areas" },
            { value: "3", label: "SIH Finalist Teams in 2025" },
        ],
    },
    overview: {
        headingBefore: "About the",
        headingHighlight: "Department",
        subtitle: "Electrical and Electronics Engineering at SRMU",
        paragraphs: [
            "The Department of Electrical and Electronics Engineering (DEEE) at Shri Ramswaroop Memorial University (SRMU) develops technically skilled engineers through quality education, practical learning, research, and innovation. The department focuses on electrical engineering, electronics, power systems, circuit design, automation, and emerging technologies.",
            "With an emphasis on experiential learning, students participate in technical workshops, industrial visits, expert lectures, research activities, and hands-on projects. Training initiatives involving industry-standard tools such as LabVIEW and Cadence EDA help students develop practical competencies in electronic circuit simulation, PCB design, VLSI systems, and instrumentation.",
            "The department also provides opportunities for students to gain industrial exposure through visits to leading organizations such as Larsen & Toubro (L&T) and NTPC, helping them understand real-world engineering operations and applications. These initiatives aim to bridge the gap between classroom learning and industry requirements while encouraging innovation, technical excellence, and problem-solving abilities.",
        ],
        preview: "The Department of Electrical and Electronics Engineering (DEEE) at Shri Ramswaroop Memorial University (SRMU) develops technically skilled engineers through quality education, practical learning, research, and innovation.",
        image: departmentOverview,
        imageAlt: "Students developing practical engineering skills",
    },
    missionVision: {
        missionItems: [
            "Provide quality education in electrical and electronics engineering through effective teaching, practical training, and research-driven learning.",
            "Develop technically competent professionals with strong problem-solving abilities and professional ethics.",
            "Equip students with the skills needed to address contemporary engineering challenges.",
        ],
        visionText: "To emerge as a center of excellence in electrical and electronics engineering education, research, and innovation by nurturing skilled professionals who contribute to technological advancement and sustainable development.",
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
                { title: "B.Tech. in Electrical Engineering (EV Engineering) with L&T", description: "A four-year programme with an industry-oriented focus on electric vehicle engineering.", icon: Zap, link: "/program/b-tech-ee-ev-engineering" },
                { title: "B.Tech. + M.Tech. in Electrical Engineering", description: "An integrated five-year programme in electrical engineering.", icon: GraduationCap, link: "/program/b-tech-m-tech-ee" },
                { title: "B.Tech. in EE + M.B.A.", description: "An integrated five-year engineering and management programme.", icon: Factory, link: "/program/b-tech-ee-mba" },
            ],
        },
        {
            category: "Postgraduate Programmes",
            mobileLabel: "Postgraduate",
            badge: "M.Tech.",
            icon: Cpu,
            programs: [
                { title: "M.Tech. in Electric Vehicle Technology", description: "A two-year postgraduate programme focused on electric vehicle technologies.", icon: Zap, link: "/program/m-tech-electric-vehicle-technology" },
                { title: "M.Tech. in Renewable Energy & Energy Audit", description: "A two-year programme covering renewable energy systems and energy auditing.", icon: Activity, link: "/program/m-tech-renewable-energy-energy-audit" },
                { title: "M.Tech. in Power Electronics & Electric Drives", description: "A two-year programme in power electronics and electric drive systems.", icon: Settings, link: "/program/m-tech-power-electronics-electric-drives1" },
            ],
        },
    ],
    labs: {
        headingBefore: "Labs &",
        headingHighlight: "Practical Learning",
        intro: "The department emphasizes hands-on learning through technical training, simulation-based activities, and practical exposure to engineering tools and technologies. Students gain experience in electronic circuit design, VLSI systems, instrumentation, PCB development, and automation.",
        items: [
            { num: "01", title: "VLSI Design & Cadence EDA Training", desc: "Practical exposure to electronic circuit simulation, schematic design, digital logic implementation, and layout development using Cadence EDA tools.", accent: "#d62c2b", icon: Cpu, animClass: "lab-icon-orbital" },
            { num: "02", title: "Electronic Circuit & PCB Design", desc: "Hands-on learning in circuit simulation, PCB layout, schematic capture, design verification, and signal integrity analysis.", accent: "#1B4F91", icon: Settings, animClass: "lab-icon-pulse" },
            { num: "03", title: "LabVIEW & Virtual Instrumentation", desc: "Training in LabVIEW programming, virtual instrumentation, data acquisition, instrument interfacing, signal processing, and automation.", accent: "#14284E", icon: Activity, animClass: "lab-icon-float" },
            { num: "04", title: "Electrical Power Systems & Smart Grid", desc: "Learning exposure to power generation, renewable energy integration, smart grid technologies, and modern power system operations.", accent: "#d62c2b", icon: Zap, animClass: "lab-icon-network" },
        ],
    },
    highlights: {
        headingBefore: "Why Choose Electrical and Electronics Engineering at",
        headingHighlight: "SRMU?",
        items: [
            { num: "01", title: "INDUSTRY-ORIENTED LEARNING", desc: "Technical training and industrial visits, including exposure to L&T and NTPC, help students understand engineering applications in practice.", icon: Factory },
            { num: "02", title: "PRACTICAL TECHNICAL TRAINING", desc: "Workshops on LabVIEW, Cadence EDA tools, circuit simulation, VLSI design, and PCB layout strengthen practical engineering skills.", icon: Settings },
            { num: "03", title: "RESEARCH & INNOVATION", desc: "Faculty publications, patents, and funded research projects encourage students to explore emerging technologies and applied research.", icon: Microscope },
            { num: "04", title: "EMERGING TECHNOLOGY EXPOSURE", desc: "Expert sessions introduce students to smart grids, renewable energy, artificial intelligence, power systems, and sustainable engineering.", icon: Lightbulb },
            { num: "05", title: "PROJECT-BASED LEARNING", desc: "Student projects give learners opportunities to apply engineering concepts to practical challenges in electronics and circuit design.", icon: Cpu },
            { num: "06", title: "TECHNICAL COMPETITIONS", desc: "Smart India Hackathon participation encourages teamwork, innovation, and solution-oriented thinking.", icon: GraduationCap },
        ],
    },
    events: {
        headingBefore: "From Classroom Concepts to",
        headingHighlight: "Real-World Applications",
        sectionSubtitle: "Guest Lectures & Expert Sessions",
        intro: "Expert sessions help students connect engineering fundamentals with current developments in energy, communication, power systems, and sustainable technology.",
        cards: [
            card("GUEST LECTURE", "Energy System and Smart Grid", "The session explored India's transition towards a renewable-dominant energy mix, power procurement strategies, and load curve management in Uttar Pradesh. It also supported knowledge sharing with the Society of Energy Engineers and Managers (SEEM).", researchImage, "9 May 2026 | Er. Mithilesh Kumar Gupta, Chief Engineer – PMC, UPPCL"),
            card("GUEST LECTURE", "Power Generation from Renewable Energy", "The guest lecture explored various renewable energy sources and their role in sustainable power generation. Students gained insights into emerging technologies, energy conversion methods, and the future of clean energy solutions.", evTechnologyImage, "February 2025"),
            card("GUEST LECTURE", "Data Communications: The Backbone of Modern Power Systems", "The session highlighted the importance of data communication networks in modern power systems. It covered how real-time data exchange, smart communication technologies, and network integration support efficient power transmission and grid management.", practicalLearningImage, "February 2025"),
            card("GUEST LECTURE", "Power Quality Challenges in Power Systems with High Renewable Penetration", "The lecture focused on power quality issues arising from the increasing integration of renewable energy sources into electrical grids. Students explored challenges such as voltage fluctuations, harmonics, and grid stability, along with potential mitigation techniques.", skillsImage, "February 2025"),
            card("GUEST LECTURE", "Net Zero 2070: Paving the Way for the Energy Sector", "The session discussed India's Net Zero 2070 commitment and its implications for the energy sector. It highlighted the role of renewable energy, energy efficiency, technological innovation, and sustainable practices in achieving long-term climate goals.", industryImage, "March 2025"),
            card("LECTURE SERIES", "Lecture Series on Defense Technologies, Communication Technologies, and Information Security", "The lecture series introduced students to emerging developments in defense and communication technologies, with a focus on information security. It provided insights into modern defense systems, secure communication networks, cybersecurity challenges, and their real-world applications.", trainingImage, "April 2026"),
        ],
    },
    activitySections: [
        {
            id: "industry-exposure",
            eyebrow: "Industrial Visits & Industry Exposure",
            heading: "",
            intro: "",
            cards: [
                card("INDUSTRIAL VISIT", "L&T Komatsu Machine Yard", "Students visited the L&T Komatsu Machine Yard to observe heavy construction machinery and equipment used in infrastructure and industrial projects. The visit offered practical insights into industrial machinery, equipment operations, and their applications in large-scale engineering projects.", ltCollaborationImage, "26 February 2026 | L&T, Kanpur Road"),
                card("INDUSTRIAL VISIT", "L&T Construction and Mining Machinery", "Students explored heavy construction and mining machinery and learned about industrial equipment used in infrastructure development.", industryImage, "18 September 2025 | L&T, Ayodhya"),
                card("INDUSTRIAL VISIT", "NTPC – Power Generation Visit", "The visit offered practical exposure to industrial operations and power generation, strengthening students' understanding of the energy sector.", evTechnologyImage, "26 April 2025 | NTPC, Tanda"),
            ],
        },
        {
            id: "workshops",
            eyebrow: "Workshops & Technical Training",
            heading: "Develop Industry-Relevant Technical Skills",
            intro: "The department organizes workshops and technical training programs to strengthen students' practical knowledge and familiarity with engineering tools.",
            cards: [
                card("HANDS-ON WORKSHOP", "Hands-on Practice on LabVIEW", "The workshop provided practical training in LabVIEW programming, covering virtual instrumentation development, data acquisition, instrument interfacing, signal processing, and automation through hands-on sessions and mini-projects   ", practicalLearningImage, "6–11 July 2026 | Resource persons: Dr. Sandeep Ojha and Dr. Alkesh Agrawal"),
                card("TECHNICAL TRAINING", "Industry-Oriented Training Program on Electronic Circuit Simulation and VLSI Design with Cadence EDA Tools", "Practical training introduced circuit simulation, schematic design, PCB layout, signal integrity analysis, and electronic design verification.", skillsImage),
                card("TECHNICAL TRAINING", "Two-Week Cadence Tool Training on Microelectronics Fabrication for Electronic Circuit Simulation & VLSI Design Systems", "Hands-on exposure to PCB design, schematic capture, symbol designing, digital logic implementation, and layout designing using Cadence tools.", researchImage, "Two-week programme"),
                card("WORKSHOP", "Implementation of AI Tools for Improving MS Office Skills", "A workshop focused on leveraging AI technologies within Microsoft Office applications to improve digital skills and productivity", trainingImage, "Steps Towards AI Literacy"),
                card("TECHNICAL PROGRAMME", "Cutting-Edge Technologies in Engineering for Sustainable Development", "A technical program exploring renewable energy, artificial intelligence, smart systems, advanced materials, and energy-efficient technologies.", evTechnologyImage),
            ],
        },
        {
            id: "student-projects",
            eyebrow: "Student Projects & Innovation",
            heading: "",
            intro: "Students are encouraged to apply their technical knowledge through practical projects involving electronic systems, circuit design, and engineering applications.",
            cards: [
                card("STUDENT PROJECT", "Robotic Wet and Dry Dustbin under Swachh Bharat Abhiyaan", "The prototype is designed to identify wet and dry waste and segregate it into two separate storage compartments. With potential applications in public places, malls, hospitals, and residential societies, the project aims to support efficient waste management and hygienic surroundings.", innovationImage, "Student: Mr. Sparsh Awasthi | Mentor: Dr. Alkesh Agrawal"),
                card("STUDENT PROJECT", "Linear Feedback Shift Register using Cadence Virtuoso", "An electronics project by Anay Raghuvanshi, Kajal Manji, and Aprajita Mishra, supporting learning in digital circuit design and VLSI development.", researchImage, "Students: Anay Raghuvanshi, Kajal Manji, and Aprajita Mishra"),
                card("STUDENT PROJECT", "Design and Simulation of 8-bit AMBA APB Protocol using Cadence Virtuoso", "The project helped students practise digital circuit design, simulation, timing verification, and VLSI development.", skillsImage, "Students: Raunak Srivastava, Mohit, and Megha Mishra"),
            ],
        },
        {
            id: "smart-india-hackathon",
            eyebrow: "Smart India Hackathon",
            heading: "",
            intro: "Students at SRMU participate in the Smart India Hackathon (SIH), an initiative supported by the Innovation Cell, Ministry of Education, Government of India. Through internal rounds organized by university clubs and departments, students get opportunities to develop innovative solutions, collaborate in teams, and compete for selection to the national-level final rounds",
            cards: [
                card("SIH PARTICIPATION", "2022", "15 teams were selected for the second round and 2 teams were selected for the final round.", innovationImage),
                card("SIH PARTICIPATION", "2023", "25 teams were selected for the second round. Final-round selection was not specified in the supplied information.", practicalLearningImage),
                card("SIH PARTICIPATION", "2024", "50 teams were selected for the second round and 1 team was selected for the final round.", researchImage),
                card("SIH PARTICIPATION", "2025", "50 teams were selected for the second round and 3 teams were selected for the final round.", trainingImage),
            ],
        },
        {
            id: "research-publications",
            eyebrow: "Research & Publications",
            heading: "",
            intro: "Faculty members of the department contribute to academic research through SCI/SCIE and Scopus-indexed publications, international conferences, patents, edited books, and book chapters. Their research contributions span emerging engineering technologies and applied research areas, encouraging a culture of innovation and academic excellence.",
        
            cards: [
                card("FACULTY RESEARCH", "Dr. Vijay Laxmi Mishra", "Research contributions include SCI/SCIE Q1 publications and Scopus-indexed work.", researchImage),
                card("FACULTY RESEARCH", "Prof. Alkesh Agrawal", "Research contributions include publications, international conference work, book chapters, and granted UK patents.", researchDevelopmentImage),
                card("FACULTY RESEARCH", "Dr. Mritunjay Rai", "Research activity includes publications, conference contributions, edited books, and Scopus-indexed book chapters.", practicalLearningImage),
                card("FACULTY RESEARCH", "Dr. R.S. Bajpai", "Research contributions include publications, conference work, book chapters, and patents.", evTechnologyImage),
                card("FUNDED RESEARCH PROJECT", "AI-Based Ultra-Fast DC Charging Control for Electric Vehicles", "The project focuses on AI-based charging control, smart battery thermal management, and solar-powered energy integration for electric vehicle charging systems.", researchDevelopmentImage, "Faculty in charge: Prof. (Dr.) R.S. Bajpai | Council of Science & Technology, Uttar Pradesh | Project ID 7525 | ₹13.08 lakhs"),
            ],
        },
    ],
    career: {
        heading: "Career Opportunities",
        items: [
            ["Electrical Design", "Engineer"],
            ["Power Systems", "Engineer"],
            ["Electronics Design", "Engineer"],
            ["VLSI Design", "Engineer"],
            ["Renewable Energy", "Engineer"],
            ["Automation", "Engineer"],
            ["Instrumentation", "Engineer"],
        ],
        descriptions: [
            { title: "Electrical Engineering", description: "Electrical Design Engineer" },
            { title: "Power Systems", description: "Power Systems Engineer" },
            { title: "Electronics", description: "Electronics Design Engineer" },
            { title: "Semiconductor Technology", description: "VLSI Design Engineer" },
            { title: "Renewable Energy", description: "Renewable Energy Engineer" },
            { title: "Industrial Automation", description: "Automation Engineer" },
            { title: "Instrumentation", description: "Instrumentation Engineer" },
        ],
    },
    facultySection: {
        members: eeeFaculty,
        subheading: "Department faculty bring experience across electrical engineering, electronics, power systems, renewable energy, and emerging engineering technologies.",
        featuredLabel: "HEAD OF DEPARTMENT",
        featuredDescription: "Dr Ram Sharan Bajpai leads research and teaching in power electronics, renewable energy, smart EV charging, and power quality.",
        profileDescription: "Faculty members contribute to engineering education, research publications, conferences, patents, and student projects.",
        showResearchShowcase: false,
    },
    faq: [
        { q: "What is the Department of Electrical and Electronics Engineering at SRMU?", a: "The department focuses on electrical engineering, electronics, power systems, technical education, practical training, and research-driven learning." },
        { q: "Which programmes are offered by the department?", a: "The department's programme offerings include undergraduate and postgraduate options in electrical engineering, electric vehicle technology, renewable energy, and power electronics. Refer to the current approved programme list for the latest availability." },
        { q: "Does the department provide industry exposure through L&T?", a: "Yes. Departmental industrial visits include L&T Komatsu Machine Yard and L&T Construction and Mining Machinery, where students gain exposure to heavy construction machinery and industrial applications." },
        { q: "What technical training opportunities are available?", a: "Students can participate in workshops and training programmes covering LabVIEW, Cadence EDA tools, VLSI design, PCB layout, and electronic circuit simulation." },
        { q: "Does the department organize industrial visits?", a: "Yes. Visits have been organized to L&T and NTPC to provide practical exposure to construction machinery, mining equipment, and power generation." },
        { q: "What research opportunities are available?", a: "Faculty contribute to research publications, conferences, patents, book chapters, and funded research projects." },
        { q: "Does the department encourage student projects?", a: "Yes. Student projects include robotic waste segregation, LFSR design, and AMBA APB protocol simulation." },
        { q: "Does SRMU participate in the Smart India Hackathon?", a: "Yes. SRMU has conducted internal rounds from 2022 to 2025. In 2025, three teams were selected for the final round." },
        { q: "What career opportunities are available after Electrical and Electronics Engineering?", a: "Graduates can explore roles in electrical engineering, electronics, VLSI design, semiconductor technology, renewable energy, power systems, automation, and instrumentation." },
        { q: "Does the department have funded research projects?", a: "Yes. The department lists a ₹13.08 lakh project on AI-based ultra-fast DC charging control for electric vehicles with smart battery thermal management powered by solar energy, funded by the Council of Science & Technology, Uttar Pradesh." },
    ],
    showFaculty: true,
    showScholarships: true,
    showBlogs: true,
    showCareerDescriptionCards: false,
};


