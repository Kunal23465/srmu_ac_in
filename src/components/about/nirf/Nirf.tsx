import { FC } from "react"
import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import { fifthCycleData, fourthCycleData, NIRFOverviewData, thirdCycleData } from "../../../data/about/nirf/nirf-data";
import CustomTable from "../../../utils/custom/CustomTable";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { CustomTopFooterData1 } from "../../../data/about/leadership-and-governance/leadership-and-governance-data";


const Nirf: FC = () => {
  return (
    <>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={NIRFOverviewData} />
       <CustomTable
                    columnOneHeader="First Cycle"
                    columnTwoHeader="Downloads"
                    data={thirdCycleData}
                />

                <CustomTable
                    columnOneHeader="First Cycle"
                    columnTwoHeader="Downloads"
                    data={fourthCycleData}
                />

                <CustomTable
                    columnOneHeader="First Cycle"
                    columnTwoHeader="Downloads"
                    data={fifthCycleData}
                />
      </div>
            <CustomTopFooter data={CustomTopFooterData1} />

    </>
  )
}

export default Nirf