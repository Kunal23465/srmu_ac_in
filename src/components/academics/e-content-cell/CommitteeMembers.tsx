import React from 'react'

const CommitteeMembers:React.FC = () => {
    return (
        <div className='mb-10 md:mb-20 py-4 md:py-7 lg:py-7'>
            <h2 className='font22 fw600 mb-4 color_light_blue'>
                <strong>Committee Members</strong>
            </h2>
            <ul className=" ml-5 marker:text-2xl font18">
                <li>Dr. Ritu Chandra- IQAC Chairperson</li>
                <li>Dr. Sonal Prasad, Assistant Professor, Institute of Biosciences & Technology- Coordinator, E-Content Development Cell</li>
                <li>Dr. Amit Kumar Singh, Assistant Professor, Faculty of Mechanical engineering</li>
                <li>Er. Rishabh Joshi, Assistant Professor, Faculty of Civil engineering</li>
                <li>Dr. Lalit Kumar Shukla, Assistant Professor, Faculty of Physical Sciences</li>
                <li>Dr. Vimlesh, Assistant Professor, Faculty of Mathematics</li>
                <li>Dr. Sandeepa Kaur Bhatani, Assistant Professor, Institute of Education & research</li>
                <li>Dr. Prashant Srivastava, Assistant Professor, Institute of Legal Studies</li>
                <li>Dr. Karnika Srivastava, Associate Professor, Institute of Management, Commerce & Economics</li>
                <li>Dr. Shikha Srivastava, Assistant Professor, Institute of Pharmacy</li>
                <li>Er. Rohit Singh, Assistant Professor, SRMU Polytechnic</li>
            </ul>

            <p>&nbsp;</p>
            <p className="font18">
                <strong>
                    For any query please contact
                </strong>
                <a href="mailto:e-contentdevelopmentcell@srmu.ac.in">e-contentdevelopmentcell@srmu.ac.in</a>
            </p>
        </div>
    )
}

export default CommitteeMembers