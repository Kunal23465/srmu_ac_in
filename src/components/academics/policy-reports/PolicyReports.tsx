import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";
import { policyfistCycle, policyfourthCycle, PolicyReportOverviewData, policysecondCycle, policythirdCycle } from "../../../data/academics/policy-reports/policy-reports-data";
import Classes from "../../../utils/styles/Global.module.css";
import CustomTable from "../../../utils/custom/CustomTable";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import { CustomTopFooterData1 } from "../../../data/about/leadership-and-governance/leadership-and-governance-data";

const PolicyReports = () => {
  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={PolicyReportOverviewData} />
        <CustomTable columnOneHeader="Examination" columnTwoHeader="Downloads" data={policyfistCycle} />

        <CustomTable columnOneHeader="Admission" columnTwoHeader="Downloads" data={policysecondCycle} />

        <CustomTable columnOneHeader="Placement" columnTwoHeader="Downloads" data={policythirdCycle} />

        <CustomTable columnOneHeader="Placement" columnTwoHeader="Downloads" data={policyfourthCycle} />
      </div>
      <CustomTopFooter data={CustomTopFooterData1} />
    </div>
  );
};

export default PolicyReports;
