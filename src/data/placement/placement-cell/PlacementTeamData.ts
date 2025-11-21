import Gaurav from "../../../assets/images/placements/placement-cell/gaurav-saxena-01022402415625-11zon-06032411142663.jpg";
import AnjaliK from "../../../assets/images/placements/placement-cell/whatsapp-image-2025-06-23-at-16.07.44-23062504382623.jpeg";
import Deepak from "../../../assets/images/placements/placement-cell/img-20230822-wa0029-10012411353871.jpg";
import Santosh from "../../../assets/images/placements/placement-cell/whatsapp-image-2024-03-06-at-11.50.09-am-06032411512961.jpeg";
import Alok from "../../../assets/images/placements/placement-cell/screenshot-20231017-121219-10012412011487-11zon-06032411251377.jpg";
import Utkarsh from "../../../assets/images/placements/placement-cell/img-20240108-140639-10012410373110-11zon-06032411154966.jpg";
import Saurabh from "../../../assets/images/placements/placement-cell/whatsapp-image-2024-01-08-at-16.02.02-0e66940d-100-06032411163471.jpg";
import AnjaliS from "../../../assets/images/placements/placement-cell/img-20240108-154637-10012411091355-11zon-0603241122341.jpg";
import Ashish from "../../../assets/images/placements/placement-cell/cg1-10102302563828.jpg"
import Anubhav from "../../../assets/images/placements/placement-cell/cg3-10102302585566.jpg"
export interface PlacementTeamCard {
  id: number;
  img: string;
  name: string;
  position: string;
}

export const PlacementTeamCardData: PlacementTeamCard[] = [
  {
    id: 1,
    img: Gaurav,
    name: "Gaurav Saxena",
    position: "Manager (Training & Placement)"
  },
  {
    id: 2,
    img: AnjaliK,
    name: "Anjali Kumari",
    position:"Alumini Cordinator"
  },
  {
    id: 3,
    img: Deepak,
    name: "Deepak Kumar",
    position:"Placement Executive"
  },
  {
    id: 4,
    img: Santosh,
    name: "Santosh Mishra",
    position:"Officer"
  },
  {
    id: 5,
    img: Alok,
    name: "Alok Gupta",
    position:"Coordinator (Training & Placement)"
  }
]




export interface TrainingTeamCard {
  id: number;
  img: string;
  name: string;
  position: string;
}

export const TrainingTeamCardData: TrainingTeamCard[] = [
  {
    id: 1,
    img: Gaurav,
    name: "Gaurav Saxena",
    position: "Manager (Training & Placement"
  },
   {
    id: 2,
    img: Utkarsh,
    name: "Er. Utkarsh Srivastava",
    position:"Lecturer"
  },
  {
    id: 3,
    img: Saurabh,
    name: "Saurabh Yadav",
    position:"Lecturer"
  },
  {
    id: 4,
    img: AnjaliS,
    name: "Santosh Mishra",
    position:"Lecturer"
  },
  {
    id: 5,
    img: Alok,
    name: "Alok Gupta",
    position:"Coordinator (Training & Placement)"
  }
]



export interface CareerCounsellingCard {
  id: number;
  img: string;
  name: string;
}

export const CareerCounsellingCardData: CareerCounsellingCard[] = [
  {
    id: 1,
    img: Ashish,
    name: "Mr. ASHISH SINHA, TIME",
  },
  {
    id: 2,
    img: Anubhav,
    name: "Mr. ANUBHAV -IMS",
  },
]