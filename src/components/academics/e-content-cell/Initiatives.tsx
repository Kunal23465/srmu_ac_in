import { Link } from "react-router-dom"

const Initiatives = () => {
  return (
    <div className="py-4 md:py-7 lg:py-7">
        <h2 className="font22 fw600 mb-4 color_light_blue">
           <strong>Initiatives</strong>
        </h2>
        <div className="font18 fw500 theme_color_yellow"> 
            <Link to="/academics/swayam-nptel-local-chapter">SRMU SWAYAM NPTEL Local Chapter</Link>
        </div>
        <div className="font18 fw500 theme_color_yellow">
            <Link to="/academics/iirs-isro">
                IIRS&nbsp;- ISRO&nbsp;Outreach Program
            </Link>
        </div>
    </div>
  )
}

export default Initiatives