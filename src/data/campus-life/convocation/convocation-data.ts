import { customeOverViewType } from "../../../types/home-data-type";
import convoationceremony from "../../../assets/images/campus-life/convocation/convocation-ceremony.jpg"
import a1 from "../../../assets/images/campus-life/convocation/1.jpg"
import a2 from "../../../assets/images/campus-life/convocation/2.jpg"
import a3 from "../../../assets/images/campus-life/convocation/3.jpg"
import a4 from "../../../assets/images/campus-life/convocation/4.jpg"
import a5 from "../../../assets/images/campus-life/convocation/5.jpg"
import a6 from "../../../assets/images/campus-life/convocation/6.jpg"
import a7 from "../../../assets/images/campus-life/convocation/7.jpg"
import a8 from "../../../assets/images/campus-life/convocation/8.jpg"
import a9 from "../../../assets/images/campus-life/convocation/9.jpg"

export const ConvocationOverviewData: customeOverViewType = {
    heading: "Convocation",
    content: `University convocation is a significant and ceremonial event marking the culmination of years of academic 
    dedication and achievement for graduating students. This formal gathering brings together students, faculty, staff, 
    families, and distinguished guests to celebrate the successful completion of academic programs. 
    The convocation typically involves a solemn procession, the conferring of degrees, inspiring 
    speeches from notable figures or university leaders, and the presentation of awards to outstanding graduates. 
    It serves as a momentous rite of passage, symbolizing the transition from student life to the professional world. `,
};


export interface Convocation {
    title: string;
    routeKey: string;
    description: string;
    image: string;
    photos?: string[];
    extraDescription?: string;
}

export interface ConvocationData {
    title: string;
    description: string;
    cards: Convocation[];
}

export const convocationData: Record<string, ConvocationData> = {
    convocation: {
        title: "Convocation 2021",
        description: `Shri Ramswaroop Memorial University, Uttar Pradesh organized its 
        <b>First Convocation Ceremony on 11th October, 2021</b> at the university campus 
        to felicitate the passed-out students with degrees. A glimpse of Indian culture 
        reflected throughout the event as Gold and Silver medallists were invited for felicitation.`,

        cards: [
            {
                title: "Convocation 2021",
                routeKey: "convocation-2021",
                description: `<div>Shri Ramswaroop Memorial University, Uttar Pradesh organized its <b>First Convocation Ceremony on 11th October, 2021</b> in the university campus to felicitate the passed out students with degrees.<b>Glimpse of Indian Culture reflected in first Convocation of Shri Ramswaroop Memorial University</b>. For the session 2019-20 and 2020-21, total <b>2954 degrees were conferred</b> online to the Undergraduates, Postgraduates and Doctorate students. Ensuring Covid-19 protocols, the ceremony was a symbolic event where only Gold and Silver medallists were invited in campus for felicitation. </div>
<br/>
                    <div>The event started with an academic procession followed by lamp lighting ceremony by the chief guests Prof. V.N. Rajasekharan Pillai, former Chairman, UGC, Er. Pankaj Agarwal, Chancellor, Er. Pooja Agarwal, Pro-Chancellor, Prof. A.K. Singh Vice-Chancellor, Dr. Sudhir Kumar Mishra (BrahMos Aerospace CEO & MD) and Padma Shri Prahlad Singh Tipania (Kabir Folklore).</div>`,
                image: convoationceremony,
                photos: [a1, a2, a3, a4, a5, a6, a7, a8, a9

                ],
                extraDescription: `
                    <div>Vice Chancellor Prof. A.K. Singh presented the annual report and elaborated the achievements of the university. He said that SRMU is leading in the field of higher education, whether it is in teaching-learning process or in the field of research-consultancy. Chancellor Er. Pankaj Agarwal chaired the convocation ceremony. During his address he congratulated all the degree recipient and SRMU fraternity. He said that the first convocation is a proud moment for the university. “The aim of the university is to bestow the society with such gems which can become a source of new energy in the society and can lay the foundation of positive change. The university will incorporate New Education Policy-2020 from academic session 2021-22 which will raise the level of higher education in our country”, he added. </div>
<br/>
<div>Chief guest Prof. V.N. Rajasekharan Pillai in his convocation address congratulated the university on its first convocation. He paid tribute to Shri Ramswaroop Agarwal for his contribution in the field of education and social service. He said that education is to enhance quality of life in every aspect and SRMU is excellently performing in higher education sector imparting knowledge of international standards. He also mentioned that SRMU has significantly blended art and science by honouring to eminent personalities of respective fields.</div>
<br/>
<div>Dr. Sudhir Mishra, Director General (BrahMos), DRDO and CEO & Managing Director (BrahMos Aerospace) was awarded Doctorate of Science (Honoris Causa) in the field of missile technology. Padma Shri Prahlad Singh Tipanya was awarded Doctorate of Literature (Honoris Causa) for his contribution in the field of folk art. </div>
<br/>
<div>Six students were awarded Chancellor Medal and Pro-Chancellor Medal based on their performance in academics, sports, extra-curricular activities, co-curricular activities, contribution to governance and outreach. Saurabh Agarwal, Vidushi Pandey and Krishnam Rastogi were awarded with Chancellor’s Medal and Preeti Valecha, Namrata Verma and Samreen Khan were awarded with Pro-Chancellor’s Medal respectively. Seventy nine students were awarded gold medals, fifty four students were awarded silver medals whereas sixty eight doctorate scholars were awarded Ph.D. degree. 
</div>
<br/>
<div>The ceremony ended with National Anthem and tree plantation by the dignitaries of the University.</div>
                `
            }
        ]
    }
};
