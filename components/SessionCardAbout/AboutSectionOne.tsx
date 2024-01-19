import Image from "next/image";
import DivTitle2 from "../Common/DivTitle2";
import DivTitle from "../Common/DivTitle";

const AboutSectionOne = () => {

  return (
    <section className="mt-10 pt-10 md:pt-16 lg:pt-10">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <DivTitle2
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
                className="wow fadeInUp relative mx-auto aspect-[25/24]  lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/bomDosa/abautHome.png"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full rounded-md drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/bomDosa/abautHome.png"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full rounded-md drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
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
