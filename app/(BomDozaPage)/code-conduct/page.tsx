import Breadcrumb from "@/components/Common/Breadcrumb";

const Conduct = () => {
 const cod = [
   {
     title: "Integridade e Honestidade",
     desc: "Atuamos com honestidade e integridade em todas as nossas interações, mantendo a transparência em nossas práticas comerciais.",
   },
   {
     title: "Respeito e Diversidade",
     desc: "Valorizamos a diversidade e respeitamos as diferenças individuais. Tratamos todos com dignidade e cortesia, promovendo um ambiente inclusivo.",
   },
   {
     title: "Qualidade e Profissionalismo",
     desc: "Buscamos continuamente a excelência em nossos serviços, garantindo padrões de qualidade consistentes. Mantemos um comportamento profissional em todas as situações.",
   },
   {
     title: "Sustentabilidade e Responsabilidade Ambiental",
     desc: "Comprometemo-nos a minimizar nosso impacto ambiental, adotando práticas sustentáveis e responsáveis em todas as operações.",
   },
   {
     title: "Saúde e Segurança",
     desc: "Priorizamos a segurança e o bem-estar de nossa equipe e clientes. Cumprimos rigorosamente as normas de saúde e segurança no trabalho.",
   },
   {
     title: "Confidencialidade",
     desc: "Respeitamos a confidencialidade das informações confiadas a nós por clientes, colegas e parceiros de negócios.",
   },
   {
     title: "Cumprimento de Leis e Normas",
     desc: "Observamos e cumprimos todas as leis e regulamentações aplicáveis em todas as áreas de operação.",
   },
   {
     title: "Comunicação Clara e Aberta",
     desc: "Fomentamos uma comunicação aberta e eficaz, promovendo um ambiente em que as preocupações possam ser levantadas e resolvidas adequadamente.",
   },
   {
     title: "Responsabilidade Social",
     desc: "Contribuímos para o bem-estar das comunidades em que atuamos, participando ativamente de iniciativas sociais e filantrópicas.",
   },
   {
     title: "Atualização Contínua",
     desc: "Comprometemo-nos a aprender e evoluir continuamente, buscando oportunidades de melhoria em nossas práticas e processos.",
   },
 ];

 return (
   <>
     <Breadcrumb pageName="Código de Conduta" description="" />
     <section className="pb-[50px] pt-[25px]">
       <div className="container">
         <div className="-mx-4 flex flex-wrap justify-center">
           <div className="w-full px-4 lg:w-8/12">
             <div>
               <div>
                 <p className="mb-10 text-justify text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                   Na Bom Doza, estamos comprometidos em manter os mais altos
                   padrões éticos, promovendo um ambiente de trabalho
                   respeitoso, justo e responsável. Nosso Código de Conduta
                   serve como um guia para todos os membros da equipe,
                   refletindo nossos valores e princípios fundamentais.
                 </p>
                 { cod.map((item, index) => (
                    <div key={index}>
                   <h3 className="font-xl mb-5 font-bold leading-tight text-black
                       dark:text-white sm:text-2xl sm:leading-tight lg:text-xl
                        lg:leading-tight xl:text-2xl xl:leading-tight">
                        {item.title}
                      </h3>
                   <p className="mb-5 text-justify text-base font-medium leading-relaxed
                       text-body-color sm:text-lg sm:leading-relaxed lg:text-base
                        lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                 <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                   <p className="text-center text-base font-medium italic text-body-color">
                     Ao seguir este Código de Conduta, cada membro da equipe
                     Bom Doza contribui para a construção de uma empresa ética,
                     responsável e de sucesso. Este código reflete os valores
                     que nos orientam diariamente e nos ajuda a construir
                     relacionamentos duradouros com nossos clientes, parceiros e
                     colegas de equipe.
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
}
export default Conduct;