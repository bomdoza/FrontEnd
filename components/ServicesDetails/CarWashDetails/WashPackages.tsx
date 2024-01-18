// components/CarWashDetails.tsx
import ServicePackage from '../servicepackage';
import CarWashDetailsData from '../../data/carPackages.json';

const CarWashDetails = () => {


  return (
    <div className="container mx-auto my-10">
        <div  className="mt-14 h-full text-center">
            <h1 className="text-xl font-bold">Pacotes de Serviços de Lavagem de Veículos</h1>
            <p className="mt-4 text-body-color text-justify">
            Descubra nossos pacotes de serviços personalizados para lavagem de veículos, projetados para proporcionar
            uma experiência de cuidado especial ao seu carro. Cada pacote oferece uma variedade de serviços especializados
            para manter seu veículo limpo, protegido e com uma aparência impecável.
            </p>

            <div className="container mx-auto my-8">
                <div className="">
                    <div className="flex flex-wrap justify-center">
                        {CarWashDetailsData.map((pkg, index) => (
                            <ServicePackage key={index} {...pkg} />
                        ))}
                    </div>
                </div>
            </div>           
        </div>
    </div>
  );
};

export default CarWashDetails;
