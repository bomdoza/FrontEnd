// components/PartsRestoration.tsx
import ServicePackage from '../servicepackage';
import PartsRestorationData from '../../data/restorationPackages.json'

const PartsRestoration = () => {


  return (
    <div className="container mx-auto my-10">
        <div  className="mt-14 h-full text-center">
            <h1 className="text-xl font-bold">Pacotes de Serviços de Restauro de Peças</h1>
            <p className="mt-4 text-body-color text-justify">
            Explore nossas opções exclusivas de serviços de restauração automotiva,
            abrangem a revitalização dos faróis até a restauração de superfícies plásticas, 
            proporcionando uma experiência completa de renovação e cuidado para o seu automóvel.
            </p>

            <div className="container mx-auto my-8">
                <div className="">
                    <div className="flex flex-wrap justify-center">
                        {PartsRestorationData.map((pkg, index) => (
                            <ServicePackage key={index} {...pkg} />
                        ))}
                    </div>
                </div>
            </div>           
        </div>
    </div>
  );
};

export default PartsRestoration;
