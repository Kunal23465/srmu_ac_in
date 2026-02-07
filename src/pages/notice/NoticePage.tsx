import React from 'react'
import Notice from '../../components/notice/Notice'
import { Helmet } from 'react-helmet-async'

const NoticePage: React.FC = () => {

  return (
    <>
      <Helmet>
        <title>Notice | Shri Ramswaroop Memorial University, Lucknow</title>
        <meta name="description" content="University notices play a pivotal role in disseminating critical information and updates to the student body, faculty, and staff." />
      </Helmet>
      <Notice />
    </>
  )
}

export default NoticePage