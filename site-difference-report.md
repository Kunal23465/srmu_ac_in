# Live Site Difference Report

Date: 2026-03-21

Compared:
- Old site: `https://srmu.ac.in`
- New site: `http://10.8.20.38:3031`

## Executive Summary

At the sitemap level, the new site now fully covers the old site.

- Old sitemap URLs: `425`
- New sitemap URLs: `482`
- Exact overlap: `425`
- Old URLs missing on new: `0`
- Extra URLs on new: `57`

The main remaining differences are not route-loss problems. They are:

1. the new sitemap contains `57` extra URLs that did not exist on the old site
2. `/all-testimonial` currently returns `500` on the new site while the old site returns `200`
3. the homepage metadata is slightly different on the new site

## Route Coverage

The new site now covers all old sitemap paths.

- Old sitemap fetch: `200`
- New sitemap fetch: `200`
- Shared paths: `425/425`

This means the cutover risk is no longer about missing old routes. The remaining route-related work is deciding whether the extra sitemap URLs should be indexed.

## Extra URLs On The New Site

The `57` extra URLs break down as:

- Top-level paths: `23`
- Blog detail pages: `20`
- Two-segment paths: `12`
- News detail pages: `1`
- Program detail pages: `1`

Representative extra URLs:

- `/after-class-12th/allied-health-sciences`
- `/after-class-12th/nutrition-dietetics`
- `/after-graduation/natural-sciences`
- `/after-post-graduation/ph-d1`
- `/agriculture`
- `/artificial-intelligence`
- `/artificial-intelligence/industry-honors1`
- `/artificial-intelligence/postgraduate`
- `/artificial-intelligence/undergraduate`
- `/arts-science`
- `/blog/a-student-s-guide-to-building-a-career-with-a-bca-degree1`
- `/blog/advance-your-career-with-srmu-s-l-t-integrated-mba-in-business-analytics`
- `/blog/benefits-of-pursuing-a-bba-degree`
- `/blog/best-biotechnology-colleges-and-universities-in-lucknow-top-options-for-2026-admissions`
- `/blog/build-a-future-in-business-finance-with-a-b-com-degree`
- `/blog/build-a-strong-foundation-in-commerce-with-srmu-s-l-t-integrated-b-com-hons`
- `/blog/career-opportunities-after-b-tech-in-computer-science`
- `/blog/career-opportunities-for-mba-business-analytics-graduatescareer-opportunities-for-mba-business-analytics-graduates`

The biggest cleanup target is the blog set. Several of those slugs look duplicated, renamed, or malformed.

## Page-Level Differences

Sampled core routes were checked live on both hosts.

Routes that matched cleanly on status and metadata:

- `/about-us`
- `/admission-overview`
- `/after-class-12th`
- `/program-finder`
- `/blogs`
- `/events`
- `/institutes-info`
- `/contact-us`

## Notable Differences

### 1. `/all-testimonial`

- Old site: `200`
- New site: `500`

This is the strongest live functional difference found in the sampled route set.

### 2. Homepage metadata

The homepage still differs slightly between old and new:

- Old description:
  `Shri Ramswaroop Memorial University is located in Lucknow-Deva Road, Barabanki, Uttar Pradesh, India. SRMU takes pride in its excellent faculty hailing from leading central universities and premier institutes like IIT(s) and NIT(s) etc.`
- New description:
  `SRMU, one of the best university in Lucknow, known for expert faculty, advanced learning, and excellent career opportunities.`

Homepage canonical also differs slightly in formatting:

- Old: `https://srmu.ac.in`
- New: `https://srmu.ac.in/`

This is minor, but if strict parity is the goal, the homepage meta description should be aligned.

## Assessment

The new site is now materially aligned with the old site for route coverage. The remaining differences are:

1. fix the live `500` on `/all-testimonial`
2. clean or justify the `57` extra sitemap URLs
3. align homepage metadata if exact parity is required

At this point, the migration gap is narrow and specific rather than structural.
