import { FC } from "react"
import AlumniFeedback from "../../components/placement/alumni-feedback/AlumniFeedback"
import { Helmet } from "react-helmet-async"

const AlumniFeedbackPage:FC = () => {
  return (
    <div>
      <Helmet>
        <title>Alumni Feedback | Shri Ramswaroop Memorial University, Lucknow</title>
        <meta name="description" content="The contribution of a University towards Nation building can be judged a-priori with the success stories of its Alumni. The Alumni are the backbone of any academic organization wherein they support in University’s image building and creating positive perception." />
      </Helmet>
        <AlumniFeedback/>
    </div>
  )
}

export default AlumniFeedbackPage