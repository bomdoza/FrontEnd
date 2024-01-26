import Breadcrumb from "@/components/Common/Breadcrumb";

const Conduct = () => {
  const TermUse = [

    {
      title: "1. Uso dos Serviços",
      desc: "Você concorda em utilizar os serviços da Bom Doza de acordo com as leis e regulamentações locais. A Bom Doza reserva-se o direito de recusar serviços a qualquer pessoa por qualquer motivo a qualquer momento.",
    },
    {
      title: "2. Responsabilidades do Usuário",
      desc: "Ao utilizar nossos serviços, você concorda em fornecer informações precisas e atualizadas. Você é responsável por manter a confidencialidade de qualquer informação de login associada à sua conta.",
    },
    {
      title: "3. Conteúdo do Usuário",
      desc: "Ao fornecer conteúdo através de nossos serviços, você concede à Bom Doza uma licença mundial, não exclusiva, isenta de royalties, para usar, exibir e distribuir esse conteúdo de acordo com as configurações de privacidade que você escolher.",
    },
    {
      title: "4. Interrupção ou Modificação dos Serviços",
      desc: "A Bom Doza reserva-se o direito de interromper ou modificar seus serviços a qualquer momento, por qualquer motivo, com ou sem aviso prévio. Não nos responsabilizamos por qualquer interrupção ou modificação dos serviços.",
    },
    {
      title: "5. Privacidade",
      desc: "A política de privacidade da Bom Doza descreve como suas informações pessoais são coletadas, utilizadas e compartilhadas. Ao utilizar nossos serviços, você concorda com a coleta e uso de suas informações de acordo com nossa política de privacidade.",
    },
    {
      title: "6. Limitação de Responsabilidade",
      desc: "A Bom Doza não se responsabiliza por danos diretos, indiretos, incidentais, especiais, consequenciais ou punitivos resultantes do uso ou incapacidade de usar nossos serviços.",
    },
    {
      title: "7. Alterações nos Termos de Uso",
      desc: "A Bom Doza reserva-se o direito de atualizar ou modificar estes Termos de Uso a qualquer momento. As alterações serão comunicadas aos usuários através dos meios apropriados. O uso contínuo dos nossos serviços após qualquer alteração nos Termos de Uso constituirá aceitação dessas alterações.",
    },
    {
      title: "8. Contato",
      desc: "Para dúvidas, reclamações ou informações adicionais sobre estes Termos de Uso, entre em contato conosco através dos meios de comunicação disponíveis em nosso site.",
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
                    Ao acessar e utilizar os serviços oferecidos pela BomDoza,
                    você concorda com os seguintes termos de uso. Leia
                    atentamente este documento antes de continuar a utilizar
                    nossos serviços.
                  </p>
                  {TermUse.map((item, index) => (
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
