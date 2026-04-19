import { Helmet } from "react-helmet-async";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_SOCIAL_IMAGE,
  buildCanonicalUrl,
  normalizeSeoTitle,
  normalizePath,
  toAbsoluteUrl,
} from "../../utils/seo";

type JsonLd = Record<string, unknown> | null | undefined;

interface SeoHeadProps {
  title: string;
  description?: string;
  pathname?: string;
  type?: string;
  image?: string;
  noindex?: boolean;
  jsonLd?: JsonLd;
}

const SeoHead = ({
  title,
  description = DEFAULT_DESCRIPTION,
  pathname = "/",
  type = "website",
  image = DEFAULT_SOCIAL_IMAGE,
  noindex = false,
  jsonLd,
}: SeoHeadProps) => {
  const normalizedTitle = normalizeSeoTitle(title);
  const normalizedPath = normalizePath(pathname);
  const canonicalUrl = buildCanonicalUrl(normalizedPath);
  const socialImage = toAbsoluteUrl(image) || DEFAULT_SOCIAL_IMAGE;
  const robots = noindex ? "noindex, nofollow" : "index, follow";
// console.log("title",title)
  return (
    <Helmet prioritizeSeoTags>
      <title>{normalizedTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:site_name" content="Shri Ramswaroop Memorial University" />
      <meta property="og:title" content={normalizedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={socialImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={normalizedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialImage} />
      {jsonLd ? <script type="application/ld+json">{JSON.stringify(jsonLd)}</script> : null}
    </Helmet>
  );
};

export default SeoHead;
