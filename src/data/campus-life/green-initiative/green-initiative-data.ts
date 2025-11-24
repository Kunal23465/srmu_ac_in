import { customeOverViewType } from "../../../types/home-data-type";

import card1 from "../../../assets/images/campus-life/green-initiative/biogas--09022411181310.jpg";
import card2 from "../../../assets/images/campus-life/green-initiative/solar-power-09022411214268.jpg";
import card3 from "../../../assets/images/campus-life/green-initiative/rain-water-harvesting-0902241156395.jpg";
import card4 from "../../../assets/images/campus-life/green-initiative/energy-parks-21122306500734.jpg";
import card5 from "../../../assets/images/campus-life//green-initiative/green-belts-21122306501870.jpg";
import card6 from "../../../assets/images/campus-life/green-initiative/green-composting-21122306502819.jpg";
import card7 from "../../../assets/images/campus-life/green-initiative/herbal-nursery-09022411484571 (1).jpg";
import card8 from "../../../assets/images/campus-life/green-initiative/greenhouse-farming-09022411325926.jpg";
import card9 from "../../../assets/images/campus-life/green-initiative/sensor-based-street-lights-21122306512933.jpg";
import card10 from "../../../assets/images/campus-life/green-initiative/plastic-free-campus-09022411512564.jpg";
import card11 from "../../../assets/images/campus-life/green-initiative/sewage-treatment-plant-stp--2112230651554.jpg";


export interface echocardType {
  title: string;
  image: string;
  description: string;
}
export const greenInitiativeOverviewData: customeOverViewType = {
  heading: "Green Initiative",
  content: `
At SRMU, our commitment to sustainability shines through our Green Initiatives. We strive to create a campus culture that embraces environmentally conscious practices, extending from classrooms to wider community spaces. 
Through strategic plans and collective efforts from staff, faculty, and students, we are dedicated to fostering responsible attitudes and habits, ensuring the effective and sustainable utilization of resources across the university. Join us in our journey towards a greener and more environmentally friendly future.`,
};

export const ecoData: echocardType[] = [
  {
    title: "Bio-gas Plant",
    image: card1,
    description:
      "The Kitchen solid waste is segregated into left over waste and vegetable segment waste. The University has commissioned a 500 kg capacity biogas plant for the management of such waste. The biogas produced from this waste is used for the purpose of cooking and the slurry is used for gardening.",
  },

  {
    title: "Solar Panels",
    image: card2,
    description:
      "SRMU has established a 237 KVA Solar Power System and has solar panels on the terrace of all of its academic buildings. The project has been executed by CIIE by effectively utilizing the roof space and meeting the energy requirements in a most effectual manner. With this, the university has lessened the burden on government electricity supply and has also reduced its expenditure on power.",
  },

  {
    title: "Rain Water Harvesting",
    image: card3,
    description:
      "Rain water obtained from all blocks and the collected water is diverted to deep pits created in the campus. This is then used primarily for recharging the ground water reserves. The entire project was set-up with an initial investment of more than 1 Cr. The entire project was executed under the supervision of CIIE with the sole purpose of water conservation.",
  },

  {
    title: "Energy Parks",
    image: card4,
    description:
      "SRMU believes in sustainable environmental development. “Penny Saved is Penny earned” keeping this policy in mind SRMU has established an Energy Park with items like solar lawn mower, e-rickshaw, solar cooker, solar water heater system etc. The Alumni fund is being utilised for the creation of Energy Park in the University Campus.",
  },

  {
    title: "Green Belts",
    image: card5,
    description:
      "SRMU has a green campus with lawns, well maintained gardens, sidewalks and green belts. University believes in establishing harmony between nature and culture and with that mission, it emphasises on environmental sustainability in its campus.",
  },

  {
    title: "Green Composting",
    image: card6,
    description:
      "The agricultural waste is generated in the form of crop residue or green weeds and leaves which is gainfully converted into compost. Pits for composting have been set-up where spray of culture developed by biosciences department is used for making the compost. This compost is further used in plant beds and agriculture lands as manure to further nurture them.",
  },

  {
    title: "Herbal Nursery",
    image: card7,
    description:
      "University has a well maintained herbal nursery established for the purpose of encouraging experiments on medicinal plants. Ayurveda is the way of life and its applications are based on the principles derived from the universal laws of nature. This initiative aims to make students understand the importance of medicinal and aromatic plants in our daily lives.",
  },

  {
    title: "Green House",
    image: card8,
    description:
      "At SRMU, Green House Facility has been set up with the purpose of promoting protective cultivation. It provides a controlled environment for plantation of off-season plants. It has been evolved to create favorable temperatures favoring production of crops all throughout the year as and when required.",
  },

  {
    title: "Sensor Based Street Lights",
    image: card9,
    description:
      "This project was initiated to design and execute a system for saving energy spent on street lights installed throughout the campus. The solution is energy efficient and cost effective. The system was implemented on the existing infrastructure, making it automatic and free from human intervention, helping in saving power in the era of energy crisis.",
  },

  {
    title: "Plastic Free Campus",
    image: card10,
    description:
      "The University has banned the use of plastic and promotes e-governance to reduce use of paper. Huge chunks of plastic waste have been eliminated, preventing toxic impact on life and environment. Students and staff are sensitized and encouraged to use bio-degradable materials. Gifts and office material produced by the university is primarily out of recycled paper.",
  },

  {
    title: "Sewage Treatment Plant (STP)",
    image: card11,
    description:
      "Liquid waste is categorized as sewage waste and laboratory, laundry and kitchen effluent waste. At present the liquid waste goes in the dedicated septic tanks constructed for each block. The University has established a Sewage Treatment Plant to treat this waste in future so that the treated water can be used for landscaping and flushing toilets.",
  },
];
