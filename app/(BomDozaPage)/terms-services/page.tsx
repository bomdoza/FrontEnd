import Breadcrumb from "@/components/Common/Breadcrumb";

const Conduct = () => {
  const Term = [
    {
      title: "Descrição dos Serviços",
      desc: "A Bom Doza oferece uma variedade de serviços de lavagem e cuidados, incluindo, mas não se limitando a, lavagem de carros, lavagem de móveis, restauro de plásticos, lavagem de tanques, entre outros. Os detalhes específicos de cada serviço estão disponíveis em nosso site e podem estar sujeitos a atualizações periódicas.",
    },
    {
      title: "Agendamento e Cancelamento",
      desc: "O agendamento de serviços pode ser realizado através do nosso site, aplicativo móvel ou por contato direto com a nossa equipe. O cancelamento de serviços agendados está sujeito a políticas específicas, as quais podem variar conforme o tipo de serviço. Informações detalhadas sobre políticas de agendamento e cancelamento estão disponíveis mediante solicitação.",
    },
    {
      title: "Pagamentos e Faturamento",
      desc: "Os pagamentos pelos serviços prestados pela Bom Doza podem ser realizados no momento da prestação do serviço ou conforme acordado previamente. Aceitamos métodos de pagamento específicos, detalhados em nossas informações de faturamento.",
    },
    {
      title: "Responsabilidade e Garantia",
      desc: "A Bom Doza compromete-se a fornecer serviços de alta qualidade, utilizando métodos e produtos adequados a cada necessidade. Garantimos a satisfação do cliente e estamos abertos a resolver quaisquer problemas que possam surgir durante ou após a prestação dos serviços.",
    },
    {
      title: "Privacidade e Segurança",
      desc: "Respeitamos a privacidade dos nossos clientes e garantimos que as informações fornecidas durante a prestação dos serviços serão tratadas com a máxima confidencialidade. Para obter mais informações sobre nossa política de privacidade, consulte a seção específica em nosso site.",
    },
    {
      title: "Alterações nos Termos de Serviço",
      desc: "A Bom Doza reserva-se o direito de atualizar ou modificar estes Termos de Serviço a qualquer momento. As alterações serão comunicadas aos clientes através dos meios apropriados. O uso contínuo dos nossos serviços após qualquer alteração nos Termos de Serviço constituirá aceitação dessas alterações.",
    },
    {
      title: "Contato",
      desc: "Para quaisquer dúvidas, reclamações ou informações adicionais, entre em contato conosco através dos meios de comunicação disponíveis em nosso site.\n\nAo utilizar os serviços da Bom Doza, você concorda em cumprir estes Termos de Serviço. Agradecemos pela escolha dos nossos serviços e estamos comprometidos em proporcionar uma experiência de qualidade.",
    },
  ];

  return (
    <>
      <Breadcrumb pageName="Termos de Serviços" description="" />
      <section className="pb-[50px] pt-[25px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <div>
                  <p className="mb-10 text-justify text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Ao utilizar os serviços prestados pela Bom Doza, você
                    concorda com os seguintes termos e condições. Recomendamos a
                    leitura cuidadosa deste documento antes de utilizar nossos
                    serviços.
                  </p>
                  {Term.map((item, index) => (
                    <div key={index}>
                      <h3
                        className="font-xl mb-5 font-bold leading-tight text-black
                       dark:text-white sm:text-2xl sm:leading-tight lg:text-xl
                        lg:leading-tight xl:text-2xl xl:leading-tight"
                      >
                        {item.title}
                      </h3>
                      <p
                        className="mb-5 text-justify text-base font-medium leading-relaxed
                       text-body-color sm:text-lg sm:leading-relaxed lg:text-base
                        lg:leading-relaxed xl:text-lg xl:leading-relaxed"
                      >
                        {item.desc}
                      </p>
                    </div>
                  ))}
                  <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                    <p className="text-center text-base font-medium italic text-body-color">
                      Ao utilizar os serviços da Bom Doza, você concorda em
                      cumprir estes Termos de Serviço. Agradecemos pela escolha
                      dos nossos serviços e estamos comprometidos em
                      proporcionar uma experiência de qualidade.
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
                          d="M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z"
                          fill="url(#paint0_linear_111:606)"
                        />
                        <path
                          opacity="0.5"
                          d="M33.3654 85.0768C24.1476 98.7862 1.19876 106.079 -9.12343 108.011L-38.876 22.9988L100.816 -25.8905C100.959 -23.8126 99.8798 -15.5499 94.4164 0.87754C87.5871 21.4119 61.9822 26.677 49.5641 38.7512C37.146 50.8253 44.8877 67.9401 33.3654 85.0768Z"
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
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
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
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
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
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
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
        </div>
      </section>
    </>
  );
};
export default Conduct;
