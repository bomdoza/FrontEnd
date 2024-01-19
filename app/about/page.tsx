import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutSectionZero from "@/components/About/AboutSectionZero";
import SectionTitle from "@/components/Common/SectionTitle";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BOMDOZA",
  description: "BOMDOZA cleaning service",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
        
        <Breadcrumb
        pageName="Sobre Nós"
        description="BomDoza: O cuidado que os seus pertences merecem!"
        />

      <AboutSectionZero />
      <AboutSectionOne />
      <AboutSectionTwo />

    </>
  );
};

export default AboutPage;
