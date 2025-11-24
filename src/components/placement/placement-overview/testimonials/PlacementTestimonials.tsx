import { FC, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import './Testimonials.css'; 
import OurRecruiters from '../OurRecruiters';

interface Testimonial {
  text: string;
  author: string;
  title: string;
  image: string; 
}

interface TestimonialData {
  recruiters: Testimonial[];
  students: Testimonial[];
}

const testimonialData: TestimonialData = {
  recruiters: [
    {
      text: "It was a pleasure to have the students as a part of our foundation family . The team was full of energy , Knowledge ,and ideas. The Students, volunteers, and placement team members were very co-operative and we are glad that the event was very successful. We look forward to have a synergistic relationship in Future and hire many more to join us form your esteemed institution for other projects.",
      author: "Ms. Smily Gupta",
      title: "Team Leader at Integrated Resource Inc.",
      image: "/src/assets/images/placements/placement-overview/recruiters-testimonials.jpg"
    },
    {
      text: "SRMU Placement team has been very cooperative. Students and Faculties welcome new learning opportunities.The eagerness to learn and grow help us improve our service offering to the institution from an industry perspective too.",
      author: "Mr. Dheeraj Chhabra",
      title: "Co-founder & Director at Learning Routes",
      image: "/src/assets/images/placements/placement-overview/recruiters-testimonials.jpg"
    },
    {

      text: "Shri Ramswaroop group has been one of the most premier educational groups of UP. It speaks volume about the efforts Ramswaroop group management, Faculty and T&P put into bring the students to the level of excellence they have achieved. Students at Ramswaroop group are competent, passionate and goal oriented which is equivalent to the student quality of any premium group across India.",
      author: "Mr. Saurabh Singh",
      title: "Associate Manager at HCL Technologies",
      image: "/src/assets/images/placements/placement-overview/recruiters-testimonials.jpg"
    },
    {

      text: "Very Well Managed and coordinated. Communication & Other personality of the students is well groomed.",
      author: "Mr. Ankur Gahlawat",
      title: "HR at Torrent Power",
      image: "/src/assets/images/placements/placement-overview/recruiters-testimonials.jpg"
    },
    {
      text: "Great Initiatives & properly Coordinated. It was great platform to understand talent pool.",
      author: "Ms. Laveena Nihalani",
      title: "Consultant at Capgemini",
      image: "/src/assets/images/placements/placement-overview/recruiters-testimonials.jpg"
    },
    {
      text: "Professionalism, sincerity and passion to do something for their students beyond limits has been the major strength of Shri Ramswaroop Group.",
      author: "Ms. Sonal Arora",
      title: "Senior HR Manager at Accenture",
      image: "/src/assets/images/placements/placement-overview/recruiters-testimonials.jpg"
    }
  ],
  students: [
    {
      text: "Student Testimonial 1: My experience at the university was transformative. The faculty support and placement cell guidance helped me secure my dream job. I highly recommend it!",
      author: "Arjun Sharma",
      title: "Placed at Global Corp",
      image: "/src/assets/images/placements/placement-overview/recruiters-testimonials.jpg"
    },
    {
      text: "Student Testimonial 2: The curriculum is modern and industry-relevant. The hands-on projects prepared me perfectly for my career.",
      author: "Priya Singh",
      title: "Software Developer",
      image: "/src/assets/images/placements/placement-overview/students-testimonials.jpg"
    },
    {
      text: "Student Testimonial 3: The placement cell organized excellent preparatory workshops. Thanks to them, I felt confident and well-equipped for all the interviews.",
      author: "Vivek Kulkarni",
      title: "Marketing Analyst",
      image: "/src/assets/images/placements/placement-overview/recruiters-testimonials.jpg"
    }
  ]
};

type ActiveTab = 'recruiters' | 'students';


const PlacementTestimonials:FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('recruiters');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const currentTestimonials: Testimonial[] = testimonialData[activeTab];
  const maxIndex: number = currentTestimonials.length - 1;

  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    setCurrentIndex(0); 
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  return (
    <div className="testimonials-section">
      <div className="content-container">
        <h2 className="section-title">What Our People Say</h2>
        <p className="subtitle">
          Testimonials from student, staff, and alumni on their placement experience at SRMU.
        </p>

        <div className="flex items-center min-h-[450px] gap-[50px]">
          <div className="flex-1">
            <div className="flex justify-start mb-10 ">
              <button
                className={`tab-button ${activeTab === 'recruiters' ? 'active' : ''}`}
                onClick={() => handleTabChange('recruiters')}
              >
                RECRUITERS TESTIMONIALS
              </button>
              <button
                className={`tab-button ${activeTab === 'students' ? 'active' : ''}`}
                onClick={() => handleTabChange('students')}
              >
                STUDENT TESTIMONIALS
              </button>
            </div>

            <div className="slider-track-container" style={{ position: 'relative', overflow: 'hidden' }}>
              {currentTestimonials.map((testimonial: Testimonial, index: number) => (
                <div
                  key={index}
                  className="testimonial-slide min-h-[250px]"
                  style={{
                    display: index === currentIndex ? 'block' : 'none',
                  }}
                >
                  <div className="testimonial-text">
                    {testimonial.text}
                  </div>
                  <div className="testimonial-author-info mt-2 gap-3">
                    <img src={testimonial.image} alt={testimonial.author} className="author-image-small" />
                    <div className="author-details">
                      <p className="author-name">{testimonial.author + " |"}</p>
                      <p className="author-title">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex justify-end">
              <button className="arrow-button" onClick={handlePrev}><FaArrowLeft fill='gray' /></button>
              <button className="arrow-button" onClick={handleNext}><FaArrowRight fill='gray' /></button>
            </div>
          </div>
          
          <div> {activeTab === "recruiters" ?    <img 
              src={"/src/assets/images/placements/placement-overview/recruiters-testimonials.jpg"} 
              alt="Testimonial Subject" 
              className="large-profile-image" 
            /> :   <img 
              src={"/src/assets/images/placements/placement-overview/students-testimonials.jpg"} 
              alt="Testimonial Subject" 
              className="large-profile-image" 
            /> }
         
          </div>
        </div>
      </div>
      <OurRecruiters/>
    </div>
  );
};

export default PlacementTestimonials;