import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ProgramDetails from "../../../components/programs/program-details/ProgramDetails";

const ProgramDetailsPage = () => {
  // const [check, setCheck] = useState<string | any>("")
  // const location = useLocation()

  // // const { programId } = useSelector((state: RootState) => state.programId);

  // const getId: any = localStorage.getItem("programId");

  // console.log("location", location)

  // useEffect(() => {
  //   console.log("getId= ", getId)
  //   setCheck(getId)
  // }, [getId])

  // console.log("check= ", check)



  return <>
    {/* <p>hello</p> */}
    {/* <ProgramDetails programId={check}  /> */}
    <ProgramDetails />
  </>

};

export default ProgramDetailsPage;