import type { LucideIcon } from "lucide-react";
import type { FacultyMember } from "../../components/academics/departmentOfComputerScienceAndEngineeringNew/DepartmentFaculty";
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
        backgroundImage?: string;
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
        headingBefore?: string;
        headingHighlight?: string;
        intro: string;
        learningAreas?: string[];
        learningAreasHeading?: string;
        itemsHeading?: string;
        items: { num: string; title: string; desc: string; accent: string; iconSrc?: string; icon?: LucideIcon; animClass: string }[];
    };
    highlights: {
        headingBefore: string;
        headingHighlight: string;
        items: { num: string; title: string; desc: string; icon?: LucideIcon }[];
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
        stats?: { value: string; label: string; icon?: LucideIcon }[];
        lists?: { title: string; items: string[] }[];
        backgroundImage?: string;
        listLayout?: "capsule";
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
    facultySection?: {
        members: FacultyMember[];
        headingText?: string;
        headingHighlight?: string;
        subheading?: string;
        featuredDescription?: string;
        featuredLabel?: string;
        profileDescription?: string;
        showResearchShowcase?: boolean;
    };
    showCareerDescriptionCards?: boolean;
    faq: { q: string; a: string }[];
    showFaculty?: boolean;
    showScholarships?: boolean;
    showBlogs?: boolean;
};

export default function CustomDepartmentNew({ data }: { data: CustomDepartmentNewData }) {
    return <DepartmentOfComputerScienceAndEngineeringNew customData={data} />;
}
