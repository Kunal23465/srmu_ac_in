import React from 'react'
import NewsLetter from '../../components/home/NewsLetter'
import SeoHead from '../../components/seo/SeoHead'

const NewsLetterPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="SRMU Newsletter | Latest Updates, News, and Events"
        description="Stay informed with Shri Ramswaroop Memorial University's (SRMU) newsletter. Get the latest updates on campus events, academic achievements, research highlights, and more."
        pathname="/news-letter"
      />
      <NewsLetter />
    </>

  )
}

export default NewsLetterPage
