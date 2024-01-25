import Image from "next/image";

const AboutSectionTwo = () => {

  return (
    <section className="py-12 md:py-14 lg:py-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/service/furniture/tapete3.jpg"
                alt="about BomDoza image"
                fill
                className="rounded-lg object-cover object-center"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp w-full" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl md:text-[28px] lg:text-xl xl:text-2xl">
                  Como Funciona?
                </h3>
                <p className="text-justify text-base font-medium leading-relaxed text-body-color sm:leading-relaxed md:text-xl lg:text-base xl:text-xl">
                  A BomDoza oferece uma gama de serviços de qualidade. Não se
                  trata apenas de lavagem, é sobre restaurar, rejuvenescer e
                  elevar a experiência de cuidado com seus pertences. Escolha a
                  qualidade, escolha a dedicação, escolha a BomDoza para
                  transformar a limpeza em uma experiência excepcional.
                </p>
              </div>

              <div className="my-5">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl md:text-[28px] lg:text-xl xl:text-2xl">
                  Equipe Especializada
                </h3>
                <p className="text-justify text-base font-medium leading-relaxed text-body-color sm:leading-relaxed md:text-xl lg:text-base xl:text-xl">
                  Contamos com uma equipe altamente qualificada e dedicada,
                  apaixonada por oferecer soluções personalizadas para atender
                  às necessidades específicas de cada cliente. Nossa equipe é
                  treinada nas técnicas mais recentes de limpeza e está
                  comprometida em garantir que cada item receba o tratamento que
                  merece.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
