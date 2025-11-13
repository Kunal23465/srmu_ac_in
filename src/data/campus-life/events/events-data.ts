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
        "A three-day international conference on 'Advancement in Natural Sciences: Vedic to Modern Era' held at Shri Ramswaroop Memorial University, Lucknow. The event brought together researchers, faculty, and scholars to discuss scientific innovations and their modern relevance.",
      image: "/images/conference1.jpg",
    },
    {
      title: "SOLARIS-2020",
      date: "February 07–09, 2020",
      description:
        "Organized by the Faculty of Physical Sciences, SRMU, in collaboration with Sukrit Solar Pvt Ltd and Gajah Solar Power Pvt Ltd. SOLARIS 2020 focused on sustainable energy, environment, and climate change challenges.",
      image: "/images/conference2.jpg",
    },
    {
      title: "NCRTMA-20",
      date: "January 30–31, 2020",
      description:
        "National Conference on Recent Trends in Mathematics with Applications (NCRTMA-20), hosted by the Faculty of Mathematical & Statistical Sciences. Featured keynotes and paper presentations by leading mathematicians.",
      image: "/images/conference3.jpg",
    },
  ],
  seminars: [
    {
      title: "AI & Future Technologies",
      date: "March 05, 2025",
      description:
        "An insightful seminar exploring the transformative role of Artificial Intelligence in shaping future industries and education, featuring experts from academia and tech organizations.",
      image: "/images/seminar1.jpg",
    },
    {
      title: "Green Energy and Innovation",
      date: "November 20, 2024",
      description:
        "This seminar brought together energy experts to discuss renewable energy technologies and their role in achieving sustainable development goals.",
      image: "/images/seminar2.jpg",
    },
    {
      title: "Cyber Awareness Workshop",
      date: "September 12, 2024",
      description:
        "A hands-on workshop aimed at spreading awareness on cyber threats, digital safety, and ethical hacking practices among university students.",
      image: "/images/seminar3.jpg",
    },
  ],
};
