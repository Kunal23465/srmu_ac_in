import man from "../../../assets/images/campus-life/outreach-activations/man.png"


const HolisticSection = () => {
    return (
        <div className="flex gap-10 h-full items-center justify-center">
            <div className='left-section w-[80%] '>
                <h2 className="font50 fw500 color_dark_blue leading-13.5">
                    Holistic Development of Students
                </h2>
                <br />
                <div className="text-justify">
                    <p>
                    The University’s extension activities intend to link the university with the community. Geographically surrounded by the villages of Barabanki District, Uttar Pradesh, the extension activities have been an integral part of SRMU since its inception.
                </p>
                <br />
                <p>
                    The need to improve the condition of the rural people calls for the extension activity. With this vision, SRMU has adopted five villages from its local neighborhood. Efforts have been made to bring about appropriate behavioral changes by imparting education and sensitize them towards the use of science and technology.
                </p>
                <br />
                <p>
                    With such extension and outreach programs, SRMU sensitizes its students to develop social values, widen their social responsibilities and knowledge towards community issues and challenges. Students are motivated to join NSS, NCC, 1090-Power Angel, Unnat Bharat Abhiyan (UBA) and Apni Pathshala. To spread awareness on health and hygiene the student volunteers of NSS and NCC participate in the Swachchta Pakhwada (cleanliness drive at the adopted villages) every year. Students work effortlessly towards sensitization of the villagers on issues of health, education, personal hygiene and cleanliness, etc. To promote the feeling of social service, the University in association with SGPGI and Dr. RML Hospital, Lucknow organizes Medical and Blood Donation Camps where every year around 100 students donate blood.
                </p>
                <br />
                <p>
                    With the active involvement of the NGOs, the university strives to promote awareness on HIV/AIDS, Health and Sanitation, Legal Literacy, Population Control, Women Empowerment and education. Students motivate the villagers to educate their children and encourage them to work with I Care India, NGO.
                </p>
                </div>
            </div>
            <div className='right-section'>
                <img src={man} className="h-full max-w-full" />
            </div>
        </div>
    )
}

export default HolisticSection