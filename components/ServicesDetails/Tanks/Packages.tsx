// components/Tanks.tsx
import ServicePackage from '../servicepackage';
import TanksData from '../../data/tanksPackages.json'

const Tanks = () => {


  return (
    <div className="container mx-auto my-8">
        <div  className="mt-14 h-full text-center">
            <h1 className="text-xl font-bold">Serviço de Lavagem de tanques de água</h1>
            <p className="mt-4 text-body-color text-justify">
                Explore nossa solução especializada em lavagem de tanques, 
                concebidas para proporcionar um cuidado meticuloso ao seu equipamento,  
                removendo resíduos e impurezas que podem afetar o desempenho e a durabilidade.
            </p>

            <div className="container mx-auto my-8">
                <div className="">
                    <div className="flex flex-wrap justify-center">
                        {TanksData.map((pkg, index) => (
                            <ServicePackage key={index} {...pkg} />
                        ))}
                    </div>
                </div>
            </div>           
        </div>
    </div>
  );
};

export default Tanks;
