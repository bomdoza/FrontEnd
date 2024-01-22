import React from 'react';
import TeamMemberCard from '../TeamMenbemCard';

const TeamSection = () => {
  return (
    <section className=" py-12 md:py-14 lg:py-16 flex">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Fundadores e Equipe Inicial</h2>

        <p className='mb-5 text-base text-justify lg:text-xl text-body-color-dark'>
          Na BomDoza, a paixão e o compromisso com o serviço excepcional começam com nossos fundadores e a equipe inicial. 
          Conheça as mentes visionárias por trás da BomDoza:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamMemberCard
            name="Ana Silva"
            role="Co-fundador e CEO"
            bio="Com uma paixão duradoura por automóveis, Ana lidera nossa equipe com uma visão clara de fornecer serviços de lavagem excepcionais."
            profileImage="/images/user/userDefault.png" 
          />

          <TeamMemberCard
            name="Nome do Co-fundador"
            role="Especialista em Limpeza Residencial"
            bio="[Nome] é um especialista no cuidado de veículos. Com anos de experiência no setor, [Nome] lidera nossa equipe de serviços automotivos, garantindo que cada veículo receba a atenção e o carinho que merece."
            profileImage="/images/user/userDefault.png" 
          />

          <TeamMemberCard
            name="Rui Oliveira"
            role="Diretor de Operações"
            bio="Rui é o maestro por trás de nossas operações diárias, garantindo que cada detalhe seja executado com perfeição."
            profileImage="/images/user/userDefault.png" 
          />

        </div>
      </div>
    </section>
  );
};

export default TeamSection;
