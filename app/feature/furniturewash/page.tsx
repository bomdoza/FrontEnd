import SectionTitle from "@/components/Common/SectionTitle";
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
      <section className="mt-16 py-12 md:py-16 lg:py-20">
        <div className="container px-3">
          <SectionTitle
            title="Lavagem de mobílias"
            paragraph=""
            center
            mb="10px"
          />
          <p className="mx-4 p-1 text-justify text-body-color">
          Na BomDoza, nos comprometemos a fornecer uma abordagem exemplar na lavagem de mobílias. 
          Contamos com uma equipe especializada que emprega técnicas avançadas e soluções personalizadas para devolver a 
          integridade e a eficiência as suas mobílias, independentemente da complexidade do desafio.
          </p>

          <Tecnicas tecnicas={tecnicasLavagem} />
          <ImagesSection imageUrls={imageUrls} />

          <Packages />
        </div>
      </section>
    </>
  );
};

export default DetailsRestauroEquipamentos;
