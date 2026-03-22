import React from "react";
import { useLocation, useParams } from "react-router-dom";
import EventDetails from "../pages/campus-life/events/EventDetails";
import CustomCommitteeDetailsPage from "./custom/CustomCommitteeDetailsPage";
import SeoHead from "../components/seo/SeoHead";
import { SITE_NAME } from "./seo";
import { findCommitteeCardBySlug, findEventCardBySlug } from "./routeMatching";

type LegacyNotFoundProps = {
  entityLabel: string;
};

const LegacyNotFound: React.FC<LegacyNotFoundProps> = ({ entityLabel }) => {
  const location = useLocation();

  return (
    <>
      <SeoHead
        title={`${entityLabel} Not Found | ${SITE_NAME}, Lucknow`}
        description={`The requested SRMU ${entityLabel.toLowerCase()} page could not be found.`}
        pathname={location.pathname}
        noindex
      />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-medium text-[#023047]">{entityLabel} not found</h1>
      </div>
    </>
  );
};

export const LegacyEventDetailsPage: React.FC = () => {
  const { slug = "" } = useParams();
  const card = findEventCardBySlug(slug);

  if (!card) {
    return <LegacyNotFound entityLabel="Event" />;
  }

  return <EventDetails card={card} />;
};

export const LegacyCommitteeDetailsPage: React.FC = () => {
  const { slug = "" } = useParams();
  const committee = findCommitteeCardBySlug(slug);

  if (!committee) {
    return <LegacyNotFound entityLabel="Committee" />;
  }

  return <CustomCommitteeDetailsPage committee={committee} />;
};
