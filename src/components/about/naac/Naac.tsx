import { FC } from "react"
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection"
import { firstCycleData, NAACOverviewData, secondCycleData } from "../../../data/about/naac/naac-data"
import Classes from "../../../utils/styles/Global.module.css";
import CustomTable from "../../../utils/custom/CustomTable";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { CustomTopFooterData1 } from "../../../data/about/leadership-and-governance/leadership-and-governance-data";

const Naac: FC = () => {
    return (
        <>
            <div className={`${Classes["container"]}`}>
                <CustomOverviewSection data={NAACOverviewData} />


                <h1 className="text-[28px] lg:text-[3.125rem] fw500 mt-14 mb-5 text-[#023047] lg:mt-20 ">NAAC Reports</h1>
                <CustomTable
                    columnOneHeader="First Cycle"
                    columnTwoHeader="Downloads"
                    data={firstCycleData}
                />
                <h1 className="text-[28px] lg:text-[3.125rem] fw500 mt-14 mb-5 text-[#023047] lg:mt-20">AQAR</h1>
                <CustomTable
                    columnOneHeader="Annual Reports"
                    columnTwoHeader="Downloads"
                    data={secondCycleData}
                />
            </div>
                  <CustomTopFooter data={CustomTopFooterData1} />

        </>

    )
}

export default Naac