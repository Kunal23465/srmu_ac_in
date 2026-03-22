import { FC } from 'react'
import AcademicCalendars from '../../../components/academics/acdemic-calendars/AcademicCalendars'
import SeoHead from '../../../components/seo/SeoHead'

const AcademicCalendarsPage: FC = () => {
  return (
    <div>
      <SeoHead
        title="Academic Calendars | Shri Ramswaroop Memorial University, Lucknow"
        description="The university follows an academic calendar to define academic operations, ensuring they are streamlined for students, faculty, and staff."
        pathname="/academic-calendars"
      />
      <AcademicCalendars />
    </div>
  )
}

export default AcademicCalendarsPage
