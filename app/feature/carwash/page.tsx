import CarWashPackages from "@/components/ServicesDetails/CarWashDetails/WashPackages";
import PartsRestoration from "@/components/ServicesDetails/CarWashDetails/RestorationPackages";
import ImagesSection from "@/components/ServicesDetails/Images";
import Tecnicas from "@/components/ServicesDetails/tecnicas";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Detalhes from "@/components/detalhes/Services";

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
        <section className="mb-10 overflow-hidden pb-[120px] pt-[18px]">
          <Breadcrumb
            pageName="Lavagem de Carros"
            description="Seguir as práticas adequadas de lavagem para preservar a pintura e
            as superfícies do veículo. Além disso, escolher produtos de limpeza
            de qualidade e utilizar os acessórios apropriados, como panos de
            microfibra e escovas macias, ajuda a manter a integridade do
            acabamento do carro."
          />

          <Detalhes />
        
        </section>
    </>
  );
};

export default DetailsCarsPage;
