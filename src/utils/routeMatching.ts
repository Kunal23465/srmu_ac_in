import { committeeCards } from "../data/about/committee-and-cells/committee-and-cells-data";
import { convocationData } from "../data/campus-life/convocation/convocation-data";
import tedxData, { conferenceData, festData, festivalsData, type FestCard } from "../data/campus-life/events/events-data";
import { legacyBlogArticles, legacyNewsArticles } from "../data/legacy/legacyContent";
import { PublicationConferenceData } from "../data/research/publication/publication-data";

export const normalizeRouteSlug = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[()]/g, "")
    .replace(/&/g, "and")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

const allEventCards: FestCard[] = [
  ...Object.values(festData).flatMap((fest) => fest.cards),
  ...conferenceData.conferences,
  ...conferenceData.seminars,
  ...Object.values(festivalsData).flatMap((festival) => festival.cards),
  ...tedxData,
];

const allConvocationCards = Object.values(convocationData).flatMap((item) => item.cards);

export const findEventCardBySlug = (slug: string) => {
  const normalizedSlug = normalizeRouteSlug(slug);

  return allEventCards.find((card) => {
    const routeKeyMatch = normalizeRouteSlug(card.routeKey || "") === normalizedSlug;
    const titleMatch = normalizeRouteSlug(card.title || "") === normalizedSlug;

    return routeKeyMatch || titleMatch;
  });
};

export const findCommitteeCardBySlug = (slug: string) => {
  const normalizedSlug = normalizeRouteSlug(slug);

  return committeeCards.find((card) => {
    const routeKeyMatch = normalizeRouteSlug(card.routeKey || "") === normalizedSlug;
    const titleMatch = normalizeRouteSlug(card.title || "") === normalizedSlug;

    return routeKeyMatch || titleMatch;
  });
};

export const findConvocationCardBySlug = (slug: string) => {
  const normalizedSlug = normalizeRouteSlug(slug);

  return allConvocationCards.find((card) => {
    const routeKeyMatch = normalizeRouteSlug(card.routeKey || "") === normalizedSlug;
    const titleMatch = normalizeRouteSlug(card.title || "") === normalizedSlug;

    return routeKeyMatch || titleMatch;
  });
};

export const findConferenceBySlug = (slug: string) => {
  const conferenceSlugAliases: Record<string, string> = {
    "icmtce-20191": "icmtce-2019",
    "natconbio-2019": "natcoinbio-2019",
    "second-international-literary-conference": "second-international-li",
  };
  const normalizedSlug = normalizeRouteSlug(conferenceSlugAliases[slug] || slug);
  const legacyConferenceCards = [...conferenceData.conferences, ...conferenceData.seminars];

  return (
    legacyConferenceCards.find((conference) => {
      const routeKeyMatch = normalizeRouteSlug(conference.routeKey || "") === normalizedSlug;
      const titleMatch = normalizeRouteSlug(conference.title || "") === normalizedSlug;

      return routeKeyMatch || titleMatch;
    }) ||
    PublicationConferenceData.find((conference) => normalizeRouteSlug(conference.title || "") === normalizedSlug)
  );
};

export const findBlogBySlug = (blogs: any[], slug: string) => {
  const normalizeComparableBlogSlug = (value: string) =>
    normalizeRouteSlug(value)
      .replace(/\b(19|20)\d{2}\b/g, "")
      .replace(/\bb-tech\b/g, "btech")
      .replace(/\bb-sc\b/g, "bsc")
      .replace(/\bbmlt\b/g, "medical-laboratory-technology")
      .replace(/\bmlt\b/g, "medical-laboratory-technology")
      .replace(/\bott\b/g, "operation-theatre-technology")
      .replace(/\bnearby\b/g, "")
      .replace(/\band\b/g, "")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  const decodedSlug = decodeURIComponent(slug || "").trim().toLowerCase();
  const titleCandidate = decodedSlug.replace(/_/g, " ");
  const normalizedSlug = normalizeRouteSlug(decodedSlug);
  const comparableSlug = normalizeComparableBlogSlug(decodedSlug);

  return (
    blogs.find((item: any) => {
      const itemSlug = String(item?.slug || "").trim().toLowerCase();
      const itemTitle = String(item?.title || "").trim().toLowerCase();

      return (
        itemSlug === decodedSlug ||
        itemTitle === titleCandidate ||
        normalizeRouteSlug(itemTitle) === normalizedSlug ||
        normalizeComparableBlogSlug(itemSlug) === comparableSlug ||
        normalizeComparableBlogSlug(itemTitle) === comparableSlug
      );
    }) ||
    legacyBlogArticles.find((item) => {
      const itemSlug = String(item.slug || "").trim().toLowerCase();
      const itemTitle = String(item.title || "").trim().toLowerCase();

      return (
        itemSlug === decodedSlug ||
        itemTitle === titleCandidate ||
        normalizeRouteSlug(itemTitle) === normalizedSlug ||
        normalizeComparableBlogSlug(itemSlug) === comparableSlug ||
        normalizeComparableBlogSlug(itemTitle) === comparableSlug
      );
    })
  );
};

export const findNewsBySlug = (newsItems: any[], slug: string) => {
  const decodedSlug = decodeURIComponent(slug || "").trim().toLowerCase();
  const normalizedSlug = normalizeRouteSlug(decodedSlug);

  return (
    (Array.isArray(newsItems) ? newsItems : []).find((item: any) => {
      const title = String(item?.title || item?.name || "").trim().toLowerCase();

      return normalizeRouteSlug(title) === normalizedSlug;
    }) ||
    legacyNewsArticles.find((item) => normalizeRouteSlug(item.title || "") === normalizedSlug || item.slug === decodedSlug)
  );
};
