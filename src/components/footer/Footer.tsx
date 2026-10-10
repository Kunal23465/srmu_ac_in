import React, { useEffect, useState } from "react";
import logosrmcem from "../../assets/images/logo1.png";
import Classes from "../../utils/styles/Global.module.css";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import awards1 from "../../assets/images/award-footer1.png";
import awards2 from "../../assets/images/award-footer2.png";
import scanner from "../../assets/images/merchandise-scan.jpeg";
import fb from "../../assets/images/social-icons/fb.png";
import instagram from "../../assets/images/social-icons/instagram.png";
import linkdin from "../../assets/images/social-icons/linkdin.png";
import twitter from "../../assets/images/social-icons/twitter.png";
import youtube from "../../assets/images/social-icons/youtube.png";
export const footerData = {
  logo: { src: logosrmcem, alt: "SRMCEM Logo" },
  description:
    "Shri Ramswaroop Memorial College of Engineering & Management, Lucknow is one of the leading institutes of professional education in UP. SRMCEM is affiliated to Dr. A.P.J. Abdul Kalam Technical University and recognized by AICTE.",
  contact: {
    address: "Shri Ramswaroop Memorial University (SRMU), Lucknow - Deva Road, Barabanki, Uttar Pradesh",
    address2: "C-2/42, Vishesh Khand, Opposite Chote Lal Nursery, Gomtinagar, Lucknow, Uttar Pradesh",
    phone1: "+91-9838904666",
    tollfree: "18001026004",
    // phone2: "983-901-0407",
    email: "admissions@srmu.ac.in",
  },
  otherLinks: [
    {
      id: 0,
      title: "List of Holidays",
      path: "/list-holidays",
    },
    // {
    //   id: 1,
    //   title: "Downloads",
    //   path: "/download",
    // },

    //commented
    {
      id: 2,
      title: "Newsletters",
      path: "/news-letter",
    },
    {
      id: 3,
      title: "Careers",
      path: "/career/career-form",
    },
    {
      id: 4,
      title: "Grievance Redressal",
      path: "https://docs.google.com/forms/d/e/1FAIpQLSde8Ov2JDvB1vYeL-jrqNrlman0gLstQVEWEJ6DN34-EsYdCQ/viewform",
    },
    {
      id: 5,
      title: "Women Helpline - 9415115062",
      path: "tel:9415115062",
    },
  ],
  getEnrolled: [
    {
      id: 0,
      title: "How to Apply",
      path: "/how-to-apply",
    },
    {
      id: 1,
      title: "Program Finder",
      path: "/program-finder",
    },
    {
      id: 2,
      title: "Scholarships",
      path: "/scholarship-scheme",
    },
  ],

  socialMedia: [
    { platform: "facebook", link: "https://www.facebook.com/SRMUOFFICIAL/" },
    { platform: "twitter", link: "https://twitter.com/srmu_lucknow" },
    { platform: "instagram", link: "https://www.instagram.com/srmulucknow_official/" },
    { platform: "linkedin", link: "https://www.linkedin.com/school/shri-ramswaroop-memorial-university/" },
  ],

  getEvolved: [
    {
      id: 0,
      title: "Our Institutes",
      path: "/institutes-info",
    },
    {
      id: 1,
      title: "IQAC Developments",
      path: "/iqac-overview",
    },
    {
      id: 2,
      title: "Placements",
      path: "/placements",
    },
  ],
  getHelped: [
    {
      id: 0,
      title: "Student Corner",
      path: "/student-corner",
    },
    // {
    //   id: 1,
    //   title: "Result Portal",
    //   path: "https://results.srmu.ac.in/",
    // },
    {
      id: 2,
      title: "Grievance Redressal System",
      path: "/campus-life/grievance-redressal-system",
    },
    {
      id: 3,
      title: "Notice",
      path: "/notice"
    }
  ],
  getConected: [
    {
      id: 0,
      title: "Careers",
      path: "/career/career-form",
    },
    {
      id: 1,
      title: "Contact us",
      path: "/contact-us",
    },
    {
      id: 2,
      title: "RTI",
      path: "/rti",
    },
    {
      id: 3,
      title: "Student Login",
      path: "https://eyojan.srmu.ac.in/",
      external: true,
    },
    {
      id: 4,
      title: "Staff Login",
      path: "https://eyojan.srmu.ac.in/",
      external: true,
    },
    // {
    //   id: 2,
    //   title: "Mandatory Disclosure",
    //   path: "mandatory-disclouser",
    // },
  ],

  getDelighted: [
    {
      id: 0,
      title: "Central Library",
      path: "/central-library",
    },
    {
      id: 1,
      title: "Newsletter",
      path: "/news-letter",
    },
    {
      id: 2,
      title: "Clubs",
      path: "/clubs",
    },
    {
      id: 3,
      title: "Blogs",
      path: "/blogs",
    },
    {
      id: 4,
      title: "Shift Schedule",
      path: "/shift-schedule",
    },
  ],
  getResponsible: [
    {
      id: 0,
      title: "Green Initiative",
      path: "/green-initiative",
    },
    {
      id: 1,
      title: "Outreach Activations",
      path: "/outreach-activations",
    },
    {
      id: 2,
      title: "Women Empowerment",
      path: "/women-empowerment",
    },
  ],
};

const VideoPopUp = ({ setCheck }: any) => {
  return (
    <div className="w-full bg-black bg-opacity-50 h-screen fixed top-0 left-0 flex items-center justify-center px-5 z-9999">
      <div className="z-999 w-full max-w-[95%] md:max-w-[80%] relative ">
        <span onClick={() => setCheck(false)} className="w-6 h-6 z-9999 text-black rounded-full bg-white cursor-pointer flex justify-center items-center absolute top-5 right-5">
          <IoClose />
        </span>
        <video autoPlay loop controls className="w-full h-auto">
          <source src="https://srmcem.ac.in/assets/0403.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  const [check, setCheck] = useState(false);
  useEffect(() => {
    if (typeof document === "undefined") return;

    if (check) {
      document.body.style.height = "100vh";
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.height = "auto";
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.height = "auto";
      document.body.style.overflowY = "auto";
    };
  }, [check]);
  return (
    <>
      <footer className={` text-white py-20`}>
        <div className={`${Classes["container"]} relative z-100 py-10 sm:py-20`}>
          <div className="w-full manage_footer_column ">
            <div className="w-full space-y-4 flex flex-col grid-first">
              <div className="flex items-center gap-3">
                <div>
                  <img
                    src={logosrmcem}
                    alt="Shri Ramswaroop Memorial University Logo"
                    width={220}
                    height={54}
                    loading="lazy"
                    decoding="async"
                    className="max-w-[220px] xl:max-w-full w-auto h-auto"
                  />
                </div>
                {/* <div>
                  <h2 className="text-white font-bold text-[1.3rem] sm:text-[1.6rem]">
                    SHRI RAMSWAROOP
                    <div className="text-[0.6rem] font-semibold">MEMORIAL COLLEGE OF ENGINEERING & MANAGEMENT</div>
                  </h2>
                </div> */}
              </div>
              <div className="space-y-8 mt-8">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-x-1">
                    <span>
                      <Link
                        to="https://maps.app.goo.gl/uxeq6Shi7D5aAJ5RA"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Google Maps Location"
                      >
                        <MdLocationPin size={24} />
                      </Link>
                    </span>
                    <h2 className="font-semibold text-[14px] sm:text-base text-[#ffb703] uppercase">Address</h2>
                  </div>
                  <p className="lg:!text-[14px] !text-[13.132px]">{footerData.contact.address}</p>
                </div>
                {/* Gomtinagar Office Address */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-x-1">
                    <span>
                      <Link
                        to="https://maps.app.goo.gl/uxeq6Shi7D5aAJ5RA"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Google Maps Gomtinagar Location"
                      >
                        <MdLocationPin size={24} />
                      </Link>
                    </span>
                    <h2 className="font-semibold text-[14px] sm:text-base text-[#ffb703] uppercase">Lucknow Office</h2>
                  </div>
                  <p className="lg:!text-[14px] !text-[13.132px]">{footerData.contact.address2}</p>
                </div>
                <div className="flex flex-col gap-2 ">
                  <div className="flex items-center gap-x-2">
                    <span>
                      <Link to="tel:9838904666" target="_blank" rel="noopener noreferrer" aria-label="Call Admissions Helpline">
                        <FaPhone />
                      </Link>
                    </span>
                    <h2 className="font-semibold text-[14px] sm:text-base text-[#ffb703] uppercase">Admission Helpline</h2>
                  </div>
                  <p className="lg:!text-[14px] !text-[13.132px]">{footerData.contact.phone1}</p>
                </div>
                {/* Toll-Free */}
                <div className="flex flex-col gap-2 ">
                  <div className="flex items-center gap-x-2">
                    <span>
                      <Link to="tel:18001026004" target="_blank" rel="noopener noreferrer" aria-label="Admission Toll-Free Number">
                        <FaPhone />
                      </Link>
                    </span>
                    <h2 className="font-semibold text-[14px] sm:text-base text-[#ffb703] uppercase">Admission Toll Free</h2>
                  </div>
                  <p className="lg:!text-[14px] !text-[13.132px]">
                    <Link to="tel:18001026004" className="hover:text-[#ffb703] transition-colors">
                      {footerData.contact.tollfree}
                    </Link>
                  </p>
                </div>
                <div className="flex gap-2 flex-col">
                  <div className="flex items-center gap-x-2">
                    <span className="text-[1.2rem]">
                      <Link to="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=admissions@srmu.ac.in" target="_blank" rel="noopener noreferrer" aria-label="Email Admissions">
                        <MdEmail />
                      </Link>
                    </span>
                    <h2 className="font-semibold text-[14px] sm:text-base text-[#ffb703] uppercase">Email</h2>
                  </div>
                  <p>
                    <Link to={`mailto:${footerData.contact.email}`} className=" lg:!text-[14px] !text-[13.132px]">
                      {footerData.contact.email}
                    </Link>
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 mt-10 sm:mt-20">
                <Link
                  to="https://www.facebook.com/SRMUOFFICIAL/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center transition-all duration-300  hover:border-[#ffb703] hover:bg-transparent hover:text-[#ffb703] cursor-pointer"
                  aria-label="Facebook"
                >
                  <img src={fb} alt="SRMU Facebook Official Page" width={20} height={20} />
                </Link>
                <Link
                  to="https://www.instagram.com/srmulucknow_official/"
                  target="_blank"
                  className=" flex items-center justify-center transition-all duration-300 hover:border-[#ffb703] hover:bg-transparent hover:text-[#ffb703] cursor-pointer"
                  aria-label="Instagram"
                >
                  <img src={instagram} alt="SRMU Instagram Official Handle" width={20} height={20} />
                </Link>
                <Link
                  to="https://www.linkedin.com/school/shri-ramswaroop-memorial-university/"
                  target="_blank"
                  className=" flex items-center justify-center transition-all duration-300 hover:border-[#ffb703] hover:bg-transparent hover:text-[#ffb703] cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <img src={linkdin} alt="SRMU LinkedIn University Page" width={20} height={20} />
                </Link>
                <a
                  href=" https://twitter.com/srmu_lucknow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" flex items-center justify-center transition-all duration-300 hover:border-[#ffb703] hover:bg-transparent hover:text-[#ffb703] cursor-pointer"
                  aria-label="Twitter"
                >
                  <img src={twitter} alt="SRMU Twitter / X Official Account" width={20} height={20} />
                </a>
                <Link
                  to="https://www.youtube.com/channel/UCQBjHzkED5ESWvlQiwLNZ4Q"
                  target="_blank"
                  className=" flex items-center justify-center transition-all duration-300 hover:border-[#ffb703] hover:bg-transparent hover:text-[#ffb703] cursor-pointer"
                  aria-label="YouTube"
                >
                  <img src={youtube} alt="SRMU Official YouTube Channel" width={20} height={20} />
                </Link>
              </div>
            </div>
            <div className=" w-full grid-second">
              <h2 className="font-semibold text-[14px] sm:text-base mb-3 text-[#ffb703]  Get Responsible uppercase">Get Enrolled</h2>
              <ul className="space-y-4 pb-8 list-none! sm:border-b-2 border-dashed border-[#e1f1fd94] ">
                {footerData.getEnrolled.map((link, index) => (
                  <li key={index}>
                    <div className="flex items-center group hover:text-[#ffb703] ">
                      {link.title === "Mandatory Disclosure" || link.title === "Anti-Sexual Harassment - IIC" ? (
                        <a href={link.path} target="_blank" className=" lg:!text-[14px] !text-[13.132px]  group-hover:text-[#ffb703]">
                          {" "}
                          {link.title}
                        </a>
                      ) : (
                        <Link to={link.path} className=" lg:!text-[14px] !text-[13.132px] text-white group-hover:text-[#ffb703]">
                          {link.title}
                        </Link>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <h2 className="font-semibold text-[14px] sm:text-base mt-8 mb-4 text-[#ffb703] uppercase">Get Evolved</h2>
              <ul className="space-y-4  pb-8 list-none! sm:border-b-2 border-dashed border-[#e1f1fd94]">
                {footerData.getEvolved.map((link, index) => (
                  <li key={index}>
                    <div className="flex items-center group hover:text-[#ffb703]">
                      <Link to={link.path} className={`lg:!text-[14px] !text-[13.132px] text-white group-hover:text-[#ffb703] }`}>
                        {link.title}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
              <h2 className="font-semibold text-[14px] sm:text-base mb-4 text-[#ffb703] mt-8 Get Responsible uppercase">Get Delighted</h2>
              <ul className="space-y-4 pb-8 list-none! ">
                {footerData.getDelighted.map((link, index) => (
                  <li key={index}>
                    <div className="flex items-center group hover:text-[#ffb703]">
                      {link.title === "Grievance Redressal" ? (
                        <a href={link.path} target="_blank" className=" lg:!text-[14px] !text-[13.132px] text-white group-hover:text-[#ffb703]">
                          {link.title}
                        </a>
                      ) : (
                        <Link to={link.path} className=" lg:!text-[14px] !text-[13.132px] text-white group-hover:text-[#ffb703]">
                          {link.title}
                        </Link>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full grid-third">
              <h2 className="font-semibold text-[14px] sm:text-base mb-3 text-[#ffb703] uppercase ">Get Responsible</h2>
              <ul className="space-y-4  pb-8 list-none! sm:border-b-2 border-dashed border-[#e1f1fd94]">
                {footerData.getResponsible.map((link, index) => (
                  <li key={index}>
                    <div className="flex items-center group hover:text-[#ffb703] ">
                      {link.title === "Anti-Sexual Harassment - ICC" || link.title === "Grievance Redressal System" ? (
                        <a href={link.path} target="_blank" className=" lg:!text-[14px] !text-[13.132px]  group-hover:text-[#ffb703]">
                          {link.title}
                        </a>
                      ) : (
                        <Link to={link.path} className=" lg:!text-[14px] !text-[13.132px] text-white group-hover:text-[#ffb703]">
                          {link.title}
                        </Link>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <h2 className="font-semibold text-[14px] sm:text-base mt-8 mb-4 text-[#ffb703] uppercase">Get Helped</h2>
              <ul className="space-y-4  pb-8 list-none! sm:border-b-2 border-dashed border-[#e1f1fd94]">
                {footerData.getHelped.map((link, index) => (
                  <li key={index}>
                    <div className="flex items-center group hover:text-[#ffb703]">
                      <Link to={link.path} className={`lg:!text-[14px] !text-[13.132px] text-white group-hover:text-[#ffb703] }`}>
                        {link.title}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
              <h2 className="font-semibold text-[14px] sm:text-base mb-4 text-[#ffb703] mt-8 Get Responsible uppercase">Get Connected</h2>
              <ul className="space-y-4 pb-8 list-none! ">
                {footerData.getConected.map((link, index) => (
                  <li key={index}>
                    <div className="flex items-center group hover:text-[#ffb703]">
                      {link.title === "Grievance Redressal" || (link as any).external ? (
                        <a href={link.path} target="_blank" rel="noopener noreferrer" className=" lg:!text-[14px] !text-[13.132px] text-white group-hover:text-[#ffb703]">
                          {link.title}
                        </a>
                      ) : (
                        <Link to={link.path} className=" lg:!text-[14px] !text-[13.132px] text-white group-hover:text-[#ffb703]">
                          {link.title}
                        </Link>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* usefulLinks */}
            </div>
            <div className="w-full grid-fourth">
              <h2 className="font-semibold text-[14px] sm:text-base mb-4 text-[#ffb703] Get Responsible uppercase">Explore / Engage</h2>
              <Link
                target="_blank"
                to="https://www.youtube.com/watch?v=vs_TEm1_XS8"
                // onClick={() => setCheck(true)}
                className="border-2  mb-4 hover:bg-white hover:text-[#0f4a85] border-[#ffb703] rounded-md inline-flex items-center space-x-4 px-4 py-3"
              >
                <span className="mr-2">
                  <CiGlobe size={28} color="#ffb703" />
                </span>{" "}
                Virtual Tour
              </Link>
              <h2 className="font-semibold text-[14px] sm:text-base pt-10 mb-4 text-[#ffb703]  Get Responsible uppercase">Awards</h2>
              <div className="flex gap-x-4 mb-4">
                <img src={awards1} alt="SRMU Awards and Recognition" width={90} height={70} loading="lazy" decoding="async" />
                <img src={awards2} alt="SRMU Accreditation and Awards" width={90} height={70} loading="lazy" decoding="async" />
              </div>
              <h2 className="font-semibold text-[14px] sm:text-base pt-8 mb-4 text-[#ffb703]  Get Responsible uppercase">MERCH SHOP</h2>
              <h4 className="font-semibold lg:!text-[14px] !text-[13.132px] text-white">To Shop SRMU Merchandise Scan the Code</h4>
              <img src={scanner} alt="SRMU Merchandise QR code for scanning" width={170} height={170} loading="lazy" decoding="async" className="max-w-[170px] mt-4" />
            </div>
          </div>
        </div>
      </footer>
      {check && <VideoPopUp setCheck={setCheck} />}
      {/* Bottom-Footer */}
      <div className="w-full bg-[#0f4a85] py-4">
        <div className={`${Classes["container"]}`}>
          <div className=" pb-10 sm:pb-0 flex justify-between gap-5 flex-wrap items-center">
            <div className="text-[13px]  text-white">Copyright © 2026 Shri Ramswaroop Memorial University</div>
            <div>
              <ul className="flex flex-wrap gap-x-7 items-center text-white text-[13px] list-none!">
                <li className="relative inline-block after:content-[''] after:h-5 after:w-0.5! after:bg-white after:absolute after:top-0 after:-right-4">
                  <Link className="text-nowrap" to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li className="relative inline-block after:content-[''] after:h-5 after:w-0.5! after:bg-white after:absolute after:top-0 after:-right-4">
                  <Link className="text-nowrap" to="/disclaimer">Disclaimer</Link>
                </li>
                <li>
                  <Link className="text-nowrap" to="/terms-conditions">Terms and Conditions</Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-x-1 text-white text-[13px]">
              Design By: <Link to="https://srdt.co.in/"> SRDT </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
