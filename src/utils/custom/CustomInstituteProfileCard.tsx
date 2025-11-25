import React, { useState } from "react";
import { InstituteProfile } from "../../types/profile-data-type";
import { CustomModal } from "./CustomIqacCard";

interface CustomInstituteProfileCardProps {
  data?: InstituteProfile[];
}

const CustomInstituteProfileCard: React.FC<CustomInstituteProfileCardProps> = ({
  data,
}) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const formatBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <span key={index} className="font-bold">
          {part.slice(2, -2)}
        </span>
      ) : (
        part
      )
    );
  };

  // Modal Renderer
  const renderModalContent = (profile: InstituteProfile) => (
    <div className="text-[#0f4a85]">
      <h2 className="text-3xl md:text-4xl font-bold mb-3">{profile.title}</h2>
      <p className="text-xl font-semibold mb-1">{profile.name}</p>
      <p className="mb-4">{profile.position}</p>

      {profile.modalContent && (
        <div className="space-y-3 mb-6 text-[17px] leading-relaxed">
          {profile.modalContent.split("\n").map((p, i) => (
            <p key={i}>{formatBold(p)}</p>
          ))}
        </div>
      )}

      {profile.detailsHeading && (
        <h3 className="text-lg font-bold mb-2">{profile.detailsHeading}</h3>
      )}

      {profile.useBullets ? (
        <ul className="list-disc pl-5 space-y-2">
          {profile.details.map((d, i) => (
            <li key={i}>{formatBold(d)}</li>
          ))}
        </ul>
      ) : (
        <div className="space-y-2">
          {profile.details.map((d, i) => (
            <p key={i}>{formatBold(d)}</p>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <section className="bg-[#0f4a85] py-10 md:py-16">
      <div className="max-w-6xl mx-auto space-y-12 px-4 md:px-0">
        {data.map((profile) => (
          <div
            key={profile.id}
            className="flex flex-col md:flex-row items-start gap-8 md:gap-10"
          >
            {/* Image */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-start">
              <img
                src={profile.image}
                alt={profile.name}
                className="object-cover max-w-full h-auto rounded-[32px]"
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-2/3 text-white">
              <h2 className="font50  md:text-4xl fw500 mb-2">
                {profile.title}
              </h2>

              <p className="font19  mb-1">{profile.name}</p>
              <p className="mb-4 fw500">{profile.position}</p>

              <p className="mb-6 max-w-full md:max-w-3xl">
                {formatBold(profile.summary)}
              </p>

              {/* CARD DETAILS SECTION */}
              {profile.detailsHeading && (
                <h3 className="font-bold text-[18px] mb-2">
                  {profile.detailsHeading}
                </h3>
              )}

              {profile.useBullets ? (
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  {profile.details.slice(0, 5).map((d, i) => (
                    <li key={i}>{formatBold(d)}</li>
                  ))}
                </ul>
              ) : (
                <div className="space-y-1 mb-6">
                  {profile.details.slice(0, 4).map((d, i) => (
                    <p key={i}>{formatBold(d)}</p>
                  ))}
                </div>
              )}

              <button
                onClick={() => setExpandedId(profile.id)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#ffb703] text-[#0f4a85] font-semibold rounded-md shadow hover:bg-[#ffc54a] transition"
              >
                VIEW PROFILE
                <span className="text-xl">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODALS */}
      {data.map((profile) => (
        <CustomModal
          key={profile.id}
          id={profile.id}
          isExpanded={expandedId}
          setIsExpanded={setExpandedId}
          title=""
          content={
            <div className="text-black text-[17px] leading-relaxed">
              <h2 className="font19  fw500 mb-4 text-[#0f4a85]">{profile.name}</h2>
              {profile.modalContent.split("\n").map((p, i) => (
                <p key={i}>{formatBold(p)}</p>
              ))}
            </div>
          }
          description=""
        />
      ))}
    </section>
  );
};

export default CustomInstituteProfileCard;
