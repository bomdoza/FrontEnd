import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BOMDOZA",
  description: "BOMDOZA cleaning service",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <div id="sobre" className="mt-10 pt-10 md:pt-16 lg:pt-24">
        
          <SectionTitle
            title="Sobre Nós"
            paragraph=""
            center
            mb="1px"
          />
      <Breadcrumb
        pageName=""
        description="Bem-vindo à BomDoza, sua solução completa para serviços de lavagem premium. Nossa empresa é especializada em proporcionar cuidados meticulosos a uma variedade de itens, desde a limpeza detalhada de carros até a revitalização de sofás, tapetes e tanques. Com uma equipe altamente qualificada e equipamentos modernos, garantimos resultados excepcionais em cada serviço."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
      </div>
    </>
  );
};

export default AboutPage;
