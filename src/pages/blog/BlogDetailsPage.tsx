import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // or "react-helmet"
import Classes from "../../utils/styles/Global.module.css";
import CustomTopFooter from "../../utils/custom/CustomTopFooter";
import { CustomTopFooterAbout } from "../../data/about/aboutusData";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { SITE_NAME, stripHtml, toAbsoluteUrl } from "../../utils/seo";
import { findBlogBySlug } from "../../utils/routeMatching";

const BlogDetailsPage: React.FC = () => {
  const location = useLocation();
  const { title, slug } = useParams();
  const { data: blogs } = useSelector((state: RootState) => state.getAllBlogs);

  const dataFromState = (location.state as any)?.data;
  const slugOrTitle = slug || title || "";

  const data =
    dataFromState ||
    findBlogBySlug(Array.isArray(blogs) ? blogs : [], slugOrTitle);

  if (!data) {
    return (
      <>
        <Helmet>
          <title>{`Blog Not Found | ${SITE_NAME}, Lucknow`}</title>
          <meta name="description" content="The requested SRMU blog article could not be found." />
          <meta name="robots" content="noindex" />
        </Helmet>
        <div className={`${Classes["container"]} py-16`}>
          <h1 className="text-2xl font-medium text-[#023047]">Blog not found</h1>
        </div>
      </>
    );
  }

  const blogDescription =
    stripHtml(data.metaDescription || data.description || data.title).slice(0, 160) ||
    `Read the latest SRMU blog: ${data.title}.`;

  // Parse seoConfig with proper cleaning
  let parsedSeoConfig = null;
  if (data.seoConfig) {
    try {
      let cleanedConfig = data.seoConfig;
      
      // If it's a string, clean it
      if (typeof cleanedConfig === 'string') {
        // Remove control characters and clean the string
        cleanedConfig = cleanedConfig
          .replace(/[\u0000-\u001F\u007F-\u009F]/g, '') // Remove control characters
          .trim();
        
        parsedSeoConfig = JSON.parse(cleanedConfig);
      } else {
        // Already an object
        parsedSeoConfig = cleanedConfig;
      }
    } catch (error) {
      console.error('Error parsing seoConfig:', error);
      console.log('Raw seoConfig:', data.seoConfig);
    }
  }

  // Default Article schema (fallback)
  const defaultArticleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    datePublished: data.postedOn,
    image: toAbsoluteUrl(data.imagePath),
    description: blogDescription,
    publisher: {
      "@type": "CollegeOrUniversity",
      name: SITE_NAME,
    },
  };

  // Use seoConfig schema if available, otherwise use default
  const jsonLdSchema = parsedSeoConfig || defaultArticleSchema;

  const absoluteUrl = `https://srmu.ac.in${location.pathname}`;
  const imageUrl = data.imagePath ? toAbsoluteUrl(data.imagePath) : '';

  return (
    <>
      <Helmet>
        {/* Title */}
        <title>{`${data.title} | ${SITE_NAME}, Lucknow`}</title>
        
        {/* Meta Description */}
        <meta name="description" content={blogDescription} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={absoluteUrl} />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={blogDescription} />
        <meta property="og:url" content={absoluteUrl} />
        {imageUrl && <meta property="og:image" content={imageUrl} />}
        <meta property="og:site_name" content={SITE_NAME} />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:description" content={blogDescription} />
        {imageUrl && <meta name="twitter:image" content={imageUrl} />}
        
        {/* Article Tags */}
        {data.postedOn && <meta property="article:published_time" content={data.postedOn} />}
        
        {/* JSON-LD Structured Data from seoConfig */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      <div className={`${Classes["container"]}`}>
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            {/* Title */}
            <h1 className="font32 fw500 text-[#023047] leading-9">{data.title}</h1>

            <div
              className="
                text-[15px] text-justify

                [&_table]:w-full 
                [&_table]:border 
                [&_table]:border-[#d9d9d9] 
                [&_table]:border-collapse 
                [&_table]:my-6

                [&_th]:border 
                [&_th]:border-[#d9d9d9] 
                [&_th]:bg-[#f5f5f5] 
                [&_th]:text-center 
                [&_th]:px-3 
                [&_th]:py-2 
                [&_th]:text-[14px] 
                [&_th]:font-semibold

                [&_td]:border 
                [&_td]:border-[#d9d9d9] 
                [&_td]:px-3 
                [&_td]:py-2 
                [&_td]:text-[14px] 
                [&_td]:align-top
              "
              dangerouslySetInnerHTML={{ __html: data.description }}
            />

          </div>
        </div>
      </div>
      <CustomTopFooter data={CustomTopFooterAbout} />
    </>
  );
};

export default BlogDetailsPage;