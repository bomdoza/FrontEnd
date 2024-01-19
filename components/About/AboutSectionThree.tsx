import React from 'react'
import DivTitle from '../Common/DivTitle'
import SectionTitle from '../Common/SectionTitle'
import Image from 'next/image'

function AboutSectionThree() {
    const checkIcon = (
        <svg 
        width="1em" 
        height="1em" 
        viewBox="0 0 24 24" 
        className="fill-current">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8-1.41-1.42z" />
        </svg>
      );
    
      const List = ({ text }) => (
        <p className="mb-5 flex items-center text-lg font-medium text-body-color">
          <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
            {checkIcon}
          </span>
          {text}
        </p>
      );

  return (

    <section className="pt-16 md:pt-20 lg:pt-24">
        <div className='container flex flex-wrap items-center'>

            <div className='w-full px-4 lg:w-1/2'>

                <SectionTitle 
                title='É hora de limpar seus pertences'
                paragraph=''
                mb='30px'
                />
                <DivTitle 
                title=''
                paragraph='É hora de elevar o padrão de limpeza dos seus pertences! Na BomDoza, 
                dedicamos nossa expertise em transformar o comum em impecável. Seja o seu carro, sofá, 
                tapete ou qualquer outro item, nossa equipe especializada está pronta para proporcionar uma limpeza excepcional.'
                mb='50px'
                />

                <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
                    <List text="Somos um serviço profissional de lavagem" />
                    <List text="Usamos os melhores materias de lavagem" />
                    <List text="Preocupamos com a satisfação dos nossos clientes" />           
                </div>

            </div>

            <div className='w-full px-4 lg:w-1/2 relative'>
                <div className="wow fadeInRight relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                    data-wow-delay=".2s"
                    > 
                    <Image
                        src="/images/servicos/pecas/man-polish-car-garage.jpg"
                        alt='bomdoza'
                        fill={true}
                    />         
                </div>
            </div>

        </div>       
    </section>

  )

}

export default AboutSectionThree