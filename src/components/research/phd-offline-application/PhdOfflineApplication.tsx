import React from "react";
import Classes from "../../../utils/styles/Global.module.css";
import CustomOverviewSection from "../../scholarship/ScholarshipOverviewSection";
import { PhdOfflineModeData } from "../../../data/research/phd-Notification-sesstion/phd-notification-sesstion-data";
import qr from "../../../assets/images/qr-code-phd.jpg";

export type ContentType = "text" | "link" | "email";

export interface TextContent {
  type: "text";
  value: string;
}

export interface LinkContent {
  type: "link";
  label: string;
  url: string;
}

export interface EmailContent {
  type: "email";
  value: string;
}

export type StepContent = TextContent | LinkContent | EmailContent;

export interface FeeInfo {
  amount: string;
  qrImage: string;
  fallbackLink: string;
}

export interface PhdStep {
  step: number;
  content: StepContent[];
  list?: string[];
  fee?: FeeInfo;
}

export interface PhdOfflineProcess {
  title: string;
  steps: PhdStep[];
}

export const phdOfflineProcess: PhdOfflineProcess = {
  title: "Process of applying in Ph.D. program (Offline Mode):",
  steps: [
    {
      step: 1,
      content: [
        {
          type: "text",
          value: "Visit the university's admissions office in person or ",
        },
        {
          type: "link",
          label: "Click here",
          url: "#",
        },
        {
          type: "text",
          value: " and download the Ph.D. Application Form",
        },
      ],
    },
    {
      step: 2,
      content: [
        {
          type: "text",
          value:
            "Complete all sections of the application form accurately and legibly. Provide personal details, academic qualifications, research interests, and any other information required.",
        },
      ],
    },
    {
      step: 3,
      content: [
        {
          type: "text",
          value: "Collect all necessary documents to support your application, including:",
        },
      ],
      list: [
        "Academic transcripts and certificates",
        "Statement of purpose / Synopsis outlining your research interests and goals",
        "Any other documents specified by the university",
      ],
    },
    {
      step: 4,
      content: [
        {
          type: "text",
          value:
            "Make the required payment for the application fee (Rs 2000/-) in cash at admission offices or for online payment facility, please scan the below QR code and proceed with relevant details:",
        },
      ],
      fee: {
        amount: "Rs 2000/-",
        qrImage: qr,
        fallbackLink: "https://razorpay.me/@shriramswaroopmemorialcharita",
      },
    },
    {
      step: 5,
      content: [
        {
          type: "text",
          value: "Mail completely filled form, enclosures and transaction details of payment done to ",
        },
        {
          type: "email",
          value: "director.research@srmu.ac.in",
        },
        {
          type: "text",
          value: " and ",
        },
        {
          type: "email",
          value: "admissions@srmu.ac.in",
        },
      ],
    },
  ],
};

const PhdOfflineApplication: React.FC = () => {
  return (
    <div className={`${Classes["container"]} mb-8`}>
      <CustomOverviewSection data={PhdOfflineModeData} />
      <div className="phd-process">
        <h2 className="text-[22px] font-semibold mb-4">{phdOfflineProcess.title}</h2>

        {phdOfflineProcess.steps.map((step) => (
          <div key={step.step} className="step-block">
            <p className="mb-4 text-[16px]">
              <strong>Step {step.step}:</strong>{" "}
              {step.content.map((item, index) => {
                if (item.type === "text") {
                  return <span key={index}>{item.value}</span>;
                }

                if (item.type === "link") {
                  return (
                    <a key={index} href={item.url} target="_blank" rel="noreferrer">
                      {item.label}
                    </a>
                  );
                }

                if (item.type === "email") {
                  return (
                    <a key={index} href={`mailto:${item.value}`}>
                      {item.value}
                    </a>
                  );
                }

                return null;
              })}
            </p>

            {/* Bullet List */}
            {step.list && (
              <ul className=" mb-4 space-y-2 pl-4 text-[16px]">
                {step.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            {/* Payment Section */}
            {step.fee && (
              <div className="payment-section">
                <img src={step.fee.qrImage} alt="Payment QR Code" className="w-full max-w-[200px]" />
                <p className="text-[16px] my-4">
                  In case of any problem in scanning the QR code, please visit the following link:{" "}
                  <a href={step.fee.fallbackLink} target="_blank" rel="noreferrer">
                    {step.fee.fallbackLink}
                  </a>
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhdOfflineApplication;
