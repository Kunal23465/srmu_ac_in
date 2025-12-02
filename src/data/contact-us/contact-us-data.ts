
import { customeOverViewType } from "../../types/home-data-type";

export const contactOverviewData: customeOverViewType = {
    heading: "Contact Us",
    content:
        "Prospective students, current enrollees, and other stakeholders can leverage this platform to connect directly with the university's knowledgeable and responsive staff, fostering effective communication and support.",
};


interface ContactCardType {
    id: number;
    title: string;
    value: string | string[];
    icon: string;
}
export const contactCardData: ContactCardType[] = [
    {
        id: 1,
        title: "Admission Tollfree",
        value: "18001026004",
        icon: "headphone",
    },
    {
        id: 2,
        title: "Admission Whatsapp Number",
        value: "+91-9120007948",
        icon: "whatsapp",
    },
    {
        id: 3,
        title: "Fax",
        value: "05248-262640 / 05248-262639",
        icon: "fax",
    },
    {
        id: 4,
        title: "Reception",
        value: "9554953791 / 9554953792",
        icon: "telephone",
    },
    {
        id: 5,
        title:
            "For post employment verification, student support related to examination",
        value: "coe@srmcue.edu.in",
        icon: "phone",
    },
    {
        id: 6,
        title: "For any result related query",
        value: "examination.cell@srmcue.edu.in",
        icon: "mailOpen",
    },
    {
        id: 7,
        title: "Email Us",
        value: ["admissions@srmcue.edu.in", "careers@srmcue.edu.in"],
        icon: "envelope",
    },
];

// contactAddress.data.ts

export const addressData = [
    {
        id: 1,
        title: "City Office Address",
        lines: [
            "C-2/42, Vishesh Khand,",
            "Opposite Chote Lal Nursery,",
            "Gomtinagar, Lucknow",
            "Admission Tollfree : 18001026004",
        ],
        mapUrl:
            "https://www.google.com/maps?q=C-2/42,+Vishesh+Khand,+Gomtinagar,+Lucknow&output=embed",
    },
    {
        id: 2,
        title: "Main Campus Address",
        lines: [
            "Shri Ramswaroop Memorial University",
            "Village - Hadauri, Post - Tindola,",
            "Lucknow-Deva Road, Barabanki,",
            "Uttar Pradesh - 225003",
        ],
        mapUrl:
            "https://www.google.com/maps?q=Shri+Ramswaroop+Memorial+University,+Barabanki&output=embed",
    },
];
