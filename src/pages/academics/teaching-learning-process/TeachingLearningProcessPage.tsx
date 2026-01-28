import { FC } from 'react'
import TeachingLearning from '../../../components/academics/teaching-learning-process/TeachingLearning'
import { Helmet } from 'react-helmet-async'

const TeachingLearningProcessPage : FC = () => {
    return (
        <div>
            <Helmet>
                <title>Teaching Learning Process  | Shri Ramswaroop Memorial University, Lucknow</title>
                <meta name="description" content="The Teaching–Learning process of SRMU is students centric. For holistic development various methods of problem solving/participative learning/ experiential learning are followed to ensure that students are active learners rather than passive listeners in teaching – learning process." />
            </Helmet>
            <TeachingLearning />
            </div>
    )
}

export default TeachingLearningProcessPage