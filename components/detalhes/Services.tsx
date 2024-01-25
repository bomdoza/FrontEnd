"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import serviceData from "@/components/data/services.json";
import ServicePackage from "@/components/ServicesDetails/servicepackage";

const ServiceDetailsPage = ({ params }) => {

    const router = useRouter();
    const [selectedService, setSelectedService] = useState(null);
    //const id = params.idService;
    const id = 1;
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await serviceData.find((service) => service.id == id);
          if (!data) {
            router.push("/404"); // ou redirecionar para uma página de serviço não encontrado
          }
          setSelectedService(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, [id, router]);
  
    if (!selectedService) {
      // Adicione lógica para lidar com o caso em que os dados do serviço ainda estão sendo buscados
      return <div>Carregando...</div>;
    }
  
    
  const postUrl = typeof window !== "undefined" ? window.location.href : "";

  const popularTags = Array.from(
    new Set(serviceData.flatMap((service) => service.tags)),
  );

  return (
    <>
    <section className="pb-[50px] pt-[50px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12 bg-slate-800">
              <div>
                <h2 className="my-8 text-center text-2xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-3xl">
                  {selectedService && selectedService.title}
                </h2>
                
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                    <div className="mb-5 mr-10 flex items-center justify-center">

                      <div className="w-full">
                        <span className="mb-1 text-base font-medium text-body-color">
                          {" "}
                          <span>
                            {selectedService && selectedService.author.name}
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="mb-5 flex items-center">
                      <p className="mr-5 flex items-center text-base font-medium text-body-color">
                        <span className="mr-3">
                        
                        </span>
                        {selectedService && selectedService.slogan}
                      </p>
                      {/*
                      <p className="mr-5 flex items-center text-base font-medium text-body-color">
                        <span className="mr-3">
                          <svg
                            width="18"
                            height="13"
                            viewBox="0 0 18 13"
                            className="fill-current"
                          >
                            <path d="M15.6375 0H1.6875C0.759375 0 0 0.759375 0 1.6875V10.6875C0 11.3062 0.309375 11.8406 0.84375 12.15C1.09687 12.2906 1.40625 12.375 1.6875 12.375C1.96875 12.375 2.25 12.2906 2.53125 12.15L5.00625 10.7156C5.11875 10.6594 5.23125 10.6312 5.34375 10.6312H15.6094C16.5375 10.6312 17.2969 9.87187 17.2969 8.94375V1.6875C17.325 0.759375 16.5656 0 15.6375 0ZM16.3406 8.94375C16.3406 9.3375 16.0312 9.64687 15.6375 9.64687H5.37187C5.09062 9.64687 4.78125 9.73125 4.52812 9.87187L2.05313 11.3063C1.82812 11.4187 1.575 11.4187 1.35 11.3063C1.125 11.1938 1.0125 10.9688 1.0125 10.7156V1.6875C1.0125 1.29375 1.32188 0.984375 1.71563 0.984375H15.6656C16.0594 0.984375 16.3687 1.29375 16.3687 1.6875V8.94375H16.3406Z" />
                            <path d="M12.2342 3.375H4.69668C4.41543 3.375 4.19043 3.6 4.19043 3.88125C4.19043 4.1625 4.41543 4.3875 4.69668 4.3875H12.2623C12.5435 4.3875 12.7685 4.1625 12.7685 3.88125C12.7685 3.6 12.5154 3.375 12.2342 3.375Z" />
                            <path d="M11.0529 6.55322H4.69668C4.41543 6.55322 4.19043 6.77822 4.19043 7.05947C4.19043 7.34072 4.41543 7.56572 4.69668 7.56572H11.0811C11.3623 7.56572 11.5873 7.34072 11.5873 7.05947C11.5873 6.77822 11.3342 6.55322 11.0529 6.55322Z" />
                          </svg>
                        </span>
                        50
                      </p>
                      <p className="flex items-center text-base font-medium text-body-color">
                        <span className="mr-3">
                          <svg
                            width="20"
                            height="12"
                            viewBox="0 0 20 12"
                            className="fill-current"
                          >
                            <path d="M10.2559 3.8125C9.03711 3.8125 8.06836 4.8125 8.06836 6C8.06836 7.1875 9.06836 8.1875 10.2559 8.1875C11.4434 8.1875 12.4434 7.1875 12.4434 6C12.4434 4.8125 11.4746 3.8125 10.2559 3.8125ZM10.2559 7.09375C9.66211 7.09375 9.16211 6.59375 9.16211 6C9.16211 5.40625 9.66211 4.90625 10.2559 4.90625C10.8496 4.90625 11.3496 5.40625 11.3496 6C11.3496 6.59375 10.8496 7.09375 10.2559 7.09375Z" />
                            <path d="M19.7559 5.625C17.6934 2.375 14.1309 0.4375 10.2559 0.4375C6.38086 0.4375 2.81836 2.375 0.755859 5.625C0.630859 5.84375 0.630859 6.125 0.755859 6.34375C2.81836 9.59375 6.38086 11.5312 10.2559 11.5312C14.1309 11.5312 17.6934 9.59375 19.7559 6.34375C19.9121 6.125 19.9121 5.84375 19.7559 5.625ZM10.2559 10.4375C6.84961 10.4375 3.69336 8.78125 1.81836 5.96875C3.69336 3.1875 6.84961 1.53125 10.2559 1.53125C13.6621 1.53125 16.8184 3.1875 18.6934 5.96875C16.8184 8.78125 13.6621 10.4375 10.2559 10.4375Z" />
                          </svg>
                        </span>
                        35
                      </p>*/}
                    </div>
                  </div>
                  <div className="mb-5">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                    >
                      {selectedService && selectedService.tags}
                    </a>
                  </div>
                </div>
                
                <div>
                  <p className="mb-10 text-justify text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    {selectedService && selectedService.paragraph}
                  </p>
                  <div className="mb-4 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      {selectedService && (
                        <Image
                          src={selectedService.image}
                          alt="image"
                          fill
                          className="object-cover object-center"
                        />
                      )}
                    </div>
                    <div className="relative bottom-12 md:bottom-16 left-12 md:left-20">
                      {/* Adicione aqui o ícone que você deseja usar */}
                      <div className="bg-slate-400 rounded-full h-14 w- md:h-20 md:w-20 flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="3em"
                        width="3em"
                      >
                        <path d="M16 6l3 4h2c1.11 0 2 .89 2 2v3h-2a3 3 0 01-3 3 3 3 0 01-3-3H9a3 3 0 01-3 3 3 3 0 01-3-3H1v-3c0-1.11.89-2 2-2l3-4h10m-5.5 1.5H6.75L4.86 10h5.64V7.5m1.5 0V10h5.14l-1.89-2.5H12m-6 6A1.5 1.5 0 004.5 15 1.5 1.5 0 006 16.5 1.5 1.5 0 007.5 15 1.5 1.5 0 006 13.5m12 0a1.5 1.5 0 00-1.5 1.5 1.5 1.5 0 001.5 1.5 1.5 1.5 0 001.5-1.5 1.5 1.5 0 00-1.5-1.5z" />
                      </svg>
                      </div>
                    </div>
                  </div>

                  <p className="mb-8 text-justify text-base  font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    {selectedService && selectedService.paragraph2}
                  </p>
                  <div className="container mx-auto my-8">
                    <div className="">
                        <div className="flex flex-wrap justify-center">
                            {selectedService && selectedService.packages.map((pkg, index) => (
                                <ServicePackage key={index} {...pkg} />
                            ))}
                        </div>
                    </div>
                  </div>  
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    {selectedService && selectedService.topicDes.title}
                  </h3>
                  <p className="mb-10 text-base text-justify font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    {selectedService && selectedService.topicDes.desc}
                  </p>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    {selectedService && selectedService.topicDes.topic.map((tópico, índice) => (
                      <li
                        key={índice}
                        className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg"
                      >
                        {tópico}
                      </li>
                    ))}
                  </ul>
       
                  <div className="container mx-auto my-8">
                    <div className="flex overflow-auto justify-center">
                        <div className="flex flex-row ">
                            {selectedService && selectedService.imageSection.map((url, index) => (
                                <img key={index} src={url} alt={`Image ${index + 1}`} className="rounded-lg w-96 h-64 object-cover mx-3" />
                            ))}
                        </div>
                    </div>
                  </div>

                  <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                    <p className="text-center text-base font-medium italic text-body-color">
                      {selectedService && selectedService.concluding}
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

                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      <h4 className="mb-3 text-sm font-medium text-body-color">
                        Tags populares:
                      </h4>
                      <div className="flex items-center">
                        {popularTags &&
                          popularTags
                            .slice(0, 2)
                            .map((tag, index) => (
                              <TagButton key={index} text={tag} />
                            ))}
                      </div>
                    </div>
                    <div className="mb-5">
                      <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right">
                        Compartilhe esta postagem:
                      </h5>
                      <div className="flex items-center sm:justify-end">
                      <SharePost postTitle={""} postUrl={postUrl} />
                      </div>
                    </div>
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

export default ServiceDetailsPage;
