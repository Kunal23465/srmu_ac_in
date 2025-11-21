// slider-data.ts
export type WhyItem = {
    title: string;
    description: string;
};

export type WhySliderData = {
    heading: string;
    subheading: string;
    items: WhyItem[];
};

const data: WhySliderData = {
    heading: "Why SRMU?",
    subheading: "At SRMU, you will",
    items: [
        {
            title: "Build",
            description:
                "Your future career, with access to expert guidance, and with placements and job offers from 250+ top-level companies",
        },
        {
            title: "Leadership",
            description:
                "SRMU is the brainchild of Pooja and Pankaj Agarwal - two gold-medal-winning IIT-Kanpur alums from the batch of 1998 - who dreamed of building an institution where education is not a destination, but a journey of empowerment and transformation",
        },
        {
            title: "Exposure",
            description:
                "To prepare industry-ready professionals, SRMU offers industrial visits, hands-on laboratory work, expert guest lectures, and an incubation center to nurture emerging entrepreneurs.",
        },
        {
            title: "Dive",
            description:
                "Into a dynamic learning journey with our cutting-edge industry-driven programs, expert faculty, modern infrastructure, and wide range of scholarships.",
        },
        {
            title: "Explore",
            description:
                "Your curiosity and contribute to breakthroughs in diverse fields through our research initiatives",
        },
        {
            title: "Experience",
            description:
                "A vibrant campus life through our student clubs, sports facilities, homely campus accommodation, and exciting campus events.",
        },
        {
            title: "Connect",
            description:
                "With global trends, industry stalwarts, and new perspectives through our conferences.",
        }
    ]
};

export default data;
