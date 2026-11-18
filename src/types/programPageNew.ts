// ============================================================
// programPageNew.ts
// Shared TypeScript interfaces for the "New" program page template.
// Suffix "New" prevents collisions with any existing type definitions.
// ============================================================

export interface HeroBannerDataNew {
  /** E.g. "B.Tech. Computer Science and Engineering" */
  degreeTitle: string;
  /** Optional single H1 for pages whose SEO heading differs from the specialization name. */
  pageHeading?: string;
  /** Alternative text for the temporary desktop and mobile hero artwork. */
  bannerAlt?: string;
  /** Program label used in the enquiry form. */
  programLabel?: string;
  /** Highlighted specialization name, e.g. "Cyber Security" */
  specialization: string;
  /** Subtitle below specialization, e.g. "In collaboration with L&T" */
  subtitle?: string;
  /** URL for desktop hero image */
  desktopBannerUrl: string;
  /** URL for mobile hero image */
  mobileBannerUrl: string;
  /** Apply Now link */
  applyNowUrl: string;
  /** Brochure PDF link */
  brochureUrl: string;
}

export interface BenefitCardNew {
  title: string;
  description: string;
}

export interface WhyStudyDataNew {
  /** Year in heading, e.g. "2027" */
  year: string;
  /** Optional heading override for programmes outside the default B.Tech CSE pattern. */
  heading?: string;
  /** Optional suffix rendered in the accent color. */
  headingHighlight?: string;
  /** Opening quote */
  quote: string;
  /** Main description paragraphs */
  paragraphs: string[];
  /** Side image URL */
  imageUrl: string;
  imageAlt: string;
  /** Four benefit cards */
  benefitCards: BenefitCardNew[];
}

export interface DomainTagRowNew {
  tags: string[];
}

export interface LtProjectNew {
  text: string;
}

export interface LtTableRowNew {
  label: string;
  value: string;
}

export interface LtBenefitsDataNew {
  /** Optional full heading override. */
  heading?: string;
  /** Optional heading suffix rendered in the title accent color. */
  headingHighlight?: string;
  /** Optional overview heading and copy below the L&T benefits section. */
  overviewHeading?: string;
  /** Optional overview heading suffix rendered in the accent color. */
  overviewHeadingHighlight?: string;
  overviewDescription?: string;
  introText: string;
  domainRows: DomainTagRowNew[];
  followUpText: string;
  projectsHeading: string;
  projectsCol1: LtProjectNew[];
  projectsCol2: LtProjectNew[];
  /** Rows for the programme overview table */
  tableRows: LtTableRowNew[];
  /** Optional background image for the table section */
  tableBackgroundImageUrl?: string;
  /** Optional illustration for the L&T benefits section. */
  artworkUrl?: string;
  artworkAlt?: string;
}

export interface IndustryCardNew {
  /** Badge label, e.g. "Guest Lecture" */
  badge: string;
  /** Secondary badge, e.g. "OT SECURITY" */
  secondaryBadge?: string;
  /** Main heading */
  title: string;
  /** Presenter / speaker line */
  presenter: string;
  /** Body paragraphs */
  paragraphs: string[];
  /** Optional image URL (used by featured card) */
  imageUrl?: string;
  /** Short label displayed below the card icon */
  iconLabel?: string;
  icon?: "cpu" | "brain" | "lock" | "shield" | "code" | "code2" | "compass" | "settings" | "wrench" | "design" | "energy" | "factory" | "car";
}

export interface IndustryExposureDataNew {
  /** Section intro heading */
  sectionTitle: string;
  sectionTitleHighlight: string;
  introParagraph: string;
  expertSessionsHeading: string;
  expertSessionsParagraph: string;
  /** Featured (large) card — displayed first */
  featuredCard: IndustryCardNew;
  /** Secondary grid cards */
  secondaryCards: IndustryCardNew[];
  /** URL for the "Know Your Department" link */
  departmentUrl: string;
  /** Optional background image for the industry exposure section */
  sectionBackgroundImageUrl?: string;
}

export interface PlacementDataNew {
  imageUrl: string;
  imageAlt: string;
  placementDetailUrl: string;
  description?: string;
  heading?: string;
  recruitersHeading?: string;
}

export interface LabCardNew {
  /** E.g. "LAB / 01" */
  label: string;
  /** E.g. "Cyber Security Simulation Lab" */
  title: string;
  /** Italic tagline */
  tagline: string;
  description: string;
  items: string[];
  /** Optional lab photo shown above the lab card content */
  imageUrl?: string;
  /** Alternative text for the lab photo. */
  imageAlt?: string;
}

export interface CurriculumOverlayItemNew {
  text: string;
}

export interface LabsDataNew {
  sectionTitle: string;
  sectionTitleHighlight: string;
  introParagraph: string;
  /** Desktop curriculum image URL */
  curriculumImageDesktop: string;
  /** Mobile curriculum image URL */
  curriculumImageMobile: string;
  /** Overlay labels that appear over the curriculum image (desktop) */
  curriculumOverlayItems: CurriculumOverlayItemNew[];
  curriculumSectionTitle: string;
  curriculumDescription: string;
  /** Video URL shown in the reel */
  reelVideoUrl: string;
  /** Optional poster shown before the reel video loads or plays */
  reelPosterUrl?: string;
  /** Optional background image for the first lab card */
  cardBackgroundImageUrl?: string;
  /** Optional heading and description for the lab cards section. */
  labsHeading?: string;
  labsDescription?: string;
  labs: LabCardNew[];
}

export interface YearDataNew {
  title: string;
  quote: string;
  subjects: string[];
  practicalLearning: string[];
  projects: string[];
  tools: string[];
  outcome: string;
}

export interface YearJourneyDataNew {
  introParagraph: string;
  heading?: string;
  year1: YearDataNew;
  year2: YearDataNew;
  year3: YearDataNew;
  year4?: YearDataNew;
}

export interface FeeRowNew {
  label: string;
  yr1: string;
  yr2: string;
  yr3: string;
  yr4?: string;
}

export interface FeeDataNew {
  feeRows: FeeRowNew[];
  feeNote: string;
  description?: string;
}

export interface ProgramObjectiveNew {
  text: string;
}

export interface ProgramLearningOutcomeNew {
  text: string;
}

export interface ProgramSpecificOutcomeNew {
  text: string;
}

export interface PoPsoPloDataNew {
  objectives: ProgramObjectiveNew[];
  learningOutcomes: ProgramLearningOutcomeNew[];
  specificOutcomes: ProgramSpecificOutcomeNew[];
}

export interface IndustryCardCareerNew {
  title: string;
  /** The value shown under the label — e.g. "Online transactions..." */
  description: string;
  /** Label above the description. Defaults to "Protects" if omitted. */
  descriptionLabel?: string;
}

export interface CareerRoleNew {
  title: string;
  description: string;
}

export interface CareerOpportunitiesDataNew {
  /** Heading highlight, e.g. "in Cybersecurity" */
  headingHighlight: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  industries: IndustryCardCareerNew[];
  /** Optional career role cards shown below industries */
  careerRoles?: CareerRoleNew[];
}

export interface ComparisonRowNew {
  feature: string;
  values: string[];
}

export interface ComparisonHeaderNew {
  label: string;
  highlight?: boolean;
}

export interface ChooseIfCardNew {
  heading: string;
  items: string[];
  /** Background colour class, e.g. "bg-[#E6FAF8]" */
  bgClass?: string;
}

export interface ProgramComparisonDataNew {
  /** Optional title override for the comparison section. */
  heading?: string;
  /** Optional suffix in the title rendered with the accent color. */
  headingHighlight?: string;
  /** Column headers, first is "Feature" */
  headers: ComparisonHeaderNew[];
  rows: ComparisonRowNew[];
  /** Optional "Choose X if you like" cards */
  chooseIfCards?: ChooseIfCardNew[];
}

export interface ProgramFaqNew {
  question: string;
  answer: string;
}

// ============================================================
// Root data shape — pass one of these to ProgramPageTemplateNew
// ============================================================
export interface ProgramPageDataNew {
  /** Optional visual layout variant for a programme using an established page design. */
  designVariant?: "cyber-security";
  heroBanner: HeroBannerDataNew;
  whyStudy: WhyStudyDataNew;
  ltBenefits: LtBenefitsDataNew;
  industryExposure: IndustryExposureDataNew;
  placement: PlacementDataNew;
  labs: LabsDataNew;
  yearJourney: YearJourneyDataNew;
  fee: FeeDataNew;
  poPsoPlo: PoPsoPloDataNew;
  careerOpportunities: CareerOpportunitiesDataNew;
  programComparison: ProgramComparisonDataNew;
  faqs?: ProgramFaqNew[];
}
