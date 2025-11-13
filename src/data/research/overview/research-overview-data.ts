
import { customeOverViewType } from "../../../types/home-data-type";
import { FacilityTypes, otherFacilitiesCardLayoutDataTypes } from "../../../types/overview-data-type";

export const ResearchOverviewData: customeOverViewType = {
    heading: "Research Overview",
    content:
        "SRMU fosters a vibrant research environment, encouraging faculty and students to engage in cutting-edge research across diverse disciplines. The university prioritizes innovation, collaborative projects, and industry-relevant studies, contributing to a dynamic research landscape that enhances academic excellence and real-world impact.",
};



export const DirectorSectionData = {

    imageUrl:
        "https://srmu.ac.in/storage/teams/whatsapp-image-2025-02-05-at-16.01.33-05022504034844.jpeg",
    tab1: {
        title: "Dear Researcher’s Greetings from Research & Consultancy cell!",
        content: "Shri Ramswaroop Memorial University, Uttar Pradesh is a platform for research scholars to get prepared to face the challenges on the research based on corporate and industrial world. The Research and Development experience will complement your rigorous curriculum and make learning by doing much more fun than what you would expect. The Research & Consultancy Cell at SRMU is a directorate to form central hub for all research activities by the different institutes of university .We participate in the policy making, governance, oversight and conduct of Ph.D. research program."
    },
    tab2: {
        name: "Dr. Rajeev Kumar",
        content: "Dr. Rajeev Kumar currently serves as Officiating Deputy Director (Research) & Associate Professor of Computer Science at Shri Ramswaroop Memorial University, Barabanki-225003, Uttar Pradesh, India. In 2023, he was selected for the 2% Scientists list recognized by Stanford University. He earned his PhD in Information Technology from Babasaheb Bhimrao Ambedkar University (A Central University), Lucknow, Uttar Pradesh, India. His doctoral research led to the conceptualization of Software Security Durability  a term emphasizing the convergence of software security and durability to bolster the digital landscape's resilience against threats.Additionally, he is the author of two books entitled 'Software Durability: Concepts and Practices,' published by Science Publisher, an imprint of CRC Press, Florida, United States of America, and 'Software Security: Concepts and Practices,' published by Chapman & Hall, an imprint owned by CRC Press, London, United Kingdom.With over 10 years of experience, he has successfully led and contributed to numerous projects focused on software security, software durability, and AI- based decision-making techniques.His research has resulted in the publication of over 100 papers, including more than 90 in Scopus indexed and more than 60 in WoS / SCI indexed journals and conferences, thereby validating the relevance and impact of his work.Currently, his Google Scholar citations exceed 3500 with an h - index of 34. Notably, his contributions have been acknowledged through 04 Indian patents and 02 international patents, highlighting the innovation and applicability of his research.Additionally, he has executed capacity - building programmes for scientists, executives, and officers and recently completed consultancy projects for both central and state governments.The convergence of Dr.Kumar's expertise in information technology, cybersecurity, data protection, and AI-based decision-making techniques equips him to make meaningful contributions across diverse research areas."
    }
}

export interface ResearchMember {
    id: number;
    name: string;
    designation: string;
    position: string;
    image: string;
}

export const researchMembers: ResearchMember[] = [
    {
        id: 1,
        name: "Prof. (Dr.) Vijay Tiwari",
        designation: "Vice Chancellor",
        position: "Chairman",
        image: "https://srmu.ac.in/storage/teams/whatsapp-image-2025-11-03-at-15.21.11-1--04112510102869.jpeg",
    },
    {
        id: 2,
        name: "Prof. (Dr.) B.M. Dixit",
        designation: "Director Student Welfare, SRMU",
        position: "Member (Ex-officio)",
        image: "https://srmu.ac.in/storage/teams/prof.-b-m-dixit-photo-10062510410818.jpg",
    },
    {
        id: 3,
        name: "Prof. (Dr.) Manju Pandey",
        designation: "Director IQP, SRMU",
        position: "Member (Ex-officio)",
        image: "https://srmu.ac.in/storage/teams/dr.-manju-singh-11zon-2602240551361.jpg",
    },
    {
        id: 4,
        name: "Prof. V. N. Rajasekharan Pillai",
        designation: "Ex. Chairman/Vice Chairman, University Grants Commission",
        position: "Hon’ble Member (External)",
        image: "https://srmu.ac.in/storage/teams/dr.-manju-singh-11zon-2602240551361.jpg",
    },
    {
        id: 5,
        name: "Dr. Rajeev Kumar",
        designation: "Offg. Deputy Director Research & Consultancy, SRMU",
        position: "Convenor (Ex-officio)",
        image: "https://srmu.ac.in/storage/teams/whatsapp-image-2025-02-05-at-16.01.33-05022504034844.jpeg",
    },
    {
        id: 6,
        name: "Prof. Mohd. Muzammil",
        designation: "Ex. Vice Chancellor, M.J.P. Rohilkhand University, Bareilly",
        position: "Hon’ble Member (External)",
        image: "https://srmu.ac.in/storage/teams/cs-13022411412647.jpg",
    },
    {
        id: 7,
        name: "Prof. Alok Dhawan",
        designation: "Director, CSIR-IITR, Lucknow",
        position: "Hon’ble Member (External)",
        image: "https://srmu.ac.in/storage/teams/dfds-13022411455919.jpg",
    },
    {
        id: 8,
        name: "Dr. Prabodh Trivedi",
        designation: "Director, CSIR-CIMAP, Lucknow",
        position: "Hon’ble Member (External)",
        image: "https://srmu.ac.in/storage/teams/fdg-13022412030547.jpg",
    },
    {
        id: 9,
        name: "Prof. A.P. Mittal",
        designation: "Ex. Member Secretary, AICTE, GoI",
        position: "Hon’ble Member (External)",
        image: "https://srmu.ac.in/storage/teams/bf-13022412144875.jpg",
    },
    {
        id: 10,
        name: "Dr. Madhu Dixit",
        designation: "Ex. Director, CSIR-CDRI, Lucknow",
        position: "Hon’ble Member (External)",
        image: "https://srmu.ac.in/storage/teams/gsd-13022412174358.jpg",
    },
    {
        id: 11,
        name: "Prof. Shubhini Saraf",
        designation: "Professor, BBAU, Lucknow",
        position: "Hon’ble Member (External)",
        image: "https://srmu.ac.in/storage/teams/gdf-13022412224824.jpg",
    },
    {
        id: 12,
        name: "Dr. D.K. Srivastava",
        designation: "Jt. Director CSTUP, Lucknow",
        position: "Hon’ble Member (External)",
        image: "https://srmu.ac.in/storage/teams/dfg-13022412245747.jpg",
    },
];
export interface ContactInfo {
    label: string;
    value: string | string[];
    icon: string;
}

export interface Department {
    department: string;
    faculty: string;
    email: string;
}

export interface Institute {
    name: string;
    departments: Department[];
}

export const contactInfo: ContactInfo[] = [
    {
        label: "ROOM NO.",
        value: "301, 3rd Floor, B-2 Block, SRMU Campus",
        icon: "https://srmu.ac.in/storage/common-section/add-icon1-23102305153612.png",
    },
    {
        label: "CONTACT NO.",
        value: "7784940188",
        icon: "https://srmu.ac.in/storage/common-section/add-icon2-23102305160684.png",
    },
    {
        label: "EXT. NO",
        value: "440, 442",
        icon: "https://srmu.ac.in/storage/common-section/add-icon3-23102305155982.png",
    },
    {
        label: "EMAILS",
        value: ["director.research@srmuc.ac.in", "dd.research@srmuc.ac.in", "research@srmuc.ac.in"],
        icon: "https://srmu.ac.in/storage/common-section/add-icon4-23102305161699.png",
    },
];

export const researchInstitutes: Institute[] = [
    {
        name: "Institute of Technology",
        departments: [
            { department: "Civil Engineering", faculty: "Dr. Pragya Singh", email: "pragyasingh.foce@srmuc.ac.in" },
            { department: "Mechanical Engineering", faculty: "Dr. R.K. Porwal", email: "dean.mec@srmuc.ac.in" },
            { department: "Electrical Engineering", faculty: "Dr. Sunil Kumar", email: "sksingh.rs.eee13@jithu.ac.in" },
            { department: "Electronics Engineering", faculty: "Dr. Jay Pandey", email: "jay.pandey@srmuc.ac.in" },
            { department: "Computer Science & Engineering", faculty: "Dr. Satya Bhushan Verma", email: "satyabhushan.cse@srmuc.ac.in" },
            { department: "Computer Science & Information Systems", faculty: "Dr. Nitya Nand Dwivedi", email: "nityananddwivedi.csis@srmuc.ac.in" },
        ],
    },
    {
        name: "Institute of Natural Sciences & Humanities",
        departments: [
            { department: "Physical Sciences", faculty: "Dr. Mukesh Mishra", email: "mukesh.phy@srmuc.ac.in" },
            { department: "Chemical Sciences", faculty: "Dr. Dolly Kumari", email: "dolly.kumari.focs@srmuc.ac.in" },
            { department: "Mathematical Sciences", faculty: "Dr. Kulbhushan Singh", email: "kulbhush.maths@srmuc.ac.in" },
            { department: "Humanities", faculty: "Dr. Amarap Lal Singh", email: "amarpal.hum@srmuc.ac.in" },
        ],
    },
    {
        name: "Institute of Management, Commerce & Economics",
        departments: [
            { department: "Management Commerce & Economics", faculty: "Dr. Manoj Kumar", email: "manoj.mgmt@srmuc.ac.in" },
            { department: "Management Commerce & Economics", faculty: "Dr. Priyanka Srivastav", email: "priyankasr.lmcc@srmuc.ac.in" },
        ],
    },
    {
        name: "Institute of Bioscience & Technology",
        departments: [
            { department: "Bioscience", faculty: "Dr. Neeraj Gupta", email: "neeraj.bio@srmuc.ac.in" },
            { department: "Biotechnology", faculty: "Dr. Tabish Qidwai", email: "tabish.ibst@srmuc.ac.in" },
        ],
    },
    {
        name: "Institute of Legal Studies",
        departments: [
            { department: "Legal Studies", faculty: "Dr. Upendra Nath Tiwari", email: "upendranath.ils@srmuc.ac.in" },
        ],
    },
    {
        name: "Institute of Media Studies",
        departments: [
            { department: "Media Studies", faculty: "Dr. Dhwani Singh", email: "dhwanisingh.ims@srmuc.ac.in" },
        ],
    },
    {
        name: "Multi-disciplinary Centre for Advanced Research and Studies",
        departments: [
            { department: "Agricultural Sciences", faculty: "Dr. Balbeer Singh", email: "deputydirector.ias@srmuc.ac.in" },
            { department: "Advance Educational Studies", faculty: "Dr. Rashmi Chaturvedi", email: "rashmi.ies@srmuc.ac.in" },
            { department: "Pharmaceutical Sciences", faculty: "Dr. Manju Pandey", email: "manjupandey.pharmacy@srmuc.ac.in" },
        ],
    },
];
export const otherfacilitiesCardData: FacilityTypes[] = [
    {
        title: "Policy for Research Promotion",
        description: `
      SRMU's research promotion policy empowers and incentivizes faculty and students to engage in impactful research through grants, collaboration opportunities, and infrastructure support
    `,
        imageUrl: "https://srmu.ac.in/storage/common-section/researhethics-0605240238253.jpg",
        pdfUrl: "https://srmu.ac.in/storage/common-section/Policy-for-Research-Promotion-031123124058.pdf",
    },
    {
        title: "Policy for Collaboration",
        description: `
          SRMU's research collaboration policy encourages dynamic partnerships, fostering interdisciplinary cooperation and knowledge exchange to drive impactful and innovative research outcomes.`,
        imageUrl: "https://srmu.ac.in/storage/common-section/Policy-for-Research-Fund-11112303330249.jpg",
        pdfUrl: "https://srmu.ac.in/storage/common-section/Policy-for-Collaboration-031123124758.pdf",
    },
    {
        title: "Policy for Consultancy",
        description: `
          SRMU's research consultancy policy promotes collaborative projects, enabling faculty and students to offer expertise and solutions to industry challenges, fostering valuable partnerships.`,
        imageUrl: "https://srmu.ac.in/storage/common-section/Policy-for-Research-Fund-11112303330249.jpg",
        pdfUrl: "https://srmu.ac.in/storage/common-section/Policy-for-Consultancy-031123124839.pdf",
    },
    {
        title: "Policy for Research Ethics",
        description: `
      SRMU's research ethics policy upholds the highest standards, ensuring integrity, transparency, and responsible conduct in all research activities, fostering a culture of ethical inquiry.
    `,
        imageUrl: "https://srmu.ac.in/storage/common-section/policy-for-research-promotion-(1)-11112303343481.jpg",
        pdfUrl: "https://srmu.ac.in/storage/common-section/Policy-for-Academic-Integrity-in-Research_2019-20-031123124907.pdf",
    },
    {
        title: "Policy for Research Fund",
        description: `
     SRMU's research fund policy supports and allocates resources for innovative projects, empowering faculty and students to pursue impactful research across diverse disciplines.
    `,
        imageUrl: "https://srmu.ac.in/storage/common-section/policy-for-collaboration-(1)-11112303350010.jpg",
        pdfUrl: "https://srmu.ac.in/storage/common-section/Policy-for-Allocation-of-University-Research-Fund--031123124939.pdf",
    },
    {
        title: "Policy for IPR",
        description:
            "SRMU's research IPR (Intellectual Property Rights) policy safeguards and promotes the ownership, protection, and commercialization of intellectual property arising from research endeavors.",
        imageUrl: "https://srmu.ac.in/storage/common-section/policy-for-consultancy-(1)-11112303322262.jpg",
        pdfUrl: "https://srmu.ac.in/storage/common-section/Model-Guidelines-on-Implementation-of-IPR-Policy_2-031123125149.pdf",
    },

];

export const otherFacilitiesCardLayoutData: otherFacilitiesCardLayoutDataTypes = {
    title: "Key Hightlights of Our Policies",
    content: "From innovative research spaces to interactive learning environments, SRMCEM offers a range of facilities.",
};



export const phdOrdinanceData = {
    title: "Ph.D. Ordinance",
    description: `The Ph.D. programme in the university from academic session 2022–2023 (even semester)
  and onwards will be governed by this ordinance which is written in accordance with
  the University Grant Commission Regulations, 2022.`,
    imageUrl: "https://srmu.ac.in/storage/common-section/514x520-1602241232531.jpg",
    pdfUrl: "https://srmu.ac.in/storage/common-section/phd-ordinance-session-2022-23-130224114827.pdf",
};
