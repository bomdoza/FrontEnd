import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutSectionZero from "@/components/About/AboutSectionZero";
import AboutFundators from "@/components/About/AboutFundators";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ExcellenceSection from "@/components/About/ExcellenceSection";

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
      <AboutFundators />
      <ExcellenceSection />
      <AboutSectionOne />
      <AboutSectionTwo />

    </>
  );
};

export default AboutPage;
