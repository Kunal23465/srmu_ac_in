import React from "react";

import { Outlet, useLocation } from "react-router-dom";
import SeoHead from "../../components/seo/SeoHead";

import NewHome from "../../components/new-home/NewHome";


export const homePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    // ==========================================
    // Main University Schema + Local SEO / Map Schema
    // ==========================================
    {
      "@type": "CollegeOrUniversity",
      "@id": "https://srmu.ac.in/#university",
      "name": "Shri Ramswaroop Memorial University",
      "alternateName": "SRMU",
      "url": "https://srmu.ac.in/",
      "description":
        "Shri Ramswaroop Memorial University (SRMU) is a multidisciplinary university in Uttar Pradesh offering undergraduate, postgraduate, diploma and doctoral programs in Engineering, Management, Law, Agriculture, Pharmacy, Computer Applications, Journalism, Sciences and Humanities.",
      "keywords":
        "best university in lucknow, top university in lucknow, private university in uttar pradesh, srmu lucknow admissions",
      "telephone": "+91-9838904666",
      "email": "admissions@srmu.ac.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Lucknow-Deva Road",
        "addressLocality": "Barabanki",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "225003",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "26.9152",
        "longitude": "81.1691"
      },
      "hasMap":
        "https://maps.google.com/?q=Shri+Ramswaroop+Memorial+University",
      "sameAs": [
        "https://www.facebook.com/srmuofficial",
        "https://www.instagram.com/srmuofficial",
        "https://www.linkedin.com/school/shri-ramswaroop-memorial-university/",
        "https://www.youtube.com/@SRMUOfficial"
      ]
    },

    // ==========================================
    // Organization Schema
    // ==========================================
    {
      "@type": "Organization",
      "@id": "https://srmu.ac.in/#organization",
      "name": "Shri Ramswaroop Memorial University",
      "url": "https://srmu.ac.in/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://srmu.ac.in/wp-content/uploads/logo.png"
      }
    },

    // ==========================================
    // Website Schema
    // ==========================================
    {
      "@type": "WebSite",
      "@id": "https://srmu.ac.in/#website",
      "url": "https://srmu.ac.in/",
      "name": "SRMU",
      "publisher": {
        "@id": "https://srmu.ac.in/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://srmu.ac.in/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },

    // ==========================================
    // Breadcrumb Schema
    // ==========================================
    {
      "@type": "BreadcrumbList",
      "@id": "https://srmu.ac.in/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://srmu.ac.in/"
        }
      ]
    },

    // ==========================================
    // Programs Offered Schema
    // ==========================================
    {
      "@type": "ItemList",
      "@id": "https://srmu.ac.in/#programs",
      "name": "Programs Offered at SRMU",
      "itemListElement": [
        {
          "@type": "Course",
          "position": 1,
          "name": "B.Tech"
        },
        {
          "@type": "Course",
          "position": 2,
          "name": "MBA"
        },
        {
          "@type": "Course",
          "position": 3,
          "name": "BBA"
        },
        {
          "@type": "Course",
          "position": 4,
          "name": "BCA"
        },
        {
          "@type": "Course",
          "position": 5,
          "name": "LLB"
        },
        {
          "@type": "Course",
          "position": 6,
          "name": "B.Pharm"
        },
        {
          "@type": "Course",
          "position": 7,
          "name": "Agriculture"
        },
        {
          "@type": "Course",
          "position": 8,
          "name": "Journalism and Mass Communication"
        }
      ]
    },

    // ==========================================
    // Campus Tour Video Schema
    // ==========================================
    {
      "@type": "VideoObject",
      "@id": "https://srmu.ac.in/#video",
      "name": "Shri Ramswaroop Memorial University Campus Tour",
      "description":
        "Explore the campus, academic programs, infrastructure, placements, student life and opportunities at Shri Ramswaroop Memorial University.",
      "thumbnailUrl":
        "https://srmu.ac.in/wp-content/uploads/campus-tour-thumbnail.jpg",
      "uploadDate": "2026-01-01",
      "duration": "PT5M30S",
      "embedUrl": "https://www.youtube.com/embed/VIDEO_ID",
      "contentUrl": "https://www.youtube.com/watch?v=VIDEO_ID",
      "publisher": {
        "@id": "https://srmu.ac.in/#organization"
      }
    },

    // ==========================================
    // FAQ Schema
    // ==========================================
    {
      "@type": "FAQPage",
      "@id": "https://srmu.ac.in/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why choose SRMU for higher education?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "SRMU offers industry-oriented programs, experienced faculty, modern infrastructure, research opportunities, scholarships, internships and placement support across multiple disciplines."
          }
        },
        {
          "@type": "Question",
          "name": "Is SRMU approved by UGC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes, Shri Ramswaroop Memorial University is recognized by the University Grants Commission (UGC) and operates under the applicable provisions of the UGC Act."
          }
        },
        {
          "@type": "Question",
          "name": "What courses are offered at SRMU?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "SRMU offers undergraduate, postgraduate, diploma and doctoral programs in Engineering, Management, Computer Applications, Law, Agriculture, Pharmacy, Sciences, Journalism and other disciplines."
          }
        },
        {
          "@type": "Question",
          "name": "Does SRMU provide placement assistance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes, SRMU provides placement assistance through corporate partnerships, internships, skill development initiatives and campus recruitment drives."
          }
        },
        {
          "@type": "Question",
          "name": "Does SRMU offer scholarships?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes, SRMU offers scholarships based on academic performance, entrance examinations, CUET scores and other eligibility criteria."
          }
        },
        {
          "@type": "Question",
          "name": "How can students apply for admission at SRMU?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Students can apply online through the official admission portal and complete the application process by submitting the required documents."
          }
        }
      ]
    }
  ]
};

const HomePage: React.FC = () => {
  const pathname = useLocation().pathname
  return (
    <>
      <SeoHead
        title="Best Private University in Uttar Pradesh | Shri Ramswaroop Memorial University (SRMU)"
        description="Shri Ramswaroop Memorial University (SRMU), Lucknow-Dewa Road, Uttar Pradesh (U.P.), is one of India’s best private university that offers various undergraduate and postgraduate courses like B.Tech, BCA, BBA, B.Com, Law, MBA, M.Tech, Pharmacy, Biotechnology, Polytechnic, Agriculture and MCA."
        pathname={pathname}
        jsonLd={pathname === "/" ? homePageSchema : undefined}
      />

      {pathname === "/" ? <NewHome /> : <Outlet />}
    </>
  );
};

export default HomePage;    
