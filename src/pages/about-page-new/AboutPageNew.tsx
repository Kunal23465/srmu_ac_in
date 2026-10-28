import { useLocation } from "react-router-dom";
import AboutUsNew from "../../components/about/about-us-new/AboutUsNew";
import SeoHead from "../../components/seo/SeoHead";

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  name: "Shri Ramswaroop Memorial University",
  alternateName: "SRMU",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lucknow–Deva Road",
    addressLocality: "Barabanki",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
};

export default function AboutPageNew() {
  const location = useLocation();

  return (
    <>
      <SeoHead
        title="About SRMU | Shri Ramswaroop Memorial University, Lucknow–Deva Road, Barabanki"
        description="Shri Ramswaroop Memorial University (SRMU) on Lucknow–Deva Road, Barabanki, is a multidisciplinary university committed to academic excellence, research, innovation and holistic development."
        pathname={location.pathname}
        jsonLd={aboutSchema}
      />
      <AboutUsNew />
    </>
  );
}
