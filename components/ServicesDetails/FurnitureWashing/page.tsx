import Image from "next/image";

const FurnitureWashingDetails = () => {
  const services = [
    {
      type: "Limpeza avançadas para garantir uma limpeza profunda sem danificar os materiais sensíveis dos seus móveis;",
    },
    {
      type: "Remoção eficaz de manchas, odores indesejados e sujeira acumulada ao longo do tempo;",
    },
    {
      type: "Trabalhamos com uma variedade de materiais, incluindo tecidos, couro, madeira e outros, adaptando a nossa abordagem para cada tipo de superfície;",
    },
    {
      type: "Limpeza para tapetes;",
    },
    {
      type: "Cada peça de mobiliário é única, e o nosso atendimento é personalizado para atender às necessidades específicas de cada cliente",
    },
  ];

  return (
    <>
      <div className="-mx-4 flex flex-wrap justify-center px-4">
        <div className="w-full">
          <div>
            <h2
              className="text-center text-2xl font-bold leading-tight text-black
             dark:text-white sm:text-4xl sm:leading-tight md:text-3xl"
            >
              Lavagem de Mobílias
            </h2>
            <div
              className=" mb-3 flex flex-wrap items-center justify-between border-b
             border-body-color border-opacity-10 pb-2 dark:border-white dark:border-opacity-10"
            ></div>
            <div>
              <div className="mb-5 w-full overflow-hidden rounded">
                <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                  <Image
                    src="/images/service/furniture/sofa1.png"
                    alt="image"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <p
                className="mb-5 text-justify text-base font-medium leading-relaxed 
              text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed
                xl:text-lg xl:leading-relaxed"
              >
                Na Bom Doza, entendemos que os seus móveis são mais do que
                simples peças de decoração - são parte integrante do seu espaço
                e refletem o seu estilo de vida. Apresentamos o nosso serviço
                especializado de Lavagem de Móveis, criado para renovar e
                revitalizar os seus estofados, tapetes e peças de mobiliário.
              </p>
              <p
                className="mb-5 text-justify text-base  font-medium leading-relaxed 
              text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed
                xl:text-lg xl:leading-relaxed"
              >
                Nossa equipe altamente qualificada utiliza técnicas avançadas e
                produtos de alta qualidade para garantir uma limpeza eficaz e
                duradoura. Desde a remoção de sujeira superficial até a atenção
                aos detalhes, estamos comprometidos em oferecer resultados
                excepcionais.
              </p>
              <h3
                className="font-xl mb-5 font-bold leading-tight text-black
               dark:text-white sm:text-2xl sm:leading-tight lg:text-xl
               lg:leading-tight xl:text-2xl xl:leading-tight"
              >
                Tipos de lavagem de mobílias da Bom Doza
              </h3>
              <p
                className="mb-10 text-justify text-base font-medium leading-relaxed
               text-body-color sm:text-lg sm:leading-relaxed lg:text-base
               lg:leading-relaxed xl:text-lg xl:leading-relaxed"
              >
                Na Bom Doza, comprometemo-nos a oferecer um serviço de lavagem
                de móveis que vai além das expectativas. Confie-nos para
                revitalizar seus móveis e criar um ambiente que você se orgulha
                de chamar de seu.
              </p>
              <ul className="mb-5 list-inside list-disc text-body-color">
                {services &&
                  services.map((topico, indice) => (
                    <li
                      key={indice}
                      className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg"
                    >
                      {topico.type}
                    </li>
                  ))}
              </ul>
              <h3
                className="font-xl mb-5 font-bold leading-tight text-black
               dark:text-white sm:text-2xl sm:leading-tight lg:text-xl
               lg:leading-tight xl:text-2xl xl:leading-tight"
              >
                Lavagem de móveis no conforto da sua casa ou empresa
              </h3>
              <p
                className="mb-10 text-justify text-base font-medium leading-relaxed
               text-body-color sm:text-lg sm:leading-relaxed lg:text-base
               lg:leading-relaxed xl:text-lg xl:leading-relaxed"
              >
                Na Bom Doza, estamos comprometidos em levar a excelência dos
                nossos serviços diretamente até você. Oferecemos o serviço de
                lavagem de móveis a domicílio, proporcionando a conveniência de
                revitalizar seus estofados e peças de mobiliário no conforto da
                sua casa ou empresa.
              </p>
              <h3
                className="font-xl mb-5 font-bold leading-tight text-black
               dark:text-white sm:text-2xl sm:leading-tight lg:text-xl
               lg:leading-tight xl:text-2xl xl:leading-tight"
              >
                Agende a lavagem dos seus móveis sem sair de casa:
              </h3>
              <p
                className="mb-10 text-justify text-base font-medium leading-relaxed
               text-body-color sm:text-lg sm:leading-relaxed lg:text-base
               lg:leading-relaxed xl:text-lg xl:leading-relaxed"
              >
                Não permita que a manutenção dos seus móveis seja uma tarefa
                complicada. Agende agora a lavagem dos seus móveis e desfrute da
                praticidade de receber serviços profissionais diretamente onde
                você está. Na Bom Doza, estamos comprometidos em oferecer
                soluções de limpeza eficientes e adaptáveis às suas necessidades
                e preferências.
              </p>
              <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                <p className="text-center text-base font-medium italic text-body-color">
                  Escolha o tipo de lavagem que melhor atende às necessidades do
                  seu veículo. Na Bom Doza, oferecemos uma variedade de opções
                  para garantir que seu carro receba o cuidado específico que
                  merece. Agende agora a lavagem do seu carro e experimente a
                  excelência em cuidados automotivos!
                </p>
                <span className="absolute left-0 top-0 z-[-1]">
                  <svg
                    width="132"
                    height="109"
                    viewBox="0 0 132 109"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      d="M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 
                      -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 
                      41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z"
                      fill="url(#paint0_linear_111:606)"
                    />
                    <path
                      opacity="0.5"
                      d="M33.3654 85.0768C24.1476 98.7862 1.19876 106.079 -9.12343 108.011L-38.876
                       22.9988L100.816 -25.8905C100.959 -23.8126 99.8798 -15.5499 94.4164
                        0.87754C87.5871 21.4119 61.9822 26.677 49.5641 38.7512C37.146 50.8253 44.8877
                         67.9401 33.3654 85.0768Z"
                      fill="url(#paint1_linear_111:606)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_111:606"
                        x1="94.7523"
                        y1="82.0246"
                        x2="8.40951"
                        y2="52.0609"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" stopOpacity="0.06" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_111:606"
                        x1="90.3206"
                        y1="58.4236"
                        x2="1.16149"
                        y2="50.8365"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" stopOpacity="0.06" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="absolute bottom-0 right-0 z-[-1]">
                  <svg
                    width="53"
                    height="30"
                    viewBox="0 0 53 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      opacity="0.8"
                      cx="37.5"
                      cy="37.5"
                      r="37.5"
                      fill="#4A6CF7"
                    />
                    <mask
                      id="mask0_111:596"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="75"
                      height="75"
                    >
                      <circle
                        opacity="0.8"
                        cx="37.5"
                        cy="37.5"
                        r="37.5"
                        fill="#4A6CF7"
                      />
                    </mask>
                    <g mask="url(#mask0_111:596)">
                      <circle
                        opacity="0.8"
                        cx="37.5"
                        cy="37.5"
                        r="37.5"
                        fill="url(#paint0_radial_111:596)"
                      />
                      <g opacity="0.8" filter="url(#filter0_f_111:596)">
                        <circle
                          cx="40.8089"
                          cy="19.853"
                          r="15.4412"
                          fill="white"
                        />
                      </g>
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_111:596"
                        x="4.36768"
                        y="-16.5881"
                        width="72.8823"
                        height="72.8823"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="10.5"
                          result="effect1_foregroundBlur_111:596"
                        />
                      </filter>
                      <radialGradient
                        id="paint0_radial_111:596"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(37.5 37.5) rotate(90) scale(40.2574)"
                      >
                        <stop stopOpacity="0.47" />
                        <stop offset="1" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FurnitureWashingDetails;
