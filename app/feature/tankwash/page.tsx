import Breadcrumb from "@/components/Common/Breadcrumb";
import Packages from "@/components/ServicesDetails/Tanks/Packages";
import ImagesSection from "@/components/ServicesDetails/Images";
import Tecnicas from "@/components/ServicesDetails/tecnicas";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BomDoza Lavagem de Tanques",
  description: "BomDoza cleaning service",
  // other metadata
};

const DetailsTanks = () => {
  const tecnicasLavagem = [
    "Lavagem com Água a Alta Pressão",
    "Utilização de Detergentes Específicos",
    "Lavagem com Detergentes ou Solventes Específicos",
    "Inspeção",
  ];
  const imageUrls = [
    "/images/servicos/tanques/tanque.jpg",
    "/images/servicos/tanques/tanque1.png"
  ];
  return (
    <>
        <section className="mb-10 overflow-hidden pb-[120px] pt-[18px]">

            <Breadcrumb
              pageName="Lavagem de Tanques"
              description="Na BomDoza, nos comprometemos a fornecer uma abordagem exemplar na lavagem de tanques. 
              Contamos com uma equipe especializada que emprega técnicas avançadas e soluções personalizadas para devolver 
              a integridade e a eficiência aos seus tanques, independentemente da complexidade do desafio."
            />

            <Tecnicas tecnicas={tecnicasLavagem} />
            <ImagesSection imageUrls={imageUrls} />

            <Packages />

        </section>
    </>
  );
};

export default DetailsTanks;
