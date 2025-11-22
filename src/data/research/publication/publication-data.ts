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
import conferenceImg1 from "../../../assets/images/research/publication/conference/chem1-04032402231959.jpg";
import conferenceImg2 from "../../../assets/images/research/publication/conference/chem2-04032402231932.jpg";
import conferenceImg3 from "../../../assets/images/research/publication/conference/chem3-04032402231933.jpg";
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
        description: "Faculty of Physical Sciences, Institute of Natural Sciences and Humanities, SRMU in collaboration with BERS, Sukrit Solar Pvt Limited and Gajah Solar Power Pvt. Limited organized the “SOLARIS 2020 - a National Conference on Sustainable Environment and Climate” from 7-9 February 2020. The Guest of honour in SOLARIS 2020 was Prof. Vineet Saini (DST, GOI) and Chief guest was Prof. A.S.K. Sinha (Director, RGIPT). More than 20 invited lectures, poster sessions and 6 technical sessions were conducted during the conference.",
        detailDescription: "The National Conference on Sustainable Environment and Climate organized at Shri Ramswaroop Memorial University (SRMU) stands as a pivotal platform for scholars, researchers, and experts to converge and delve into crucial discussions surrounding environmental sustainability and climate change. With a focus on addressing contemporary environmental challenges, the conference provides a forum for the exchange of innovative ideas, cutting-edge research findings, and sustainable practices. Renowned experts and academicians from diverse fields share their insights, contributing to a comprehensive understanding of the intricate interplay between human activities and the environment.The conference, hosted by SRMU, facilitates interdisciplinary collaborations, fostering a community of researchers dedicated to finding sustainable solutions to mitigate climate change impacts.From insightful keynote addresses to research paper presentations, the event promotes knowledge dissemination and encourages the adoption of eco- friendly practices.The National Conference on Sustainable Environment and Climate at SRMU serves not only as an academic gathering but also as a catalyst for the creation of actionable strategies that contribute to a more sustainable and resilient future in the face of environmental challenges."
    },
    {
        img: img6,
        title: "NCRTMA-20",
        date: "January 30-31, 2020",
        description: "Faculty of Mathematical & Statistical Sciences, Institute of Natural Sciences and Humanities, organized two days “2nd National Conference on Recent Trends in Mathematics with Applications”. Chief guest of NCRTMA-20 was Prof. (Dr.) Ram Bilas Misra (Ex Vice-Chancellor Dr. RML Avadh University, Ayodhya). More than 15 invited lectures were delivered by eminent mathematicians from Central University, IIT, NIT, IIIT and State University."
        ,
        detailDescription: "The 2nd National Conference on Recent Trends in Mathematics with Applications, organized at Shri Ramswaroop Memorial University (SRMU), stands as a significant academic gathering that brings together scholars, mathematicians, and researchers to explore and discuss the latest advancements in the field of mathematics. The conference serves as a platform for the exchange of innovative ideas and the dissemination of cutting-edge research findings across various branches of mathematics, showcasing the diverse applications of mathematical principles in solving real-world problems. With keynote lectures, paper presentations, and interactive sessions, the conference creates an intellectually stimulating environment, fostering collaboration and networking among participants from academic institutions and research organizations.At SRMU's National Conference, the emphasis is not only on theoretical advancements but also on the practical applications of mathematical theories in different domains. The event provides a forum for participants to engage in meaningful discussions, share their research contributions, and explore potential interdisciplinary collaborations. By organizing this conference, SRMU aims to contribute to the academic discourse in mathematics, inspire future research endeavors, and promote the integration of mathematical concepts into various scientific and technological applications."
    }, {
        img: img7,
        title: "NatConBio-2019",
        date: "September 27-28, 2019",
        description: "“National Conference on Biotechnology Innovation: Interdisciplinary Approach to Agriculture, Food, Health, Environment and Sustainable Development (NatConBio-2019)” conference was organized by Faculty of Bio-Sciences and Faculty of Biotechnology, Institute of Bio-Sciences and Technology in association with Society for Biotechnologists (India) during September 27-28, 2019 at SRMU."
    ,
        detailDescription: "The National Conference on Biotechnology Innovation: Interdisciplinary Approach to Agriculture, Food, Health, Environment, and Sustainable Development, meticulously organized at Shri Ramswaroop Memorial University (SRMU), emerges as a vital forum for researchers, scientists, and scholars to explore the transformative potential of biotechnology across diverse domains. The conference is a collaborative space where experts from various disciplines converge to discuss innovative approaches and applications of biotechnology in addressing challenges related to agriculture, food security, human health, environmental conservation, and sustainable development. Through plenary sessions, paper presentations, and interactive workshops, participants delve into the intricate intersections between biotechnology and these critical sectors, aiming to pave the way for a more sustainable and technologically advanced future.SRMU's commitment to fostering an interdisciplinary approach is evident in this conference, where the focus extends beyond the boundaries of individual scientific domains. By bringing together professionals from agriculture, healthcare, environmental science, and other relevant fields, the event encourages collaborative research initiatives and the exchange of insights that can lead to holistic solutions. This national conference serves as a testament to SRMU's dedication to advancing scientific knowledge, promoting interdisciplinary collaboration, and contributing to the broader dialogue on biotechnological innovations for a more sustainable and resilient future."
}, {
        img: img8,
        title: "NCRTMA-19",
        date: "February 21-22, 2019",
        description: "The two day National Conference on “Recent Trends in Mathematics with Applications” was organized by the Faculty of Mathematical & Statistical Sciences, Shri Ramswaroop Memorial University, Lucknow -Deva Road, Uttar Pradesh serves as a pivotal platform for mathematicians, scholars, and researchers to engage in insightful discussions on the contemporary developments in the field."
        ,
        detailDescription: "The conference provides a forum for the exchange of groundbreaking ideas, methodologies, and research findings, encompassing a broad spectrum of mathematical applications in diverse areas. Through keynote lectures, paper presentations, and interactive sessions, participants delve into emerging trends such as computational mathematics, data science, and the intersection of mathematics with other scientific disciplines, offering a comprehensive exploration of the evolving landscape of mathematical research.The conference at SRMU not only highlights theoretical advancements but also emphasizes the practical applications of mathematical theories.By fostering a collaborative environment, the event encourages interdisciplinary interactions and provides a platform for participants to showcase their research contributions.The exchange of knowledge and expertise during this national conference contributes to the growth and enrichment of the mathematical community, while also fostering a culture of innovation and inquiry within the academic landscape at Shri Ramswaroop Memorial University."
}, {
        img: img9,
        title: "RAICS-18",
        date: "November 02-03, 2018",
        description: "The Faculty of Chemical Sciences organized the 1st national conference on “Recent Approaches and Innovations in Chemical Sciences (RAICS)” which included wide area of disciplines including materials chemistry, nanochemistry, synthetic chemistry, natural products, supramolecular chemistry, medicinal chemistry, polymer chemistry, green chemistry, theoretical chemistry and environmental chemistry. The conference aims to accrue various novel developments and amelioration for collaborative sharing, discussion and implicate further progress by learned academicians, industrial experts and science enthusiasts through this platform."
        ,
        detailDescription: "The National Conference on Recent Approaches and Innovations in Chemical Sciences, meticulously organized at Shri Ramswaroop Memorial University (SRMU), emerges as a pivotal gathering for chemists, researchers, and scholars to explore and discuss the latest advancements in the field of chemical sciences. This conference provides a comprehensive platform for the exchange of novel ideas, cutting-edge research findings, and the exploration of innovative methodologies. With thematic sessions covering diverse aspects of chemistry, including organic, inorganic, physical, and analytical chemistry, participants engage in meaningful discussions, presenting their research work and gaining insights into the dynamic landscape of contemporary chemical sciences.At SRMU's National Conference, the emphasis extends beyond theoretical discussions to the practical application of chemical innovations. Researchers and practitioners not only share their theoretical advancements but also explore the potential applications of their findings in various industries and sectors. The conference fosters an environment of collaboration and knowledge-sharing, paving the way for interdisciplinary connections and the integration of chemical sciences into broader scientific and technological advancements. By hosting this national conference, SRMU reaffirms its commitment to advancing knowledge in chemical sciences and contributing to the ongoing dialogue surrounding recent approaches and innovations in the field."
        ,
        images: [
            conferenceImg1, conferenceImg2, conferenceImg3
        ]
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