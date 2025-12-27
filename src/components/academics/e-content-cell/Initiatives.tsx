import { Link } from "react-router-dom"

const Initiatives = () => {
  return (
    <div className="py-4 md:py-7 lg:py-7">
            <h2 className="lg:text-[22px] md:text-[20.625px] text-[19.25px] sm:text-[19.25px] fw500 mb-4 color_light_blue">
           Initiatives
        </h2>
        <div className="lg:text-[18px] text-[15.75px] md:text-[16.875px] sm:text-[15.75px] fw500 theme_color_yellow"> 
            <Link to="/academics/swayam-nptel-local-chapter">SRMU SWAYAM NPTEL Local Chapter</Link>
        </div>
        <div className="lg:text-[18px] text-[15.75px] md:text-[16.875px] sm:text-[15.75px] fw500 theme_color_yellow">
            <Link to="/academics/iirs-isro">
                IIRS&nbsp;- ISRO&nbsp;Outreach Program
            </Link>
        </div>
    </div>
  )
}

export default Initiatives