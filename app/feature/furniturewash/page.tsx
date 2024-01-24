import Breadcrumb from "@/components/Common/Breadcrumb";
import Packages from "@/components/ServicesDetails/Furniture/Packages";
import ImagesSection from "@/components/ServicesDetails/Images";
import Tecnicas from "@/components/ServicesDetails/tecnicas";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BomDoza lavagem de Mobílias",
  description: "BomDoza cleaning service",
  // other metadata
};

const DetailsRestauroEquipamentos = () => {
  const tecnicasLavagem = [
    "Lavagem com Água a Alta Pressão",
    "Utilização de Detergentes Específicos",
    "Limpeza Química com Solventes",
    "Utilização de Escovas Rotativas:",
    "Secagem Rápida e Eficiente",
  ];
  const imageUrls = [
    "/images/servicos/sofas/sofa3.jpg",
    "/images/servicos/tapetes/tapete1.jpeg",
    "/images/servicos/sofas/sofa1.png", 
  ];
  return (
    <>
        <section className="mb-10 overflow-hidden pb-[120px] pt-[18px]">
            <Breadcrumb
            pageName="Lavagem de Mobílias"
            description="Na BomDoza, nos comprometemos a fornecer uma abordagem exemplar na lavagem de mobílias. 
            Contamos com uma equipe especializada que emprega técnicas avançadas e soluções personalizadas para devolver a 
            integridade e a eficiência as suas mobílias, independentemente da complexidade do desafio."
          />

          <Tecnicas tecnicas={tecnicasLavagem} />
          <ImagesSection imageUrls={imageUrls} />
          <Packages />
          
        </section>
    </>
  );
};

export default DetailsRestauroEquipamentos;
