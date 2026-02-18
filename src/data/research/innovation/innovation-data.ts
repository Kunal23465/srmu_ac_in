import { customeOverViewType } from "../../../types/home-data-type";
import project1 from "../../../assets/images/projects/project1.jpg";
import project2 from "../../../assets/images/projects/project2.jpg";
import project3 from "../../../assets/images/projects/project3.jpg";
import project4 from "../../../assets/images/projects/project4.jpg";
import project5 from "../../../assets/images/projects/project5.jpg";
import project6 from "../../../assets/images/projects/project6.jpg";

export const InnovationOverviewData: customeOverViewType = {
  heading: "Innovation",
  content:
    "Rooted in a culture of originality and forward-thinking, the university places a premium on creative exploration and novel solutions. SRMU fosters an environment where students and faculty are empowered to ideate, experiment, and bring transformative ideas to fruition.The commitment to innovation extends beyond traditional boundaries, encouraging interdisciplinary collaborations that spark inventive breakthroughs.",
};

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  fullDescription?: string;
}

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Quadcopter Drones",
    image: project1,
    description:
      "Unmanned Aerial Vehicle (UAV), or commonly known as drone, is a type of aircraft without a human pilot on board, as the name suggested, but controlled autonomously by computers and/or taking commands from remote stations. The UAVs are perfect candidates for tasks that are tedious or dangerous for human, for example, patrolling along boarder lines, wild fire control, aerial surveillance and etc. The applications of UAV, as described above, generally require long flight time and reliable power supply. However, current UAV designs utilizing traditional battery or fuel cells usually struggles to meet such requirement. This project aims to provide an innovative solution to this problem by introducing the current popular photovoltaic system into the UAV power system design. It focuses on the electrical system design and the product will be a platform for future development on solar powered UAVs. The UAV has a vast variety of configurations. The type of UAV chosen for this project is quadrotor helicopter, or called quadcopter, for its benefit as being easy to configure and having space for solar panel placement A working power management system is designed, fabricated and tested in this project. Such power management system is able to prolong the flight time of quadcopter, as opposed to that with only battery on board.",
    fullDescription:
      "Unmanned Aerial Vehicle (UAV), or commonly known as drone, is a type of aircraft without a human pilot on board, as the name suggested, but controlled autonomously by computers and/or taking commands from remote stations. The UAVs are perfect candidates for tasks that are tedious or dangerous for human, for example, patrolling along boarder lines, wild fire control, aerial surveillance and etc. The applications of UAV, as described above, generally require long flight time and reliable power supply. However, current UAV designs utilizing traditional battery or fuel cells usually struggles to meet such requirement. This project aims to provide an innovative solution to this problem by introducing the current popular photovoltaic system into the UAV power system design. It focuses on the electrical system design and the product will be a platform for future development on solar powered UAVs. The UAV has a vast variety of configurations. The type of UAV chosen for this project is quadrotor helicopter, or called quadcopter, for its benefit as being easy to configure and having space for solar panel placement A working power management system is designed, fabricated and tested in this project. Such power management system is able to prolong the flight time of quadcopter, as opposed to that with only battery on board.",
  },
  {
    id: 2,
    title: "Bidirectional Rotation of Single Phase Induction Motor without Run Capacitor",
    image: project2,
    description:
      "The single phase induction motor is basically a self starting using a run capacitor. All the motors require these starting capacitors without this the induction motor does not start. So in absence of this starting capacitor the motor has to be started and stopped manually. If the start capacitor selected for a specific induction motor is not exact as designed for the motor it may lead to un uniform magnetic field in the motor windings..",

    fullDescription:
      "The single phase induction motor is basically a self starting using a run capacitor. All the motors require these starting capacitors without this the induction motor does not start. So in absence of this starting capacitor the motor has to be started and stopped manually. If the start capacitor selected for a specific induction motor is not exact as designed for the motor it may lead to un uniform magnetic field in the motor windings..",
  },
  {
    id: 3,
    title: "Waste Composting Machine",
    image: project3,
    description:
      "Waste management has become complex zone, legally, technically and commercially. In India initiatives exists for aerobically composting of municipal organic waste, however many plants are not operating due to lack of advance technology. Instead of letting waste just fill up landfills, innovative technologies can convert organic waste into compost. This mission can resolve the sanitation problems by enhancing the waste management techniques.",
    fullDescription:
      "Waste management has become complex zone, legally, technically and commercially. In India initiatives exists for aerobically composting of municipal organic waste, however many plants are not operating due to lack of advance technology. Instead of letting waste just fill up landfills, innovative technologies can convert organic waste into compost. This mission can resolve the sanitation problems by enhancing the waste management techniques.",
  },
  {
    id: 4,
    title: "Solar Lawn Mower",
    image: project4,
    description:
      "Solar Lawn mowers are used for cutting the grass and operates with different types of fuels such as petrol, diesel and electricity. These types of mowers are not affordable for all users because of their operating cost, In addition to this they pollute the environment. Making a process of grass cutting easier over the years, researchers have suggested modification to improve speed, efficiency of moving machine. This mower is designed to save the energy consumed by the fossil fuels and to save the environment from pollution. Solar powered lawn mower is an improvement on cordless electric lawn mower. It uses only energy from the sun and does not require any external power source that can operate in areas not covered by the electricity.",
    fullDescription:
      "Solar Lawn mowers are used for cutting the grass and operates with different types of fuels such as petrol, diesel and electricity. These types of mowers are not affordable for all users because of their operating cost, In addition to this they pollute the environment. Making a process of grass cutting easier over the years, researchers have suggested modification to improve speed, efficiency of moving machine. This mower is designed to save the energy consumed by the fossil fuels and to save the environment from pollution. Solar powered lawn mower is an improvement on cordless electric lawn mower. It uses only energy from the sun and does not require any external power source that can operate in areas not covered by the electricity.",
  },
  {
    id: 5,
    title: "Solar Powered Vehicle",
    image: project5,
    description:
      "The use of fuel oil on the vehicles produces exhaust gases that potentially pollute the environment.. The solar vehicle is a step in saving these non renewable sources of energy. The basic principle of solar car is to use energy that is stored in a battery during and after charging it from a solar panel. The charged batteries are used to drive the motor which serves here as an engine and moves the vehicle in reverse or forward direction. Students team at SRMU have designed and developed a solar powered vehicle enhancing the kilometers run by continuous replenishment of charge while the vehicle is running, also improves the battery life by continuous controlling the charging current and supplying only when needed, thus preventing over charging which reduces battery life. Developed innovative maximum power point tracker controls the charging of the batteries from the PV panels. This maximizes the charging efficiency of the battery and enhances the kilometer run.",
    fullDescription:
      "The use of fuel oil on the vehicles produces exhaust gases that potentially pollute the environment.. The solar vehicle is a step in saving these non renewable sources of energy. The basic principle of solar car is to use energy that is stored in a battery during and after charging it from a solar panel. The charged batteries are used to drive the motor which serves here as an engine and moves the vehicle in reverse or forward direction. Students team at SRMU have designed and developed a solar powered vehicle enhancing the kilometers run by continuous replenishment of charge while the vehicle is running, also improves the battery life by continuous controlling the charging current and supplying only when needed, thus preventing over charging which reduces battery life. Developed innovative maximum power point tracker controls the charging of the batteries from the PV panels. This maximizes the charging efficiency of the battery and enhances the kilometer run.",
  },
  {
    id: 6,
    title: "Hybrid Power Generation System",
    image: project6,
    description:
      "Students, Faculty of Electrical Engineering have designed a working model on grid integration of renewable energy resources of Solar, Wind, Hydro & Compressed air energy system to reduce dependence on fossil fuels. The design technology developed will ensure safe and reliable operation of the future electricity generation systems based on renewable energy sources. Main objective of the project is to demonstrate and encourage integrated power generation technology thereby contributing to the reduction of global green house gas emissions and improve reliability of such systems in future.",
    fullDescription:
      "Students, Faculty of Electrical Engineering have designed a working model on grid integration of renewable energy resources of Solar, Wind, Hydro & Compressed air energy system to reduce dependence on fossil fuels. The design technology developed will ensure safe and reliable operation of the future electricity generation systems based on renewable energy sources. Main objective of the project is to demonstrate and encourage integrated power generation technology thereby contributing to the reduction of global green house gas emissions and improve reliability of such systems in future.",
  },
];
