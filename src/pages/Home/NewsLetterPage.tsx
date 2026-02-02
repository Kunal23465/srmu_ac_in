import React from 'react'
import NewsLetter from '../../components/home/NewsLetter'
import { Helmet } from 'react-helmet-async'

const NewsLetterPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>SRMU Newsletter | Latest Updates, News, and Events</title>
        <meta name="description" content="Stay informed with Shri Ramswaroop Memorial University&#039;s (SRMU) newsletter. Get the latest updates on campus events, academic achievements, research highlights, and more." />
      </Helmet>
      <NewsLetter />
    </>

  )
}

export default NewsLetterPage