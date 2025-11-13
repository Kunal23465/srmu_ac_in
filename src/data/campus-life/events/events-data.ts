import { customeOverViewType } from "../../../types/home-data-type";

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
        description: `'Anubhuti,' the annual cultural fest, stands as a pinnacle of artistic expression and creativity, bringing the entire academic community together for a mesmerizing showcase of talent and diversity. The event unfolds as a multi–day extravaganza, featuring a kaleidoscope of performances, exhibitions, and interactive sessions that transcend conventional boundaries.`,
        cards: [
            {
                title: "Anubhuti 2025",
                date: "February 08, 2025",
                description:
                    "Anubhuti-2025, the annual cultural festival of Shri Ramswaroop Memorial University…",
                image: "/images/anubhuti-2025.jpg",
            },
            {
                title: "Anubhuti 2024",
                date: "March 14, 2024",
                description:
                    "Shri Ramswaroop Memorial University recently organized its annual cultural fest Anubhuti…",
                image: "/images/anubhuti-2024.jpg",
            },
        ],
    },
    harmony: {
        title: "Harmony",
        description:
            "‘Harmony,’ the annual music and dance fest, celebrates rhythm, melody, and artistic synergy, uniting students across disciplines in a grand celebration of performance and collaboration.",
        cards: [
            {
                title: "Harmony 2025",
                date: "April 10, 2025",
                description:
                    "Harmony 2025 showcased an incredible blend of classical and contemporary performances…",
                image: "/images/harmony-2025.jpg",
            },
            {
                title: "Harmony 2024",
                date: "April 09, 2024",
                description:
                    "Harmony 2024 brought together performers from all over the university to create magic on stage…",
                image: "/images/harmony-2024.jpg",
            },
        ],
    },
    ullas: {
        title: "Ullas",
        description:
            "‘Ullas,’ the annual technical and innovation fest, fosters creativity, innovation, and problem-solving through engaging competitions and exhibitions that challenge students’ minds.",
        cards: [
            {
                title: "Ullas 2025",
                date: "May 12, 2025",
                description:
                    "Ullas 2025 celebrated technology and innovation through workshops, hackathons, and exhibitions…",
                image: "/images/ullas-2025.jpg",
            },
            {
                title: "Ullas 2024",
                date: "May 10, 2024",
                description:
                    "Ullas 2024 inspired young innovators to explore the limitless potential of science and creativity…",
                image: "/images/ullas-2024.jpg",
            },
        ],
    },
};
