import { FC } from "react"
import Classes from "../../../utils/styles/Global.module.css";
import { academicCalendarFirstCycle, AcademicCalendasOverviewData } from "../../../data/academics/academic-calendars/academic-calendars-data";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import CustomTable from "../../../utils/custom/CustomTable";


const AcademicCalendars: FC = () => {
  return (
    <>
    <div className={`${Classes["container"]}`}>
    <CustomOverviewSection data={AcademicCalendasOverviewData} />

    <CustomTable
          columnOneHeader="Academic Calendar"
          columnTwoHeader="Downloads"
          data={academicCalendarFirstCycle}
        />
    </div>
    </>
  )
}

export default AcademicCalendars