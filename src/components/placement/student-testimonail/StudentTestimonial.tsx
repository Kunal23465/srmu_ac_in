import React from "react";
import CustomTopFooter from "../../../utils/custom/CustomTopFooter";
import Classes from "../../../utils/styles/Global.module.css";
import { studentTestimonialOverviewData, StudentTestimonialTopFooterData } from "../../../data/placement/placementData";
import CustomOverviewSection from "../../../utils/custom/CustomOverviewSection";

const StudentTestimonial: React.FC = () => {
  return (
    <div>
      <div className={`${Classes["container"]}`}>
        <CustomOverviewSection data={studentTestimonialOverviewData} />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error, eos laudantium magnam quisquam cum adipisci dicta modi voluptatum sequi repellat. Dolores corrupti
        nam repellendus architecto unde sit, iusto vel doloremque hic adipisci, quaerat tempore eum voluptatibus doloribus. Totam minima repellendus nemo architecto porro nisi vero,
        beatae asperiores ducimus suscipit dolor voluptate neque magni, fugiat nulla quas impedit maxime omnis dolorum maiores, quaerat modi. Deserunt quidem ipsa accusantium
        reprehenderit commodi sed! At eius, aliquid perferendis vitae inventore consequuntur explicabo soluta laborum vero quod excepturi impedit veritatis suscipit nisi? Iure magni
        praesentium, dicta architecto ipsam amet corrupti dignissimos ipsum, esse quidem itaque illum nesciunt odio odit quae officia nobis maxime, hic labore nihil deserunt
        doloremque dolorem impedit? Praesentium enim est quia, illum ducimus officiis, ex itaque corporis delectus beatae repudiandae tenetur soluta, unde consequatur mollitia
        voluptates recusandae reprehenderit omnis expedita quaerat accusamus necessitatibus deleniti ad optio? Libero, quaerat similique modi soluta quam pariatur! Enim ducimus sint
        tenetur magnam aliquam, corporis suscipit nemo atque molestiae, ipsa consequatur minus qui labore distinctio mollitia aut incidunt doloribus eius expedita voluptatibus
        veritatis dolore! Quibusdam facilis consectetur, minima eius doloremque maxime ipsum nostrum reprehenderit! Perspiciatis unde dolore quo in ipsa nam et! Atque, eius dolore.
        Quae!
      </div>
      <CustomTopFooter data={StudentTestimonialTopFooterData} />
    </div>
  );
};

export default StudentTestimonial;
