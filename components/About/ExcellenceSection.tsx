import React from 'react';
import AboutData from "./AboutData";
import Singlecomp from './SingleCompromise';

const ExcellenceSection = () => {
  return (
    <section className="py-16 sm:py-12 md:py-14 lg:py-14 mb-16 sm:mb-2">
        <div className="container mx-auto">

            <h2 className="text-2xl font-bold text-black dark:text-white sm:text-3xl mb-4 text-center">Compromisso com a Excelência desde o Início</h2>

            <p className='text-base text-justify !leading-relaxed text-body-color md:text-lg mb-8'>
            Na BomDoza, a busca incessante pela excelência é uma parte intrínseca de nossa identidade. 
            Desde os primeiros dias da nossa jornada, comprometemo-nos a proporcionar aos nossos clientes 
            uma experiência de lavagem de carros e serviços de limpeza que transcende as expectativas convencionais.
            </p>

            <div className="grid grid-cols-1 gap-x-10 gap-y-32 sm:gap-y-20 md:gap-y-28 lg:gap-y-20 md:grid-cols-2 lg:grid-cols-2">
            {AboutData.map((feature) => (
                <Singlecomp key={feature.id} comp={feature} />            
            ))}
          </div>

        </div>
    </section>
);
};

export default ExcellenceSection;