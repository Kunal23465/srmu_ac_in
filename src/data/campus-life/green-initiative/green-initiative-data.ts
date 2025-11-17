import { customeOverViewType } from "../../../types/home-data-type";
import biogas from "../../../assets/images/campus-life/green-initiatives/biogas--09022411181310.jpg"
import solar from "../../../assets/images/campus-life/green-initiatives/solar-power-09022411214268.jpg"
import rain from "../../../assets/images/campus-life/green-initiatives/rain-water-harvesting-0902241156395.jpg"
import energyparks from "../../../assets/images/campus-life/green-initiatives/energy-parks-21122306500734.jpg"
import greenbelts from "../../../assets/images/campus-life/green-initiatives/green-belts-21122306501870.jpg"
import greencomposting from "../../../assets/images/campus-life/green-initiatives/green-composting-21122306502819.jpg"
import herbal from "../../../assets/images/campus-life/green-initiatives/herbal-nursery-09022411484571.jpg"
import greenhouse from "../../../assets/images/campus-life/green-initiatives/greenhouse-farming-09022411325926.jpg"
import sensorbased from "../../../assets/images/campus-life/green-initiatives/sensor-based-street-lights-21122306512933.jpg"
import plasticfree from "../../../assets/images/campus-life/green-initiatives/plastic-free-campus-09022411512564.jpg"
import stp from "../../../assets/images/campus-life/green-initiatives/sewage-treatment-plant-stp--2112230651554.jpg"

export const GreenInitiativeOverviewData: customeOverViewType = {
    heading: "Green Initiative",
    content: `At SRMU, our commitment to sustainability shines through our Green Initiatives. We strive to create a campus culture that embraces environmentally conscious practices, extending from classrooms to wider community spaces. 
Through strategic plans and collective efforts from staff, faculty, and students, we are dedicated to fostering responsible attitudes and habits, ensuring the effective and sustainable utilization of resources across the university. Join us in our journey towards a greener and more environmentally friendly future.
`,
};




export interface Green {
  id: number;
  title: string;
  description: string;
  image: string;
}


export const greens: Green[] = [
  {
    id: 1,
    title: "Bio-gas Plant",
    description:
      "The Kitchen solid waste is segregated into left over waste and vegetable segment waste. The University has commissioned a 500 kg capacity biogas plant for the management of such waste. The biogas produced from this waste is used for the purpose of cooking and the slurry is used for gardening",
    image: biogas
  },
  {
    id: 2,
    title: "Solar Panels",
    description:
      "SRMU has established a 237 KVA Solar Power System and has solar panels on the terrace of all of its academic buildings. The project has been executed by CIIE by effectively utilizing the roof space and meeting the energy requirements in a most effectual manner. With this the university has lessened the burden on government electricity supply and has also reduced its expenditure on power.",
    image: solar
  },
  {
    id: 3,
    title: "Rain Water Harvesting",
    description:
      "Rain water obtained from all blocks and the collected water is diverted to deep pits created in the campus. This is then used primarily for recharging the ground water reserves. The entire project was set-up with an initial investment of more than 1 Cr. The entire project was executed under the supervision of CIIE with the sole purpose of water conservation.",
    image: rain
  },
  {
    id: 4,
    title: "Energy Parks",
    description:
      "SRMU believes in sustainable environmental development. “Penny Saved is Penny earned” keeping this policy in mind SRMU has established an Energy Park with items like solar lawn mover, e-rickshaw, solar cooker, solar water heater system etc. The Alumni fund is being utilised for the creation of Energy Park in the University Campus.",
    image: energyparks
  },
  {
    id:5,
    title: "Green Belts",
    description:
      "SRMU has a green campus with lawns, well maintained gardens, sidewalks and green belts. University believes in establishing harmony between nature and culture and with that mission, it emphasises on environmental sustainability in its campus.",
    image: greenbelts
  },
  {
    id: 6,
    title: "Green Composting",
    description:
      "The agricultural waste is generated in the form of crop residue or green weeds and leaves which is gainfully converted into compost. Pits for composting have been set-up where spray of culture developed by biosciences department is used for making the compost. This compost is further used in plant beds and agriculture lands as manure to further nurture them.",
    image: greencomposting
  },
  {
    id: 7,
    title: "Herbal Nursery",
    description:
      "University has a well maintained herbal nursery established for the purpose of encouraging experiments on medicinal plants. Ayurveda is the way of life and its applications are based on the principles derived from the universal laws of nature. This initiative aims to make students understand the importance of medicinal and aromatic plants in our daily lives.",
    image: herbal
  },
  {
    id: 8,
    title: "Green House",
    description:
      "At SRMU, Green House Facility has been set up with the purpose of promoting protective cultivation. It is providing a controlled environment for plantation of off-season plants. It has been evolved to create favorable temperatures favoring production of crops all throughout the year as and when required.",
    image: greenhouse
  },
  {
    id: 9,
    title: "Sensor Based Street Lights",
    description:
      "This project was initiated to design and execute a system for saving energy spent on street lights installed throughout the campus. The solution designed is not only energy efficient but is cost effective too. The system was implemented on the existing infrastructure making it automatic and free from human intervention. This initiative is helping us in saving power in the era of energy crisis.",
    image: sensorbased
  },
  {
    id: 10,
    title: "Plastic Free Campus",
    description:
      "The University has banned the use of plastic and promotes e-governance to reduce use of paper for its day to day functioning. Huge chunk of plastic waste could have been generated leading to toxic impact on biological life and environment. Students and staff members are sensitized towards the same and are encouraged to use bio-degradable material. Gift wraps, notebooks, notepads and other operational material procured by the university is of recycled paper primarily.",
    image: plasticfree
  },
  {
    id: 11,
    title: "Sewage Treatment Plant (STP)",
    description:
      "Liquid waste is categorized as Sewage waste and Laboratory, laundry and Kitchen effluent waste. At present the liquid waste goes in the dedicated septic tanks constructed for each block. The University has taken the initiative to establish Sewage Treatment Plant (STP) to treat this waste water in future so that the treated water can be used for landscaping and flushing the toilets.",
    image: stp
  }
];