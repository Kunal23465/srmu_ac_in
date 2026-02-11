import { uiReducer } from "../ui/ui-slice";
import programFinderReducer from "../program-finder/programFinder-slice";
import { programTypeReducer } from "../program-finder/program-type/programType-slice";
import { disciplineSliceReducer } from "../program-finder/discipline/discipline-slice";
import { noticeSliceReducer } from "../notice/noticeSlice";
import { programMenuReducer } from "../header/programMenuSlice";
import { programFeesReducer } from "../program-finder/program-fees/programFeesSlice";
import { programFlagSliceReducer } from "../program-finder/program-flag/programFlag-slice";
import { whySrmuSectionSliceReducer } from "../program-finder/why-srmu/whySrmuSection-Slice";
import { getCounterSliceReducer } from "../program-finder/counter/getCounter-Slice";
import { blogsSliceReducer } from "../blogs/blogsSlice";
import { programHeighLightSliceReducer } from "../program-finder/program-heighlight/programHeighlightSlice";
import { getInsituteInfoSliceReducer } from "../insitute-info/getInsitiuteInfo-slice";
import { getAllDepartmentByIdSliceReducer } from "../department/get-all-department-by-id/getAllDepartmentById-slice";
import { getDepartmentByIdSliceReducer } from "../department/department-details/getDepartmentDetailsById-slice";
import { careerFormReducer } from "../career-form/careerFormSlice";
import { bannerReducer } from "../home-banner/bannerSlice";
const allReducer = {
  ui: uiReducer,
  getProgramFinder: programFinderReducer,
  getProgramType: programTypeReducer,
  getDiscipline: disciplineSliceReducer,
  getNotice: noticeSliceReducer,
  programMenu: programMenuReducer,
  programFees: programFeesReducer,
  getProgramByFlag: programFlagSliceReducer,
  getWhySrmuSection: whySrmuSectionSliceReducer,
  getCounterById: getCounterSliceReducer,
  getAllBlogs: blogsSliceReducer,
  getDepartmentHeighlightById: programHeighLightSliceReducer,
  getInsituteInfo: getInsituteInfoSliceReducer,
  getAllDepartmentByInsituteId: getAllDepartmentByIdSliceReducer,
  getDepartmentById: getDepartmentByIdSliceReducer,
  careerForm: careerFormReducer,
  getbanner: bannerReducer,
};
export default allReducer;
