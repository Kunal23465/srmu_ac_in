import { FC } from 'react'
import AcademicCalendars from '../../../components/academics/acdemic-calendars/AcademicCalendars'
import { Helmet } from 'react-helmet-async'

const AcademicCalendarsPage: FC = () => {
  return (
    <div>
      <Helmet>
        <title>Academic Calendars | Shri Ramswaroop Memorial University, Lucknow</title>
        <meta name="description" content="The university follows an academic calendar to define academic operations, ensuring they are streamlined for students, faculty, and staff. A holiday list is also prepared in advance for stakeholders&#039; convenience in planning both professional and personal matters." />
      </Helmet>
      <AcademicCalendars />
    </div>
  )
}

export default AcademicCalendarsPage