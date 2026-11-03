import type { LucideIcon } from "lucide-react";
import DepartmentOfComputerScienceAndEngineeringNew from "../../components/academics/departmentOfComputerScienceAndEngineeringNew/DepartmentOfComputerScienceAndEngineeringNew";

export type DepartmentProgramNew = {
    title: string;
    description?: string;
    icon: LucideIcon;
    link: string;
};

export type DepartmentProgramGroupNew = {
    category: string;
    mobileLabel: string;
    badge: string;
    icon: LucideIcon;
    programs: DepartmentProgramNew[];
};

export type DepartmentActivityCardNew = {
    tag: string;
    title: string;
    speaker?: string;
    shortDesc: string;
    readMore: string;
    img: string;
};

export type CustomDepartmentNewData = {
    navSections: { id: string; label: string }[];
    hero: {
        prefix: string;
        title: string;
        stats: { v: string; l: string; delay?: string }[];
        quickStats: { value: string; label: string }[];
    };
    overview: {
        headingBefore: string;
        headingHighlight: string;
        subtitle?: string;
        paragraphs: string[];
        preview: string;
        image: string;
        imageAlt: string;
    };
    missionVision: {
        missionItems: string[];
        visionText: string;
    };
    programs: DepartmentProgramGroupNew[];
    programHeadingBefore?: string;
    programHeadingHighlight?: string;
    labs: {
        intro: string;
        items: { num: string; title: string; desc: string; accent: string; iconSrc: string; animClass: string }[];
    };
    highlights: {
        headingBefore: string;
        headingHighlight: string;
        items: { num: string; title: string; desc: string }[];
    };
    events: {
        headingBefore: string;
        headingHighlight: string;
        sectionSubtitle?: string;
        intro: string;
        cardsEyebrow?: string;
        cardsHeading?: string;
        cardsSubheading?: string;
        cardsIntro?: string;
        cards: DepartmentActivityCardNew[];
    };
    activitySections?: {
        id: string;
        eyebrow: string;
        heading: string;
        intro?: string;
        cards?: DepartmentActivityCardNew[];
        listTitle?: string;
        listItems?: string[];
    }[];
    studentProjects?: {
        eyebrow: string;
        heading: string;
        description: string;
        image: string;
        imageAlt: string;
    };
    research?: {
        eyebrow: string;
        heading: string;
        description: string;
        cards: DepartmentActivityCardNew[];
    };
    workshops?: {
        eyebrow: string;
        heading: string;
        description: string;
        cards: DepartmentActivityCardNew[];
    };
    career: {
        heading: string;
        items: string[][];
        descriptions: { title: string; description: string }[];
    };
    community?: {
        eyebrow: string;
        heading: string;
        paragraphs: string[];
        focusTitle: string;
        focusAreas: string[];
    };
    faq: { q: string; a: string }[];
    showFaculty?: boolean;
    showScholarships?: boolean;
    showBlogs?: boolean;
};

export default function CustomDepartmentNew({ data }: { data: CustomDepartmentNewData }) {
    return <DepartmentOfComputerScienceAndEngineeringNew customData={data} />;
}
