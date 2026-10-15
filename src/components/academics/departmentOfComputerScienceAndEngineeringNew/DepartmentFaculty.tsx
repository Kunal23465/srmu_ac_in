import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
    ArrowLeft,
    ArrowRight,
    BookOpenCheck,
    FileText,
    GraduationCap,
    Layers3,
    Star,
    UserRound,
    UsersRound,
} from "lucide-react";
import Global from "../../../utils/styles/Global.module.css";
import styles from "./DepartmentFaculty.module.css";

export type FacultyMember = {
    name: string;
    role: string;
    img: string;
    isHod?: boolean;
    qualification?: string;
    experience?: string;
    specialization?: string[];
};

// Academic-strength figures supplied in the section design reference.
const academicStrength = [
    { label: "Total Ph.D.", value: "50", Icon: GraduationCap },
    { label: "Theses (2025–26)", value: "15", Icon: FileText },
    { label: "Ph.D. Matrix Seats", value: "63", Icon: UsersRound },
    { label: "Supervisors", value: "22", Icon: UserRound },
    { label: "Vacant Seats", value: "65", Icon: Star },
    { label: "Publications", value: "62", Icon: BookOpenCheck },
];

const facultyHighlights = [
    { label: "Expert Faculty", Icon: GraduationCap },
    { label: "Interactive Learning", Icon: Layers3 },
    { label: "Research Driven", Icon: UsersRound },
    { label: "Industry Aligned", Icon: Star },
];

function UniversityDomeWatermark() {
    return (
        <svg
            className={styles.campusDrawing}
            viewBox="0 0 280 300"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            {/* Lantern spire & flag on peak */}
            <path d="M140 14V36M140 14L152 20L140 26" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="140" cy="40" r="3.5" fill="currentColor" fillOpacity="0.25" />
            <path d="M133 44H147L145 56H135Z" />

            {/* Cupola dome contour */}
            <path d="M140 56C118 56 102 74 97 96H183C178 74 162 56 140 56Z" />

            {/* Dome ribs */}
            <path d="M140 56V96" />
            <path d="M121 62C114 72 110 84 108 96" />
            <path d="M159 62C166 72 170 84 172 96" />

            {/* Entablature beneath dome */}
            <rect x="92" y="96" width="96" height="7" rx="1.5" fill="currentColor" fillOpacity="0.12" />

            {/* Drum with arched windows and pilasters */}
            <rect x="96" y="103" width="88" height="38" fill="none" />
            <path d="M106 141V120C106 115 111 111 116 111C121 111 126 115 126 120V141" />
            <path d="M133 141V120C133 115 138 111 143 111C148 111 153 115 153 120V141" />
            <path d="M160 141V120C160 115 165 111 170 111C175 111 180 115 180 120V141" />
            <line x1="100" y1="103" x2="100" y2="141" />
            <line x1="130" y1="103" x2="130" y2="141" />
            <line x1="156" y1="103" x2="156" y2="141" />
            <line x1="184" y1="103" x2="184" y2="141" />

            {/* Lower Base / Colonnade level */}
            <rect x="84" y="141" width="112" height="8" rx="1.5" fill="currentColor" fillOpacity="0.12" />
            <rect x="70" y="149" width="140" height="78" fill="none" />

            {/* Repeating classical arches on ground level */}
            {[84, 108, 132, 156, 180].map((x) => (
                <path
                    key={x}
                    d={`M${x} 227V180Q${x + 8} 168 ${x + 16} 180V227M${x - 2} 227H${x + 18}`}
                />
            ))}

            {/* Base steps */}
            <path d="M54 227H226M46 235H234M38 243H242" strokeLinecap="round" />
        </svg>
    );
}

export default function DepartmentFaculty({
    faculty,
    onSelect,
}: {
    faculty: FacultyMember[];
    onSelect: (member: FacultyMember) => void;
}) {
    const [viewportRef, carousel] = useEmblaCarousel({
        align: "start",
        slidesToScroll: 1,
        loop: false,
    });
    const [showAll, setShowAll] = useState(false);
    const hod = faculty.find((member) => member.isHod) ?? faculty[0];
    const otherFaculty = faculty.filter((member) => member !== hod);
    const [selected, setSelected] = useState(0);
    const [snaps, setSnaps] = useState<number[]>([]);
    const [canPrevious, setCanPrevious] = useState(false);
    const [canNext, setCanNext] = useState(false);

    useEffect(() => {
        if (!carousel) return;
        const update = () => {
            setSelected(carousel.selectedScrollSnap());
            setSnaps(carousel.scrollSnapList());
            setCanPrevious(carousel.canScrollPrev());
            setCanNext(carousel.canScrollNext());
        };
        update();
        carousel.on("select", update).on("reInit", update);
        return () => {
            carousel.off("select", update).off("reInit", update);
        };
    }, [carousel]);

    return (
        <>
        <section id="faculty" className={styles.section} aria-labelledby="faculty-heading">
            {/* Background Decorative Accents */}
            <div className={styles.topSwoopNavy} aria-hidden="true" />
            <div className={styles.topSwoopGold} aria-hidden="true" />
            <div className={styles.bottomSwoopGold} aria-hidden="true" />
            <div className={styles.bottomSwoopNavy} aria-hidden="true" />
            <div className={styles.dotGridLeft} aria-hidden="true" />
            <div className={styles.dotGridRight} aria-hidden="true" />
            <div className={styles.dotGridFacultyRight} aria-hidden="true" />

            {/* Classical University Dome Watermark */}
            <UniversityDomeWatermark />

            <div className={`${Global.container} cse-content-container ${styles.container}`}>
                {/* Header Area */}
                <header className={styles.header}>
                    <div className={styles.headerCopy}>
                        <div className={styles.eyebrow}>
                            <span>OUR FACULTY</span>
                            <span className={styles.eyebrowBar} aria-hidden="true" />
                        </div>
                        <h2 id="faculty-heading" className={`font-display ${styles.heading}`}>
                            Learn from Experienced{" "}
                            <span className={styles.headingHighlight}>
                                Academic Professionals.
                            </span>
                        </h2>
                        <p className={styles.subheading}>
                            The university highlights faculty recruitment from reputed institutions
                            including IIT, IIM, MNNIT and IIT-BHU, with an emphasis on interactive,
                            personalized teaching.
                        </p>
                    </div>

                    <div className={styles.headerFeatures}>
                        <ul className={styles.featureList}>
                            {facultyHighlights.map(({ label, Icon }) => (
                                <li key={label} className={styles.featureItem}>
                                    <span className={styles.featureIcon}>
                                        <Icon size={24} strokeWidth={2.2} aria-hidden="true" />
                                    </span>
                                    <span className={styles.featureLabel}>{label}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Handwritten Note: Guiding Tomorrow's Leaders */}
                        <div className={styles.calloutNote} aria-hidden="true">
                            <span className={styles.calloutText}>
                                Guiding<br />Tomorrow&apos;s<br />Leaders
                            </span>
                            <svg className={styles.calloutSwoosh} viewBox="0 0 80 8" fill="none">
                                <path
                                    d="M2 6C24 1.5 56 1.5 78 5"
                                    stroke="#FFB703"
                                    strokeWidth="3.2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                    </div>
                </header>

                <div className={styles.facultyResearchPanel}>
                    {/* Main Faculty Panel Container */}
                    <div className={styles.facultyPanel}>
                        <div className={styles.panelTopRow}>
                            <button
                                type="button"
                                className={styles.viewAllButton}
                                aria-expanded={showAll}
                                onClick={() => setShowAll((prev) => !prev)}
                            >
                                <span>{showAll ? "Show Featured Faculty" : "View All Faculty"}</span>
                                <ArrowRight size={14} aria-hidden="true" />
                            </button>
                        </div>

                        {showAll ? (
                            /* Expanded Grid Showing All Faculty Members */
                            <div className={styles.allFacultyGrid}>
                                {faculty.map((member) => (
                                    <article
                                        key={member.name}
                                        className={styles.facultyCard}
                                        onClick={() => onSelect(member)}
                                    >
                                        <div className={styles.cardPortraitWrapper}>
                                            {member.isHod && (
                                                <span className={styles.hodBadge}>HOD</span>
                                            )}
                                            <img
                                                src={member.img}
                                                alt={member.name}
                                                loading="lazy"
                                                decoding="async"
                                                className={styles.cardPortraitImg}
                                                onError={(e) => {
                                                    e.currentTarget.src =
                                                        "https://ui-avatars.com/api/?name=" +
                                                        encodeURIComponent(member.name) +
                                                        "&background=EAEAEA&color=14284E&size=256";
                                                }}
                                            />
                                        </div>
                                        <div className={styles.cardBody}>
                                            <h3 className={styles.cardName}>{member.name}</h3>
                                            <p className={styles.cardRole}>{member.role}</p>
                                            <span className={styles.cardAccentBar} aria-hidden="true" />
                                        </div>
                                    </article>
                                ))}
                            </div>
                        ) : (
                            /* Default Split Layout: HOD Card on Left, Carousel on Right */
                            <div className={styles.panelLayout}>
                                {/* Featured HOD Card */}
                                <article className={styles.hodCard}>
                                    <div className={styles.hodPortraitWrapper}>
                                        <span className={styles.hodBadge}>HOD</span>
                                        <img
                                            src={hod.img}
                                            alt={hod.name}
                                            loading="lazy"
                                            decoding="async"
                                            className={styles.hodPortraitImg}
                                            onError={(e) => {
                                                e.currentTarget.src =
                                                    "https://ui-avatars.com/api/?name=" +
                                                    encodeURIComponent(hod.name) +
                                                    "&background=EAEAEA&color=14284E&size=256";
                                            }}
                                        />
                                    </div>
                                    <div className={styles.hodContent}>
                                        <h3 className={styles.hodName}>{hod.name}</h3>
                                        <p className={styles.hodRole}>{hod.role}</p>
                                        <p className={styles.hodDescription}>
                                            Expert in computer science and engineering with a focus on
                                            innovation and research.
                                        </p>
                                        <button
                                            type="button"
                                            className={styles.viewProfileButton}
                                            onClick={() => onSelect(hod)}
                                        >
                                            <span>View Profile</span>
                                            <ArrowRight size={14} aria-hidden="true" />
                                        </button>
                                    </div>
                                </article>

                                {/* Carousel of Other Faculty Members */}
                                <div
                                    className={styles.carouselWrapper}
                                    role="region"
                                    aria-roledescription="carousel"
                                    aria-label="Department faculty"
                                >
                                    <button
                                        type="button"
                                        className={`${styles.arrowButton} ${styles.arrowPrev}`}
                                        onClick={() => carousel?.scrollPrev()}
                                        disabled={!canPrevious}
                                        aria-label="Previous faculty slide"
                                    >
                                        <ArrowLeft size={16} aria-hidden="true" />
                                    </button>

                                    <div className={styles.viewport} ref={viewportRef}>
                                        <div className={styles.track}>
                                            {otherFaculty.map((member) => (
                                                <article
                                                    key={member.name}
                                                    className={styles.facultyCard}
                                                    onClick={() => onSelect(member)}
                                                >
                                                    <div className={styles.cardPortraitWrapper}>
                                                        <img
                                                            src={member.img}
                                                            alt={member.name}
                                                            loading="lazy"
                                                            decoding="async"
                                                            className={styles.cardPortraitImg}
                                                            onError={(e) => {
                                                                e.currentTarget.src =
                                                                    "https://ui-avatars.com/api/?name=" +
                                                                    encodeURIComponent(member.name) +
                                                                    "&background=EAEAEA&color=14284E&size=256";
                                                            }}
                                                        />
                                                    </div>
                                                    <div className={styles.cardBody}>
                                                        <h3 className={styles.cardName}>
                                                            {member.name}
                                                        </h3>
                                                        <p className={styles.cardRole}>
                                                            {member.role}
                                                        </p>
                                                        <span
                                                            className={styles.cardAccentBar}
                                                            aria-hidden="true"
                                                        />
                                                    </div>
                                                </article>
                                            ))}
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        className={`${styles.arrowButton} ${styles.arrowNext}`}
                                        onClick={() => carousel?.scrollNext()}
                                        disabled={!canNext}
                                        aria-label="Next faculty slide"
                                    >
                                        <ArrowRight size={16} aria-hidden="true" />
                                    </button>

                                    {/* Carousel Pagination Dots */}
                                    {snaps.length > 1 && (
                                        <div
                                            className={styles.pagination}
                                            aria-label="Faculty carousel pages"
                                        >
                                            {snaps.map((_, index) => (
                                                <button
                                                    type="button"
                                                    key={index}
                                                    className={styles.dotButton}
                                                    aria-label={`Go to slide ${index + 1}`}
                                                    aria-current={
                                                        selected === index ? "true" : undefined
                                                    }
                                                    onClick={() => carousel?.scrollTo(index)}
                                                >
                                                    <span className={styles.dotPill} />
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
        <ResearchShowcase />
        </>
    );
}

function ResearchShowcase() {
    return (
        <section
            id="research-publications"
            className={styles.researchShowcase}
            aria-labelledby="academic-strength-heading"
        >
            <div className={styles.showcaseAccentLeft} aria-hidden="true" />
            <div className={styles.showcaseAccentRight} aria-hidden="true" />
            <div className={styles.showcaseDotsTop} aria-hidden="true" />
            <div className={styles.showcaseDotsBottom} aria-hidden="true" />
            <div className={styles.showcaseWave} aria-hidden="true" />

            <div className={styles.researchShowcaseInner}>
                <div className={styles.showcaseIntro}>
                    <div className={styles.showcaseBadge}>
                        <span className={styles.showcaseBadgeDot} aria-hidden="true" />
                        <span>Research &amp; Publications</span>
                    </div>
                    <h2 id="academic-strength-heading" className={`font-display ${styles.showcaseHeading}`}>
                        Advancing Knowledge.
                        <span>Creating Impact.</span>
                    </h2>
                    <p className={styles.showcaseParagraph}>
                        Our faculty actively contributes to cutting-edge research, publications and
                        innovation across various domains.
                    </p>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://research-consultancy.srmu.ac.in/department/institute-of-technology"
                        className={styles.showcaseButton}
                    >
                        <FileText size={20} aria-hidden="true" />
                        <span>Research</span>
                        <ArrowRight size={20} aria-hidden="true" />
                    </a>
                </div>

                <div className={styles.showcaseStats} role="list" aria-label="Academic strength statistics">
                    {academicStrength.map(({ label, value, Icon }) => (
                        <article className={styles.showcaseStat} key={label} role="listitem">
                            <span className={styles.showcaseStatIcon} aria-hidden="true">
                                <Icon size={46} strokeWidth={1.8} />
                                {label === "Supervisors" && (
                                    <Star className={styles.showcaseStatStar} size={20} strokeWidth={2.2} />
                                )}
                            </span>
                            <p className={styles.showcaseStatValue}>{value}</p>
                            <p className={styles.showcaseStatLabel}>{label}</p>
                            <span className={styles.showcaseStatAccent} aria-hidden="true" />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
