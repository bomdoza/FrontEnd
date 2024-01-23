import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutFundators from "@/components/About/AboutFundators";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ExcellenceSection from "@/components/About/ExcellenceSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bom Doza-Sobre-nós",
};

const AboutPage = () => {
  return (
    <>
        
        <Breadcrumb
        pageName="Sobre Nós"
        description="Bem-vindo à BomDoza, sua solução completa para serviços de lavagem. Nossa empresa é especializada 
        em proporcionar cuidados meticulosos a uma variedade de itens, desde a limpeza detalhada de carros 
        até a revitalização de sofás, tapetes e tanques. Com uma equipe altamente qualificada e equipamentos 
        modernos, garantimos resultados excepcionais em cada serviço."
        />

      <AboutFundators />
      <ExcellenceSection />
      <AboutSectionOne />
      <AboutSectionTwo />

    </>
  );
};

export default AboutPage;
