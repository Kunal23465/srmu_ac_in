import { customeOverViewType } from "../../../types/home-data-type";

export const WomenEmpowerOverviewData: customeOverViewType = {
    heading: "Women Empowerment",
    content: `SRMU focuses on unique women empowerment initiatives which engage, sensitize and empower the students and faculty of the institution towards the cause of gender equality. With the motto of “Educate and Empower”, the university organizes and celebrate women's day, guest lectures, workshops and awareness programs on various women related issues to equip them with wide range of skills and knowledge for the betterment of self and society. The university also focuses on empowering and strengthening their confidence to be the future women leaders, technocrats, entrepreneurs and scientists. Regular sessions are organized to instil self-confidence and ethical values and make them realize their potential.
`,
};

export const items = [
    "Create gender sensitivity awareness among students and create positive values supporting girls/ women’s and their rights.",
    "Provide an integrated and interdisciplinary approach to understand the social and cultural constructions of gender that shape the experiences of women and men in society.",
    "Generate awareness regarding equality in law, social system and democratic activities.",
    "Maintain a good workplace free from discrimination and bullying.",
    "Enable girls to have a wider role in decision‑making.",
    "Prevent and respond to gender‑based violence.",
    "Maintain gender equality in teaching and education systems.",
    "Create a gender‑inclusive learning environment.",
    "Conduct regular awareness activities among students and staff.",
    "Provide facilities and infrastructure for staff and students.",
];


export const stats = [
    { value: "250+", label: "1090 Power Angels" },
    { value: "150+", label: "1090 Power Heroes" },
    { value: "100+", label: "NCC Cadets (Female)" },
];



export interface InitiativeItem {
    title: string;
    shortDescription: string;
    fullDescription: string;
    bgColor: string;
}



export const initiativesData: InitiativeItem[] = [
    {
        title: "Establishment of NCC",
        shortDescription:
            "NCC took its root in university with the sanction of a platoon of 55 girl cadets by 20 UP Girls BN on 20",
        fullDescription:
            `<h2 class="font19 mb-4 text-[#023047] fw500">Establishment of NCC</h2>
       <p class="text-gray-700 leading-relaxed mb-4">
         NCC took its root in university with the sanction of a platoon of 55 girl cadets by 20 UP Girls BN on 20<sup>th</sup> June 2014. These girl cadets undergo a training of three years to earn NCC “C” Certificate.
       </p>`,
        bgColor: "#fbf0d5"
    },
    {
        title: "Women’s Cell",
        shortDescription:
            "The women’s cell was initiated to preserve the security of female staff and for handling their grievances at the university. It promotes well-being at workplace and provides a platform for informal interaction, sharing of views and experiences.",
        fullDescription:
            `<h2 class="font19 fw500 mb-4 text-[#023047]">Special Camps on health & hygiene
</h2>
       <p class="text-gray-700 leading-relaxed mb-4">
        In addition to the menstrual health and hygiene session, free distribution of sanitary napkins with the support of Unicharm, counseling sessions and free interaction with gynaecologist, awareness program were organized to enlighten the women working with SRMU and the women from neighbouring villages. More than 200 rural women have been benefitted during the last 5 years.
       </p>`,
        bgColor: "#f5d993"
    },
    {
        title: "Special Camps on health & hygiene",
        shortDescription:
            "In addition to the menstrual health and hygiene session, free distribution of sanitary napkins with the support of Unicharm, counseling sessions and free interaction with gynaecologist, awareness program were organized to enlighten the women working with SRMU and the women from neighbouring villages. More than 200 rural women have been benefitted during the last 5 years.",
        fullDescription:
            `<h2 class="font19 fw500 mb-4 text-[#023047]">Environmental Awareness Drives</h2>
       <p class="text-gray-700 leading-relaxed mb-4">
         The university regularly conducts tree plantation campaigns, plastic-free campus programs,
         and environmental workshops to promote sustainability and ecological balance.
       </p>`,
        bgColor: "#ffb703"
    },

    {
        title: "Community Engagement Program",
        shortDescription:
            "University has partnered with WCSO for running gender sensitization workshops and training programs for police females of local rural areas. It also aims at creating awareness among girls regarding sexual harassment and self-defence.",
        fullDescription:
            `<h2 class="font19 fw500 mb-4 text-[#023047]">Community Engagement Program
</h2>
       <p class="text-gray-700 leading-relaxed mb-4">
         University has partnered with WCSO for running gender sensitization workshops and training programs for police females of local rural areas. It also aims at creating awareness among girls regarding sexual harassment and self-defence.
       </p>`,
        bgColor: "#dfeefc"
    },
    {
        title: "Appointment of Power Angles",
        shortDescription:
            "Regular sessions by 1090 Women Powerline have been organized in the campus at regular intervals. These sessions have been presided over by senior officials of 1090 Women Powerline. 250+ girls of university have been appointed as Power Angels.",
        fullDescription:
            `<h2 class="font19 fw500 mb-4 text-[#023047]">Appointment of Power Angles
</h2>
       <p class="text-gray-700 leading-relaxed mb-4">
        Regular sessions by 1090 Women Powerline have been organized in the campus at regular intervals. These sessions have been presided over by senior officials of 1090 Women Powerline. 250+ girls of university have been appointed as Power Angels.


       </p>`,
        bgColor: "#b5d8fa"
    },
    {
        title: "Self-Defence Workshops",
        shortDescription:
            "Tree plantation, cleanliness drives, and sustainability workshops...",
        fullDescription:
            `<h2 class="font19 fw500 mb-4 text-[#023047]">Self-Defence Workshops</h2>
       <p class="text-gray-700 leading-relaxed mb-4">
Several self-defence workshops have been organized in the campus for female students and staff in association with Red Brigade. Girls are taught ultimate tactical & combat krav maga Israeli Self-Defence & Combat fighting techniques.

       </p>`,
        bgColor: "#73ade7"
    }
];