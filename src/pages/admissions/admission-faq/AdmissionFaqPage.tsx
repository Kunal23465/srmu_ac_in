import React from 'react'
import AdmissionFaq from '../../../components/admissions/admission-faq/AdmissionFaq'
import SeoHead from '../../../components/seo/SeoHead'
import { SITE_NAME, stripHtml } from '../../../utils/seo'

const AdmissionFaqPage: React.FC = () => {
 const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which course is best after Class 12 for a high-salary career in Uttar Pradesh?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best course depends on your stream. B.Tech in Computer Science, BBA in Business Analytics, and specialized professional courses offer high salary potential in the current market."
        }
      },
      {
        "@type": "Question",
        "name": "What is B.Tech and who should pursue it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "B.Tech is a four-year undergraduate degree focusing on engineering, technology, and problem-solving. Students interested in innovation, mathematics, and software development should pursue it."
        }
      }
    ]
  };

  return (
    <>
      <SeoHead
        title={`Admission FAQs 2026: Get Answers to Your Queries | SRMU`}
        description="Have questions about SRMU admissions? Explore our FAQs for details on eligibility, application processes, and course options."
        pathname="/admission-faqs"
        jsonLd={faqSchema}
      />
      <AdmissionFaq />
    </>

  )
}

export default AdmissionFaqPage
