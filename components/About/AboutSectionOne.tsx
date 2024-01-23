import Image from "next/image";
import DivTitle from "../Common/DivTitle";


const AboutSectionOne = () => {

  return (
    <section id="about">
      <div className="container">
        <div className="border-b border-body-color/[.15] dark:border-white/[.15] py-12 md:py-14 lg:py-114">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <DivTitle
                title="Missão"
                paragraph="Nossa missão é transformar a rotina da lavagem em uma experiência extraordinária. Buscamos proporcionar não apenas limpeza, mas a renovação completa de carros, sofás, tapetes, tanques e diversos outros itens, utilizando técnicas avançadas e produtos de alta qualidade."
                mb="44px"
              />

                <div className="flex flex-wrap">
                  <DivTitle
                  title="Sustentabilidade"
                  paragraph="Além de buscar a excelência nos resultados, a BomDoza é comprometida com práticas sustentáveis. Procuramos minimizar nosso impacto ambiental, escolhendo produtos e métodos que respeitam o meio ambiente."
                  mb="44px"
                />
                </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/servicos/tapetes/limpador-a-vapor.jpg"
                  alt="about-image"
                  fill                
                  className=" rounded-mddrop-shadow-three mx-auto max-w-full dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/servicos/tapetes/limpador-a-vapor.jpg"
                  alt="about-image"
                  fill
                  className="rounded-md drop-shadow-three mx-auto hidden max-w-full dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
