import Image from "next/image";

const AboutSectionTwo = () => {

  return (
    <section className="pt-12 md:pt-14 lg:pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-3">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl md:text-[28px]">
                  Como Funciona?
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  A BomDoza oferece uma gama de serviços de qualidade. 
                  Não se trata apenas de lavagem, é sobre restaurar, rejuvenescer e elevar a experiência 
                  de cuidado com seus pertences. Escolha a qualidade, escolha a dedicação, escolha a BomDoza 
                  para transformar a limpeza em uma experiência excepcional.
                </p>
              </div>

              <div className="mb-3">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl md:text-[28px]">
                  Equipe Especializada
                </h3>
                <div className="mb-9">
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Contamos com uma equipe altamente qualificada e dedicada, apaixonada por oferecer soluções personalizadas 
                    para atender às necessidades específicas de cada cliente. Nossa equipe é treinada nas técnicas 
                    mais recentes de limpeza e está comprometida em garantir que cada item receba o tratamento que merece.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
