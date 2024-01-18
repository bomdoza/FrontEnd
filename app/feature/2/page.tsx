import SectionTitle from "@/components/Common/SectionTitle";
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
  ];
  return (
    <>
      <section className="mt-16 py-12 md:py-16 lg:py-20">
        <div className="container px-3">
          <SectionTitle
            title="Lavagem de Tanques"
            paragraph=""
            center
            mb="10px"
          />
          <p className="mx-4 p-1 text-justify text-body-color">
            Na BomDoza, nos comprometemos a fornecer uma abordagem exemplar na lavagem de tanques. 
            Contamos com uma equipe especializada que emprega técnicas avançadas e soluções personalizadas para devolver 
            a integridade e a eficiência aos seus tanques, independentemente da complexidade do desafio.
          </p>

          <Tecnicas tecnicas={tecnicasLavagem} />
          <ImagesSection imageUrls={imageUrls} />

          <Packages />
        </div>
      </section>
    </>
  );
};

export default DetailsTanks;
