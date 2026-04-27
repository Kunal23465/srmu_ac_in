import { customeOverViewType } from "../../../types/home-data-type";
import { MissionVisionType } from "../../about/aboutusData";
import { counterDataType } from "../../about/leadership-and-governance/leadership-and-governance-data";
import visionImg from "../../../assets/images/about/aboutUs/vision.webp";
import missionImg from "../../../assets/images/about/aboutUs/mission-img.webp";
import { WhySliderData } from "../../about/silder/slider-data";


export const CentralLibraryOverviewData: customeOverViewType = {
    heading: "Central Library",
    content: `The Central Library and departmental libraries of SRMU supports teaching, learning, research and innovative activities of the University. The Central Library is fully air-conditioned as well as equipped with Wi-Fi and CCTV. Library adopts an open shelf system which facilitates students to visit, browse, read and explore any document available on the shelves. Books are classified and arranged according to the Dewey Decimal Classification (DDC) scheme. Library activities are fully automated with the application of open source Integrated Library Management Software ‘KOHA’.

The Library offers access to 65,399 books/eBooks, 121 print journals, 2,086 e-journals, Ph.D. theses, project reports, magazines, newspapers, and non-print materials. It is a member of IIM Lucknow, NDLI Club, Current Science Association, and DELNET, with subscriptions to databases like IEEE ASPP, EBSCO, DELNET, LexisNexis, and Manupatra. Students and faculty can access resources like NDLI, Vidya-mitra, e-PG Pathshala, NPTEL, SWAYAM, Shodhganga, and more, 24/7 via Web OPAC and SRMU eLibrary.`,
    links: [
        {
            title: "WebOPAC Access Link",
            url: "http://elibrary.srmu.ac.in:8999/",
        },
        {
            title: "Remote Access Link",
            url: "https://srmu.refread.com/#/home",
        },
    ],
};


export const counterDataForCentralLibraryPage: counterDataType[] = [
    { id: 1, value: "10", suffix: "+", label: "Institutional Libraries" },
    { id: 2, value: "120", suffix: "+", label: "Print Journals" },
    { id: 3, value: "2085", suffix: "+", label: "E-Journals" },
    { id: 4, value: "65350", suffix: "+", label: "Books/ E-Books" },
];


export type WhyItem1 = {
    title: string;
    description: string;
};

export const datalibrary: WhySliderData = {
    heading: "Library Sections",
    subheading: "Central Library comprises of",
    items: [
        {
            title: "Circulation Section",
            description:
                "The Circulation Section facilitates smooth issue, return, and renewal of books, ensuring easy access to learning resources for students and faculty.",
        },
        {
            title: "Reference Section",
            description:
                "The Reference Section provides a rich collection of encyclopedias, handbooks, dictionaries, and other resources for in-library consultation to support in-depth study and research.",
        },
        {
            title: "Periodical Section",
            description:
                "The Periodical Section offers a wide range of national and international journals, magazines, and newspapers to keep readers updated with the latest developments across various fields.",
        },
        {
            title: "E-Zone Section",
            description:
                "The E-Zone Section provides access to digital resources, online journals, e-books, databases, and internet facilities to support research and learning in a tech-enabled environment.",
        },
        {
            title: "Acquisition Section",
            description:
                "The Acquisition Section manages the selection, ordering, and procurement of books, journals, and digital resources to continuously enrich the library’s collection.",
        },
        {
            title: "Reprographic Section",
            description:
                "The Reprographic Section offers photocopying, printing, and scanning services to facilitate easy access and reproduction of academic materials for students and faculty.",
        },
        {
            title: "Student/Faculty Reading Section",
            description:
                "The Student/Faculty Reading Section provides a peaceful and comfortable space for focused reading, study, and academic engagement.",
        },
        {
            title: "OPAC (User Interface)",
            description:
                "The OPAC (Online Public Access Catalog) allows users to easily search, locate, and reserve library resources through a user-friendly digital interface.",
        },
        {
            title: "Cloak Room",
            description:
                "The Cloak Room provides safe and secure storage for personal belongings, ensuring a comfortable and distraction-free library experience.",
        }
    ]
};


export const dataSRMUlibrary: WhySliderData = {
    heading: "Institutional Libraries",
    subheading: "Knowledge hubs for academic excellence",
    items: [
        {
            title: "Institute of Legal Studies Library",
            description:
                "The library provides a wide range of legal books, journals, and reference materials to support learning, research, and professional growth.",
        },
        {
            title: "Institute of Management, Commerce & Economics Library",
            description:
                "It offers a rich collection of books, journals, case studies, and digital resources to support learning, research, and industry-oriented knowledge in business, commerce, and economics.",
        },
        {
            title: "Institute of Media Studies Library",
            description:
                "The IMS Library provides books, journals, audio-visuals, and digital resources to help students learn, research, and train in journalism, mass communication, and media studies.",
        },
        {
            title: "Institute of Diploma Studies Library",
            description:
                "The library offers key textbooks and resources to support diploma courses and student learning.",
        },
        {
            title: "Institute of Education and Research Library",
            description:
                "It offers books, journals, and study materials to support learning, teaching, and research in the field of education.",
        },
        {
            title: "Institute of Pharmacy Library",
            description:
                "The Institute of Pharmacy Library has books, journals, and study materials to help students learn and do research in pharmacy.",
        },
        {
            title: "Institute of Pharmaceutical Sciences Library",
            description:
                "The library provides a wide collection of books, journals, and online resources to support students and faculty in their studies, research, and academic growth in pharmaceutical sciences.",
        }
    ]
};




export const missionvisionData1: MissionVisionType[] = [
    {
        id: 1,
        image: visionImg,
        heading: "Vision",
        points: [
            "Advancement of SRMU’s Research and Learning fraternity with varied knowledge based resources, innovative services and vast collection powered by strategic partnerships with leading institutions across the country."],
    },
    {
        id: 2,
        image: missionImg,
        heading: "Mission",
        points: [
            "To extend adequate text and reference materials for its students and their mentors to ensure their comprehensive academic grooming. To play a pivotal role in exploring and inducing research activities in novel areas and to drive research scholars for value added accomplishments."
        ],
    },
];


export interface LibraryService {
    title: string;
    description: string;
}
export const libraryServices: LibraryService[] = [
  {
    title: "Remote Access to E-resources",
    description: "The library provides remote access facility of the subscribed e-databases to students and faculty members."
  },
  {
    title: "Digitization of the Library",
    description: "40-computer section with Wi-Fi/LAN for student and faculty e-resource access."
  },
  {
    title: "Kiosks",
    description: "KOHA-enabled kiosks allow easy catalogue search and account check."
  },
  {
    title: "Web OPAC",
    description: "Library Web OPAC provides 24x7 access to resources and account management."
  },
  {
    title: "Online Information Search",
    description: "In case of any query, library staff provides help and support to the library users via email and mobile phone also."
  },
  {
    title: "Inter Library Loan (ILL) Service",
    description: "The library has inter-library loan networking with DELNET and IIM, Lucknow."
  },
  {
    title: "Reprography Services",
    description: "The library has photocopy and scanning services for students and faculty members."
  }
];




export const datalastlibrary: WhyItem1[] = [
    {
        title: "Circulation Section",
        description:
            "The Circulation Section facilitates smooth issue, return, and renewal of books, ensuring easy access to learning resources for students and faculty.",
    },
    {
        title: "Reference Section",
        description:
            "The Reference Section provides a rich collection of encyclopedias, handbooks, dictionaries, and other resources for in-library consultation to support in-depth study and research.",
    },
    {
        title: "Periodical Section",
        description:
            "The Periodical Section offers a wide range of national and international journals, magazines, and newspapers to keep readers updated with the latest developments across various fields."
    },
    {
        title: "E-Zone Section",
        description:
            "The E-Zone Section provides access to digital resources, online journals, e-books, databases, and internet facilities to support research and learning in a tech-enabled environment."
    },
    {
        title: "Acquisition Section",
        description:
            "The Acquisition Section manages the selection, ordering, and procurement of books, journals, and digital resources to continuously enrich the library’s collection."
    },
    {
        title: "Reprographic Section",
        description:
            "The Reprographic Section offers photocopying, printing, and scanning services to facilitate easy access and reproduction of academic materials for students and faculty."
    },
    {
        title: "Student/Faculty Reading Section",
        description:
            "The Student/Faculty Reading Section provides a peaceful and comfortable space for focused reading, study, and academic engagement."
    },
    {
        title: "OPAC (User Interface)",
        description:
            "The OPAC (Online Public Access Catalog) allows users to easily search, locate, and reserve library resources through a user-friendly digital interface."
    },
    {
        title: "Cloak Room",
        description:
            "The Cloak Room provides safe and secure storage for personal belongings, ensuring a comfortable and distraction-free library experience."
    }

];
