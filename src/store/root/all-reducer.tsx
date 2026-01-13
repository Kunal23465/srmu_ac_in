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
};
export default allReducer;
