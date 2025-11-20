import { customeOverViewType } from "../../../types/home-data-type";
import img1 from "../../../assets/images/research/publication/journals-02022411500535.jpg"
import img2 from "../../../assets/images/research/publication/conference-proceedings-02022412101135.png"
import img3 from "../../../assets/images/research/publication/books-02022412233729-02062502162627.jpg"
import img4 from "../../../assets/images/research/publication/whatsapp-image-2025-04-16-at-14.01.12-02062502570043.jpeg"
import img5 from "../../../assets/images/research/publication/SOLARIS2020-24112310432994.jpeg"
import img6 from "../../../assets/images/research/publication/NCRTMA20-24112310451724.jpeg"
import img7 from "../../../assets/images/research/publication/img-4401-04032405453879.jpg"
import img8 from "../../../assets/images/research/publication/NATIONALMATHSCONFERENCE(2)-24112310463276.jpeg"
import img9 from "../../../assets/images/research/publication/chem1-04032401454585.jpg"
import img10 from "../../../assets/images/research/publication/businessman-putting-card-with-text-patent-pocket-1-02062502314466.jpg"

import journalsPdf1 from "../../../assets/pdf/research/publication/journals-2024-020625021944.pdf"
import journalsPdf2 from "../../../assets/pdf/research/publication/journal-paper-2023-130224015849.pdf"
import journalsPdf3 from "../../../assets/pdf/research/publication/journal-paper-2022-130224015831.pdf"
import journalsPdf4 from "../../../assets/pdf/research/publication/Jornal-2021-171123103924.pdf"
import journalsPdf5 from "../../../assets/pdf/research/publication/Jornal-2020-171123104021.pdf"
import journalsPdf6 from "../../../assets/pdf/research/publication/Jornal-2019-171123104043.pdf"
import journalsPdf7 from "../../../assets/pdf/research/publication/jornal-2018-171123104107.pdf"
import journalsPdf8 from "../../../assets/pdf/research/publication/jornal-2017-171123104156.pdf"
import journalsPdf9 from "../../../assets/pdf/research/publication/jornal-2016-171123104233.pdf"
import journalsPdf10 from "../../../assets/pdf/research/publication/jornal-2015-171123104314.pdf"
import ConferencePdf1 from "../../../assets/pdf/research/publication/conference-Proceeding-2022-171123115901.pdf";
import ConferencePdf2 from "../../../assets/pdf/research/publication/Conference-Proceeding-2021-171123120000.pdf";
import ConferencePdf3 from "../../../assets/pdf/research/publication/Conference-Proceeding-2020-171123121113.pdf";
import ConferencePdf4 from "../../../assets/pdf/research/publication/Conference-Proceeding-2019-171123013602.pdf";
import ConferencePdf5 from "../../../assets/pdf/research/publication/Conference-Proceeding-2018-171123050716.pdf";
import ConferencePdf6 from "../../../assets/pdf/research/publication/Conference-Proceeding-2017-171123050748.pdf";
import ConferencePdf7 from "../../../assets/pdf/research/publication/Conference-Proceeding-2016-171123052113.pdf";
import BookPdf1 from "../../../assets/pdf/research/publication/books-and-chapters-2024-020625021626.pdf";
import BookPdf2 from "../../../assets/pdf/research/publication/book-chapters-and-conference-2022-23-130224024131.pdf";
import workshopPdf from "../../../assets/pdf/research/publication/workshops-2024-merged-020625025701.pdf";
import patentPdf1 from "../../../assets/pdf/research/publication/2023-24-020625023144.pdf";
import patentPdf2 from "../../../assets/pdf/research/publication/2022-23-1--130224031849.pdf";
import patentPdf3 from "../../../assets/pdf/research/publication/343_Number-of-Patents-published_awarded-during-the-061223025759.pdf";
import patentPdf4 from "../../../assets/pdf/research/publication/Recent-Patents-061223025743.pdf";

export const PublicationOverviewData: customeOverViewType = {
    heading: "Publication",
    content:
        "SRMU's research publications showcase the institution's commitment to scholarly excellence, featuring a diverse array of impactful research contributions across various disciplines, fostering knowledge dissemination and academic advancement.",
};



export const PublicationTabData = {

    tab1: {

        title: "Journals",
        description: "Research findings and research papers by SRMU’s students and staff are often featured in various reputed academic journals,",
        cardData: [
            {
                title: "Journals 2024",
                imageUrl: img1,
                pdfUrl: journalsPdf1,
            },
            {
                title: "Journals 2023",
                imageUrl: img1,
                pdfUrl: journalsPdf2,
            }, {
                title: "Journals 2022",
                imageUrl: img1,
                pdfUrl: journalsPdf3,
            }, {
                title: "Journals 2021",
                imageUrl: img1,
                pdfUrl: journalsPdf4,
            }, {
                title: "Journals 2020",
                imageUrl: img1,
                pdfUrl: journalsPdf5,
            }, {
                title: "Journals 2019",
                imageUrl: img1,
                pdfUrl: journalsPdf6,
            }, {
                title: "Journals 2018",
                imageUrl: img1,
                pdfUrl: journalsPdf7,
            }, {
                title: "Journals 2017",
                imageUrl: img1,
                pdfUrl: journalsPdf8,
            },
            {
                title: "Journals 2016",
                imageUrl: img1,
                pdfUrl: journalsPdf9,
            },
            {
                title: "Journals 2015",
                imageUrl: img1,
                pdfUrl: journalsPdf10,
            },

        ]

    },
    tab2: {
        title: "Conference Proceedings",
        description: "SRMU hosts and participates in a wide range of academic conferences every year.",
        cardData: [
            {
                title: "Conference Proceedings 2022",
                imageUrl: img2,
                pdfUrl: ConferencePdf1,
            },
            {
                title: "Conference Proceedings 2021",
                imageUrl: img2,
                pdfUrl: ConferencePdf2,
            },
            {
                title: "Conference Proceedings 2020",
                imageUrl: img2,
                pdfUrl: ConferencePdf3,
            }, {
                title: "Conference Proceedings 2019",
                imageUrl: img2,
                pdfUrl: ConferencePdf4,
            }, {
                title: "Conference Proceedings 2018",
                imageUrl: img2,
                pdfUrl: ConferencePdf5,
            }, {
                title: "Conference Proceedings 2017",
                imageUrl: img2,
                pdfUrl: ConferencePdf6,
            }, {
                title: "Conference Proceedings 2016",
                imageUrl: img2,
                pdfUrl: ConferencePdf7,
            }
        ],
    },
    tab3: {
        title: "Books & Chapters",
        description: "Beyond academic journals, detailed and thorough research from SRMU staff and students have also been published in various books and book chapters.",
        cardData: [
            {
                title: "Books & Chapters 2024",
                imageUrl: img3,
                pdfUrl: BookPdf1,
            },
            {
                title: "Books & Chapters 2023",
                imageUrl: img3,
                pdfUrl: BookPdf2,
            },
        ],
    }
}

export const PublicationFloatingCardData = {
    title: "Workshop",
    description: "Whether delving into data analysis, refining literature review techniques, or navigating the intricacies of research ethics, SRMU's research workshops are designed to empower individuals at every stage of their academic and research journey, contributing to a vibrant and intellectually stimulating academic community.",
    pdfUrl: workshopPdf,
    imgUrl: img4,
}

export const PublicationConferenceData = [
    {
        img: img5,
        title: "SOLARIS-2020",
        date: "February 07-09, 2020",
        description: "Faculty of Physical Sciences, Institute of Natural Sciences and Humanities, SRMU in collaboration with BERS, Sukrit Solar Pvt Limited and Gajah Solar Power Pvt. Limited organized the “SOLARIS 2020 - a National Conference on Sustainable Environment and Climate” from 7-9 February 2020. The Guest of honour in SOLARIS 2020 was Prof. Vineet Saini (DST, GOI) and Chief guest was Prof. A.S.K. Sinha (Director, RGIPT). More than 20 invited lectures, poster sessions and 6 technical sessions were conducted during the conference."
    },
    {
        img: img6,
        title: "NCRTMA-20",
        date: "January 30-31, 2020",
        description: "Faculty of Mathematical & Statistical Sciences, Institute of Natural Sciences and Humanities, organized two days “2nd National Conference on Recent Trends in Mathematics with Applications”. Chief guest of NCRTMA-20 was Prof. (Dr.) Ram Bilas Misra (Ex Vice-Chancellor Dr. RML Avadh University, Ayodhya). More than 15 invited lectures were delivered by eminent mathematicians from Central University, IIT, NIT, IIIT and State University."
    }, {
        img: img7,
        title: "NatConBio-2019",
        date: "September 27-28, 2019",
        description: "“National Conference on Biotechnology Innovation: Interdisciplinary Approach to Agriculture, Food, Health, Environment and Sustainable Development (NatConBio-2019)” conference was organized by Faculty of Bio-Sciences and Faculty of Biotechnology, Institute of Bio-Sciences and Technology in association with Society for Biotechnologists (India) during September 27-28, 2019 at SRMU."
    }, {
        img: img8,
        title: "NCRTMA-19",
        date: "February 21-22, 2019",
        description: "The two day National Conference on “Recent Trends in Mathematics with Applications” was organized by the Faculty of Mathematical & Statistical Sciences, Shri Ramswaroop Memorial University, Lucknow -Deva Road, Uttar Pradesh serves as a pivotal platform for mathematicians, scholars, and researchers to engage in insightful discussions on the contemporary developments in the field."
    }, {
        img: img9,
        title: "RAICS-18",
        date: "November 02-03, 2018",
        description: "The Faculty of Chemical Sciences organized the 1st national conference on “Recent Approaches and Innovations in Chemical Sciences (RAICS)” which included wide area of disciplines including materials chemistry, nanochemistry, synthetic chemistry, natural products, supramolecular chemistry, medicinal chemistry, polymer chemistry, green chemistry, theoretical chemistry and environmental chemistry. The conference aims to accrue various novel developments and amelioration for collaborative sharing, discussion and implicate further progress by learned academicians, industrial experts and science enthusiasts through this platform."
    },
]

export const patentData = [
    {
        id: 1,
        title: "Patents 2023-24",
        image: img10,
        pdfUrl: patentPdf1,
    },
    {
        id: 2,
        title: "Patents 2022-23",
        image: img10,
        pdfUrl: patentPdf2,
    },
    {
        id: 3,
        title: "Patents 2020-21",
        image: img10,
        pdfUrl: patentPdf3,
    },
    {
        id: 4,
        title: "Patents 2019-20",
        image: img10,
        pdfUrl: patentPdf4,
    },

];