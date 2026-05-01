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
import { careerReducer } from "../student-enquiry/career/careerSlice";
import { programReducer } from "../student-enquiry/program/programSlice";
import { stateReducer } from "../student-enquiry/state/stateSlice";
import { cityReducer } from "../student-enquiry/city/citySlice";
import { enquiryReducer } from "../student-enquiry/submit-enquiry/enquirySlice";
import { recruiterSliceReducer } from "../recruiter/recruiterSlice";
import { programIdReducer } from "../program-finder/program/programSlice";
import { whySrmuLogoSliceReducer } from "../why-srmu/whySrmuLogoSlice";
import { getHomeEventsDataSliceReducer } from "../home-events/getHomeEventsSlice";
import { getPlacementRecordTabDataSliceReducer } from "../placement/placement-record/placementRecordTabDataSlice";
import { getPlacementDriveTabDataSliceReducer } from "../placement/placement-drive/placementDriveTabDataSlice";
import { programTypeIntroByUrlSliceReducer } from "../program-type-intro/ProgramTypeIntroSlice";
import { submissionForEnquiryReducer } from "../submission/enquiry-submission-slice";
import { getAllCityByStateIdReducer } from "../api/get-allCity-byStateId-slice";
import { getAllStateReducer } from "../api/get-allState-slice";
import { getAllCareerReducer } from "../api/get-allCareer-slice";
import { getAllProgramByCareerIdReducer } from "../api/get-allprogram-byCareerId-slice";

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
  career: careerReducer,
  program: programReducer,
  state: stateReducer,
  city: cityReducer,
  enquiry: enquiryReducer,
  getRecruiter: recruiterSliceReducer,
  programId: programIdReducer,
  whySrmuLogoById: whySrmuLogoSliceReducer,
  getHomeEventsData: getHomeEventsDataSliceReducer,
  getPlacementRecordTabData: getPlacementRecordTabDataSliceReducer,
  getPlacementDriveTabData: getPlacementDriveTabDataSliceReducer,
  getProgramByIntro:programTypeIntroByUrlSliceReducer,
   createEnquiryForEnquiry: submissionForEnquiryReducer,
     getAllCityByStateId: getAllCityByStateIdReducer,
  getAllStateData: getAllStateReducer,
  getAllCareerData: getAllCareerReducer,
  getAllProgramByCareerIdData: getAllProgramByCareerIdReducer,
};
export default allReducer;
