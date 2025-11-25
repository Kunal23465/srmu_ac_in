import React, { useState } from "react";
import { ProfileData } from "../../types/profile-data-type";
import { CustomModal } from "./CustomIqacCard";

interface CustomInstituteProfileCardProps {
  data: ProfileData;
}

const formatBold = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith("**") && p.endsWith("**") ? (
      <span key={i} className="font-bold">
        {p.slice(2, -2)}
      </span>
    ) : (
      p
    )
  );
};

const DetailSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-4">
    <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
    <ul className="list-disc pl-5 space-y-1">{children}</ul>
  </div>
);

const CustomInstituteProfileCard: React.FC<CustomInstituteProfileCardProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`min-h-screen p-6 sm:p-10 flex justify-center items-center ${data.backgroundColor || "bg-blue-900"}`}>
      <div className="text-white rounded-xl w-full max-w-6xl p-6 md:p-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex justify-center md:justify-start">
            <img
              src={data.imageSrc}
              alt={data.name}
              className="w-full h-[200px] max-w-sm rounded-lg shadow-lg object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://placehold.co/300x400/003366/FFFFFF?text=Image+Not+Found";
              }}
            />
          </div>

          <div className="md:w-2/3">
            <h1 className="font50 fw500 mb-1">{data.title}</h1>
            <h2 className="font19 mb-2">{data.designation}</h2>
            <p className="fw500 mb-2">{data.office}</p>

            {data.qualification && (
              <p className="mb-2">
                <strong>Qualification:</strong> {data.qualification}
              </p>
            )}

            {data.emailID && (
              <p>
                <strong>Email:</strong> {data.emailID}
              </p>
            )}

            {data.orcidID && (
              <p>
                <strong>ORCID:</strong> {data.orcidID}
              </p>
            )}

            {data.contactNum && (
              <p className="mb-4">
                <strong>Contact:</strong> {data.contactNum}
              </p>
            )}

            {/* Experience & Achievements */}
            <DetailSection title="">
              <span className="font-bold">Experience: {data.experienceTotal}</span> {data.experienceBreakdown && data.experienceBreakdown}
              {data?.achievements?.map((item, idx) => (
                <p key={idx}>{formatBold(item)}</p>
              ))}
              {data.supervisorDetail && <span className="font-bold">{data.supervisorDetail}</span>}
            </DetailSection>

            {/* Consultancy Section */}
            {(data.consultancyCount || data.consultancyCost || data.fundingAgencies) && (
              <DetailSection title="Consultancy Projects">
                {data.consultancyCount && (
                  <p>
                    <strong>Total Projects: </strong>
                    {data.consultancyCount}
                  </p>
                )}

                {data.consultancyCost && (
                  <p>
                    <strong>Total Cost: </strong>
                    {data.consultancyCost}
                  </p>
                )}

                {data.fundingAgencies && (
                  <p>
                    <strong>Funding Agencies: </strong>
                    {data.fundingAgencies}
                  </p>
                )}
              </DetailSection>
            )}

            {/* EIA Projects */}
            {data?.eiaProjects?.length > 0 && (
              <DetailSection title="EIA Projects">
                {data.eiaProjects.map((item, idx) => (
                  <p key={idx}>{formatBold(item)}</p>
                ))}
              </DetailSection>
            )}

            {data.totalEiaProjects && <p className="text-sm font-bold mb-6">Total EIA Projects = {data.totalEiaProjects}</p>}

            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-blue-900 bg-yellow-500 rounded-lg shadow-lg transition duration-300 hover:scale-105"
            >
              {data.profileButtonText}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <CustomModal
        isExpanded={isOpen ? 1 : null}
        id={1}
        setIsExpanded={() => setIsOpen(false)}
        title={`Profile – ${data.name}`}
        description="Full profile information"
        content={data.modalContent}
      />
    </div>
  );
};

export default CustomInstituteProfileCard;
