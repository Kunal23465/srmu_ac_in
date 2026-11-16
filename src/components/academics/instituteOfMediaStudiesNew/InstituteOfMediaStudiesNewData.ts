import {
    Activity,
    BookOpen,
    BriefcaseBusiness,
    Camera,
    Clapperboard,
    Film,
    GraduationCap,
    Lightbulb,
    Mic,
    Newspaper,
    Radio,
    UsersRound,
    Video,
} from "lucide-react";
import type { CustomDepartmentNewData, DepartmentActivityCardNew } from "../../../customs/department-page-new/CustomDepartmentNew";
import type { FacultyMember } from "../departmentOfComputerScienceAndEngineeringNew/DepartmentFaculty";
import {
    InstituteofMediaStudiesDepartmentEventsData,
    InstituteofMediaStudiesfacultyData,
    InstituteofMediaStudiesProfiles,
} from "../../../data/academics/institute/institute-department/institute-of-media-studies-data";
import heroImage from "../../../assets/images/academics/institutes/media1-06052403225269.webp";
import overviewImage from "../../../assets/images/academics/departments/media-07052412412440.webp";
import studioImage from "../../../assets/images/new-labo/studio-and-media-lab.webp";
import mediaVisitImage from "../../../assets/images/academics/departments/media-visit-07052412425199.webp";
import researchImage from "../../../assets/images/research/publication/journals-02022411500535.jpg";
import visualStorytellingImage from "../../../assets/images/academics/institutes/mediaclplant.webp";
import pradeepKumarImage from "../../../assets/images/institute-of-media-studies-new/dr-pradeep-kumar.jpg";
import dhwaniSinghImage from "../../../assets/images/institute-of-media-studies-new/dr-dhwani-singh.jpg";
import amitKumarSinghImage from "../../../assets/images/institute-of-media-studies-new/dr-amit-kumar-singh.jpg";
import sandeepSinghImage from "../../../assets/images/institute-of-media-studies-new/sandeep-singh.jpg";
import rahulChaturvediImage from "../../../assets/images/institute-of-media-studies-new/rahul-chaturvedi.jpg";

const activityCard = (
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

const mediaEventImages = InstituteofMediaStudiesDepartmentEventsData.map((event) => event.image);

const mediaActivities = [
    {
        tag: "WORKSHOP",
        title: "Career Opportunities in TV Journalism: Skills and Industry Trends",
        date: "17 August 2026",
        speaker: "Mr. Alauddin Ayub",
        description: "The workshop introduced career opportunities in television journalism, essential professional skills, current industry trends, and the changing demands of television news media.",
    },
    {
        tag: "LECTURE",
        title: "Growth and Opportunities in Theatre and Cinema",
        date: "20 August 2026",
        speaker: "Mr. Devashish Mishra",
        description: "The lecture explored growth and career opportunities in theatre and cinema, including industry trends, professional challenges, and pathways in the performing arts.",
    },
    {
        tag: "WORKSHOP",
        title: "The Actor's Craft in Cinema: Insights for Media Studies",
        date: "21 August 2026",
        speaker: "Mr. Mahesh Chandra Deva",
        description: "The workshop introduced acting for cinema, with a focus on character development, performance techniques, emotional expression, and practical insights from the film industry.",
    },
    {
        tag: "WORKSHOP",
        title: "The Psychology of Acting: Emotion, Character, and Performance",
        date: "25 August 2026",
        speaker: "Mr. Ekansh Mishra",
        description: "The session explored the role of psychology in acting, including emotion, character development, and performance techniques.",
    },
    {
        tag: "WORKSHOP",
        title: "From Idea to Screen: The Complete Video Production Workflow",
        date: "21 September 2026",
        speaker: "Mr. Saksham Gulati",
        description: "Students explored the video production process from conceptualization and scripting to production, editing, and final presentation.",
    },
    {
        tag: "LECTURE",
        title: "From Radio Waves to Podcasts: The Changing Landscape of Radio Broadcasting",
        date: "30 September 2026",
        speaker: "Mr. Jalaj",
        description: "The lecture examined the shift from traditional radio to podcasts, changing audience preferences, technology, and emerging opportunities in audio media.",
    },
    {
        tag: "WORKSHOP",
        title: "The Art of Filmmaking",
        date: "5 October 2026",
        speaker: "Mr. Devashish Mishra",
        description: "The workshop covered creative and practical aspects of filmmaking, including storytelling, performance, visual expression, and production.",
    },
    {
        tag: "WORKSHOP",
        title: "Pixel to Perception: Mastering Photography and Cinematography in the Digital Revolution",
        date: "4 October 2026",
        speaker: "Mr. Amit Saxena",
        description: "The workshop explored visual storytelling, digital photography and cinematography techniques, and the influence of new technology on visual media.",
    },
    {
        tag: "CULTURAL VISIT",
        title: "Cultural Visit to Ayodhya",
        date: "13 February 2026",
        speaker: "Faculty Coordinator: Mr. Rahul Chaturvedi",
        description: "The visit gave students an opportunity to explore Ayodhya's cultural and historical heritage and consider how culture, tradition, and heritage are communicated.",
    },
    {
        tag: "INDUSTRIAL VISIT",
        title: "Industrial Visit to Bharat Samachar",
        date: "18 March 2026",
        speaker: "Industry Expert: Mr. Brijesh Mishra, Editor, Bharat Samachar",
        description: "Students gained practical exposure to the functioning of a professional news organisation, including newsroom operations, news production, and journalistic practices.",
    },
    {
        tag: "WORKSHOP",
        title: "The Art & Craft of Visual Storytelling in the Digital Era",
        date: "13 March 2026",
        speaker: "Mr. Vishal Shukla",
        description: "The workshop explored how images, video, design, and digital platforms can be used to communicate compelling narratives.",
    },
    {
        tag: "GUEST LECTURE",
        title: "Understanding Political Communication and Media Narratives in the Digital Age",
        date: "12 March 2026",
        speaker: "Mr. Manish Yadav",
        description: "The lecture explored political communication and digital media narratives, including the role of media in shaping public opinion and political discourse.",
    },
];

const mediaEventCards: DepartmentActivityCardNew[] = mediaActivities.map((event, index) => {
    const shortDesc = event.description;
    return activityCard(
        event.tag,
        event.title,
        shortDesc,
        mediaEventImages[index % mediaEventImages.length] || mediaVisitImage,
        `${event.date} | ${event.speaker}`,
    );
});

const mediaDirector = InstituteofMediaStudiesProfiles[0];
const mediaFaculty: FacultyMember[] = [
    {
        id: "media-studies-hod",
        name: mediaDirector.name,
        role: "Officiating HoD, Institute of Media Studies",
        img: pradeepKumarImage,
        isHod: true,
        qualification: "Ph.D. in Journalism and Mass Communication",
        experience: "8 years of teaching and 4 years in the media industry",
        email: "pradeepkumar.ims@srmu.ac.in",
        contact: "+91-9450537991",
        specialization: ["New Media", "Web Journalism", "Print Journalism"],
        expertise: "Dr. Pradeep Kumar holds a Ph.D. in Mass Communication. With 8 years of teaching experience and 4 years of professional experience in the print and electronic media industry, he brings practical insights into the classroom. Before joining academia, he worked with reputed media organizations including Sahara Samay, Hindustan, and B.TV, where he developed his skills in journalism and media production.\n\nHe has published 25 research papers in reputed national and international journals, contributed chapters to 10 books published by renowned publishers, and authored one book. Dr. Kumar is committed to bridging the gap between theoretical knowledge and industry practice, mentoring students to become skilled, ethical, and future-ready media professionals.\n\nORCID iD: https://orcid.org/0009-0004-3285-2723",
    },
    ...InstituteofMediaStudiesfacultyData
        .filter((member) => ["Dr. Dhwani Singh", "Dr. Amit Kumar Singh", "Mr. Sandeep Singh", "Mr. Rahul Chaturvedi"].includes(member.name))
        .map((member) => ({
            id: String(member.id),
            name: member.name,
            role: member.name === "Dr. Amit Kumar Singh" ? "Assistant Professor | Media & Communication Studies" : member.designation,
            img: member.name === "Dr. Dhwani Singh" ? dhwaniSinghImage : member.name === "Dr. Amit Kumar Singh" ? amitKumarSinghImage : member.name === "Mr. Sandeep Singh" ? sandeepSinghImage : member.name === "Mr. Rahul Chaturvedi" ? rahulChaturvediImage : member.image,
            ...(member.name === "Dr. Dhwani Singh" ? {
                qualification: "Ph.D., M.Phil., and M.A. in M.C.P.R.",
                experience: "Extensive media industry experience as a news anchor, content writer, reporter, and Assistant Public Relations Officer",
                specialization: ["Journalism and Mass Communication"],
                expertise: "Dr. Dhwani Singh is an Assistant Professor in Journalism and Mass Communication at Shri Ram Swaroop Memorial University. She holds a Ph.D., M.Phil., and postgraduate degree (M.A. in M.C.P.R.) from Mahatma Gandhi Kashi Vidyapeeth University, along with a Ph.D. from VBS Purvanchal University. Her academic journey is supported by extensive industry experience as a news anchor, content writer, reporter, and Assistant Public Relations Officer across prominent media houses. Her publications include numerous research papers in UGC-CARE-listed, peer-reviewed, and Scopus-indexed journals.",
            } : {}),
            ...(member.name === "Dr. Amit Kumar Singh" ? {
                qualification: "BAJMC, M.Sc. in Electronic Media, PGDJMC, M.Phil., and Ph.D. in Media Studies; UGC-NET qualified",
                experience: "Over 10 years of teaching experience; professional journalism experience with ETV Network and Dainik Bhaskar",
                specialization: ["Journalism", "Media Studies", "Electronic Media", "Digital Media", "Mass Communication"],
                expertise: "Dr. Amit Kumar Singh is a media and communication academic with over 10 years of teaching experience. He holds BAJMC, an M.Sc. in Electronic Media, PGDJMC, M.Phil., and a Ph.D. in Media Studies from Makhanlal Chaturvedi National University of Journalism and Mass Communication, Bhopal, and is UGC-NET qualified. He has professional journalism experience with ETV Network and Dainik Bhaskar and has taught at Makhanlal Chaturvedi National University and Techno Group of Institutions. He has also served as Visiting Guest Faculty at NIFT and IIMC, New Delhi. Dr. Singh has published more than 16 research papers in national and international journals and regularly contributes articles to leading newspapers such as Dainik Bhaskar and Amar Ujala.",
            } : {}),
            ...(member.name === "Mr. Sandeep Singh" ? {
                qualification: "MJMC and M.Phil.; pursuing a Ph.D. at SRM University; UGC-NET qualified",
                experience: "More than 6 years of combined industry and academic experience",
                specialization: ["Theatre", "Communication", "Cinema", "Advertising", "Public Relations"],
                expertise: "Sandeep Singh is a media and academic professional with more than six years of combined industry and academic experience. He has worked with i-next (Dainik Jagran Group), Youth Ki Awaaz, and Dainik Bhartiya, and has published more than 24 news articles in editorial columns of national newspapers. He holds an MJMC and M.Phil., is pursuing a Ph.D. at SRM University, and is UGC-NET qualified. His areas of expertise include theatre, communication, cinema, advertising, and public relations. Alongside teaching, he contributes to media research and mentors students in their academic and professional development. He has also worked on political public relations initiatives for various parties and led successful projects.",
            } : {}),
            ...(member.name === "Mr. Rahul Chaturvedi" ? {
                qualification: "UGC-NET qualified (2022)",
                specialization: ["Film Studies", "Electronic Media", "Script Writing", "Reporting", "Iranian Cinema", "Italian Cinema", "French Cinema", "Japanese Cinema"],
                expertise: "Rahul Chaturvedi is a NET-qualified media and communication academic (2022) with specialized academic and professional interests in film studies, electronic media, script writing, and reporting. His expertise extends to the critical understanding and analysis of world cinema, with particular interest in Iranian, Italian, French, and Japanese cinema. His academic orientation focuses on cinema as a medium of storytelling, social commentary, cultural expression, visual communication, and political discourse. With an interdisciplinary approach combining media theory, journalism, cinema, and creative storytelling, he explores how diverse cinematic traditions reflect society, culture, identity, politics, and human experiences across different geographical and cultural contexts.",
            } : {}),
        })),
];

export const instituteOfMediaStudiesNewData: CustomDepartmentNewData = {
    navSections: [
        { id: "overview", label: "Overview" },
        { id: "programs", label: "Programmes" },
        { id: "labs", label: "Practical Learning" },
        { id: "events", label: "Activities" },
        { id: "faculty", label: "Faculty" },
        { id: "faq", label: "FAQs" },
    ],
    hero: {
        prefix: "Institute of",
        title: "Media Studies",
        backgroundImage: heroImage,
        stats: [
            { v: "2012", l: "Established", delay: "0ms" },
            { v: "9", l: "Faculty & Staff", delay: "90ms" },
            { v: "200", l: "Students", delay: "180ms" },
            { v: "BA & MA", l: "Media Programmes", delay: "270ms" },
        ],
        quickStats: [
            { value: "2012", label: "Established" },
            { value: "9", label: "Faculty & Staff" },
            { value: "200", label: "Students" },
            { value: "BA & MA", label: "Media Programmes" },
        ],
    },
    overview: {
        headingBefore: "About the",
        headingHighlight: "Institute",
        subtitle: "Media Studies at SRMU",
        paragraphs: [
            "The Institute of Media Studies at Shri Ramswaroop Memorial University (SRMU) nurtures creative, skilled, and industry-ready media professionals through academic learning and practical exposure.",
            "The institute focuses on developing students' understanding of journalism, mass communication, television broadcasting, digital media, filmmaking, cinema, theater, photography, and visual storytelling. Its academic approach encourages students to explore the evolving media landscape while developing essential skills in communication, creativity, research, production, and content creation.",
            "Through workshops, expert lectures, practical assignments, cultural visits, and industry interactions, students gain insights into professional media practices and the creative processes behind news production, filmmaking, broadcasting, and digital communication.",
            "The institute encourages students to develop critical thinking, storytelling abilities, technical knowledge, and ethical communication practices to prepare for opportunities across the media and entertainment industry.",
        ],
        preview: "The Institute of Media Studies at SRMU develops creative and industry-ready media professionals through academic learning, practical exposure, and industry interaction.",
        image: overviewImage,
        imageAlt: "Media students learning production and visual storytelling",
    },
    missionVision: {
        missionItems: [
            "To provide quality media education through a balanced approach to theoretical knowledge and practical learning.",
            "To develop professional skills in journalism, broadcasting, filmmaking, photography, and digital communication.",
            "To encourage creativity, storytelling, critical thinking, and responsible media practices.",
            "To create opportunities for industry interaction, experiential learning, and professional development.",
            "To nurture ethical, innovative, and socially responsible media professionals.",
        ],
        visionText: "To emerge as a centre of excellence in media education by nurturing creative, responsible, and technologically equipped professionals who contribute to journalism, mass communication, digital media, film, and the evolving media and entertainment industry.",
    },
    programHeadingBefore: "Explore",
    programHeadingHighlight: "Programmes",
    programs: [
        {
            category: "Undergraduate Programme",
            mobileLabel: "Undergraduate",
            badge: "B.A.",
            icon: GraduationCap,
            programs: [
                {
                    title: "B.A. in Journalism & Mass Communication",
                    description: "Build a foundation in journalism, mass communication, reporting, media production, and digital storytelling.",
                    icon: Newspaper,
                    link: "/program/b-a-journalism-mass-communication",
                },
            ],
        },
        {
            category: "Postgraduate Programme",
            mobileLabel: "Postgraduate",
            badge: "M.A.",
            icon: BookOpen,
            programs: [
                {
                    title: "M.A. in Journalism & Mass Communication",
                    description: "Advance knowledge of journalism, mass communication, media research, and professional media practice.",
                    icon: GraduationCap,
                    link: "/program/m-a-journalism-mass-communication",
                },
            ],
        },
    ],
    labs: {
        headingBefore: "Practical Learning &",
        headingHighlight: "Media Exposure",
        intro: "The Institute of Media Studies emphasizes experiential learning, allowing students to explore the creative and technical dimensions of media production and communication. Through workshops, practical sessions, industry visits, and expert interactions, students gain exposure to various aspects of journalism, filmmaking, photography, broadcasting, and digital storytelling.",
        items: [
            { num: "01", title: "Journalism & News Reporting", desc: "Understand news gathering, reporting techniques, newsroom operations, journalistic ethics, and television and digital journalism.", accent: "#D62C2B", icon: Newspaper, animClass: "lab-icon-orbital" },
            { num: "02", title: "Filmmaking & Cinema", desc: "Explore filmmaking fundamentals, storytelling, acting, script development, characterisation, and film production.", accent: "#1B4F91", icon: Clapperboard, animClass: "lab-icon-pulse" },
            { num: "03", title: "Photography & Cinematography", desc: "Develop an understanding of visual composition, camera techniques, lighting, photography, and cinematographic storytelling.", accent: "#14284E", icon: Camera, animClass: "lab-icon-float" },
            { num: "04", title: "Television & Radio Broadcasting", desc: "Gain insights into television journalism, radio broadcasting, audio production, and digital broadcasting platforms.", accent: "#D62C2B", icon: Radio, animClass: "lab-icon-network" },
            { num: "05", title: "Digital Media & Visual Storytelling", desc: "Explore digital communication, content creation, multimedia storytelling, and visual communication.", accent: "#1B4F91", icon: Video, animClass: "lab-icon-stack" },
            { num: "06", title: "Theatre & Performing Arts", desc: "Understand acting techniques, emotional expression, character development, and the relationship between theatre, cinema, and performance.", accent: "#14284E", icon: Film, animClass: "lab-icon-glow" },
        ],
    },
    highlights: {
        headingBefore: "What Makes the Institute of Media Studies Different at",
        headingHighlight: "SRMU?",
        items: [
            { num: "01", title: "PRACTICAL MEDIA EXPOSURE", desc: "Students get opportunities to understand media practices through workshops, industry visits, guest lectures, and practical learning activities.", icon: Video },
            { num: "02", title: "INDUSTRY EXPERT INTERACTIONS", desc: "Sessions with professionals from journalism, theater, cinema, photography, and broadcasting provide insights into real-world industry requirements.", icon: UsersRound },
            { num: "03", title: "CREATIVE & VISUAL STORYTELLING", desc: "The learning approach encourages students to explore storytelling through photography, cinematography, video production, and digital platforms.", icon: Camera },
            { num: "04", title: "EXPOSURE TO MULTIPLE MEDIA FORMATS", desc: "Students explore television journalism, radio broadcasting, podcasts, cinema, theater, and digital media.", icon: Radio },
            { num: "05", title: "EXPERIENTIAL LEARNING OPPORTUNITIES", desc: "Cultural visits and industrial visits help students understand the relationship between media, society, culture, and professional communication.", icon: Activity },
            { num: "06", title: "FOCUS ON EMERGING MEDIA TRENDS", desc: "Academic activities introduce students to changing audience preferences, digital communication platforms, and evolving media technologies.", icon: Lightbulb },
        ],
    },
    events: {
        headingBefore: "From Classroom Concepts to",
        headingHighlight: "Real-World Applications",
        sectionSubtitle: "",
        intro: "The Institute of Media Studies provides students with opportunities to engage with media professionals, creative experts, and industry practitioners through workshops, guest lectures, industrial visits, and cultural activities. These initiatives help students understand professional media practices, explore emerging career opportunities, and connect academic learning with real - world experiences.",
        cards: mediaEventCards,
    },
    activitySections: [
        {
            id: "industry-exposure",
            eyebrow: "Learning from Media Professionals",
            heading: "Industry & Cultural Visits",
            intro: "Cultural and industrial visits help students understand how media organizations work and how communication connects with culture, society, and professional practice.",
            cards: [
                mediaEventCards[8],
                mediaEventCards[9],
            ],
        },
        {
            id: "research-publications",
            eyebrow: "Research, Innovation & Publications",
            heading: "Media Research & Scholarly Work",
            intro: "Research and publications support the institute's work in journalism, new media, web journalism, print journalism, visual communication, and media practice. Dr. Pradeep Kumar has published 25 research papers, contributed chapters to 10 books, and authored one book.",
            cards: [
                activityCard("RESEARCH AREA", "Journalism & New Media", "Explore journalism, web journalism, print journalism, news practices, and the changing role of digital media.", researchImage),
                activityCard("RESEARCH AREA", "Visual Communication & Storytelling", "Study how photography, cinematography, video, and visual design communicate information and ideas.", visualStorytellingImage),
                activityCard("RESEARCH AREA", "Film, Theatre & Performance", "Explore cinema, theatre, acting, character development, and media performance.", studioImage),
                activityCard("RESEARCH AREA", "Media, Society & Communication", "Consider how media narratives and communication practices shape public understanding and social life.", mediaVisitImage),
            ],
        },
    ],
    career: {
        heading: "Career Opportunities",
        items: [
            ["Journalism", "TV Journalist, News Reporter"],
            ["Broadcasting", "News Anchor, Radio Jockey"],
            ["Film & Cinema", "Film Director, Scriptwriter"],
            ["Production", "Video Editor, Cinematographer"],
            ["Photography", "Photographer"],
            ["Digital Media", "Digital Content Creator, Social Media Manager"],
            ["Audio Media", "Podcast Producer"],
            ["Public Relations", "Public Relations Executive"],
            ["Research", "Media Researcher"],
        ],
        descriptions: [
            { title: "Journalism", description: "TV Journalist, News Reporter" },
            { title: "Broadcasting", description: "News Anchor, Radio Jockey" },
            { title: "Film & Cinema", description: "Film Director, Scriptwriter" },
            { title: "Production", description: "Video Editor, Cinematographer" },
            { title: "Photography", description: "Photographer" },
            { title: "Digital Media", description: "Digital Content Creator, Social Media Manager" },
            { title: "Audio Media", description: "Podcast Producer" },
            { title: "Public Relations", description: "Public Relations Executive" },
            { title: "Research", description: "Media Researcher" },
        ],
    },
    facultySection: {
        members: mediaFaculty,
        subheading: "Faculty members connect media theory with practical learning in journalism, digital communication, visual storytelling, and media production.",
        featuredLabel: "OFFICIATING HOD",
        featuredDescription: "Dr. Pradeep Kumar brings together 8 years of teaching experience and 4 years of professional experience in print and electronic media.",
        profileDescription: "Institute faculty guide students in media studies, journalism, practical production, and responsible communication.",
        showResearchShowcase: false,
    },
    faq: [
        { q: "What is the Institute of Media Studies at SRMU?", a: "The Institute of Media Studies at Shri Ramswaroop Memorial University focuses on media education, covering areas such as journalism, mass communication, television, filmmaking, cinema, photography, and digital media." },
        { q: "What subjects are covered under Media Studies?", a: "Media studies covers various areas, including journalism, news reporting, television broadcasting, radio, digital communication, filmmaking, photography, cinematography, and visual storytelling." },
        { q: "Does the Institute of Media Studies organize workshops?", a: "Yes. The institute organizes workshops on topics such as television journalism, acting, filmmaking, video production, photography, cinematography, and visual storytelling." },
        { q: "Do students get exposure to media industry professionals?", a: "Students get opportunities to interact with industry professionals through guest lectures, workshops, and other academic activities." },
        { q: "Does the institute organize industrial visits?", a: "Yes. Students have participated in industrial visits, including a visit to Bharat Samachar, where they gained insights into newsroom operations and professional journalistic practices." },
        { q: "What career opportunities are available after studying media studies?", a: "Students can explore career opportunities in journalism, television, radio, film production, digital media, photography, advertising, public relations, and content creation." },
        { q: "How does the institute promote practical learning?", a: "The institute promotes practical learning through workshops, guest lectures, industry interactions, cultural visits, industrial visits, and project-based academic activities." },
        { q: "Do students get exposure to filmmaking and cinematography?", a: "Yes. Workshops covering filmmaking, acting, video production, photography, and cinematography provide students with exposure to different aspects of visual media." },
        { q: "What is the importance of visual storytelling in media?", a: "Visual storytelling uses images, videos, cinematography, and other visual elements to communicate information, convey emotions, and engage audiences across media platforms." },
        { q: "How can I apply for programs at the Institute of Media Studies?", a: "Interested candidates can visit the official SRMU website, explore available programs, review eligibility criteria, and complete the online admission application process." },
    ],
    showFaculty: true,
    showScholarships: true,
    showBlogs: true,
    showCareerDescriptionCards: false,
};
