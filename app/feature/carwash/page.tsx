import SectionTitle from "@/components/Common/SectionTitle";
import CarWashPackages from "@/components/ServicesDetails/CarWashDetails/WashPackages";
import PartsRestoration from "@/components/ServicesDetails/CarWashDetails/RestorationPackages";
import ImagesSection from "@/components/ServicesDetails/Images";
import Tecnicas from "@/components/ServicesDetails/tecnicas";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BomDoza lavagem de carros",
  description: "BomDoza cleaning service",
  // other metadata
};

const DetailsCarsPage = () => {
  const tecnicasLavagem = [
    "Lavagem a Pressão",
    "Pré-Lavagem com Espuma",
    "Lavagem de Dois Baldes",
    "Lavagem de Motor",
  ];
  const carWashImageUrls = [
    "/images/servicos/carros/G.jpg",
    "/images/servicos/carros/LAVA.jpg",
    "/images/servicos/carros/lavagemdecarro.jpg",
  ];
  return (
    <>
      <section className="mt-16 py-12 md:py-16 lg:py-20">
        <div className="container px-3">
          <SectionTitle
            title="Lavagem de Carros"
            paragraph=""
            center
            mb="10px"
          />
          <p className="mx-4 p-1 text-justify text-body-color">
            Seguir as práticas adequadas de lavagem para preservar a pintura e
            as superfícies do veículo. Além disso, escolher produtos de limpeza
            de qualidade e utilizar os acessórios apropriados, como panos de
            microfibra e escovas macias, ajuda a manter a integridade do
            acabamento do carro.
          </p>
          <Tecnicas tecnicas={tecnicasLavagem} />
          <ImagesSection imageUrls={carWashImageUrls} />
          <CarWashPackages />

          <PartsRestoration />

        </div>
      </section>
    </>
  );
};

export default DetailsCarsPage;
