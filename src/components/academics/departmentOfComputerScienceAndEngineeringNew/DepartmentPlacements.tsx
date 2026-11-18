import React from "react";
import { ArrowRight, BriefcaseBusiness, ChartNoAxesColumnIncreasing, Trophy, UsersRound } from "lucide-react";
import styles from "./DepartmentPlacements.module.css";

import PlacementLogoLT from "../../../assets/new-home/new-placement-logos/1.png";
import PlacementLogoHCL from "../../../assets/new-home/new-placement-logos/2.png";
import PlacementLogoAccenture from "../../../assets/new-home/new-placement-logos/3.png";
import PlacementLogoCapgemini from "../../../assets/new-home/new-placement-logos/4.png";
import PlacementLogoCognizant from "../../../assets/new-home/new-placement-logos/5.png";
import PlacementLogoIBM from "../../../assets/new-home/new-placement-logos/6.png";
import PlacementLogoTechMahindra from "../../../assets/new-home/new-placement-logos/7.png";
import PlacementLogoDeloitte from "../../../assets/new-home/new-placement-logos/8.png";
import PlacementLogoTCS from "../../../assets/new-home/new-placement-logos/9.png";
import PlacementLogoEY from "../../../assets/new-home/new-placement-logos/10.png";
import PlacementLogoWipro from "../../../assets/new-home/new-placement-logos/11.png";
import PlacementLogoInfosys from "../../../assets/new-home/new-placement-logos/12.png";

export const defaultRecruiterLogos: [string, string][] = [
    [PlacementLogoCognizant, "Cognizant"],
    [PlacementLogoDeloitte, "Deloitte"],
    [PlacementLogoEY, "EY"],
    [PlacementLogoTCS, "TCS"],
    [PlacementLogoInfosys, "Infosys"],
    [PlacementLogoWipro, "Wipro"],
    [PlacementLogoLT, "L&T"],
    [PlacementLogoHCL, "HCL Technologies"],
    [PlacementLogoAccenture, "Accenture"],
    [PlacementLogoCapgemini, "Capgemini"],
    [PlacementLogoTechMahindra, "Tech Mahindra"],
    [PlacementLogoIBM, "IBM"],
];

const defaultStatistics = [
    { value: "₹53 LPA", label: "Highest Package", Icon: Trophy },
    { value: "₹4.5 LPA", label: "Average Package", Icon: ChartNoAxesColumnIncreasing },
    { value: "1200+", label: "Job Offers Given", Icon: BriefcaseBusiness },
    { value: "225+", label: "Students Placed", Icon: UsersRound },
];

export interface DepartmentPlacementsProps {
    recruiters?: [string, string][] | readonly (readonly [string, string])[];
    imageUrl?: string;
    imageAlt?: string;
    placementDetailUrl?: string;
    description?: string;
    heading?: string;
    recruitersHeading?: string;
}

export default function DepartmentPlacements({
    recruiters,
    imageUrl,
    imageAlt,
    placementDetailUrl,
    description,
    heading,
    recruitersHeading,
}: DepartmentPlacementsProps = {}) {
    const activeRecruiters = (recruiters && recruiters.length > 0) ? recruiters : defaultRecruiterLogos;
    const activeStats = defaultStatistics;

    const activeImage = imageUrl || "https://ik.imagekit.io/ttalcskjf/IMAGE%202.webp?updatedAt=1788439003256";
    const activeImageAlt = imageAlt || "SRMU student preparing for a career in cybersecurity";
    const activePlacementDetailUrl = placementDetailUrl || "https://srmu.ac.in/placements";
    const activeDescription = description || "Dedicated placement training — resume building, coding practice, mock interviews and group discussions — starts from the final year.";

    return (
        <section id="placements" className={styles.section} aria-labelledby="cse-placements-title">
            <div className={styles.container}>
                <div className={styles.layout}>
                    <div className={styles.content}>
                        <h2 id="cse-placements-title" className={styles.heading}>
                            {heading ?? <>Where our Students <span>Get Placed</span></>}
                        </h2>
                        <p className={styles.description}>
                            {activeDescription}
                        </p>
                        {activeStats.length > 0 && (
                            <dl className={styles.statistics}>
                                {activeStats.map(({ value, label, Icon }) => (
                                    <div key={label} className={styles.statistic}>
                                        <dt>
                                            <span className={styles.icon} aria-hidden="true"><Icon size={32} strokeWidth={2.2} /></span>
                                            <span>{label}</span>
                                        </dt>
                                        <dd>{value}</dd>
                                    </div>
                                ))}
                            </dl>
                        )}
                    </div>

                    <div className={styles.visual}>
                        <span className={styles.dots} aria-hidden="true" />
                        <svg className={styles.rings} viewBox="0 0 220 280" fill="none" aria-hidden="true" focusable="false">
                            {[0, 1, 2, 3, 4].map(index => <ellipse key={index} cx="108" cy="140" rx={88 + index * 7} ry={104 + index * 7} />)}
                        </svg>
                        <div className={styles.imageFrame}>
                            <img
                                src={activeImage}
                                alt={activeImageAlt}
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
                        <h3>{recruitersHeading ?? "Top Recruiters"}</h3>
                        {/* <span>Our students work at</span> */}
                    </div>
                    <div className={styles.recruitersViewport} role="region" aria-label="Top recruiters" tabIndex={0}>
                        <div className={styles.recruitersTrack}>
                            {[0, 1].map(copy => (
                                <div key={copy} className={styles.recruitersGroup} aria-hidden={copy === 1 ? true : undefined}>
                                    {activeRecruiters.map(([src, name]) => (
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
                    <a href={activePlacementDetailUrl} target="_blank" rel="noopener noreferrer">
                        View Placement Details <ArrowRight size={17} aria-hidden="true" />
                    </a>
                </div>
            </div>
        </section>
    );
}
