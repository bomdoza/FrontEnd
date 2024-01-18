// components/furnitureWash.tsx
import ServicePackage from '../servicepackage';
import furnitureWashData from '../../data/furniturePackages.json'

const furnitureWash = () => {


  return (
    <div className="container mx-auto my-8">
        <div  className="mt-14 h-full text-center">
            <h1 className="text-xl font-bold">Serviço de Lavagem de Mobílias</h1>
            <p className="mt-4 text-body-color text-justify">
                Explore nossas soluções especializadas em lavagem de mobílias, 
                concebidas para proporcionar um cuidado meticuloso ao seu equipamento. 
                Cada serviço é projetado para garantir a limpeza eficaz, 
                removendo resíduos e impurezas que podem afetar o desempenho e a durabilidade.
            </p>

            <div className="container mx-auto my-8">
                <div className="">
                    <div className="flex flex-wrap justify-center">
                        {furnitureWashData.map((pkg, index) => (
                            <ServicePackage key={index} {...pkg} />
                        ))}
                    </div>
                </div>
            </div>           
        </div>
    </div>
  );
};

export default furnitureWash;
