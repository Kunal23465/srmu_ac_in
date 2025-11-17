import CustomOverviewSection from '../../../utils/custom/CustomOverviewSection'
import { ConvocationOverviewData } from '../../../data/campus-life/convocation/convocation-data'
import Classes from "../../../utils/styles/Global.module.css";
import MidImageSection from './MidImageSection';
import ConvocationSection from './ConvocationSection';


const Convocation = () => {
  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={ConvocationOverviewData} />
        <MidImageSection />
        <ConvocationSection/>
      </div>
    </div>
  )
}

export default Convocation