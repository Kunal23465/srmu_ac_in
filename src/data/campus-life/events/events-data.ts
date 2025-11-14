import { customeOverViewType } from "../../../types/home-data-type";
import anubhuti1 from "../../../assets/images/campus-life/events/anubhuti-1.jpg"
import anubhuti2 from "../../../assets/images/campus-life/events/anubhuti-2.jpg"
import anubhuti3 from "../../../assets/images/campus-life/events/anubhuti-3.jpg"
import anubhuti4 from "../../../assets/images/campus-life/events/anubhuti-4.jpg"
import anubhuti5 from "../../../assets/images/campus-life/events/anubhuti-5.jpg"
import anubhuti6 from "../../../assets/images/campus-life/events/anubhuti-6.jpg"
import anubhuti7 from "../../../assets/images/campus-life/events/anubhuti-7.jpg"
import harmony1 from "../../../assets/images/campus-life/events/harmony-1.jpg"
import harmony2 from "../../../assets/images/campus-life/events/harmony-2.jpg"
import harmony3 from "../../../assets/images/campus-life/events/harmony-2.jpg"
import harmony4 from "../../../assets/images/campus-life/events/harmony-4.jpg"
import harmony5 from "../../../assets/images/campus-life/events/harmony-5.jpg"
import harmony6 from "../../../assets/images/campus-life/events/harmony-6.jpg"
import ullas1 from "../../../assets/images/campus-life/events/ullas-1.jpg"
import ullas2 from "../../../assets/images/campus-life/events/ullas-2.jpg"
import ican from "../../../assets/images/campus-life/events/ican.jpg"
import SOLARIS2020 from "../../../assets/images/campus-life/events/SOLARIS2020-24112310432994.jpeg"
import ncrtma from "../../../assets/images/campus-life/events/ncrtma.jpeg"
import secondinternationlibrary from "../../../assets/images/campus-life/events/secondinternationlibrary.jpg"
import raics from "../../../assets/images/campus-life/events/raics.jpg"
import kitaab from "../../../assets/images/campus-life/events/kitaab.jpg"
import firstinternationaliterary from "../../../assets/images/campus-life/events/firstinternationaliterary.jpg"
import iconcute from "../../../assets/images/campus-life/events/iconcute2019-2--27122305411175.jpg"
import seminar1 from "../../../assets/images/campus-life/events/seminar-1.jpg"
import holi1 from "../../../assets/images/campus-life/events/holi-1.jpg"
import holi2 from "../../../assets/images/campus-life/events/holi-2.jpg"
import holi3 from "../../../assets/images/campus-life/events/holi-3.jpg"
import dandiya1 from "../../../assets/images/campus-life/events/dandiya-1.jpg"
import dandiya2 from "../../../assets/images/campus-life/events/dandiya-2.jpg"
import dandiya3 from "../../../assets/images/campus-life/events/dandiya-3.jpg"
import tedx1 from "../../../assets/images/campus-life/events/tedx-1.jpg"
import tedx2 from "../../../assets/images/campus-life/events/tedx-2.jpg"
import tedx3 from "../../../assets/images/campus-life/events/tedx-3.jpg"
import tedx4 from "../../../assets/images/campus-life/events/tedx-4.jpg"
import tedx5 from "../../../assets/images/campus-life/events/tedx-5.jpg"
import tedx6 from "../../../assets/images/campus-life/events/tedx-6.jpg"


export const EventsOverviewData: customeOverViewType = {
    heading: "Events",
    content:
        `A rich tapestry of celebrations and milestones defines SRMU’s collective journey. From conferences and seminars to student achievements and faculty recognitions, this is your glimpse into the momentous events that enrich our campus life. Delve into SRMU’s accomplishments and accolades, celebrate student, faculty, institutional successes, and stay connected to the pulse of our thriving community through a glimpse into our year-round campus activities.`
};




export interface FestCard {
    title: string;
    date: string;
    description: string;
    image: string;
}

export interface FestData {
    title: string;
    description: string;
    cards: FestCard[];
}

export const festData: Record<string, FestData> = {
    anubhuti: {
        title: "Anubhuti",
        description: `'Anubhuti,' the annual cultural fest, stands as a pinnacle of artistic expression and creativity, bringing the entire academic community together for a mesmerizing showcase of talent and diversity. The event unfolds as a multi-day extravaganza, featuring a kaleidoscope of performances, exhibitions, and interactive sessions that transcend conventional boundaries. Students, faculty, and artists collaborate to curate an immersive experience, weaving together the rich threads of dance, music, drama, and visual arts. `,
        cards: [
            {
                title: "Anubhuti 2025",
                date: "February 08, 2025",
                description:
                    "<b>Anubhuti-2025</b>, the annual cultural festival of <b>Shri Ramswaroop Memorial University (SRMU)</b>, unfolded with grandeur and spirited participation from students, faculty, and dignitaries. The three-day celebration began with an inaugural ceremony led by Padma Shri awardee Prof. H.C. Verma and the university’s leadership. Day one showcased a rich blend of intellectual and cultural brilliance—ranging from <b>`Seven Deadly Sins` by the Expression Club</b>, an inspiring talk by <b>RJ Prateek</b>, and the <b>`Pitch Fest`</b>, to engaging competitions such as essay writing, extempore, poetry, robotics, and a laser show. The <b>Business Conclave, Cyber Awareness Workshop</b>, and <b>Physics in Daily Life</b> sessions under the <b>Avsar 2025</b> segment elevated the academic spirit of the event.",
                image: anubhuti1,
            },
            {
                title: "Anubhuti 2024",
                date: "March 14, 2024",
                description:
                    "Shri Ramswaroop Memorial University recently organized its annual cultural fest Anubhuti 2k24. This year's edition was a celebration of creativity, talent, and innovation like never before. Inaugural ceremony started with lamp lighting by Chancellor Er. Pankaj Agarwal, Pro-Chancellor Er. Pooja Agarwal, Vice-Chancellor Prof. Devendra Kumar Sharma and Registrar Dr. Neeraja Jindal. In his inaugural speech, Er. Pankaj Agarwal said that the festival is not just about entertainment; it's about fostering a sense of community, creativity and collaboration among our students and the wider community.",
                image: anubhuti2,
            },
            {
                title: "Anubhuti 2022",
                date: "May 05, 2022",
                description:
                    "The much-anticipated annual cultural extravaganza, Anubhuti 2k22, unfolded with fervor as colleges from across the region converged to partake in a myriad of captivating events. Adding to the excitement was the presence of Zubair Hashmi, a luminary whose name resonates with talent and charisma. Zubair's participation injected an extra dose of energy into the festivities, drawing crowds with eager anticipation. Whether showcasing his musical prowess, engaging in thought-provoking discussions, or simply interacting with attendees, Zubair's presence illuminated the event, leaving an indelible mark on all who attended. His involvement not only elevated the stature of Anubhuti but also served as a source of inspiration for budding talents, embodying the essence of creativity and excellence that defines this cultural celebration.",
                image: anubhuti3,
            },
            {
                title: "Anubhuti 2020",
                date: "February 25, 2020",
                description:
                    "The Annual fest `Anubhuti` was held at Shri Ramswaroop Memorial University premises in a very befitting manner. It was a three days program from 25 to 27 February 2020. The program was inaugurated by Vice-chancellor Prof (Dr) A.K. Singh by lighting the lamp. `Anubhuti fest` is a time when the entire university comprising of faculty members, students from various disciplines, staff members come together and endeavour to bring out the extraordinary talent in participants. On this event Pro-Chancellor Er. Pooja Agarwal delivered a valuable speech. In her speech she gave much importance to the need for organising such a program. She encouraged the students for their laudable performances.",
                image: anubhuti4,
            },
            {
                title: "Anubhuti 2019",
                date: "February 27, 2019",
                description:
                    "Anubhuti, the annual fest at SRM University, is a vibrant celebration that brings together students, faculty, and enthusiasts from various disciplines. This extravaganza is a testament to the rich cultural diversity and talent that thrives within the university community. The event spans across several days, offering a plethora of activities, performances, and competitions that cater to the diverse interests and talents of the students.",
                image: anubhuti5,
            },
            {
                title: "Anubhuti 2018",
                date: "February 24, 2018",
                description:
                    "New energies, new team and a completely different perspective brought together the formation of this year’s Anubhuti. The theme was Emblazon. Every year the university is successful in delivering a grand colorful event. With a motto of “Entertainment with Education”, Anubhuti offers an opportunity for the students to delve into themselves and come up with those talents which might be even unknown to them and helps them internalize those talents for their overall development. It is actually the best platform for the students to test their skills on management, organization capacity, leadership, team spirit and creativity as well as teaches them to face bravely those various problems that hinder them from reaching the glorious zeniths in their career and life.",
                image: anubhuti6,
            },
            {
                title: "Anubhuti 2017",
                date: "February 22, 2017",
                description:
                    "Anubhuti, the annual event that captivates hearts and minds, is a celebration that transcends the ordinary and delves into the realms of creativity, culture, and camaraderie. Each year, this eagerly anticipated extravaganza brings together a diverse tapestry of talents and passions, creating an immersive experience that leaves an indelible mark on participants and attendees alike. From vibrant cultural performances that showcase the rich tapestry of traditions to thought-provoking seminars and workshops that ignite intellectual curiosity, Anubhuti is a melting pot of expression and exploration. The event serves as a platform for individuals to not only showcase their talents but also to foster a sense of unity and belonging, forging connections that extend beyond the confines of the event itself.",
                image: anubhuti7,
            },
        ],
    },
    harmony: {
        title: "Harmony",
        description:
            "'Harmony,' the annual fresher party at our university, resonates as a joyous and welcoming initiation for new students, setting the tone for their academic journey. This vibrant event is meticulously designed to provide a warm and inclusive atmosphere where freshers can forge connections, create memories, and feel integrated into the campus community. From lively introductions to engaging ice-breaking activities, 'Harmony' is a celebration of diversity, fostering a sense of camaraderie among students from various backgrounds.",
        cards: [
            {
                title: "FRESHERS’ PARTY ‘HARMONY 2K23’",
                date: "October 20, 2023",
                description:
                    "Harmony’23, the grand fresher’s party, brought a wave of nostalgia and joy to Shri Ramswaroop Memorial University. Themed “Retro Rewind,” the fresher’s party transported everyone back in time with timeless music, vintage fashion, and old-school glam. The entire event shimmered with retro charm as students dressed in classic styles, celebrating the spirit of the past with a fresh and youthful twist.",
                image: harmony1,
            },
            {
                title: "FRESHERS’ PARTY ‘HARMONY 2K22’",
                date: "October 08, 2022",
                description:
                    `'Harmony,' the much-anticipated freshers' party at Shri Ramswaroop Memorial University (SRMU), is an enchanting celebration that serves as a welcoming rite for new students entering the university. It's a night of vibrant energy, where the senior and junior students come together to create an atmosphere of warmth and camaraderie. The event is meticulously organized to provide freshers with an opportunity to unwind, make new friends, and immerse themselves in the diverse cultural tapestry of the university. From dazzling decorations to pulsating music, 'Harmony' sets the stage for an unforgettable evening that marks the beginning of lifelong friendships and memorable experiences.`,
                image: harmony2,
            },
            {
                title: "FRESHERS’ PARTY ‘HARMONY 2K21’",
                date: "November 29, 2021",
                description:
                    "'Harmony,' the much-anticipated freshers' party at Shri Ramswaroop Memorial University (SRMU), is an enchanting celebration that serves as a welcoming rite for new students entering the university. It's a night of vibrant energy, where the senior and junior students come together to create an atmosphere of warmth and camaraderie. The event is meticulously organized to provide freshers with an opportunity to unwind, make new friends, and immerse themselves in the diverse cultural tapestry of the university. From dazzling decorations to pulsating music, 'Harmony' sets the stage for an unforgettable evening that marks the beginning of lifelong friendships and memorable experiences.",
                image: harmony3,
            },
            {
                title: "FRESHERS’ PARTY ‘HARMONY 2K19’",
                date: "September 06, 2019",
                description:
                    "'Harmony,' the freshers party at Shri Ramswaroop Memorial University (SRMU), is an eagerly awaited annual celebration that serves as a vibrant initiation for the newest members of the university community. This lively event is meticulously organized to provide incoming students with a warm and welcoming introduction to campus life. 'Harmony' creates an atmosphere of inclusivity and camaraderie, encouraging freshers to interact, make new friends, and embark on their academic journey with a sense of unity. From energetic performances to interactive games and engaging activities, the party is designed to break the ice and foster a sense of belonging, ensuring that each fresher feels a part of the larger SRMU family.",
                image: harmony4,
            },
            {
                title: "FRESHERS’ PARTY ‘HARMONY 2K18’",
                date: "September 07,  2018",
                description:
                    "A little lilting music and the chink of ice, new faces, smiles all along, resounding laughter- yes it is party time! Students need moments to chill out. The very purpose of Freshers Day party is to welcome newcomers in a friendly atmosphere and avoid social evils, to encourage their creative impulses to boost their confidence. Freshers Day in any college is an event which students eagerly look forward to. The annual event, Freshers Party 'Harmony,' celebrated at Shri Ramswaroop Memorial University (SRMU), is a much-anticipated occasion that warmly welcomes new students into the university's vibrant community. 'Harmony' represents more than just a party; it symbolizes the spirit of unity and camaraderie that defines the SRMU ethos. From colorful decorations to lively performances, the atmosphere pulsates with excitement and anticipation as freshmen immerse themselves in the festivities and embrace the welcoming embrace of their peers and mentors.",
                image: harmony5,
            },
            {
                title: "FRESHERS’ PARTY ‘HARMONY 2K17’",
                date: "September 01, 2017",
                description:
                    "The very purpose of the Freshers Day party is to welcome newcomers in a friendly atmosphere and avoid social evils, to encourage their creative impulses to boost their confidence. Freshers Day in any college is an event that students eagerly look forward to. The academic year begins with the celebration of Freshers Day. A little lilting music and the chink of ice, new faces, smiles all along, resounding laughter- yes it is party time! Students need moments to chill out. The annual event, 'Harmony,' is a much-anticipated freshers' party celebrated with zest and enthusiasm at Shri Ramswaroop Memorial University (SRMU). This vibrant occasion marks the induction of new students into the university community, offering them a warm and festive welcome. 'Harmony' is not merely a party; it's an immersive experience that introduces the freshers to the lively spirit of campus life. With captivating performances, engaging activities, and an atmosphere filled with joy, the event is a blend of entertainment and camaraderie, providing a memorable kickstart to the academic journey of the incoming students.",
                image: harmony6,
            },
        ],
    },
    ullas: {
        title: "Ullas",
        description:
            `'Ullas,' the annual sports event of our institution, is a dynamic celebration of athleticism, team spirit, and healthy competition. Every year, students eagerly anticipate the adrenaline-charged atmosphere as 'Ullas' transforms the campus into a bustling arena of sportsmanship. From track and field events to team sports, the competition is fierce, and the cheers from the sidelines echo the enthusiasm and pride of the participants.`,
        cards: [
            {
                title: "Ullas 2023",
                date: "March 15-17, 2023",
                description:
                    "'Ullas', the annual sports fest at Shri Ramswaroop Memorial University (SRMU), is a dynamic celebration of athleticism, sportsmanship, and the spirit of healthy competition. The event transforms the university campus into a vibrant arena where students from various disciplines come together to showcase their sporting prowess and enthusiasm. 'Ullas' encompasses a wide array of sports and activities, from track and field events to team sports, fostering an environment where both competitive and recreational athletes can participate and shine. The festival not only promotes physical fitness but also encourages teamwork, leadership, and a sense of camaraderie among the participants.",
                image: ullas1,
            },
            {
                title: "Ullas 2022",
                date: "May 02-05, 2022",
                description:
                    "'Ullas', the annual sports fest at Shri Ramswaroop Memorial University (SRMU), serves as a dynamic platform to promote sports, physical fitness, and a spirit of healthy competition among students. The festival is a testament to SRMU's commitment to fostering a culture of athleticism and well-being on campus. 'Ullas' features a diverse range of sports and recreational activities, encouraging students to actively engage in physical pursuits, discover their talents, and develop a passion for sportsmanship.",
                image: ullas2,
            },
        ],
    },
};


export interface EventCard {
    title: string;
    date: string;
    description: string;
    image: string;
}

export interface ConferenceData {
    conferences: EventCard[];
    seminars: EventCard[];
}

export const conferenceData: ConferenceData = {
    conferences: [
        {
            title: "ICANSVME-24",
            date: "January 22–24, 2024",
            description:
                "A three days international conference on ‘Advancement in Natural Sciences: Vedic to Modern Era’ is being organized in Shri Ramswaroop Memorial University, Deva Road-Lucknow, Barabanki. The inaugural session of the conference was addressed by Prof. A.S. Vidhyarthi, VC Bikaner Technical University, he explained that the invention of Puspak Viman took place in Treta Yug, It was sound proof and moves according to the will of pilot. Prof. P K Bajpai VC JP University, Chapra emphasised the importance of learning science and technology according to Indian culture. The key note speakers were Dr. Shibesh Kumar PICS, Odisha, Dr Dinesh Kumar, SGPGI, Prof. Surya Narayan Gautam, Prof, Iyenger, Dr, Vishal Dwivedi, Tampere University, Finland and Prof. A.K. Thakur GGV Bilaspur also explained about the importance of Vedic Science.",
            image: ican,
        },
        {
            title: "SOLARIS-2020",
            date: "February 07–09, 2020",
            description:
                "Faculty of Physical Sciences, Institute of Natural Sciences and Humanities, SRMU in collaboration with BERS, Sukrit Solar Pvt Limited and Gajah Solar Power Pvt. Limited organized the “SOLARIS 2020 - a National Conference on Sustainable Environment and Climate” from 7-9 February 2020. The Guest of honour in SOLARIS 2020 was Prof. Vineet Saini (DST, GOI) and Chief guest was Prof. A.S.K. Sinha (Director, RGIPT). More than 20 invited lectures, poster sessions and 6 technical sessions were conducted during the conference.",
            image: SOLARIS2020,
        },
        {
            title: "NCRTMA-20",
            date: "January 30–31, 2020",
            description:
                `Faculty of Mathematical & Statistical Sciences, Institute of Natural Sciences and Humanities, organized two days “2nd National Conference on Recent Trends in Mathematics with Applications”. Chief guest of NCRTMA-20 was Prof. (Dr.) Ram Bilas Misra (Ex Vice-Chancellor Dr. RML Avadh University, Ayodhya). More than 15 invited lectures were delivered by eminent mathematicians from Central University, IIT, NIT, IIIT and State University.`,
            image: ncrtma,
        },
        {
            title: "ICON-CUTE 2019",
            date: "November 14-16, 2019",
            description:
                `Shri Ramswaroop Memorial University organized a three-day International Conference on Cutting edge technologies in Engineering. Padam Shri Dr. Kota Harinarayana who happens to be a distinguished Scientist, Chief Architect-Light Combat Aircraft, addressed the audience about the topic from "Manned fighter" to "Unmanned Combat Aircraft". He told the gathering about Aircraft, UAV technologies effect of anatomy, increasing role of technology adoption. Er. Yogesh Kumar Ex-director, of HAL Bangalore, India addressed the topic of future technology in Aviation. Dr. Syed Umar Amin, Professor R K Pant, Er. Amit Agarwal also graced the occasion.`,
            image: iconcute,
        },



        {
            title: "Second International Literary Conference",
            date: "February 02-03, 2019",
            description:
                `The two day international conference on “Rethinking the Global South: Literatures, Cultures and Media” in collaboration with Challenging Precarity: A Global Network, UK was organized by the Department of Humanities & Social Sciences, Shri Ramswaroop Memorial University. In the International Conference the effort was  to revisit and rethink the conceptual framework of the Global South by putting queries on; “does the Global South find itself a victim or a benefactor in the global capitalism, the methodology of the productions of the Global South compete the productions of the North, the different experiences of globalization within the Global South, the ways in which the globalization bridge the gap between the North and the South, is global south a promise or predicament in the process of globalization”. Eminent intellectuals like Prof.Janet Wilson (Northampton University, UK),Prof. Roderick McGillis(Calgary University, Canada), Dr. Halina Marlewicz (Jagiellonian University, USA), Prof. Lisa Bloom(UC Berkeley, California, USA) and many more such dignitaries across the national and international circuit would be part of the event.`,
            image: secondinternationlibrary,
        },
        {
            title: "RAICS-18",
            date: "November 02-03, 2018",
            description:
                `The Faculty of Chemical Sciences organized the 1st national conference on “Recent Approaches and Innovations in Chemical Sciences (RAICS)” which included wide area of disciplines including materials chemistry, nanochemistry, synthetic chemistry, natural products, supramolecular chemistry, medicinal chemistry, polymer chemistry, green chemistry, theoretical chemistry and environmental chemistry. The conference aims to accrue various novel developments and amelioration for collaborative sharing, discussion and implicate further progress by learned academicians, industrial experts and science enthusiasts through this platform.`,
            image: raics,
        },

        {
            title: "Kitaab",
            date: "April 07-08, 2018",
            description:
                `The two-day long International Literary Festival in collaboration with ‘Kitaab’, Singapore was inaugurated on 7th April, 2018 at Shri Ramswaroop Memorial University. The Fest witnessed a confluence of many luminaries from the academic and cultural field. Mr. Zafar Anjum, founder of ‘Kitaab’, Mr. Shishir Sharma (actor), Sudeep Sen, Miniya Chatterji, Kavitha Rao, Dr. Surya Prasad Dixit and Mr. Yogesh Praveen to name a few of the icons. The theme of the festival was ‘Micro Literature in the age of Social Media’. It also was the launch pad of the best Asian short stories and short films by ‘Filmwallas’. There was also a screening of a short film "More Chai Please" by Mr. Zafar Anjum.`,
            image: kitaab,
        },
        {
            title: "First International Literary Conference",
            date: "Februaryb 17-18, 2017",
            description:
                `Shri Ramswaroop Memorial University organized the First Internatinal Literary Conference (Sponsored by the University of Rome Tor Vergata, Italy & South Asian Diaspora International Researcher's Network, Monash University , Australia). This conference, The Cultures of New India was a two day event. It witnessed some of the distinguished speakers from around the globe like Dr. Shashi Tharoor, Janet Wilson, Tabish Khair, Claire Chambers, Joel Kuortti, Florian Stadtler, Veronica Thompson and many more. `,
            image: firstinternationaliterary,
        },
    ],
    seminars: [
        {
            title: "New Education Policy and Quality Education for Sustainable Future",
            date: "April 08, 2023",
            description:
                `The one-day seminar on 'New Education Policy and Quality Education for Sustainable Future,' organized at Shri Ramswaroop Memorial University (SRMU), served as a thought-provoking forum for educators, policymakers, and stakeholders in the field of education. The event provided an insightful exploration into the implications and potential impact of the New Education Policy on the delivery of quality education and its role in shaping a sustainable future. Through engaging panel discussions, expert presentations, and interactive sessions, the seminar facilitated a comprehensive understanding of the policy's objectives, challenges, and its potential to transform the educational landscape. Participants delved into discussions on innovative teaching methodologies, technology integration, and curriculum development aligned with sustainability goals, envisioning a future where education plays a pivotal role in fostering holistic development and societal well-being. The seminar not only contributed to the ongoing discourse on educational reforms but also positioned SRMU as a proactive hub for dialogue and collaboration in shaping the future of education.`,
            image: seminar1,
        },

    ],
};


export interface FestivalCard {
    title: string;
    image: string;
    description: string;
    date: string;
}

export interface Festival {
    name: string;
    description: string;
    cards: FestivalCard[];
}

export const festivalsData: Festival[] = [
    {
        name: "RANG BARSE (HOLI)",
        description: `Rang Barse festival, inspired by the joyous spirit of Holi, emerges as a vibrant tapestry of colors, laughter, and camaraderie. As the festival unfolds, it transforms ordinary spaces into kaleidoscopic realms where people of all ages come together to celebrate the arrival of spring and the triumph of good over evil. From the rhythmic beats of traditional drums to the playful splashes of colored powders, Rang Barse encapsulates the essence of festivity and togetherness. With its infectious energy and jubilant atmosphere, Rang Barse festival serves as a timeless reminder of the beauty found in shared experiences and the boundless exuberance of the human spirit during the Holi season.`,
        cards: [
            {
                title: "Holi Celebration 2024",
                image: holi1,
                date: "November 06, 2023",
                description:
                    "Students celebrated Holi with joy, colors, and music, creating a vibrant environment of unity and happiness.",
            },
            {
                title: "Color Splash 2023",
                image: holi2,
                date: "November 06, 2023",
                description:
                    "A day filled with laughter, dance, and celebration — marking the triumph of good over evil through colors.",
            },
            {
                title: "Festival of Unity 2022",
                image: holi3,
                date: "November 06, 2023",
                description:
                    "The Holi festival at SRMU brought together students and staff, celebrating the true essence of togetherness.",
            },
        ],
    },
    {
        name: "DANDIYA DELIGHTZZ",
        description: `Dandiya Delightzz, a vibrant celebration of Navratri, fills the SRMU campus with dazzling lights, rhythmic music, and joyful dance. Students and faculty come together in traditional attire to participate in energetic Garba and Dandiya performances, symbolizing devotion and unity. The festival reflects India's rich cultural heritage and serves as a platform for students to express their creativity, enthusiasm, and cultural pride.`,
        cards: [
            {
                title: "Navratri Night 2024",
                image: dandiya1,
                date: "November 06, 2023",
                description:
                    "A night full of rhythm and devotion where students performed Garba and Dandiya in colorful traditional outfits.",
            },
            {
                title: "Cultural Celebration 2023",
                image: dandiya2,
                date: "November 06, 2023",
                description:
                    "The event showcased Indian traditions through lively performances, music, and community spirit.",
            },
            {
                title: "Dandiya Extravaganza 2022",
                image: dandiya3,
                date: "November 06, 2023",
                description:
                    "A grand evening that lit up the campus with energy, dance, and vibrant colors of cultural heritage.",
            },
        ],
    },
];


export interface TedxCardData {
    id: string;
    title: string;
    date: string;
    image: string;
    description: string;
}

const tedxData: TedxCardData[] = [
    {
        id: "innovatia",
        title: "TEDx SRMUInnovatia",
        date: "November 18, 2019",
        image: tedx1,
        description:
            `TEDxSRMUInnovatia, a dynamic event organized at Shri Ramswaroop Memorial University (SRMU), uniquely focuses on student participation through engaging Mock TEDx Talks and an Entrepreneurship Quiz. This platform empowers students to unleash their creativity and share innovative ideas in a simulated TEDx-style presentation, offering them a chance to articulate their visions, research findings, and projects. The Mock TEDx Talks foster a culture of public speaking, idea dissemination, and inspire a spirit of intellectual exploration among the student community.`
    },
    {
        id: "women",
        title: "TEDx SRMUWomen",
        date: "December 03, 2018",
        image: tedx2,
        description:
            `TEDx Women, organized at Shri Ramswaroop Memorial University (SRMU), stands as a powerful platform for highlighting and celebrating the diverse voices and achievements of women across various fields. This event, affiliated with the renowned TEDx program, provides a stage for inspirational talks, discussions, and performances that revolve around the experiences, challenges, and triumphs of women. From trailblazing entrepreneurs to influential thought leaders, speakers at TEDx Women at SRMU share their stories and insights, inspiring the audience to envision a world where women's contributions are recognized and valued.`,
    },
    {
        id: "global",
        title: "TEDx SRMUGlobal",
        date: "October 01, 2018",
        image: tedx3,
        description:
            `TEDx SRMU GLOBAL, organized at Shri Ramswaroop Memorial University (SRMU), transcends geographical boundaries to create an intellectually stimulating platform that showcases a diverse array of global perspectives and groundbreaking ideas. As an extension of the renowned TEDx program, this event brings together speakers and thought leaders from across the globe, offering a unique opportunity for the audience to engage with innovative concepts, inspiring stories, and transformative visions. The talks span a spectrum of topics, ranging from technology and science to culture, education, and social issues, fostering an environment of cross-cultural dialogue and collaborative thinking.`,
    },
    {
        id: "live",
        title: "TEDx SRMULive",
        date: "April 20, 2018",
        image: tedx4,
        description:
            `TEDx SRMULive, an exhilarating and intellectually stimulating event organized at Shri Ramswaroop Memorial University (SRMU), stands as a testament to the institution's commitment to fostering innovative ideas and insightful dialogue. This live edition of the renowned TEDx series serves as a platform where thought leaders, professionals, and visionaries converge to share their inspiring stories and groundbreaking ideas. With a diverse lineup of speakers covering a spectrum of topics, TEDx SRMULive transcends conventional boundaries, offering the university community a unique opportunity to engage with transformative concepts and perspectives.`,
    },
    {
        id: "srm",
        title: "TEDx SRMU",
        date: "January 20, 2018",
        image: tedx5,
        description:
            `TEDxSRMU, organized at Shri Ramswaroop Memorial University (SRMU), offers a profound exploration into how the changing world impacts the lives of individuals. Through captivating talks and discussions, speakers delve into the myriad ways in which technological advancements, social transformations, and global challenges reshape our perceptions, behaviors, and interactions. The event serves as a platform for thought-provoking reflections on topics such as artificial intelligence, climate change, globalization, and cultural shifts, illuminating the complex interplay between societal changes and personal experiences.`,
    },
    {
        id: "wom",
        title: "TEDx SRMUWomen",
        date: "November 08, 2017",
        image: tedx6,
        description:
            `TEDxSRMU Women, organized at Shri Ramswaroop Memorial University (SRMU), is a transformative event that serves as a local gathering for women empowerment, bringing together dynamic and accomplished women from diverse backgrounds. This platform provides a unique space for these empowered ladies to share their experiences, insights, and stories of growth, emphasizing the importance of women's empowerment in various spheres of life. The event celebrates the achievements of women who have overcome challenges, shattered glass ceilings, and made significant contributions to their fields, inspiring others to pursue their goals with determination and resilience.`,
    },

];

export default tedxData;
