import React from 'react'
import AdmissionFaq from '../../../components/admissions/admission-faq/AdmissionFaq'
import SeoHead from '../../../components/seo/SeoHead'
import { faqData } from '../../../data/admissions/admission-faq/admission-faq-data'
import { SITE_NAME, stripHtml } from '../../../utils/seo'

const AdmissionFaqPage: React.FC = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => {
      const tableText = item.tableData
        ? item.tableData.rows.map((row) => row.filter(Boolean).join(" - ")).join(" ")
        : "";
      const listText = item.listItems?.join(" ") || "";
      const answerText = stripHtml([item.content || "", listText, tableText].filter(Boolean).join(" "));

      return {
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answerText,
        },
      };
    }),
  };

  return (
    <>
      <SeoHead
        title={`Admission FAQs | ${SITE_NAME}, Lucknow`}
        description="Find answers to common SRMU admission questions, including eligibility, application process, scholarships, fee policies, and course-related guidance."
        pathname="/admission-faqs"
        jsonLd={faqSchema}
      />
      <AdmissionFaq />
    </>

  )
}

export default AdmissionFaqPage
