import { FC } from 'react'
import TeachingLearning from '../../../components/academics/teaching-learning-process/TeachingLearning'
import { Helmet } from 'react-helmet-async'

const TeachingLearningProcessPage: FC = () => {
    return (
        <div>
            <Helmet>
                <title>Teaching & Learning Process - Academic Excellence at SRMU</title>
                <meta name="description" content="Discover SRMU's teaching and learning process focused on practical education, academic excellence and student development." />
            </Helmet>
            <TeachingLearning />
        </div>
    )
}

export default TeachingLearningProcessPage