import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";
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
    { label: "Total Ph.D.", value: "50", detail: "2016–2026 Archive", Icon: GraduationCap },
    { label: "Theses (2025–26)", value: "15", detail: "Current Session", Icon: FileText },
    { label: "Ph.D. Matrix Seats", value: "63", detail: "Available Seats", Icon: UserRound },
    { label: "Supervisors", value: "22", detail: "Active Faculty", Icon: UsersRound },
    { label: "Vacant Seats", value: "65", detail: "Available Seats", Icon: Star },
    { label: "Publications", value: "62", detail: "Indexed Papers", Icon: BookOpenCheck },
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

function ResearchIllustration() {
    return (
        <svg
            className={styles.researchIllustration}
            viewBox="0 0 130 130"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <defs>
                <linearGradient id="bookCoverGrad" x1="18" y1="86" x2="86" y2="104" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#102244" />
                    <stop offset="100%" stopColor="#1B4F91" />
                </linearGradient>
                <linearGradient id="bookMidGrad" x1="18" y1="74" x2="84" y2="90" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#1B4F91" />
                    <stop offset="100%" stopColor="#21A5DB" />
                </linearGradient>
                <linearGradient id="beamGrad" x1="84" y1="62" x2="48" y2="84" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#21A5DB" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#FFB703" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="auraDisc" cx="64" cy="66" r="44" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#E0F1FF" stopOpacity="0.9" />
                    <stop offset="60%" stopColor="#FFB703" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="#E0F1FF" stopOpacity="0" />
                </radialGradient>
            </defs>

            {/* Glowing Backdrop Disc */}
            <circle cx="64" cy="66" r="46" fill="url(#auraDisc)" />

            {/* Bottom Book 1 */}
            <rect x="18" y="90" width="70" height="14" rx="4.5" fill="url(#bookCoverGrad)" />
            <rect x="16" y="92" width="66" height="3" fill="#FFFFFF" fillOpacity="0.9" />
            <rect x="18" y="100" width="12" height="3" rx="1.5" fill="#FFB703" />

            {/* Middle Book 2 */}
            <rect x="22" y="78" width="64" height="13" rx="4" fill="url(#bookMidGrad)" />
            <rect x="20" y="80" width="60" height="2.5" fill="#EEF7FE" />
            {/* Golden bookmark ribbon */}
            <path d="M34 80V94L39 90L44 94V80" fill="#FFB703" />

            {/* Top Open Book with curved pages */}
            <path
                d="M18 70C32 62 48 64 58 71C68 64 84 62 98 70L94 80C80 72 66 74 58 79C50 74 36 72 22 79L18 70Z"
                fill="#FFFFFF"
                stroke="#CCE5FA"
                strokeWidth="1.8"
            />
            <path d="M58 71V79" stroke="#1B4F91" strokeWidth="2" />
            {/* Subtle text lines on book pages */}
            <path d="M26 73C34 69 44 70 52 74" stroke="#90C5F2" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M64 74C72 70 82 69 90 73" stroke="#90C5F2" strokeWidth="1.5" strokeLinecap="round" />

            {/* Light beam from microscope lens */}
            <path d="M84 56L44 76L68 80Z" fill="url(#beamGrad)" style={{ animation: "beamPulse 3s ease-in-out infinite" }} />

            {/* Microscope Base & Stage */}
            <path d="M78 100H106M92 100V80" stroke="#102244" strokeWidth="5.5" strokeLinecap="round" />
            <path d="M92 82C108 80 110 52 94 44" stroke="#102244" strokeWidth="6.5" strokeLinecap="round" />
            {/* Golden stage plate */}
            <rect x="74" y="68" width="26" height="5" rx="2.5" fill="#FFB703" stroke="#E59819" strokeWidth="1" />
            {/* Microscope barrel & optics */}
            <g transform="rotate(24 82 36)">
                <rect x="76" y="20" width="14" height="38" rx="3.5" fill="#1B4F91" />
                <rect x="78" y="16" width="10" height="5" rx="2" fill="#102244" />
                <rect x="78" y="58" width="10" height="7" rx="2.5" fill="#FFB703" />
                {/* Cyan optical lens ring */}
                <rect x="76" y="32" width="14" height="4" fill="#21A5DB" />
                {/* Golden adjustment knob */}
                <circle cx="73" cy="40" r="3.5" fill="#FFB703" stroke="#102244" strokeWidth="1.5" />
            </g>

            {/* Floating Golden Stars / Discovery Sparkles */}
            <g style={{ transformOrigin: "108px 24px", animation: "sparkleSpin 4s ease-in-out infinite" }}>
                <path d="M108 17L110 22L115 24L110 26L108 31L106 26L101 24L106 22L108 17Z" fill="#FFB703" />
            </g>
            <circle cx="118" cy="42" r="2.5" fill="#21A5DB" />
            <circle cx="36" cy="52" r="2" fill="#FFB703" />
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
    const [statsViewportRef, statsCarousel] = useEmblaCarousel({
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
    const [canPreviousStat, setCanPreviousStat] = useState(false);
    const [canNextStat, setCanNextStat] = useState(false);

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

    useEffect(() => {
        if (!statsCarousel) return;
        const update = () => {
            setCanPreviousStat(statsCarousel.canScrollPrev());
            setCanNextStat(statsCarousel.canScrollNext());
        };
        update();
        statsCarousel.on("select", update).on("reInit", update);
        return () => {
            statsCarousel.off("select", update).off("reInit", update);
        };
    }, [statsCarousel]);

    return (
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
                            <span>OUR FACULTY & RESEARCH</span>
                            <span className={styles.eyebrowBar} aria-hidden="true" />
                        </div>
                        <h2 id="faculty-heading" className={`font-display ${styles.heading}`}>
                            Learn from Experienced{" "}
                            <span className={styles.headingHighlight}>
                                Academic & Research Professionals.
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

                {/* Bottom Research & Publications Panel (REVAMPED: ULTRA-ATTRACTIVE) */}
                <div
                    className={styles.researchPanel}
                    aria-labelledby="academic-strength-heading"
                >
                    {/* Ambient Luminous Glow Orbs */}
                    <div className={styles.researchGlowCyan} aria-hidden="true" />
                    <div className={styles.researchGlowGold} aria-hidden="true" />
                    <div className={styles.researchDotGrid} aria-hidden="true" />

                    <div className={styles.researchLayout}>
                        {/* Left Side: Animated Illustration + Copy + CTA */}
                        <div className={styles.researchIntro}>
                            <div className={styles.researchIllustrationWrapper}>
                                <div className={styles.researchIllustrationAura} aria-hidden="true" />
                                <ResearchIllustration />
                            </div>
                            <div className={styles.researchIntroCopy}>
                                <div className={styles.researchEyebrowBadge}>
                                    <span className={styles.researchPulsingDot} aria-hidden="true" />
                                    <span className={styles.researchEyebrowText}>
                                        RESEARCH & PUBLICATIONS
                                    </span>
                                </div>
                                <h3
                                    id="academic-strength-heading"
                                    className={`font-display ${styles.researchHeading}`}
                                >
                                    Advancing Knowledge.
                                    <span className={styles.researchHeadingSpan}>
                                        Creating Impact.
                                    </span>
                                </h3>
                                <p className={styles.researchParagraph}>
                                    Our faculty actively contributes to cutting-edge research,
                                    publications and innovation across various domains.
                                </p>
                                <Link to="/publication" className={styles.researchButton}>
                                    <FileText size={15} aria-hidden="true" />
                                    <span>Research</span>
                                    <ArrowRight size={14} aria-hidden="true" />
                                </Link>
                            </div>
                        </div>

                        {/* Research statistics carousel */}
                        <div
                            className={styles.statsCarouselWrapper}
                            role="region"
                            aria-roledescription="carousel"
                            aria-label="Academic strength statistics"
                        >
                            <button
                                type="button"
                                className={`${styles.arrowButton} ${styles.arrowPrev}`}
                                onClick={() => statsCarousel?.scrollPrev()}
                                disabled={!canPreviousStat}
                                aria-label="Previous statistics"
                            >
                                <ArrowLeft size={16} aria-hidden="true" />
                            </button>
                            <div
                                className={styles.statsViewport}
                                ref={statsViewportRef}
                            >
                                <dl className={styles.researchStatsGrid}>
                                    {academicStrength.map(({ label, value, detail, Icon }) => (
                                        <div className={styles.statSlide} key={label}>
                                            <div className={styles.statCard}>
                                                <div className={styles.statCardInner}>
                                                    <div className={styles.statIconWrapper}>
                                                        <Icon
                                                            size={18}
                                                            strokeWidth={2.4}
                                                            aria-hidden="true"
                                                        />
                                                    </div>
                                                    <p className={styles.statValue}>{value}</p>
                                                    <dt className={styles.statLabel}>{label}</dt>
                                                    <dd className={styles.statDetail}>
                                                        <span className={styles.statDetailBadge}>
                                                            {detail}
                                                        </span>
                                                    </dd>
                                                </div>
                                                <span
                                                    className={styles.statAccentBar}
                                                    aria-hidden="true"
                                                />
                                                </div>
                                            </div>
                                        ))}
                                    </dl>
                                </div>
                                <button
                                    type="button"
                                    className={`${styles.arrowButton} ${styles.arrowNext}`}
                                    onClick={() => statsCarousel?.scrollNext()}
                                    disabled={!canNextStat}
                                    aria-label="Next statistics"
                                >
                                    <ArrowRight size={16} aria-hidden="true" />
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
