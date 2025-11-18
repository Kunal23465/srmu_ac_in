import CustomOverviewSection from '../../../utils/custom/CustomOverviewSection'
import { ConvocationOverviewData } from '../../../data/campus-life/convocation/convocation-data'
import Classes from "../../../utils/styles/Global.module.css";
import MidImageSection from './MidImageSection';
import ConvocationSection from './ConvocationSection';
import CustomTopFooter from '../../../utils/custom/CustomTopFooter';
import { feeStructureCustomTopFooter } from '../../../data/admissions/fee-structure/fee-structue-data';


const Convocation = () => {
  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={ConvocationOverviewData} />
        <MidImageSection />
        <ConvocationSection/>
      </div>
       <CustomTopFooter data={feeStructureCustomTopFooter} />
    </div>
  )
}

export default Convocation