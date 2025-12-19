import { uiReducer } from "../ui/ui-slice";
import programFinderReducer from "../program-finder/programFinder-slice";
import { programTypeReducer } from "../program-finder/program-type/programType-slice";
import { disciplineSliceReducer } from "../program-finder/discipline/discipline-slice";
import { noticeSliceReducer } from "../notice/noticeSlice";
import { programMenuReducer } from "../header/programMenuSlice";
import { programFeesReducer } from "../program-finder/program-fees/programFeesSlice";
const allReducer = {
  ui: uiReducer,
  getProgramFinder: programFinderReducer,
  getProgramType: programTypeReducer,
  getDiscipline: disciplineSliceReducer,
  getNotice: noticeSliceReducer,
  programMenu: programMenuReducer,
  programFees: programFeesReducer,
};
export default allReducer;
