import { FC } from "react"
import AlumniFeedback from "../../components/placement/alumni-feedback/AlumniFeedback"
import SeoHead from "../../components/seo/SeoHead"

const AlumniFeedbackPage:FC = () => {
  return (
    <div>
      <SeoHead
        title="Alumni Feedback | Shri Ramswaroop Memorial University, Lucknow"
        description="The contribution of a University towards nation building can be judged through the success stories of its alumni. Alumni are the backbone of any academic organization and support the University's image building."
        pathname="/alumni-feedback"
      />
        <AlumniFeedback/>
    </div>
  )
}

export default AlumniFeedbackPage
