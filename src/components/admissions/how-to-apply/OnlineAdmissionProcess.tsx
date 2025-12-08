import React from "react";
import Classes from "../../../utils/styles/Global.module.css";

const OnlineAdmissionProcess:React.FC = () => {
    return (
           <div className="bg-[#f5f5f5] my-10 md:my-20">
        <div className={`${Classes["container"]} py-10 lg:py-20`}>
        <section className="common_padding apply_sec_main">
            <div className="container">
                <div className="text-center mt-5 sec_head max_width1100 max-w-[1100px] mx-auto mb-10 md:mb-20">
                    <h2 className="font50 fw500 color_theme line_height mb-2">
                        Online Admission Process
                    </h2>

                    <div>
                        <p>
                            Applicants must fill out the online form with personal, academic,
                            and program details, upload required documents, and pay the
                            application fee. Ensure all information is accurate and follow
                            university instructions for a smooth application process.
                        </p>
                    </div>
                </div>

                <div className="apply_bg_sec" style={{ position: "relative" }}>
                    <span className="circle_box circle_box1"></span>
                    <span className="circle_box circle_box2"></span>
                    <span className="circle_box circle_box3"></span>
<div className="grid grid-col-1 md:grid-cols-2 ml-0 md:ml-[15%] my-10 md:my-20 gap-10 md:gap-20">
                    {/* STEP 1 */}
                    <div className="text-center" id="html1">
                        <div className="icon">
                            <img className="mx-auto w-34 h-25"
                                data-aos="zoom-out-up"
                                data-aos-duration="1000"
                                src="https://srmu.ac.in/storage/common-section/web-12122306581468-24062510244640.png"
                                alt="1"
                            />
                            <div className="mx-auto mt-35 rounded-full h-30 w-30 bg-white"></div>
                      </div>

                        <div className="data -mt-38">
                            <div className="data_inner">
                                <div
                                    className="font32 fw600 color_light_blue"
                                    data-aos="zoom-in"
                                    data-aos-duration="1500"
                                >
                                    1.
                                </div>

                                <div
                                    className="color_light_blue font17 fw500 line_height w-full sm:w-3/4 mx-auto"
                                    data-aos="fade-up"
                                    data-aos-duration="3000"
                                >
                                    <p>
                                        To apply online, visit{" "}
                                        <a
                                            href="https://www.srmu.ac.in"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            www.srmu.ac.in
                                        </a>{" "}
                                        and click on the “Online Admission Form” block, or go
                                        directly to{" "}
                                        <a
                                            href="https://studentportal.srmu.ac.in"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            https://studentportal.srmu.ac.in
                                        </a>
                                    </p>
                                    <hr className="block md:hidden text-gray-300 mt-8" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* STEP 2 */}
                    <div className="text-center" id="html2">
                        <div className="icon">
                            <img className="mx-auto w-20 h-25"
                                data-aos="zoom-out-up"
                                data-aos-duration="1000"
                                src="https://srmu.ac.in/storage/common-section/register-12122306592573-24062510362073.png"
                                alt="2"
                            />
                                                        <div className="mx-auto mt-35 rounded-full h-30 w-30 bg-white"></div>

                        </div>

                        <div className="data -mt-38">
                            <div className="data_inner">
                                <div
                                    className="relative font32 fw600 color_light_blue"
                                    data-aos="zoom-in"
                                    data-aos-duration="1500"
                                >
                                    2.
                                </div>

                                <div
                                    className="color_light_blue font17 fw500 line_height w-full sm:w-3/4 mx-auto"
                                    data-aos="fade-up"
                                    data-aos-duration="3000"
                                >
                                    <p>
                                        Fill in all mandatory fields and click the “Register”
                                        button. You will be redirected to the login screen, where
                                        your registered mobile number will be required.
                                    </p>
                                    <hr className="block md:hidden text-gray-300 mt-8" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* STEP 3 */}
                    <div className="text-center" id="html4">
                        <div className="icon">
                            <img className="mx-auto w-20 h-25"
                                data-aos="zoom-out-up"
                                data-aos-duration="1000"
                                src="https://srmu.ac.in/storage/common-section/register-12122307001499.png"
                                alt="3"
                            />
                                                        <div className="mx-auto mt-35 rounded-full h-30 w-30 bg-white"></div>

                        </div>

                        <div className="data -mt-38">
                            <div className="data_inner">
                                <div
                                    className="relative font32 fw600 color_light_blue"
                                    data-aos="zoom-in"
                                    data-aos-duration="1500"
                                >
                                    3.

                                </div>

                                <div
                                    className="color_light_blue font17 fw500 line_height w-full sm:w-3/4 mx-auto"
                                    data-aos="fade-up"
                                    data-aos-duration="3000"
                                >
                                    <p>
                                        Enter your registered mobile number, click “Send OTP”, then
                                        enter the OTP and click “Verify OTP” to access the student
                                        dashboard.
                                    </p>
                                    <hr className="block md:hidden text-gray-300 mt-8" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* STEP 4 */}
                    <div className="text-center" id="html3">
                        <div className="icon">
                            <img className="mx-auto w-20 h-25"
                                data-aos="zoom-out-up"
                                data-aos-duration="1000"
                                src="https://srmu.ac.in/storage/common-section/register-12122306592573.png"
                                alt="4"
                            />
                            <div className="mx-auto mt-35 rounded-full h-30 w-30 bg-white"></div>
                        </div>

                        <div className="data -mt-38">
                            <div className="data_inner">
                                <div
                                    className="relative font32 fw600 color_light_blue"
                                    data-aos="zoom-in"
                                    data-aos-duration="1500"
                                >
                                    4.

                                </div>

                                <div
                                    className="color_light_blue font17 fw500 line_height w-full sm:w-3/4 mx-auto"
                                    data-aos="fade-up"
                                    data-aos-duration="3000"
                                >
                                    <p>
                                        Select “General Information,” fill required fields, and
                                        press “Submit”. Enter basic details, then press “Save” to
                                        proceed.
                                    </p>
                                    <hr className="block md:hidden text-gray-300 mt-8" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* STEP 5 */}
                    <div className="text-center" id="html5">
                        <div className="icon">
                            <img className="mx-auto w-20 h-25"
                                data-aos="zoom-out-up"
                                data-aos-duration="1000"
                                src="https://srmu.ac.in/storage/common-section/register-1212230700471.png"
                                alt="5"
                            />
                            <div className="mx-auto mt-35 rounded-full h-30 w-30 bg-white"></div>
                        </div>

                        <div className="data -mt-38">
                            <div className="data_inner">
                                <div
                                    className="relative font32 fw600 color_light_blue"
                                    data-aos="zoom-in"
                                    data-aos-duration="1500"
                                >
                                    5.
                                </div>

                                <div
                                    className="color_light_blue font17 fw500 line_height w-full sm:w-3/4 mx-auto"
                                    data-aos="fade-up"
                                    data-aos-duration="3000"
                                >
                                    <p>
                                        Go to “Application Fee,” review information, click “Pay
                                        Application Fee,” and complete the payment.
                                    </p>
                                    <hr className="block md:hidden text-gray-300 mt-8" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* STEP 6 */}
                    <div className="text-center" id="html6">
                        <div className="icon">
                            <img className="mx-auto w-20 h-25"
                                data-aos="zoom-out-up"
                                data-aos-duration="1000"
                                src="https://srmu.ac.in/storage/common-section/register-12122307012275.png"
                                alt="6"
                            />
                            <div className="mx-auto mt-35 rounded-full h-30 w-30 bg-white"></div>
                        </div>

                        <div className="data -mt-38">
                            <div className="data_inner">
                                <div
                                    className="relative font32 fw600 color_light_blue"
                                    data-aos="zoom-in"
                                    data-aos-duration="1500"
                                >
                                    6.
                                </div>

                                <div
                                    className="color_light_blue font17 fw500 line_height w-full sm:w-3/4 mx-auto"
                                    data-aos="fade-up"
                                    data-aos-duration="3000"
                                >
                                    <p>
                                        Go to “Registration Fee,” review the info, select amount of
                                        10,000 or more, and make the payment using available
                                        options.
                                    </p>
                                    <hr className="block md:hidden text-gray-300 mt-8" />
                                </div>
                            </div>
                        </div>
                    </div></div>

                    {/* SVG */}
                    <svg
                        version="1.1"
                        viewBox="0 0 973.2 830.1"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* --- SVG CONTENT KEPT SAME --- */}
                        {/* You can keep your full SVG here, unchanged */}
                    </svg>
                </div>
            </div>
        </section></div></div>
    );
};

export default OnlineAdmissionProcess;
