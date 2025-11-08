import { FC } from "react"
import Classes from "../../../utils/styles/Global.module.css";
import { academicCalendarFirstCycle, academicCalendarSecondCycle, AcademicCalendasOverviewData } from "../../../data/academics/academic-calendars/academic-calendars-data";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import CustomTable from "../../../utils/custom/CustomTable";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { CustomTopFooterData1 } from "../../../data/about/leadership-and-governance/leadership-and-governance-data";


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


        <CustomTable
          columnOneHeader="List Of Holidays"
          columnTwoHeader="Downloads"
          data={academicCalendarSecondCycle}
        />
      </div>

      <CustomTopFooter data={CustomTopFooterData1} />

    </>
  )
}

export default AcademicCalendars