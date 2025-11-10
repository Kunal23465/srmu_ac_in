import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from '../../../utils/custom/CustomOverviewSection';
import { admissionFaqOverviewData } from '../../../data/admissions/admission-faq/admission-faq-data';


const AdmissionFaq = () => {
  return (
      <div className={`${Classes["container"]}`}>
          <CustomOverviewSection data={admissionFaqOverviewData} />
      

      </div>
  )
}

export default AdmissionFaq