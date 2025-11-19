import { customeOverViewType } from "../../../types/home-data-type";
import img1 from "../../../assets/images/campus-life/outreach-activations/apni-pathshala-05032411571042.jpg";
import img2 from "../../../assets/images/campus-life/outreach-activations/nss-05032412004020.jpg";
import img3 from "../../../assets/images/campus-life/outreach-activations/shuddhi-05032411530091.jpg";
import img4 from "../../../assets/images/campus-life/outreach-activations/free-legal-aid-centre-19012401222255.jpg";
import img5 from "../../../assets/images/campus-life/outreach-activations/swachh-bharat-abhiyan-05032411450182.jpg";
import img6 from "../../../assets/images/campus-life/outreach-activations/unnat-bharat-abhiyan-05032411402516.jpg";
import img from "../../../assets/images/campus-life/outreach-activations/b-1-min-0503241252176.png";

import stat1 from "../../../assets/images/campus-life/outreach-activations/camps-organized-19012401183310.png";
import stat2 from "../../../assets/images/campus-life/outreach-activations/nss-volunteers-19012401184820.png";
import stat3 from "../../../assets/images/campus-life/outreach-activations/blood-donation-drives-19012401190156.png";

export const OutreachActivationsOverviewData: customeOverViewType = {
    heading: "Outreach Activations",
    content: `The University’s CSR activities intend to link the university with the community. Geographically surrounded by the villages of Barabanki District, Uttar Pradesh, the CSR activities have been an integral part of SRMU since its inception. The need to improve the condition of the rural people calls for the CSR activity. With this vision, SRMU has adopted five villages from its local neighbourhood. Efforts have been made to bring about appropriate behavioural changes by imparting education and sensitize them towards the use of science and technology.
`,
};

export const outreachItems = {
    title: "Holistic Development of Students",
    img: img,
    desc: [
        {
            point: "The University’s extension activities intend to link the university with the community. Geographically surrounded by the villages of Barabanki District, Uttar Pradesh, the extension activities have been an integral part of SRMU since its inception."
        },
        {
            point: "The need to improve the condition of the rural people calls for the extension activity. With this vision, SRMU has adopted five villages from its local neighborhood. Efforts have been made to bring about appropriate behavioral changes by imparting education and sensitize them towards the use of science and technology."
        },
        {
            point: "With such extension and outreach programs, SRMU sensitizes its students to develop social values, widen their social responsibilities and knowledge towards community issues and challenges. Students are motivated to join NSS, NCC, 1090-Power Angel, Unnat Bharat Abhiyan (UBA) and Apni Pathshala. To spread awareness on health and hygiene the student volunteers of NSS and NCC participate in the Swachchta Pakhwada (cleanliness drive at the adopted villages) every year. Students work effortlessly towards sensitization of the villagers on issues of health, education, personal hygiene and cleanliness, etc. To promote the feeling of social service, the University in association with SGPGI and Dr. RML Hospital, Lucknow organizes Medical and Blood Donation Camps where every year around 100 students donate blood."
        },
        {
            point: "With the active involvement of the NGOs, the university strives to promote awareness on HIV/AIDS, Health and Sanitation, Legal Literacy, Population Control, Women Empowerment and education. Students motivate the villagers to educate their children and encourage them to work with I Care India, NGO."
        },
    ]
}

export const outreachStats = [
    { value: 1000, label: "Camps Organised", img: stat1 },
    { value: 500, label: "NSS Volunteers", img: stat2 },
    { value: 50, label: "Blood Donation Drives", img: stat3 },
];

export const OutreachInitiativesData = {
    title: "Initiatives",
    desc: "Realizing the importance of child education, women empowerment, health and hygiene, unemployment, lack of a suitable platform for raising the issues and causes of the society to appropriate government bodies, etc., the University, since its inception in 2012, took several initiatives to address these issues pertaining to the growth and development of the nearby communities.",

    initiatives: [
        {
            front: {
                title: "Apni Pathshala",
                img: img1,
            },
            back: {
                title: "Apni Pathshala",
                description: "To empower the underprivileged children, “Apni Pathshala” was constituted in SRMU on Sept. 12, 2012, which has been instrumental in imparting primary education for children. Free skill development workshops, like bag making from waste product, snack items, rakhi making, papad making, pickle making, etc., were organized to enhance the livelihood of women from the nearby villages.",
            }
        },
        {
            front: {
                title: "NSS",
                img: img2,
            },
            back: {
                title: "NSS",
                description: "Shri Ramswaroop Memorial University is one step ahead to motivate students for social welfare along with education. NSS Volunteers are highly encouraged to contribute their knowledge and skills at ground level. The programme aims to include social welfare in students, and to provide service to society without bias.",
            }
        },
        {
            front: {
                title: "Shuddhi",
                img: img3,
            },
            back: {
                title: "Shuddhi",
                description: "The CSR campaign is an endeavor of Shri Ramswaroop Memorial University for societal development under the directive of the Government of India. This campaign is aimed at promoting hygiene, sanitation and healthy living habits to ensure that each and everyone is aware about the basics of healthy liviing. Shuddhi - Be Clean, Be Healthy has been conceptualized to be in sync with Swachh Bharat, Swasth Bharat Mission for a better and healthier India.",
            }
        },
        {
            front: {
                title: "Free Legal Aid Centre",
                img: img4,
            },
            back: {
                title: "Free Legal Aid Centre",
                description: "Keeping the tenets of the Constitution in mind the Institute of Legal Studies, Shri Ramswaroop Memorial University, Legal Aid Cell seeks to ensure dissemination of justice equally among all sections of the society. To this end, it seeks to promote free legal aid so that those who may be at a disadvantage end may be able to access courts and justice on equal terms with the more fortunate way.",
            }
        },
        {
            front: {
                title: "Swacch Bharat Abhiyan",
                img: img5,
            },
            back: {
                title: "Swacch Bharat Abhiyan",
                description: "NSS – Unit 2 of SHRI RAMSWAROOP MEMORIAL UNIVERSITY organizes 7 days special (Day/Night) camps at regular intervals in the five local villages of Barabanki which have been adopted by the university. NSS Volunteers visited the adopted villages and took up door to door campaign made the local masses aware about the importance of cleanliness in their surroundings. During the campaign the discussion was focused on various aspects of cleanliness in village.",
            }
        },
        {
            front: {
                title: "Unnat Bharat Abhiyan",
                img: img6,
            },
            back: {
                title: "Unnat Bharat Abhiyan",
                description: "As covid-19 had hit the entire world and due to high risk of infection, people need to take precautions. Thus, an initiative for free masks and sanitizer distribution to the economically weaker section of society was started by Shri Ramswaroop Memorial University (SRMU) under Unnat Bharat Abhiyan project. Ladies from nearby villages good at sewing and stitching were engaged after a short training to make the masks and were paid for the same. It is a movement towards rural transformation and development.",
            }
        },
    ]
};

export const outreachCustomTopFooter = [
    {
        content: `Want to learn more about SRMU?`,
        btnText: "Request Registration",
    },
];