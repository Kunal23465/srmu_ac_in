import { ArrowRight, BriefcaseBusiness, ChartNoAxesColumnIncreasing, Trophy, UsersRound } from "lucide-react";
import styles from "./DepartmentPlacements.module.css";

const statistics = [
    { value: "₹53 LPA", label: "Highest Package", Icon: Trophy },
    { value: "₹4.5 LPA", label: "Average Package", Icon: ChartNoAxesColumnIncreasing },
    { value: "1200+", label: "Job Offers Given", Icon: BriefcaseBusiness },
    { value: "225+", label: "Students Placed", Icon: UsersRound },
];

export default function DepartmentPlacements({ recruiters }: { recruiters: [string, string][] }) {
    return (
        <section id="placements" className={styles.section} aria-labelledby="cse-placements-title">
            <div className={styles.container}>
                <div className={styles.layout}>
                    <div className={styles.content}>
                        <h2 id="cse-placements-title" className={styles.heading}>
                            Where our Students <span>Get Placed</span>
                        </h2>
                        <p className={styles.description}>
                            Dedicated placement training — resume building, coding practice, mock interviews
                            and group discussions — starts from the final year.
                        </p>
                        <dl className={styles.statistics}>
                            {statistics.map(({ value, label, Icon }) => (
                                <div key={label} className={styles.statistic}>
                                    <dt>
                                        <span className={styles.icon} aria-hidden="true"><Icon size={32} strokeWidth={2.2} /></span>
                                        <span>{label}</span>
                                    </dt>
                                    <dd>{value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div className={styles.visual}>
                        <span className={styles.dots} aria-hidden="true" />
                        <svg className={styles.rings} viewBox="0 0 220 280" fill="none" aria-hidden="true" focusable="false">
                            {[0, 1, 2, 3, 4].map(index => <ellipse key={index} cx="108" cy="140" rx={88 + index * 7} ry={104 + index * 7} />)}
                        </svg>
                        <div className={styles.imageFrame}>
                            <img
                                src="https://ik.imagekit.io/ttalcskjf/IMAGE%202.webp?updatedAt=1788439003256"
                                alt="SRMU student preparing for a career in cybersecurity"
                                className={styles.image}
                                width={700}
                                height={470}
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.recruiters}>
                    <div className={styles.recruitersHeader}>
                        <h3>Top Recruiters</h3>
                        <span>Our students work at</span>
                    </div>
                    <div className={styles.recruitersViewport} role="region" aria-label="Top recruiters" tabIndex={0}>
                        <div className={styles.recruitersTrack}>
                            {[0, 1].map(copy => (
                                <div key={copy} className={styles.recruitersGroup} aria-hidden={copy === 1 ? true : undefined}>
                                    {recruiters.map(([src, name]) => (
                                        <div key={name} className={styles.recruiter}>
                                            <img src={src} alt={copy === 0 ? name : ""} loading="lazy" decoding="async" />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.details}>
                    <a href="https://srmu.ac.in/placements" target="_blank" rel="noopener noreferrer">
                        View Placement Details <ArrowRight size={17} aria-hidden="true" />
                    </a>
                </div>
            </div>
        </section>
    );
}
