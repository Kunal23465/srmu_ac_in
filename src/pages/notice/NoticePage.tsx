import React from 'react'
import Notice from '../../components/notice/Notice'
import SeoHead from '../../components/seo/SeoHead'

const NoticePage: React.FC = () => {

  return (
    <>
      <SeoHead
        title="Notice | Shri Ramswaroop Memorial University, Lucknow"
        description="University notices play a pivotal role in disseminating critical information and updates to the student body, faculty, and staff."
        pathname="/notice"
      />
      <Notice />
    </>
  )
}

export default NoticePage
