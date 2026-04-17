import React from "react";
import Classes from "../../../utils/styles/Global.module.css";
import admission_bg from "../../../assets/images/admission-bg.png";
import computer from "../../../assets/images/computer.png";
import mobile from "../../../assets/images/mobile.webp";
import bgImage from "../../../assets/images/research/overview/facilities-bg-lg.jpeg";
import offlineAddmission from "../../../assets/images/offline-admission.webp";
import offlineAddmissionMobile from "../../../assets/images/offline-admission-mobile.webp";
const OnlineAdmissionProcess: React.FC = () => {
  return (
    <>
      <div className="bg-[#f5f5f5] mt-10 lg:mt-20 px-10 pb-10">
        <div className={`${Classes["container"]} py-10 lg:py-20`}>
          <section className="common_padding apply_sec_main">
            <div className="text-center mt-5 sec_head max_width1100 max-w-[1100px] mx-auto mb-10 md:mb-20 ">
              <h2 className=" text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500 color_theme line_height mb-2">Online Admission Process</h2>

              <div>
                <p>
                  Applicants must fill out the online form with personal, academic, and program details, upload required documents, and pay the application fee. Ensure all
                  information is accurate and follow university instructions for a smooth application process.
                </p>
              </div>
            </div>

            <div className="admission_process relative my-10 lg:mt-70 lg:mb-60">
              <div className="container_bg">
                <img src={admission_bg} className="w-full relative z-100 hidden lg:block" alt="admission" />
              </div>
              <div className="contain_part">
                <div className="circle_box one"></div>
                <div className="circle_box two"></div>
                <div className="circle_box three"></div>
                <div className="box1">
                  <div className="flex justify-center">
                    <img src={computer} className="w-full max-w-[100px]" alt="Computer desktop icon for visiting application website" />
                  </div>

                  <div className="box-content">
                    <div className="circle"></div>
                    <div className="content">
                      <h2 className="text-[30px] font-semibold text-center mb-4 text-[#0f4a85] ">1.</h2>
                      <p className="font-medium mt-3 text-[#0f4a85] text-lg text-center">
                        To apply online, visit{" "}
                        <a data-end="116" data-start="76" href="https://www.srmu.ac.in" rel="noopener" target="_new">
                          www.srmu.ac.in
                        </a>{" "}
                        and click on the "Online Admission Form" block, or go directly to the form at{" "}
                        <a data-end="263" data-start="195" href="https://studentportal.srmu.ac.in" rel="noopener" target="_new">
                          https://studentportal.srmu.ac.in
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="box2">
                  <div className="flex justify-center">
                    <img src={mobile} className="w-full max-w-20" alt="Mobile phone icon for registration form" />
                  </div>

                  <div className="box-content">
                    <div className="circle"></div>
                    <div className="content">
                      <h2 className="text-[30px] font-semibold text-center mb-4 text-[#0f4a85] ">2.</h2>
                      <p className="font-medium mt-3 text-[#0f4a85] text-lg text-center">
                        Fill in all mandatory fields and click the "Register" button to proceed. This will take you to the login screen, where you'll be prompted to enter your
                        registered mobile number.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="box3">
                  <div className="flex justify-center">
                    <img src={mobile} className="w-full max-w-20" alt="Mobile phone icon for OTP verification" />
                  </div>

                  <div className="box-content">
                    <div className="circle"></div>
                    <div className="content">
                      <h2 className="text-[30px] font-semibold text-center mb-4 text-[#0f4a85] ">4.</h2>
                      {/* className="font-medium mt-3 text-[#0f4a85] text-lg text-center" */}
                      <p className="font-medium mt-3 text-[#0f4a85] text-lg text-center">
                        Select "General Information," fill required fields, press"Submit". Enter basic details, then press "Save" to proceed.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="box4">
                  <div className="flex justify-center">
                    <img src={mobile} className="w-full max-w-20" alt="Mobile phone icon for entering OTP" />
                  </div>

                  <div className="box-content">
                    <div className="circle"></div>
                    <div className="content">
                      <h2 className="text-[30px] font-semibold text-center mb-4 text-[#0f4a85] ">3.</h2>
                      <p className="font-medium mt-3 text-[#0f4a85] text-lg text-center">
                        Enter your registered mobile number, click "Send OTP", then enter the OTP and click "Verify OTP" to access the student dashboard.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="box5">
                  <div className="flex justify-center">
                    <img src={mobile} className="w-full max-w-20" alt="Mobile phone icon for application fee payment" />
                  </div>

                  <div className="box-content">
                    <div className="circle"></div>
                    <div className="content">
                      <h2 className="text-[30px] font-semibold text-center mb-4 text-[#0f4a85] ">5.</h2>
                      {/* className="font-medium mt-3 text-[#0f4a85] text-lg text-center" */}
                      <p className="font-medium mt-3 text-[#0f4a85] text-lg text-center">
                        Go to "Application Fee," review the info, press "Pay Application Fee," and complete the payment using one of the payment options.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="box6">
                  <div className="flex justify-center">
                    <img src={mobile} className="w-full max-w-20" alt="Mobile phone icon for registration fee payment" />
                  </div>

                  <div className="box-content">
                    <div className="circle"></div>
                    <div className="content">
                      <h2 className="text-[30px] font-semibold text-center mb-4 text-[#0f4a85] ">6.</h2>
                      <p className="font-medium mt-3 text-[#0f4a85] text-lg text-center">
                        Go to "Registration Fee," review the info, select amount of 10,000 or more, and complete the payment using any of the given payment options.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div
        className="relative mb-10 lg:mb-10 "
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* py-10 lg:py-20 */}
        <div className={`${Classes["container"]} py-10 lg:py-20 `}>
          <div className="text-center mt-5  mb-10 md:mb-20">
            <h2 className="text-[22px] sm:text-[28px] lg:text-[3.125rem] fw500 text-white  mb-2">Offline Admission Process</h2>

            <div>
              <p className="text-white">Career Counselling at SRMU helps students identify their strengths and guides them to navigate the job market with confidence.</p>
            </div>
          </div>
          <img src={offlineAddmission} alt="offlineAddmission" className="hidden md:block" />
          <img src={offlineAddmissionMobile} alt="offlineAddmissionMobile" className="block md:hidden" />
        </div>
      </div>
    </>
  );
};

export default OnlineAdmissionProcess;
